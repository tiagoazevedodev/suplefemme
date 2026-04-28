import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FloralPattern } from "@/components/ui/FloralPattern";
import { FadeIn } from "@/components/motion/FadeIn";
import { finalCta } from "@/lib/content";
import { whatsappUrl } from "@/lib/config";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-gradient py-24 text-white md:py-32">
      <FloralPattern opacity={0.18} />
      <Container className="relative z-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-widest2 text-white/85">
              {finalCta.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-5xl font-black leading-[0.95] tracking-tightish text-balance md:text-6xl lg:text-7xl">
              {finalCta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-body text-base leading-relaxed text-white/90 md:text-lg">
              {finalCta.description}
            </p>
            <div className="mt-10 flex flex-col items-center gap-5">
              <ButtonLink
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                {finalCta.cta}
                <ArrowRight size={16} strokeWidth={2.5} />
              </ButtonLink>
              <div className="flex items-center gap-2 font-body text-sm text-white/80">
                <ShieldCheck size={16} aria-hidden="true" />
                Garantia de fábrica de 12 meses
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
