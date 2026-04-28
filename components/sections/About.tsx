import Image from "next/image";
import { FlaskConical, Leaf, Sprout, WheatOff, MilkOff } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { StatList } from "@/components/ui/StatList";
import { FloralPattern } from "@/components/ui/FloralPattern";
import { FadeIn } from "@/components/motion/FadeIn";
import { about } from "@/lib/content";

const stats = [
  { value: "60", label: "Cápsulas" },
  { value: "30", label: "Dias de uso" },
  { value: "3", label: "Ativos naturais" },
  { value: "600mg", label: "Por cápsula" },
];

const badges = [
  { icon: Leaf, label: "Natural" },
  { icon: Sprout, label: "Vegano" },
  { icon: WheatOff, label: "Sem glúten" },
  { icon: MilkOff, label: "Sem lactose" },
];

export function About() {
  return (
    <section id="sobre" className="relative isolate overflow-hidden scroll-mt-20 bg-brand-cream py-24 md:py-32">
      <FloralPattern
        opacity={0.05}
        colorClassName="text-brand-red-deep"
        parallax={false}
      />

      <Container className="relative z-10">
        <div className="grid gap-14 md:grid-cols-[1.15fr_1fr] md:gap-16 lg:gap-24">
          {/* Coluna texto */}
          <div>
            <FadeIn>
              <SectionHeading
                eyebrow={about.eyebrow}
                title={about.title}
                align="left"
                tone="dark"
              />
            </FadeIn>

            <div className="mt-8 space-y-5 md:mt-10">
              {about.paragraphs.map((p, i) => (
                <FadeIn key={i} delay={0.05 * (i + 1)}>
                  <p className="font-body text-base leading-relaxed text-brand-graphite/90 md:text-lg">
                    {p}
                  </p>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.2}>
              <div className="mt-10 border-t border-brand-graphite/10 pt-8">
                <StatList stats={stats} tone="dark" />
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-2">
                {badges.map((b) => (
                  <Badge key={b.label} icon={b.icon} label={b.label} tone="dark" />
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-brand-red/15 bg-white p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red-deep">
                  <FlaskConical size={22} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display text-xs font-semibold uppercase tracking-widest2 text-brand-red">
                    Origem
                  </p>
                  <p className="mt-0.5 font-body text-sm leading-snug text-brand-graphite md:text-base">
                    Manipulado em farmácia, com ativos selecionados e dosagem
                    controlada.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Coluna visual */}
          <FadeIn delay={0.15} className="relative">
            <div className="relative mx-auto w-full max-w-md">
              {/* halo radial atrás do pote */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 translate-y-6 scale-90 rounded-[40%] bg-[radial-gradient(closest-side,rgba(200,16,46,0.22),transparent_70%)] blur-2xl"
              />

              {/* Selo flutuante */}
              <div className="absolute -left-3 top-6 z-10 hidden md:block">
                <div className="flex h-24 w-24 -rotate-12 items-center justify-center rounded-full bg-brand-red text-white shadow-cta ring-4 ring-brand-cream">
                  <div className="text-center">
                    <p className="font-display text-2xl font-black leading-none tracking-tightish">
                      100%
                    </p>
                    <p className="mt-1 font-display text-[9px] font-semibold uppercase tracking-widest2">
                      Natural
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-brand-graphite/10 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(107,10,23,0.45)]">
                <Image
                  src="/product/flask-open.png"
                  alt="Pote SUPLEFEMME aberto, mostrando as cápsulas"
                  width={640}
                  height={640}
                  className="mx-auto h-auto w-full max-w-xs"
                />
                <div className="mt-6 flex items-center justify-between border-t border-brand-graphite/10 pt-5">
                  <div>
                    <p className="font-display text-[10px] font-semibold uppercase tracking-widest2 text-brand-gray-mid">
                      Apresentação
                    </p>
                    <p className="mt-0.5 font-display text-base font-bold text-brand-graphite">
                      60 cápsulas · 600mg
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-[10px] font-semibold uppercase tracking-widest2 text-brand-gray-mid">
                      Posologia
                    </p>
                    <p className="mt-0.5 font-display text-base font-bold text-brand-graphite">
                      2/dia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
