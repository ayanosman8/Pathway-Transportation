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

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col min-h-screen pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-28 lg:pb-16 relative z-10 justify-center lg:pr-[480px] xl:pr-[520px]">

        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          aria-hidden="true"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">{tagline}</span>
        </motion.div>

        {/* Headline */}
        <div className="mb-8 overflow-hidden">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[0.92]"
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
          className="text-foreground/60 text-base sm:text-lg leading-relaxed mb-10 max-w-md"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.65 }}
        >
          {hero.subheading}
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.75 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 justify-center px-10 py-5 bg-primary text-white text-base font-bold hover:bg-primary-hover transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg group"
            aria-label="Request transportation"
          >
            Request a Ride
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
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
        {/* Picture frame */}
        <div className="relative z-10 p-4 border-4 border-primary/60 shadow-2xl bg-primary/[0.04]">
          {/* Gold accent corners */}
          <div className="absolute top-1.5 left-1.5 w-6 h-6 border-t-4 border-l-4 pointer-events-none z-20" style={{ borderColor: '#e2bb54' }} />
          <div className="absolute top-1.5 right-1.5 w-6 h-6 border-t-4 border-r-4 pointer-events-none z-20" style={{ borderColor: '#e2bb54' }} />
          <div className="absolute bottom-1.5 left-1.5 w-6 h-6 border-b-4 border-l-4 pointer-events-none z-20" style={{ borderColor: '#e2bb54' }} />
          <div className="absolute bottom-1.5 right-1.5 w-6 h-6 border-b-4 border-r-4 pointer-events-none z-20" style={{ borderColor: '#e2bb54' }} />
          <div className="relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/car.webp"
              alt="Professional transportation vehicle"
              className="w-full h-[480px] xl:h-[540px] object-cover block"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>

        {/* Floating badge */}
        <div className="absolute -bottom-5 -left-5 bg-primary px-5 py-3 shadow-lg z-20">
          <p className="text-white text-xs font-bold uppercase tracking-widest">Ohio Medicaid</p>
          <p className="text-white/70 text-[10px] uppercase tracking-wider mt-0.5">Approved Provider</p>
        </div>
      </motion.div>

    </section>
  );
}
