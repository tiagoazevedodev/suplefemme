import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Identify } from "@/components/sections/Identify";
import { About } from "@/components/sections/About";
import { Pillars } from "@/components/sections/Pillars";
import { Ingredients } from "@/components/sections/Ingredients";
import { HowToUse } from "@/components/sections/HowToUse";
import { ForWhom } from "@/components/sections/ForWhom";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { WhatsAppFAB } from "@/components/ui/WhatsAppFAB";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Identify />
        <About />
        <Pillars />
        <Ingredients />
        <HowToUse />
        <ForWhom />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
      <WhatsAppFAB />
    </>
  );
}
