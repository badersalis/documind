# Page Copy (French) — Tikéo marketing site

_Prepared 2026-11-24 · Deliverable 3 · Owner: Director · Status: **first draft for founder review**; claims flagged; needs native-speaker polish and specialist review where marked_

**Inputs:** `brand/positioning.md` (§5 pillars, §6 claims list, §7 tone, §8 homepage hierarchy), `site/information-architecture.md`, `site/waitlist-ux.md`.
**Tone:** vouvoiement; short sentences; outcome before technology; no « IA » in headlines; honest about pre-launch status (positioning §7).
**Typography at build:** narrow no-break space (U+202F) before « ; : ! ? » and inside guillemets; `12 500 FCFA` with a no-break space. Not shown in this file.

### Claim flags
Copy marked with a flag must not ship until its condition is met (positioning §6 and §10).

| Flag | Depends on | Who confirms |
|---|---|---|
| **[SYS]** | SYSCOHADA category mapping is in the product | Founder, then wording reviewed by an Ivorian tax adviser or expert-comptable |
| **[REV]** | Every entry is reviewed by the user before it's saved | Founder |
| **[EXP]** | Export to the accountant, Sage, Odoo or Excel (named formats) | Founder |
| **[DATA]** | Data location and handling answers | D-004 + D-010 (lawyer) |

If a flag can't be cleared by launch, use the **fallback** line given next to it.

---

## 1. Accueil (`/`)

**Title:** Tikéo : vos reçus et factures, classés et prêts pour votre comptable
**Meta description:** Photographiez vos reçus et factures fournisseurs. Tikéo extrait les montants, propose une catégorie et vous validez. Conçu pour les entreprises en Côte d'Ivoire. En cours de développement.

### Hero
- Badge: **En cours de développement**
- H1: **Vos reçus et factures, classés et prêts pour votre comptable.**
- Sub: Photographiez vos pièces justificatives : Tikéo extrait les montants, propose la bonne catégorie SYSCOHADA **[SYS]**, et vous validez **[REV]**. Conçu pour les entreprises et indépendants en Côte d'Ivoire.
  - Fallback without [SYS]: « …propose une catégorie, et vous validez. »
- CTA primary: **Rejoindre la liste d'attente** · CTA secondary: **Voir comment ça marche**

### Problème
- H2: **Des pièces partout, et la saisie toujours à la dernière minute.**
- Text: Reçus dans un tiroir, factures dans vos e-mails, photos sur WhatsApp… Au moment de la TVA ou du bilan, il faut tout retrouver, tout ressaisir, tout classer. Et votre comptable relance pour les pièces manquantes.

### Comment ça marche (3 étapes)
- H2: **Trois étapes, et vous gardez la main.**
1. **Photographiez ou importez.** Un reçu de caisse, une facture fournisseur, un PDF : prenez une photo ou déposez le fichier.
2. **Vérifiez.** Tikéo lit la date, le fournisseur, les montants et la TVA, puis propose une catégorie. Vous corrigez si besoin et vous validez **[REV]**.
3. **Transmettez.** Vos dépenses classées partent vers votre comptable, ou dans un fichier pour Sage, Odoo ou Excel **[EXP]**.
   - Fallback without [EXP]: « Vos dépenses classées sont prêtes à transmettre à votre comptable. »
- Link: Voir le détail →

### Piliers (bande bleue)
- H2: **Pensé pour la façon dont vous travaillez déjà.**
- **Ordre, sans ressaisie.** Vos pièces justificatives, lues et classées. Fini les soirées de saisie.
- **Conçu pour la Côte d'Ivoire.** En français, en FCFA, avec la TVA à 18 % et les catégories du SYSCOHADA **[SYS]**. Fallback: « En français, en FCFA, avec la TVA à 18 %. »
- **Avec vos outils, pas à leur place.** Tikéo ne remplace ni votre comptable, ni votre logiciel. Il les alimente.
- **Vous gardez la main.** Rien n'est enregistré sans votre validation **[REV]**. L'outil propose, vous décidez.

