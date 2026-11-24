import { getDictionary } from "@/content";
import { Badge, PageIntro } from "@/components/ui";
import { WaitlistBlock } from "@/components/WaitlistBlock";

const t = getDictionary("fr");

export const metadata = {
  title: t.waitlistPage.meta.title,
  description: t.waitlistPage.meta.description,
  alternates: { canonical: "/liste-d-attente" },
};

export default function Waitlist() {
  return (
    <>
      <PageIntro title={t.waitlistPage.h1} intro={t.waitlistPage.intro}>
        <div className="mt-5">
          <Badge>{t.badge}</Badge>
        </div>
      </PageIntro>
      <WaitlistBlock t={t} heading={false} />
    </>
  );
}
