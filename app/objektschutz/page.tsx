"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection, SlideIn } from "@/components/ui/AnimatedSection";
import { Check, ArrowRight, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function ObjektschutzPage() {
  return (
    <div className="min-h-screen">

      {/* ── Hero: Text LEFT, Bild RIGHT ── */}
      <section className="py-20 bg-gradient-to-b from-slate-400 via-[#1e3a5f] to-[#0f1f33]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 underline decoration-accent underline-offset-8">
                  Objektschutz
                </h1>
                <p className="text-gray-200 leading-relaxed mb-4 text-lg">
                  Sie besitzen eine Immobilie, oder Ihr Unternehmen hat eine Niederlassung welche
                  besonderer Sicherheitsvorkehrungen bedürfen?
                </p>
                <p className="text-gray-200 leading-relaxed text-lg">
                  Sie möchten sich nicht allein auf technische Hilfsmittel wie Kameras oder
                  Alarmanlagen verlassen?
                </p>
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.2} duration={0.55}>
              <div className="relative h-[420px] rounded-xl overflow-hidden shadow-2xl">
                <Image src="/images/9.png" alt="Objektschutz" fill className="object-cover" />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ── Section 2: Ruhig schlafen — Bild links (60%), Text rechts ── */}
      <section className="py-24 bg-gradient-to-b from-[#0f1f33] via-[#1e3a5f] to-slate-400">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <SlideIn direction="left" duration={0.55} className="md:col-span-3">
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <Image src="/images/10.png" alt="Sicherheitskonzept" fill className="object-cover" />
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.2} className="md:col-span-2">
              <div>
                <p className="text-white leading-relaxed mb-6 text-lg">
                  Cesar Sicherheit sorgt dafür, dass Sie endlich wieder{" "}
                  <strong className="underline">ruhig schlafen</strong> können und Sie sich nach
                  Feierabend <strong className="underline">keine Gedanken</strong> mehr um die
                  Sicherheit Ihres Objekts machen müssen.
                </p>
                <p className="text-gray-200 leading-relaxed mb-8">
                  <strong>Wir bieten Ihnen</strong> komplette Sicherheitslösungen aus einer Hand an,
                  von Zugangs- und Zufahrtskontrolle, über Alarmaufschaltungen, bis hin zu Gebäude
                  und Gelände Bestreifung. Cesar Sicherheit verfügt über kompetentes und geschultes
                  Personal, für sowohl Sicherheits- als auch Empfangsdienste in Ihrem Objekt.
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

      {/* ── Section 3: Aufgabenprofil ── */}
      <section className="py-24 bg-gradient-to-b from-slate-400 via-[#1e3a5f] to-[#0f1f33]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-12 underline decoration-accent underline-offset-8">
              Aufgabenprofil
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-16">
            <SlideIn direction="left">
              <div>
                <p className="text-gray-200 mb-6">
                  Wir schützen ihr Objekt vor allen schädlichen Einflüssen wie z.B.:
                </p>
                <div className="space-y-3">
                  {["Einbruch","Diebstahl","Beschädigung","Feuer","Sabotage","Werkspionage","Industriespionage"].map((item, i) => (
                    <motion.div key={item} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.6 }} className="flex items-center gap-3">
                      <Shield className="text-accent flex-shrink-0" size={18} />
                      <span className="text-gray-100">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-200 mt-6 leading-relaxed">
                  Cesar Sicherheit bietet Ihnen effektiven Schutz durch präventives,
                  vorausschauendes und konsequentes Handeln.
                </p>
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.1}>
              <div>
                <p className="text-gray-200 mb-6">
                  <strong className="text-white">Als Kunde von Cesar Sicherheit</strong> können sie sich auf diskreten,
                  effektiven und professionellen Schutz zu jeder Tages- und Nachtzeit verlassen.
                  Wir schützen für sie alle Arten von Objekten so z.B.:
                </p>
                <div className="space-y-3">
                  {["Ihr Privathaus","Ihr Firmengelände","oder sonstige Objekte und Gebäude","Baustellen Bewachung"].map((item, i) => (
                    <motion.div key={item} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.6 }} className="flex items-center gap-3">
                      <Check className="text-accent flex-shrink-0" size={18} />
                      <span className="text-gray-100">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ── Section 4: Baustellen ── */}
      <section className="py-24 bg-gradient-to-b from-[#0f1f33] via-[#1e3a5f] to-slate-400">
        <div className="max-w-6xl mx-auto px-6">
          <SlideIn direction="left">
            <div>
              <p className="text-gray-100 leading-relaxed mb-6 text-lg">
                Immer wieder kommt es auf Baustellen in Deutschland zu{" "}
                <strong className="text-white">Diebstählen</strong> wobei immer kleine oder{" "}
                <strong className="text-white">größere Sachschäden</strong> entstehen, vermeiden Sie solche unnötigen
                Verluste, vertrauen Sie uns den Schutz Ihres Bauvorhabens an.
              </p>
              <p className="text-gray-200 leading-relaxed">
                Wir weisen unsere Mitarbeiter auf jeden Auftrag individuell ein, bei uns werden
                keine schlechten Dienstanweisungen erteilt, wir sind immer auf alle
                Eventualitäten vorbereitet. Jede mögliche Schwachstelle unserer
                Sicherheitskonzepte wird konsequent ausgegangen und beseitigt, denn der Teufel
                lauert im Detail. Aber Details können wir bei Cesar Sicherheit.
              </p>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gradient-to-b from-slate-400 via-[#1e3a5f] to-[#0f1f33]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-4">Jetzt mehr Erfahren</h2>
            <p className="text-gray-200 mb-8">
              Nehmen Sie jetzt Kontakt mit Uns auf um weitere Details zu besprechen.
            </p>
            <Link href="/kontakt" className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
              KONTAKTIEREN SIE UNS
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
