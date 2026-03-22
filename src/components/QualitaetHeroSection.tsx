"use client";

import { motion } from "framer-motion";

export default function QualitaetHeroSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-display text-5xl md:text-7xl text-white mb-6 tracking-wide">
            QUALITÄTSKONTROLLE
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Höchste Standards und lückenlose Qualitätssicherung in jedem
            Fertigungsschritt
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
    </section>
  );
}
