"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection, SlideIn } from "@/components/ui/AnimatedSection";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function VeranstaltungsschutzPage() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="py-20 bg-gradient-to-b from-slate-400 via-[#1e3a5f] to-[#0f1f33]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Veranstaltungsschutz
                </h1>
                <h2 className="text-2xl font-semibold text-gray-200 mb-6 underline decoration-accent underline-offset-8">
                  Sie planen eine Veranstaltung?
                </h2>
                <p className="text-gray-200 leading-relaxed text-lg">
                  Sie möchten die Sicherheit dieser Veranstaltung gewährleistet wissen und sich
                  einfach entspannt zurücklehnen und den Abend genießen, oder sind anderweitig so
                  eingebunden, dass sie keine Zeit mehr für die Sicherheit finden?
                </p>
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.2}>
              <div className="relative h-[420px] rounded-xl overflow-hidden shadow-2xl">
                <Image src="/images/5.png" alt="Veranstaltungsplanung" fill className="object-cover" />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ── Section 2: Sorgenfrei-Paket ── */}
      <section className="py-24 bg-gradient-to-b from-[#0f1f33] via-[#1e3a5f] to-slate-400">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <div>
                <p className="text-white leading-relaxed mb-6 text-lg">
                  <strong>Gar kein Problem,</strong> denn das erledigen wir für Sie, sämtliche
                  Sachschritte von der Planung über die Organisation bis zur Durchführung werden von
                  uns übernommen.
                </p>
                <p className="text-gray-200 leading-relaxed mb-8 text-lg">
                  Wir liefern Ihnen das <strong>Sorgenfrei-Paket</strong> für Ihre
                  Großveranstaltung. Wir sorgen für reibungslose Abläufe und{" "}
                  <strong>schützen</strong> sie und Ihre Gäste diskret vor unliebsamen Besuchern
                  oder Störenfrieden.
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
            <SlideIn direction="right" delay={0.2}>
              <div className="relative h-[420px] rounded-xl overflow-hidden shadow-2xl">
                <Image src="/images/6.png" alt="Sicherheitspersonal" fill className="object-cover" />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ── Section 3: Leistungen ── */}
      <section className="py-24 bg-gradient-to-b from-slate-400 via-[#1e3a5f] to-[#0f1f33]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-12 text-center underline decoration-accent underline-offset-8">
              Unsere Leistung für Ihre Veranstaltung:
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-16">
            <SlideIn direction="left">
              <div className="space-y-4">
                {["Ordnerdienst","Einlasskontrolle","Zutritts-/Einlasskontrolle","Ticketverkauf","Veranstaltungsservice","Individueller Service","Besucherempfang","Backstageschutz","Parkdienst"].map((item, i) => (
                  <motion.div key={item} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.6 }} className="flex items-center gap-3">
                    <Check className="text-accent flex-shrink-0" size={20} />
                    <span className="text-gray-100">{item}</span>
                  </motion.div>
                ))}
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.1}>
              <div>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Unabhängig von Größe oder Art Ihrer Veranstaltung entwickeln wir professionelle
                  Sicherheitskonzepte, die höchsten Ansprüchen gerecht werden. Mit Erfahrung,
                  Sorgfalt und Durchsetzungsstärke sorgen wir für einen reibungslosen und sicheren
                  Ablauf. Nennenswerte Beispiele sind:
                </p>
                <div className="space-y-2">
                  {["Festivals","Konzerte","Sportveranstaltungen","Firmenfeiern","Aktionsversammlungen","Vereinsfeste","Parteitage","Straßenfeste","Geschäftsmeetings","Familienfeiern etc."].map((item, i) => (
                    <motion.div key={item} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.6 }} className="flex items-center gap-3">
                      <ArrowRight className="text-accent flex-shrink-0" size={16} />
                      <span className="text-gray-100">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ── Section 4: Einlasskontrollen & VIP ── */}
      <section className="py-24 bg-gradient-to-b from-[#0f1f33] via-[#1e3a5f] to-slate-400">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <SlideIn direction="left">
              <div className="space-y-8">
                <div className="relative h-[340px] rounded-xl overflow-hidden shadow-2xl">
                  <Image src="/images/7.png" alt="Einlasskontrolle" fill className="object-cover" />
                </div>
                <div className="relative h-[340px] rounded-xl overflow-hidden shadow-2xl">
                  <Image src="/images/8.jpg" alt="Backstage Schutz" fill className="object-cover" />
                </div>
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.2}>
              <div className="pt-4">
                <p className="text-gray-100 leading-relaxed mb-6 text-lg">
                  <strong className="text-white">Wir führen auf Wunsch</strong> auch gezielte Einlass- und
                  Ausweiskontrollen durch, um so die Einhaltung des{" "}
                  <strong className="text-white">Jugendschutzgesetzes</strong> auf Ihrem Event sicherzustellen.
                </p>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Wir bestreifen während Ihrer Veranstaltung sowohl Innen- als auch Außenbereiche
                  der Eventlocation und beugen so Störungen der Feierlichkeiten oder der
                  Veranstaltungsgäste vor.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  Sie richten ein Konzert aus und haben Stars engagiert, die sich im Backstage-
                  Bereich auf ihren Auftritt vorbereiten wollen, oder Sie bieten für besondere
                  Gäste einen <strong className="text-white">VIP-Bereich</strong> an? Kein Problem für Cesar Sicherheit —
                  wir bieten Ihnen selbstverständlich auch umfangreichen Backstage-Schutz und
                  gesonderte VIP-Betreuung.
                </p>
              </div>
            </SlideIn>
          </div>
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
