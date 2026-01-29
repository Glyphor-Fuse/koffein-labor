// Update this page (the content is just a fallback if you fail to update the page)

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { GridSystem } from "@/components/GridSystem";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white">
      <Header />
      <HeroSection />
      <GridSystem />
      <FeatureGrid />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
