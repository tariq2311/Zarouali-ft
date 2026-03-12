import HeroSection from "@/components/HeroSection";
import KpiSection from "@/components/KpiSection";
import VorteileSection from "@/components/VorteileSection";

export default function Home() {
  return (
    <main>
      <HeroSection backgroundImage="/hero-bg.png" />
      <KpiSection />
      <VorteileSection />
    </main>
  );
}
