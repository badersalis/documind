# Design Research — Tikéo marketing site

_Prepared 2026-11-23 · Phase 2 (deliverable 2) · Owner: Director · Status: input to `visual-direction.md`_

**Inputs:** `brand/positioning.md` (§7 tone, §8 homepage hierarchy), `research/competitor-analysis.md` §7, `research/customer-personas.md` (journey table), `research/market-research.md` (digital context), D-005, D-009, D-012, D-013.
**Evidence basis:** category observations come from the Phase 1 competitor analysis plus the Director's general knowledge of these sites' public marketing pages. **No new site audits, screenshots or user tests were done for this document.** Treat visual observations of competitor sites as `[obs, unverified]`, and re-check them before quoting any of them in a deck or in copy.

---

## 1. Summary
- **The category looks the same everywhere.** International capture tools (Dext, Expensify, Zoho Expense, Pennylane) use a white or pale ground, one saturated brand colour, a laptop or phone mock-up with floating "extracted field" chips, logo walls and accuracy figures. Local suites (Madata) add WhatsApp, payment-rail logos and "n°1" or "tout-en-un" claims. `[obs, unverified]`
- **Tikéo cannot use the usual proof.** It has no customer logos, testimonials, accuracy figures or badges (positioning §6). Its visuals must *show the workflow honestly* instead of borrowing credibility.
- **The receipt is the obvious, ownable subject.** The name comes from *ticket de caisse*. The product turns a receipt into checked data. The most familiar local object (the thermal receipt, the stamped supplier invoice, the handwritten carnet receipt) is also the product's input. No competitor makes the document itself the hero. `[obs]`
- **The audience is split by device.** P1/P2 arrive on mid-range Android from WhatsApp or social; P3 accountants arrive on desktop from LinkedIn or a referral (personas, journey table). The visual system must work at 320 px on 4G and still look rigorous on a 1440 px screen.
- **Recommendation:** a sober, document-led system built around the receipt and the act of checking ("vérifié par vous"), with no stock photography, illustrated in SVG so it weighs almost nothing. See `visual-direction.md`.

---

## 2. Category conventions

| Pattern | Who uses it `[obs, unverified]` | Keep / avoid for Tikéo | Why |
|---|---|---|---|
| Device mock-up with floating extracted-field chips | Dext, Expensify, Zoho, Pennylane | **Adapt.** Show the receipt itself, with fields highlighted on the document and a review step | The chip cloud implies "automatic" (R1). Showing the review step supports pillar 4. |
| Accuracy % and speed claims ("99 %", "en un clic") | Dext, Kolonell, Pennylane | **Avoid** | Forbidden by the claims list (positioning §6) |
| Logo walls, testimonials, ratings | Most competitors | **Avoid** until real | None exist; inventing them is forbidden |
| Compliance badges (ISO, RGPD, "FNE certifié") | Madata, some EU tools | **Avoid** | D-003, R5 |
| Gradient "AI" visuals, sparkles, glowing brains | Common across AI SaaS | **Avoid** | Tone: "pas d'IA dans les titres", order over magic (D-012) |
| Smiling-office stock photography | Common | **Avoid** | Generic. Stock "African business" imagery conflicts with "local sans folklore" (positioning §7). |
| Local proof: FCFA, SYSCOHADA, WhatsApp, mobile-money logos | Madata, Kolonell | **Keep (vocabulary), avoid (logos)** | Local words are allowed copy. Payment or WhatsApp logos would imply integrations that aren't confirmed. |
| Pricing in FCFA up front | Madata | **Not now** | D-007: no pricing page by default |
| Dense feature grids with icons | Most | **Use sparingly** | The four pillars fit a short, typographic layout better than icon grids |

### What the category gets right (worth matching)
- **Concrete artefacts:** you see an invoice and the data that comes out of it.
- **Short step sequences** (photo → check → export) that map to the product.
- **Calm, high-contrast UI** that suits money and accounting.

### Where the whitespace is visually
1. **Show the document, not the device.** A recognisably Ivorian receipt (FCFA, TVA 18 %, a supplier in Cocody or Treichville, a stamp) carries both "local" and "what it does" in one picture.
2. **Show the human check.** A highlighted field, a suggested SYSCOHADA account and a "Valider" action make "vous gardez la main" visible.
3. **Paper-like rigour for accountants.** Ruled lines, aligned figures and tabular numbers read as professional to P3 without a separate visual language.

---

## 3. Local context that affects design

| Factor | Evidence | Design implication |
|---|---|---|
| ~53 % mobile / ~47 % desktop web traffic, volatile | StatCounter Oct 2026 (E8) | Mobile-first from 320 px with equal desktop polish (brief must-have) |
| Mid-range Android, variable 4G, data cost | Market research §1 (inference) | Light page: SVG illustration, no hero video, no stock photo above the fold, 2 font families max, subsetted |
| WhatsApp is the default work channel | Personas (L-confidence) | Share previews (Open Graph image) must read well as a small WhatsApp card |
| French with accents everywhere (é, è, à, ç, œ, «  ») | D-005; the brand name itself has an é | Fonts must cover Latin Extended. French guillemets and thin no-break spaces before « ; : ! ? » must render correctly. |
| French text runs ~15–25 % longer than English | General localisation practice | Leave room in buttons and headings; no fixed-width CTAs |
| Real document types: thermal receipts, handwritten carnets, stamped invoices, FNE invoices with QR codes | Competitor analysis §2 / pillar 2 | Illustrations use these forms. FNE QR appears only as context, never as a Tikéo feature (R5). |
| "Local without folklore" | Positioning §7 | No wax-print patterns, kente motifs or map-of-Africa graphics. Local is signalled through real details: place names, FCFA, document types. |

---

## 4. Technical and accessibility constraints the direction must meet
- **WCAG 2.2 AA:** body text ≥ 4.5:1, large text and UI parts ≥ 3:1, visible focus, 44 px targets, nothing conveyed by colour alone (for example, "validé" uses an icon and a word, not only green).
- **Performance budget (proposed):** LCP < 2.5 s on a mid-range Android over 4G; hero image is inline SVG; total fonts ≤ ~90 KB (woff2, subset latin + latin-ext); no layout shift from fonts (`next/font` with fallback metrics).
- **Dark mode:** not required for launch. The palette below defines dark values so it can be added without redesign.
- **Maintainability:** colours, type and spacing ship as Tailwind tokens; illustrations are components with props (amount, supplier, category) so copy changes don't need a designer.

---

## 5. Open questions
1. Are any real (anonymised) Ivorian receipts available to base illustrations on? If not, the illustrations will be composites drawn from public examples, with fictional supplier names.
2. Will a founder photo or "made in Abidjan" story be used (brief Q4)? It changes whether photography appears at all.
3. Does the founder have colour preferences or associations to avoid (for example, party-political colours)?
