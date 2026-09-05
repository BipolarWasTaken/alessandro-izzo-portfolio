import { Fragment } from "react";
import { IconArrowRight } from "../icons";

export interface FlowStep {
  title: string;
  detail?: string;
  highlight?: boolean;
  muted?: boolean;
}

export function FlowDiagram({ steps, caption }: { steps: FlowStep[]; caption: string }) {
  return (
    <figure className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-sunken)] p-5 sm:p-7">
      <div className="flex flex-wrap items-center gap-x-1 gap-y-3">
        {steps.map((step, i) => (
          <Fragment key={i}>
            <div
              className={`min-w-[126px] flex-[1_1_126px] rounded-xl border px-4 py-3 text-center ${
                step.highlight
                  ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)]"
                  : step.muted
                    ? "border-dashed border-[var(--color-border-strong)] bg-[var(--color-bg)]"
                    : "border-[var(--color-border)] bg-[var(--color-surface)]"
              }`}
            >
              <p
                className={`text-xs font-semibold leading-snug sm:text-[0.8rem] ${
                  step.highlight ? "text-[var(--color-accent-strong)]" : "text-[var(--color-ink)]"
                }`}
              >
                {step.title}
              </p>
              {step.detail && (
                <p className="mt-1 text-[0.7rem] leading-snug text-[var(--color-ink-faint)]">{step.detail}</p>
              )}
            </div>
            {i < steps.length - 1 && (
              <div className="flex w-6 shrink-0 items-center justify-center" aria-hidden="true">
                <IconArrowRight className="h-4 w-4 text-[var(--color-ink-faint)]" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
      <figcaption className="mt-4 text-xs italic text-[var(--color-ink-faint)]">{caption}</figcaption>
    </figure>
  );
}
