import { getDictionary } from "@/content";
import { ButtonLink } from "@/components/ui";

const t = getDictionary("fr");

export const metadata = { title: t.notFound.title };

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <h1 className="text-[clamp(32px,5vw,52px)] font-bold">{t.notFound.h1}</h1>
        <p className="mt-4 text-lg text-muted">{t.notFound.text}</p>
        <ButtonLink href="/" className="mt-6">
          {t.notFound.cta}
        </ButtonLink>
      </div>
    </section>
  );
}
