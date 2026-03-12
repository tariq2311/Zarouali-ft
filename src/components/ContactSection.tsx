"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// WICHTIG: Ersetze diese ID mit deiner eigenen Formspree Form ID
const FORMSPREE_ID = "xyzvoorbeeld";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        throw new Error();
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              Kontakt aufnehmen
            </span>
            <h2 className="font-display text-4xl lg:text-6xl text-white mt-4 mb-6 tracking-wide">
              Lassen Sie uns über Ihr Projekt sprechen
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Sie haben ein Fertigungsprojekt oder benötigen ein Angebot?
              Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Telefon / Mobil</p>
                  <p className="text-white">+49 (0) 2351 / 6777 535 / +49(0)170/327 51 28</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">E-Mail</p>
                  <p className="text-white">info@zarouali-ft.de</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {status === "success" ? (
              <div className="bg-slate-800/50 border border-green-500/30 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-white mb-4">Nachricht gesendet!</h3>
                <p className="text-gray-400 mb-6">Wir melden uns schnellstmöglich bei Ihnen.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                >
                  Neue Nachricht
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Ihr Name *"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="E-Mail *"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Telefon"
                  />
                </div>

                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none mb-4"
                  placeholder="Ihre Nachricht *"
                />

                {status === "error" && (
                  <p className="text-red-400 text-sm mb-4">
                    Fehler beim Senden. Bitte versuchen Sie es erneut.
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                  whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                  className={`w-full py-4 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${status === "loading"
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
                      Nachricht senden
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