### Pour qui (cartes → Cas d'usage)
- H2: **Pour celles et ceux qui gèrent les pièces.**
- **Dirigeants de PME** : Des dépenses en ordre chaque mois, sans y passer vos soirées. → `#dirigeants`
- **Indépendants** : Photographiez au fil de l'eau, validez en un coup d'œil. → `#independants`
- **Cabinets comptables** : Moins de saisie, plus de conseil. → `#experts-comptables`
- **Équipes finance** : Des factures fournisseurs pré-classées, prêtes à intégrer. → `#equipes-finance`

### Bande experts-comptables
- H2: **Expert-comptable ? Recevez des pièces déjà lues et pré-classées.**
- Text: Vos clients photographient leurs pièces ; vous recevez des données à réviser, traçables jusqu'au document d'origine. Vous gardez la validation finale.
- CTA: **Découvrir Tikéo pour les cabinets** → `/cas-d-usage#experts-comptables`

### Aperçu FAQ (4 questions → `/faq`)
Où sont stockés mes documents ? · Tikéo peut-il se tromper ? · Tikéo remplace-t-il mon comptable ? · Quand Tikéo sera-t-il disponible ?

### Contexte FNE (optional block; tax-adviser review before use)
- Text: La facturation passe à l'électronique avec la FNE. C'est le bon moment pour mettre aussi de l'ordre dans vos dépenses.
- Disclaimer (always with this block): « Tikéo n'est pas une solution de facturation électronique et n'est pas agréé par la DGI. »

### Liste d'attente (shared block, see `waitlist-ux.md`)
- H2: **Soyez parmi les premiers à essayer Tikéo.**
- Text: Laissez votre adresse e-mail : nous vous préviendrons dès l'ouverture. Pas de spam, désinscription en un clic.

---

## 2. Comment ça marche (`/comment-ca-marche`)

**Title:** Comment ça marche : de la photo au classement | Tikéo
**Meta description:** Photographiez vos reçus, vérifiez les informations et la catégorie proposée, transmettez à votre comptable. Le fonctionnement de Tikéo en trois étapes.

- H1: **De la photo à la pièce classée, en trois étapes.**
- Intro: Tikéo fait le travail répétitif : lire, recopier, classer. Vous gardez la décision.

**Étape 1. Photographiez ou importez**
Reçu de caisse thermique, reçu manuscrit, facture fournisseur tamponnée, PDF reçu par e-mail : Tikéo est conçu pour les pièces que vous recevez vraiment. Une photo nette suffit.

**Étape 2. Vérifiez les informations**
Tikéo lit le fournisseur, la date, le montant hors taxe, la TVA et le total. Il propose une catégorie **[SYS: « un compte SYSCOHADA »]**. Chaque champ lu est mis en évidence sur la pièce : vous voyez d'où vient l'information, vous corrigez si besoin, et vous validez **[REV]**.
- Honesty line (keep): « L'outil peut se tromper, surtout sur une photo floue ou une pièce manuscrite. C'est pour cela que rien n'est enregistré sans vous. » **[REV]**

**Étape 3. Transmettez**
Vos dépenses validées sont prêtes pour votre comptable. Vous pourrez les exporter vers Excel, Sage ou Odoo **[EXP]**, avec la pièce justificative attachée à chaque ligne.

**Ce que Tikéo ne fait pas** (short list, builds trust)
- Il ne remplace pas votre comptable.
- Il ne fait pas de facturation électronique (FNE) et n'est pas agréé par la DGI.
- Il n'enregistre rien sans votre validation **[REV]**.

→ Waitlist block

---

## 3. Fonctionnalités (`/fonctionnalites`)

**Title:** Fonctionnalités : lecture, classement, export | Tikéo
**Meta description:** Lecture des reçus et factures, catégories adaptées à la Côte d'Ivoire, validation par vous, export pour votre comptable. Les fonctionnalités prévues de Tikéo.

