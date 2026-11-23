# Customer Personas & Jobs-to-be-Done — Documind (working name)

_Prepared 2026-11-23 · Phase 1 · Owner: Director · Status: **hypothesis set, not yet validated**_

## Evidence basis — read first
- **No customer interviews, surveys or usage data exist yet.** Nothing here is a customer quote, and none should be read as one.
- Labels used on every element:
  - **[O] Observed (desk):** backed by a sourced finding in `market-research.md` (E-numbers) or `competitor-analysis.md` (C-sections).
  - **[I] Inferred:** reasoned from observed context.
  - **[H] Hypothetical:** a plausible assumption with no evidence yet.
- The archetypes are roles, not demographic profiles. Segmentation is by job, context, buying role and constraints.
- Decisions applied: complement positioning ("expense layer", D-008); dual audience with SMB-first hero and an accountant path (D-009).

## Segment map

| # | Persona (role archetype) | Site priority | Buying role | Why it matters |
|---|---|---|---|---|
| P1 | **The owner-manager**: runs a formal TPE/PME (≈2–30 staff) | Primary (hero) | Decides and pays | Largest formal segment; feels FNE/VAT pressure directly [O E16–E22] |
| P2 | **The independent**: freelancer, consultant or liberal profession | Primary (shares the hero with P1) | Decides and pays, price-sensitive | Low admin capacity, high receipt volume relative to time available [H] |
| P3 | **The accountant**: chartered accountant, comptable agréé or small cabinet | Secondary path (own section/page) | Recommender, possibly payer per client file | Scarce profession (~280 experts-comptables [O E13]); one firm reaches many clients [I] |
| P4 | **The finance/admin staffer**: assistant comptable, admin or finance lead in a structured PME | Tertiary (covered inside P1 content) | User and influencer; P1 or a DAF decides | Does the actual data entry in larger SMBs [I] |

---

## P1 — The owner-manager (primary)

**Context**
- Runs a formal business in Abidjan or another city; registered, with a tax regime (RNI/RSI/RME/entreprenant) [O E18].
- Does bookkeeping themselves or hands receipts to an external accountant monthly or quarterly [I].
- Uses a smartphone all day, a laptop some of the day; WhatsApp is the default work channel [I; WhatsApp usage data is L-confidence, E32].
- Has been confronted with FNE in 2025–26 for **issuing** invoices [O E16–E20]. Expense-side habits are probably unchanged [H].

**Jobs-to-be-done**
- *Core:* When expenses pile up (receipts in a drawer, invoice PDFs in email and WhatsApp), I want them captured and sorted into the right categories without retyping, so I can hand clean books to my accountant and know where my money went. [H]
- *Related:* Have deductible VAT ready before the monthly e-impots filing [I from E22]. Avoid losing receipts that justify expenses [I]. Know spend by category in FCFA [H].
- *Emotional/social:* Feel in control and "en règle"; not be embarrassed by a shoebox in front of the accountant or the tax office [H].

**Pains**
- Time lost re-keying and sorting; done in evenings or before deadlines [H].
- Lost or faded thermal receipts [I; document quality noted at L-confidence, E34].
- Accountant asks for missing documents; back-and-forth on WhatsApp [H].
- Not sure which category or SYSCOHADA account an expense belongs to [H].

**Desired outcomes / success criteria**
- Snap or forward a document in seconds; categories are proposed and they just confirm [H].
- Monthly export or accountant handoff with no rework [H].
- Clear view of spending by category [H].

**Triggers:** monthly VAT deadline [I]; FNE controls and tax-audit worry [I from E18]; year-end closing [I]; accountant complaining about missing receipts [H]; business growth making Excel unmanageable [H].

**Current alternatives:** paper and Excel; WhatsApp photos to the accountant; Madata or Sage for those already on a suite [O C3]; doing nothing until year-end [H].

**Objections (to answer on the site)**
1. "Is my financial data safe? Where is it stored? Who sees it?" [I, H4]
2. "Will the AI get it wrong?" [H]
3. "I already have an accountant / Sage, so why add another tool?" [I from D-008]
4. "How much will it cost, and can I pay with mobile money?" [I from E26–E28]
5. "Does it understand our receipts (handwritten, stamped, in French) and SYSCOHADA?" [I]

**Site implications:** hero in plain French about time and order, not "AI". Show a local receipt → extracted fields → category visual. Trust FAQ high on the page. A "works with your accountant / Sage / Excel" strip.

---

## P2 — The independent (primary, shares the hero)

**Context**
- Consultant, developer, designer, trainer, doctor or lawyer in private practice; often entreprenant or small-business regime [I].
- Mixes personal and business spend [H]. Mobile-heavy [I E8].
- Price-sensitive and expects a free start [I from the Zoho free tier and chatbots, C5–C6].

**Jobs-to-be-done**
- *Core:* When I pay for something for my work, I want to capture the receipt instantly and have it sorted, so I don't lose deductible expenses or waste weekends on admin. [H]
- *Related:* Separate business from personal [H]. Send a tidy summary to the accountant once a year or quarter [H].

**Pains:** no admin help; receipts lost; invoicing obligations now digital (FNE) adding to admin load [I]; categorisation uncertainty [H].

**Desired outcomes:** almost no effort; works from the phone; low or free entry cost [H].

**Triggers:** tax filing period; first FNE-related obligation [I]; client or accountant request for expense proof [H].

