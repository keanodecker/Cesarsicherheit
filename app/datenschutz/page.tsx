import { SlideIn, AnimatedSection } from "@/components/ui/AnimatedSection";
import CookieSettingsButton from "@/components/CookieSettingsButton";

export const metadata = {
  title: "Datenschutz | Cesar Sicherheit",
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-400 via-[#1e3a5f] to-[#0f1f33]">
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <SlideIn direction="left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 underline decoration-accent underline-offset-8">
              Datenschutzerklärung
            </h1>
          </SlideIn>

          <AnimatedSection delay={0.1}>
            <div className="space-y-10 text-gray-200">

              {/* Verantwortliche Stelle */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Verantwortliche Stelle</h2>
                <div className="space-y-1">
                  <p className="text-white font-medium">Cesarsicherheit und Dienstleistungs GmbH</p>
                  <p>Sezer Ülker</p>
                  <p>Doler Platz 3</p>
                  <p>77933 Lahr/Schwarzwald</p>
                  <p className="mt-2">Telefon: +49 (0)7821 / 502 09 62</p>
                  <p>E-Mail: kontakt@cesarsicherheit.de</p>
                </div>
              </div>

              <div className="border-t border-white/20" />

              {/* Allgemeines */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Allgemeines zur Datenverarbeitung</h2>
                <p className="leading-relaxed">
                  Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre
                  personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
                  Datenschutzvorschriften sowie dieser Datenschutzerklärung. Rechtsgrundlage für
                  die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie
                  Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
                </p>
              </div>

              <div className="border-t border-white/20" />

              {/* Hosting */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Hosting</h2>
                <p className="leading-relaxed mb-2">
                  Diese Website wird gehostet bei:
                </p>
                <p className="text-white font-medium">Vercel Inc.</p>
                <p>340 Pine Street Suite 701</p>
                <p>San Francisco, California 94104, USA</p>
                <p className="mt-3 leading-relaxed">
                  Beim Aufruf unserer Website werden automatisch technische Zugriffsdaten
                  erfasst (IP-Adresse, Uhrzeit, aufgerufene Seite). Diese Daten werden von
                  Vercel zur Bereitstellung des Dienstes verarbeitet. Weitere Informationen
                  finden Sie in der Datenschutzerklärung von Vercel unter{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline hover:text-white transition-colors"
                  >
                    vercel.com/legal/privacy-policy
                  </a>.
                </p>
              </div>

              <div className="border-t border-white/20" />

              {/* Kontaktformular */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Kontaktformular</h2>
                <p className="leading-relaxed mb-3">
                  Wenn Sie uns über das Kontaktformular eine Anfrage zukommen lassen, werden Ihre
                  Angaben (Name, E-Mail-Adresse, Telefonnummer, Nachricht) zum Zwecke der
                  Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
                  gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="leading-relaxed">
                  Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO
                  (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
                  an der Beantwortung Ihrer Anfrage).
                </p>
              </div>

              <div className="border-t border-white/20" />

              {/* E-Mail-Versand */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">E-Mail-Versand</h2>
                <p className="leading-relaxed mb-2">
                  Für den Versand von Nachrichten aus dem Kontaktformular nutzen wir den Dienst:
                </p>
                <p className="text-white font-medium">Resend Inc.</p>
                <p>2261 Market Street #5039</p>
                <p>San Francisco, CA 94114, USA</p>
                <p className="mt-3 leading-relaxed">
                  Die über das Kontaktformular übermittelten Daten (Name, E-Mail, Telefon,
                  Nachricht) werden zur Zustellung an uns über die Server von Resend
                  weitergeleitet. Resend verarbeitet diese Daten ausschließlich zur Erbringung
                  des E-Mail-Versanddienstes. Weitere Informationen:{" "}
                  <a
                    href="https://resend.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline hover:text-white transition-colors"
                  >
                    resend.com/legal/privacy-policy
                  </a>.
                </p>
              </div>

              <div className="border-t border-white/20" />

              {/* Cookies */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Cookies & Einwilligungsverwaltung</h2>
                <p className="leading-relaxed mb-4">
                  Diese Website verwendet Cookies. Beim ersten Besuch wird Ihnen ein Cookie-Banner angezeigt,
                  über den Sie Ihre Einwilligung für optionale Cookie-Kategorien erteilen oder verweigern können.
                  Ihre Auswahl wird im LocalStorage Ihres Browsers gespeichert (Schlüssel: <code className="text-accent">cookieConsent</code>).
                </p>
                <p className="text-white font-medium mb-3">Wir unterscheiden folgende Kategorien:</p>
                <div className="space-y-3 mb-4">
                  {[
                    { name: "Notwendige Cookies", desc: "Technisch erforderlich für Grundfunktionen der Website (z.B. Navigation, Sicherheit). Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Können nicht abgewählt werden.", always: true },
                    { name: "Funktionale Cookies", desc: "Ermöglichen erweiterte Funktionen und Personalisierung. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Aktuell nicht aktiv.", always: false },
                    { name: "Analyse-Cookies", desc: "Helfen uns zu verstehen, wie Besucher die Website nutzen (z.B. Google Analytics). Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Aktuell nicht aktiv.", always: false },
                    { name: "Marketing-Cookies", desc: "Werden für personalisierte Werbung genutzt (z.B. Meta Pixel). Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Aktuell nicht aktiv.", always: false },
                  ].map(c => (
                    <div key={c.name} className="bg-white/5 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-medium text-sm">{c.name}</span>
                        {c.always && <span className="text-accent text-xs font-semibold">Immer aktiv</span>}
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed">{c.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="leading-relaxed mb-3">
                  <strong className="text-white">Einwilligung widerrufen:</strong> Sie können Ihre Cookie-Einstellungen
                  jederzeit ändern, indem Sie auf den Link <CookieSettingsButton /> im Footer dieser Website klicken. Alternativ können Sie den LocalStorage-Eintrag{" "}
                  <code className="text-accent">cookieConsent</code> in den Entwicklertools Ihres Browsers löschen.
                </p>
              </div>

              <div className="border-t border-white/20" />

              {/* Google Maps */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Google Maps</h2>
                <p className="leading-relaxed">
                  Auf der Kontaktseite ist eine Karte von Google Maps eingebunden. Anbieter ist
                  die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
                  Durch die Nutzung von Google Maps können Informationen über Ihre Nutzung
                  dieser Website an Google übertragen werden. Rechtsgrundlage ist Art. 6 Abs. 1
                  lit. f DSGVO. Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in
                  der Datenschutzerklärung von Google:{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline hover:text-white transition-colors"
                  >
                    policies.google.com/privacy
                  </a>.
                </p>
              </div>

              <div className="border-t border-white/20" />

              {/* Ihre Rechte */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Ihre Rechte</h2>
                <p className="leading-relaxed mb-3">
                  Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden
                  personenbezogenen Daten:
                </p>
                <ul className="space-y-2 list-none">
                  {[
                    "Recht auf Auskunft (Art. 15 DSGVO)",
                    "Recht auf Berichtigung (Art. 16 DSGVO)",
                    "Recht auf Löschung (Art. 17 DSGVO)",
                    "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                    "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
                    "Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
                  ].map((right) => (
                    <li key={right} className="flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span>{right}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 leading-relaxed">
                  Sie haben zudem das Recht, sich bei der zuständigen Aufsichtsbehörde zu
                  beschweren. In Baden-Württemberg ist dies der Landesbeauftragte für den
                  Datenschutz und die Informationsfreiheit (LfDI BW).
                </p>
              </div>

              <div className="border-t border-white/20" />

              <p className="text-sm text-gray-400">Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}</p>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
