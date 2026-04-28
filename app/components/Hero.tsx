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

      {/* Two-column layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center min-h-screen pt-28 pb-16 lg:py-0 gap-12 xl:gap-20 relative z-10">

        {/* Left: text */}
        <div className="flex-1 min-w-0">

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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.75 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 justify-center px-10 py-5 bg-primary text-white text-base font-bold hover:bg-primary-hover transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg group"
              aria-label="Request a ride"
            >
              Request a Ride
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

        </div>

        {/* Right: image */}
        <motion.div
          className="hidden lg:block flex-shrink-0 w-[400px] xl:w-[440px]"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          aria-hidden="true"
        >
          <div className="relative">
            {/* Offset block behind image */}
            <div className="absolute -bottom-3 -right-3 w-full h-full bg-primary" />
            <div className="absolute -bottom-3 -right-3 w-full h-full" style={{ boxShadow: `4px 4px 0 2px #e2bb5440` }} />

            {/* Image */}
            <div className="relative overflow-hidden shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/car.webp"
                alt="Professional transportation vehicle"
                className="w-full h-[460px] xl:h-[520px] object-cover block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-primary px-5 py-3 shadow-lg z-20">
              <p className="text-white text-xs font-bold uppercase tracking-widest">Ohio Medicaid</p>
              <p className="text-white/70 text-[10px] uppercase tracking-wider mt-0.5">Approved Provider</p>
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
