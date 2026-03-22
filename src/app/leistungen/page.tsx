import LeistungenAccordion from "@/components/LeistungenAccordion";
import MaschinenparkSection from "@/components/MaschinenparkSection";

export default function LeistungenPage() {
  return (
    <main className="min-h-screen pt-20 bg-white">
      {/* Accordion Feature Section */}
      <LeistungenAccordion />
      {/* Maschinenpark Section */}
      <MaschinenparkSection />
    </main>
  );
}
