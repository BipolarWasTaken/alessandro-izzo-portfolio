"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { StatusBadge } from "./StatusBadge";
import { IconArrowRight, IconExternalLink, IconZoomIn } from "./icons";
import { FlowDiagram } from "./diagrams/FlowDiagram";
import { getProjectFlow } from "./diagrams/projectFlows";
import { Lightbox } from "./Lightbox";

export function ProjectDetail({ projectId }: { projectId: string }) {
  const { t, locale } = useLanguage();
  const project = t.projects.items.find((p) => p.id === projectId);
  const flow = getProjectFlow(projectId, locale);
  const labels = t.projects.detailLabels;
  const [openShot, setOpenShot] = useState<number | null>(null);

  if (!project) return null;

  return (
    <article className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-accent)]"
        >
          <IconArrowRight className="h-4 w-4 rotate-180" />
          {t.projects.backLabel}
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <h1 className="font-display text-3xl font-medium text-[var(--color-ink)] sm:text-5xl">{project.name}</h1>
          <StatusBadge status={project.status} label={project.statusLabel} />
        </div>

        {project.launchedTag && (
          <span className="mt-4 inline-block rounded-full border border-[var(--color-border-strong)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-ink-soft)]">
            {project.launchedTag}
          </span>
        )}

        <p className="mt-5 text-lg leading-relaxed text-[var(--color-ink-soft)] sm:text-xl">{project.tagline}</p>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <p className="text-base font-medium text-[var(--color-ink)]">{project.result}</p>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
            >
              {project.demoLabel}
              <IconExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-[var(--color-surface-sunken)] px-3 py-1 text-xs font-medium text-[var(--color-ink-soft)]"
            >
              {tool}
            </span>
          ))}
        </div>

        <p className="mt-8 rounded-lg bg-[var(--color-accent-soft)] px-4 py-3 text-sm font-medium text-[var(--color-accent-strong)]">
          <span className="font-semibold uppercase tracking-wide">{labels.status}: </span>
          {project.statusNote}
        </p>

        <dl className="mt-12 grid gap-8 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
              {labels.problem}
            </dt>
            <dd className="mt-2 text-base leading-relaxed text-[var(--color-ink-soft)]">{project.problem}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
              {labels.solution}
            </dt>
            <dd className="mt-2 text-base leading-relaxed text-[var(--color-ink-soft)]">{project.solution}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
              {labels.role}
            </dt>
            <dd className="mt-2 text-base leading-relaxed text-[var(--color-ink-soft)]">{project.role}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
              {labels.process}
            </dt>
            <dd className="mt-2 text-base leading-relaxed text-[var(--color-ink-soft)]">{project.process}</dd>
          </div>
        </dl>

        {flow.length > 0 && (
          <div className="mt-12">
            <FlowDiagram steps={flow} caption={project.diagramCaption} />
          </div>
        )}

        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-xl font-medium text-[var(--color-ink)]">{labels.screenshots}</h2>
            <div className="mt-6 space-y-10">
              {project.screenshots.map((shot, i) => (
                <figure key={shot.src}>
                  <button
                    type="button"
                    onClick={() => setOpenShot(i)}
                    aria-label={labels.screenshots}
                    className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-[var(--color-border)] shadow-[var(--shadow-card)]"
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={1440}
                      height={900}
                      sizes="(max-width: 768px) 100vw, 700px"
                      quality={92}
                      className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100">
                        <IconZoomIn className="h-5 w-5" />
                      </span>
                    </span>
                  </button>
                  <figcaption className="mt-3 text-sm text-[var(--color-ink-faint)]">{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 border-t border-[var(--color-border)] pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
          >
            <IconArrowRight className="h-4 w-4 rotate-180" />
            {t.projects.backLabel}
          </Link>
        </div>
      </div>

      {openShot !== null && project.screenshots && project.screenshots[openShot] && (
        <Lightbox
          src={project.screenshots[openShot].src}
          alt={project.screenshots[openShot].alt}
          caption={project.screenshots[openShot].caption}
          onClose={() => setOpenShot(null)}
        />
      )}
    </article>
  );
}
