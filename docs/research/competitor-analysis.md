# Competitor Analysis: Documind

_Prepared: 2026-11-23 · Phase 1 (Positioning and discovery) · Author: Business Strategist agent · Status: draft for founder review. Director note: sources not independently re-checked; several local figures come from competing vendors._

> Every source was accessed on 2026-11-23 unless a different date is given. Prices are copied as published at that date. **[V]** means verified on the vendor's own page. **[3P]** means a third-party or competitor source, not verified. **[INF]** means strategist inference.

---

## 1. Executive summary

- **No dedicated "receipt/invoice to categorised expense" product was found that is built for Côte d'Ivoire.** The local market is served by **all-in-one ERPs and accounting suites**: Madata (Abidjan), Sage 100/X3 through integrators, and Odoo with OHADA modules. **Custom OCR projects** fill the rest, with agencies quoting millions of FCFA. Madata already advertises OCR on receipts and supplier invoices inside its ERP [V][2]. That makes it the closest local overlap.
- **International capture tools (Dext, Expensify, Zoho Expense, Pennylane) are mature but priced and built for Europe or the US.** They charge in EUR or USD and assume the French PCG or US charts of accounts, not SYSCOHADA. None advertises mobile money billing. QuickBooks no longer sells in France [5], and Pennylane's pricing page shows France only [V][7].
- **The regulatory picture has shifted.** Since 2025, Côte d'Ivoire has required the **Facture Normalisée Électronique (FNE)**, issued through the DGI platform [9][10][11]. One third-party source says only FNE invoices allow expense or VAT deduction from December 2025 [12, unverified]. This is both a **threat** and an **opportunity**. Structured e-invoices reduce the need for OCR on compliant B2B invoices. They also create a new job: checking that an expense is backed by a valid FNE, then sorting it into SYSCOHADA accounts. Non-FNE documents such as receipts, informal suppliers and foreign invoices remain.
- **Pricing anchors are wide.** Local SMB suites cost **15,000–90,000 FCFA/month** [V][2]. EU capture tools cost **€25–€140/month** (about 16,000–92,000 FCFA) [V][6][3P][15]. Custom builds cost **6–12 million FCFA up front** [3P][13].
- **The whitespace is a narrow, local-first tool** that is French-first, works on mobile and WhatsApp, prices in FCFA, outputs data mapped to SYSCOHADA and FNE, and is accountant-friendly. It should sit alongside existing tools, not replace an ERP. The positioning should avoid "AI magic" clichés and unverified accuracy or security claims.

## 2. Scope & method

- **Geography:** Côte d'Ivoire first, plus UEMOA/OHADA francophone West Africa. International tools are judged on how usable they are from Côte d'Ivoire.
- **Period:** Evidence published 2019–2026. Pricing as displayed on 2026-11-23.
- **Method:** Web search in French and English, vendor homepages and pricing pages, regional press (APA, AIP, Koaci, TechCabal, Afriksoir) and tax-compliance publishers.
- **Limitations:** No product trials, demos or customer interviews. Some pricing pages failed to load (Expensify, Sage CI); help-centre or third-party figures were used and labelled. Several local "comparisons" are written by vendors (Madata, Kolonell, I am Beezy). No independent accuracy benchmarks exist for OCR on Ivorian documents. AccounTech AI and Konta could not be confirmed from their own sites.
- **Currency:** €1 = 655.957 FCFA (fixed peg). USD not converted.

## 3. Competitor matrix

