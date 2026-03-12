"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface HeroSectionProps {
  backgroundImage?: string;
}

export default function HeroSection({ backgroundImage }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Hintergrundbild Container */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : "linear-gradient(135deg, #1a1a1a 0%, #373838 50%, #2a2b2b 100%)",
        }}
      >
        {/* Dunkles Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Decorative Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          <span className="text-sm tracking-wider uppercase">
            Nottebohmstrasse 53,58511 Lüdenscheid
          </span>
        </motion.div>

        {/* Animierte Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 tracking-wider"
        >
          Herzlich Willkommen bei{" "}
          <br />
          <span className="text-primary-500">A. Zarouali </span>
          {" "}Fertigungstechnik
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-sans text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Ihr Partner für hochwertige Fertigungstechnik. Wir realisieren Ihre
          Ideen mit modernster Technologie und höchster Präzision.
        </motion.p>
      </div>

      {/* Scroll-Indikator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div className="w-1.5 h-3 bg-white/70 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
