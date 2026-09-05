"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="border-t border-[var(--color-border)] bg-[var(--color-surface-sunken)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker={t.skills.kicker} title={t.skills.title} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {t.skills.categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]">
                <h3 className="font-display text-xl font-medium text-[var(--color-ink)]">{cat.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-ink-soft)]">{cat.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {cat.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-xs font-medium text-[var(--color-ink-soft)]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