**Current alternatives:** nothing or paper; a phone gallery of receipt photos; generic AI chatbots to read a receipt [I, C5].

**Objections:** "Is it worth paying for?"; "Is it too complex or built for big companies?"; data safety [H].

**Site implications:** a use-case card ("Indépendants"), a mobile-first demo, and copy stressing simplicity. Pricing stays excluded, but "free to start" may be a waitlist test question (pricing hypothesis H-P1, competitor analysis).

---

## P3 — The accountant (secondary path)

**Context**
- Chartered accountant (expert-comptable, ~280 registered [O E13]), comptable agréé or independent bookkeeper (count not found [O gap]).
- Serves many SMB and independent clients; works on desktop in Sage/Excel [I; Sage presence O C4].
- Under workload pressure from FNE, VAT and closings; plausibly overloaded [I from E13].

**Jobs-to-be-done**
- *Core:* When clients send me documents late, as piles of paper or WhatsApp photos, I want them already extracted and coded to SYSCOHADA so I can spend my time reviewing and advising, not typing. [H]
- *Related:* Standardise intake across clients [H]; reduce chasing for missing documents [H]; take on more clients without hiring [H].
- *Professional:* Keep control and responsibility; nothing gets posted without their review [I].

**Pains:** data-entry hours per client file [H]; inconsistent client document quality [I E34]; deadline crunch [I].

**Desired outcomes:** clean, reviewable, exportable data (Sage, Excel) with an audit trail back to the source document [H]; human approval of every entry [I from the gaps found in C7].

**Triggers:** busy season (closings, VAT); new FNE workload; client growth [I].

**Current alternatives:** manual entry in Sage/Excel; junior staff; custom OCR projects (6–12M FCFA, mainly larger firms) [O C4].

**Objections:** "Will it fit my software and SYSCOHADA practice?"; "Accuracy and liability: I sign the accounts"; "Will my clients use it?"; "Client confidentiality" [I].

**Site implications:** a dedicated "Pour les cabinets comptables" section or page: "moins de saisie, plus de conseil" as a direction (market research §6). Exports and human review are front and centre. A separate waitlist role option. No accuracy claims.

---

## P4 — The finance/admin staffer (tertiary)

**Context:** assistant comptable, office manager or finance lead in a structured PME (≈20–200 staff) already on Sage or Odoo [I].
**Core JTBD:** When supplier invoices and staff expense receipts arrive in volume, I want them captured and pre-coded to feed our accounting software, so month-end closes on time. [H]
**Pains:** volume, validation chains, missing receipts from colleagues [H]. **Objections:** integration with existing software and IT/security approval [I].
**Site implications:** covered by the "works with Sage/Odoo/Excel" and security FAQ content, plus a use-case card ("Équipes finance"). Not a hero audience.

---

## Journey hypothesis (marketing site → waitlist)

| Stage | P1/P2 (SMB, independent) | P3 (accountant) | Site element |
|---|---|---|---|
| Trigger | VAT deadline, FNE talk, lost receipt [I] | Busy season, workload [I] | SEO on "SYSCOHADA", "FNE", "notes de frais"; LinkedIn and Facebook [I] |
| Arrive | Mobile, often from social or WhatsApp share [I] | Desktop, from LinkedIn or a referral [I] | Fast mobile page; clear hero |
| Understand (5 s) | "It sorts my receipts and invoices for me" | "It pre-codes my clients' documents" | Hero + three-step How It Works |
| Evaluate | Is it for me? Is it safe? Price? | Does it fit Sage and SYSCOHADA? Who reviews? | Use Cases, Features, trust FAQ |
| Doubt | Data safety, AI errors | Liability, accuracy, client adoption | Honest pre-launch framing, human-review messaging |
| Act | Join waitlist (email + role, optional WhatsApp) | Join waitlist as a cabinet; possibly request a pilot or demo [H] | Waitlist form with role field; contact option |

## Validation plan (highest-impact assumptions first)

| Priority | Assumption to test | Method | Success signal (to agree) |
|---|---|---|---|
| 1 | P1/P2 feel enough pain in expense capture and categorisation to change behaviour | 8–10 problem interviews with owner-managers and independents in Abidjan | Majority describe recurring, time-consuming handling and a workaround they dislike |
| 2 | Accountants are a viable second channel and would recommend or pay per client | 5–6 interviews with experts-comptables or comptables agréés | At least 2–3 express interest in a pilot |
| 3 | WhatsApp photos are the dominant current intake behaviour (H7) | Ask in all interviews; waitlist question "Comment transmettez-vous vos reçus aujourd'hui ?" | Clear modal answer |
| 4 | Trust/data location is a top objection (H4) | Interviews + FAQ engagement after launch | Ranked in top 2 objections |
| 5 | Which headline frame converts: time-saved vs SYSCOHADA/order vs accountant-ready | 5-second tests pre-launch; A/B on waitlist after launch | Comprehension ≥ 80% in 5 s; conversion difference |
| 6 | Willingness to pay and mobile money preference | Van Westendorp questions in interviews (after problem fit) | Price range in FCFA; payment preference |
| 7 | Mobile vs desktop split per segment | Site analytics by waitlist role | Data after ~4 weeks |

**Interview guardrails:** run in French; problem-first (no pitching before the problem section); no collection of real financial documents; record consent; store notes without unnecessary personal data. A discussion guide can be produced on request (`/design:user-research`).
