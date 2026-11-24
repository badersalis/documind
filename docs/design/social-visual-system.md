# Social Visual System — Tikéo

_Created 2026-11-24 · Skill: social-graphic-design · Status: **proposed — founder approval needed** · Source of truth for tokens: `docs/brand/visual-direction.md` (Direction A, D-014) · Kit: `design/social/`_

> **Purpose (changed 2026-11-24):** social content now follows the studio content goal (`freelancer-lab/CLAUDE.md`): each piece shows a real feature or component as a portfolio piece, proving the founder's design and engineering skill, and ends with a hiring CTA. Pre-launch awareness pieces ("follow the page") are **retired** (§9, §11). Current pieces: §12–13.

## 1. Principles

1. **Documents, not decoration.** The receipt and the stamp are the brand's only pictures. No stock, no people, no patterns, no maps, no robots, no sparkles, no WhatsApp/Sage/Odoo logos (visual-direction §3.4).
   **Showcase update:** real captures of the built site (UI states, components, animation frames) are now the hero of every piece. Drawings of the future app stay CONCEPT-tagged; real UI carries the "Capture réelle" tag (`.real`) instead.
2. **One idea per slide, readable in 3 seconds on a phone.**
3. **Honest by default.** "En cours de développement" on the first and last frame of every piece until launch. Product lines are written in the future tense. Every drawing of the product carries the CONCEPT tag.
4. **Blue is the event, white is the rhythm.** Blue ground for the hook and the CTA; white or receipt-grey in between. Yellow appears once per slide, as a highlight only.

## 2. Formats (check each platform's spec again at design time)

| Use | Canvas | Class | Export |
|---|---|---|---|
| LinkedIn document carousel | 1080×1350 (4:5) | `.f-4x5` | PDF (one page per slide) + PNGs |
| Instagram feed / carousel | 1080×1350 | `.f-4x5` | PNG, sRGB |
| Instagram/Facebook story, Reels/TikTok cover | 1080×1920 | `.f-9x16` | PNG |
| Square (fallback) | 1080×1080 | `.f-1x1` | PNG |
| Link preview | 1200×630 | — | The site's own OG image (`src/app/opengraph-image.tsx`), already on-system |

## 3. Grid and safe areas

- 8 px unit; **88 px outer margin** on 4:5 and 1:1 (`.safe`).
- 9:16: text stays between **y = 260 and y = 1560**, with a 96 px side margin, which clears platform UI at the top (profile, progress bar) and bottom (reply bar, captions).
- TikTok/Reels covers: keep the headline in the central 1080×1350 band, since the grid crops covers to 4:5 or 3:4.
- Header row: wordmark or section label on the left, slide counter (`2/6`) on the right. Footer row: badge, CONCEPT tag or a "swipe" cue.

## 4. Type scale (1080 canvas)

| Role | Font | Size / line-height | Class |
|---|---|---|---|
| Hook / statement | Schibsted Grotesk 700, −0.025 em | 104 / 1.02 | `.h-xl` |
| Slide headline | Schibsted Grotesk 700, −0.02 em | 80 / 1.04 | `.h-l` |
| Secondary headline | Schibsted Grotesk 700 | 60 / 1.08 | `.h-m` |
| Body | Inter 400 | 36 / 1.42 | `.body` |
| Small body | Inter 400 | 30 / 1.42 | `.body-s` |
| Meta (labels, counter, badge) | Inter 500 | **28 minimum** | `.meta` |
| CONCEPT chip | Inter 700 caps, +0.06 em | 24 (the only exception: bold caps on yellow read as ≥ 28) | `.concept b` |

- **IBM Plex Mono only inside receipts** (never headings, labels or tags).
- **Word budget:** ≤ 12 words on a single graphic, ≤ 25 per carousel slide.
- **French typography:** thin no-break space (U+202F, `&#8239;`) before « : ; ! ? % » and inside « ». `&nbsp;` to keep « à 18 % », amounts (`65 018 FCFA`) and short words at line ends together. Dates as `21/11/2026`.

## 5. Colour roles (contrast checked 2026-11-24)

