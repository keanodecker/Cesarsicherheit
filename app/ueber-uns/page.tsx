"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection, SlideIn } from "@/components/ui/AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Users, ThumbsUp } from "lucide-react";

// Animated Counter Component
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-white to-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center">
              Über Uns
            </h1>
          </AnimatedSection>
        </div>
      </div>

      {/* Geschäftsführer Section */}
      <section className="py-16 section-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/bild-4.jpg"
                  alt="Geschäftsführer"
                  fill
                  className="object-cover"
                />
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 underline decoration-accent underline-offset-8">
                  Geschäftsführer
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Sezer Ülker war 7 Jahre lang für den Sicherheitsdienst des Europarks und in verschiedenen anderen Betrieben als <strong>Bereichsleiter</strong> tätig. Bei der Durchführung diverser Großprojekte, sowie im Arbeitsalltag im größten Freizeitpark Deutschlands, sammelte er die nötige Erfahrung in den verschiedenen Arbeitsbereichen und Aufgabengebieten der Sicherheitsbranche. Sezer Ülker hat, wie jeder seiner Mitarbeiter, eine <strong>umfangreiche und kompetente Aus- und Weiterbildung</strong> genossen.
                </p>
                <p className="text-gray-700 mb-4 font-semibold">Bestandteile dieser Ausbildung sind folgende Qualifikationen:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Sicherheitsinspektor (SIKU)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Training im Umgang mit Konflikten (TuK)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Training in Eingriffs- und Sicherheitstechniken (SEK)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Sicherheitsmanagement bei Event- und Großveranstaltungen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Jährliches Fahrsicherheitstraining</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Trainer für Selbstverteidigungstechniken</span>
                  </li>
                </ul>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Unser Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 underline decoration-accent underline-offset-8">
                  Unser Team
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Jeder unserer 80 Mitarbeiter ist höchst kompetent und hat Erfahrungen in der Sicherheitsbranche, durch <strong>regelmäßige Fort- und Weiterbildungsmaßnahmen</strong> stellen wir sicher, dass wir stets auf dem neusten Stand sind. Unsere Mitarbeiter erhalten Fortbildungen im Bereich Selbstverteidigungs-, Sicherheitstechniken und absolvieren Fahrsicherheitstrainings.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Durch die hohe Motivation jedes einzelnen Mitarbeiters können wir Ihnen die bestmögliche Dienstleistung bieten, deshalb ist jeder unserer Mitarbeiter Cesar Sicherheit.
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/bild-5.jpg"
                  alt="Unser Team"
                  fill
                  className="object-cover"
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <AnimatedSection delay={0.1}>
              <div className="p-6">
                <div className="text-5xl font-bold mb-2 text-accent">
                  <AnimatedCounter target={80} />
                </div>
                <div className="text-lg opacity-90">Professionelle Mitarbeiter</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-6">
                <div className="text-5xl font-bold mb-2 text-accent">
                  <AnimatedCounter target={100} suffix="%" />
                </div>
                <div className="text-lg opacity-90">Vertrauen</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="p-6">
                <div className="text-5xl font-bold mb-2 text-accent">
                  <AnimatedCounter target={100} suffix="%" />
                </div>
                <div className="text-lg opacity-90">Zufriedenheit</div>
              </div>
            </AnimatedSection>
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