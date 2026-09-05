import { Reveal } from "./Reveal";

export function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
}: {
  kicker: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
        {kicker}
      </span>
      <h2 className="font-display mt-3 text-balance text-3xl font-medium leading-tight tracking-tight text-[var(--color-ink)] sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base text-[var(--color-ink-soft)] sm:text-lg">{intro}</p>}
    </Reveal>
  );
}