| Competitor | Type | Primary segment | Pricing (as published) | French | FCFA billing | SYSCOHADA | Mobile money | Overlap with Documind |
|---|---|---|---|---|---|---|---|---|
| **Madata** (Abidjan) | Local all-in-one ERP | CI TPE/PME, many sectors | 15,000–70,000 FCFA/mo annual; 17,000–90,000 monthly; 5 users incl. [V][2] | Yes | Yes | Yes (claims) | Yes: Wave, Orange Money, MTN MoMo, Djamo… [V] | **High.** OCR of receipts and supplier invoices plus AI assistant "Mia" [V] |
| **Sage** (100 Expérience, X3, Start) | Incumbent accounting/ERP via integrators | Structured SMBs, mid-market, accounting firms | Quote-based [V][3]. "Sage Start" 15,000–30,000 FCFA/mo [3P][14] | Yes | Via resellers | Yes [3P] | Not found | Medium. FNE module launched Dec 2025 [8]; AI messaging Nov 2026 [4] |
| **Odoo** + OHADA module | Modular ERP | SMBs with an integrator | €8.95/user/mo cited [3P][2]; third-party SYSCOHADA module $98.57 one-off [V][16] | Yes | No (EUR/USD) | Generic OHADA package plus third-party module [V][16][17] | Not found | Medium. Has invoice-automation app [18] |
| **Custom OCR agencies** (e.g. Kolonell, Dakar) | Bespoke build | Mid/large SMBs, 800–3,000 invoices/mo | 6–12M FCFA build plus about 15–40 FCFA/invoice [3P][13] | Yes | Yes | Configured per client | Agency accepts Wave/OM | High for larger firms; shows demand exists |
| **AccounTech AI** (Dakar, claims SN/CI/MA) | AI accounting/ERP | African SMBs | Not found | Yes | Unverified | Claims SYSCOHADA (search snippet only) | Unverified | Potentially high. **Unverified** [19] |
| **Konta** | Accounting app | African SMBs | "From 5,000 FCFA/mo" [3P only][14] | Reported | Reported | Reported | Reported | Unknown. **Unverified** |
| **Dext** | Capture and categorisation | Accounting firms, SMBs (FR/UK) | Free tier; €25/mo HT (annual) for 250 docs, 1–5 users; AI assistant +€9/mo [V][6] | Yes | No (EUR) | No (French PCG, FEC exports) | No | **Very high** (the closest feature match) |
| **Expensify** | Expense reports and receipt scan | SMB to mid-market (US-centric) | Collect $5/member/mo; Control $18–36 (as low as $9 with the US Card) [V-help][20] | Not verified | No (USD) | No | No | High (SmartScan), but a poor local fit |
| **Zoho Expense** | Expense reports | SMBs, global | Free: 3 users, 20 autoscans/user/mo; Standard $4–5, Premium $7–9 per user/mo (regional) [V][21] | Autoscan reads French [V][22] | No | No | No | High. Free tier is the entry benchmark |
| **Pennylane** | Accounting plus finance (FR) | French freelancers, TPE, accountants | €7 / €14 / €24 / €79 per month HT; categorisation from €24 [V][7] | Yes | No | No | No | Medium. Messaging benchmark; France only |
| **QuickBooks** | Accounting | — | Withdrawn from France, end of 2023 [5] | — | — | No | — | Low. Signals the risk of global players leaving francophone markets |
| **Spendesk / Ramp / Brex** | Corporate cards and spend management | EU/US scale-ups | Not checked in detail | Spendesk yes | No | No | No | Low. No African availability found [23] |
| **Julaya** (Abidjan) | B2B payments to mobile money and bank | CI SMBs to large orgs; CI, SN, BJ, TG | Not published | Yes | Yes | n/a | Core | Low–medium. Possible partner or channel [24][25] |
| **Mindee** | OCR API | Developers | Free 250 receipts/mo, then $0.10–0.01/receipt [V][26] | Yes | No | No | No | Low as a competitor. Possible enabler; also lowers barriers to entry |

## 4. Profiles (brief)

**Madata (Adisa Lab, Abidjan).** Headline "L'ERP n°1 en Afrique : Gérez. Vendez. Grandissez."; tagline "L'application tout-en-un pour gérer votre entreprise." [V][2]. Features: point of sale, stock, SYSCOHADA accounting, Ivorian payroll, FNE invoicing ("certified", per the vendor), OCR of receipts and supplier invoices, and the AI assistant Mia. Trust signals: TLS, daily backups, role-based access, 7-day WhatsApp/email/phone support, named testimonials, self-reported 5/5 rating. Pricing per company in FCFA; annual plans payable in 4 instalments. *[INF]* The strongest local benchmark for messaging and price. Its breadth is a weakness for buyers who only want expense capture or already use Sage or an accountant.

