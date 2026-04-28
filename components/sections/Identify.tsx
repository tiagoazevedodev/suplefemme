import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { identify } from "@/lib/content";

export function Identify() {
  return (
    <section className="relative overflow-hidden bg-brand-cream py-24 md:py-32">
      {/* divisor decorativo no topo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-24 bg-brand-red/30"
      />

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-brand-red"
              />
              <p className="font-display text-[11px] font-semibold uppercase tracking-widest2 text-brand-red">
                {identify.eyebrow}
              </p>
              <span
                aria-hidden="true"
                className="h-px w-8 bg-brand-red"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tightish text-brand-graphite text-balance md:text-5xl lg:text-[56px]">
              {identify.title}
            </h2>
          </FadeIn>

          <div className="mt-8 space-y-5">
            {identify.paragraphs.map((p, i) => (
              <FadeIn key={i} delay={0.1 * (i + 1)}>
                <p className="font-body text-lg leading-relaxed text-brand-graphite/85 md:text-xl">
                  {p}
                </p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.35}>
            <div className="mt-10 flex justify-center">
              <ButtonLink href="#sobre" variant="outlineDark">
                {identify.cta}
                <ArrowRight size={16} strokeWidth={2.5} />
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
