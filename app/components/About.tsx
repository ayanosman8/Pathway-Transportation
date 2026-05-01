"use client";

import { motion } from "framer-motion";
import { company } from "@/config/company";


const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};



export default function About() {
  const { about } = company;

  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 scroll-mt-16 sm:scroll-mt-20 overflow-hidden"
      style={{ backgroundColor: "#7D2535" }}
      aria-labelledby="about-heading"
    >
      {/* Background watermark */}
      <div className="absolute -top-4 right-0 text-[200px] sm:text-[260px] font-extrabold text-white/[0.03] select-none leading-none pointer-events-none tracking-tighter pr-4">
        PT
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: text */}
          <motion.div
            className="space-y-6 lg:space-y-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp}>
              <p className="text-[#C4902A] font-semibold tracking-widest uppercase text-xs mb-4">Our Story</p>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp}>
              <h2 id="about-heading" className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
                {about.headline}
                <span className="block text-[#C4902A]">{about.headlineAccent}</span>
              </h2>
            </motion.div>

            {/* Mobile-only image */}
            <motion.div variants={fadeUp} className="block lg:hidden relative">
              <div className="absolute inset-0 bg-[#C4902A]/20 rounded-2xl rotate-[1.5deg] scale-[1.01]" />
              <div className="relative overflow-hidden rounded-2xl border-[3px] border-[#C4902A] shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ohioroad.webp"
                  alt="Professional transportation in Columbus"
                  className="w-full h-52 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-md">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Columbus, OH</span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <p className="text-white font-bold text-sm leading-none">Pathway Transportation</p>
                  <p className="text-white/65 text-[10px] uppercase tracking-widest mt-1">Your trusted ride</p>
                </div>
              </div>
            </motion.div>

            {/* Paragraph 1 */}
            <motion.div variants={fadeUp} className="text-white/90 leading-relaxed">
              <p>{about.body[0]}</p>
            </motion.div>



          </motion.div>

          {/* Right: photo collage with SVG illustration */}
          <motion.div
            className="relative hidden lg:flex flex-col gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeRight}
          >
            {/* Main photo */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#C4902A]/20 rounded-3xl rotate-[2deg] scale-[1.02]" />
              <div className="relative overflow-hidden rounded-3xl border-[3px] border-[#C4902A] shadow-[0_12px_48px_rgba(196,144,42,0.25)] animate-glow-pulse">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ohioroad.webp"
                  alt="Columbus Ohio highway"
                  className="w-full h-[290px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Columbus map pin */}
                <div className="absolute top-4 right-4 flex flex-col items-center">
                  <div className="bg-white rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-primary shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.077 3.678-5.032 3.678-8.83C20 6.026 16.415 2 12 2S4 6.026 4 10.518c0 3.798 1.734 6.753 3.678 8.83a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Columbus, OH</span>
                  </div>
                  {/* Pin stem */}
                  <div className="w-0.5 h-3 bg-white/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                </div>

                {/* Bottom caption */}
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-bold text-sm leading-none">Pathway Transportation</p>
                  <p className="text-white/65 text-[10px] uppercase tracking-widest mt-1">Your trusted ride</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Full-width quote banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="px-4 sm:px-6 py-7 sm:py-8"
      >
        <div
          className="max-w-3xl mx-auto p-[2px] rounded-2xl"
          style={{ background: "linear-gradient(135deg, #B8821E 0%, #C4902A 35%, #7D2535 70%, #6B1A2D 100%)" }}
        >
          <div className="rounded-2xl px-6 sm:px-8 py-6 flex gap-5 items-start bg-white">
            <span className="font-serif text-7xl leading-none select-none mt-[-10px] shrink-0" style={{ color: "#C4902A", opacity: 0.35 }}>&ldquo;</span>
            <div>
              <p className="text-foreground/75 text-base sm:text-lg leading-relaxed font-medium">
                I used to dread coordinating my mother&apos;s dialysis trips.{" "}
                <span className="font-extrabold text-foreground">Now I don&apos;t think twice.</span>{" "}
                Pathway handles it with care every time.
              </p>
              <p className="text-foreground/40 text-xs mt-3 font-semibold tracking-wide">— Denise R., Columbus OH</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
