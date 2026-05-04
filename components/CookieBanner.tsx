"use client";

import { useState, useEffect } from "react";
import { X, Shield, ToggleLeft, ToggleRight } from "lucide-react";
import Link from "next/link";

interface CookieConsent {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

interface Preferences {
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = "cookieConsent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [preferences, setPreferences] = useState<Preferences>({
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }

    const handleOpen = () => {
      const existing = localStorage.getItem(STORAGE_KEY);
      if (existing) {
        const consent: CookieConsent = JSON.parse(existing);
        setPreferences({
          functional: consent.functional,
          analytics: consent.analytics,
          marketing: consent.marketing,
        });
      }
      setVisible(true);
    };

    document.addEventListener("openCookieSettings", handleOpen);
    return () => document.removeEventListener("openCookieSettings", handleOpen);
  }, []);

  const save = (consent: CookieConsent) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    setVisible(false);
    setModalOpen(false);
  };

  const acceptAll = () =>
    save({ necessary: true, functional: true, analytics: true, marketing: true, timestamp: Date.now() });

  const rejectAll = () =>
    save({ necessary: true, functional: false, analytics: false, marketing: false, timestamp: Date.now() });

  const savePreferences = () =>
    save({ necessary: true, ...preferences, timestamp: Date.now() });

  if (!visible) return null;

  return (
    <>
      {/* ── Banner ── */}
      {!modalOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-4">
          <div className="max-w-5xl mx-auto bg-[#0f1f33] border border-[#d4a84b]/30 rounded-2xl shadow-2xl px-5 py-5 md:px-7">
            <div className="flex items-start gap-3 mb-4">
              <Shield className="text-[#d4a84b] flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-white font-semibold text-sm mb-1">Datenschutz & Cookies</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Wir verwenden technisch notwendige Cookies, um die Grundfunktionen dieser Website sicherzustellen.
                  Optionale Cookies setzen wir nur mit Ihrer Einwilligung ein. Weitere Informationen finden Sie in
                  unserer{" "}
                  <Link href="/datenschutz" className="text-[#d4a84b] underline underline-offset-2 hover:text-white transition-colors">
                    Datenschutzerklärung
                  </Link>.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={acceptAll}
                className="bg-[#d4a84b] hover:bg-[#c49940] text-white font-semibold py-2 px-5 rounded-full text-sm transition-all duration-300 hover:scale-105"
              >
                Accept all
              </button>
              <button
                onClick={rejectAll}
                className="bg-[#d4a84b] hover:bg-[#c49940] text-white font-semibold py-2 px-5 rounded-full text-sm transition-all duration-300 hover:scale-105"
              >
                Reject all
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-5 rounded-full text-sm transition-all duration-300 border border-white/20"
              >
                Configure
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Konfigurations-Modal ── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-3 md:p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-[#0f1f33] border border-[#d4a84b]/30 rounded-2xl shadow-2xl p-6">

            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Shield className="text-[#d4a84b]" size={18} />
                <h2 className="text-white font-bold text-base">Cookie-Einstellungen</h2>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="Schließen"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3 mb-6">
              {/* Notwendig */}
              <div className="flex items-start justify-between gap-4 p-4 bg-white/5 rounded-xl">
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">Notwendige Cookies</p>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    Technisch erforderlich für Grundfunktionen wie Seitennavigation und Sicherheit. Können nicht
                    deaktiviert werden.
                  </p>
                </div>
                <span className="text-[#d4a84b] text-xs font-semibold flex-shrink-0 mt-0.5 whitespace-nowrap">
                  Immer aktiv
                </span>
              </div>

              {/* Funktional */}
              <div className="flex items-start justify-between gap-4 p-4 bg-white/5 rounded-xl">
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">Funktionale Cookies</p>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    Ermöglichen erweiterte Funktionen und Personalisierung der Website.
                  </p>
                </div>
                <button
                  onClick={() => setPreferences(p => ({ ...p, functional: !p.functional }))}
                  className="flex-shrink-0 mt-0.5"
                  aria-label="Funktionale Cookies umschalten"
                >
                  {preferences.functional
                    ? <ToggleRight size={30} className="text-[#d4a84b]" />
                    : <ToggleLeft size={30} className="text-gray-500" />}
                </button>
              </div>

              {/* Analyse */}
              <div className="flex items-start justify-between gap-4 p-4 bg-white/5 rounded-xl">
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">Analyse-Cookies</p>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    Helfen uns zu verstehen, wie Besucher die Website nutzen. Aktuell nicht in Verwendung.
                  </p>
                </div>
                <button
                  onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                  className="flex-shrink-0 mt-0.5"
                  aria-label="Analyse-Cookies umschalten"
                >
                  {preferences.analytics
                    ? <ToggleRight size={30} className="text-[#d4a84b]" />
                    : <ToggleLeft size={30} className="text-gray-500" />}
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4 p-4 bg-white/5 rounded-xl">
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">Marketing-Cookies</p>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    Werden für personalisierte Werbung genutzt. Aktuell nicht in Verwendung.
                  </p>
                </div>
                <button
                  onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                  className="flex-shrink-0 mt-0.5"
                  aria-label="Marketing-Cookies umschalten"
                >
                  {preferences.marketing
                    ? <ToggleRight size={30} className="text-[#d4a84b]" />
                    : <ToggleLeft size={30} className="text-gray-500" />}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={acceptAll}
                className="bg-[#d4a84b] hover:bg-[#c49940] text-white font-semibold py-2 px-5 rounded-full text-sm transition-all duration-300 hover:scale-105"
              >
                Accept all
              </button>
              <button
                onClick={rejectAll}
                className="bg-[#d4a84b] hover:bg-[#c49940] text-white font-semibold py-2 px-5 rounded-full text-sm transition-all duration-300 hover:scale-105"
              >
                Reject all
              </button>
              <button
                onClick={savePreferences}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-5 rounded-full text-sm transition-all duration-300 border border-white/20"
              >
                Auswahl speichern
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
