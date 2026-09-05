"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { CvDownload } from "./CvDownload";
import { IconChevronDown } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const { t } = useLanguage();
  const [earlierOpen, setEarlierOpen] = useState(false);

  return (
    <section id="experience" className="border-t border-[var(--color-border)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker={t.experience.kicker} title={t.experience.title} />

        <ol className="mt-12 space-y-10 border-l border-[var(--color-border-strong)] pl-7 sm:pl-9">
          {t.experience.entries.map((entry, i) => (
            <Reveal as="li" key={entry.role} delay={i * 70} className="relative">
              <span
                className="absolute -left-[2.05rem] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--color-bg)] bg-[var(--color-accent)] sm:-left-[2.55rem]"
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-medium text-[var(--color-ink)]">{entry.role}</h3>
                <span className="text-sm font-medium text-[var(--color-ink-faint)]">{entry.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">{entry.org}</p>
              <ul className="mt-4 space-y-2">
                {entry.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-ink-soft)] sm:text-[0.95rem]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-ink-faint)]" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={240} className="mt-10 border-t border-[var(--color-border)] pt-8">
          <button
            type="button"
            onClick={() => setEarlierOpen((o) => !o)}
            aria-expanded={earlierOpen}
            className="flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)] hover:text-[var(--color-accent)]"
          >
            <IconChevronDown className={`h-4 w-4 transition-transform ${earlierOpen ? "rotate-180" : ""}`} />
            {t.experience.earlierLabel}
          </button>

          {earlierOpen && (
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {t.experience.earlier.map((job) => (
                <div key={job.role} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-sunken)] p-4">
                  <p className="text-sm font-semibold text-[var(--color-ink)]">{job.role}</p>
                  <p className="mt-1 text-xs text-[var(--color-ink-soft)]">{job.org}</p>
                  <p className="mt-1 text-xs text-[var(--color-ink-faint)]">{job.period}</p>
                </div>
              ))}
            </div>
          )}
          <p className="mt-4 text-xs text-[var(--color-ink-faint)]">{t.experience.earlierNote}</p>
        </Reveal>

        <Reveal delay={280} className="mt-10">
          <CvDownload variant="secondary" label={t.experience.cvCta} />
        </Reveal>
      </div>
    </section>
  );
}
