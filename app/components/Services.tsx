"use client";

import { motion } from "framer-motion";
import { company } from "@/config/company";
import { serviceIllustrations } from "@/app/components/ServiceIllustrations";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Services() {
  const { services } = company;

  return (
    <section id="services" className="scroll-mt-16 sm:scroll-mt-20" style={{ backgroundColor: "#F6F1EA" }} aria-labelledby="services-heading">

      {/* Divider banner */}
      <div style={{ background: "linear-gradient(135deg, #B8821E 0%, #C4902A 35%, #7D2535 70%, #6B1A2D 100%)" }}>
        <div className="py-12 sm:py-16 text-center px-4">
          <div className="inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white">Pathway Transportation Services</span>
          </div>
          <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Our Services</h3>
          <p className="text-sm text-white/55 mt-3 tracking-wide">Transportation solutions for every need</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">

        {/* Section header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="services-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            We Get You <span className="text-primary">There</span>
          </h2>
          <p className="text-foreground/55 text-base max-w-lg mx-auto leading-relaxed">
            Safe, reliable transportation across Columbus — for every need.
          </p>
        </motion.div>

        {/* 3-card circular image grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {services.slice(0, 3).map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="flex flex-col items-center text-center px-4 group cursor-default"
            >
              {/* Circular illustration with gold ring */}
              <div className="relative mb-6 shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#C4902A]/20 scale-110" />
                <div className="w-48 h-48 rounded-full overflow-hidden border-[4px] border-[#C4902A] shadow-[0_8px_32px_rgba(196,144,42,0.3)] relative group-hover:scale-105 transition-transform duration-500">
                  {(() => {
                    const Illustration = serviceIllustrations[service.icon];
                    return Illustration ? <Illustration /> : null;
                  })()}
                </div>
              </div>

              {/* Text */}
              <h3 className="font-extrabold text-xl leading-snug mb-1 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <div className="mb-3 h-[3px] w-10 rounded-full bg-[#C4902A] group-hover:w-full transition-all duration-500 mx-auto" />
              <p className="text-sm text-foreground/60 leading-relaxed max-w-[260px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
