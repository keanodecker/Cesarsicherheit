"use client";

import { useState } from "react";
import { SlideIn } from "@/components/ui/AnimatedSection";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function KontaktPage() {
  const [formData, setFormData] = useState({ name: "", email: "", telefon: "", nachricht: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", telefon: "", nachricht: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">

      {/* ── Gradient Main Section ── */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-400 via-[#1e3a5f] to-[#0f1f33]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* ── LEFT: Heading + Map + Contact Info ── */}
            <SlideIn direction="left">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">
                  KONTAKT
                </h1>

                {/* Google Maps */}
                <div className="rounded-xl overflow-hidden shadow-xl h-[260px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.5!2d7.8685!3d48.3406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796b3c3d0d6e4c7%3A0x1!2sDoler+Pl.+3%2C+77933+Lahr!5e0!3m2!1sde!2sde!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Contact Details */}
                <div className="space-y-3 text-white">
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-accent flex-shrink-0" />
                    <span>(+49) 7821 / 502 09 62</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-accent flex-shrink-0" />
                    <span>+49 (0) 174 9804514</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-accent flex-shrink-0" />
                    <span>kontakt@cesarsicherheit.de</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>Doler Pl. 3, 77933 Lahr</span>
                  </div>
                </div>
              </div>
            </SlideIn>

            {/* ── RIGHT: Contact Form Card ── */}
            <SlideIn direction="right" delay={0.2}>
              <div className="bg-gray-200/90 backdrop-blur-sm border-2 border-accent rounded-2xl p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-primary mb-8 text-center underline decoration-accent underline-offset-8">
                  Hier Kontaktieren Sie uns
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text" id="name" name="name"
                      value={formData.name} onChange={handleChange} required
                      placeholder="Christian Bäcker"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange} required
                      placeholder="~ kontakt@christianbaecker.de"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon
                    </label>
                    <input
                      type="tel" id="telefon" name="telefon"
                      value={formData.telefon} onChange={handleChange}
                      placeholder="optional"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="nachricht" className="block text-sm font-medium text-gray-700 mb-1">
                      Nachricht <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="nachricht" name="nachricht"
                      value={formData.nachricht} onChange={handleChange} required
                      rows={5} placeholder="Hinterlassen Sie uns eine Nachricht"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
                    />
                  </div>

                  {status === "success" && (
                    <div className="text-green-700 bg-green-100 border border-green-300 rounded-lg px-4 py-3 text-center font-medium">
                      Vielen Dank! Ihre Nachricht wurde gesendet. Wir melden uns schnellstmöglich.
                    </div>
                  )}
                  {status === "error" && (
                    <div className="text-red-700 bg-red-100 border border-red-300 rounded-lg px-4 py-3 text-center font-medium">
                      Fehler beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns an.
                    </div>
                  )}
                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                    whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                    className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Wird gesendet..." : "Abschicken"}
                  </motion.button>
                </form>
              </div>
            </SlideIn>

          </div>
        </div>
      </section>
    </div>
  );
}
