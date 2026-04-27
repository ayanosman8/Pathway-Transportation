"use client";

import { motion } from "framer-motion";
import { company } from "@/config/company";

export default function Hero() {
  const { tagline, hero } = company;

  return (
    <section className="relative min-h-screen overflow-hidden" aria-label="Hero section">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="w-full h-full object-cover opacity-10"
          aria-hidden="true"
        />
      </div>

      {/* Left: main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col justify-center min-h-screen py-32 lg:py-0 relative z-10 lg:pr-[480px] xl:pr-[520px]">

        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          aria-hidden="true"
        >
          <div className="h-px w-10 bg-primary" />
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">{tagline}</span>
        </motion.div>

        {/* Headline */}
        <div className="mb-8 overflow-hidden">
          <motion.h1
            className="text-6xl sm:text-7xl xl:text-[88px] font-extrabold tracking-tight leading-[0.92]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <span className="block">Moving</span>
            <span className="block">You</span>
            <span className="block text-primary">Forward.</span>
          </motion.h1>
        </div>

        {/* Divider */}
        <motion.div
          className="w-14 h-1 bg-primary mb-8"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          aria-hidden="true"
        />

        {/* Subheading */}
        <motion.p
          className="text-foreground/60 text-base sm:text-lg leading-relaxed max-w-md mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.65 }}
        >
          {hero.subheading}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.75 }}
        >
          <a
            href={`tel:${company.phoneRaw}`}
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Call now to schedule a ride"
          >
            Call Now to Schedule a Ride
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 justify-center px-8 py-4 border border-foreground/20 text-foreground/70 text-sm font-semibold hover:border-primary hover:text-primary transition-colors group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Request transportation today"
          >
            Request Transportation Today
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

      </div>

      {/* Right: image with border — absolutely positioned */}
      <motion.div
        className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 w-[420px] xl:w-[460px]"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        aria-hidden="true"
      >
        {/* Offset border frames */}
        <div className="absolute -top-4 -left-4 w-full h-full border-4 border-primary/30 z-0" />
        <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary/20 z-0" />

        {/* Main image */}
        <div className="relative border-4 border-primary overflow-hidden shadow-2xl z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80"
            alt="Professional transportation vehicle"
            className="w-full h-[480px] xl:h-[540px] object-cover"
          />
          {/* Dark overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
        </div>

        {/* Floating badge */}
        <div className="absolute -bottom-6 -left-6 bg-primary px-6 py-4 shadow-xl border-4 border-background z-20">
          <p className="text-white text-sm font-bold uppercase tracking-widest">Ohio Medicaid</p>
          <p className="text-white/80 text-xs uppercase tracking-wider mt-0.5">Approved Provider</p>
        </div>
      </motion.div>

    </section>
  );
}
