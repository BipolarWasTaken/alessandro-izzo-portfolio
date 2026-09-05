"use client";

import { useId, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { ProjectContent } from "@/lib/content/types";
import { StatusBadge } from "./StatusBadge";
import { IconChevronDown } from "./icons";
import { FlowDiagram } from "./diagrams/FlowDiagram";
import { getProjectFlow } from "./diagrams/projectFlows";

const LABELS = {
  it: { problem: "Problema", solution: "Soluzione", role: "Ruolo", process: "Processo", tools: "Strumenti", result: "Risultato" },
  en: { problem: "Problem", solution: "Solution", role: "Role", process: "Process", tools: "Tools", result: "Result" },
};

export function ProjectCard({ project }: { project: ProjectContent }) {
  const { locale } = useLanguage();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const labels = LABELS[locale];
  const flow = getProjectFlow(project.id, locale);

  return (
    <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]">
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="font-display text-2xl font-medium text-[var(--color-ink)]">{project.name}</h3>
          <StatusBadge status={project.status} label={project.statusLabel} />
        </div>

        {project.launchedTag && (
          <span className="mt-3 inline-block rounded-full border border-[var(--color-border-strong)] px-2.5 py-0.5 text-[0.7rem] font-medium text-[var(--color-ink-soft)]">
            {project.launchedTag}
          </span>
        )}

        <p className="mt-3 text-base leading-relaxed text-[var(--color-ink-soft)]">{project.tagline}</p>

        <p className="mt-4 text-sm font-medium text-[var(--color-ink)]">{project.result}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-[var(--color-surface-sunken)] px-3 py-1 text-xs font-medium text-[var(--color-ink-soft)]"
            >
              {tool}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
        >
          {open ? project.collapseLabel : project.expandLabel}
          <IconChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>

      {open && (
        <div id={panelId} className="border-t border-[var(--color-border)] p-6 sm:p-8">
          <p className="rounded-lg bg-[var(--color-accent-soft)] px-4 py-3 text-sm font-medium text-[var(--color-accent-strong)]">
            {project.statusNote}
          </p>

          <dl className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
                {labels.problem}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-soft)]">{project.problem}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
                {labels.solution}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-soft)]">{project.solution}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
                {labels.role}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-soft)]">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
                {labels.process}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-soft)]">{project.process}</dd>
            </div>
          </dl>

          {flow.length > 0 && (
            <div className="mt-6">
              <FlowDiagram steps={flow} caption={project.diagramCaption} />
            </div>
          )}
        </div>
      )}
    </article>
  );
}
