import Image from "next/image";
import { ArrowRight, Leaf, Sprout, FlaskConical } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FloralPattern } from "@/components/ui/FloralPattern";
import { hero } from "@/lib/content";
import { whatsappUrl, SITE } from "@/lib/config";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-brand-gradient text-white">
      <FloralPattern opacity={0.18} />

      <Container className="relative z-10 pb-20 pt-12 md:pb-32 md:pt-16">
        {/* Brand wordmark */}
        <div className="flex items-center justify-between">
          <p className="font-display text-2xl font-black tracking-tightish md:text-3xl">
            {SITE.name}
          </p>
          <p className="hidden font-display text-[11px] font-semibold uppercase tracking-widest2 text-white/70 md:block">
            Suplemento dietético natural
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 md:mt-24 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-widest2 text-white/85 md:text-sm">
              {hero.tagline}
            </p>
            <h1 className="mt-5 font-display text-5xl font-black leading-[0.95] tracking-tightish text-balance md:text-7xl lg:text-[88px]">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-white/90 md:text-lg">
              {hero.description}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                {hero.ctaPrimary}
                <ArrowRight size={16} strokeWidth={2.5} />
              </ButtonLink>
              <ButtonLink href="#ingredientes" variant="outlineLight">
                {hero.ctaSecondary}
              </ButtonLink>
            </div>

            <ul className="mt-8 hidden flex-wrap items-center gap-x-5 gap-y-2 font-display text-[10px] font-semibold uppercase tracking-widest2 text-white/70 md:flex">
              <li className="flex items-center gap-1.5">
                <Leaf size={13} strokeWidth={1.8} aria-hidden="true" />
                Natural
              </li>
              <li aria-hidden="true" className="h-3 w-px bg-white/25" />
              <li className="flex items-center gap-1.5">
                <Sprout size={13} strokeWidth={1.8} aria-hidden="true" />
                Vegano
              </li>
              <li aria-hidden="true" className="h-3 w-px bg-white/25" />
              <li>12 meses de garantia</li>
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div
              aria-hidden="true"
              className="absolute inset-x-8 bottom-0 h-24 rounded-[100%] bg-black/40 blur-2xl"
            />
            <Image
              src="/product/flask-closed.png"
              alt="Pote de SUPLEFEMME — 60 cápsulas"
              width={720}
              height={900}
              priority
              className="relative drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
