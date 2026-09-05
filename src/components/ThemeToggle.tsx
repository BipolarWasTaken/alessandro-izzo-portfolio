"use client";

import { useTheme } from "@/lib/theme/ThemeProvider";
import { IconMoon, IconSun } from "./icons";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Attiva tema chiaro / Switch to light theme" : "Attiva tema scuro / Switch to dark theme"}
      aria-pressed={isDark}
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-accent)] ${className}`}
    >
      {isDark ? <IconSun className="h-4 w-4" /> : <IconMoon className="h-4 w-4" />}
    </button>
  );
}
