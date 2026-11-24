# Tikéo — marketing site

Marketing website for **Tikéo**, an expense-document tool for Côte d'Ivoire (pre-launch). Product, brand and content decisions live in [`docs/`](docs/project-brief.md); this README covers the code.

Stack (D-002): Next.js 16 (App Router, Cache Components, Turbopack), TypeScript, Tailwind CSS 4, Vercel. No database yet.

## Run it

```bash
npm install
cp .env.example .env.local   # optional; defaults work for local preview
npm run dev                  # http://localhost:3000
```

| Script | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` / `npm start` | Production build and server |
| `npm run lint` · `npm run typecheck` | ESLint · TypeScript |
| `npm run check:launch` | Pre-launch gate: fails while claims, contact, legal or hosting details are unsettled |

To try the waitlist form locally: `NEXT_PUBLIC_WAITLIST_MODE=live WAITLIST_STORE=dev-log npm run dev`. Sign-ups are accepted and only non-personal fields are logged.

## Where things are

| Path | Contents |
|---|---|
| `src/content/fr.ts` | **All French copy** (from `docs/site/page-copy-fr.md`). Edit text here, not in components. |
| `src/content/index.ts` | Dictionary loader and French typography (narrow no-break spaces before « ; : ! ? % », in amounts) |
| `src/config/site.ts` | Claim flags, waitlist mode, contact, publisher and host details |
| `src/app/` | Routes (French slugs at the root, D-015), metadata, sitemap, robots, share image, icon |
| `src/components/` | Header, footer, sections, waitlist block and form, illustrations |
| `src/lib/waitlist*.ts` | Form validation (shared client/server) and the storage stub |
| `scripts/check-launch.ts` | Launch gate |

## Rules built into the code

- **Claim flags** (`claims` in `src/config/site.ts`): copy that depends on an unconfirmed product promise ([SYS] SYSCOHADA mapping, [REV] human review, [EXP] export) goes through `claim()`. Set a flag to `dropped` and the fallback wording appears everywhere; set it to `confirmed` once the founder confirms. `unconfirmed` blocks launch.
- **Waitlist modes** (`NEXT_PUBLIC_WAITLIST_MODE`): `contact` (default) shows contact details only and stores nothing; `live` shows the form; `paused` closes it. Do not switch to `live` before the lawyer signs off (D-010) and storage is chosen (D-004). `src/lib/waitlist-store.ts` is a stub that refuses to save in production until an adapter is written.
- **No indexing before launch**: robots.txt disallows everything and pages send `noindex` until `NEXT_PUBLIC_SITE_LIVE=true`.
- **No third-party requests from visitors**: fonts are self-hosted by `next/font`; there is no analytics, cookie or captcha. Adding any of these is a privacy decision (D-010), not just a code change.
- **Design tokens** (Direction A, D-014) are Tailwind theme values in `src/app/globals.css`: `ink`, `stamp`, `marker`, `muted`, `receipt`, `rule`. Yellow `marker` is only for fields the product reads.
- **Adding English** (D-005): create `src/content/en.ts` typed as `Dictionary`, then add `/en` routes that reuse the same page components. No layout changes should be needed.

## Before launch

Run `npm run check:launch` with production environment variables set; it lists what is missing. The non-code items (claims review, lawyer, tax adviser, native-speaker pass, trademark search) are tracked in `docs/project-brief.md` and `docs/site/page-copy-fr.md` §8.
