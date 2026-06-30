const milestones = [
  { year: "2018", title: "Founded", desc: "Vitalis opens its flagship studio in Gangnam with a vision to redefine boutique wellness." },
  { year: "2019", title: "First consignment", desc: "Awarded our first hotel partnership\u00A0— managing wellness facilities for a 5-star property in Jongno." },
  { year: "2021", title: "5 locations", desc: "Expanded to 5 partner locations across Seoul, including luxury residences and corporate campuses." },
  { year: "2023", title: "Vitalis Academy", desc: "Launched our in-house training academy to certify trainers in Vitalis\u2019 proprietary methodology." },
  { year: "2026", title: "12 partners", desc: "Now trusted by 12 premier hospitality partners with 3,200+ annual members and 98% satisfaction rate." },
];

export function StudioTimeline() {
  return (
    <section className="bg-[var(--bg)] py-24 md:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,4vw,48px)] text-[var(--text)] leading-[1.15] tracking-tight mb-16">
          Studio timeline
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-[var(--border)]" />
          <div className="hidden md:grid grid-cols-5 gap-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative text-center">
                <div className="w-3 h-3 bg-[var(--accent)] rounded-full mx-auto mb-8 relative z-10" />
                <p className="font-['Montserrat'] font-bold text-[32px] text-[var(--accent)] leading-none mb-2">{m.year}</p>
                <p className="font-['Montserrat'] font-semibold text-[14px] text-[var(--text)] mb-2">{m.title}</p>
                <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="md:hidden relative pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-[var(--border)]">
            {milestones.map((m) => (
              <div key={m.year} className="relative pb-10 last:pb-0">
                <div className="absolute left-[-20px] top-1.5 w-3 h-3 bg-[var(--accent)] rounded-full z-10" />
                <p className="font-['Montserrat'] font-bold text-[24px] text-[var(--accent)] leading-none mb-1">{m.year}</p>
                <p className="font-['Montserrat'] font-semibold text-[14px] text-[var(--text)] mb-1">{m.title}</p>
                <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
