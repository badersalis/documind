# Waitlist and Contact UX — Tikéo

_Prepared 2026-11-24 · Deliverable 3 · Owner: Director · Status: **proposed**; the live form is gated by D-010 (legal review) and depends on D-004 (storage)_

**Inputs:** `project-brief.md` (minimal fields), `research/customer-personas.md` (validation plan), `assumptions-and-unknowns.md` (H5, H9, U5), decisions D-004 and D-010, `brand/visual-direction.md` §3.6 (forms).

---

## 1. Purpose
The form does two jobs: collect qualified interest, and **validate the audience split** (role field, validation priorities 2, 3 and 7). It must collect **as little personal data as possible**, because every field adds to the ARTCI exposure (H5).

---

## 2. Launch modes (D-010 gate)

The same component supports three modes, set by one config value, so the site can ship before legal sign-off.

| Mode | When | What visitors see | Data stored |
|---|---|---|---|
| **A. Contact only** (default until D-010 sign-off) | Before the lawyer approves | Short text: « La liste d'attente ouvrira très bientôt. En attendant, écrivez-nous : » with the contact email shown as text (and a WhatsApp number if the founder confirms one). No input fields. | None by the site |
| **B. Waitlist live** | After D-010 sign-off and D-004 decision | Full form (§3) | Email, role, optional fields, consent, timestamp, locale |
| **C. Paused** | If something goes wrong (legal or technical) | Same as A, with « La liste d'attente est momentanément fermée. » | None new |

Mode A is honest and launchable now; nothing pretends to collect data that isn't being kept.

---

## 3. Form fields (mode B)

| # | Field (FR label) | Type | Required | Notes |
|---|---|---|---|---|
| 1 | **Adresse e-mail** | `email`, `autocomplete="email"`, `inputmode="email"` | Yes | Trimmed and lower-cased before storage |
| 2 | **Vous êtes…** | Radio group (not a dropdown: easier on phones, every option visible) | Yes | Options: « Dirigeant·e d'une PME ou TPE » · « Indépendant·e » · « Expert-comptable ou cabinet » · « Équipe finance ou administration » · « Autre ». Stored as codes `pme`, `independant`, `cabinet`, `finance`, `autre` |
| 3 | **Nombre de dossiers clients** (shown only when role = cabinet) | Radio: « 1 à 20 » · « 21 à 100 » · « Plus de 100 » | No | Sizes the accountant channel (validation priority 2) |
| 4 | **Comment transmettez-vous vos reçus aujourd'hui ?** | Radio: « WhatsApp » · « E-mail » · « Papier, en main propre » · « Logiciel » · « Autre » | No | Tests H7 (validation priority 3). **Founder to confirm** it stays: it's useful but adds a step |
| 5 | **Numéro WhatsApp** (facultatif) | `tel`, `autocomplete="tel"`, `inputmode="tel"` | No | Prefilled prefix `+225`; accepts 10 digits after the prefix (Ivorian numbering since 2021; re-check). Help text: « Uniquement pour vous prévenir de l'ouverture. » |
| 6 | **Consent: marketing** | Checkbox, **unticked** | No | « J'accepte de recevoir des nouvelles de Tikéo par e-mail ou WhatsApp. Désinscription possible à tout moment. » (H9; final wording from the lawyer) |
| 7 | Privacy notice | Text with link | — | « Vos données servent uniquement à vous informer de l'ouverture de Tikéo. Voir notre politique de confidentialité. » Final wording from the lawyer |
| — | Submit | Button | — | « Rejoindre la liste d'attente » |

**Not collected:** name, company name, city, sector, phone number unless the visitor offers it. Add a field only with a clear validation use and legal OK.

**Order of fields:** email first (the commitment), then role (one tap), then optional fields. Fields 3–5 sit under a « Facultatif » sub-heading so the short path is obvious.

---

## 4. Behaviour

- **Role preselect:** links from accountant sections carry `?role=cabinet`; the form reads it and preselects the radio. Other values are ignored. (Query strings are fine on the real site; this is unrelated to the artifact viewer.)
- **Validation:** on blur and on submit, not on each keystroke. Messages under the field, in words, linked with `aria-describedby`; focus moves to the first invalid field on submit.
  - E-mail empty: « Indiquez votre adresse e-mail. » · invalid: « Cette adresse e-mail ne semble pas valide (exemple : nom@entreprise.ci). »
  - Role empty: « Choisissez ce qui vous décrit le mieux. »
  - WhatsApp invalid: « Indiquez un numéro ivoirien à 10 chiffres, ou laissez ce champ vide. »
- **Submitting:** button shows « Envoi… », disabled, with `aria-busy`. No layout jump.
- **Success:** the form is replaced by a confirmation panel (tick motif from the wordmark): « C'est noté. Nous vous écrirons à [adresse] dès l'ouverture. » Focus moves to the panel heading. If double opt-in is used: « Vérifiez votre boîte mail pour confirmer votre inscription. »
- **Already registered:** treat as success, with the same message (don't reveal whether an email is on the list).
- **Server or network error:** « L'inscription n'a pas abouti. Réessayez dans un instant, ou écrivez-nous à [contact]. » Entered values are kept.
- **No JavaScript:** the form still posts (server action) and returns a full confirmation page.
- **Spam protection without third parties:** hidden honeypot field + minimum fill time (e.g. 3 s) + per-IP rate limit at the server. **No reCAPTCHA** (third-party transfer, D-010; weight).

---

## 5. Accessibility
- Visible labels on every field (no placeholder-only labels); radio groups in `<fieldset>` with a `<legend>`.
- 16 px inputs (prevents iOS zoom), ≥ 44 px targets, visible focus ring in `stamp` blue.
- Errors announced through an `aria-live="polite"` summary on submit and per-field messages.
- Required fields marked with the word « (obligatoire) », not only an asterisk.
- Works with keyboard only and with screen readers (TalkBack on Android is the priority test).

---

## 6. Data handling (to settle with the lawyer, D-010)
- **Purpose:** inform people when Tikéo opens; with consent, send news. Nothing else; no resale.
- **Retention (proposal):** until launch + 12 months, or until the person unsubscribes, whichever is first.
- **Location:** depends on D-004 (e.g. Supabase region). **The privacy notice states the real location.** Cross-border transfer authorisation from ARTCI is likely needed if hosted outside CI (H5).
- **Rights:** access, correction and deletion by writing to the contact email; unsubscribe link in every message.
- **Analytics:** `waitlist_submit` never carries the email or phone (see IA §7).

---

## 7. Decisions needed
1. **D-010:** brief a CI data-protection lawyer; until sign-off the site runs in mode A.
2. **D-004:** storage (Director recommends Supabase, region chosen after legal input).
3. **Field 4 (current intake channel):** keep or drop?
4. **Double opt-in:** recommended (proves consent), but needs an email-sending service, which may be a cost or another transfer.
