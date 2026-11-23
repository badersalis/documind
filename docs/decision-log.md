# Decision Log — Documind

| ID | Date | Decision | Context/options | Rationale | Consequences | Owner | Status |
|---|---|---|---|---|---|---|---|
| D-001 | 2026-11-23 | Current phase covers the marketing website only | Alternatives: build an MVP app in parallel | Founder priority: communicate the vision and generate interest first | No auth, backend, DB, document pipeline or dashboard. App work needs a new phase and approval. | Founder | Decided |
| D-002 | 2026-11-23 | Stack: Next.js + TypeScript + Tailwind CSS, hosted on Vercel | Founder preference | Matches the future product stack and keeps the site maintainable | Supabase is deferred until backend functionality is needed | Founder | Decided |
| D-003 | 2026-11-23 | Make no compliance or certification claims unless verified. Security and privacy review is required before any document processing. | — | Sensitive financial data in the future product | Copy is reviewed for claims in QA. Specialist review is a gate for the future build phase. | Founder | Decided |
| D-004 | 2026-11-23 | Waitlist/contact capture mechanism | Options: (a) Supabase table via a server action (free tier; aligns with the future stack); (b) third-party form or email service (fastest; vendor holds the data); (c) mailto/contact only (no storage) | — | Affects privacy notice, cost and data ownership. Using any paid service needs founder approval. | Founder | **Open.** Director recommends (a), decide at build time |
| D-005 | 2026-11-23 | Launch language(s) | Options: French-only at launch with en-ready structure; French + English at launch | — | Affects copy effort and SEO (hreflang) | Founder | **Open.** Director recommends French first, i18n-ready routing, English as fast follow |
| D-006 | 2026-11-23 | Confirm the "Documind" name is usable (trademark, domain, handles) before the brand identity is finalised | — | Avoid rebrand cost | May trigger naming exploration | Founder | **Open** |
| D-007 | 2026-11-23 | Include a Pricing page? | Excluded unless a pricing strategy is established | Founder instruction | Page omitted at launch by default | Founder | **Open.** Default: exclude |
