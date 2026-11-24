# Information Architecture — Tikéo marketing site

_Prepared 2026-11-24 · Deliverable 3 (structure, messaging, UX) · Owner: Director · Status: **proposed** (D-015 open)_

**Inputs:** `project-brief.md` (pages, must-haves, non-goals), `brand/positioning.md` §8 (homepage hierarchy), `research/customer-personas.md` (journey table, validation plan), `brand/visual-direction.md` (Direction A, D-014), decisions D-005, D-007, D-009, D-010.
**Companion docs:** `site/page-copy-fr.md` (French copy for every page), `site/waitlist-ux.md` (form spec and launch modes).

---

## 1. Summary
- **Seven routes at launch**, plus one shared waitlist block that appears at the end of most pages. No Pricing page (D-007).
- **French at the root, English under `/en` later** (recommended for D-005 and D-015). French URLs use French slugs; English pages get English slugs when they're added.
- **Two journeys, one site.** Owners and independents follow Home → How it works → Waitlist, mostly on phones. Accountants land on the accountant section of Use Cases from LinkedIn or a referral, mostly on desktop, and join the waitlist with the "cabinet" role preselected.
- **Every page ends at the waitlist**, and the form's role field is the main validation instrument (personas validation plan, priorities 2, 3 and 7).

---

## 2. Sitemap

| Route (FR, launch) | Route (EN, later) | Page | Primary job | Primary persona |
|---|---|---|---|---|
| `/` | `/en` | Accueil | Say what Tikéo is in 5 seconds; send people to the waitlist | P1, P2 (P3 via band) |
| `/comment-ca-marche` | `/en/how-it-works` | Comment ça marche | Make the three steps concrete; show the human check | P1, P2 |
| `/fonctionnalites` | `/en/features` | Fonctionnalités | Detail the four pillars, with honest "en cours de développement" status | P3, P4, careful P1 |
| `/cas-d-usage` | `/en/use-cases` | Cas d'usage | One section per segment with anchors (`#dirigeants`, `#independants`, `#experts-comptables`, `#equipes-finance`) | All; accountants' landing point |
| `/faq` | `/en/faq` | Questions fréquentes | Answer trust objections directly | All |
| `/liste-d-attente` | `/en/waitlist` | Liste d'attente / contact | The full form, plus a plain contact option | All |
| `/confidentialite` | `/en/privacy` | Politique de confidentialité | Legal notice on data handling (content from the lawyer, D-010) | All |
| `/mentions-legales` | `/en/legal` | Mentions légales | Publisher identity, host, contact. Standard on French-language sites; content needs founder details | All |

**Not at launch:** Pricing (D-007), blog, careers, login (non-goal), any sector page. A blog can be added later for SEO on "notes de frais", "SYSCOHADA" and "TVA 18 %" if content capacity exists.

**Accountant page option:** if accountant interest proves strong (validation priority 2), promote `#experts-comptables` to its own route `/experts-comptables`, which is easier to share on LinkedIn. Content is written so this split needs no rewrite.

---

## 3. Navigation

**Header (desktop, ≥ 1024 px):** wordmark (→ `/`) · Comment ça marche · Fonctionnalités · Cas d'usage · Experts-comptables (→ `/cas-d-usage#experts-comptables`) · FAQ · **[Rejoindre la liste d'attente]** (primary button).
- "Experts-comptables" is a header item on purpose: it's the visible secondary path from D-009.
- Language switcher (FR / EN) appears only once English exists. Until then it isn't rendered (no dead links).

