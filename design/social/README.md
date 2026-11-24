# Tikéo social kit

Code-rendered social templates. Rules: `docs/design/social-visual-system.md`.

```
design/social/
  kit.css            tokens, type scale, components
  fonts/             Schibsted Grotesk 700, Inter (variable), IBM Plex Mono 400 — latin subsets, SIL OFL 1.1
  pieces/            one HTML file per piece: <date>_<platform>_<slug>.html
  render.js          slides → PNG (+ PDF for LinkedIn)
```

## Make a new piece

1. Copy the closest file in `pieces/` and rename it `<date>_<platform>_<slug>.html`.
2. Keep one `<section class="slide f-4x5 g-…" data-name="01">` per slide. Change only the text, the ground (`g-stamp`, `g-paper`, `g-receipt`) and the counter.
3. Product drawings must come from a real capture listed in `docs/design/asset-register.csv`, in a `.doc.crop` frame, with the `.concept` tag.
4. Open the file in a browser to preview.

## Render

```sh
npm i --no-save playwright-core          # once; uses the installed Microsoft Edge
node design/social/render.js design/social/pieces/<piece>.html media/social/<date>
```

Outputs are git-ignored (`/media/`). Add each export to the asset register. The script stops if an image is missing (captures live in `media/demo/`) and warns if text leaves the safe area.

## Fonts

All three fonts come from Google Fonts under the SIL Open Font License 1.1 (https://openfontlicense.org) and are the same latin subsets the site self-hosts. They may be used and redistributed with the kit; they may not be sold on their own.
