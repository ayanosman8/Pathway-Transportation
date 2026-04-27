import { company } from "@/config/company";

export default function About() {
  const { about } = company;

  return (
    <section id="about" className="relative py-16 sm:py-24 scroll-mt-16 sm:scroll-mt-20 overflow-hidden" style={{ backgroundColor: "#EDE6DB" }} aria-labelledby="about-heading">

      {/* Large background watermark */}
      <div className="absolute -top-4 right-0 text-[200px] sm:text-[260px] font-extrabold text-primary/[0.04] select-none leading-none pointer-events-none tracking-tighter pr-4">
        PT
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: text */}
          <div className="space-y-8">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <p className="text-primary font-semibold tracking-widest uppercase text-xs">Our Story</p>
            </div>

            {/* Headline */}
            <div>
              <h2 id="about-heading" className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                {about.headline}
                <span className="block text-primary">{about.headlineAccent}</span>
              </h2>
              {/* Decorative underline accent */}
              <div className="mt-4 flex items-center gap-2">
                <div className="h-[3px] w-10 bg-primary" />
                <div className="h-[3px] w-3 bg-primary/30" />
                <div className="h-[3px] w-1.5 bg-primary/15" />
              </div>
            </div>

            {/* Body */}
            <div className="space-y-4 text-foreground/65 leading-relaxed">
              {about.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            {/* Certification Highlight */}
            <div className="bg-primary/10 border-l-4 border-primary p-5 space-y-3">
              <h3 className="font-bold text-base text-foreground">Certified & Compliant</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Pathway Transportation Services is an approved Ohio Medicaid provider with an active NPI number. All of our vehicles are fully inspected and certified by the Ohio Board of Emergency Medical, Fire, and Transportation Services (EMFTS), ensuring the highest standards of safety and compliance.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="space-y-3 pt-2">
              <h3 className="font-bold text-lg">Why Choose Us:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/70">Approved Ohio Medicaid Provider</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/70">NPI Registered</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/70">EMFTS Certified Vehicles</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/70">Safe & Reliable Transportation</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/70">Professional & Friendly Drivers</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/70">Serving Columbus & Surrounding Areas</span>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors group"
            >
              Get in touch
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right: photo with floating card */}
          <div className="relative hidden lg:block">
            {/* Offset border frames */}
            <div className="absolute -top-3 -left-3 w-full h-full border border-primary/25" />
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-border" />

            {/* Photo */}
            <div className="relative overflow-hidden border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80"
                alt="Professional transportation"
                className="w-full h-[460px] object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-foreground/10" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-5 -left-6 bg-primary px-6 py-5 shadow-lg">
              <p className="text-white text-xl font-extrabold leading-none">Medicaid</p>
              <p className="text-white/60 text-[10px] uppercase tracking-widest mt-1.5">Approved Provider</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
