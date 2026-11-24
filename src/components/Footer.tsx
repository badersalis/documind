import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { ContactDetails } from "./ContactDetails";
import type { Dictionary } from "@/content";

export function Footer({ t }: { t: Dictionary }) {
  const f = t.footer;
  return (
    <footer className="border-t border-rule bg-receipt">
      <div className="wrap grid gap-10 py-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <Wordmark className="text-[28px]" />
          <p className="mt-3 max-w-[36ch] text-[15px] text-muted">{t.descriptor}</p>
          <p className="mt-4 text-[15px] font-medium">{f.prelaunch}</p>
        </div>
        <nav aria-label={f.pages}>
          <h2 className="font-sans text-sm font-semibold tracking-normal text-muted">{f.pages}</h2>
          <ul className="mt-3 space-y-1">
            {t.nav.items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center hover:text-stamp md:min-h-9">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="font-sans text-sm font-semibold tracking-normal text-muted">{f.legal}</h2>
          <ul className="mt-3 space-y-1">
            <li>
              <Link href="/confidentialite" className="inline-flex min-h-11 items-center hover:text-stamp md:min-h-9">
                {f.privacy}
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" className="inline-flex min-h-11 items-center hover:text-stamp md:min-h-9">
                {f.legalNotice}
              </Link>
            </li>
          </ul>
          <h2 className="mt-6 font-sans text-sm font-semibold tracking-normal text-muted">{f.contact}</h2>
          <ContactDetails t={t} pending={f.contactPending} className="mt-2 text-[15px]" />
        </div>
      </div>
      <div className="border-t border-rule">
        <p className="wrap py-5 text-sm text-muted">{f.copyright}</p>
      </div>
    </footer>
  );
}
