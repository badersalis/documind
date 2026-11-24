// Renders every .slide of a piece to PNG (and to a one-page-per-slide PDF for LinkedIn pieces).
// Usage (from the repo root):  npm i --no-save playwright-core   then
//   node design/social/render.js design/social/pieces/<piece>.html media/social/<date>
// Uses the installed Microsoft Edge (channel "msedge"); no browser download.
const { chromium } = require("playwright-core");
const fs = require("fs"), path = require("path"), url = require("url");

const [piece, out = "media/social"] = process.argv.slice(2);
if (!piece) { console.error("usage: node render.js <piece.html> [outDir]"); process.exit(1); }
const stem = path.basename(piece, ".html");

(async () => {
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch({ channel: "msedge" });
  const p = await (await b.newContext({ viewport: { width: 1200, height: 1000 }, deviceScaleFactor: 1 })).newPage();
  await p.goto(url.pathToFileURL(path.resolve(piece)).href, { waitUntil: "load" });
  await p.evaluate(() => document.fonts.ready);
  const broken = await p.evaluate(() => [...document.images].filter(i => !i.complete || !i.naturalWidth).map(i => i.src));
  if (broken.length) throw new Error("images not found (captures live in git-ignored media/): " + broken.join(", "));
  // Overflow guard: text must stay inside the safe area.
  const over = await p.evaluate(() => [...document.querySelectorAll(".safe")].flatMap(s => {
    const r = s.getBoundingClientRect();
    return [...s.querySelectorAll("*")].filter(e => { if (e.closest(".crop")) return false; const q = e.getBoundingClientRect(); return q.width && (q.bottom > r.bottom + 1 || q.right > r.right + 1); })
      .map(e => s.closest(".slide").dataset.name + ": " + (e.textContent || e.tagName).trim().slice(0, 40));
  }));
  if (over.length) console.warn("WARNING outside safe area:\n  " + [...new Set(over)].join("\n  "));
  const slides = await p.$$(".slide");
  for (const s of slides) {
    const n = await s.getAttribute("data-name");
    const f = path.join(out, `${stem}_${n}.png`);
    await s.screenshot({ path: f });
    console.log(f);
  }
  if (stem.includes("linkedin")) {
    const box = await slides[0].boundingBox();
    await p.addStyleTag({ content: `body{background:none}.sheet{display:block;padding:0}.slide{break-after:page}@page{size:${box.width}px ${box.height}px;margin:0}` });
    const f = path.join(out, `${stem}.pdf`);
    await p.pdf({ path: f, width: box.width + "px", height: box.height + "px", printBackground: true, preferCSSPageSize: true });
    console.log(f);
  }
  await b.close();
})();
