import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Pillars } from "@/components/sections/Pillars";
import { Ingredients } from "@/components/sections/Ingredients";
import { HowToUse } from "@/components/sections/HowToUse";
import { ForWhom } from "@/components/sections/ForWhom";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Pillars />
      <Ingredients />
      <HowToUse />
      <ForWhom />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
