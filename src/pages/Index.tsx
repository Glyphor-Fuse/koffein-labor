// Update this page (the content is just a fallback if you fail to update the page)

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { LabStats } from "@/components/LabStats";
import { Footer } from "@/components/Footer";
import { LiquidEther } from "@/components/ui/LiquidEther";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white">
      <div className="fixed inset-0 -z-10 opacity-30 pointer-events-none">
        <LiquidEther />
      </div>
      <Header />
      <HeroSection />
      <LabStats />
      <ServicesGrid />
      <Footer />
    </main>
  );
};

export default Index;
