# Visual Direction — Tikéo

_Prepared 2026-11-23 · Phase 2 (deliverable 2) · Owner: Director · Status: **Direction A approved by founder 2026-11-24 (D-014)**; é-tick wordmark approved for development; no photography_

**Inputs:** `brand/design-research.md`, `brand/positioning.md` §7 (personality: *le collaborateur rigoureux*; "local sans folklore"), D-012, D-013.
**Visual board:** the three directions are shown side by side, with a hero mock-up of the recommended one, in a private artifact (link in the hand-off message; not stored in the repo).
**Not legal clearance:** wordmark ideas below are concepts. Do not commission final logo files, buy domains or print anything before the formal OAPI + WIPO search on Tikéo (R3).

---

## 1. Recommendation
Adopt **Direction A, "Le reçu vérifié"** (*the checked receipt*). The receipt is the hero; a highlighter marks what Tikéo reads; a blue stamp-ink colour marks what *you* validate. The direction makes the name (*ticket de caisse*), the mechanic (photo → check → export) and the trust pillar (*vous gardez la main*) visible in one picture, with no stock photography and no AI imagery. It is light enough for 4G and sober enough for accountants.

---

## 2. Three directions considered

| | **A. Le reçu vérifié** (recommended) | B. Le grand livre | C. Lagune |
|---|---|---|---|
| **Idea** | The thermal receipt, highlighted and stamped "vérifié" | The accountant's ledger: ruled columns, aligned figures | Abidjan daylight: lagoon blue, sun, warm city tones |
| **Hero picture** | Illustrated receipt with highlighted fields → suggested SYSCOHADA account → "Valider" | A ledger page filling itself from a stack of receipts | Photography or illustrated scene of a shop counter at Plateau / Treichville |
| **Palette** | White, ink, stamp blue, highlighter yellow | White, ledger green, pale green rules | Lagoon blue, sun ochre, terracotta |
| **Type** | Schibsted Grotesk + Inter (+ IBM Plex Mono in receipts only) | Source Serif 4 + Inter | Manrope + Manrope |
| **Best for** | All four personas: concrete for P1/P2, rigorous for P3 | P3 accountants, P4 finance staff | P1/P2 emotional warmth; local pride |
| **Risks** | Yellow is easy to overuse; must stay an accent | Feels like an old bank or Sage; cold for independents; green reads "money/growth" cliché | Drifts toward folklore and tourism; needs photography (weight, sourcing, consent); weakest for accountants |
| **Fit with tone (§7)** | Clair, honnête, rigoureux, local by detail | Rigoureux, less "proche" | Proche, less rigoureux |
| **Performance** | Excellent (SVG only) | Excellent | Medium (photos) |

---

## 3. Direction A in detail

### 3.1 Colour

| Token | Role | Light | Dark (future) | Contrast (checked 2026-11-23) |
|---|---|---|---|---|
| `ink` | Text, wordmark | `#14161A` | `#E8EAF0` | 18.1:1 on white · 15.6:1 on dark ground |
| `paper` | Page ground | `#FFFFFF` | `#0F1217` | — |
| `stamp` | Brand colour: CTAs, links, validation stamp, full-width bands | `#1F3FD1` | `#8EA2FF` | 7.8:1 with white (text on blue and blue on white both pass AA) · 7.8:1 on dark ground |
| `stamp-deep` | Hover/pressed | `#1A36B8` | — | 9.3:1 with white |
| `marker` | Highlighter on extracted fields; one accent per screen | `#FFE14D` | `#FFE14D` | Ink on marker 13.9:1. **Never** use marker as text colour on white. |
| `muted` | Secondary text, captions | `#5B6270` | `#A9B0BD` | 6.1:1 on white · 8.6:1 on dark ground |
| `receipt` | Receipt paper surface inside illustrations | `#F4F5F7` | `#1A1E25` | — |
| `rule` | Hairlines, dividers, ruled lines | `#DDE1E8` | `#2A2F38` | Decorative only |

**Rules:** blue leads (flat bands that run full width, the primary button, the stamp); yellow only marks *what was read* on a document; no gradients; status never shown by colour alone ("Validé" always pairs an icon and a word).

