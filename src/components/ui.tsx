import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "inverse";

const variants: Record<Variant, string> = {
  primary: "bg-stamp text-white border-stamp hover:bg-stamp-deep hover:border-stamp-deep",
  secondary: "bg-transparent text-ink border-ink hover:bg-ink hover:text-white",
  inverse: "bg-white text-stamp border-white hover:bg-stamp-tint",
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-ui border-[1.5px] px-5 py-2 text-[15px] font-semibold leading-tight transition-colors text-center";

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return <Link className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  return <button className={`${base} ${variants[variant]} disabled:opacity-70 ${className}`} {...props} />;
}

export function Badge({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[13px] font-medium ${
        inverse ? "border-white text-white" : "border-ink text-ink"
      }`}
    >
      <span aria-hidden="true" className={`size-2 rounded-full ${inverse ? "bg-marker" : "bg-stamp"}`} />
      {children}
    </span>
  );
}

/** Lighter hero for inner pages: H1 + intro. */
export function PageIntro({ title, intro, children }: { title: string; intro?: string; children?: ReactNode }) {
  return (
    <header className="border-b border-rule">
      <div className="wrap pb-10 pt-12 md:pb-14 md:pt-16">
        <h1 className="max-w-[22ch] text-[clamp(32px,5vw,52px)] font-bold">{title}</h1>
        {intro ? <p className="mt-4 max-w-[60ch] text-lg text-muted">{intro}</p> : null}
        {children}
      </div>
    </header>
  );
}
