import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type Tone = "light" | "dark" | "onRed";

const tones: Record<Tone, string> = {
  light:
    "border-brand-graphite/12 bg-white text-brand-graphite",
  dark:
    "border-brand-red/20 bg-brand-red/5 text-brand-red-deep",
  onRed:
    "border-white/20 bg-white/10 text-white",
};

export function Badge({
  icon: Icon,
  label,
  tone = "light",
  className,
}: {
  icon?: LucideIcon;
  label: string;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-display text-[11px] font-semibold uppercase tracking-widest2",
        tones[tone],
        className,
      )}
    >
      {Icon && <Icon size={14} strokeWidth={1.8} aria-hidden="true" />}
      {label}
    </span>
  );
}
