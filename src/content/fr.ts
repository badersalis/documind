import { claim, hasClaim } from "./claims";

/**
 * French copy (launch locale). Source: docs/site/page-copy-fr.md.
 * Write plain spaces: French typography (narrow no-break spaces before
 * « ; : ! ? », inside guillemets, in amounts) is applied by `typo()`.
 * Claim-dependent lines go through `claim()` (see src/config/site.ts).
 */

const sys = (full: string, fallback: string) => claim("syscohada", full, fallback);
const rev = (full: string, fallback: string) => claim("review", full, fallback);
const exp = (full: string, fallback: string) => claim("export", full, fallback);

export const fr = {
  locale: "fr-CI",
  siteName: "Tikéo",
  descriptor: "Le classement de vos pièces justificatives, conçu pour la Côte d'Ivoire.",
  badge: "En cours de développement",
  skipLink: "Aller au contenu",

  nav: {
    label: "Navigation principale",
    items: [
      { href: "/comment-ca-marche", label: "Comment ça marche" },
      { href: "/fonctionnalites", label: "Fonctionnalités" },
      { href: "/cas-d-usage", label: "Cas d'usage" },
      { href: "/cas-d-usage#experts-comptables", label: "Experts-comptables" },
      { href: "/faq", label: "FAQ" },
    ],
    cta: "Rejoindre la liste d'attente",
    ctaShort: "Liste d'attente",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    home: "Tikéo, accueil",
  },

  footer: {
    pages: "Pages",
    legal: "Informations",
    privacy: "Confidentialité",
    legalNotice: "Mentions légales",
    contact: "Contact",
    contactPending: "Coordonnées de contact publiées avant l'ouverture.",
    prelaunch: "Tikéo est en cours de développement.",
    copyright: "© 2026 Tikéo",
  },

  /** Fictional sample shown in illustrations. */
  sample: {
    note: "Exemple fictif : fournisseur et montants inventés.",
    receipt: {
      supplier: "QUINCAILLERIE LES ROSIERS",
      place: "Cocody Angré, Abidjan",
      dateLabel: "Date",
      date: "21/11/2026",
      lines: [
        { label: "Ciment 50 kg ×4", amount: "24 000" },
        { label: "Fer à béton 10 ×6", amount: "27 600" },
        { label: "Fil d'attache", amount: "3 500" },
      ],
      subtotalLabel: "Total HT",
      subtotal: "55 100",
      vatLabel: "TVA 18 %",
      vat: "9 918",
      totalLabel: "TOTAL TTC",
      total: "65 018 FCFA",
    },
    review: {
      label: "Informations lues sur la pièce",
      fields: [
        { label: "Fournisseur", value: "Quinc. Les Rosiers" },
        { label: "Date", value: "21/11/2026" },
        { label: "TVA", value: "9 918 FCFA" },
        { label: "Total TTC", value: "65 018 FCFA" },
      ],
      categoryLabel: "Catégorie proposée",
      category: "Achats de matériaux",
      categoryHint: "à confirmer",
      validate: "Valider",
      stamp: rev("Vérifié par vous", "Prêt à transmettre"),
    },
    export: {
      title: "Dépenses de novembre 2026",
      columns: ["Date", "Fournisseur", "Catégorie", "TTC (FCFA)"],
      rows: [
        ["21/11", "Quinc. Les Rosiers", "Achats de matériaux", "65 018"],
        ["19/11", "Station Riviera 3", "Carburant", "30 000"],
        ["14/11", "Papeterie du Plateau", "Fournitures de bureau", "12 500"],
      ],
    },
    ledger: {
      caption: "Dossiers clients, semaine du 16 novembre",
      columns: ["Client", "Pièces reçues", "À réviser", "Prêtes à exporter"],
      rows: [
        ["Boulangerie Akwaba", "48", "6", "42"],
        ["Transports K. & Fils", "112", "15", "97"],
        ["Cabinet d'architecture Néo", "23", "2", "21"],
      ],
    },
  },

  home: {
    meta: {
      title: "Tikéo : vos reçus et factures, classés et prêts pour votre comptable",
      description:
        "Photographiez vos reçus et factures fournisseurs. Tikéo extrait les montants, propose une catégorie et vous validez. Conçu pour les entreprises en Côte d'Ivoire. En cours de développement.",
    },
    hero: {
      h1: "Vos reçus et factures, classés et prêts pour votre comptable.",
      sub:
        "Photographiez vos pièces justificatives : Tikéo extrait les montants, propose " +
        sys("la bonne catégorie SYSCOHADA", "une catégorie") +
        rev(", et vous validez.", ".") +
        " Conçu pour les entreprises et indépendants en Côte d'Ivoire.",
      cta: "Rejoindre la liste d'attente",
      cta2: "Voir comment ça marche",
      illustrationLabel:
        "Un reçu de quincaillerie dont la date, la TVA et le total sont surlignés, à côté d'une fiche qui reprend ces informations et propose la catégorie « Achats de matériaux ».",
    },
    problem: {
      h2: "Des pièces partout, et la saisie toujours à la dernière minute.",
      text:
        "Reçus dans un tiroir, factures dans vos e-mails, photos sur WhatsApp… Au moment de la TVA ou du bilan, il faut tout retrouver, tout ressaisir, tout classer. Et votre comptable relance pour les pièces manquantes.",
      items: ["Dans un tiroir", "Dans vos e-mails", "Dans vos discussions"],
    },
    steps: {
      h2: rev("Trois étapes, et vous gardez la main.", "Trois étapes, de la photo au classement."),
      link: "Voir le détail",
    },
    pillars: {
      h2: "Pensé pour la façon dont vous travaillez déjà.",
      items: [
        {
          title: "Ordre, sans ressaisie.",
          text: "Vos pièces justificatives, lues et classées. Fini les soirées de saisie.",
        },
        {
          title: "Conçu pour la Côte d'Ivoire.",
          text: sys(
            "En français, en FCFA, avec la TVA à 18 % et les catégories du SYSCOHADA.",
            "En français, en FCFA, avec la TVA à 18 %.",
          ),
        },
        {
          title: "Avec vos outils, pas à leur place.",
          text: "Tikéo ne remplace ni votre comptable, ni votre logiciel. Il les alimente.",
        },
        ...(hasClaim("review")
          ? [
              {
                title: "Vous gardez la main.",
                text: "Rien n'est enregistré sans votre validation. L'outil propose, vous décidez.",
              },
            ]
          : []),
      ],
    },
    audiences: {
      h2: "Pour celles et ceux qui gèrent les pièces.",
      items: [
        {
          title: "Dirigeants de PME",
          text: "Des dépenses en ordre chaque mois, sans y passer vos soirées.",
          href: "/cas-d-usage#dirigeants",
        },
        {
          title: "Indépendants",
          text: "Photographiez au fil de l'eau, validez en un coup d'œil.",
          href: "/cas-d-usage#independants",
        },
        {
          title: "Cabinets comptables",
          text: "Moins de saisie, plus de conseil.",
          href: "/cas-d-usage#experts-comptables",
        },
        {
          title: "Équipes finance",
          text: "Des factures fournisseurs pré-classées, prêtes à intégrer.",
          href: "/cas-d-usage#equipes-finance",
        },
      ],
    },
    faqPreview: {
      h2: "Les questions que l'on nous pose",
      ids: ["stockage", "erreurs", "comptable", "disponibilite"],
      link: "Toutes les questions",
    },
  },

  steps: [
    {
      title: "Photographiez ou importez.",
      text: "Un reçu de caisse, une facture fournisseur, un PDF : prenez une photo ou déposez le fichier.",
    },
    {
      title: "Vérifiez.",
      text:
        "Tikéo lit la date, le fournisseur, les montants et la TVA, puis propose une catégorie." +
        rev(" Vous corrigez si besoin et vous validez.", ""),
    },
    {
      title: "Transmettez.",
      text: exp(
        "Vos dépenses classées partent vers votre comptable, ou dans un fichier pour Sage, Odoo ou Excel.",
        "Vos dépenses classées sont prêtes à transmettre à votre comptable.",
      ),
    },
  ],

  accountantBand: {
    h2: "Expert-comptable ? Recevez des pièces déjà lues et pré-classées.",
    text:
      "Vos clients photographient leurs pièces ; vous recevez des données à réviser, traçables jusqu'au document d'origine. Vous gardez la validation finale.",
    cta: "Découvrir Tikéo pour les cabinets",
    href: "/cas-d-usage#experts-comptables",
  },

  how: {
    meta: {
      title: "Comment ça marche : de la photo au classement",
      description:
        "Photographiez vos reçus, vérifiez les informations et la catégorie proposée, transmettez à votre comptable. Le fonctionnement de Tikéo en trois étapes.",
    },
    h1: "De la photo à la pièce classée, en trois étapes.",
    intro: "Tikéo fait le travail répétitif : lire, recopier, classer. Vous gardez la décision.",
    details: [
      {
        title: "Photographiez ou importez",
        text:
          "Reçu de caisse thermique, reçu manuscrit, facture fournisseur tamponnée, PDF reçu par e-mail : Tikéo est conçu pour les pièces que vous recevez vraiment. Une photo nette suffit.",
      },
      {
        title: "Vérifiez les informations",
        text:
          "Tikéo lit le fournisseur, la date, le montant hors taxe, la TVA et le total. Il propose " +
          sys("un compte SYSCOHADA", "une catégorie") +
          ". Chaque champ lu est mis en évidence sur la pièce : vous voyez d'où vient l'information" +
          rev(", vous corrigez si besoin, et vous validez.", " et vous corrigez si besoin."),
      },
      {
        title: "Transmettez",
        text: exp(
          "Vos dépenses validées sont prêtes pour votre comptable. Vous pourrez les exporter vers Excel, Sage ou Odoo, avec la pièce justificative attachée à chaque ligne.",
          "Vos dépenses classées sont prêtes pour votre comptable, avec la pièce justificative attachée à chaque ligne.",
        ),
      },
    ],
    honesty: rev(
      "L'outil peut se tromper, surtout sur une photo floue ou une pièce manuscrite. C'est pour cela que rien n'est enregistré sans vous.",
      "L'outil peut se tromper, surtout sur une photo floue ou une pièce manuscrite. Chaque information lue est montrée sur la pièce pour que vous puissiez la contrôler.",
    ),
    notTitle: "Ce que Tikéo ne fait pas",
    notItems: [
      "Il ne remplace pas votre comptable.",
      "Il ne fait pas de facturation électronique (FNE) et n'est pas agréé par la DGI.",
      ...(hasClaim("review") ? ["Il n'enregistre rien sans votre validation."] : []),
    ],
  },

  features: {
    meta: {
      title: "Fonctionnalités : lecture, classement, export",
      description:
        "Lecture des reçus et factures, catégories adaptées à la Côte d'Ivoire, validation par vous, export pour votre comptable. Les fonctionnalités prévues de Tikéo.",
    },
    h1: "Ce que Tikéo fera pour vous.",
    intro: "Tikéo est en cours de développement. Voici ce que nous construisons, et pourquoi.",
    items: [
      {
        title: "Lecture des pièces",
        text: "Date, fournisseur, montants HT et TTC, TVA : lus sur la photo ou le PDF, mis en évidence sur la pièce.",
      },
      {
        title: "Pièces d'ici",
        text: "Reçus thermiques, carnets manuscrits, factures tamponnées : conçu pour les documents de Côte d'Ivoire.",
      },
      {
        title: "Catégories proposées",
        text: sys(
          "Une catégorie proposée pour chaque dépense, selon le plan comptable SYSCOHADA.",
          "Une catégorie proposée pour chaque dépense.",
        ),
      },
      ...(hasClaim("review")
        ? [{ title: "Validation par vous", text: "Rien n'est enregistré sans votre accord. Vous corrigez, vous validez." }]
        : []),
      {
        title: "Pièce attachée",
        text: "Chaque ligne garde son justificatif, pour vous et pour votre comptable.",
      },
      ...(hasClaim("export")
        ? [{ title: "Export", text: "Vers votre comptable, Excel, Sage ou Odoo." }]
        : []),
      {
        title: "En FCFA, en français",
        text: "Montants en FCFA, TVA à 18 %, interface en français.",
      },
    ],
  },

  useCases: {
    meta: {
      title: "Cas d'usage : PME, indépendants, cabinets comptables",
      description:
        "Dirigeants de PME, indépendants, experts-comptables, équipes finance : comment Tikéo vous aide à classer reçus et factures en Côte d'Ivoire.",
    },
    h1: "Une même pièce, quatre façons de gagner en ordre.",
    jumpLabel: "Aller à la section",
    sections: [
      {
        id: "dirigeants",
        label: "Dirigeants",
        eyebrow: "Dirigeants de PME et TPE",
        h2: "Vos dépenses en ordre chaque mois, pas seulement au bilan.",
        text:
          "Fini les reçus perdus et les soirées de saisie. Vos dépenses sont lues, classées" +
          rev(", vérifiées par vous,", ",") +
          " et prêtes pour votre comptable.",
        points: [] as string[],
      },
      {
        id: "independants",
        label: "Indépendants",
        eyebrow: "Indépendants",
        h2: "Photographiez au fil de l'eau, validez en un coup d'œil.",
        text:
          "Consultant, artisan, prestataire : gardez vos reçus sur votre téléphone, classés au fur et à mesure. Quand votre comptable les demande, tout est prêt.",
        points: [] as string[],
      },
      {
        id: "experts-comptables",
        label: "Experts-comptables",
        eyebrow: "Experts-comptables et cabinets",
        h2: "Moins de saisie, plus de conseil.",
        text:
          "Vos clients vous envoient des photos et des PDF, souvent par WhatsApp, souvent en retard. Avec Tikéo, ils photographient leurs pièces ; vous recevez des données déjà lues et pré-classées" +
          sys(" selon le SYSCOHADA", "") +
          exp(", à réviser et à exporter.", ", à réviser."),
        points: [
          "Des données traçables jusqu'à la pièce d'origine.",
          "Vous gardez la validation finale : Tikéo propose, vous signez.",
          "Conçu pour s'intégrer à vos outils, pas pour les remplacer.",
        ],
      },
      {
        id: "equipes-finance",
        label: "Équipes finance",
        eyebrow: "Équipes finance et administration",
        h2: "Des factures fournisseurs pré-classées, prêtes à intégrer.",
        text: exp(
          "Notes de frais et factures arrivent lues et pré-classées. Vous vérifiez, puis vous intégrez dans Sage, Odoo ou Excel.",
          "Notes de frais et factures arrivent lues et pré-classées. Vous vérifiez, puis vous les transmettez.",
        ),
        points: [] as string[],
      },
    ],
    cabinetCta: "Rejoindre la liste d'attente en tant que cabinet",
  },

  faq: {
    meta: {
      title: "Questions fréquentes",
      description:
        "Stockage des documents, erreurs possibles, rôle du comptable, disponibilité : les réponses franches aux questions sur Tikéo.",
    },
    h1: "Vos questions, nos réponses franches.",
    groups: [
      {
        title: "Le produit",
        items: [
          {
            id: "quoi",
            q: "Qu'est-ce que Tikéo ?",
            a: "Un outil qui lit vos reçus et factures de dépenses, propose une catégorie et prépare vos dépenses pour votre comptable. Il est en cours de développement.",
          },
          {
            id: "disponibilite",
            q: "Quand Tikéo sera-t-il disponible ?",
            a: "Nous n'avons pas encore de date d'ouverture. Inscrivez-vous sur la liste d'attente : vous serez prévenu en premier.",
          },
          {
            id: "prix",
            q: "Combien cela coûtera-t-il ?",
            a: "Les tarifs ne sont pas encore fixés. Ils seront en FCFA.",
          },
          {
            id: "comptable",
            q: "Tikéo remplace-t-il mon comptable ?",
            a: "Non. Tikéo prépare les pièces ; votre comptable garde son rôle de conseil et de validation.",
          },
          {
            id: "erp",
            q: "Est-ce un logiciel de comptabilité ou un ERP ?",
            a: "Non. Tikéo s'occupe d'une seule chose, vos pièces de dépenses, et alimente les outils que vous utilisez déjà.",
          },
          {
            id: "fne",
            q: "Tikéo fait-il la facturation électronique (FNE) ?",
            a: "Non. Tikéo n'est pas une solution de facturation électronique et n'est pas agréé par la DGI.",
          },
        ],
      },
      {
        title: "La fiabilité",
        items: [
          {
            id: "erreurs",
            q: "Tikéo peut-il se tromper ?",
            a: rev(
              "Oui, comme toute lecture automatique, surtout sur une photo floue ou une pièce manuscrite. C'est pourquoi chaque information est mise en évidence sur la pièce et rien n'est enregistré sans votre validation.",
              "Oui, comme toute lecture automatique, surtout sur une photo floue ou une pièce manuscrite. C'est pourquoi chaque information est mise en évidence sur la pièce, pour que vous puissiez la contrôler.",
            ),
          },
        ],
      },
      {
        title: "Vos données",
        items: [
          {
            id: "stockage",
            q: "Où sont stockées mes données ?",
            a: "Nous publierons ces informations, avec notre politique de confidentialité, avant l'ouverture. Aujourd'hui, nous ne collectons que les informations de la liste d'attente.",
          },
          {
            id: "acces",
            q: "Qui peut voir mes documents ?",
            a: "Nous publierons ces informations, avec notre politique de confidentialité, avant l'ouverture. Aucun document n'est collecté aujourd'hui.",
          },
          {
            id: "liste",
            q: "Que faites-vous des informations de la liste d'attente ?",
            a: "Elles servent uniquement à vous prévenir de l'ouverture de Tikéo et, si vous l'avez accepté, à vous envoyer des nouvelles. Vous pouvez demander leur suppression à tout moment.",
          },
        ],
      },
    ],
  },

  waitlist: {
    h2: "Soyez parmi les premiers à essayer Tikéo.",
    text: "Laissez votre adresse e-mail : nous vous préviendrons dès l'ouverture. Pas de spam, désinscription en un clic.",
    contactText: "La liste d'attente ouvrira très bientôt. En attendant, écrivez-nous :",
    contactPending: "La liste d'attente ouvrira très bientôt. Nos coordonnées seront publiées ici.",
    pausedText: "La liste d'attente est momentanément fermée. Vous pouvez nous écrire :",
    emailLabel: "E-mail",
    whatsappLabel: "WhatsApp",
    form: {
      email: "Adresse e-mail",
      required: "(obligatoire)",
      role: "Vous êtes…",
      roles: [
        { value: "pme", label: "Dirigeant·e d'une PME ou TPE" },
        { value: "independant", label: "Indépendant·e" },
        { value: "cabinet", label: "Expert-comptable ou cabinet" },
        { value: "finance", label: "Équipe finance ou administration" },
        { value: "autre", label: "Autre" },
      ],
      optional: "Facultatif",
      files: "Nombre de dossiers clients",
      fileOptions: [
        { value: "1-20", label: "1 à 20" },
        { value: "21-100", label: "21 à 100" },
        { value: "100+", label: "Plus de 100" },
      ],
      channel: "Comment transmettez-vous vos reçus aujourd'hui ?",
      channelOptions: [
        { value: "whatsapp", label: "WhatsApp" },
        { value: "email", label: "E-mail" },
        { value: "papier", label: "Papier, en main propre" },
        { value: "logiciel", label: "Logiciel" },
        { value: "autre", label: "Autre" },
      ],
      whatsapp: "Numéro WhatsApp",
      whatsappHelp: "Uniquement pour vous prévenir de l'ouverture.",
      consent:
        "J'accepte de recevoir des nouvelles de Tikéo par e-mail ou WhatsApp. Désinscription possible à tout moment.",
      privacy: "Vos données servent uniquement à vous informer de l'ouverture de Tikéo.",
      privacyLink: "Voir notre politique de confidentialité",
      submit: "Rejoindre la liste d'attente",
      submitting: "Envoi…",
      errorSummary: "Le formulaire contient une erreur.",
      errors: {
        emailMissing: "Indiquez votre adresse e-mail.",
        emailInvalid: "Cette adresse e-mail ne semble pas valide (exemple : nom@entreprise.ci).",
        roleMissing: "Choisissez ce qui vous décrit le mieux.",
        whatsappInvalid: "Indiquez un numéro ivoirien à 10 chiffres, ou laissez ce champ vide.",
        server: "L'inscription n'a pas abouti. Réessayez dans un instant.",
      },
      successTitle: "C'est noté.",
      successText: "Nous vous écrirons à {email} dès l'ouverture.",
    },
  },

  waitlistPage: {
    meta: {
      title: "Rejoindre la liste d'attente",
      description:
        "Inscrivez-vous pour être prévenu de l'ouverture de Tikéo, l'outil qui classe vos reçus et factures pour votre comptable.",
    },
    h1: "Soyez prévenu dès l'ouverture.",
    intro:
      "Tikéo est en cours de développement. Laissez-nous votre adresse e-mail : nous vous écrirons quand vous pourrez l'essayer.",
  },

  privacy: {
    meta: {
      title: "Politique de confidentialité",
      description: "Comment le site Tikéo traite vos données.",
    },
    h1: "Politique de confidentialité",
    status:
      "Version provisoire du 24/11/2026. Elle sera complétée et revue par un juriste avant l'ouverture de la liste d'attente.",
    sections: [
      {
        title: "Ce que ce site collecte aujourd'hui",
        text: "Ce site ne propose aucun formulaire actif, ne dépose aucun cookie et n'utilise aucun outil de mesure d'audience. Les polices de caractères sont hébergées avec le site : votre navigateur ne contacte aucun service tiers pour les afficher.",
      },
      {
        title: "Journaux techniques de l'hébergeur",
        text: "Comme pour tout site web, notre hébergeur enregistre des journaux techniques (adresse IP, date et heure, page demandée) pour faire fonctionner le site et le protéger. L'hébergeur est indiqué dans les mentions légales.",
      },
      {
        title: "Si vous nous écrivez",
        text: "Si vous nous contactez par e-mail ou WhatsApp, nous utilisons votre message uniquement pour vous répondre. Vous pouvez nous demander à tout moment de le supprimer.",
      },
    ],
    contact: "Pour toute question sur vos données, écrivez-nous :",
  },

  legal: {
    meta: {
      title: "Mentions légales",
      description: "Éditeur et hébergeur du site Tikéo.",
    },
    h1: "Mentions légales",
    publisher: "Éditeur du site",
    director: "Directeur de la publication",
    host: "Hébergement",
    contact: "Contact",
    pending: "À compléter avant la mise en ligne.",
  },

  notFound: {
    title: "Page introuvable",
    h1: "Cette page n'existe pas.",
    text: "Le lien est peut-être incorrect, ou la page a été déplacée.",
    cta: "Retour à l'accueil",
  },
};

export type Dictionary = typeof fr;
