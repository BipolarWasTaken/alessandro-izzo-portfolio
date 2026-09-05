"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const CONTACT_EMAIL = "izzoalessandro917@gmail.com";

export function ContactForm() {
  const { t, locale } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = locale === "it" ? `Contatto dal portfolio — ${name}` : `Portfolio contact — ${name}`;
    const bodyIntro =
      locale === "it"
        ? `${message}\n\n---\nNome: ${name}\nEmail: ${email}`
        : `${message}\n\n---\nName: ${name}\nEmail: ${email}`;

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyIntro)}`;
    window.location.href = mailto;
  }

  const inputClasses =
    "w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] focus:border-[var(--color-accent)] focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">
          {t.contact.formName}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClasses}
          autoComplete="name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">
          {t.contact.formEmail}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClasses}
          autoComplete="email"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">
          {t.contact.formMessage}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.contact.formMessagePlaceholder}
          className={`${inputClasses} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-on-accent)] transition-colors hover:bg-[var(--color-accent-strong)] sm:w-auto"
      >
        {t.contact.formSubmit}
      </button>
      <p className="text-xs text-[var(--color-ink-faint)]">{t.contact.formNote}</p>
    </form>
  );
}
