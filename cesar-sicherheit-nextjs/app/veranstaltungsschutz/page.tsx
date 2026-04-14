"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection, SlideIn } from "@/components/ui/AnimatedSection";
import { Check, ArrowRight } from "lucide-react";

export default function VeranstaltungsschutzPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Header */}
      <div className="bg-gradient-to-b from-white to-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center">
              Veranstaltungsschutz
            </h1>
          </AnimatedSection>
        </div>
      </div>

      {/* Section 1 - Meeting Bild */}
      <section className="py-16 section-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/bild-6.jpg"
                  alt="Veranstaltungsplanung"
                  fill
                  className="object-cover"
                />
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 underline decoration-accent underline-offset-8">
                  Sie planen eine Veranstaltung?
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Sie möchten die Sicherheit dieser Veranstaltung gewährleistet wissen und sich einfach entspannt zurücklehnen und den Abend genießen, oder sind anderweitig so eingebunden, dass sie keine Zeit mehr für die Sicherheit finden?
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Section 2 - Sorgenfrei Paket */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  <strong>Gar kein Problem,</strong> denn das erledigen wir für Sie, sämtliche Sachschritte von der Planung über die Organisation bis zur Durchführung werden von uns übernommen.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  Wir liefern Ihnen das <strong>Sorgenfrei-Paket</strong> für Ihre Großveranstaltung. Wir sorgen für reibungslose Abläufe und <strong>schützen</strong> sie und Ihre Gäste diskret vor unliebsamen Besuchern oder Störenfrieden.
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
              <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/bild-7.jpg"
                  alt="Sicherheitspersonal"
                  fill
                  className="object-cover"
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Section 3 - Leistungen */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-primary mb-12 text-center underline decoration-accent underline-offset-8">
              Unsere Leistung für Ihre Veranstaltung:
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            <SlideIn direction="left">
              <div className="space-y-4">
                {[
                  "Ordnerdienst",
                  "Einlasskontrolle",
                  "Zutritts-/Einlasskontrolle",
                  "Ticketverkauf",
                  "Veranstaltungsservice",
                  "Individueller Service",
                  "Besucherempfang",
                  "Backstageschutz",
                  "Parkdienst"
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <Check className="text-accent flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Unabhängig von Größe oder Art Ihrer Veranstaltung entwickeln wir professionelle Sicherheitskonzepte, die höchsten Ansprüchen gerecht werden. Mit Erfahrung, Sorgfalt und Durchsetzungsstärke sorgen wir für einen reibungslosen und sicheren Ablauf nennenswerte Beispiele sind:
                </p>
                <div className="space-y-2">
                  {[
                    "Festivals",
                    "Konzerte",
                    "Sportveranstaltungen",
                    "Firmenfeiern",
                    "Aktionsversammlungen",
                    "Vereinsfeste",
                    "Parteitage",
                    "Straßenfeste",
                    "Geschäftsmeetings",
                    "Familienfeiern etc."
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <ArrowRight className="text-accent flex-shrink-0" size={16} />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Section 4 - Einlasskontrollen & VIP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <SlideIn direction="left">
              <div className="space-y-6">
                <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/bild-8.jpg"
                    alt="Einlasskontrolle"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/bild-9.jpg"
                    alt="Backstage Schutz"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Wir führen auf Wunsch</strong> auch gezielte Einlass und Ausweiskontrollen durch, um so die Einhaltung des <strong>Jugendschutzgesetzes</strong> auf Ihrem Event sicherzustellen.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Wir bestreifen während Ihrer Veranstaltung sowohl Innen- als auch Außenbereiche der Eventlocation und beugen so Störungen der Feierlichkeiten oder der Veranstaltungsgäste vor. Auch im Umfeld Ihres Veranstaltungsortes sorgen wir für störungsfreie Abläufe, sicheren Parkplätze und gewährleisten eine sichere Abreise Ihrer Gäste nach Ende Ihrer Veranstaltung.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Sie richten ein Konzert aus und haben Stars engagiert, die sich in Backstage Bereich auf ihren Auftritt vorbereiten wollen, oder sie bieten für besondere Gäste einen <strong>VIP Bereich</strong> an, in dem diese ungestört feiern wollen? Kein Problem für Cesar Sicherheit, denn wir bieten Ihnen selbstverständlich auch einen umfangreichen Backstage Schutz und eine gesonderte VIP Betreuung für Ihre besonderen Ehrengäste.
                </p>
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