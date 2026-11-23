# Project Brief — Documind (working name)

_Last updated: 2026-11-23 (intake refresh after Phase 1 desk research) · Phase: 1 (Positioning and discovery) · Owner: Founder_

> **Name status:** "Documind" is a **working name**. The preliminary name check returned "reconsider" and a naming sprint is under way (D-006). While the name is in use, spell it **Documind** (one word, capital D only), not "DocuMind".

## Overview
- **Project name:** Documind (working name, pending naming sprint)
- **Client/company:** Founder's own product (not a client project)
- **Industry:** Fintech-adjacent B2B SaaS: expense capture and classification / accounting automation
- **Geography/jurisdictions:** Côte d'Ivoire first; then francophone UEMOA/OHADA West Africa; "possibly international" later (horizon unconfirmed)
- **Stage:** Idea / pre-validation. The product is not built. This phase covers the **marketing website only**.

## Problem and users
- **Problem:** Reviewing, extracting, organising and categorising business expenses from invoices and receipts by hand is slow and repetitive.
- **Product concept:** Users upload a photo or PDF of an invoice or receipt. AI extracts the expense data and suggests a category. A human reviews it, and the result can be exported to the accountant, Sage, Odoo or Excel.
- **Stance (decided, D-008):** An **expense layer** that sits alongside existing tools, not another ERP. It complements Sage, Odoo, Excel and accountants.
- **Positioning hypotheses (to be settled in `/brand-positioning`):**
  - Founder original: "Turn invoices into organized expenses, automatically."
  - Research-led hooks: SYSCOHADA-native categories, the FNE (e-invoicing) context without claiming compliance, accountant leverage, and monthly VAT readiness. See `research/market-research.md` §6.
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
1. Positioning, target audience and value proposition. _Research done; positioning and naming are next._
2. Brand identity and visual direction. _Blocked until a name is chosen and a formal search is done (D-006)._
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
| Trademark | USPTO DOCUMIND filing in Classes 9/42; crowded name; OAPI not searched | IP agent (OAPI/WIPO) | Before spending on identity or domains |
| Future product (out of scope) | Financial documents containing personal, tax and payment data | Security + privacy + legal review | Before any document processing is built (D-003) |

## Initial risks
| # | Risk | Impact | Mitigation |
|---|---|---|---|
| R1 | Copy over-promises (AI accuracy, "automatic", security, compliance, FNE) | Trust and legal exposure | Claims review in QA. Pre-launch framing ("en cours de développement"). Human review stated. No badges. |
| R2 | Positioning rests on desk research and unvalidated personas | Wrong message, low conversion | Founder runs ≥15 problem interviews in parallel. 5-second headline tests. Role field on the waitlist. |
| R3 | **Name conflict (realised):** USPTO filing in the same classes, ≥6 Documind document-AI products, poor domains | Rebrand cost; weak SEO and distinctiveness | Naming sprint now. Formal OAPI/WIPO search on the final candidate. No identity spend before then. |
| R4 | Waitlist collects data before ARTCI declaration or transfer authorisation | Regulatory exposure | D-010 launch gate. Minimal fields. Privacy notice in French. Data location stated honestly. |
| R5 | Copy suggests Documind is an FNE / DGI solution | Misleading claim; tax-authority exposure | FNE mentioned as context only. Tax-adviser review. |
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
- **Confirmed facts:** founder-stated items F1–F6 in `assumptions-and-unknowns.md`, plus founder decisions D-001 to D-003, D-006 (sprint), D-008 and D-009.
- **Assumptions, hypotheses, unknowns:** `assumptions-and-unknowns.md`
- **Decisions:** `decision-log.md`. Open: D-004, D-005, D-007, D-010, D-011.

## Open questions for the founder (none block the next step)
1. **International horizon:** Is expansion beyond OAPI countries (US/EU) realistic within 3 years? This decides how much the USPTO conflict matters and drives naming criteria (D-011).
2. **Formal trademark search:** Is there budget for an OAPI + WIPO search through an IP agent? The research assumes a few hundred USD; this is an assumption, not a quote.
3. **Name meaning:** Should the name signal expenses and money (for example *justificatif*, *reçu*) or general document intelligence?
4. **Launch language (D-005):** French only at launch, with English as a fast follow?
5. **Contact channel:** Will you offer a WhatsApp business number or a local phone number on the site? Will you tell a founder or "made in Abidjan" story?
6. **Product timing:** Is there a rough product launch window? This affects the "coming soon" wording (U7).
7. **Brand inputs:** Can you confirm that no logo, guidelines or imagery exist?

## Recommended next phase
**Finish Phase 1 with two tracks in parallel:**
1. **Naming sprint** (brand-creative-director): screen the shortlist (Justif/Justifio, Reçu-based coinages, Factalis, Kauri, Trezo, Pièce-based coinages, plus Documind as the control) for conflicts, OAPI-friendliness, French pronunciation and domains. The output is 2–3 candidates for founder choice, then a formal search.
2. **`/brand-positioning`:** value proposition, messaging pillars and 2–3 headline variants for the "expense layer" stance and the dual audience. Keep it independent of the name.

**In parallel (founder):** start problem interviews (8–10 SMB/independent, 5–6 accountants). Brief a CI data-protection lawyer early, because D-010 is the longest-lead gate.

**Then Phase 2:** visual direction and asset sourcing, once the name is chosen and positioning is approved.
