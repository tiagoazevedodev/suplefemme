import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { ingredients } from "@/lib/content";

export function Ingredients() {
  return (
    <section id="ingredientes" className="bg-brand-cream py-24 md:py-32">
      <Container>
        <div className="grid items-end gap-10 md:grid-cols-[1.4fr_1fr]">
          <FadeIn>
            <SectionHeading
              eyebrow="Ingredientes naturais"
              title="Três fitoterápicos com tradição"
              description="Plantas usadas há séculos em diferentes culturas, reunidas em uma cápsula de 600mg."
              align="left"
              tone="dark"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="hidden md:block">
              <Image
                src="/product/flask-open.png"
                alt="Pote de SUPLEFEMME aberto, exibindo as cápsulas"
                width={520}
                height={520}
                className="ml-auto h-auto w-full max-w-sm"
              />
            </div>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
          {ingredients.map((ing, i) => (
            <FadeIn key={ing.name} delay={0.08 * i}>
              <article className="group flex h-full flex-col rounded-3xl border border-brand-graphite/10 bg-white p-8 transition hover:border-brand-red/40 hover:shadow-xl">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-xs font-semibold uppercase tracking-widest2 text-brand-red">
                    {ing.dose}
                  </span>
                  <span className="font-display text-xs font-semibold uppercase tracking-widest2 text-brand-gray-mid">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight tracking-tightish text-brand-graphite">
                  {ing.name}
                </h3>
                <p className="mt-1 font-body text-sm italic text-brand-gray-mid">
                  {ing.scientific}
                </p>
                <p className="mt-5 font-body text-base leading-relaxed text-brand-graphite/85">
                  {ing.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <p className="mt-8 max-w-2xl font-body text-xs leading-relaxed text-brand-gray-mid md:text-sm">
          Cápsula de 600mg. Demais 100mg correspondem aos excipientes da formulação.
          Os ativos são apresentados conforme uso tradicional — não substituem
          orientação médica.
        </p>
      </Container>
    </section>
  );
}
