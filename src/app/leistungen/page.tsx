"use client";

import { motion } from "framer-motion";
import LeistungenAccordion from "@/components/LeistungenAccordion";

export default function LeistungenPage() {
  return (
    <main className="min-h-screen pt-20 bg-white">
      {/* Accordion Feature Section */}
      <LeistungenAccordion />
    </main>
  );
}
