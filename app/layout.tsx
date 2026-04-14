import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cesar Sicherheit | Professionelle Sicherheitsdienste",
  description: "Cesar Sicherheit steht für Ehrlichkeit, Zuverlässigkeit und Diskretion. Wir bieten Veranstaltungsschutz und Objektschutz in Lahr und Umgebung.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
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
      </body>
    </html>
  );
}