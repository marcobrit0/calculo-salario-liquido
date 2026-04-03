import { SiteFooter } from "@/components/site-footer";
import { CalculatorSection } from "@/components/home/calculator-section";
import { ExamplesSection } from "@/components/home/examples-section";
import { FaqSection } from "@/components/home/faq-section";
import { FeatureHighlightsSection } from "@/components/home/feature-highlights-section";
import { GuideSection } from "@/components/home/guide-section";
import { GrossVsNetSection } from "@/components/home/gross-vs-net-section";
import { HeroSection } from "@/components/home/hero-section";
import { InterpretationSection } from "@/components/home/interpretation-section";
import { InssTableSection } from "@/components/home/inss-table-section";
import { IrrfTableSection } from "@/components/home/irrf-table-section";
import { LawChangeSection } from "@/components/home/law-change-section";
import { MethodologySection } from "@/components/home/methodology-section";
import { PayslipCheckSection } from "@/components/home/payslip-check-section";
import { PracticalMomentsSection } from "@/components/home/practical-moments-section";
import { ProposalComparisonSection } from "@/components/home/proposal-comparison-section";
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
        <FeatureHighlightsSection />
        <CalculatorSection />
        <InterpretationSection />
        <InssTableSection />
        <IrrfTableSection />
        <LawChangeSection />
        <GrossVsNetSection />
        <MethodologySection />
        <GuideSection />
        <ExamplesSection />
        <PayslipCheckSection />
        <ProposalComparisonSection />
        <PracticalMomentsSection />
        <SourcesSection />
        <FaqSection />
      </main>

      <SiteFooter />
    </>
  );
}
