"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <p className="text-xs text-[var(--color-ink-faint)]">
          © {year} {t.footer.rights}
        </p>
        <p className="text-xs text-[var(--color-ink-faint)]">{t.footer.built}</p>
        <a href="#top" className="text-xs font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-strong)]">
          {t.footer.backToTop}
        </a>
      </div>
    </footer>
  );
}
