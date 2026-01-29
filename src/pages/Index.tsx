// Update this page (the content is just a fallback if you fail to update the page)

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LaboratorySection } from "@/components/LaboratorySection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <div className="h-px w-full bg-border" />
        <LaboratorySection />
        <div className="h-px w-full bg-border" />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
