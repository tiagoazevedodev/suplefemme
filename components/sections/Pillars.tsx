import { Sparkles, Flame, Brain } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FloralPattern } from "@/components/ui/FloralPattern";
import { FadeIn } from "@/components/motion/FadeIn";
import { pillars } from "@/lib/content";

const icons = [Sparkles, Flame, Brain];

export function Pillars() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-gradient py-24 text-white md:py-32">
      <FloralPattern opacity={0.14} />
      <Container className="relative z-10">
        <FadeIn>
          <SectionHeading
            eyebrow="Três pilares"
            title="Bem-estar de dentro pra fora"
            description="Uma fórmula pensada para apoiar diferentes dimensões da vitalidade feminina."
            align="left"
            tone="light"
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-8">
          {pillars.map((pillar, i) => {
            const Icon = icons[i];
            return (
              <FadeIn key={pillar.title} delay={0.08 * i}>
                <article className="group h-full rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10">
                  <Icon
                    size={28}
                    strokeWidth={1.6}
                    className="text-white/90"
                    aria-hidden="true"
                  />
                  <h3 className="mt-6 font-display text-2xl font-extrabold leading-tight tracking-tightish">
                    {pillar.title}
                  </h3>
                  <ul className="mt-5 space-y-2.5">
                    {pillar.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 font-body text-[15px] leading-snug text-white/85"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-3 shrink-0 rounded-full bg-white/60"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
