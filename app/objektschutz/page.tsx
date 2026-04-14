"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection, SlideIn } from "@/components/ui/AnimatedSection";
import { Check, ArrowRight, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function ObjektschutzPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Header */}
      <div className="bg-gradient-to-b from-white to-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center">
              Objektschutz
            </h1>
          </AnimatedSection>
        </div>
      </div>

      {/* Section 1 - Intro mit Bild rechts */}
      <section className="py-16 section-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 underline decoration-accent underline-offset-8">
                  Objektschutz
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  Sie besitzen eine Immobilie, oder Ihr Unternehmen hat eine Niederlassung welche besonderer Sicherheitsvorkehrungen bedürfen?
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Sie möchten sich nicht allein auf technische Hilfsmittel wie Kameras oder Alarmanlagen verlassen?
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/bild-10.jpg"
                  alt="Objektschutz"
                  fill
                  className="object-cover"
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Section 2 - Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/bild-11.jpg"
                  alt="Sicherheitskonzept"
                  fill
                  className="object-cover"
                />
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cesar Sicherheit sorgt dafür, dass Sie endlich wieder <strong>ruhig schlafen</strong> können und Sie sich nach Feierabend <strong>keine Gedanken</strong> mehr um die Sicherheit Ihres Objekts machen müssen.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  <strong>Wir bieten Ihnen</strong> komplette Sicherheitslösungen aus einer Hand an, von Zugangs- und Zufahrtskontrolle, über Alarmaufschaltungen, bis hin zu Gebäude und Gelände Bestreifung. Cesar Sicherheit verfügt über kompetentes und geschultes Personal, für sowohl Sicherheits- als auch Empfangsdienste in Ihrem Objekt.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Jetzt Kontaktieren
                  <ArrowRight size={18} />
                </Link>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Section 3 - Aufgabenprofil */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-primary mb-12 underline decoration-accent underline-offset-8">
              Aufgabenprofil
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            <SlideIn direction="left">
              <div>
                <p className="text-gray-700 mb-6">
                  Wir schützen ihr Objekt vor allen schädlichen Einflüssen wie z.B.:
                </p>
                <div className="space-y-3">
                  {[
                    "Einbruch",
                    "Diebstahl",
                    "Beschädigung",
                    "Feuer",
                    "Sabotage",
                    "Werkspionage",
                    "Industriespionage"
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <Shield className="text-accent flex-shrink-0" size={18} />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-700 mt-6 leading-relaxed">
                  Cesar Sicherheit bietet Ihnen effektiven Schutz durch präventives, vorrausschauendes und konsequentes Handeln.
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div>
                <p className="text-gray-700 mb-6">
                  <strong>Als Kunde von Cesar Sicherheit</strong> können sie sich auf diskreten, effektiven und professionellen Schutz zu jeder Tages- und Nachtzeit verlassen. Wir schützen für sie alle Arten von Objekten so z.B.:
                </p>
                <div className="space-y-3">
                  {[
                    "Ihr Privathaus",
                    "Ihr Firmengelände",
                    "oder sonstige Objekte und Gebäude",
                    "Baustellen Bewachung"
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <Check className="text-accent flex-shrink-0" size={18} />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Section 4 - Baustellen */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Immer wieder kommt es auf Baustellen in Deutschland zu <strong>Diebstählen</strong> wobei immer kleine oder <strong>größere Sachschäden</strong> entstehen, vermeiden Sie solche unnötigen Verluste, vertrauen Sie uns den Schutz Ihres Bauvorhabens an.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Wir weisen unsere Mitarbeiter auf jeden Auftrag individuell ein, bei uns werden keine schlechten Dienstanweisungen erteilt, wir sind immer auf alle Eventualitäten vorbereitet. Jede mögliche Schwachstelle unserer Sicherheitskonzepte wird konsequent ausgegangen und beseitigt, denn der Teufel lauert im Detail. Aber Details können wir bei Cesar Sicherheit.
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/bild-12.jpg"
                  alt="Baustellenbewachung"
                  fill
                  className="object-cover"
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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