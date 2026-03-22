"use client";

import { motion } from "framer-motion";

const messtechnik = [
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
];

export default function MesstechnikSection() {
  return (
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
          {messtechnik.map((item, index) => (
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
  );
}
