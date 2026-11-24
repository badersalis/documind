/** Waitlist validation shared by the client form and the server action (waitlist-ux.md §3–4). */

export const ROLES = ["pme", "independant", "cabinet", "finance", "autre"] as const;
export const FILES = ["1-20", "21-100", "100+"] as const;
export const CHANNELS = ["whatsapp", "email", "papier", "logiciel", "autre"] as const;

export type Role = (typeof ROLES)[number];
export type ErrorKey = "emailMissing" | "emailInvalid" | "roleMissing" | "whatsappInvalid" | "server";
export type Field = "email" | "role" | "whatsapp" | "form";

export type Signup = {
  email: string;
  role: Role;
  files?: (typeof FILES)[number];
  channel?: (typeof CHANNELS)[number];
  /** E.164, e.g. +2250701020304 */
  whatsapp?: string;
  marketingConsent: boolean;
};

export type WaitlistState =
  | { status: "idle" }
  | { status: "error"; errors: Partial<Record<Field, ErrorKey>> }
  | { status: "success"; email: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const oneOf = <T extends readonly string[]>(list: T, v: unknown): T[number] | undefined =>
  typeof v === "string" && (list as readonly string[]).includes(v) ? (v as T[number]) : undefined;

export function validateEmail(raw: string): ErrorKey | null {
  const v = raw.trim();
  if (!v) return "emailMissing";
  if (!EMAIL.test(v) || v.length > 254) return "emailInvalid";
  return null;
}

/** Ivorian numbers: 10 digits since 2021 (re-check before launch). Empty is allowed. */
export function normaliseWhatsapp(raw: string): string | null | undefined {
  const digits = raw.replace(/[\s.\-()]/g, "");
  if (!digits || digits === "+225") return undefined;
  const local = digits.replace(/^(\+|00)?225/, "");
  return /^\d{10}$/.test(local) ? `+225${local}` : null;
}

export function parseSignup(form: FormData):
  | { ok: true; data: Signup }
  | { ok: false; errors: Partial<Record<Field, ErrorKey>> } {
  const errors: Partial<Record<Field, ErrorKey>> = {};
  const email = String(form.get("email") ?? "");
  const emailError = validateEmail(email);
  if (emailError) errors.email = emailError;

  const role = oneOf(ROLES, form.get("role"));
  if (!role) errors.role = "roleMissing";

  const whatsapp = normaliseWhatsapp(String(form.get("whatsapp") ?? ""));
  if (whatsapp === null) errors.whatsapp = "whatsappInvalid";

  if (Object.keys(errors).length || !role) return { ok: false, errors };

  return {
    ok: true,
    data: {
      email: email.trim().toLowerCase(),
      role,
      files: role === "cabinet" ? oneOf(FILES, form.get("files")) : undefined,
      channel: oneOf(CHANNELS, form.get("channel")),
      whatsapp: whatsapp ?? undefined,
      marketingConsent: form.get("consent") === "on",
    },
  };
}
