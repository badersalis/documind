import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "./ui";
import { ExportSheet, PhoneCapture, ReviewStep } from "./illustrations/Steps";
import type { Dictionary } from "@/content";

/** Three-step strip (I2–I4), shared by Home and How it works. */
export function StepsStrip({ t, title, link }: { t: Dictionary; title: string; link?: string }) {
  const art = [<PhoneCapture key="1" s={t.sample} />, <ReviewStep key="2" s={t.sample} />, <ExportSheet key="3" s={t.sample} />];
  return (
    <section className="section" aria-labelledby="etapes">
      <div className="wrap">
        <h2 id="etapes" className="max-w-[24ch] text-[clamp(28px,3.6vw,40px)] font-bold">
          {title}
        </h2>
        <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {t.steps.map((step, i) => (
            <li key={step.title} className="flex flex-col">
              <div className="flex min-h-[300px] items-center justify-center rounded-lg bg-receipt p-5" aria-hidden="true">
                {art[i]}
              </div>
              <p className="mt-5 flex items-baseline gap-3">
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-stamp font-display text-[15px] font-bold text-white">
                  {i + 1}
                </span>
                <span>
                  <strong className="font-display text-xl">{step.title}</strong> <span className="text-ink/85">{step.text}</span>
                </span>
              </p>
            </li>
          ))}
        </ol>
        {link ? (
          <p className="mt-8">
            <Link href="/comment-ca-marche" className="inline-flex min-h-11 items-center gap-2 font-semibold text-stamp hover:underline">
              {link} <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}

/** Full-width blue band with the pillars as short text blocks (no icon grid). */
export function PillarBand({ title, items }: { title: string; items: { title: string; text: string }[] }) {
  return (
    <section className="on-stamp section bg-stamp text-white" aria-labelledby="piliers">
      <div className="wrap">
        <h2 id="piliers" className="max-w-[26ch] text-[clamp(28px,3.6vw,40px)] font-bold">
          {title}
        </h2>
        <ul className={`mt-10 grid gap-8 sm:grid-cols-2 ${items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {items.map((p) => (
            <li key={p.title} className="border-t border-white/40 pt-5">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-on-stamp">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function AudienceCards({ t }: { t: Dictionary["home"]["audiences"] }) {
  return (
    <section className="section" aria-labelledby="pour-qui">
      <div className="wrap">
        <h2 id="pour-qui" className="max-w-[24ch] text-[clamp(28px,3.6vw,40px)] font-bold">
          {t.h2}
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((a) => (
            <li key={a.href}>
              <Link
                href={a.href}
                className="group flex h-full flex-col justify-between gap-6 rounded-lg border border-rule p-5 transition-colors hover:border-stamp"
              >
                <span>
                  <strong className="block font-display text-xl">{a.title}</strong>
                  <span className="mt-2 block text-muted">{a.text}</span>
                </span>
                <ArrowRight size={20} className="text-stamp transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Accountant band (D-009 secondary path) with the ledger illustration (I8). */
export function AccountantBand({ t }: { t: Dictionary }) {
  const b = t.accountantBand;
  return (
    <section className="section border-y border-rule bg-receipt" aria-labelledby="cabinets">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div>
          <h2 id="cabinets" className="max-w-[22ch] text-[clamp(28px,3.6vw,40px)] font-bold">
            {b.h2}
          </h2>
          <p className="mt-4 max-w-[54ch] text-lg text-ink/85">{b.text}</p>
          <ButtonLink href={b.href} className="mt-6">
            {b.cta}
          </ButtonLink>
        </div>
        <LedgerTable t={t.sample} />
      </div>
    </section>
  );
}

/** I8: ruled ledger with tabular figures (borrowed from Direction B). */
export function LedgerTable({ t }: { t: Dictionary["sample"] }) {
  const l = t.ledger;
  return (
    <figure className="m-0 w-full">
      <div className="overflow-x-auto rounded-lg border border-rule bg-white">
        <table className="w-full min-w-[420px] border-collapse text-[15px]">
          <caption className="border-b border-rule px-4 py-3 text-left font-medium">{l.caption}</caption>
          <thead>
            <tr className="text-left text-sm text-muted">
              {l.columns.map((c, i) => (
                <th key={c} scope="col" className={`border-b border-rule px-4 py-2 font-medium ${i > 0 ? "text-right" : ""}`}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {l.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td key={i} className={`border-b border-rule px-4 py-2.5 ${i > 0 ? "text-right tabular-nums" : ""} ${i === 3 ? "font-semibold text-stamp" : ""}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className="mt-3 text-[13px] text-muted">{t.note}</figcaption>
    </figure>
  );
}

type FaqItem = { id: string; q: string; a: string };

/** FAQ list on native <details> (works without JavaScript). */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-rule border-y border-rule">
      {items.map((item) => (
        <details key={item.id} id={item.id} className="group">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-lg font-semibold [&::-webkit-details-marker]:hidden">
            {item.q}
            <span aria-hidden="true" className="text-2xl leading-none text-stamp transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="max-w-[68ch] pb-5 text-ink/85">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
