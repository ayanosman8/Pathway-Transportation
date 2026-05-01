"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Give Us a Call",
    description: "Call us to share your ride details and preferred time — we'll get you set up right away.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We Confirm Your Ride",
    description: "Our team reviews your request and confirms all the details — date, time, pickup, and destination.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "We Pick You Up",
    description: "Your driver arrives on time in a certified, comfortable vehicle ready to take you where you need to go.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 scroll-mt-16 sm:scroll-mt-20" style={{ backgroundColor: "#F6F1EA" }} aria-label="How it works">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#C4902A] mb-3">Simple Process</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            How It <span className="text-primary">Works</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-[2px]" style={{ background: "linear-gradient(90deg, #C4902A40, #C4902A, #C4902A40)" }} aria-hidden="true" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, ease, delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step circle */}
              <div className="relative mb-6 z-10">
                <div className="absolute inset-0 rounded-full bg-[#C4902A]/20 scale-125" />
                <motion.div
                  className="relative w-20 h-20 rounded-full border-[3px] flex items-center justify-center shadow-[0_4px_20px_rgba(196,144,42,0.2)]"
                  initial={{ backgroundColor: "#FBF7F2", borderColor: "#C9BAA8", color: "#C4902A" }}
                  whileInView={{ backgroundColor: i === 1 ? "#7D2535" : "#C4902A", borderColor: i === 1 ? "#7D2535" : "#C4902A", color: "#ffffff" }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.45, delay: i * 0.1 + 0.25 }}
                >
                  {step.icon}
                </motion.div>
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow">
                  <span className="text-white text-[10px] font-extrabold">{i + 1}</span>
                </div>
              </div>

              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed max-w-[240px]">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold text-sm hover:bg-primary-hover transition-all hover:scale-105 shadow-lg rounded-full"
          >
            Book Your Ride
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
