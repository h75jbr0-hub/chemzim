import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import StatsSection from "@/components/landing/StatsSection";
import CurriculumSection from "@/components/landing/CurriculumSection";
import ToolsSection from "@/components/landing/ToolsSection";
import CTASection from "@/components/landing/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <CurriculumSection />
        <ToolsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
