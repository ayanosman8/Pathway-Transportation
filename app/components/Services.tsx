import { company } from "@/config/company";

const icons: Record<string, React.ReactNode> = {
  medical: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  corporate: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
  airport: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
  ),
  senior: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  ),
  group: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    </svg>
  ),
  school: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
  ),
};

export default function Services() {
  const { services } = company;

  return (
    <section id="services" className="scroll-mt-16 sm:scroll-mt-20" aria-labelledby="services-heading">

      {/* Divider strip */}
      <div className="border-t border-b border-border" style={{ backgroundColor: "#EDE6DB" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary">Our Services</span>
          </div>
          <span className="text-xs text-foreground-muted hidden sm:block">Transportation solutions for every need</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* Section header */}
        <div className="mb-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-3">
                Our Services
              </h2>
              <p className="text-foreground/60 leading-relaxed max-w-2xl">
                Pathway Transportation Services provides non-emergency medical transportation in the Columbus, Ohio area including Westerville, Reynoldsburg, Grove City, Dublin, and nearby communities.
              </p>
            </div>
          </div>

          {/* Feature cards - compact */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-card border border-border p-4 space-y-2 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="font-semibold text-sm">Ohio Medicaid Provider</h3>
              </div>
              <p className="text-xs text-foreground/55 leading-relaxed">Approved with active NPI number</p>
            </div>

            <div className="bg-card border border-border p-4 space-y-2 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <h3 className="font-semibold text-sm">EMFTS-Certified</h3>
              </div>
              <p className="text-xs text-foreground/55 leading-relaxed">All vehicles fully inspected & certified</p>
            </div>

            <div className="bg-card border border-border p-4 space-y-2 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <h3 className="font-semibold text-sm">Flexible Scheduling</h3>
              </div>
              <p className="text-xs text-foreground/55 leading-relaxed">Same-day & advance booking</p>
            </div>

            <div className="bg-card border border-border p-4 space-y-2 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <h3 className="font-semibold text-sm">Professional Drivers</h3>
              </div>
              <p className="text-xs text-foreground/55 leading-relaxed">Trained & experienced staff</p>
            </div>
          </div>
        </div>

        {/* Compact service rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background flex items-start gap-4 px-5 py-5 group hover:bg-card transition-colors"
            >
              {/* Icon */}
              <div className="w-9 h-9 border border-border flex items-center justify-center text-foreground-muted group-hover:border-primary group-hover:text-primary shrink-0 transition-colors mt-0.5">
                {icons[service.icon]}
              </div>
              {/* Text */}
              <div className="min-w-0">
                <h3 className="font-semibold text-sm mb-1">{service.title}</h3>
                <p className="text-foreground/55 text-xs leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
