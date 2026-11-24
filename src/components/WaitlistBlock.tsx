import { site } from "@/config/site";
import { ContactDetails } from "./ContactDetails";
import { WaitlistForm } from "./WaitlistForm";
import type { Dictionary } from "@/content";

/**
 * Shared waitlist block (IA §5). What it shows depends on the launch mode
 * (waitlist-ux.md §2): contact details only until D-010 sign-off.
 */
export function WaitlistBlock({ t, heading = true }: { t: Dictionary; heading?: boolean }) {
  const w = t.waitlist;
  const mode = site.waitlistMode;
  return (
    <section id="liste-attente" className="on-stamp section bg-stamp text-white" aria-labelledby="liste-attente-titre">
      <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div>
          {heading ? (
            <h2 id="liste-attente-titre" className="max-w-[20ch] text-[clamp(28px,3.6vw,40px)] font-bold">
              {w.h2}
            </h2>
          ) : (
            <h2 id="liste-attente-titre" className="sr-only">
              {w.h2}
            </h2>
          )}
          {mode === "live" ? <p className="mt-4 max-w-[48ch] text-lg text-on-stamp">{w.text}</p> : null}
        </div>
        {mode === "live" ? (
          <WaitlistForm t={w.form} />
        ) : (
          <div className="rounded-lg bg-white p-6 text-ink sm:p-7">
            <p className="text-lg">
              {site.contactEmail || site.whatsapp ? (mode === "paused" ? w.pausedText : w.contactText) : w.contactPending}
            </p>
            <ContactDetails t={t} pending="" className="mt-3 text-lg" />
          </div>
        )}
      </div>
    </section>
  );
}
