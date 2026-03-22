"use client";

import { motion } from "framer-motion";

const standards = [
  {
    title: "ISO 9001 Zertifizierung",
    description:
      "Unser Qualitätsmanagementsystem ist nach ISO 9001 zertifiziert.",
  },
  {
    title: "100% Eingangskontrolle",
    description: "Jedes Rohmaterial wird vor der Verarbeitung geprüft.",
  },
  {
    title: "Prozessbegleitende Prüfung",
    description:
      "Kontinuierliche Kontrolle während des gesamten Fertigungsprozesses.",
  },
  {
    title: "Endkontrolle & Dokumentation",
    description:
      "Vollständige Dokumentation und Prüfprotokolle für jedes Bauteil.",
  },
];

export default function QualitaetStandardsSection() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl text-white mb-8 tracking-wide">
              UNSERE QUALITÄTSSTANDARDS
            </h2>

            <div className="space-y-6">
              {standards.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary-500 rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary-600/20 to-slate-800/50 rounded-3xl border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <div className="font-display text-8xl text-primary-500">
                  99.9%
                </div>
                <div className="text-xl text-gray-400 mt-4">
                  Kundenzufriedenheit
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-600/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