| Ground | Text | Secondary text | Accent | Ratios |
|---|---|---|---|---|
| Stamp blue `#1F3FD1` (`.g-stamp`) | White | On-stamp `#DFE5FF` | Marker yellow (tick, badge dot) | 7.8:1 · 6.2:1 |
| Paper `#FFFFFF` (`.g-paper`) | Ink `#14161A` | Muted `#5B6270` | Stamp blue (numbers, links) | 18.1:1 · 6.1:1 · 7.8:1 |
| Receipt `#F4F5F7` (`.g-receipt`) | Ink | Muted | Marker behind ink | 16.6:1 · 5.6:1 · ink on marker 13.9:1 |

Never use yellow text on white, and never put white text on yellow. Never stack two blue slides in a row in a carousel, except the CTA directly after a blue hook in a 2-slide piece.

## 6. Components (`design/social/kit.css`)

| Component | Use | Rule |
|---|---|---|
| Wordmark (`.wordmark`) | First and last slide | Concept wordmark (é-tick), not yet trademark-cleared (R3). Tick is blue on light grounds, yellow on blue. |
| Badge (`.badge`) | First and last slide | "En cours de développement" until launch |
| Counter (`.counter`) | Every carousel slide | `n/total` |
| Rule list (`.list`) | Problem, steps, checklists | ≤ 4 items |
| Marker (`.mark`) | One word or figure per slide | — |
| Document frame (`.doc .crop`) | Crops of real captures | Crop to the relevant part; never shrink a full screen. Source must be in `asset-register.csv`. |
| CONCEPT tag (`.concept`) | Any slide showing a product drawing | Mandatory until the app exists |
| Stat (`.stat-number` + `.source`) | **Locked** | Only with a verified, cited source. None exists today; don't use. |
| Quote | **Locked; no component yet** | Only real, permitted quotes from real people. None exist today. |

## 7. Claims on graphics

The three product promises are still `unconfirmed` (`src/config/site.ts`). Until you confirm each one:
- **don't** show SYSCOHADA, "vous validez" / "Vérifié par vous", or export to Sage / Odoo / Excel;
- use the "dropped" fallback wording from `src/content/fr.ts`, in the future tense;
- never mention FNE, DGI, ARTCI or any approval, accuracy figures, or "automatique" (positioning §6).

## 8. Production

- Pieces are HTML files in `design/social/pieces/`, named `<date>_<platform>_<slug>.html`. Each slide is a `<section class="slide …" data-name="nn">`.
- Render: see `design/social/README.md`. Outputs go to `media/social/<date>/` as `<date>_<platform>_<slug>_<nn>.png` (+ `.pdf` for LinkedIn). They are git-ignored, so record them in the asset register.
- The renderer warns if any text overflows the safe area.

## 9. Sample pieces (2026-11-24) — RETIRED

> Retired 2026-11-24: written for pre-launch awareness ("follow the page"), which is no longer the purpose. Kept for reference; don't post. Replaced by §12–13. PNG/PDF exports deleted from `media/social/` on 2026-11-24; the HTML sources stay in `design/social/pieces/`.

**Objective:** pre-launch awareness, asking people to follow the page. No waitlist CTA, because the waitlist is closed until D-010 and there's no domain yet. The copy is claim-safe site copy; it still needs `copywriting` and founder review before posting.

### LinkedIn carousel — `2026-11-24_linkedin_pre-lancement` (6 slides + PDF)

| # | Ground | Content | Alt text |
|---|---|---|---|
| 01 | Blue | Hook: « Des pièces partout, et la saisie toujours à la dernière minute. » + badge | Blue slide: "Des pièces partout, et la saisie toujours à la dernière minute." Tikéo wordmark, "En cours de développement" badge. |
| 02 | Paper | « Vos pièces justificatives sont… dans un tiroir, dans vos e-mails, dans vos discussions. » | Numbered list of three places receipts get lost: a drawer, e-mails, chats. |
| 03 | Receipt | « Une photo. Tikéo lira les montants. » + crop of the site's receipt illustration + CONCEPT | An illustrated hardware-store receipt with the supplier, date, VAT and total highlighted in yellow. Labelled as a concept illustration with invented data. |
| 04 | Paper | « En français. En FCFA. Avec la TVA à 18 %. » | Statement: in French, in CFA francs, with 18% VAT, for local receipts and stamped invoices. |
| 05 | Paper | « Avec vos outils, pas à leur place. » | Statement: Tikéo will replace neither your accountant nor your software. |
| 06 | Blue | Wordmark + positioning line + « Suivez la page pour être prévenu de l'ouverture. » | Tikéo wordmark on blue with "Vos reçus et factures, classés et prêts pour votre comptable", asking readers to follow the page. |

