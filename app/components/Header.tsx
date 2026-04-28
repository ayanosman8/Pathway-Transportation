"use client";

import { useState } from "react";
import { company } from "@/config/company";

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
              className="h-28 sm:h-32 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            <a href="#services" className="text-foreground-muted hover:text-foreground transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1">Services</a>
            <a href="#about" className="text-foreground-muted hover:text-foreground transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1">About</a>
            <a href="#contact" className="text-foreground-muted hover:text-foreground transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1">Contact</a>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${company.phoneRaw}`}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Call now to schedule a ride"
            >
              Book a Ride
            </a>

            <button
              onClick={() => setMobileMenuOpen(v => !v)}
              className="md:hidden text-foreground-muted hover:text-foreground transition-colors p-1.5 -mr-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-border bg-background/95 backdrop-blur-md shadow-lg" role="navigation" aria-label="Mobile navigation">
          <div className="max-w-6xl mx-auto px-4 py-2 space-y-0.5">
            <a href="#services" onClick={closeMobile} className="block py-3.5 text-foreground-muted hover:text-foreground transition-colors border-b border-border/50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Services</a>
            <a href="#about" onClick={closeMobile} className="block py-3.5 text-foreground-muted hover:text-foreground transition-colors border-b border-border/50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">About</a>
            <a href="#contact" onClick={closeMobile} className="block py-3.5 text-foreground-muted hover:text-foreground transition-colors border-b border-border/50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Contact</a>
            <div className="py-3">
              <a href={`tel:${company.phoneRaw}`} onClick={closeMobile} className="inline-flex items-center justify-center w-full px-5 py-3 bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" aria-label="Call now to schedule a ride">
                Book a Ride to Schedule
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
