/**
 * Tikéo wordmark: the acute accent on the é is drawn as a stamp-blue tick
 * (visual-direction.md §3.3). Concept version set in live text; final
 * outlined SVG comes after the trademark search (R3).
 */
type Props = {
  className?: string;
  /** Colour of the tick; defaults to stamp blue. */
  tickClassName?: string;
  /** Hide from assistive tech when a parent already labels it. */
  decorative?: boolean;
};

export function Tick({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" className={className} aria-hidden="true" focusable="false">
      <path
        d="M2 8.5 7 12.5 18 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Wordmark({ className = "", tickClassName = "text-stamp", decorative = false }: Props) {
  return (
    <span
      className={`inline-flex items-end font-display font-bold tracking-[-0.03em] leading-none ${className}`}
      {...(decorative ? { "aria-hidden": true } : { role: "img", "aria-label": "Tikéo" })}
    >
      <span aria-hidden="true">Tik</span>
      <span aria-hidden="true" className="relative inline-block">
        e
        <Tick
          className={`absolute left-1/2 top-[-0.3em] h-[0.36em] w-[0.5em] -translate-x-[46%] ${tickClassName}`}
        />
      </span>
      <span aria-hidden="true">o</span>
    </span>
  );
}
