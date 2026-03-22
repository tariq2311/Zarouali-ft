"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const messgeraete = [
  {
    title: "Mitutoyo Profil- & Messprojektor PJ3000",
    specs: [],
  },
  {
    title: "Vision Kestrel Dynascope Messmikroskop",
    specs: [],
  },
  {
    title: "Brown & Sharpe Etalon Derby 454",
    specs: ["x-Weg 450mm", "y-Weg 500mm", "z-Weg 400mm"],
  },
];

// Dummy-Bilder für den Slider (Platzhalter)
const sliderImages = [
  { id: 1, color: "from-primary-600 to-primary-800", label: "Messgerät 1" },
  { id: 2, color: "from-slate-600 to-slate-800", label: "Messgerät 2" },
  { id: 3, color: "from-primary-700 to-slate-700", label: "Messgerät 3" },
];

export default function QualitaetSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

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
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
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
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Linke Seite - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mb-4 tracking-wide">
              Unsere QS
            </h2>

            <div className="w-20 h-1 bg-primary-500 mb-8" />

            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Um unsere Fertigungsprozesse auf einem konstant hohem Niveau zu halten,
              werden die geplanten und systematischen Tätigkeiten zur Erfüllung der
              Qualitätsanforderungen ständig kontrolliert und weiter entwickelt.
              Dabei kommen derzeit zum Einsatz:
            </p>

            {/* Messgeräte Liste */}
            <div className="space-y-6">
              {messgeraete.map((geraet, index) => (
                <motion.div
                  key={geraet.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-3 h-3 bg-primary-500 mt-2" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">
                      {geraet.title}
                    </h3>
                    {geraet.specs.length > 0 && (
                      <ul className="mt-2 space-y-1">
                        {geraet.specs.map((spec) => (
                          <li key={spec} className="text-slate-500 text-sm pl-4">
                            – {spec}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Rechte Seite - Bild Slider */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden">
              {/* Slider Container */}
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
                      <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-lg opacity-70">{sliderImages[currentSlide].label}</p>
                    <p className="text-sm opacity-50 mt-2">Bild hier einfügen</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
              >
                <ChevronLeft className="w-5 h-5 text-slate-700" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
              >
                <ChevronRight className="w-5 h-5 text-slate-700" />
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
                    className={`w-2 h-2 rounded-full transition-all ${index === currentSlide
                      ? "bg-white w-6"
                      : "bg-white/50 hover:bg-white/70"
                      }`}
                  />
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
