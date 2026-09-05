"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { CvDownload } from "./CvDownload";
import { IconArrowRight, IconMapPin } from "./icons";
import { Reveal } from "./Reveal";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div
        className="dot-grid pointer-events-none absolute -right-24 -top-24 h-72 w-72 opacity-40 sm:h-96 sm:w-96"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-3.5 py-1.5 text-xs font-medium text-[var(--color-ink-soft)] sm:text-sm">
            <IconMapPin className="h-3.5 w-3.5 text-[var(--color-accent)]" />
            {t.hero.eyebrow}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="font-display max-w-3xl text-balance text-[2.25rem] font-medium leading-[1.12] tracking-tight text-[var(--color-ink)] sm:text-5xl md:text-[3.4rem]">
            {t.hero.headline}
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-6 max-w-2xl text-balance text-lg text-[var(--color-ink-soft)] sm:text-xl">
            {t.hero.valueProp}
          </p>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-4 max-w-2xl text-base text-[var(--color-ink-soft)]">{t.hero.intro}</p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-strong)]"
            >
              {t.hero.ctaPrimary}
              <IconArrowRight className="h-4 w-4" />
            </a>
            <CvDownload variant="secondary" />
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-16 border-t border-[var(--color-border)] pt-8">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {t.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-medium text-[var(--color-accent)] sm:text-4xl">
                    {stat.value}
                  </dd>
                  <div className="mt-1 text-sm font-medium text-[var(--color-ink)]">{stat.label}</div>
                  <div className="text-xs text-[var(--color-ink-faint)]">{stat.sub}</div>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-xs text-[var(--color-ink-faint)]">{t.hero.statsCaption}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
