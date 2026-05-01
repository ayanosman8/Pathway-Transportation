"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function closeMobile() { setMobileMenuOpen(false); }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border" role="banner">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-24 sm:h-28">
        <div className="flex items-center justify-between h-full">

          {/* Logo */}
          <a href="/" className="flex items-center group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" aria-label="Pathway Transportation Services - Home">
            <img
              src="/logo-2.png"
              alt="Pathway Transportation Services logo"
              className="h-36 sm:h-44 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="text-foreground-muted hover:text-foreground transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1">{label}</a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full"
              aria-label="Book a ride"
            >
              Book a Ride
            </a>

            {/* Animated hamburger / X button */}
            <button
              onClick={() => setMobileMenuOpen(v => !v)}
              className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] p-1 -mr-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <motion.span
                className="block h-[2px] w-5 bg-foreground origin-center rounded-full"
                animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              />
              <motion.span
                className="block h-[2px] w-5 bg-foreground rounded-full"
                animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="block h-[2px] w-5 bg-foreground origin-center rounded-full"
                animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-md shadow-lg"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="max-w-6xl mx-auto px-4 py-2 space-y-0.5">
              {navLinks.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={closeMobile}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: 0.06 + i * 0.07 }}
                  className="block py-3.5 text-foreground-muted hover:text-foreground transition-colors border-b border-border/50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                >
                  {label}
                </motion.a>
              ))}
              <motion.div
                className="py-3"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.22, delay: 0.27 }}
              >
                <a
                  href="#contact"
                  onClick={closeMobile}
                  className="inline-flex items-center justify-center w-full px-5 py-3 bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Book a ride"
                >
                  Book a Ride
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
