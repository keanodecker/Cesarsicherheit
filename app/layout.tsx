import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Cesar Sicherheit | Professionelle Sicherheitsdienste",
  description: "Cesar Sicherheit steht für Ehrlichkeit, Zuverlässigkeit und Diskretion. Wir bieten Veranstaltungsschutz und Objektschutz in Lahr und Umgebung.",
  icons: {
    icon: "/images/favicon-icon.png",
    apple: "/images/favicon-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}