- H1: **Ce que Tikéo fera pour vous.**
- Intro: Tikéo est en cours de développement. Voici ce que nous construisons, et pourquoi.

| Feature | Copy | Flag |
|---|---|---|
| Lecture des pièces | Date, fournisseur, montants HT et TTC, TVA : lus sur la photo ou le PDF, mis en évidence sur la pièce. | — |
| Pièces d'ici | Reçus thermiques, carnets manuscrits, factures tamponnées : conçu pour les documents de Côte d'Ivoire. | — |
| Catégories proposées | Une catégorie proposée pour chaque dépense, selon le plan comptable SYSCOHADA. | **[SYS]** (fallback: « une catégorie proposée pour chaque dépense ») |
| Validation par vous | Rien n'est enregistré sans votre accord. Vous corrigez, vous validez. | **[REV]** |
| Pièce attachée | Chaque ligne garde son justificatif, pour vous et pour votre comptable. | — |
| Export | Vers votre comptable, Excel, Sage ou Odoo. | **[EXP]** |
| En FCFA, en français | Montants en FCFA, TVA à 18 %, interface en français. | — |

**Bande experts-comptables** (same as Home).
**Not listed:** WhatsApp intake, mobile money billing, multi-user roles, bank sync. None are confirmed; adding them is a founder decision.

→ Waitlist block

---

## 4. Cas d'usage (`/cas-d-usage`)

**Title:** Cas d'usage : PME, indépendants, cabinets comptables | Tikéo
**Meta description:** Dirigeants de PME, indépendants, experts-comptables, équipes finance : comment Tikéo vous aide à classer reçus et factures en Côte d'Ivoire.

- H1: **Une même pièce, quatre façons de gagner en ordre.**
- In-page links: Dirigeants · Indépendants · Experts-comptables · Équipes finance

### `#dirigeants` — Dirigeants de PME et TPE
- H2: **Vos dépenses en ordre chaque mois, pas seulement au bilan.**
- Text: Fini les reçus perdus et les soirées de saisie. Vos dépenses sont lues, classées, vérifiées par vous **[REV]**, et prêtes pour votre comptable.
- Example (illustrated, fictional): un reçu de quincaillerie à Cocody, 65 018 FCFA, classé en « Achats de matériaux ».

### `#independants` — Indépendants
- H2: **Photographiez au fil de l'eau, validez en un coup d'œil.**
- Text: Consultant, artisan, prestataire : gardez vos reçus sur votre téléphone, classés au fur et à mesure. Quand votre comptable les demande, tout est prêt.

### `#experts-comptables` — Experts-comptables et cabinets
- H2: **Moins de saisie, plus de conseil.**
- Text: Vos clients vous envoient des photos et des PDF, souvent par WhatsApp, souvent en retard. Avec Tikéo, ils photographient leurs pièces ; vous recevez des données déjà lues et pré-classées **[SYS: « selon le SYSCOHADA »]**, à réviser et à exporter **[EXP]**.
- Points:
  - Des données traçables jusqu'à la pièce d'origine.
  - Vous gardez la validation finale : Tikéo propose, vous signez.
  - Conçu pour s'intégrer à vos outils, pas pour les remplacer.
- CTA: **Rejoindre la liste d'attente en tant que cabinet** → `/liste-d-attente?role=cabinet` (preselects role `cabinet`)
- Optional line: « Vous souhaitez participer aux premiers tests ? Dites-le-nous dans le formulaire. » (only if the founder wants pilot conversations)

### `#equipes-finance` — Équipes finance et administration
- H2: **Des factures fournisseurs pré-classées, prêtes à intégrer.**
- Text: Notes de frais et factures arrivent lues et pré-classées. Vous vérifiez, puis vous intégrez dans Sage, Odoo ou Excel **[EXP]**.

→ Waitlist block

---

## 5. Questions fréquentes (`/faq`)

**Title:** Questions fréquentes | Tikéo
**Meta description:** Stockage des documents, erreurs possibles, rôle du comptable, disponibilité : les réponses franches aux questions sur Tikéo.