**Sage.** Reports 40 years in CI, 800+ clients and ~20 local integrators (company figures) [4]. Launched an FNE compliance solution for CI in December 2025 [8]. At the Sage Africa Tour Abidjan (19 Nov 2026) it promoted AI in Sage 100 Expérience and X3 [4]. Pricing not published [3]. *[INF]* Sage owns the "compliance and trust" ground with firms. Documind could feed Sage rather than compete with it.

**Odoo.** Ships a generic "Comptabilité – OHADA" localisation [17]. A third-party SYSCOHADA module covers Odoo 18/19 and lists CI among 17 OHADA states; it warns users to validate mappings with a statutory auditor [16]. Abidjan integrators are listed (Veone, Consultech) [16].

**Custom OCR agencies (Kolonell).** A Dakar agency article (7 Oct 2026) prices an Abidjan OCR+AI invoice project at 6–12M FCFA plus ~15–40 FCFA/invoice [13]. It claims 92–97% accuracy for custom builds vs 80–88% for "European SaaS on local invoices": **vendor claims with no methodology**. *[INF]* Larger Ivorian SMBs are being sold invoice OCR today. A SaaS at a fraction of a custom build is a credible wedge.

**Dext.** Tagline "Surqualifié pour l'admin. Irremplaçable pour tout le reste." [V][6]. Capture by app, email or upload; claims OCR accuracy ">99%"; 2,500+ supplier connectors; FEC/Quadra exports. Trust claims: ISO 27001, AWS EU hosting, GDPR, 10-year storage. Firm plans reported at €229–€1,098/mo [3P][15]. *[INF]* The feature archetype ("Dext for OHADA"), with no SYSCOHADA, FCFA or FNE support.

**Expensify.** SmartScan receipt capture; per-member USD pricing; best Control price requires the US-oriented Expensify Card [20]. French UI and XOF not verified. *[INF]* Poor local fit.

**Zoho Expense.** Free plan (3 users, 20 autoscans/user/mo); autoscan reads French receipts; multi-currency on all plans (XOF not confirmed) [21][22]. *[INF]* The most accessible international alternative from CI; sets a "free to start" expectation.

**Pennylane.** Plan taglines such as "Facturez, suivez et réglez vos dépenses en un clic."; categorisation from €24/mo; ISO/IEC 27001 badge and Trust Center [V][7]. France only.

**Julaya.** Ivorian B2B payments fintech (CI, SN, BJ, TG); 800M FCFA financing from CDC-CI Capital in October 2025 [24][25]. *[INF]* A possible partner (payments plus receipts reconciliation) rather than a competitor.

## 5. Substitutes (indirect alternatives)

| Substitute | Why it is used [INF unless sourced] | Weakness Documind can exploit |
|---|---|---|
| **Excel / Google Sheets** (incl. OHADA templates sold for 10,000–25,000 FCFA one-off [3P][14]) | Free or cheap, familiar, flexible | Manual entry, no audit trail, no automatic SYSCOHADA updates or FNE checks (noted even by Madata [2]) |
| **External accountant / cabinet** | Trust, compliance, tax filing included | Receives shoeboxes or photos late; re-keying is slow. Position Documind as the accountant's intake tool, not a replacement |
| **Paper filing** | Habit, informality | Lost receipts. Paper normalised invoices no longer accepted (end of exceptional use reported Dec 2025 [11]) |
| **WhatsApp photos to accountant / colleague** | Already on every phone; Madata and Kolonell use WhatsApp for support or intake [2][13] | Unstructured, scattered across chats, no extraction. **The key behaviour to design messaging around** (hypothesis, to validate) |
| **Generic AI chatbots** (ChatGPT, Gemini, Claude) | Read a receipt photo and suggest a category at low or no cost | No bulk workflow, history, consistent SYSCOHADA mapping, export or audit trail; data-handling concerns. Lowers the perceived value of "AI reads your receipt" |
| **Free generic tools** (e.g. Wave Accounting, rated "partial" for OHADA [3P][14]) | Free | Not built for SYSCOHADA or FNE |

## 6. Pricing landscape

