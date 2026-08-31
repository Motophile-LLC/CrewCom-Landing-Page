import { SiteNav } from "@/components/site-nav";
import { HeroSection } from "@/components/hero-section";
import { StatStrip } from "@/components/stat-strip";
import { FeaturesGrid } from "@/components/features-grid";
import { CaptainSpotlight } from "@/components/captain-spotlight";
import { DestinationRules } from "@/components/destination-rules";
import { GloveUiShowcase } from "@/components/glove-ui-showcase";
import { HowItWorks } from "@/components/how-it-works";
import { CtaFooter } from "@/components/cta-footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <SiteNav />
      <HeroSection />
      <StatStrip />
      <FeaturesGrid />
      <DestinationRules />
      <GloveUiShowcase />
      <CaptainSpotlight />
      <HowItWorks />
      <CtaFooter />
    </main>
  );
}
