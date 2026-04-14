"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, SlideIn } from "@/components/ui/AnimatedSection";
import { Shield, Building, Star, MapPin } from "lucide-react";

const SLIDES = [
  "/images/slide-1.png",
  "/images/slide-2.png",
  "/images/slide-3.png",
  "/images/slide-4.png",
  "/images/slide-5.png",
];

const testimonials = [
  {
    name: "Aziz Alshabani",
    stars: 4,
    text: "Sehr empfehlenswert!!!",
    ago: "vor 3 Jahren",
  },
  {
    name: "Gerd Kellermann",
    stars: 5,
    text: "Wenn sechs Sterne möglich wären, würde ich sie geben. Schlanke Hierarchien und ein Top-Chef, verbunden mit einem hervorragendem Team.",
    ago: "vor 3 Jahren",
  },
  {
    name: "Sascha Zielony geb. Hupfer",
    stars: 5,
    text: "Sehr guter zuvorkommender und höflicher Chef – immer wieder gerne.",
    ago: "vor 3 Jahren",
  },
  {
    name: "Anneliese Brinkmann",
    stars: 5,
    text: "Ein sehr zuverlässiger und günstiger Betrieb. Gutes Preis-Leistungsverhältnis.",
    ago: "vor 3 Jahren",
  },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [blurring, setBlurring] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Blur rein
      setBlurring(true);
      // Nach 500ms Bild wechseln und Blur wieder raus
      setTimeout(() => {
        setCurrent(c => (c + 1) % SLIDES.length);
        setBlurring(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">

      {/* ── Hero: Bildslideshow ── */}
      <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden -mt-20">
        {/* Slideshow Hintergrundbild */}
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{ filter: blurring ? 'blur(12px)' : 'blur(0px)', transform: blurring ? 'scale(1.05)' : 'scale(1)' }}
        >
          <Image
            src={SLIDES[current]}
            alt="Cesar Sicherheit"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Dunkles Vignette-Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0f1f33]/50 to-[#0a1628]/80" />

        {/* Slide-Indikatoren */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-accent w-6' : 'bg-white/50'}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow"
            >
              Bewacht und beschützt was Ihnen wichtig ist.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-200 mb-8"
            >
              Cesar Sicherheit steht für Ehrlichkeit, Zuverlässigkeit und Diskretion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Shield size={20} />
                Jetzt unverbindliches Angebot einholen
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Dienstleistungen ── */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-400 via-[#1e3a5f] to-[#0f1f33]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
              Dienstleistungen Von Cesarsicherheit
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <SlideIn direction="left" delay={0.1}>
              <Link href="/veranstaltungsschutz" className="group block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="relative h-64 image-hover">
                    <Image
                      src="/images/1.png"
                      alt="Veranstaltungsschutz"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                      <Shield className="text-accent" />
                      Veranstaltungsschutz
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Sie möchten die Sicherheit dieser Veranstaltung gewährleistet wissen und sich einfach entspannt zurücklehnen und den Abend genießen, oder sind anderweitig so eingebunden, dass sie keine Zeit mehr für die Sicherheit finden?
                    </p>
                  </div>
                </div>
              </Link>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <Link href="/objektschutz" className="group block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="relative h-64 image-hover">
                    <Image
                      src="/images/2.png"
                      alt="Objektschutz"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                      <Building className="text-accent" />
                      Objektschutz
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Sie besitzen eine Immobilie, oder Ihr Unternehmen hat eine Niederlassung welche besonderer Sicherheitsvorkehrungen bedürfen?
                    </p>
                  </div>
                </div>
              </Link>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ── Testimonials (dunkler Farbverlauf) ── */}
      <section className="py-20 bg-gradient-to-b from-gray-300 via-[#1e3a5f] to-[#0f1f33]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Das sagen unsere Kunden
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col gap-3 h-full">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm text-gray-900 truncate">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.ago}</p>
                    </div>
                    {/* Google G */}
                    <svg className="ml-auto flex-shrink-0 w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        className={j < t.stars ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{t.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Einsatzgebiete (ganz am Ende) ── */}
      <section className="py-16 bg-gradient-to-b from-[#0f1f33] to-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 underline decoration-accent underline-offset-8">
                Unsere Einsatzgebiete
              </h2>
              <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                {["Freiburg", "Lahr", "Offenburg", "Oberkirch", "Stuttgart"].map((city, index) => (
                  <motion.div
                    key={city}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-lg font-medium text-white"
                  >
                    <MapPin size={18} className="text-accent" />
                    {city}
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-b from-[#1e3a5f] to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Jetzt mehr Erfahren
            </h2>
            <p className="text-gray-200 mb-8">
              Nehmen Sie jetzt Kontakt mit Uns auf um weitere Details zu besprechen.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              KONTAKTIEREN SIE UNS
            </Link>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
