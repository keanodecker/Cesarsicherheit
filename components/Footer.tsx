"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "./ui/AnimatedSection";
import { Phone, Smartphone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start">
              <div className="relative h-24 w-40 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Cesar Sicherheit"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center md:text-left">
              <h3 className="text-primary font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/ueber-uns" className="text-gray-600 hover:text-primary transition-colors">Über Uns</Link></li>
                <li><Link href="/veranstaltungsschutz" className="text-gray-600 hover:text-primary transition-colors">Veranstaltungsschutz</Link></li>
                <li><Link href="/objektschutz" className="text-gray-600 hover:text-primary transition-colors">Objektschutz</Link></li>
                <li><Link href="/kontakt" className="text-gray-600 hover:text-primary transition-colors">Kontakt</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h3 className="text-primary font-semibold mb-4">Kontaktdaten</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <Mail size={16} className="text-accent" />
                  <span>kontakt@cesarsicherheit.de</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <Phone size={16} className="text-accent" />
                  <span>+49 (0)7821 / 502 09 62</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <Smartphone size={16} className="text-accent" />
                  <span>+49 (0)174 / 980 45 14</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin size={16} className="text-accent" />
                  <span>Doler Pl. 3, 77933 Lahr</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            <div className="flex justify-center gap-4 mb-2">
              <Link href="/impressum" className="hover:text-primary">Impressum</Link>
              <span>|</span>
              <Link href="/datenschutz" className="hover:text-primary">Datenschutz</Link>
            </div>
            <p>&copy; {new Date().getFullYear()} Cesar Sicherheit. Alle Rechte vorbehalten.</p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}