"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-t border-[var(--color-border)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker={t.about.kicker} title={t.about.title} />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="space-y-5">
            {t.about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="text-base leading-relaxed text-[var(--color-ink-soft)] sm:text-[1.05rem]">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <blockquote className="font-display rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-xl font-medium leading-snug text-[var(--color-ink)] shadow-[var(--shadow-card)] lg:sticky lg:top-24">
              <span className="mb-2 block text-3xl leading-none text-[var(--color-accent)]">&ldquo;</span>
              {t.about.pullQuote}
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
