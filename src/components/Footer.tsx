"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { label: "Startseite", href: "/" },
      { label: "Leistungen", href: "/leistungen" },
      { label: "Qualitätskontrolle", href: "/qualitaet" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Leistungen",
    links: [
      { label: "CNC-Fräsen", href: "/leistungen" },
      { label: "Drahterodieren", href: "/leistungen" },
      { label: "Senkerodieren", href: "/leistungen" },
      { label: "Werkzeugbau", href: "/leistungen" },
    ],
  },
];

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    text: "Nottebohmstrasse 53, 58511 Lüdenscheid",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    text: "info@zarouali-ft.de",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    text: "Mobil: +49 (0) 123 456789",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="" />
      </svg>
    ),
    text: "Fax:+49(0)2351/6777 537",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="" />
      </svg>
    ),
    text: "Tel: +49(0)2351/6777 535",
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6">
              <div className="relative h-12 w-40">
                <Image
                  src="/logo-inkl-text.png"
                  alt="Zarouali Fertigungstechnik Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Ihr Partner für hochwertige Fertigungstechnik im Sauerland.
              Präzision, Qualität und Zuverlässigkeit seit über 20 Jahren.
            </p>
          </motion.div>

          {/* Navigation Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (sectionIndex + 1) * 0.1 }}
            >
              <h3 className="font-display text-lg text-white mb-6 tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-primary-500 group-hover:w-3 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-lg text-white mb-6 tracking-wide">
              Kontakt
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary-500 mt-0.5">{item.icon}</span>
                  <span className="text-gray-400 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}

          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} A. Zarouali Fertigungstechnik. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <Link href="/impressum" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
