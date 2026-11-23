# Project Brief — Tikéo (formerly Documind)

_Last updated: 2026-11-23 (Phase 1 complete: positioning approved, name chosen) · Phase: 1 → 2 (Visual direction) · Owner: Founder_

> **Name (decided 2026-11-23, D-013):** **Tikéo**, from *ticket de caisse*. Write it **Tikéo** (capital T, accented é) in brand and copy; use **tikeo** (no accent, lowercase) in domains, handles, code and URLs. "Documind" was the working name and is retired; the repository folder keeps its old name for now. The name is not yet trademark-cleared (see R3).

## Overview
- **Project name:** Tikéo (formerly Documind; chosen 2026-11-23, D-013)
- **Client/company:** Founder's own product (not a client project)
- **Industry:** Fintech-adjacent B2B SaaS: expense capture and classification / accounting automation
- **Geography/jurisdictions:** Côte d'Ivoire first; then francophone UEMOA/OHADA West Africa; "possibly international" later (horizon unconfirmed)
- **Stage:** Idea / pre-validation. The product is not built. This phase covers the **marketing website only**.

## Problem and users
- **Problem:** Reviewing, extracting, organising and categorising business expenses from invoices and receipts by hand is slow and repetitive.
- **Product concept:** Users upload a photo or PDF of an invoice or receipt. AI extracts the expense data and suggests a category. A human reviews it, and the result can be exported to the accountant, Sage, Odoo or Excel.
- **Stance (decided, D-008):** An **expense layer** that sits alongside existing tools, not another ERP. It complements Sage, Odoo, Excel and accountants.
- **Positioning (decided, D-012):** Option A, "order and accountant handoff". Working H1: « Vos reçus et factures, classés et prêts pour votre comptable. » Full detail in `brand/positioning.md`. The headline is still to be validated with the 5-second test.
- **Audience (decided, D-009):** Dual audience. The hero speaks to SMBs, with a dedicated path for accountants.
  - P1 owner-manager of a formal TPE/PME (primary) · P2 independent / freelancer (primary)
  - P3 accountant / small firm (secondary path) · P4 finance/admin staffer (tertiary)
  - See `research/customer-personas.md`. Every persona is a **hypothesis**.
- **Current alternatives (desk research):** WhatsApp photos sent to the accountant, spreadsheets, local ERP/accounting suites (Madata, Sage via integrators, Odoo with OHADA modules), custom OCR projects (6–12 M FCFA), and international capture tools (Dext, Expensify, Zoho Expense, Pennylane), which are priced in EUR/USD and do not support SYSCOHADA. **No CI-dedicated receipt→categorised-expense product was found.** See `research/competitor-analysis.md`.
- **Evidence available:** Desk research only (market, competitors, personas, name check), done by agents on 2026-11-23. The Director has not re-checked the sources. **There are still no customer interviews, demand data or willingness-to-pay data.**

## Business goals
- **Desired outcome (this phase):** A high-quality marketing website that communicates the vision and generates qualified interest: waitlist sign-ups, segmented by role.
- **Secondary outcome:** Use the site as a validation tool. Collect role-split waitlist data and test headline comprehension.
- **Business model hypothesis:** Subscription SaaS priced in FCFA with mobile money support. For accountants, per-document or per-client-file pricing is an option. Local anchors: 15,000–90,000 FCFA/month (local suites). Unvalidated.
- **Budget/time:** No confirmed budget or deadline. Keep costs low. Avoid paid services and unnecessary backend. Any paid service needs founder approval.

## Product scope — this phase
**Deliverables, in order:**
1. Positioning, target audience and value proposition. _Done: positioning approved (D-012), name chosen (D-013)._
2. Brand identity and visual direction. _Name chosen (Tikéo, D-013). Unblocked; formal trademark search still recommended before paid identity spend._
3. Website structure, messaging and UX
4. Design and build of a polished, responsive marketing site
5. Review for quality, accessibility, SEO, responsiveness, performance and claims

**Pages:** Home · How It Works · Features · Use Cases (with an accountant section) · FAQ (trust-heavy) · Contact / Join the Waitlist · Privacy notice · Pricing (only if a pricing strategy exists, D-007)

**Must-haves:** Production quality. Mobile-first from 320 px, with desktop given equal polish for accountants. Fast on mid-range Android over variable 4G. Maintainable, with content separated from components. i18n routing with French as the primary locale (D-005).

**Non-goals (explicit):** The app itself, authentication, an application backend or database, the document-processing pipeline, a customer dashboard, and any compliance, certification, "ARTCI-approved", "DGI-approved" or "FNE solution" claims.

**Integrations:** Waitlist/contact capture only. The mechanism is open (D-004) and gated by legal review (D-010). Minimal fields: email (required), role, optional WhatsApp number, and an unticked marketing opt-in.

**Accessibility/localization:** WCAG 2.2 AA target (proposed). French first, in natural Ivorian business vocabulary (pièces justificatives, notes de frais, SYSCOHADA, TVA 18%, FCFA). English secondary.

**Preferred stack (D-002):** Next.js, TypeScript, Tailwind CSS, Vercel. Supabase only when backend functionality becomes necessary.

## Brand inputs (optional)
- **No brand inputs supplied:** no logo, guidelines or imagery. The founder has not yet confirmed that none exist. If any turn up, store them in `docs/brand/`.
- `docs/brand/name-check.md` holds the preliminary name scan. It is not legal clearance.

