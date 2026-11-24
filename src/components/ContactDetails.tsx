import { site } from "@/config/site";
import type { Dictionary } from "@/content";

/** Contact email and optional WhatsApp, shown as text as well as links. */
export function ContactDetails({
  t,
  pending,
  className = "",
}: {
  t: Dictionary;
  pending: string;
  className?: string;
}) {
  const { contactEmail, whatsapp } = site;
  if (!contactEmail && !whatsapp) return <p className={`text-muted ${className}`}>{pending}</p>;
  const waDigits = whatsapp.replace(/\D/g, "");
  return (
    <ul className={`space-y-1 ${className}`}>
      {contactEmail ? (
        <li>
          <span className="sr-only">{t.waitlist.emailLabel} : </span>
          <a href={`mailto:${contactEmail}`} className="font-medium text-stamp underline underline-offset-4">
            {contactEmail}
          </a>
        </li>
      ) : null}
      {whatsapp ? (
        <li>
          {t.waitlist.whatsappLabel} :{" "}
          <a
            href={`https://wa.me/${waDigits}`}
            className="font-medium text-stamp underline underline-offset-4 whitespace-nowrap"
            rel="noopener noreferrer"
          >
            {whatsapp}
          </a>
        </li>
      ) : null}
    </ul>
  );
}
