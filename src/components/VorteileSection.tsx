"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VorteileSection() {
  return (
    <section className="relative">
      <div className="grid lg:grid-cols-2">
        {/* Linke Seite - Bild mit Text Overlay */}
        <div className="relative min-h-[500px] lg:min-h-[600px]">
          <Image
            src="/fräsen-box.jpg"
            alt="CNC Fertigung"
            fill
            className="object-cover"
          />
          {/* Dunkles Overlay */}
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        {/* Rechte Seite - Vorteile */}
        <div className="relative bg-primary-600 min-h-[500px] lg:min-h-[600px]">
          {/* Logo in der Mitte/oben */}
          <div className="absolute top-8 right-8 lg:top-12 lg:right-12">
            <div className="relative h-16 w-32 lg:h-20 lg:w-40 opacity-30">
              <Image
                src="/logo-groß.png"
                alt="Zarouali Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center h-full p-8 lg:p-12 lg:pr-24">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl lg:text-7xl text-white mb-8 tracking-wide">
                Über uns
              </h2>

              <p className="text-white/80 text-xl leading-relaxed">
                Wir sind ein junges, aufstrebendes Unternehmen, das ein vielseitiges Dienstleistungs- und Fertigungsspektrum abdeckt. Bereits seit über 20 jahren sind wir im Werkzeugbau in und um das Sauerland tätig. Nun haben wir den Schritt gewagt und uns einen eigenen Maschinenpark angelegt, mit dem wir von Draht- und Senkerodieren, über Werkzeubau, Stanztechnik und CNC Frästechnik, bishin zu Prototypenbau ein breites Spektrum an Leistungen bieten, die im Industriestandort Südwestfalen gefragt sind. Wir  bearbeiten jeden Auftrag mit größter Sorgfalt und freuen  uns über Ihre Anfragen und Produktionsanliegen.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
