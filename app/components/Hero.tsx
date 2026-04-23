"use client";

import { motion } from "framer-motion";
import { company } from "@/config/company";

export default function Hero() {
  const { tagline, hero } = company;

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Left: main content */}
      <div className="flex flex-col justify-center min-h-screen px-6 sm:px-12 lg:px-20 xl:px-28 py-32 lg:py-0 relative z-10 lg:pr-[260px] xl:pr-[280px]">

        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
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
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors"
          >
            Contact Us
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 justify-center px-8 py-4 border border-foreground/20 text-foreground/70 text-sm font-semibold hover:border-primary hover:text-primary transition-colors group"
          >
            Our Services
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

      </div>

      {/* Right: burgundy accent panel — absolutely positioned, shorter, inset from edge */}
      <motion.div
        className="hidden lg:flex absolute right-16 xl:right-24 top-1/2 -translate-y-1/2 w-[190px] xl:w-[210px] h-[52vh] max-h-[400px] bg-primary flex-col items-center justify-center overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      >
        {/* Diagonal grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg,transparent 0,transparent 19px,rgba(255,255,255,0.04) 19px,rgba(255,255,255,0.04) 20px)," +
              "repeating-linear-gradient(-45deg,transparent 0,transparent 19px,rgba(255,255,255,0.04) 19px,rgba(255,255,255,0.04) 20px)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <span className="font-inter text-[90px] xl:text-[108px] font-extrabold text-white/[0.08] select-none leading-none tracking-tighter">
            PT
          </span>
          <div className="border-t border-white/20 pt-4 w-full mt-1">
            <p className="text-white/35 text-[9px] font-semibold tracking-[0.3em] uppercase">Pathway Transportation</p>
          </div>
          <p className="text-white/20 text-[10px] mt-4 leading-relaxed">
            Safe · Reliable · Professional
          </p>
        </div>

        {/* Corner brackets */}
        <div className="absolute top-6 left-6 w-7 h-7 border-t-2 border-l-2 border-white/20" />
        <div className="absolute top-6 right-6 w-7 h-7 border-t-2 border-r-2 border-white/20" />
        <div className="absolute bottom-6 left-6 w-7 h-7 border-b-2 border-l-2 border-white/20" />
        <div className="absolute bottom-6 right-6 w-7 h-7 border-b-2 border-r-2 border-white/20" />
      </motion.div>

    </section>
  );
}
