import { getDictionary } from "@/content";
import { PageIntro } from "@/components/ui";
import { ContactDetails } from "@/components/ContactDetails";
import { site } from "@/config/site";

const t = getDictionary("fr");

export const metadata = {
  title: t.legal.meta.title,
  description: t.legal.meta.description,
  alternates: { canonical: "/mentions-legales" },
};

export default function LegalNotice() {
  const l = t.legal;
  const rows = [
    { title: l.publisher, lines: [site.publisher.name, site.publisher.address] },
    { title: l.director, lines: [site.publisher.director] },
    { title: l.host, lines: [site.host.name, site.host.address] },
  ];
  return (
    <>
      <PageIntro title={l.h1} />
      <div className="section">
        <dl className="wrap grid gap-8">
          {rows.map((r) => {
            const filled = r.lines.filter(Boolean);
            return (
              <div key={r.title}>
                <dt className="font-display text-2xl font-bold">{r.title}</dt>
                {filled.length ? (
                  filled.map((v) => (
                    <dd key={v} className="ml-0 mt-1 text-lg">
                      {v}
                    </dd>
                  ))
                ) : (
                  <dd className="ml-0 mt-1 text-lg text-muted">{l.pending}</dd>
                )}
              </div>
            );
          })}
          <div>
            <dt className="font-display text-2xl font-bold">{l.contact}</dt>
            <dd className="ml-0 mt-1 text-lg">
              <ContactDetails t={t} pending={l.pending} />
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
}
