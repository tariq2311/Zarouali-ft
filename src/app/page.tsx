import HeroSection from "@/components/HeroSection";
import KpiSection from "@/components/KpiSection";
import VorteileSection from "@/components/VorteileSection";
import ProzessSection from "@/components/ProzessSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection backgroundImage="/hero-bg.png" />
      <KpiSection />
      <VorteileSection />
      <ProzessSection />
      <ContactSection />
    </main>
  );
}
