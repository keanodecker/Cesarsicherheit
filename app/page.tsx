"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection, SlideIn } from "@/components/ui/AnimatedSection";
import { Shield, Building, Star, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bild-1.jpg"
            alt="Sicherheitsteam"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/70 to-primary/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
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
      </section>

      {/* Dienstleistungen Section */}
      <section className="py-20 px-4 section-gradient">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
              Dienstleistungen Von Cesarsicherheit
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Veranstaltungsschutz Card */}
            <SlideIn direction="left" delay={0.1}>
              <Link href="/veranstaltungsschutz" className="group block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="relative h-64 image-hover">
                    <Image
                      src="/images/bild-2.jpg"
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

            {/* Objektschutz Card */}
            <SlideIn direction="right" delay={0.2}>
              <Link href="/objektschutz" className="group block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="relative h-64 image-hover">
                    <Image
                      src="/images/bild-3.jpg"
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

      {/* Einsatzgebiete */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 underline decoration-accent underline-offset-8">
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
                    className="flex items-center gap-2 text-lg font-medium text-primary"
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

      {/* Testimonials Preview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Das sagen unsere Kunden
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={20} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Hervorragender Service, sehr professionell und zuverlässig. Das Team war stets freundlich und hat unsere Veranstaltung perfekt gesichert."
                  </p>
                  <p className="font-semibold text-primary">- Max Mustermann</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Jetzt mehr Erfahren
            </h2>
            <p className="text-gray-600 mb-8">
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