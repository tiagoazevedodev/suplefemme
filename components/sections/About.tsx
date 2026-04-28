import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { about } from "@/lib/content";

export function About() {
  return (
    <section className="bg-brand-cream py-24 md:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            align="left"
            tone="dark"
          />
        </FadeIn>
        <div className="mt-10 grid gap-6 md:mt-12 md:max-w-3xl">
          {about.paragraphs.map((p, i) => (
            <FadeIn key={i} delay={0.05 * (i + 1)}>
              <p className="font-body text-lg leading-relaxed text-brand-graphite md:text-xl">
                {p}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
