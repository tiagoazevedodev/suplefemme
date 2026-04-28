import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FloralPattern } from "@/components/ui/FloralPattern";
import { FadeIn } from "@/components/motion/FadeIn";
import { howToUse } from "@/lib/content";

export function HowToUse() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-red-deep py-24 text-white md:py-32">
      <FloralPattern opacity={0.12} />
      <Container className="relative z-10">
        <FadeIn>
          <SectionHeading
            eyebrow={howToUse.eyebrow}
            title={howToUse.title}
            align="left"
            tone="light"
          />
        </FadeIn>

        <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-3 md:gap-10">
          {howToUse.steps.map((step, i) => (
            <FadeIn key={step.n} delay={0.08 * i}>
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="font-display text-7xl font-black leading-none text-white/15 md:text-8xl"
                >
                  {step.n}
                </span>
                <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tightish text-white">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs font-body text-base leading-relaxed text-white/80">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
