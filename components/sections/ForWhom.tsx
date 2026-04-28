import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { forWhom } from "@/lib/content";

export function ForWhom() {
  return (
    <section className="bg-brand-cream py-24 md:py-32">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <FadeIn>
            <SectionHeading
              eyebrow={forWhom.eyebrow}
              title={forWhom.title}
              align="left"
              tone="dark"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <p className="font-body text-lg leading-relaxed text-brand-graphite md:text-xl">
                {forWhom.description}
              </p>
              <div className="rounded-2xl border border-brand-red/20 bg-white p-6">
                <p className="font-display text-xs font-semibold uppercase tracking-widest2 text-brand-red">
                  Atenção
                </p>
                <p className="mt-2 font-body text-sm leading-relaxed text-brand-graphite/85 md:text-base">
                  {forWhom.notRecommended}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
