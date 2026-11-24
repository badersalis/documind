/**
 * Site-wide settings. Self-contained (no imports) so that
 * `scripts/check-launch.ts` can read it with plain Node.
 *
 * Values marked "founder" must be filled in before launch;
 * `npm run check:launch` fails while any of them is missing.
 */

/** Product promises the copy relies on (positioning §10, page-copy-fr.md). */
export type ClaimStatus = "unconfirmed" | "confirmed" | "dropped";

export type ClaimKey = "syscohada" | "review" | "export";

export const claims: Record<ClaimKey, ClaimStatus> = {
  /** [SYS] SYSCOHADA category mapping is in the product. */
  syscohada: "unconfirmed",
  /** [REV] Every entry is reviewed by the user before it is saved. */
  review: "unconfirmed",
  /** [EXP] Export to the accountant, Sage, Odoo or Excel. */
  export: "unconfirmed",
};

/**
 * Waitlist mode (waitlist-ux.md §2).
 * - contact: no form, contact details only (default until D-010 sign-off)
 * - live: the form is shown and submissions are stored (needs D-004 + D-010)
 * - paused: like contact, with a "temporarily closed" notice
 */
export type WaitlistMode = "contact" | "live" | "paused";

const envMode = process.env.NEXT_PUBLIC_WAITLIST_MODE;

export const site = {
  name: "Tikéo",
  /** Public URL, without trailing slash. Founder: set NEXT_PUBLIC_SITE_URL. */
  // `||`, not `??`: an empty value copied from .env.example must fall back too.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),
  /** Search engines may index the site only when this is true. */
  live: process.env.NEXT_PUBLIC_SITE_LIVE === "true",
  waitlistMode: (envMode === "live" || envMode === "paused" ? envMode : "contact") as WaitlistMode,
  /** Founder: public contact email (brief Q4). */
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  /** Founder: optional WhatsApp business number, international format (brief Q4). */
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  /** Set to true only once the lawyer has approved the privacy notice (D-010). */
  privacyApproved: false,
  /** Founder: mentions légales details. */
  publisher: {
    name: "",
    address: "",
    director: "",
  },
  /** Founder: hosting provider shown in the mentions légales (D-004). */
  host: {
    name: "",
    address: "",
  },
};
