import { getDictionary } from "@/content";
import { PageIntro } from "@/components/ui";
import { AccountantBand } from "@/components/sections";
import { WaitlistBlock } from "@/components/WaitlistBlock";

const t = getDictionary("fr");

export const metadata = {
  title: t.features.meta.title,
  description: t.features.meta.description,
  alternates: { canonical: "/fonctionnalites" },
};

export default function Features() {
  const f = t.features;
  return (
    <>
      <PageIntro title={f.h1} intro={f.intro} />
      <section className="section" aria-label={f.h1}>
        <ul className="wrap grid gap-x-10 gap-y-2 md:grid-cols-2">
          {f.items.map((item) => (
            <li key={item.title} className="border-t border-rule py-6">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="mt-2 max-w-[52ch] text-lg text-ink/85">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>
      <AccountantBand t={t} />
      <WaitlistBlock t={t} />
    </>
  );
}
