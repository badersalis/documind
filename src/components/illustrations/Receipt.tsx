import type { Dictionary } from "@/content";

type Sample = Dictionary["sample"];

/** Thermal receipt (I1/I3). `highlight` marks the fields the product reads. */
export function Receipt({
  r,
  highlight = true,
  compact = false,
  className = "",
}: {
  r: Sample["receipt"];
  highlight?: boolean;
  compact?: boolean;
  className?: string;
}) {
  const mark = (v: string) => (highlight ? <mark className="marker text-ink">{v}</mark> : v);
  return (
    <div
      className={`receipt-paper rounded-paper px-4 pb-7 pt-4 font-mono text-ink ${
        compact ? "text-[11px] leading-[1.55]" : "text-[13px] leading-[1.65]"
      } ${className}`}
    >
      <p className="text-center">
        {mark(r.supplier)}
        <br />
        {r.place}
      </p>
      <hr className="my-2 border-0 border-t border-dashed border-[#9aa1ad]" />
      <p className="flex justify-between gap-2">
        <span>{r.dateLabel}</span>
        <span className="whitespace-nowrap">
          {mark(r.date)}
        </span>
      </p>
      {r.lines.map((l) => (
        <p key={l.label} className="flex justify-between gap-2">
          <span>{l.label}</span>
          <span className="whitespace-nowrap">{l.amount}</span>
        </p>
      ))}
      <hr className="my-2 border-0 border-t border-dashed border-[#9aa1ad]" />
      <p className="flex justify-between gap-2">
        <span>{r.subtotalLabel}</span>
        <span className="whitespace-nowrap">{r.subtotal}</span>
      </p>
      <p className="flex justify-between gap-2">
        <span>{r.vatLabel}</span>
        <span className="whitespace-nowrap">
          {mark(r.vat)}
        </span>
      </p>
      <p className="flex justify-between gap-2 font-medium">
        <span>{r.totalLabel}</span>
        <span className="whitespace-nowrap">
          {mark(r.total)}
        </span>
      </p>
    </div>
  );
}

/** Review card: what was read, the suggested category, and the user's check. */
export function ReviewCard({
  v,
  showStamp = true,
  className = "",
}: {
  v: Sample["review"];
  showStamp?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative rounded-lg border border-rule bg-white p-4 text-sm shadow-[0_1px_0_var(--color-rule)] ${className}`}>
      <p className="mb-2 text-[13px] font-medium text-muted">{v.label}</p>
      <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-1.5">
        {v.fields.map((f) => (
          <div key={f.label} className="contents">
            <dt className="text-muted">{f.label}</dt>
            <dd className="text-right font-medium tabular-nums">{f.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-3 rounded-md bg-stamp-tint px-3 py-2 text-[13px]">
        {v.categoryLabel}
        <strong className="block text-sm text-stamp">{v.category}</strong>
        <span className="text-muted">{v.categoryHint}</span>
      </div>
      {showStamp ? (
        <span className="stamp-land absolute -bottom-5 right-2 rotate-[-8deg] sm:-right-1.5 rounded-md border-[2.5px] border-stamp bg-white/90 px-2.5 py-1 font-display text-[13px] font-bold text-stamp">
          {v.stamp}
        </span>
      ) : null}
    </div>
  );
}

/** Hero scene (I1): receipt beside its review card, with the signature motion. */
export function ReceiptScene({ s, label }: { s: Sample; label: string }) {
  return (
    <figure className="animate-sweep m-0">
      <div role="img" aria-label={label} className="grid grid-cols-1 items-center gap-6 min-[440px]:grid-cols-2 min-[440px]:gap-4">
        <Receipt r={s.receipt} className="min-[440px]:rotate-[-2deg] shadow-[0_12px_0_-8px_rgba(20,22,26,0.08)]" />
        <ReviewCard v={s.review} />
      </div>
      <figcaption className="mt-8 text-[13px] text-muted">{s.note}</figcaption>
    </figure>
  );
}
