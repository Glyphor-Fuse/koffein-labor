import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { LaboratorySection } from "@/components/LaboratorySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background selection:bg-accent selection:text-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <LaboratorySection />
      <Footer />
    </main>
  );
};

export default Index;
