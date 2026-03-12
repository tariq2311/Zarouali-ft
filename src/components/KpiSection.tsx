"use client";

import { motion } from "framer-motion";

const kpis = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "500+", label: "Projekte" },
  { value: "99%", label: "Zufriedenheit" },
  { value: "24h", label: "Reaktionszeit" },
];

export default function KpiSection() {
  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl sm:text-5xl md:text-6xl text-primary-500 mb-2">
                {kpi.value}
              </div>
              <div className="text-sm sm:text-base text-slate-600 uppercase tracking-wider">
                {kpi.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
