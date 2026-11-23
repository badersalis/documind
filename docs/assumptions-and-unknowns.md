# Assumptions and Unknowns — Tikéo (formerly Documind)

_Last updated: 2026-11-23 (consolidated after Phase 1 desk research)_

Types: **fact** (founder-confirmed) · **finding** (desk research; sourced but not re-checked by the Director) · **assumption** (founder belief, not validated) · **hypothesis** (Director's working guess, to be tested) · **unknown** (no information yet)

Research sources: `research/market-research.md` (E-numbers), `research/competitor-analysis.md`, `research/customer-personas.md`, `brand/name-check.md`. All of it is agent desk research dated 2026-11-23. Re-verify every figure before using it in public copy.

## Facts (founder-confirmed)
| ID | Item | Evidence | Confidence | Next validation |
|---|---|---|---|---|
| F1 | Product is an AI expense-classification SaaS for invoices and receipts | Founder intake 2026-11-23 | High | — |
| F2 | Initial market is Côte d'Ivoire, with later expansion to francophone West Africa and beyond | Founder intake | High | International horizon → D-011 |
| F3 | This phase is the marketing website only | Founder intake; D-001 | High | — |
| F4 | Stack: Next.js + TypeScript + Tailwind on Vercel; Supabase only when needed | Founder intake; D-002 | High | — |
| F5 | No budget or deadline confirmed | Founder intake | High | Revisit before build |
| F6 | No brand inputs supplied (logo, guidelines, imagery) | Not supplied at intake | Medium | Founder to confirm none exist |
| F7 | Positioning stance: "expense layer", a complement to existing tools | D-008 | High (as a decision) | Interviews may revise |
| F8 | Audience: dual, with an SMB-first hero and an accountant path | D-009 | High (as a decision) | Interviews may revise |

## Founder assumptions
| ID | Item | Evidence | Confidence | Owner | Next validation |
|---|---|---|---|---|---|
| A1 | Target segments: SMBs, freelancers, accountants/firms, finance/admin teams | Founder belief; built out as personas P1–P4 (hypothesis set) | Medium | Founder | 8–10 SMB/independent and 5–6 accountant interviews |
| A2 | Manual expense categorisation is a significant pain for these segments in CI | No direct evidence. FNE and VAT pressure is a plausible driver (E16–E22). | Medium | Founder | Interviews; waitlist response |
| A3 | Founder headline: "Turn invoices into organized expenses, automatically." | Founder hypothesis. "Automatically" conflicts with the human-review trust stance (R1). | Medium-Low | Founder | `/brand-positioning`; 5-second tests |
| A4 | Business model is subscription SaaS | Implied. Local anchor 15k–90k FCFA/mo (R-5). | Medium | Founder | WTP questions in interviews; pricing work deferred (D-007) |

## Director hypotheses
| ID | Item | Evidence | Confidence | Owner | Next validation |
|---|---|---|---|---|---|
| H1 | French is the primary launch language; English is secondary | French is the official language; research §6 | High | Director | Founder confirm (D-005) |
| H2 | Traffic is roughly 50/50 mobile/desktop; accountants skew to desktop | StatCounter Oct 2026: 53% mobile (E8; volatile). The B2B skew is inference. | Medium | Director | Site analytics by role after launch |
| H3 | Accountants are an efficient channel (one firm reaches many clients) | ~280 chartered accountants (R-3); reasoning only | Low-Medium | Director | Accountant interviews; ≥2–3 pilot interest |
| H4 | Trust and data-handling messaging strongly affects conversion | Reasoning; financial-document product | Medium | Director | Interviews (top-2 objection?); FAQ engagement |
| H5 | Law 2013-450 (ARTCI) applies to waitlist data: prior declaration, plus **prior authorisation for transfers outside CI**. Foreign hosting is likely in scope. | DLA Piper guide 2025-01; law text (secondary) | Medium-High | Legal specialist | **Legal review before the waitlist goes live (D-010)** |
| H6 | "Expense layer, not another ERP" is the strongest whitespace | Competitor analysis §8 | Medium | Founder | Adopted as D-008; interviews to confirm |
| H7 | WhatsApp photos to the accountant are the dominant current intake behaviour | Inferred from vendor practices | Low-Medium | Founder | Interviews; optional waitlist question |
| H8 | SYSCOHADA vocabulary signals local relevance better than generic "expense categories" | Research §1, §6; international tools lack it (low confidence) | Medium | Director | 5-second / message tests |
| H9 | Marketing opt-in must be explicit (unticked) under Law 2013-546 | Cited in market research; not verified | Medium | Legal specialist | Same review as D-010 |

## Desk-research findings
| ID | Item | Evidence | Confidence | Next validation |
|---|---|---|---|---|
| R-1 | FNE (electronic normalised invoice) launched July 2025; DGI controls since 1 Sept 2026 | E16–E19 (press/official) | Medium-High | Tax adviser before use in any claim |
| R-2 | Revised SYSCOHADA (2017) is the chart of accounts; small entities may use SMT | OHADA | High | — |
| R-3 | ~280 chartered accountants (OECCI, Oct 2024) | Koaci (press) | Medium | OECCI register |
| R-4 | No CI-dedicated receipt→categorised-expense product found. Madata (an Abidjan ERP) advertises receipt OCR inside its ERP. | Competitor analysis | Medium | Demo Madata; verify AccounTech AI and Konta |
| R-5 | Local SMB suite prices: 15,000–90,000 FCFA/mo; EU capture tools €25–€140/mo | Vendor pages | Medium-High | — |
| R-6 | Mobile money is the dominant payment rail (financial inclusion 88.7% in 2025) | BCEAO (E17) | Medium-High | WTP interviews |
| R-7 | "Documind" name: USPTO filing SN 99570015 (Classes 9/42); ≥6 other Documind document-AI products; documind.ai for sale; verdict "reconsider" | Name check (aggregators; TSDR not confirmed) | Medium | Formal search (D-006) |
| R-8 | Possible competitor not in the competitor analysis: **Akrio** (More Than Accountants Ltd) is on the CI App Store, offers receipt/invoice OCR with categorisation, and syncs to Xero, Zoho and FreeAgent. https://apps.apple.com/ci/app/akrio/id6557078369 | Naming-sprint agent, incidental find | Low-Medium (not examined) | Business strategist to profile; add to `competitor-analysis.md` |
| R-9 | Naming shortlist: Tikéo, Recevo, Clarto (desk scan only; no register searches, WHOIS, handle or local-language checks) | `brand/naming-sprint.md` | Medium | Formal OAPI/WIPO search; Dioula/Baoulé/Bété/Nouchi check |

## Unknowns
| ID | Item | Status | Owner | Next validation |
|---|---|---|---|---|
| U1 | Current alternatives and pricing | **Partly answered** (R-4, R-5). AccounTech AI and Konta unverified. No product trials yet. | Business strategist | Demos / trials |
| U2 | Market size and willingness to pay in CI | Open; no defensible basis found | Business strategist / Founder | Interviews; INS / CGECI census |
| U3 | Whether the name is free to use | **Tikéo chosen (D-013)** on a desk scan only. OAPI, WIPO, EUIPO and USPTO not searched. | Founder + IP agent | Formal search; early OAPI filing |
| U4 | Domain (.com, .ci, other) | tikeo.com is on the GoDaddy aftermarket (price not retrieved); tikeo.ci and tikeo.app did not resolve (inconclusive). No WHOIS run. | Founder | WHOIS check; any purchase needs founder approval |
| U5 | Waitlist fields and storage mechanism | Fields proposed (email, role, optional WhatsApp, opt-in). Storage open. | Founder | D-004 + D-010 |
| U6 | Analytics approach and cookie consent needs | Open | Growth analyst | `/growth-measurement` |
| U7 | Planned product launch timing (affects "coming soon" wording) | Open | Founder | Founder input |
| U8 | Local tax/invoicing specifics relevant to messaging | Partly answered (R-1, R-2). FNE penalties unknown. | Tax adviser | Specialist review before any claim |
| U9 | Contact channels expected locally (WhatsApp vs email; local phone) | Open | Founder | Founder input; interviews |
| U10 | Whether third-party tools can access FNE data on received invoices | Open | Tax adviser | Future phase |
| U11 | Number of formal SMEs and freelancers in CI | Open (RGEE-CI results unpublished) | — | INS / CGECI |
| U12 | International horizon (does a US/EU conflict matter within 3 years?) | Not stated; less pressing now that Documind is dropped | Founder | Founder input |
| U13 | Budget for a formal trademark search | Open (estimate of a few hundred USD is an assumption) | Founder | Founder input |
