"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Do you accept Ohio Medicaid?",
    a: "Yes — we are a fully approved Ohio Medicaid provider. If you have Medicaid, your ride may be covered at no cost to you. Just let us know when you book.",
  },
  {
    q: "How far in advance should I schedule a ride?",
    a: "We recommend booking at least 24 hours ahead to guarantee availability. For recurring appointments like dialysis or therapy, we can set up a standing schedule.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Columbus and the surrounding areas including Westerville, Dublin, Gahanna, Hilliard, Grove City, and more. Not sure if we cover your area? Give us a call.",
  },
  {
    q: "Are your drivers background-checked?",
    a: "Absolutely. All of our drivers are professionally trained, fully background-checked, and committed to providing safe, respectful care on every ride.",
  },
  {
    q: "What types of trips do you provide transportation for?",
    a: "We transport clients to medical appointments, dialysis, therapy, pharmacy visits, and other non-emergency healthcare needs. We do not provide emergency medical transport.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: "#F6F1EA" }} aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">

        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#C4902A] mb-3">Got Questions?</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-[#C9BAA8] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset group"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors duration-200">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.22 }}
                  className="shrink-0 w-6 h-6 rounded-full border border-[#C9BAA8] flex items-center justify-center text-[#C4902A] group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="px-5 pt-1 pb-6 text-sm text-foreground/60 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
