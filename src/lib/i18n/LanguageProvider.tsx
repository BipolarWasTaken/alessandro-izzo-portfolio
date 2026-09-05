"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { content } from "@/lib/content";
import type { Content, Locale } from "@/lib/content/types";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Content;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "alessandro-izzo-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("it");

  useEffect(() => {
    // One-time hydration from localStorage/navigator, both unavailable during SSR —
    // the default "it" render must match the server, so this can only resolve on mount.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const resolved: Locale =
      stored === "it" || stored === "en"
        ? stored
        : window.navigator.language?.toLowerCase().startsWith("it")
          ? "it"
          : window.navigator.language
            ? "en"
            : "it";
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from a client-only source on mount
    setLocaleState(resolved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const value = useMemo(() => ({ locale, setLocale, t: content[locale] }), [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
