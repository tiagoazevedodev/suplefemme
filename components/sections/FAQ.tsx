"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { faqs } from "@/lib/content";

export function FAQ() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Perguntas frequentes"
            title="Tudo que você quer saber"
            align="left"
            tone="dark"
          />
        </FadeIn>

        <FadeIn delay={0.05}>
          <Accordion.Root
            type="single"
            collapsible
            className="mt-10 divide-y divide-brand-graphite/10 border-y border-brand-graphite/10 md:mt-14"
          >
            {faqs.map((faq, i) => (
              <Accordion.Item key={i} value={`q-${i}`}>
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-6 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-white">
                    <span className="font-display text-lg font-bold leading-tight text-brand-graphite md:text-xl">
                      {faq.q}
                    </span>
                    <Plus
                      size={22}
                      strokeWidth={2}
                      className="shrink-0 text-brand-red transition-transform duration-300 group-data-[state=open]:rotate-45"
                      aria-hidden="true"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[accordionUp_0.25s_ease-out] data-[state=open]:animate-[accordionDown_0.25s_ease-out]">
                  <p className="pb-7 pr-12 font-body text-base leading-relaxed text-brand-graphite/85 md:text-lg">
                    {faq.a}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </FadeIn>

        <p className="mt-8 font-body text-sm text-brand-gray-mid">
          Em caso de dúvida, sempre consulte seu médico ou farmacêutico.
        </p>
      </Container>

      <style>{`
        @keyframes accordionDown {
          from { height: 0 } to { height: var(--radix-accordion-content-height) }
        }
        @keyframes accordionUp {
          from { height: var(--radix-accordion-content-height) } to { height: 0 }
        }
      `}</style>
    </section>
  );
}
