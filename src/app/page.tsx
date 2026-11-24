import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getDictionary } from "@/content";
import { Badge, ButtonLink } from "@/components/ui";
import { ReceiptScene } from "@/components/illustrations/Receipt";
import { ScatteredDocs } from "@/components/illustrations/Steps";
import { AccountantBand, AudienceCards, FaqList, PillarBand, StepsStrip } from "@/components/sections";
import { WaitlistBlock } from "@/components/WaitlistBlock";
import { site } from "@/config/site";

const t = getDictionary("fr");

export const metadata = {
  title: { absolute: t.home.meta.title },
  alternates: { canonical: "/" },
};

export default function Home() {
  const h = t.home;
  const faqItems = t.faq.groups.flatMap((g) => g.items);
  const preview = h.faqPreview.ids
    .map((id) => faqItems.find((i) => i.id === id))
    .filter((i): i is (typeof faqItems)[number] => Boolean(i));
  const ctaHref = site.waitlistMode === "live" ? "#liste-attente" : "/liste-d-attente";

  return (
    <>
      <section className="border-b border-rule" aria-labelledby="titre">
        <div className="wrap grid items-center gap-10 pb-14 pt-10 md:pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 lg:pb-20 lg:pt-20">
          <div>
            <Badge>{t.badge}</Badge>
            <h1 id="titre" className="mt-5 max-w-[16ch] text-[clamp(34px,5.4vw,56px)] font-bold">
              {h.hero.h1}
            </h1>
            <p className="mt-5 max-w-[50ch] text-lg text-ink/80">{h.hero.sub}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href={ctaHref}>{h.hero.cta}</ButtonLink>
              <ButtonLink href="/comment-ca-marche" variant="secondary">
                {h.hero.cta2}
              </ButtonLink>
            </div>
          </div>
          <ReceiptScene s={t.sample} label={h.hero.illustrationLabel} />
        </div>
      </section>

      <section className="section" aria-labelledby="probleme">
        <div className="wrap grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div>
            <h2 id="probleme" className="max-w-[22ch] text-[clamp(28px,3.6vw,40px)] font-bold">
              {h.problem.h2}
            </h2>
            <p className="mt-4 max-w-[58ch] text-lg text-ink/85">{h.problem.text}</p>
          </div>
          <ScatteredDocs labels={h.problem.items} />
        </div>
      </section>

      <div className="border-t border-rule">
        <StepsStrip t={t} title={h.steps.h2} link={h.steps.link} />
      </div>

      <PillarBand title={h.pillars.h2} items={h.pillars.items} />

      <AudienceCards t={h.audiences} />

      <AccountantBand t={t} />

      <section className="section" aria-labelledby="faq-apercu">
        <div className="wrap grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <h2 id="faq-apercu" className="max-w-[18ch] text-[clamp(28px,3.6vw,40px)] font-bold">
              {h.faqPreview.h2}
            </h2>
            <Link href="/faq" className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-stamp hover:underline">
              {h.faqPreview.link} <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <FaqList items={preview} />
        </div>
      </section>

      <WaitlistBlock t={t} />
    </>
  );
}
