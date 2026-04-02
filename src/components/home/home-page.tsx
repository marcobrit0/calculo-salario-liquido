import { SiteFooter } from "@/components/site-footer";
import { CalculatorSection } from "@/components/home/calculator-section";
import { ExamplesSection } from "@/components/home/examples-section";
import { FaqSection } from "@/components/home/faq-section";
import { GuideSection } from "@/components/home/guide-section";
import { HeroSection } from "@/components/home/hero-section";
import { InterpretationSection } from "@/components/home/interpretation-section";
import { MethodologySection } from "@/components/home/methodology-section";
import { PracticalMomentsSection } from "@/components/home/practical-moments-section";
import { SourcesSection } from "@/components/home/sources-section";
import { getHomePageJsonLd } from "@/lib/home-content";

const homePageJsonLd = getHomePageJsonLd();

export function HomePage() {
  return (
    <>
      <main className="bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
        />
        <HeroSection />
        <CalculatorSection />
        <MethodologySection />
        <GuideSection />
        <ExamplesSection />
        <InterpretationSection />
        <SourcesSection />
        <PracticalMomentsSection />
        <FaqSection />
      </main>

      <SiteFooter />
    </>
  );
}
