import { company } from "@/config/company";

export default function About() {
  const { about } = company;

  return (
    <section id="about" className="relative py-16 sm:py-24 scroll-mt-16 sm:scroll-mt-20 overflow-hidden" style={{ backgroundColor: "#EDE6DB" }}>

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
              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
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

            {/* Stats — bordered cards */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {about.stats.map((stat) => (
                <div key={stat.label} className="border border-primary/20 bg-background/60 px-4 py-4 text-center">
                  <p className="text-2xl font-extrabold text-primary leading-none">{stat.value}</p>
                  <p className="text-[10px] text-foreground-muted mt-2 leading-tight uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
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
              <p className="text-white text-2xl font-extrabold leading-none">10+</p>
              <p className="text-white/60 text-[10px] uppercase tracking-widest mt-1.5">Years of Service</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
