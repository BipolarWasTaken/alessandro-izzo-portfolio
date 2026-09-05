import type { ProjectStatus } from "@/lib/content/types";

const STYLES: Record<ProjectStatus, string> = {
  development: "bg-[var(--color-badge-dev-bg)] text-[var(--color-badge-dev-text)]",
  active: "bg-[var(--color-badge-active-bg)] text-[var(--color-badge-active-text)]",
  paused: "bg-[var(--color-badge-paused-bg)] text-[var(--color-badge-paused-text)]",
};

const DOT_STYLES: Record<ProjectStatus, string> = {
  development: "bg-[var(--color-badge-dev-text)]",
  active: "bg-[var(--color-badge-active-text)]",
  paused: "bg-[var(--color-badge-paused-text)]",
};

export function StatusBadge({ status, label }: { status: ProjectStatus; label: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${STYLES[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${DOT_STYLES[status]}`} aria-hidden="true" />
      {label}
    </span>
  );
}
