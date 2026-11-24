import type { Signup } from "./waitlist";

/**
 * Storage for waitlist sign-ups. Deliberately not implemented: the mechanism
 * (D-004) and the legal basis (D-010) are not decided. Until then:
 * - in development, WAITLIST_STORE=dev-log accepts sign-ups and logs only
 *   non-personal fields, so the form can be tested end to end;
 * - everywhere else, saving fails and the form shows its error state.
 *
 * Replace `save` with the chosen adapter (e.g. a Supabase insert in the region
 * approved by the lawyer) when D-004 and D-010 are closed.
 */
export async function save(signup: Signup): Promise<{ ok: boolean }> {
  if (process.env.NODE_ENV !== "production" && process.env.WAITLIST_STORE === "dev-log") {
    console.info("[waitlist:dev-log]", {
      role: signup.role,
      files: signup.files,
      channel: signup.channel,
      hasWhatsapp: Boolean(signup.whatsapp),
      marketingConsent: signup.marketingConsent,
    });
    return { ok: true };
  }
  console.error("[waitlist] No storage configured (D-004). Sign-up not saved.");
  return { ok: false };
}
