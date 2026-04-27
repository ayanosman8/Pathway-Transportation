"use client";

import { motion } from "framer-motion";
import { company } from "@/config/company";

export default function Hero() {
  const { tagline, hero } = company;

  return (
    <section className="relative min-h-screen overflow-hidden" aria-label="Hero section">

      {/* Left: main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col justify-center min-h-screen py-32 lg:py-0 relative z-10 lg:pr-[260px] xl:pr-[280px]">

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

      {/* Right: burgundy accent circle — absolutely positioned */}
      <motion.div
        className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/4 -translate-y-1/2 w-[320px] h-[320px] xl:w-[380px] xl:h-[380px] rounded-full bg-primary flex-col items-center justify-center overflow-hidden border-[12px] border-primary/30"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        aria-hidden="true"
      >
        {/* Diagonal grid pattern */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg,transparent 0,transparent 19px,rgba(255,255,255,0.04) 19px,rgba(255,255,255,0.04) 20px)," +
              "repeating-linear-gradient(-45deg,transparent 0,transparent 19px,rgba(255,255,255,0.04) 19px,rgba(255,255,255,0.04) 20px)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-8">
          <span className="font-inter text-[120px] xl:text-[140px] font-extrabold text-white/[0.08] select-none leading-none tracking-tighter">
            PT
          </span>
          <div className="border-t border-white/20 pt-4 w-full mt-2">
            <p className="text-white/35 text-[10px] font-semibold tracking-[0.3em] uppercase">Pathway Transportation</p>
          </div>
          <p className="text-white/20 text-[11px] mt-5 leading-relaxed">
            Safe · Reliable · Professional
          </p>
        </div>
      </motion.div>

    </section>
  );
}
