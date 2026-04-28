import { cn } from "@/lib/cn";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outlineLight" | "outlineDark" | "primaryDark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-display text-sm font-bold uppercase tracking-widest2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-white text-brand-red-deep shadow-cta hover:-translate-y-0.5 hover:bg-brand-cream hover:shadow-lg focus-visible:ring-white/80 focus-visible:ring-offset-brand-red",
  outlineLight:
    "border border-white/40 text-white hover:bg-white/10 focus-visible:ring-white/80 focus-visible:ring-offset-brand-red",
  outlineDark:
    "border border-brand-graphite/20 text-brand-graphite hover:border-brand-red hover:text-brand-red-deep focus-visible:ring-brand-red focus-visible:ring-offset-white",
  primaryDark:
    "bg-brand-red-deep text-white shadow-cta hover:-translate-y-0.5 hover:bg-brand-red-dark focus-visible:ring-brand-red focus-visible:ring-offset-white",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
