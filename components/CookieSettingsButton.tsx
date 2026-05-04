"use client";

export default function CookieSettingsButton() {
  return (
    <button
      onClick={() => document.dispatchEvent(new Event("openCookieSettings"))}
      className="text-accent underline underline-offset-2 hover:text-white transition-colors"
    >
      Cookie-Einstellungen
    </button>
  );
}
