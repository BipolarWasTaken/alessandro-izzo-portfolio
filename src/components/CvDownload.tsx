"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { IconChevronDown, IconDownload } from "./icons";

const FILES = {
  it: "/cv/Alessandro_Izzo_CV_IT.docx",
  en: "/cv/Alessandro_Izzo_CV_EN.docx",
};

export function CvDownload({
  variant = "primary",
  label,
}: {
  variant?: "primary" | "secondary";
  label?: string;
}) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-offset-4";
  const styles =
    variant === "primary"
      ? "bg-[var(--color-ink)] text-white hover:bg-[var(--color-accent-strong)]"
      : "border border-[var(--color-border-strong)] text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]";

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        type="button"
        className={`${base} ${styles}`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <IconDownload className="h-4 w-4" />
        {label ?? t.hero.ctaSecondary}
        <IconChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 z-20 mt-2 min-w-[200px] overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card-hover)]">
          <a
            href={FILES.it}
            download
            className="block px-4 py-3 text-sm text-[var(--color-ink)] hover:bg-[var(--color-accent-soft)]"
            onClick={() => setOpen(false)}
          >
            {t.cvDownload.it}
          </a>
          <a
            href={FILES.en}
            download
            className="block border-t border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-ink)] hover:bg-[var(--color-accent-soft)]"
            onClick={() => setOpen(false)}
          >
            {t.cvDownload.en}
          </a>
        </div>
      )}
    </div>
  );
}
