import { AlertTriangle } from "lucide-react";
import { getDictionary } from "@/content";
import { PageIntro } from "@/components/ui";
import { StepsStrip } from "@/components/sections";
import { WaitlistBlock } from "@/components/WaitlistBlock";

const t = getDictionary("fr");

export const metadata = {
  title: t.how.meta.title,
  description: t.how.meta.description,
  alternates: { canonical: "/comment-ca-marche" },
};

export default function HowItWorks() {
  const h = t.how;
  return (
    <>
      <PageIntro title={h.h1} intro={h.intro} />
      <StepsStrip t={t} title={t.home.steps.h2} />
      <section className="section border-t border-rule" aria-labelledby="ne-fait-pas">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div>
            <ol className="grid gap-8">
              {h.details.map((d, i) => (
                <li key={d.title} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4">
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-stamp font-display font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold">{d.title}</h2>
                    <p className="mt-2 max-w-[62ch] text-lg text-ink/85">{d.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-10 flex max-w-[62ch] gap-3 rounded-lg border border-rule bg-receipt p-4">
              <AlertTriangle className="mt-0.5 shrink-0 text-stamp" size={20} aria-hidden="true" />
              <span>{h.honesty}</span>
            </p>
          </div>
          <aside className="h-fit rounded-lg border border-ink p-6">
            <h2 id="ne-fait-pas" className="text-2xl font-bold">
              {h.notTitle}
            </h2>
            <ul className="mt-4 grid gap-3">
              {h.notItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="font-bold text-stamp">
                    ×
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
      <WaitlistBlock t={t} />
    </>
  );
}
