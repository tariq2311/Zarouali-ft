"use client";

import { motion } from "framer-motion";

export default function LeistungenPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-slate-800 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl md:text-7xl text-white mb-6 tracking-wide">
              UNSERE LEISTUNGEN
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Maßgeschneiderte Fertigungslösungen für Ihre individuellen
              Anforderungen
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CNC-Bearbeitung",
                description:
                  "Präzise CNC-Fräs- und Dreharbeiten für komplexe Bauteile mit höchster Genauigkeit.",
                icon: "⚙️",
              },
              {
                title: "Prototypenfertigung",
                description:
                  "Schnelle und kostengünstige Herstellung von Prototypen für Ihre Produktentwicklung.",
                icon: "🔧",
              },
              {
                title: "Serienfertigung",
                description:
                  "Effiziente Serienproduktion mit gleichbleibend hoher Qualität.",
                icon: "🏭",
              },
              {
                title: "Schweißtechnik",
                description:
                  "Professionelle Schweißarbeiten in verschiedenen Verfahren (MIG, MAG, WIG).",
                icon: "🔥",
              },
              {
                title: "Oberflächenbehandlung",
                description:
                  "Veredelung und Schutz Ihrer Werkstücke durch moderne Beschichtungsverfahren.",
                icon: "✨",
              },
              {
                title: "Montage",
                description:
                  "Fachgerechte Montage und Assemblierung kompletter Baugruppen.",
                icon: "🔩",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-slate-800/50 border border-white/5 rounded-2xl hover:bg-slate-800 hover:border-primary-500/30 transition-all duration-500"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-display text-2xl text-white mb-3 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
