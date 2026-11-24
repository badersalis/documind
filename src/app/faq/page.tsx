import { getDictionary } from "@/content";
import { PageIntro } from "@/components/ui";
import { FaqList } from "@/components/sections";
import { WaitlistBlock } from "@/components/WaitlistBlock";

const t = getDictionary("fr");

export const metadata = {
  title: t.faq.meta.title,
  description: t.faq.meta.description,
  alternates: { canonical: "/faq" },
};

export default function Faq() {
  return (
    <>
      <PageIntro title={t.faq.h1} />
      <div className="section">
        <div className="wrap grid gap-12">
          {t.faq.groups.map((g) => (
            <section
              key={g.title}
              aria-label={g.title}
              className="grid gap-4 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] lg:gap-10"
            >
              <h2 className="text-2xl font-bold">{g.title}</h2>
              <FaqList items={g.items} />
            </section>
          ))}
        </div>
      </div>
      <WaitlistBlock t={t} />
    </>
  );
}
