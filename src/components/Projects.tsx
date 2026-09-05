"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="border-t border-[var(--color-border)] bg-[var(--color-surface-sunken)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker={t.projects.kicker} title={t.projects.title} intro={t.projects.intro} />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {t.projects.items.map((project, i) => (
            <Reveal key={project.id} delay={i * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-14">
          <h3 className="font-display text-lg font-medium text-[var(--color-ink)]">{t.projects.sideProjectsTitle}</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {t.projects.sideProjects.map((sp) => (
              <div key={sp.name} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <p className="text-sm font-semibold text-[var(--color-ink)]">{sp.name}</p>
                <p className="mt-1 text-sm text-[var(--color-ink-soft)]">{sp.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
