import { Check } from "lucide-react";
import { Receipt } from "./Receipt";
import type { Dictionary } from "@/content";

type Sample = Dictionary["sample"];

/** I2: phone camera frame over a receipt. No real phone brand or OS chrome. */
export function PhoneCapture({ s }: { s: Sample }) {
  return (
    <div className="mx-auto w-[210px] rounded-[28px] border-[6px] border-ink bg-ink p-1.5">
      <div className="relative overflow-hidden rounded-[20px] bg-[#2a2f38] px-5 pb-16 pt-8">
        <Receipt r={{ ...s.receipt, lines: [] }} highlight={false} compact />
        {/* viewfinder corners */}
        <div className="pointer-events-none absolute inset-x-3 bottom-14 top-5">
          {["left-0 top-0 border-l-2 border-t-2", "right-0 top-0 border-r-2 border-t-2", "bottom-0 left-0 border-b-2 border-l-2", "bottom-0 right-0 border-b-2 border-r-2"].map(
            (c) => (
              <span key={c} className={`absolute size-5 border-marker ${c}`} />
            ),
          )}
        </div>
        <span className="absolute bottom-3 left-1/2 size-10 -translate-x-1/2 rounded-full border-4 border-white/80 bg-white/20" />
      </div>
    </div>
  );
}

/** I3: highlighted receipt with the suggested category and a validate action. */
export function ReviewStep({ s }: { s: Sample }) {
  const v = s.review;
  return (
    <div className="mx-auto grid max-w-[300px] gap-3">
      <Receipt r={s.receipt} compact />
      <div className="flex items-center justify-between gap-3 rounded-lg border border-rule bg-white px-3 py-2.5 text-[13px]">
        <span>
          {v.categoryLabel}
          <strong className="block text-sm text-stamp">{v.category}</strong>
        </span>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-ui bg-stamp px-3 py-1.5 font-semibold text-white">
          <Check size={14} aria-hidden="true" />
          {v.validate}
        </span>
      </div>
    </div>
  );
}

/** I4: generic export sheet with tabular figures. No Excel or Sage branding. */
export function ExportSheet({ s }: { s: Sample }) {
  const e = s.export;
  return (
    <div className="mx-auto w-full max-w-[340px] overflow-hidden rounded-lg border border-rule bg-white text-[12px]">
      <p className="border-b border-rule bg-receipt px-3 py-2 font-medium">{e.title}</p>
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-muted">
            {e.columns.map((c, i) => (
              <th key={c} scope="col" className={`border-b border-rule px-2 py-1.5 font-medium ${i === 3 ? "text-right" : ""} ${i === 2 ? "hidden min-[380px]:table-cell" : ""}`}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {e.rows.map((row) => (
            <tr key={row[0] + row[1]}>
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={`border-b border-rule px-2 py-1.5 ${i === 3 ? "text-right tabular-nums whitespace-nowrap" : ""} ${i === 2 ? "hidden min-[380px]:table-cell" : ""} ${i === 0 ? "whitespace-nowrap" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** I5: scattered documents (drawer, inbox, chat). Line drawings in muted ink. */
export function ScatteredDocs({ labels }: { labels: string[] }) {
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };
  const icons = [
    // drawer with a receipt sticking out
    <svg key="d" viewBox="0 0 96 80" className="h-20 w-24" aria-hidden="true">
      <path d="M30 34V10h22l6 6v18" {...stroke} />
      <path d="M36 18h12M36 24h16" {...stroke} />
      <rect x="10" y="34" width="76" height="38" rx="3" {...stroke} />
      <path d="M38 52h20" {...stroke} strokeWidth={4} />
    </svg>,
    // envelope with a PDF tag
    <svg key="e" viewBox="0 0 96 80" className="h-20 w-24" aria-hidden="true">
      <rect x="10" y="18" width="62" height="44" rx="3" {...stroke} />
      <path d="m10 22 31 22 31-22" {...stroke} />
      <rect x="58" y="44" width="30" height="18" rx="2" fill="var(--color-paper)" stroke="currentColor" strokeWidth={2} />
      <text x="73" y="57" textAnchor="middle" fontSize="10" fontWeight="700" fill="currentColor" fontFamily="var(--font-sans)">PDF</text>
    </svg>,
    // chat bubble with a photo
    <svg key="c" viewBox="0 0 96 80" className="h-20 w-24" aria-hidden="true">
      <path d="M14 14h68a4 4 0 0 1 4 4v38a4 4 0 0 1-4 4H36l-14 12V60h-8a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4Z" {...stroke} />
      <rect x="24" y="24" width="30" height="26" rx="2" {...stroke} />
      <path d="m26 46 9-9 7 7 4-4 6 6" {...stroke} />
      <path d="M62 30h14M62 38h10" {...stroke} />
    </svg>,
  ];
  return (
    <ul className="grid grid-cols-3 gap-4 text-muted">
      {icons.map((icon, i) => (
        <li key={i} className="flex flex-col items-center gap-2 text-center text-sm">
          {icon}
          <span>{labels[i]}</span>
        </li>
      ))}
    </ul>
  );
}
