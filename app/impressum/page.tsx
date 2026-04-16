import { SlideIn, AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata = {
  title: "Impressum | Cesar Sicherheit",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-400 via-[#1e3a5f] to-[#0f1f33]">
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <SlideIn direction="left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 underline decoration-accent underline-offset-8">
              Impressum
            </h1>
          </SlideIn>

          <AnimatedSection delay={0.1}>
            <div className="space-y-10 text-gray-200">

              {/* Angaben gemäß TMG */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  Angaben gemäß § 5 TMG
                </h2>
                <div className="space-y-1">
                  <p className="text-white font-medium">Cesarsicherheit und Dienstleistungs GmbH</p>
                  <p>Sezer Ülker</p>
                  <p>Doler Platz 3</p>
                  <p>77933 Lahr/Schwarzwald</p>
                </div>
              </div>

              <div className="border-t border-white/20" />

              {/* Kontakt */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Kontakt</h2>
                <div className="space-y-1">
                  <p>Telefon: +49 (0)7821 / 502 09 62</p>
                  <p>Mobil: +49 (0)174 / 980 45 14</p>
                  <p>E-Mail: mail@cesardienstleistungen.de</p>
                </div>
              </div>

              <div className="border-t border-white/20" />

              {/* Unternehmensangaben */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Unternehmensangaben</h2>
                <div className="space-y-1">
                  <p>Geschäftsführer: Sezer Ülker</p>
                  <p>Registergericht: Amtsgericht Freiburg</p>
                  <p>Registernummer: HRB 715071</p>
                  <p>Umsatzsteuer-ID gemäß § 27a UStG: 1005605229</p>
                </div>
              </div>

              <div className="border-t border-white/20" />

              {/* Haftungsausschluss */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Haftungsausschluss</h2>
                <p className="leading-relaxed">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
                  Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
                  Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                </p>
              </div>

              <div className="border-t border-white/20" />

              {/* Urheberrecht */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Urheberrecht</h2>
                <p className="leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                  unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                  Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                  bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