### Instagram story — `2026-11-24_instagram-story_pre-lancement` (1 frame)

The hook re-laid out for 9:16, with one added line: « Tikéo les rangera pour vous et votre comptable. » Alt text: Blue story frame with the Tikéo wordmark and "Des pièces partout, et la saisie toujours à la dernière minute", marked "En cours de développement".

## 10. Before posting anything

- [ ] Founder approves this system and the templates
- [ ] Copy reviewed (`copywriting`), then approved by the founder
- [ ] Trademark decision: using Tikéo publicly on social before the OAPI/WIPO search (R3)
- [ ] The account/page exists, and its handle has been checked (`tikeo` may be taken: name-check.md)
- [ ] Claims check against §7 on every frame

## 11. Instagram and TikTok pieces (2026-11-24) — RETIRED

> Retired 2026-11-24 for the same reason as §9. Exports deleted 2026-11-24 (HTML sources kept). The kit classes introduced here (`.tt`, `.tt-cover`, `.safe.c`, `.h-tt`) stay in use. Replaced by §13.

New kit classes: `.tt` (TikTok safe area: top 170, bottom 520, right 150, left 80), `.tt-cover` (text kept in the band that survives the profile-grid crop), `.safe.c` (centred layout), `.h-tt` (96 px). Drawings come from element screenshots of the site at 4× (`media/demo/2026-11-24/tikeo-site-el_*.png`: receipt, phone, expense table, scattered documents). Each sits on the ground it was captured on (white, or receipt-grey for the phone). I left out the review step's « Valider » button and the « Vérifié par vous » stamp ([REV]).

**Known compromise:** the small labels inside the scattered-documents drawing (« Dans un tiroir »…) render at about 20–24 px. They're decorative: the headline on the same slide says the same thing.

### Instagram feed carousel — `2026-11-24_instagram_du-tiroir-au-classement` (6 × 1080×1350)

Picture-led: one receipt's journey, ≤ 12 words per slide.

| # | Content | Alt text |
|---|---|---|
| 01 | Blue · « Le reçu du ciment, vous le retrouverez au bilan ? » + tilted receipt · CONCEPT | Blue slide asking whether you'll find the cement receipt at year-end, above an illustrated hardware-store receipt with highlighted amounts. Labelled as an illustration with fictional data. |
| 02 | « Vos pièces sont partout. » + drawer / e-mail / chat drawings | Line drawings of a drawer, an e-mail with a PDF and a chat message: where receipts end up today. |
| 03 | « Une photo suffira. » + phone framing a receipt · CONCEPT | Illustrated phone camera framing a receipt. Labelled: the app doesn't exist yet. |
| 04 | « Tikéo lira la date, la TVA et le total. » + highlighted receipt · CONCEPT | Illustrated receipt with the supplier, date, VAT and total highlighted in yellow. Invented supplier and amounts. |
| 05 | « Et votre mois sera classé. » + expense table · CONCEPT | Illustrated table "Dépenses de novembre 2026" with three invented expenses, their categories and amounts in FCFA. |
| 06 | Blue · wordmark, « Prêt pour votre comptable, sans soirées de saisie. », « Suivez-nous pour voir Tikéo se construire. » | Tikéo wordmark on blue with the promise and an invitation to follow the project. |

### TikTok photo carousel — `2026-11-24_tiktok_pov-comptable` (4 × 1080×1920)

| # | Content | Alt text |
|---|---|---|
| 01 | Blue · « POV : votre comptable vous demande les reçus de novembre. » | Blue frame: "POV: your accountant asks for November's receipts." |
| 02 | « Le tiroir. Les e-mails. Les discussions. » + drawings | Drawer, e-mail and chat drawings under the words "the drawer, the e-mails, the chats". |
| 03 | « Bientôt, Tikéo lira vos reçus. » + receipt · CONCEPT | Illustrated receipt with highlighted amounts under "Soon, Tikéo will read your receipts". Fictional data. |
| 04 | Blue · wordmark, « Suivez pour voir la suite. », badge | Tikéo wordmark on blue: "Follow to see what's next", in development. |

