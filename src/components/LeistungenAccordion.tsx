"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const services = [
  {
    id: "draht-senkerodieren",
    title: "Draht- & Senkerodieren",
    description:
      "Auf unseren modernen Draht- und Senkerodieranlagen aus dem Hause Sodick erreichen wir beste Erodierergebnisse bei hoher Abtragsleistung, höchster Genauigkeit und Oberflächengüten bis Ra 0,1 μm preiswert und schnell.",
    details: [
      "Spannbereich Drahterosion: 970 x 700 x 350 mm",
      "Spannbereich Senkerosion: 950 x 950 x 400 mm",
      "Alle elektrisch leitfähigen Materialien",
      "Stahl, gehärteter Stahl, Buntmetalle, Hartmetalle, PKD",
    ],
    image: "/hero-bg.png",
  },
  {
    id: "werkzeugbau",
    title: "Werkzeugbau",
    description:
      "In unserem Werkzeugbau werden nach den konstruierten 3D-Daten und Zeichnungen die Werkzeuge gefertigt. Durch unseren modernen Maschinenpark sind alle Mitarbeiter in der Lage, Ihre Anforderungen flexibel zu erfüllen und auch auf besondere Kundenwünsche zu reagieren.",
    details: [
      "Fertigung nach 3D-Daten & Zeichnungen",
      "Moderner Maschinenpark",
      "Flexible Anforderungserfüllung",
      "Individuelle Kundenwünsche",
    ],
    image: "/hero-bg.png",
  },
  {
    id: "stanztechnik",
    title: "Stanztechnik",
    description:
      "Unsere Stanztechnik und Umformtechnik fertigt auf modernen Pressen kostengünstig Ihre Stanzteile in höchster Qualität von 0,3 bis 10 mm Blechstärke und Bandbreiten bis 1000 mm.",
    details: [
      "Blechstärke: 0,3 bis 10 mm",
      "Bandbreiten bis 1000 mm",
      "Aluminium, Kupfer, Stahlblech, Federbandstahl",
      "Vom Einzelteil bis zur montierten Baugruppe",
    ],
    image: "/hero-bg.png",
  },
  {
    id: "cnc-fraestechnik",
    title: "CNC-Frästechnik",
    description:
      "Wenn die Bauteile doch komplizierter werden, können Ihre Bauteile auch in unserer CNC Fräserei auf modernen 5-Achs-Maschinen realisiert werden. Diese können auch 3-D Konturen realisieren und haben eine sehr hohe Wiederholgenauigkeit.",
    details: [
      "Moderne 5-Achs-Maschinen",
      "3D-Konturen realisierbar",
      "Computergesteuert: 1 bis 10.000 Stück",
      "Konventionell: 1 bis 25 Stück",
    ],
    image: "/hero-bg.png",
  },
  {
    id: "cad-cam",
    title: "CAD / CAM",
    description:
      "Für unsere Konstruktion am Computer benutzen wir VISI, eines der führenden Konstruktions- und NC-Programmiersysteme für den Werkzeug- und Formenbau. Es bietet eine Kombination von Anwendungen mit integrierter Draht-, Flächen- und Volumenmodellierung.",
    details: [
      "VISI Konstruktionssystem",
      "2,5-Achsen, 3+2-Achsen & 5-Achsen Bearbeitung",
      "HSC-Optionen & Materialflussanalyse",
      "Folgeverbundwerkzeuge mit schrittweiser Abwicklung",
    ],
    image: "/hero-bg.png",
  },
];

export default function LeistungenAccordion() {
  const [activeItem, setActiveItem] = useState<string>(services[0].id);

  const activeService = services.find((s) => s.id === activeItem) || services[0];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Was wir bieten
          </span>
          <h2 className="font-display text-4xl lg:text-6xl text-slate-900 mt-4 mb-6 tracking-wide">
            UNSERE LEISTUNGEN
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Accordion
              type="single"
              value={activeItem}
              onValueChange={(value) => value && setActiveItem(value)}
              className="w-full"
            >
              {services.map((service, index) => (
                <AccordionItem
                  key={service.id}
                  value={service.id}
                  className="border-b border-gray-200"
                >
                  <AccordionTrigger className="py-6 text-left hover:no-underline group">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 font-semibold text-sm group-hover:bg-primary-600 group-hover:text-white transition-colors">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-xl text-slate-900 tracking-wide">
                        {service.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-gray-600 mb-4 pl-14">
                      {service.description}
                    </p>
                    <ul className="space-y-2 pl-14">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-600" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:sticky lg:top-32"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    className="object-cover"
                  />
                  {/* Overlay with title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl text-white tracking-wide">
                      {activeService.title}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <motion.a
              href="/kontakt"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-colors"
            >
              Angebot anfordern
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
