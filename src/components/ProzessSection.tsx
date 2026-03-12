"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const leftAttributes = [
  {
    title: "Kompetent",
    description:
      "Mit über 20 Jahren Erfahrung im Werkzeugbau bieten wir fundiertes Fachwissen und höchste Expertise in allen Fertigungsbereichen.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Flexibel",
    description:
      "Wir passen uns Ihren individuellen Anforderungen an – von Einzelteilen bis zur Kleinserie, von Standardlösungen bis zu Sonderanfertigungen.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

const rightAttributes = [
  {
    title: "Termingetreu",
    description:
      "Zuverlässigkeit ist unser Versprechen. Wir halten vereinbarte Liefertermine ein und sorgen für reibungslose Abläufe in Ihrer Produktion.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Präzise",
    description:
      "Höchste Genauigkeit in jedem Arbeitsschritt. Moderne Messtechnik und qualifizierte Fachkräfte garantieren perfekte Ergebnisse.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function ProzessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 items-center">
          {/* Linke Spalte */}
          <div className="space-y-16">
            {leftAttributes.map((attr, index) => (
              <motion.div
                key={attr.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                  {attr.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl text-slate-900 mb-2 tracking-wide">
                    {attr.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {attr.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mitte - Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-first lg:order-none"
          >
            <motion.div
              className="relative w-64 h-64 lg:w-80 lg:h-80 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Äußerer Ring mit Rotation bei Hover */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-slate-200 group-hover:border-primary-300 transition-colors duration-500"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />

              {/* Zweiter Ring - gegenläufige Rotation */}
              <motion.div
                className="absolute inset-2 rounded-full border-2 border-dashed border-slate-300/50 group-hover:border-primary-400/50 transition-colors duration-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Innerer Kreis mit Logo und Glow-Effekt */}
              <motion.div
                className="absolute inset-4 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 shadow-xl flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-primary-500/20 transition-shadow duration-500"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative w-32 h-32 lg:w-40 lg:h-40"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/logo-groß.png"
                    alt="Zarouali Logo"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>

              {/* Decorative dots mit Puls-Animation */}
              <motion.div
                className="absolute top-1/2 -left-2 w-4 h-4 bg-primary-500 rounded-full -translate-y-1/2"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/2 -right-2 w-4 h-4 bg-primary-500 rounded-full -translate-y-1/2"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />

              {/* Zusätzliche Dots oben und unten */}
              <motion.div
                className="absolute -top-2 left-1/2 w-3 h-3 bg-primary-400 rounded-full -translate-x-1/2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.div
                className="absolute -bottom-2 left-1/2 w-3 h-3 bg-primary-400 rounded-full -translate-x-1/2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              />
            </motion.div>
          </motion.div>

          {/* Rechte Spalte */}
          <div className="space-y-16">
            {rightAttributes.map((attr, index) => (
              <motion.div
                key={attr.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                  {attr.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl text-slate-900 mb-2 tracking-wide">
                    {attr.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {attr.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
