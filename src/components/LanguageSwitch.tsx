"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function LanguageSwitch({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-0.5 text-sm ${className}`}
      role="group"
      aria-label="Language switch / Cambia lingua"
    >
      {(["it", "en"] as const).map((lng) => (
        <button
          key={lng}
          type="button"
          onClick={() => setLocale(lng)}
          aria-pressed={locale === lng}
          className={`rounded-full px-2.5 py-1 font-medium uppercase tracking-wide transition-colors ${
            locale === lng
              ? "bg-[var(--color-accent)] text-[var(--color-on-accent)]"
              : "text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
          }`}
        >
          {lng}
        </button>
      ))}
    </div>
  );
}
