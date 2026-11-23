# Project Brief — Documind

_Last updated: 2026-11-23 · Phase: 0 (Intake) · Owner: Founder_

> Name spelling: **Documind** (one word, capital D only). Not "DocuMind".

## Overview
- **Project name:** Documind
- **Client/company:** Founder's own product (not a client project)
- **Industry:** Fintech-adjacent B2B SaaS: expense management / accounting automation
- **Geography/jurisdictions:** Côte d'Ivoire first; possible expansion to French-speaking West Africa, then other markets
- **Stage:** Idea / pre-validation. The product is not built yet; this phase is the marketing website only.

## Problem and users
- **Problem to solve:** Reviewing, extracting, organising and categorising business expenses from invoices and receipts by hand is slow and repetitive.
- **Product concept:** Users upload invoices or receipts. AI reads each document, extracts the expense data and assigns an expense category.
- **Positioning hypothesis:** "Turn invoices into organized expenses, automatically." (founder hypothesis, not yet validated)
- **Primary users (hypothesis):** SMBs; freelancers and independent professionals
- **Secondary users (hypothesis):** Accountants and accounting firms; finance and administrative teams
- **Likely payers:** Businesses, freelancers and accounting professionals
- **Current alternatives:** Not yet researched. Likely candidates to check: manual entry in spreadsheets, local accountants, generic accounting software, and international receipt-scanning tools.
- **Evidence available:** None yet. There are no customer interviews, demand data or competitor analysis.

## Business goals
- **Desired outcome (this phase):** A high-quality marketing website that communicates the product vision and generates interest (waitlist / contact sign-ups).
- **Success metrics (proposed, not yet agreed):** see "Success measures" below.
- **Business model/pricing hypothesis:** Subscription SaaS (assumed). No pricing strategy exists yet, so the Pricing page is excluded until one is set.
- **Budget/time constraints:** No confirmed budget or deadline. Prioritise quality and keep costs low. Avoid paid services and unnecessary backend.

## Product scope — this phase
**Deliverables, in order:**
1. Positioning, target audience and value proposition
2. Brand identity and visual direction
3. Website structure, messaging and UX
4. Design and build of a polished, responsive marketing site
5. Review for quality, accessibility, SEO, responsiveness and performance

**Pages:** Home · How It Works · Features · Use Cases · FAQ · Contact / Join the Waitlist · Pricing (only if a pricing strategy is set)

**Must-haves:** Production quality, responsive, fast, maintainable, structured for future product work, and architected for French and English.

**Non-goals (explicit):** The expense-classification app itself, authentication, an application backend or database, the document-processing pipeline, a customer dashboard, and any compliance or security certification claims.

**Integrations:** Waitlist/contact capture only (mechanism to be decided; see D-004 in the decision log).

**Accessibility/localization:** WCAG 2.2 AA target (proposed). Language-ready routing (fr/en). French is assumed to be the launch language for Côte d'Ivoire. Currency, if ever shown, is assumed to be XOF (FCFA).

**Preferred stack:** Next.js, TypeScript, Tailwind CSS, Vercel. Supabase only when backend functionality becomes necessary.

## Brand inputs (optional)
- No brand inputs supplied: no logo, guidelines or existing imagery. Brand identity will be created in deliverable 2, and style assumptions recorded during asset sourcing.

## Risk and constraints
- **Sensitive data (future product):** Invoices and receipts with names, addresses, tax IDs, payment details and transaction data.
- **Sensitive data (this phase):** Waitlist/contact form collects personal data (name, email, possibly company or phone). This is in scope for privacy law even on a marketing site.
- **Regulated activity:** Financial documents and possible links to tax and accounting workflows. This needs jurisdiction-specific legal, privacy and security review before any document processing is built.
- **Privacy/security constraints:** Make no claims of GDPR, local data-protection or security-certification compliance unless verified. Security and privacy specialists must assess storage, access control, retention, encryption and applicable regulation before document processing is implemented.
- **Existing technology:** None (empty repository).
- **Hosting preference:** Vercel.

## Initial risks
| # | Risk | Impact | Mitigation |
|---|---|---|---|
| R1 | Marketing copy over-promises (AI accuracy, security, compliance, "automatic") for a product that doesn't exist yet | Trust and legal exposure | Claims review in QA. Use vision/"coming soon" language. No certification or compliance claims. |
| R2 | Positioning built on untested assumptions about CI users' needs | Low conversion, wrong message | Treat the site as a validation tool. Instrument the waitlist. Run brief customer conversations in parallel (founder). |
| R3 | Name "Documind" may conflict with existing trademarks, products or domains | Rebrand cost | Trademark and domain check before brand identity is finalised (D-006) |
| R4 | Waitlist collects personal data without a lawful basis or privacy notice | Regulatory / trust | Minimal data fields, a privacy notice and consent wording. Privacy review of the form before launch. |
| R5 | Local-market fit (French-first, mobile-heavy traffic, variable bandwidth) is underweighted | Poor UX / performance | Mobile-first, performance budget, French as primary locale |
| R6 | Scope creep into building the app | Delay and cost | Non-goals listed above. Changes go through the decision log. |

## Success measures (proposed — founder to confirm)
- **Quality gates at launch:** Lighthouse ≥ 90 on Performance, Accessibility, Best Practices and SEO (mobile). No WCAG 2.2 AA blockers. Core Web Vitals "good" (LCP < 2.5 s, CLS < 0.1, INP < 200 ms). Works from 320 px width up.
- **Message clarity:** In a 5-second test, a visitor can say what Documind does.
- **Interest generated:** Waitlist sign-ups and waitlist conversion rate. Targets to be set after a baseline is established; no numeric target is invented here.
- **Maintainability:** Content is separated from components. Adding the English locale needs no layout rework.

## Evidence status
### Confirmed facts (founder-stated, 2026-11-23)
- Founder-owned product named Documind, an AI expense-classification SaaS (invoice/receipt → extracted data → category)
- Initial market: Côte d'Ivoire
- This phase covers the marketing website only. No app, auth, backend, DB or pipeline.
- Preferred stack: Next.js, TypeScript, Tailwind, Vercel (Supabase later)
- No confirmed budget or deadline. Cost-conscious approach.
- No compliance claims without verification.
- No brand inputs supplied

### Assumptions
See `assumptions-and-unknowns.md`.

### Unknowns
See `assumptions-and-unknowns.md`.

### Decisions required
See `decision-log.md` (D-004 to D-007 are open).

## Recommended next phase
**Phase 1: Positioning and discovery (deliverable 1).** Run `/market-research` (Côte d'Ivoire SMB, freelancer and accounting landscape; local invoicing and tax context), `/competitor-analysis` (local and international alternatives) and `/customer-personas`, then `/brand-positioning`, which produces the value proposition and messaging. The name and trademark check (D-006) runs in parallel. Visual direction (deliverable 2) starts only after positioning is approved.