**Observed (as published):**
- **Local SMB suites:** Madata 15,000–90,000 FCFA/mo per company [V]; Sage Start reportedly 15,000–30,000 FCFA/mo [3P]; Konta reportedly from 5,000 FCFA/mo [3P].
- **International capture:** Dext €25/mo HT (~16,400 FCFA) for 250 docs [V]; Zoho Expense free tier, then $4–9/user/mo [V]; Expensify from $5/member/mo [V-help]; Pennylane categorisation from €24/mo (~15,700 FCFA) [V].
- **Accounting-firm tools:** Dext firm plans €229–1,098/mo [3P]; CI firm software 1.5–6M FCFA [3P, Kolonell].
- **Custom builds:** 6–12M FCFA plus usage [3P].
- **Common patterns:** free tier or trial; annual discount of 13–20%; volume caps (documents per month); paid AI add-ons; per-company pricing locally vs per-user internationally.

**Pricing hypotheses (NOT recommendations; test before any pricing page):**
- **H-P1:** A free tier capped by documents per month is needed to compete with free alternatives (Zoho, chatbots, Excel).
- **H-P2:** Paid SMB entry tier **below** all-in-one suites, roughly **5,000–15,000 FCFA/month**, priced by document volume rather than per user.
- **H-P3:** An **accountant / cabinet tier** priced per client file is the highest-value segment.
- **H-P4:** Annual payment in instalments and **mobile money billing** lower adoption friction (per Madata's practice [2]).

Validate with willingness-to-pay interviews (Van Westendorp) and waitlist tier-interest questions before publishing any figure.

## 7. Messaging & website patterns

**Common claims observed:** "all-in-one / replace your tools" (Madata); speed and "in one click" (Pennylane); high OCR accuracy percentages (Dext ">99%", Kolonell 92–97%); compliance badges (ISO 27001, GDPR, "FNE certifié"); local proof (FCFA pricing, SYSCOHADA, local payment logos, WhatsApp support); named testimonials and sector pages.

**Gaps (nobody clearly says):**
- What happens to the **accountant** in the workflow: the SMB-to-firm handoff
- How **receipts that are not FNE** (taxis, markets, informal suppliers) are handled
- **Where documents are stored** and who can see them
- A clear **human-review step** ("you approve every category")

**Clichés to avoid:** "Révolutionnez votre comptabilité" · "Propulsé par l'IA" as a headline · "100% automatique" · "Gagnez X heures" (no basis yet) · "n°1 en Afrique" · "Sécurité de niveau bancaire" · unbenchmarked accuracy percentages · "Tout-en-un". Per risk R1, none of these can be backed for a pre-launch product.

## 8. Whitespace & differentiation opportunities (hypotheses)

1. **"The expense layer, not another ERP."** Photo or PDF in, structured expense out, mapped to a SYSCOHADA account and exportable to Sage, Odoo, Excel or the accountant. Complements incumbents instead of fighting Madata or Sage on breadth.
2. **SYSCOHADA-native categories.** No international capture tool offers these; local suites bundle them inside full accounting.
3. **FNE-aware.** Flag whether an expense is backed by a valid FNE and handle non-FNE receipts. **Needs tax specialist validation** before any claim.
4. **Accountant-to-client bridge.** Clients send receipts the way they already do; the firm receives organised data. Targets the WhatsApp substitute directly.
5. **Local pricing and payment.** FCFA, small entry price, mobile money.
6. **Trust through transparency, not badges.** Human review of each category, plain explanation of document handling, no certification claims until real.
7. **French-first, mobile-first, low-bandwidth.**

## 9. Risks

| Risk | Note |
|---|---|
| **Madata or Sage adds deeper AI expense capture** | Madata already claims OCR [2]; Sage is pushing AI in CI [4]. Mitigation [INF]: integrate with them and lean on the accountant channel. |
| **FNE reduces the OCR need** for formal B2B invoices | Value shifts to receipts, informal spend, categorisation and checks. FNE data access is **unknown**. |
| **Commoditised extraction** | OCR APIs (Mindee, free 250/mo [26]) and chatbots make "AI reads receipts" table stakes. Differentiate on local mapping, workflow and trust. |
| **Unverified competitors** | AccounTech AI and Konta could be closer rivals. Verify directly. |
| **Accuracy on local documents** | Handwritten/thermal receipts; Kolonell claims 75–85% on handwritten (vendor figure) [13]. Do not promise accuracy. |
| **Regulatory/tax claims** | SYSCOHADA and FNE statements need review by an Ivorian expert-comptable or tax adviser. |
| **Source bias** | Most local comparisons are written by competing vendors. |

## 10. Sources

All accessed 2026-11-23; publication dates given where known.

1. Kolonell, "Logiciel cabinet comptable Abidjan coût 2026" (vendor). https://kolonell.com/fr/blog/logiciel-cabinet-comptable-abidjan-cout-2026
2. Madata homepage and guide (vendor). https://madata.africa/fr ; https://madata.africa/fr/blog/meilleur-logiciel-gestion-comptabilite-pme-cote-divoire
3. Sage 100 product page. https://sage.com/fr-fr/produits/sage-100/
4. Afriksoir, Sage AI in CI, 2026-11-20. https://afriksoir.net/cote-divoire-sage-mise-sur-lintelligence-artificielle-pour-accelerer-la-transformation-numerique-des-entreprises/
5. Intuit, QuickBooks France message. https://quickbooks.intuit.com/fr/communication/ ; https://insightfulaccountant.com/accounting-tech/vendor-news/intuit-is-turning-out-the-lights-in-france/
6. Dext, Tarifs TPE/PME. https://dext.com/fr/tarifs/entreprise-tpe-pme
7. Pennylane, Tarifs. https://www.pennylane.com/fr/tarifs
8. Financial Afrik, Sage FNE solution, 2025-12-09. https://www.financialafrik.com/2025/12/09/sage-lance-sa-solution-de-conformite-a-la-facture-normalisee-electronique-en-cote-divoire/
9. Sage Maroc blog, FNE guide (vendor). https://www.sage.com/fr-ma/blog/la-fne-en-cote-divoire-guide-complet-sage-cote-divoire/
10. APA News, FNE launch. https://fr.apanews.net/cote-divoire/la-rci-lance-la-facturation-normalisee-electronique/
11. APA News, end of physical normalised invoices. https://fr.apanews.net/governance/rci-fin-de-lusage-de-la-facture-normalisee-physique/
12. LookupTax, FNE (third-party; deductibility claim unverified). https://www.lookuptax.com/docs/einvoicing/fne-einvoicing-cote-divoire
13. Kolonell, OCR/IA invoice pricing Abidjan, 2026-10-07 (vendor). https://kolonell.com/fr/blog/ocr-ia-saisie-factures-fournisseurs-pme-abidjan-prix-2026
14. I am Beezy blog, 2026-03-20 (commercial, unsourced prices). https://blog.iambeezy.app/fr/comptabilite-en-ligne-pme-cote-divoire-outils-gratuits-gestion-2026/
15. Blog du Modérateur, Dext Prepare. https://www.blogdumoderateur.com/tools/dext-prepare/
16. Odoo Apps, SYSCOHADA module (v19). https://apps.odoo.com/apps/modules/19.0/l10n_syscohada_accounting ; https://www.odoo.com/fr_FR/partners/veone-5100
17. Odoo docs, Fiscal localizations. https://www.odoo.com/documentation/saas-17.4/fr/applications/finance/fiscal_localizations.html
18. Odoo, Invoice automation. https://www.odoo.com/fr_FR/app/invoice-automation
19. AccounTech AI homepage (claims unverified). https://www.accountech-ai.com/
20. Expensify Help, pricing. https://help.expensify.com/articles/new-expensify/billing-and-subscriptions/Billing-Overview
21. Zoho Expense pricing (UK). https://zoho.com/uk/expense/pricing
22. Zoho Expense KB, receipt languages. https://www.zoho.com/us/expense/kb/home/receipt-languages-formats/
23. Spendesk, Ramp review (competitor-authored). https://www.spendesk.com/blog/ramp-review-for-europeans/
24. Koaci, Julaya 800M FCFA, 2025-10-17. https://www.koaci.com/article/2025/10/17/cote-divoire/economie/cote-divoire-promotion-de-linclusion-financiere-la-cdci-ci-capital-booste-les-offres-de-service-de-julaya-en-lui-octroyant-un-financement-de-800-millions-fcfa_191245.html
25. TechCabal, Julaya, 2021-08-23. https://techcabal.com/fr/2021/08/23/julaya-is-digitising-payments-in-ivory-coast/
26. Mindee, Receipt OCR. https://mindee.com/fr/product/receipt-ocr-api
