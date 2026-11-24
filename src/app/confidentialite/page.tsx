import { getDictionary } from "@/content";
import { PageIntro } from "@/components/ui";
import { ContactDetails } from "@/components/ContactDetails";

const t = getDictionary("fr");

export const metadata = {
  title: t.privacy.meta.title,
  description: t.privacy.meta.description,
  alternates: { canonical: "/confidentialite" },
};

// Provisional notice: accurate only while the site collects nothing (waitlist
// in contact mode, no analytics). Replace with the lawyer's text (D-010) before
// the waitlist goes live; `npm run check:launch` enforces this.
export default function Privacy() {
  const p = t.privacy;
  return (
    <>
      <PageIntro title={p.h1} intro={p.status} />
      <div className="section">
        <div className="wrap grid gap-8">
          {p.sections.map((s) => (
            <section key={s.title} className="max-w-[68ch]">
              <h2 className="text-2xl font-bold">{s.title}</h2>
              <p className="mt-2 text-lg text-ink/85">{s.text}</p>
            </section>
          ))}
          <section className="max-w-[68ch]">
            <p className="text-lg">{p.contact}</p>
            <ContactDetails t={t} pending={t.footer.contactPending} className="mt-2 text-lg" />
          </section>
        </div>
      </div>
    </>
  );
}
