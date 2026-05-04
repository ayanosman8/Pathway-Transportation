"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { company } from "@/config/company";

const TYPED_TEXT = "every appointment, every time.";
const TYPE_DELAY = 1000;
const TYPE_SPEED = 55;

function useTypewriter(text: string, startDelay: number) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;
    const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), TYPE_SPEED);
    return () => clearTimeout(t);
  }, [started, displayed, text]);

  return displayed;
}

export default function Hero() {
  const { tagline, hero } = company;
  const typed = useTypewriter(TYPED_TEXT, TYPE_DELAY);

  return (
    <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#F3EBE0" }} aria-label="Hero section">

      {/* Warm gradient base */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#F5E8D0]/60 via-[#F6F1EA] to-[#EDE6DB]/80" />

      {/* Two-column layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center min-h-screen pt-28 pb-16 lg:pt-24 lg:pb-20 gap-10 xl:gap-20 relative z-10">

        {/* Left: text */}
        <div className="flex-1 min-w-0 flex flex-col items-center text-center lg:items-start lg:text-left">

          {/* Company name badge */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="inline-flex items-center gap-2.5 bg-foreground/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <span className="text-white text-xs font-bold tracking-widest uppercase">{company.name}</span>
            </div>
          </motion.div>

          {/* Headline */}
          <div className="mb-6 overflow-hidden">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[0.92]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <span className="block">Access to care starts</span>
              <span className="block">with a ride you can rely on</span>
              <span className="block text-primary">
                {typed}
                <span className="inline-block w-[3px] h-[0.85em] bg-primary align-middle ml-1 animate-pulse" />
              </span>
            </motion.h1>
          </div>

          {/* Subheading — quiet supporting text */}
          <motion.p
            className="text-foreground/55 text-base sm:text-lg leading-relaxed mb-10 max-w-sm"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
          >
            {hero.subheading}
          </motion.p>

          {/* CTA */}
          <motion.div
            className="w-full sm:w-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.75 }}
          >
            <a
              href="#contact"
              className="flex sm:inline-flex items-center gap-2 justify-center px-10 py-5 bg-primary text-white text-base font-bold hover:bg-primary-hover transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg group rounded-full"
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
          className="w-full lg:flex-shrink-0 lg:w-[500px] xl:w-[560px]"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          aria-hidden="true"
        >
          <div className="relative">
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/wheelchair.jpg"
                alt="Professional transportation vehicle"
                className="w-full h-56 sm:h-72 lg:h-[300px] xl:h-[340px] object-cover object-center block hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-4 py-3 shadow-xl z-20 animate-float border-2 border-[#C4902A]/30 flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/medicaid_logo.png" alt="Medicaid" className="h-8 w-auto object-contain shrink-0" />
              <div className="border-l border-foreground/10 pl-3">
                <p className="text-foreground font-extrabold text-xs leading-none mb-1.5">Approved Provider</p>
                {["EMFTS Certified", "NPI Registered"].map((label) => (
                  <div key={label} className="flex items-center gap-1.5 mt-1">
                    <svg className="w-3 h-3 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[10px] text-foreground/55">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
