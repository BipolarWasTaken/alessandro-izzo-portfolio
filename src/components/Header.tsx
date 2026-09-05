"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeToggle } from "./ThemeToggle";
import { IconClose, IconMenu } from "./icons";

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled
          ? "border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-[var(--color-ink)]"
        >
          Alessandro Izzo
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {t.nav.links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <LanguageSwitch />
          <a
            href="#contact"
            className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-on-accent)] transition-colors hover:bg-[var(--color-accent-strong)]"
          >
            {t.nav.ctaLabel}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-border-strong)] p-2 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {t.nav.links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-[var(--color-ink)] hover:bg-[var(--color-surface-sunken)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageSwitch />
            </div>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex-1 rounded-full bg-[var(--color-accent)] px-4 py-3 text-center text-sm font-semibold text-[var(--color-on-accent)]"
            >
              {t.nav.ctaLabel}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
