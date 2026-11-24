"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Wordmark } from "./Wordmark";
import type { Dictionary } from "@/content";

export function Header({ t }: { t: Dictionary["nav"] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  const close = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    // Keep keyboard and screen-reader focus inside the open menu (WCAG 2.4.11).
    const behind = document.querySelectorAll<HTMLElement>("main, footer");
    behind.forEach((el) => (el.inert = true));
    sheetRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      behind.forEach((el) => (el.inert = false));
    };
  }, [open, close]);

  const isCurrent = (href: string) => !href.includes("#") && pathname === href;

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <div className="wrap flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Link href="/" aria-label={t.home} className="-m-2 p-2">
          <Wordmark className="text-[26px]" decorative />
        </Link>

        <nav aria-label={t.label} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {t.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  className="rounded-ui px-3 py-2 text-[15px] font-medium text-ink/80 transition-colors hover:text-stamp aria-[current=page]:text-stamp"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/liste-d-attente"
            className="inline-flex min-h-11 items-center rounded-ui bg-stamp px-4 text-[15px] font-semibold text-white transition-colors hover:bg-stamp-deep"
          >
            <span className="lg:hidden">{t.ctaShort}</span>
            <span className="hidden lg:inline">{t.cta}</span>
          </Link>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-ui border border-rule lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? t.closeMenu : t.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        ref={sheetRef}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto border-t border-rule bg-paper lg:hidden"
      >
        <nav aria-label={t.label} className="wrap py-4">
          <ul>
            {t.items.map((item) => (
              <li key={item.href} className="border-b border-rule">
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  onClick={() => close(false)}
                  className="flex min-h-14 items-center text-lg font-medium aria-[current=page]:text-stamp"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/liste-d-attente"
            onClick={() => close(false)}
            className="mt-6 flex min-h-12 items-center justify-center rounded-ui bg-stamp px-5 font-semibold text-white"
          >
            {t.cta}
          </Link>
        </nav>
      </div>
    </header>
  );
}