Sound: none chosen. A business account must use TikTok's Commercial Music Library or original audio.

### Video cover template — `2026-11-24_tiktok_cover-pourquoi-tikeo` (1080×1920, TikTok + Reels)

« Pourquoi on construit Tikéo », with Tikéo highlighted, a badge and a subline. This is the cover for a first build-in-public video, which isn't recorded yet. Alt text: Blue cover: "Why we're building Tikéo", in development.

## 12. Studio showcase piece (2026-11-24, DRAFT)

**Objective:** the studio content goal. Show the founder's design and engineering craft on a real component, and end on a hiring CTA. Pattern: *one feature in 6 states*. No studio brand exists yet, so the piece uses the Tikéo kit. That keeps it consistent with the Tikéo feed, but a studio showcase system (its own wordmark and colours) still has to be decided before the feed mixes several products.

**Truthfulness:** every UI image is a real capture of `WaitlistForm.tsx` (local dev server, form switched on, e-mail on `example.com`), not a drawing, so there's no CONCEPT tag. Each slide says "Capture réelle". The form is built but not open (D-010), and the last slide says so. The two bugs on slides 03 and 08 are real and were fixed on 2026-11-24 (QA report §7, findings 11–12).

**Kit additions** (now in `kit.css` under "Studio showcase", proposed until approved): `.state` (numbered state label), `.real` (green dot, "Capture réelle"), `.note` (marker rule for an aside), `.mid` (vertical centring), `.code` (code block). **Exception to approve:** `.code` uses IBM Plex Mono, which §4 reserves for receipts.

### LinkedIn carousel — `2026-11-24_linkedin_formulaire-6-etats` (9 slides + PDF)

| # | Ground | Content | Alt text |
|---|---|---|---|
| 01 | Blue | « Un formulaire, six états. » + the success card, tilted | Blue slide: "One form, six states. Each state is a design decision, and a few lines of code." Below it, the form's confirmation card: "C'est noté. Nous vous écrirons à contact@example.com dès l'ouverture." |
| 02 | Receipt | ① Au repos · « Ce qui est obligatoire est écrit, pas deviné. » | Empty form: the e-mail field and the role choices, each labelled "(obligatoire)". |
| 03 | Receipt | ② Focus clavier · « On voit toujours où l'on tape. » + note on the white-ring bug | E-mail field with a thick blue focus ring while typing. Note: the ring used to be white on the white card, invisible to keyboard users; fixed the same day. |
| 04 | Receipt | ③ Erreur · « L'erreur arrive quand on quitte le champ, pas à chaque touche. » | E-mail field with a red border and the message "Cette adresse e-mail ne semble pas valide (exemple : nom@entreprise.ci)". |
| 05 | Receipt | ④ Question conditionnelle · « Une question de plus, seulement pour les cabinets. » | "Expert-comptable ou cabinet" is selected; a new optional question, "Nombre de dossiers clients", has appeared, with "21 à 100" selected. |
| 06 | Receipt | ⑤ Envoi · « Un seul envoi, même si l'on appuie deux fois. » | The submit button, greyed out and reading "Envoi…", under the privacy line. Caption: disabled and aria-busy while sending. |
| 07 | Receipt | ⑥ Confirmé · « Un lecteur d'écran annonce aussi la réussite. » | Confirmation card with a blue tick: "C'est noté", repeating the e-mail address. Caption: focus moves to the heading. |
| 08 | Paper | Sous le capot · « Le bug du premier clic. » + 8-line code excerpt | Explanation that the error message pushed the button down between press and release, and a JavaScript excerpt that skips blur validation when focus moves to the submit button. |
| 09 | Blue | « Je conçois et je code vos interfaces, tous les états compris. » + « Écrivez-moi en message privé. » | Blue closing slide: "I design and build your interfaces, every state included. Send me a direct message." Badge: form tested locally, not yet open. |

