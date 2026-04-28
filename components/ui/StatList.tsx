import { Fragment } from "react";
import { cn } from "@/lib/cn";

export type Stat = { value: string; label: string };

export function StatList({
  stats,
  tone = "dark",
  className,
}: {
  stats: Stat[];
  tone?: "dark" | "light";
  className?: string;
}) {
  const valueColor = tone === "dark" ? "text-brand-red-deep" : "text-white";
  const labelColor = tone === "dark" ? "text-brand-gray-mid" : "text-white/75";
  const divider = tone === "dark" ? "bg-brand-graphite/15" : "bg-white/20";

  return (
    <ul
      className={cn(
        "flex flex-wrap items-stretch gap-x-5 gap-y-3",
        className,
      )}
    >
      {stats.map((stat, i) => (
        <Fragment key={stat.label}>
          {i > 0 && (
            <li
              aria-hidden="true"
              className={cn("hidden w-px self-stretch md:block", divider)}
            />
          )}
          <li className="flex flex-col">
            <span
              className={cn(
                "font-display text-2xl font-extrabold leading-none tracking-tightish md:text-3xl",
                valueColor,
              )}
            >
              {stat.value}
            </span>
            <span
              className={cn(
                "mt-1.5 font-display text-[11px] font-semibold uppercase tracking-widest2",
                labelColor,
              )}
            >
              {stat.label}
            </span>
          </li>
        </Fragment>
      ))}
    </ul>
  );
}