- H1: **Vos questions, nos réponses franches.**

**Le produit**
- **Qu'est-ce que Tikéo ?** Un outil qui lit vos reçus et factures de dépenses, propose une catégorie et prépare vos dépenses pour votre comptable. Il est en cours de développement.
- **Quand Tikéo sera-t-il disponible ?** Nous n'avons pas encore de date d'ouverture. Inscrivez-vous sur la liste d'attente : vous serez prévenu en premier. (Update once U7 is known.)
- **Combien cela coûtera-t-il ?** Les tarifs ne sont pas encore fixés. Ils seront en FCFA. (No « gratuit » until D-007.)
- **Tikéo remplace-t-il mon comptable ?** Non. Tikéo prépare les pièces ; votre comptable garde son rôle de conseil et de validation.
- **Est-ce un logiciel de comptabilité ou un ERP ?** Non. Tikéo s'occupe d'une seule chose, vos pièces de dépenses, et alimente les outils que vous utilisez déjà.
- **Tikéo fait-il la facturation électronique (FNE) ?** Non. Tikéo n'est pas une solution de facturation électronique et n'est pas agréé par la DGI.

**La fiabilité**
- **Tikéo peut-il se tromper ?** Oui, comme toute lecture automatique, surtout sur une photo floue ou une pièce manuscrite. C'est pourquoi chaque information est mise en évidence sur la pièce et rien n'est enregistré sans votre validation **[REV]**.
- **Les catégories sont-elles conformes au SYSCOHADA ?** **[SYS]** Draft only after founder confirmation and tax-adviser review. Never write « conforme » or « certifié ».

**Vos données** **[DATA]**: answers must come from D-004/D-010. Until then, use the holding answer.
- **Où sont stockées mes données ?** Holding answer: « Nous publierons ces informations, avec notre politique de confidentialité, avant l'ouverture. Aujourd'hui, nous ne collectons que les informations de la liste d'attente. »
- **Qui peut voir mes documents ?** Same holding answer until the product's data handling is defined (security and privacy review, D-003).
- **Que faites-vous des informations de la liste d'attente ?** « Elles servent uniquement à vous prévenir de l'ouverture de Tikéo et, si vous l'avez accepté, à vous envoyer des nouvelles. Vous pouvez demander leur suppression à tout moment. » (Lawyer to confirm, D-010.)

→ Waitlist block

---

## 6. Liste d'attente (`/liste-d-attente`)

**Title:** Rejoindre la liste d'attente | Tikéo
**Meta description:** Inscrivez-vous pour être prévenu de l'ouverture de Tikéo, l'outil qui classe vos reçus et factures pour votre comptable.

- H1: **Soyez prévenu dès l'ouverture.**
- Intro: Tikéo est en cours de développement. Laissez-nous votre adresse e-mail : nous vous écrirons quand vous pourrez l'essayer.
- Form: see `waitlist-ux.md` §3 (mode B) or §2 (mode A text).
- Contact line: « Une question ? Écrivez-nous à [adresse de contact]. » (+ WhatsApp if confirmed, brief Q4)

---

## 7. Confidentialité and Mentions légales
- **Confidentialité:** written by or with the lawyer (D-010). Must state purpose, data collected, location and any transfer, retention, rights, contact, and the ARTCI formality status. The Director drafts a plain-language structure only after the lawyer's input.
- **Mentions légales:** publisher (founder name or company, address, contact), publication director, host (name, address). Needs founder details.

---

## 8. Review before publishing
1. Founder clears or drops each **[SYS] [REV] [EXP]** flag (positioning §10).
2. Native-speaker pass for Ivorian business register (not Parisian startup tone).
3. Tax adviser or expert-comptable: SYSCOHADA wording, FNE context block.
4. Lawyer: waitlist consent text, privacy notice, data answers (D-010).
5. QA claims check against positioning §6: no accuracy figures, no « automatique », no time-saved numbers, no badges.