**Before posting** (in addition to §10): the founder approves the first-person CTA and the "Écrivez-moi en message privé" route; decide whether naming Tikéo publicly before the trademark search is acceptable (R3); add an English version for non-francophone prospects, if wanted.

## 13. Showcase pieces for Instagram and TikTok (2026-11-24, DRAFT)

Same objective and truthfulness rules as §12; each piece is composed natively for its platform. Real captures, made on the local site (`media/demo/2026-11-24/tikeo-site-el-receipt_*`, `tikeo-site-form-crop_focus-*`, `…_whatsapp-error-button`). "Avant · reconstitué" images were made by re-applying the exact pre-fix CSS rule to the fixed page, and are labelled as such.

**Platform map:** LinkedIn → §12 (*one feature in 6 states*, insight + code) · Instagram feed → *anatomy of a component* (craft, saves) · Instagram story → *before/after* · TikTok → *before/after + under the hood*, big centred text, "tu" · TikTok/Reels cover → the 6-states video (not recorded yet).

### Instagram feed carousel — `2026-11-24_instagram_anatomie-du-recu` (6 × 1080×1350)

| # | Content | Alt text |
|---|---|---|
| 01 | Blue · « Ce reçu n'est pas une image. » + the receipt, tilted | Blue slide: "This receipt isn't an image." An illustrated hardware-store receipt with highlighted supplier, date, VAT and total. Site component, fictional data. |
| 02 | ① Typographie · « Du vrai texte, en IBM Plex Mono. » | Close-up of the receipt's monospace lettering. Caption: the amounts come from the content file, so translating means editing text. |
| 03 | ② Le bord déchiré · « Pas d'image : un masque CSS. » + `mask: conic-gradient(…) bottom / 16px 10px repeat-x;` | The bottom of the receipt with its zigzag torn edge, above the CSS line that draws it. |
| 04 | ③ Le surligneur · « Il surligne ce que Tikéo lira, en 0,6 s. » + frames at 0, 300, 600 ms | Three frames of the supplier name: no highlight, half highlighted, fully highlighted. Caption: off when the device asks for less motion. |
| 05 | « Une image aurait été plus simple. Pas meilleure. » + 3 reasons | List: sharp at every size; translated like the rest of the site; no image to download. |
| 06 | Blue · « Le soin du détail, du design au code. » + « Envoyez-moi un message. » | Blue closing slide: "Care for detail, from design to code. Send me a message." |

### Instagram story — `2026-11-24_instagram-story_focus-avant-apres` (1 × 1080×1920)

« Le focus clavier était invisible. » Avant (reconstitué) / Après, CTA « Un projet ? Répondez à cette story. » Alt text: Before and after of an e-mail field with keyboard focus: before, no visible ring; after, a thick blue ring. "Got a project? Reply to this story."

### TikTok photo carousel — `2026-11-24_tiktok_deux-bugs` (5 × 1080×1920)

| # | Content | Alt text |
|---|---|---|
| 01 | Blue · « J'ai trouvé 2 bugs dans mon formulaire. » | Blue frame: "I found 2 bugs in my form, while preparing a post about that same form." |
| 02 | « Bug 1 : le focus clavier, invisible. » + before (reconstitué) | E-mail field with keyboard focus but no visible ring. Labelled "before, reconstructed". |
| 03 | « Corrigé : un anneau bleu de 3 px. » + after | The same field with a thick blue focus ring. |
| 04 | « Bug 2 : le 1er clic tombait à côté. » + WhatsApp error and button | WhatsApp field with an error message above the submit button. Caption: the error pushed the button during the click. |
| 05 | Blue · « Le design, c'est aussi ce qui se passe au clavier. » + « Un projet ? Écris-moi. » | Blue frame: "Design is also what happens on the keyboard. Got a project? Write to me." Form tested locally, not yet live. |

### Video cover — `2026-11-24_tiktok_cover-6-etats` (1080×1920, TikTok + Reels)

« Un formulaire, 6 états. » with « états » highlighted, "Design + code", the success card. Alt text: Blue cover: "One form, 6 states", with the form's confirmation card.

**Before posting:** same as §12. TikTok business accounts: Commercial Music Library or original audio only.
