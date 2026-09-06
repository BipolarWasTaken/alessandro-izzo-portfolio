"use client";

import Link from "next/link";
import type { ProjectContent } from "@/lib/content/types";
import { StatusBadge } from "./StatusBadge";
import { IconArrowRight } from "./icons";

export function ProjectListRow({
  project,
  index,
  viewDetailLabel,
}: {
  project: ProjectContent;
  index: number;
  viewDetailLabel: string;
}) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group flex items-center gap-5 border-b border-[var(--color-border)] py-7 transition-colors first:pt-0 hover:bg-[var(--color-surface)] sm:gap-8 sm:px-6 sm:py-8"
    >
      <span className="font-display hidden text-2xl font-medium text-[var(--color-ink-faint)] sm:block">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="font-display text-xl font-medium text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)] sm:text-2xl">
            {project.name}
          </h3>
          <StatusBadge status={project.status} label={project.statusLabel} />
        </div>
        <p className="mt-1.5 max-w-2xl truncate text-sm text-[var(--color-ink-soft)] sm:text-base">
          {project.tagline}
        </p>
      </div>

      <span className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] sm:flex">
        {viewDetailLabel}
        <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
      <IconArrowRight className="h-5 w-5 shrink-0 text-[var(--color-ink-faint)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--color-accent)] sm:hidden" />
    </Link>
  );
}
