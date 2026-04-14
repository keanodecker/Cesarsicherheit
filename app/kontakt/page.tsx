"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatedSection, SlideIn } from "@/components/ui/AnimatedSection";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefon: "",
    nachricht: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier später die Formular-Logik implementieren
    console.log("Formular gesendet:", formData);
    alert("Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei Ihnen melden.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-white to-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center">
              Kontakt
            </h1>
          </AnimatedSection>
        </div>
      </div>

      {/* Kontakt Section */}
      <section className="py-16 section-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Map & Contact Info */}
            <SlideIn direction="left">
              <div className="space-y-8">
                {/* Google Maps */}
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.527886794567!2d7.8685!3d48.3406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796b3c3d0d6e4c7%3A0x8c3e5e5e5e5e5e5e!2sDoler%20Pl.%203%2C%2077933%20Lahr!5e0!3m2!1sde!2sde!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>

                {/* Contact Details */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-primary mb-4">Kontaktdaten</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone className="text-accent" size={20} />
                      <span>(+49) 7821/502 09 62</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone className="text-accent" size={20} />
                      <span>+49 (0) 174 9804514</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Mail className="text-accent" size={20} />
                      <span>kontakt@cesarsicherheit.de</span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-700">
                      <MapPin className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span>Doler Pl. 3, 77933 Lahr</span>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>

            {/* Right Side - Contact Form */}
            <SlideIn direction="right" delay={0.2}>
              <div className="bg-gray-100 p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center underline decoration-accent underline-offset-8">
                  Hier Kontaktieren Sie uns
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Christian Bäcker"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="kontakt@christianbaecker.de"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>

                  {/* Telefon Field */}
                  <div>
                    <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleChange}
                      placeholder="optional"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>

                  {/* Nachricht Field */}
                  <div>
                    <label htmlFor="nachricht" className="block text-sm font-medium text-gray-700 mb-2">
                      Nachricht <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="nachricht"
                      name="nachricht"
                      value={formData.nachricht}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Hinterlassen Sie uns eine Nachricht"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Abschicken
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