"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { IconChevronDown, IconDownload } from "./icons";

const FILES = {
  it: "/cv/Alessandro_Izzo_CV_IT.pdf",
  en: "/cv/Alessandro_Izzo_CV_EN.pdf",
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
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function updatePosition() {
      const rect = buttonRef.current?.getBoundingClientRect();
      if (rect) setMenuPos({ top: rect.bottom + 8, left: rect.left });
    }

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    function onClick(e: MouseEvent) {
      const target = e.target as Node;
      if (buttonRef.current?.contains(target) || menuRef.current?.contains(target)) return;
      setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-offset-4";
  const styles =
    variant === "primary"
      ? "bg-[var(--color-ink)] text-white hover:bg-[var(--color-accent-strong)]"
      : "border border-[var(--color-border-strong)] text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]";

  return (
    <>
      <button
        ref={buttonRef}
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
      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            ref={menuRef}
            style={{ position: "fixed", top: menuPos.top, left: menuPos.left }}
            className="z-50 min-w-[200px] overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card-hover)]"
          >
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
          </div>,
          document.body
        )}
    </>
  );
}
