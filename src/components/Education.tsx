"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="border-t border-[var(--color-border)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker={t.education.kicker} title={t.education.title} />

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          <div className="space-y-4">
            {t.education.degrees.map((deg, i) => (
              <Reveal key={deg.title} delay={i * 70}>
                <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                  <p className="font-display text-lg font-medium text-[var(--color-ink)]">{deg.title}</p>
                  <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">{deg.org}</p>
                  <p className="mt-1 text-xs text-[var(--color-ink-faint)]">{deg.period}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div>
            <Reveal>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
                {t.education.certificationsTitle}
              </h3>
            </Reveal>
            <div className="mt-4 space-y-4">
              {t.education.certifications.map((cert, i) => (
                <Reveal key={cert.title} delay={i * 70}>
                  <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                    <p className="text-sm font-semibold text-[var(--color-ink)]">{cert.title}</p>
                    <p className="mt-1 text-sm text-[var(--color-ink-soft)]">{cert.org}</p>
                    <p className="mt-1 text-xs text-[var(--color-ink-faint)]">{cert.period}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
