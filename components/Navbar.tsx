"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ÜBER UNS", href: "/ueber-uns" },
  { name: "VERANSTALTUNGSSCHUTZ", href: "/veranstaltungsschutz" },
  { name: "OBJEKTSCHUTZ", href: "/objektschutz" },
  { name: "KONTAKT", href: "/kontakt" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine navbar background
  const navBg = isHome
    ? isScrolled
      ? "bg-[#0f1f33]/90 backdrop-blur-md shadow-lg py-2"
      : "bg-transparent py-3"
    : isScrolled
      ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
      : "bg-white py-3";

  // Determine link color
  const linkColor = isHome
    ? "text-white hover:text-accent"
    : "text-primary hover:text-accent";

  const mobileMenuBg = isHome ? "bg-[#0f1f33]" : "bg-white";
  const mobileLinkColor = isHome ? "text-white hover:text-accent border-white/20" : "text-primary hover:text-accent border-gray-100";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo — overflows slightly below navbar */}
            <Link href="/" className="flex items-center relative">
              <div className="relative h-24 w-56" style={{ marginBottom: "-16px" }}>
                <Image
                  src="/images/logo.png"
                  alt="Cesar Sicherheit"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation — right aligned */}
            <div className="hidden lg:flex items-center space-x-8 justify-end">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 tracking-wide ${linkColor}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 ${isHome ? "text-white" : "text-primary"}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-0 z-40 ${mobileMenuBg} pt-24 px-4 lg:hidden`}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium py-2 border-b ${mobileLinkColor}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
