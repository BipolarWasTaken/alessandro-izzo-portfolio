"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ContactForm } from "./ContactForm";
import { IconDiscord, IconEmail, IconLinkedin } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const EMAIL = "izzoalessandro917@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/felice-alessandro-izzo-7ba04020b/";
const DISCORD = "bipww";

const cardClasses =
  "flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-left transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-card)]";
const iconWrapClasses =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]";
const labelClasses = "block text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]";

export function Contact() {
  const { t, locale } = useLanguage();
  const [copied, setCopied] = useState(false);

  async function copyDiscord() {
    try {
      await navigator.clipboard.writeText(DISCORD);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard API unavailable — the handle is still visible to copy manually
    }
  }

  return (
    <section id="contact" className="border-t border-[var(--color-border)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker={t.contact.kicker} title={t.contact.title} intro={t.contact.body} />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="space-y-4">
            <a href={`mailto:${EMAIL}`} className={cardClasses}>
              <span className={iconWrapClasses}>
                <IconEmail className="h-5 w-5" />
              </span>
              <span>
                <span className={labelClasses}>{t.contact.emailLabel}</span>
                <span className="block text-sm font-medium text-[var(--color-ink)] break-all">{EMAIL}</span>
              </span>
            </a>

            <a href={LINKEDIN} target="_blank" rel="noreferrer noopener" className={cardClasses}>
              <span className={iconWrapClasses}>
                <IconLinkedin className="h-5 w-5" />
              </span>
              <span>
                <span className={labelClasses}>{t.contact.linkedinLabel}</span>
                <span className="block text-sm font-medium text-[var(--color-ink)]">/felice-alessandro-izzo</span>
              </span>
            </a>

            <button type="button" onClick={copyDiscord} className={`${cardClasses} w-full`}>
              <span className={iconWrapClasses}>
                <IconDiscord className="h-5 w-5" />
              </span>
              <span className="flex-1">
                <span className={labelClasses}>{t.contact.discordLabel}</span>
                <span className="block text-sm font-medium text-[var(--color-ink)]">{DISCORD}</span>
                <span className="mt-0.5 block text-xs text-[var(--color-ink-faint)]">{t.contact.discordNote}</span>
              </span>
              <span className="shrink-0 text-xs font-semibold text-[var(--color-accent)]">
                {copied ? (locale === "it" ? "Copiato!" : "Copied!") : locale === "it" ? "Copia" : "Copy"}
              </span>
            </button>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)] sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
