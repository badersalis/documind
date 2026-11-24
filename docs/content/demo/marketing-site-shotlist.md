# Shot list — Tikéo marketing site (pre-launch captures)

_Created 2026-11-24 · Skill: product-demo-capture · Owner: Director · Status: source captures for internal review; **not approved for publishing**_

## What is (and is not) being captured

| Item | Product status | How it may be shown |
|---|---|---|
| Marketing website (8 routes, French) | **Built, not deployed** (deliverable 4, first QA pass done) | "Site Tikéo — version de pré-lancement". Real UI, real render. |
| Receipt / expense-list drawings inside the site (hero card, « Dépenses de novembre 2026 », steps) | **Concept illustration.** The Tikéo app does not exist (brief: non-goals) | Always labelled "Concept / illustration", never "app screenshot". The site's own « Exemple fictif » caption must stay in frame. |
| Tikéo app (upload, extraction, review, export) | **Not built** | Nothing to capture. No mock app UI may be presented as the product. |
| Waitlist form | Exists in code, **off** (contact-only mode until D-010) | Not captured. Visitors today see the contact-only block, so that's what's shown. |

## Message per asset (one idea each)

| # | File stem | Page / state | Viewport | Message (≤ 3 s read) | Caption (draft, FR) |
|---|---|---|---|---|---|
| S1 | `home-hero-desktop` | `/`, top of page, animations settled | 1440×900 @2× | What Tikéo promises, in one line | « Vos reçus et factures, classés et prêts pour votre comptable. » |
| S2 | `home-hero-mobile` | `/`, top | 390×844 @2× | Mobile-first, made for phones in CI | « Pensé d'abord pour le téléphone. » |
| S3 | `home-full-desktop` | `/`, full page | 1440 wide @2× | The whole story at a glance (portfolio / review) | — (Behance long image) |
| S4 | `how-steps-desktop` | `/comment-ca-marche`, top | 1440×900 @2× | Three steps from photo to filed receipt | « De la photo à la pièce classée, en trois étapes. » |
| S5 | `features-desktop` | `/fonctionnalites`, top | 1440×900 @2× | What it **will** do (future tense kept) | « Ce que Tikéo fera pour vous. » |
| S6 | `use-cases-desktop` | `/cas-d-usage`, top | 1440×900 @2× | One receipt, four audiences | « Une même pièce, quatre façons de gagner en ordre. » |
| S7 | `faq-mobile` | `/faq`, top | 390×844 @2× | Trust: honest answers up front | — |
| S8 | `waitlist-mobile` | `/liste-d-attente`, top | 390×844 @2× | How to follow the project today | — |
| S9 | `menu-open-mobile` | `/`, mobile menu open | 390×844 @2× | Navigation on small screens | — |
| S10–S15 | `<page>-full-mobile` | each main route, full page | 390 wide @2× | Raw material for crops (carousel, story) | — |

Destination crops (LinkedIn 1080×1350, Instagram 1080×1350 / 1080×1920, Behance 1400–3200 px wide) are made from these 2× sources **after** the founder picks a destination. Nothing in the UI is altered; only crop, frame and caption.

## Environment

- **Build:** `next build` + `next start` on `localhost:3100` (production render; the dev server on :3000 was not touched).
- **Commit:** `36375f5` + staged, uncommitted changes from the QA pass (working tree as of capture). Re-capture after commit if the copy changes.
- **Config at capture:** `claims` = all `unconfirmed` → the **full claim wording** ([SYS] SYSCOHADA, [REV] review, [EXP] export) is on screen. Waitlist mode `contact`. Contact email and WhatsApp empty → the "contact details coming soon" text is shown. `noindex` on.
- **Browser:** Microsoft Edge (Chromium) via playwright-core, headless; clean profile (no extensions, bookmarks, autofill, notifications); `fr-CI` locale, `Africa/Abidjan` time zone, light mode, no forced reduced motion; waits for the marker-sweep and stamp animations to finish.
- **Data:** only the site's own fictional sample (invented supplier and amounts). No accounts, no personal data, no real documents.

## Privacy and honesty checklist — results (2026-11-24)

Method: automated scan of every page's rendered text (emails, CI phone formats, URLs, `localhost`): **clean on all 14 frames**. Visual review by eye: S1, S2, S4–S8 (viewport frames). Full-page frames (S3, S10–S15) were text-scanned only; look at them before using any crop from them.

- [x] No real names, emails, phone numbers, addresses, account IDs in frame. Contact details are empty, so the site shows "coordonnées publiées ici". _Residual:_ the invented business names (Quincaillerie Les Rosiers, Station Riviera 3, Papeterie du Plateau, Boulangerie Akwaba, Transports K.) could match real Abidjan businesses. Check before any external use.
- [x] No secrets, tokens or internal hosts in frame (headless, no address bar)
- [x] No browser chrome, extensions, tabs, notifications, dev tools or debug banners
- [ ] « Exemple fictif » caption in frame: **only S1**. S2 (below the fold), S4 and S6 show the drawings without it. Crops from these need a visible "Concept / illustration" label.
- [ ] Drawings labelled "Concept" in external use: to do at post-processing. S4's « Valider » button and the expense table look like app UI.
- [x] No faked states, speed edits or composited features. **S9 (menu open) dropped:** the sheet renders 1 px tall in Chromium, so the real state is broken (see below).
- [ ] **Blocker for publishing:** claims [SYS] [REV] [EXP] are unconfirmed and visible in S1–S6 and S10–S13. Don't publish until the founder confirms each one, or re-capture with the claim set to `dropped`.

## Bug found during capture

**Mobile menu invisible on Chromium (Chrome Android, Edge).** `src/components/Header.tsx`: the sheet `#menu-mobile` is `fixed top-16 bottom-0` inside a `<header>` with `backdrop-blur`. `backdrop-filter` makes the header the containing block for fixed descendants, so the sheet measures 390×1 px when open. Measured at 390×844 on the production build. The QA pass (Q6) verified focus and Escape behaviour but not the open sheet's layout. Likely fix: render the sheet outside the `<header>`, or give it an explicit `h-[calc(100dvh-4rem)]`. Re-capture S9 after the fix.

## Re-run

`node capture.js http://localhost:3100 media/demo/<date>` (playwright-core, `channel: "msedge"`). The script is not committed; it is reproduced from this shot list on request.

## Behance post-processing (2026-11-24)

Seven modules (B00–B06) composed from these captures: crop, plain in-house browser/phone frames, captions and a "CONCEPT" tag on every module showing the drawings. The UI itself is not altered. Composing B06 also gave S3 a by-eye check (clean). Copy, alt text and blockers: `marketing-site-behance.md`.