**Header (phone and tablet, < 1024 px):** wordmark · **[Liste d'attente]** (short label, always visible) · menu button. The menu is a full-height sheet with the same items in the same order, large targets (≥ 48 px), and closes on Escape and on navigation.

**Footer:** wordmark + one-line descriptor « Le classement de vos pièces justificatives, conçu pour la Côte d'Ivoire. » · page links · Confidentialité · Mentions légales · contact (email shown as text; WhatsApp only if the founder confirms a business number, brief Q4) · « Tikéo est en cours de développement. » · © 2026 Tikéo.
- No social icons until accounts exist. No partner, payment or certification logos (claims list).

**Sticky CTA on phones:** none. The header button stays visible; a second sticky bar would crowd small screens.

---

## 4. Key journeys

### J1. Owner or independent from a WhatsApp or Facebook share (phone)
1. Lands on `/` → reads the H1 and the receipt picture → scrolls the three steps.
2. Either taps « Rejoindre la liste d'attente » (header or hero) → jumps to the waitlist block at the bottom of the page (in-page anchor; no page load).
3. Or opens « Comment ça marche » → reads → waitlist block at the end.
4. Submits email + role (+ optional WhatsApp) → confirmation state.
**Success:** sign-up within two screens of scrolling; works at 320 px on 4G.

### J2. Accountant from LinkedIn or a referral (desktop)
1. Lands on `/cas-d-usage#experts-comptables` (the link we share) or on `/` and clicks « Experts-comptables ».
2. Reads the accountant section: less data entry, reviewable data traceable to the document, they sign off.
3. Checks `/fonctionnalites` (exports, categories) and `/faq` (who sees client data, liability).
4. Joins the waitlist with the **role preselected to « Expert-comptable / cabinet »** (links from the accountant section add `?role=cabinet`; see `waitlist-ux.md` §4) and an optional "nombre de dossiers clients" field.
**Success:** they find "exportable, reviewable, you validate" within one page.

### J3. Sceptical visitor checking trust
`/` → FAQ preview on Home → `/faq` (data location, who sees documents, AI mistakes, "does it replace my accountant?") → waitlist. The FAQ answers about data location stay as « Nous publierons ces informations avant l'ouverture » until D-004 and D-010 are settled; they must never guess.

---

## 5. Page templates and shared blocks

| Block | Used on | Notes |
|---|---|---|
| Hero (H1, sub, badge, CTAs, illustration) | Home; a lighter version (H1 + intro) on inner pages | Illustration I1 on Home only |
| Three-step strip | Home, How it works | Illustrations I2–I4 |
| Pillar band (blue) | Home, Features | Four text blocks, no icon grid |
| Audience cards | Home | Four cards → Use Cases anchors |
| Accountant band | Home, Features | Links to `/cas-d-usage#experts-comptables`; the waitlist CTA inside that section goes to `/liste-d-attente?role=cabinet` |
| FAQ list (accordion) | FAQ page; 4-question preview on Home | Native `<details>` for no-JS and accessibility |
| Pre-launch notice | Badge in hero; one line in footer | Wording fixed: « En cours de développement » |
| **Waitlist block** | End of Home, How it works, Features, Use cases, FAQ; full page at `/liste-d-attente` | One component; mode depends on D-010 (see `waitlist-ux.md` §2) |

**Content model:** all copy lives in message files per locale (`messages/fr.json`, later `en.json`), keyed by page and block. Components take no hard-coded strings. Adding English is a translation task, not a layout change (brief success measure).

---

## 6. URL, locale and SEO rules
- **Locale routing (proposed, D-015):** French is the default with no prefix (`/faq`); English lives under `/en/…` with translated slugs. `<html lang="fr-CI">` on French pages (`fr` as fallback in hreflang), `hreflang` pairs plus `x-default` → French once English exists.
- **Slugs:** lowercase ASCII, hyphens, no accents (`/cas-d-usage`, not `/cas-d'usage`); matches the tikeo ASCII rule (D-013).
- **Per page:** unique `<title>` and meta description in French (drafts in `page-copy-fr.md`), one `<h1>`, canonical URL, Open Graph image from the brand template.
- **Indexing:** all launch pages indexable except the waitlist confirmation state. `sitemap.xml` and `robots.txt` generated at build.
- **Search themes (hypotheses, no volume data):** « notes de frais Côte d'Ivoire », « classement pièces justificatives », « logiciel dépenses SYSCOHADA », « reçus comptable PME Abidjan ». Use them in copy where natural; check with Search Console after launch.
- **Structured data:** `Organization` and `WebSite` only. No `Product` or `Review` markup (no product, no reviews yet). `FAQPage` markup is optional; Google now shows it rarely, so it's low value.

---

## 7. Analytics events (tool not chosen, U6)
Define events now so copy and components carry the hooks; pick a privacy-light, cookieless tool later (growth phase).

| Event | When | Properties |
|---|---|---|
| `cta_waitlist_click` | Any waitlist CTA | `location` (header, hero, band, footer), `page` |
| `waitlist_submit` | Successful submission | `role`, `has_whatsapp` (boolean), `page`, `locale`. **Never** the email or phone |
| `waitlist_error` | Validation or server error | `field` or `server` |
| `faq_open` | A FAQ item is expanded | `question_id` |
| `accountant_path` | Visit to `#experts-comptables` | `source` (nav, band, direct) |

Any tool that sets cookies or sends data abroad goes through the same legal review as the waitlist (D-010).

---

## 8. Open points
- **D-015 (new, open):** French at root with English under `/en`, French slugs. Director recommends yes.
- **D-005 (open):** French only at launch? The IA works either way.
- **Brief Q4:** contact channel (email only, or a WhatsApp business number?). Affects the footer and the waitlist page.
- **Mentions légales:** needs the founder's publisher details (name or company, address, contact), and the host's details once hosting is final.
