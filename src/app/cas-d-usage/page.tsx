import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { getDictionary } from "@/content";
import { ButtonLink, PageIntro } from "@/components/ui";
import { LedgerTable } from "@/components/sections";
import { Receipt, ReviewCard } from "@/components/illustrations/Receipt";
import { ExportSheet, PhoneCapture } from "@/components/illustrations/Steps";
import { WaitlistBlock } from "@/components/WaitlistBlock";

const t = getDictionary("fr");

export const metadata = {
  title: t.useCases.meta.title,
  description: t.useCases.meta.description,
  alternates: { canonical: "/cas-d-usage" },
};

const art: Record<string, ReactNode> = {
  dirigeants: (
    <div className="grid w-full max-w-[460px] items-center gap-4 min-[440px]:grid-cols-2">
      <Receipt r={t.sample.receipt} compact />
      <ReviewCard v={t.sample.review} showStamp={false} />
    </div>
  ),
  independants: <PhoneCapture s={t.sample} />,
  "experts-comptables": <LedgerTable t={t.sample} />,
  "equipes-finance": <ExportSheet s={t.sample} />,
};

export default function UseCases() {
  const u = t.useCases;
  return (
    <>
      <PageIntro title={u.h1}>
        <nav aria-label={u.jumpLabel} className="mt-6">
          <ul className="flex flex-wrap gap-2">
            {u.sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-rule px-4 font-medium hover:border-stamp hover:text-stamp"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageIntro>
      {u.sections.map((s, i) => {
        const cabinet = s.id === "experts-comptables";
        return (
          <section
            key={s.id}
            id={s.id}
            aria-labelledby={`${s.id}-titre`}
            className={`section ${cabinet ? "border-y border-rule bg-receipt" : i > 0 ? "border-t border-rule" : ""}`}
          >
            <div className="wrap grid items-center gap-10 lg:grid-cols-2">
              <div className={i % 2 ? "lg:order-2" : ""}>
                <p className="font-semibold text-stamp">{s.eyebrow}</p>
                <h2 id={`${s.id}-titre`} className="mt-2 max-w-[22ch] text-[clamp(28px,3.6vw,40px)] font-bold">
                  {s.h2}
                </h2>
                <p className="mt-4 max-w-[56ch] text-lg text-ink/85">{s.text}</p>
                {s.points.length ? (
                  <ul className="mt-5 grid gap-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <Check size={20} className="mt-0.5 shrink-0 text-stamp" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {cabinet ? (
                  <ButtonLink href="/liste-d-attente?role=cabinet" className="mt-7">
                    {u.cabinetCta}
                  </ButtonLink>
                ) : null}
              </div>
              <div className={`flex justify-center ${i % 2 ? "lg:order-1" : ""}`} aria-hidden={cabinet ? undefined : true}>
                {art[s.id]}
              </div>
            </div>
          </section>
        );
      })}
      <WaitlistBlock t={t} />
    </>
  );
}
