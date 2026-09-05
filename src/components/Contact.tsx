"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ContactForm } from "./ContactForm";
import { IconEmail, IconLinkedin } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const EMAIL = "izzoalessandro917@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/felice-alessandro-izzo-7ba04020b/";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="border-t border-[var(--color-border)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker={t.contact.kicker} title={t.contact.title} intro={t.contact.body} />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="space-y-4">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[var(--color-accent)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <IconEmail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
                  {t.contact.emailLabel}
                </span>
                <span className="block text-sm font-medium text-[var(--color-ink)] break-all">{EMAIL}</span>
              </span>
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[var(--color-accent)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <IconLinkedin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
                  {t.contact.linkedinLabel}
                </span>
                <span className="block text-sm font-medium text-[var(--color-ink)]">/felice-alessandro-izzo</span>
              </span>
            </a>
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
