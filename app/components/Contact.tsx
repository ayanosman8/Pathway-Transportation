"use client";

import { useState } from "react";
import { company } from "@/config/company";

export default function Contact() {
  const { phone, phoneRaw, email, address } = company;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-16 sm:py-24 scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-primary" />
                <p className="text-primary font-semibold tracking-widest uppercase text-xs">Reach Us</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                Let&apos;s Get You
                <span className="block text-primary">Where You&apos;re Going.</span>
              </h2>
              <p className="text-foreground/60 leading-relaxed">
                Have a question or need to schedule a ride? Fill out the form or reach us directly — we respond promptly.
              </p>
            </div>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-foreground-muted uppercase tracking-widest mb-1 font-medium">Phone</p>
                  <a href={`tel:${phoneRaw}`} className="text-foreground font-medium hover:text-primary transition-colors">{phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-foreground-muted uppercase tracking-widest mb-1 font-medium">Email</p>
                  <a href={`mailto:${email}`} className="text-foreground font-medium hover:text-primary transition-colors">{email}</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-foreground-muted uppercase tracking-widest mb-1 font-medium">Location</p>
                  <p className="text-foreground font-medium">{address.line1}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: form */}
          <div className="bg-card border border-border p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-14 h-14 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-bold text-2xl">Message Sent</h3>
                <p className="text-foreground/60 text-sm max-w-xs">
                  Thank you for reaching out. A member of our team will be in touch shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                  className="text-sm text-primary font-semibold hover:text-primary-hover transition-colors mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-foreground-muted uppercase tracking-widest mb-2 font-medium">Full Name</label>
                    <input
                      name="name" type="text" required value={form.name} onChange={handleChange}
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-foreground-muted uppercase tracking-widest mb-2 font-medium">Phone</label>
                    <input
                      name="phone" type="tel" value={form.phone} onChange={handleChange}
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:border-primary transition-colors"
                      placeholder="(614) 555-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-foreground-muted uppercase tracking-widest mb-2 font-medium">Email</label>
                  <input
                    name="email" type="email" required value={form.email} onChange={handleChange}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:border-primary transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs text-foreground-muted uppercase tracking-widest mb-2 font-medium">Service Needed</label>
                  <select
                    name="service" value={form.service} onChange={handleChange}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    <option>Non-Emergency Medical</option>
                    <option>Corporate &amp; Executive</option>
                    <option>Airport Transfer</option>
                    <option>Senior Transport</option>
                    <option>Event &amp; Group</option>
                    <option>School &amp; Youth</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-foreground-muted uppercase tracking-widest mb-2 font-medium">Message</label>
                  <textarea
                    name="message" rows={4} value={form.message} onChange={handleChange}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your transportation needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
