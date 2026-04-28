import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = tone === "dark" ? "text-brand-graphite" : "text-white";
  const eyebrowColor = tone === "dark" ? "text-brand-red" : "text-white/80";
  const descColor = tone === "dark" ? "text-brand-gray-mid" : "text-white/85";

  return (
    <div className={cn("max-w-2xl", alignCls, className)}>
      {eyebrow && (
        <p
          className={cn(
            "font-display text-xs font-semibold uppercase tracking-widest2",
            eyebrowColor,
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tightish md:text-5xl lg:text-6xl",
          titleColor,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 font-body text-base leading-relaxed md:text-lg",
            descColor,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