### 3.2 Typography
- **Display: Schibsted Grotesk** (600–700). Sturdy, newspaper-born grotesk; reads as serious without being corporate. Headlines 32–52 px, line-height 1.05, tracking −0.02 em.
- **Text and UI: Inter** (400/500/600), with `font-feature-settings: "tnum"` for amounts and tables, which accountants will notice.
- **Receipt lettering: IBM Plex Mono** (400), **only inside receipt illustrations** to imitate thermal printing. Never for headings or labels.
- All three are free (OFL), on Google Fonts, cover Latin Extended (é è ç œ « »), and self-host through `next/font` with subsetting. Budget: ≤ ~90 KB total.
- **French typography:** thin no-break space (U+202F) before « ; : ! ? » and inside « » guillemets; amounts as `12 500 FCFA` with a no-break space; dates `23/11/2026`.

### 3.3 Wordmark (concept only)
- Set "Tikéo" in Schibsted Grotesk 700, ink colour, tight tracking.
- **Idea:** the acute accent on the é is drawn as a short stamp-blue **tick** (✓), so the name itself carries "vérifié". It works at favicon size as "t" + tick, or the tick alone.
- ASCII contexts (domains, handles, code) use `tikeo`; the logotype always keeps the accent (D-013).
- To test: legibility of the é-tick at 16 px; whether native speakers still read it as an accent (fold into the native-speaker check, R3).

### 3.4 Illustration and imagery
- **Subject:** documents, not people. Thermal receipts, a handwritten carnet receipt, a stamped supplier invoice, a phone camera frame, a spreadsheet export. Flat SVG with fine rules, a light paper shadow and a slight angle.
- **Content in illustrations:** fictional but plausible Ivorian details: supplier names (fictional), quartiers (Cocody, Treichville, Yopougon), `TVA 18 %`, `FCFA`, SYSCOHADA account numbers only once the founder confirms SYSCOHADA mapping (positioning §10) and a tax adviser has reviewed the labels.
- **Highlight:** extracted fields get a hand-drawn yellow marker stroke behind them. The validation step gets a blue stamp "Vérifié par vous".
- **No:** stock photography, people photos (founder declined a photo, D-014), wax-print or kente patterns, maps of Africa, robots, sparkles, glowing gradients, payment or WhatsApp logos (integrations unconfirmed), any QR code that suggests FNE capability.

### 3.5 Iconography
Line icons, 1.5 px stroke, rounded joins, 24 px grid. A free set (Lucide, ISC licence) customised in stamp blue. Icons support text; they never replace it.

### 3.6 Layout and components
- **Grid:** 4 columns at 320–599 px, 8 at 600–1023 px, 12 at ≥ 1024 px; content max 1200 px; gutters 16 / 24 / 32 px.
- **Rhythm:** 4 px base spacing scale; sections alternate white and full-bleed blue bands, never more than one blue band per screen height.
- **Radius:** 6 px on buttons and inputs, 2 px on document illustrations (paper isn't round).
- **Buttons:** primary = blue fill, white text; secondary = ink outline. Minimum 44 px high; labels never truncated (French runs long).
- **"En cours de développement" badge:** ink outline with a small blue dot, sentence case. Honest, never alarming.
- **Forms:** one column; 16 px inputs; visible labels (no placeholder-only labels); the marketing opt-in unticked by default (H9).

### 3.7 Motion
One signature motion: on the hero, the marker sweeps across the extracted fields and the stamp lands. Under 1 s, plays once, off under `prefers-reduced-motion`. Everything else is static.

---

## 4. Applying it to the homepage (positioning §8)

| Section | Visual treatment |
|---|---|
| Hero | H1 left, receipt illustration right on desktop; on phones H1 → receipt → CTA. Badge above the CTA. |
| Problem | Small collage: receipt in a drawer, PDF in an inbox, photo in a chat. Line drawings, muted. |
| How it works | Three panels sharing one receipt: ① photo frame ② highlighted fields + suggested category ③ export sheet |
| Pillars | Full-width blue band, four short typographic blocks, no icon grid |
| Accountant band | Ledger-style ruled table with tabular figures (borrows the best of Direction B) |
| FAQ / trust | Plain text, generous spacing, no badges |
| Final CTA | White card on blue band; one-column form |

---

## 5. Decisions (D-014, decided 2026-11-24)

Founder answers: **Direction A**; **keep the é-tick wordmark**; **no founder photo** (no photography at launch). Original questions kept below for the record.

1. **Choose a direction:** A (recommended), B, C, or a blend (for example A with B's ledger treatment for the accountant pages, already included above).
2. **Wordmark idea:** keep exploring the é-tick, or keep a plain wordmark?
3. **Photography:** none at launch (recommended), or a real founder photo if the founder story is used (brief Q4).

**Next:** asset sourcing (`brand/asset-sourcing.md`) (fonts, icon set, illustration plan with licences recorded), then deliverable 3: site structure, messaging and UX.
