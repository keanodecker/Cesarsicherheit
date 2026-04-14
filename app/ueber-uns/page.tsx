"use client";

import Image from "next/image";
import Link from "next/link";
import { SlideIn, AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen pb-20">

      {/* ── Gradient Header Banner — fades to white so Geschäftsführer connects ── */}
      <div className="h-40 bg-gradient-to-b from-slate-400 via-[#1e3a5f] to-white" />

      {/* ── Geschäftsführer ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SlideIn direction="left">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Portrait Photo */}
              <div className="flex-shrink-0">
                <div className="relative w-40 h-52 md:w-48 md:h-64 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/3.png"
                    alt="Sezer Ülker – Geschäftsführer"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Geschäftsführer
                </h1>
                <p className="text-gray-800 leading-relaxed mb-4">
                  Sezer Ülker war 7 Jahre lang für den Sicherheitsdienst des Europarks und in verschiedenen
                  anderen Betrieben als <strong className="underline">Bereichsleiter</strong> tätig. Bei der Durchführung diverser
                  Großprojekte, sowie im Arbeitsalltag im größten Freizeitpark Deutschlands, sammelte er die
                  nötige Erfahrung in den verschiedenen Arbeitsbereichen und Aufgabengebieten der
                  Sicherheitsbranche. Sezer Ülker hat, wie jeder seiner Mitarbeiter, eine{" "}
                  <strong className="underline">umfangreiche und kompetente Aus- und Weiterbildung</strong>{" "}
                  genossen. Bestandteile dieser Ausbildung sind folgende Qualifikationen:
                </p>

                <p className="text-gray-800 font-medium mb-3">Aus – und Weiterbildung</p>

                <ul className="space-y-2 text-gray-800">
                  {[
                    "Sicherheitsinspektor (SIKU)",
                    "Training im Umgang mit Konflikten (TuK)",
                    "Training in Eingriffs- und Sicherheitstechniken (SEK)",
                    "Sicherheitsmanagement bei Event- und Großveranstaltungen",
                    "Jährliches Fahrsicherheitstraining",
                    "Trainer für Selbstverteidigungstechniken",
                  ].map((q, i) => (
                    <motion.li
                      key={q}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-start gap-2"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-800 flex-shrink-0" />
                      <span className="underline underline-offset-2">{q}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* ── Unser Team ── */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6 underline decoration-accent underline-offset-8">
                  Unser Team
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Jeder unserer 80 Mitarbeiter ist höchst kompetent und hat Erfahrungen in der
                  Sicherheitsbranche, durch{" "}
                  <strong>regelmäßige Fort- und Weiterbildungsmaßnahmen</strong> stellen wir sicher,
                  dass wir stets auf dem neusten Stand sind. Unsere Mitarbeiter erhalten Fortbildungen
                  im Bereich Selbstverteidigungs-, Sicherheitstechniken und absolvieren
                  Fahrsicherheitstrainings.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Durch die hohe Motivation jedes einzelnen Mitarbeiters können wir Ihnen die
                  bestmögliche Dienstleistung bieten, deshalb ist jeder unserer Mitarbeiter Cesar
                  Sicherheit.
                </p>
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.2}>
              <div className="relative h-[380px] rounded-xl overflow-hidden shadow-2xl">
                <Image src="/images/4.webp" alt="Unser Team" fill className="object-cover" />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 bg-gradient-to-b from-slate-300 via-[#1e3a5f] to-[#0f1f33] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { target: 80, suffix: "", label: "Professionelle Mitarbeiter" },
              { target: 100, suffix: "%", label: "Vertrauen" },
              { target: 100, suffix: "%", label: "Zufriedenheit" },
            ].map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.15}>
                <div className="p-6">
                  <div className="text-5xl font-bold mb-2 text-accent">
                    <AnimatedCounter target={s.target} suffix={s.suffix} />
                  </div>
                  <div className="text-lg opacity-90">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-b from-[#0f1f33] to-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-4">Jetzt mehr Erfahren</h2>
            <p className="text-gray-300 mb-8">
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
