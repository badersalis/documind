# Asset Sourcing — Tikéo

_Prepared 2026-11-24 · Phase 2 (deliverable 2) · Owner: Director · Status: plan; nothing downloaded or purchased yet_

**Inputs:** `brand/visual-direction.md` (Direction A, approved D-014), `brand/design-research.md` §4 (performance and accessibility constraints).
**Principle:** every asset is either **free under an open licence** or **made in-house as SVG**. No stock photography, no paid fonts, no paid icon sets. Founder approval is needed before any paid asset is added (brief: budget).

---

## 1. Licence register

Re-check each licence file when the asset is added to the codebase and copy it into `licenses/` (or keep the npm package's own licence). Licence names below are from the Director's knowledge and have not been re-checked today.

| Asset | Source | Licence | Use | Commercial use | Attribution | Status |
|---|---|---|---|---|---|---|
| Schibsted Grotesk (500–700) | Google Fonts, via `next/font/google` | SIL Open Font License 1.1 | Display headings, wordmark base | Yes | Not required on the site; keep the licence text in the repo | To add at build |
| Inter (400/500/600) | Google Fonts, via `next/font/google` | SIL OFL 1.1 | Body text, UI, tabular figures | Yes | As above | To add at build |
| IBM Plex Mono (400) | Google Fonts, via `next/font/google` | SIL OFL 1.1 | Receipt lettering in illustrations only | Yes | As above | To add at build |
| Lucide icons | npm `lucide-react` | ISC | UI icons, 1.5 px stroke | Yes | Keep the licence notice (bundled in the package) | To add at build |
| Wordmark "Tikéo" with é-tick | In-house SVG | Owned by the founder | Logo, header, footer | — | — | **Concept approved (D-014).** Final outlines after the OAPI + WIPO search (R3) |
| Favicon / app icon ("t" + tick) | In-house SVG → ICO/PNG | Owned | Browser tab, PWA icon, Apple touch icon | — | — | To draw at build |
| Illustrations (receipts, invoice, phone frame, export sheet) | In-house SVG components | Owned | Hero, How it works, Problem, Use cases | — | — | To draw at build (list in §3) |
| Open Graph image (1200 × 630) | Generated at build (`next/og`) from the same tokens | Owned | WhatsApp, LinkedIn and social link previews | — | — | To build |

**Rejected:** stock photos (D-014: no photography), wax-print or kente pattern packs (positioning §7), AI-generated imagery (it's hard to establish ownership, and it clashes with the honest tone), WhatsApp, Wave, Orange Money, MTN or Sage logos (they imply integrations that aren't confirmed; trademark use).

---

## 2. Fonts: loading plan
- Load all three families through `next/font/google`. They are downloaded at build time and self-hosted on the site's own domain, so no request goes to Google from the visitor's browser. That also helps the privacy notice and D-010.
- Subsets: `latin` + `latin-ext` (é è à ç œ « » and U+202F narrow no-break space).
- Weights: Schibsted Grotesk 600, 700 · Inter variable (one file) · IBM Plex Mono 400. Use `display: swap` with adjusted fallback metrics (`next/font` default) to avoid layout shift.
- Budget check after build: total woff2 ≤ ~90 KB. If over budget, drop Plex Mono and set receipt text in Inter with tabular figures.

---

## 3. Illustration list (in-house SVG)

All are React components that take props (supplier, amounts, date, category), so copy changes don't need a designer. Content is fictional; supplier names must not match real businesses (check with a quick search before launch).

| # | Illustration | Used on | Notes |
|---|---|---|---|
| I1 | Thermal receipt, highlighted fields, review card, "Vérifié par vous" stamp | Home hero | Signature motion (marker sweep + stamp), off under reduced motion. Board version is the reference. |
| I2 | Phone camera frame over a receipt | How it works ①, Home step 1 | No real phone brand or OS chrome |
| I3 | Receipt + suggested category + "Valider" | How it works ② | Category labels in plain words; **SYSCOHADA account numbers only after founder confirmation + tax-adviser review** (positioning §10) |
| I4 | Export sheet (spreadsheet-like table, tabular figures) | How it works ③, Accountant band | Generic grid; no Excel or Sage logo or UI copy |
| I5 | "Scattered documents": drawer, inbox, chat bubble | Home problem section | Line drawings in `muted`; the chat bubble is generic, not WhatsApp green |
| I6 | Handwritten carnet receipt | Features / Use cases | Shows "documents d'ici" (pillar 2) |
| I7 | Stamped supplier invoice (facture) | Features, accountant section | No QR code (would suggest FNE capability, R5) |
| I8 | Ledger table for accountants | Use cases (accountants) | Ruled lines, tabular figures (borrowed from Direction B) |
| I9 | Empty, success and error states for the waitlist form | Contact / waitlist | Tick motif from the wordmark for success |

## 4. Brand files to produce at build
- `tikeo-wordmark.svg` (ink), `tikeo-wordmark-white.svg` (on blue), `tikeo-mark.svg` ("t" + tick).
- `favicon.ico` (32 px), `icon.svg`, `apple-icon.png` (180 px), `icon-192.png`, `icon-512.png`.
- Design tokens as Tailwind theme values: colours (`ink`, `paper`, `stamp`, `stamp-deep`, `marker`, `muted`, `receipt`, `rule`, plus dark values), type scale, 4 px spacing scale, radii 6 px / 2 px.
- Converting the wordmark to outlines is safe at build because it's in-house; **don't register or print** it before the trademark search (R3).

## 5. Checks before launch
- Every licence in §1 confirmed and its text stored in the repo.
- Fictional supplier names searched (no real business with the same name in Abidjan).
- No third-party logos anywhere on the site.
- Wordmark é-tick read correctly as "Tikéo" by native speakers (folded into the native-speaker check).
- Font and image weight within budget (Lighthouse on a mid-range Android profile).
