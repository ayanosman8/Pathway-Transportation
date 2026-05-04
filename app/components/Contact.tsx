"use client";

import { useState } from "react";
import { company } from "@/config/company";

export default function Contact() {
  const { phone, phoneRaw, email, address } = company;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="scroll-mt-16 sm:scroll-mt-20" style={{ backgroundColor: "#EDE6DB" }} aria-labelledby="contact-heading">

      {/* Section banner */}
      <div className="px-4 sm:px-6 pt-10 sm:pt-0 sm:block">
        <div
          className="max-w-6xl mx-auto rounded-2xl sm:rounded-none py-12 sm:py-16 text-center px-6"
          style={{ background: "linear-gradient(135deg, #B8821E 0%, #C4902A 35%, #7D2535 70%, #6B1A2D 100%)" }}
        >
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-white/60 mb-3">Book Today</p>
          <h3 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-white">Your Next Ride Is One Call Away</h3>
          <p className="text-sm text-white/55 mt-3 tracking-wide">Call us or send a message — we&apos;ll get you set up right away</p>
        </div>
      </div>

      <div className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: Book a Ride */}
          <div className="space-y-6" id="contact-heading">

            {/* Book a Ride card */}
            <div className="bg-primary rounded-2xl p-5 sm:p-8 shadow-xl border-2 border-[#C4902A]/40">
              <p className="text-white/70 text-xs font-bold tracking-[0.25em] uppercase mb-2">Ready to Ride?</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-1">Book a Ride</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Call us directly to schedule your trip. Same-day and advance bookings available for Medicaid and private-pay clients.
              </p>
              <a
                href={`tel:${phoneRaw}`}
                className="flex items-center gap-3 bg-white/15 hover:bg-white/25 border border-white/20 rounded-xl px-5 py-4 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-[11px] uppercase tracking-widest">Call Now</p>
                  <p className="text-white font-bold text-xl leading-none mt-0.5">{phone}</p>
                </div>
                <svg className="w-5 h-5 text-white/40 ml-auto group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Secondary contact info */}
            <div className="space-y-3">
              <a href={`mailto:${email}`} className="flex items-center gap-4 bg-[#F6F1EA] border-2 border-[#C9BAA8] p-4 hover:border-primary transition-colors group">
                <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0 text-white">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-foreground/50 uppercase tracking-widest mb-0.5">Email</p>
                  <p className="text-foreground font-semibold text-sm group-hover:text-primary transition-colors">{email}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 bg-[#F6F1EA] border-2 border-[#C9BAA8] p-4">
                <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0 text-white">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-foreground/50 uppercase tracking-widest mb-0.5">Service Area</p>
                  <p className="text-foreground font-semibold text-sm">{address.line1} &amp; surrounding areas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-[#F6F1EA] border-2 border-[#C9BAA8] border-t-4 border-t-[#C4902A] p-5 sm:p-8 shadow-lg">

            {/* Form header */}
            {!submitted && (
              <div className="mb-6 pb-6 border-b-2 border-[#E0D3C3]">
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#C4902A] mb-1">Send a Message</p>
                <h3 className="text-2xl font-extrabold text-foreground leading-snug">Have a Question?</h3>
                <p className="text-sm text-foreground/55 mt-1.5 leading-relaxed">
                  Curious about coverage areas, Medicaid eligibility, or our services? We&apos;ll get back to you shortly.
                </p>
              </div>
            )}

            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-14 h-14 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-bold text-2xl">Question Received!</h3>
                <p className="text-foreground/60 text-sm max-w-xs">
                  Thanks for reaching out. We&apos;ll review your question and get back to you shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                  className="text-sm text-primary font-semibold hover:text-primary-hover transition-colors mt-2"
                >
                  Ask another question
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs text-foreground-muted uppercase tracking-widest mb-2 font-medium">Full Name</label>
                    <input
                      id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Jane Smith"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs text-foreground-muted uppercase tracking-widest mb-2 font-medium">Phone</label>
                    <input
                      id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="(614) 555-0000"
                      aria-label="Phone number"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-foreground-muted uppercase tracking-widest mb-2 font-medium">Email</label>
                  <input
                    id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="jane@example.com"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs text-foreground-muted uppercase tracking-widest mb-2 font-medium">Your Question</label>
                  <textarea
                    id="message" name="message" rows={4} value={form.message} onChange={handleChange}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                    placeholder="Ask us anything — coverage areas, Medicaid eligibility, vehicle types, rates..."
                    aria-label="Your question"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Send message"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
      </div>
    </section>
  );
}
