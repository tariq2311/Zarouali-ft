"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// WICHTIG: Ersetze diese ID mit deiner eigenen Formspree Form ID
// Erstelle ein Formular auf https://formspree.io und kopiere die ID
const FORMSPREE_ID = "xyzvoorbeeld"; // z.B. "xwkgjqpn"

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    quantity: "",
    deadline: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          quantity: formData.quantity,
          deadline: formData.deadline,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          quantity: "",
          deadline: "",
          message: "",
        });
      } else {
        throw new Error("Formular konnte nicht gesendet werden");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Es gab einen Fehler beim Senden. Bitte versuchen Sie es erneut.");
    }
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl md:text-7xl text-white mb-6 tracking-wide">
              KONTAKT
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Fertigungsprojekte realisieren
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl text-white mb-8 tracking-wide">
                SPRECHEN SIE UNS AN
              </h2>

              <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                Haben Sie Fragen zu unseren Leistungen oder möchten Sie ein
                unverbindliches Angebot? Wir freuen uns auf Ihre Anfrage.
              </p>

              <div className="space-y-8">
                {[
                  {
                    label: "Adresse",
                    value: "Musterstraße 123\n12345 Musterstadt",
                    icon: "📍",
                  },
                  {
                    label: "Telefon",
                    value: "+49 (0) 123 456789",
                    icon: "📞",
                  },
                  {
                    label: "E-Mail",
                    value: "info@zarouali-ft.de",
                    icon: "✉️",
                  },
                  {
                    label: "Öffnungszeiten",
                    value: "Mo - Fr: 07:00 - 17:00 Uhr",
                    icon: "🕐",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">
                        {item.label}
                      </div>
                      <div className="text-white whitespace-pre-line">
                        {item.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-slate-800/50 border border-green-500/30 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-white mb-4 tracking-wide">
                    ANFRAGE GESENDET
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Vielen Dank für Ihre Anfrage! Wir werden uns schnellstmöglich bei Ihnen melden.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                  >
                    Neue Anfrage senden
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-slate-800/50 border border-white/5 rounded-2xl p-8"
                >
                  <h3 className="font-display text-2xl text-white mb-8 tracking-wide">
                    ANFRAGE SENDEN
                  </h3>

                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="+49 123 456789"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Unternehmen
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="Firma GmbH"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="mb-6">
                    <label className="block text-sm text-gray-400 mb-2">
                      Gewünschte Leistung
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="cnc-fraesen">CNC-Fräsen</option>
                      <option value="drahterodieren">Drahterodieren</option>
                      <option value="senkerodieren">Senkerodieren</option>
                      <option value="werkzeugbau">Werkzeugbau</option>
                      <option value="stanztechnik">Stanztechnik</option>
                      <option value="prototypenbau">Prototypenbau</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  {/* Quantity & Deadline */}
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Stückzahl / Menge
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={(e) =>
                          setFormData({ ...formData, quantity: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="z.B. 100 Stück"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Gewünschter Liefertermin
                      </label>
                      <input
                        type="text"
                        name="deadline"
                        value={formData.deadline}
                        onChange={(e) =>
                          setFormData({ ...formData, deadline: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="z.B. KW 20 oder 15.05.2026"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-sm text-gray-400 mb-2">
                      Projektbeschreibung *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                      placeholder="Beschreiben Sie Ihr Projekt, benötigte Materialien, Toleranzen oder sonstige Anforderungen..."
                    />
                  </div>

                  {/* Error Message */}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
                    >
                      {errorMessage}
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                    whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                    className={`w-full py-4 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                      status === "loading"
                        ? "bg-primary-600/50 cursor-not-allowed"
                        : "bg-primary-600 hover:bg-primary-500"
                    } text-white`}
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        Anfrage absenden
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </motion.button>

                  {/* Privacy Note */}
                  <p className="mt-4 text-xs text-gray-500 text-center">
                    Mit dem Absenden stimmen Sie unserer{" "}
                    <a href="/datenschutz" className="text-primary-400 hover:underline">
                      Datenschutzerklärung
                    </a>{" "}
                    zu.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
