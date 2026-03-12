"use client";

import { motion } from "framer-motion";

export default function QualitaetPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
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

      {/* Quality Standards */}
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
                {[
                  {
                    title: "ISO 9001 Zertifizierung",
                    description:
                      "Unser Qualitätsmanagementsystem ist nach ISO 9001 zertifiziert.",
                  },
                  {
                    title: "100% Eingangskontrolle",
                    description:
                      "Jedes Rohmaterial wird vor der Verarbeitung geprüft.",
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
                ].map((item, index) => (
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

      {/* Measurement Equipment */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl text-white text-center mb-16 tracking-wide"
          >
            MODERNE MESSTECHNIK
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "3D-Koordinatenmessgeräte",
                value: "±0.001mm",
                label: "Messgenauigkeit",
              },
              {
                title: "Optische Messtechnik",
                value: "100%",
                label: "Rückverfolgbarkeit",
              },
              {
                title: "Oberflächenprüfung",
                value: "Ra 0.1",
                label: "Rauheitsmessung",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-slate-800 border border-white/5 rounded-2xl"
              >
                <h3 className="text-lg text-gray-400 mb-4">{item.title}</h3>
                <div className="font-display text-5xl text-primary-500 mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-gray-500">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
