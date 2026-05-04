"use client";

import { motion } from "framer-motion";

const ShieldIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const BadgeCheckIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.723 3.066 3.745 3.745 0 01-3.066.723A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.066-.723 3.745 3.745 0 01-.723-3.066A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01.723-3.066 3.745 3.745 0 013.066-.723A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.066.723 3.745 3.745 0 01.723 3.066A3.745 3.745 0 0121 12z" />
  </svg>
);

const CarIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>
);

const UmbrellaIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 0a9 9 0 019 9H3a9 9 0 019-9zm0 1V3m0 18v-9m0 9a2 2 0 01-2-2v-1h4v1a2 2 0 01-2 2z" />
  </svg>
);

type Credential = { icon: React.ReactNode; label: string; sublabel: string; desc: string };

const credentials: Credential[] = [
  {
    icon: <ShieldIcon />,
    label: "Ohio Medicaid",
    sublabel: "Approved Provider",
    desc: "Fully approved to provide non-emergency medical transportation for Ohio Medicaid recipients.",
  },
  {
    icon: <CarIcon />,
    label: "EMFTS Certified",
    sublabel: "All Vehicles",
    desc: "Every vehicle is inspected, approved, and certified by the Ohio Board of Emergency Medical, Fire, and Transportation Services.",
  },
  {
    icon: <BadgeCheckIcon />,
    label: "NPI Registered",
    sublabel: "Active & Verified",
    desc: "Registered with an active National Provider Identifier, meeting all federal healthcare transportation requirements.",
  },
  {
    icon: <UmbrellaIcon />,
    label: "Fully Insured",
    sublabel: "Every Ride",
    desc: "All rides are fully insured and operated by trained, background-checked drivers committed to passenger safety.",
  },
];

export default function Credentials() {
  return (
    <section style={{ backgroundColor: "#F0EBE3" }} className="overflow-hidden" aria-label="Credentials and certifications">

      {/* Top divider */}
      <div className="border-t-2 border-[#C9BAA8]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-18">

        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-xs mb-3">Licensed & Compliant</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Certified to Care
            <span className="block text-primary text-2xl sm:text-3xl font-semibold mt-1">So you don&apos;t have to worry.</span>
          </h2>
        </motion.div>

        {/* Credential cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {credentials.map((c, i) => {
            const isGold = i % 2 === 0;
            const accent = isGold ? "#C4902A" : "#7D2535";
            return (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-[#C9BAA8] rounded-2xl overflow-hidden flex flex-col items-center text-center sm:items-start sm:text-left hover:shadow-md transition-all duration-300 group"
            >
              {/* Colored top strip */}
              <div className="w-full h-1.5 shrink-0" style={{ backgroundColor: accent }} />
              <div className="p-5 flex flex-col items-center text-center sm:items-start sm:text-left gap-3 w-full">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white shrink-0 transition-all duration-300"
                  style={{ backgroundColor: accent }}
                >
                  {c.icon}
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground leading-none">{c.label}</p>
                  <p className="text-[11px] font-semibold mt-0.5 uppercase tracking-wider" style={{ color: accent }}>{c.sublabel}</p>
                </div>
                <p className="text-xs text-foreground/55 leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
            );
          })}
        </div>

      </div>

      {/* Bottom divider */}
      <div className="border-b-2 border-[#C9BAA8]" />

    </section>
  );
}
