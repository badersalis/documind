"use server";

import { site } from "@/config/site";
import { parseSignup, type WaitlistState } from "@/lib/waitlist";
import { save } from "@/lib/waitlist-store";

const MIN_FILL_MS = 3000;

export async function joinWaitlist(_prev: WaitlistState, form: FormData): Promise<WaitlistState> {
  if (site.waitlistMode !== "live") {
    return { status: "error", errors: { form: "server" } };
  }

  const parsed = parseSignup(form);
  if (!parsed.ok) return { status: "error", errors: parsed.errors };

  // Spam checks without third parties: honeypot field and minimum fill time.
  // Bots get the normal success message so they learn nothing.
  const honeypot = String(form.get("website") ?? "");
  const startedAt = Number(form.get("started") ?? 0);
  const tooFast = startedAt > 0 && Date.now() - startedAt < MIN_FILL_MS;
  if (honeypot || tooFast) return { status: "success", email: parsed.data.email };

  const result = await save(parsed.data);
  if (!result.ok) return { status: "error", errors: { form: "server" } };

  // "Already registered" is treated as success by the adapter, so the
  // response never reveals whether an address is on the list.
  return { status: "success", email: parsed.data.email };
}