## Regulated / sensitive domains — specialist review flags
| Area | Why | Specialist | Gate |
|---|---|---|---|
| Personal data on the waitlist | Law No. 2013-450 (ARTCI): prior declaration; **prior authorisation for transfers outside CI**. Vercel or Supabase hosting is likely in scope. Secondary source; not legal advice. | CI data-protection lawyer | **Before the site collects any data** (D-010) |
| Marketing consent | Opt-in rules for electronic marketing (Law 2013-546 cited in research; not verified) | Same lawyer | Before launch |
| Tax/accounting claims in copy | Statements about SYSCOHADA, FNE or VAT could mislead | Ivorian expert-comptable or tax adviser | Before publishing any such claim |
| Trademark | Tikéo passed a desk scan only (no register search). Nearest sound-alike: Tickeo, a Czech helpdesk SaaS | IP agent (OAPI/WIPO) | Recommended before spending on identity or domains |
| Future product (out of scope) | Financial documents containing personal, tax and payment data | Security + privacy + legal review | Before any document processing is built (D-003) |

## Initial risks
| # | Risk | Impact | Mitigation |
|---|---|---|---|
| R1 | Copy over-promises (AI accuracy, "automatic", security, compliance, FNE) | Trust and legal exposure | Claims review in QA. Pre-launch framing ("en cours de développement"). Human review stated. No badges. |
| R2 | Positioning rests on desk research and unvalidated personas | Wrong message, low conversion | Founder runs ≥15 problem interviews in parallel. 5-second headline tests. Role field on the waitlist. |
| R3 | **Name not yet cleared:** Tikéo chosen on a desk scan only; sound-alike Tickeo (helpdesk SaaS); tikeo.com is on the aftermarket | Forced rebrand later if a conflicting prior mark exists | Formal OAPI + WIPO search and an early OAPI filing (founder-funded, needs approval). Native-speaker language check. |
| R4 | Waitlist collects data before ARTCI declaration or transfer authorisation | Regulatory exposure | D-010 launch gate. Minimal fields. Privacy notice in French. Data location stated honestly. |
| R5 | Copy suggests Tikéo is an FNE / DGI solution | Misleading claim; tax-authority exposure | FNE mentioned as context only. Tax-adviser review. |
| R6 | Local suites (Madata, Sage) deepen AI capture; extraction becomes a commodity | Differentiation erodes | Differentiate on SYSCOHADA mapping, the accountant workflow, local pricing and trust, not on "AI reads receipts". |
| R7 | Research sources are biased or unverified (vendor-written comparisons, press figures) | Bad decisions or public misstatements | Re-verify every figure before it appears in copy. Mark agent research as unverified. |
| R8 | Scope creeps into building the app | Delay and cost | Non-goals above. Changes go through the decision log. |

## Success measures (proposed — founder to confirm)
- **Quality gates at launch:** Lighthouse ≥ 90 on all four categories (mobile). No WCAG 2.2 AA blockers. Core Web Vitals "good" (LCP < 2.5 s, CLS < 0.1, INP < 200 ms). Works from 320 px.
- **Message clarity:** ≥ 80% of 5-second test participants can say what the product does (target taken from the personas validation plan; to be agreed).
- **Interest:** Waitlist sign-ups, conversion rate and role split (SMB / independent / accountant / finance). Numeric targets to be set after a ~4-week baseline. None is invented here.
- **Validation:** Interview signals as set out in `research/customer-personas.md` (validation plan).
- **Maintainability:** Adding the English locale needs no layout rework.
- **Compliance gate:** D-010 legal sign-off obtained before the form goes live.

## Evidence status
- **Confirmed facts:** founder-stated items F1–F6 in `assumptions-and-unknowns.md`, plus founder decisions D-001 to D-003, D-006, D-008, D-009, D-012 and D-013.
- **Assumptions, hypotheses, unknowns:** `assumptions-and-unknowns.md`
- **Decisions:** `decision-log.md`. Open: D-004, D-005, D-007, D-010.

## Open questions for the founder (none block the next step)
1. **Formal trademark search for Tikéo:** Is there budget for an OAPI + WIPO search and an early OAPI filing through an IP agent? The research assumes a few hundred USD; this is an assumption, not a quote.
2. **Product promises:** Confirm which are intended: SYSCOHADA category mapping, human review of each entry, export to the accountant / Sage / Excel, WhatsApp intake (`brand/positioning.md` §10).
3. **Launch language (D-005):** French only at launch, with English as a fast follow?
4. **Contact channel:** Will you offer a WhatsApp business number or a local phone number on the site? Will you tell a founder or "made in Abidjan" story?
5. **Product timing:** Is there a rough product launch window? This affects the "coming soon" wording (U7).
6. **Brand inputs:** Can you confirm that no logo, guidelines or imagery exist?

## Recommended next phase
**Phase 1 is complete** (research, positioning approved under D-012, name chosen under D-013). Founder validation work continues in parallel: interviews, the 5-second test and a native-speaker check of "Tikéo" (`research/interview-guide.md`).

**Phase 2: Brand identity and visual direction (deliverable 2).** Run `/design-research` and `/visual-direction` from the approved positioning and tone principles (`brand/positioning.md` §7), then `/asset-sourcing`. Wordmark work should follow the spelling rule (Tikéo with accent, tikeo in ASCII contexts).

**Before paid spend** on domains, logo files or print: formal OAPI + WIPO search on Tikéo (founder approval needed). **Before launch:** legal review of the waitlist (D-010).
