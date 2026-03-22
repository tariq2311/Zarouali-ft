"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

// Maschinenpark Daten
const maschinenKategorien = [
  {
    title: "Drahterosion",
    maschinen: [
      "1x Sodick AQ 325 L",
      "1x Sodick AQ 750 L",
      "1x Sodick AQ 537 L",
      "1x Fanuc Alpha 0iB",
    ],
  },
  {
    title: "Senkerosion",
    maschinen: [
      "1x MAHO HS 300W",
      "1x Kasto Bügelsäge",
      "1x Mossner Rekord SM 400 Bandsäge",
      "2x Stichelschleifmaschinen",
    ],
  },
  {
    title: "Werkzeugbau",
    maschinen: [
      "2x Alzmetall Bohrmaschinen",
      "2x Deckel FP1",
      "2x Mikron WF 2SA",
    ],
  },
  {
    title: "Fräsmaschinen",
    maschinen: ["1x Deckel DMU 50T", "1x Voest"],
  },
  {
    title: "Drehmaschinen",
    maschinen: ["1x Weiler Primus"],
  },
  {
    title: "Schleifmaschinen",
    maschinen: ["1x Jung J5 25F", "1x Jung JF520P", "1x ELB Optimal 6375 ND"],
  },
  {
    title: "Sandstrahlkabinen",
    maschinen: ["Peenmatic Micro 50S", "Normfinish"],
  },
  {
    title: "Stanzmaschinen",
    maschinen: [
      "2x Bihler RM 40",
      "1x Bihler RM30",
      "4x Schön Hydraulikpressen von 7-25t",
    ],
  },
  {
    title: "Qualitätssicherung",
    maschinen: [
      "Messmaschine Brown & Sharpe Etalon Derby 454",
      "Mitutoyo Profil- & Messprojektor PJ3000",
      "Vision Kestrel Dynascope Messmikroskop",
    ],
  },
];

// Dummy-Bilder für den Slider
const sliderImages = [
  { id: 1, color: "from-slate-700 to-slate-900", label: "CNC Fräsmaschine" },
  { id: 2, color: "from-primary-700 to-primary-900", label: "Drahterosion" },
  { id: 3, color: "from-slate-600 to-slate-800", label: "Werkzeugbau" },
  { id: 4, color: "from-primary-600 to-slate-800", label: "Schleifmaschine" },
];

export default function MaschinenparkSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [openAccordions, setOpenAccordions] = useState<number[]>([0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };

  const toggleAccordion = (index: number) => {
    setOpenAccordions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl lg:text-5xl text-white mb-4 tracking-wide">
            UNSER MASCHINENPARK
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Modernste Fertigungstechnik für höchste Präzision und Qualität
          </p>
        </motion.div>

        {/* Bild Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-16"
        >
          <div className="relative aspect-[21/9] bg-slate-800 rounded-2xl overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className={`absolute inset-0 bg-gradient-to-br ${sliderImages[currentSlide].color} flex items-center justify-center`}
              >
                <div className="text-center text-white">
                  <div className="text-6xl mb-4 opacity-50">
                    <svg
                      className="w-24 h-24 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-2xl font-medium opacity-90">
                    {sliderImages[currentSlide].label}
                  </p>
                  <p className="text-sm opacity-50 mt-2">Bild hier einfügen</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:scale-105"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:scale-105"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentSlide ? 1 : -1);
                    setCurrentSlide(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? "bg-white w-8"
                      : "bg-white/40 w-2 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Accordion Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {maschinenKategorien.map((kategorie, index) => (
            <motion.div
              key={kategorie.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="bg-slate-900/50 border border-white/10 rounded-xl overflow-hidden">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span className="font-semibold text-white">
                      {kategorie.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">
                      {kategorie.maschinen.length}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        openAccordions.includes(index) ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence>
                  {openAccordions.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 pt-1 border-t border-white/5">
                        <ul className="space-y-2">
                          {kategorie.maschinen.map((maschine, mIndex) => (
                            <motion.li
                              key={mIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: mIndex * 0.05 }}
                              className="flex items-start gap-2 text-gray-400 text-sm"
                            >
                              <span className="text-primary-500 mt-1">•</span>
                              <span>{maschine}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
