"use client";

import { useState } from "react";
import { company } from "@/config/company";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function closeMobile() { setMobileMenuOpen(false); }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-primary flex items-center justify-center shrink-0">
              <span className="text-white text-sm font-bold tracking-tight">{company.initials}</span>
            </div>
            <span className="font-semibold text-base hidden sm:block leading-tight">{company.name}</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground-muted hover:text-foreground transition-colors text-sm font-medium">Services</a>
            <a href="#about" className="text-foreground-muted hover:text-foreground transition-colors text-sm font-medium">About</a>
            <a href="#contact" className="text-foreground-muted hover:text-foreground transition-colors text-sm font-medium">Contact</a>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors"
            >
              Contact Us
            </a>

            <button
              onClick={() => setMobileMenuOpen(v => !v)}
              className="md:hidden text-foreground-muted hover:text-foreground transition-colors p-1.5 -mr-1"
              aria-label="Toggle menu"
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
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-2 space-y-0.5">
            <a href="#services" onClick={closeMobile} className="block py-3.5 text-foreground-muted hover:text-foreground transition-colors border-b border-border/50 text-sm font-medium">Services</a>
            <a href="#about" onClick={closeMobile} className="block py-3.5 text-foreground-muted hover:text-foreground transition-colors border-b border-border/50 text-sm font-medium">About</a>
            <a href="#contact" onClick={closeMobile} className="block py-3.5 text-foreground-muted hover:text-foreground transition-colors border-b border-border/50 text-sm font-medium">Contact</a>
            <div className="py-3">
              <a href="#contact" onClick={closeMobile} className="inline-flex items-center justify-center w-full px-5 py-3 bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
