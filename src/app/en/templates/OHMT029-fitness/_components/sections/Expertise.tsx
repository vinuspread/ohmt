const base = "/en/templates/OHMT029-fitness";

const expertiseBlocks = [
  {
    title: "Vitalis Academy",
    desc: "A rigorous in-house certification program ensuring every trainer meets our exacting standards before they step onto the floor.",
    href: `${base}/about`,
  },
  {
    title: "Quality Assurance",
    desc: "Consistent service delivery across all locations through regular audits, member feedback loops, and continuous improvement protocols.",
    href: `${base}/consignment`,
  },
  {
    title: "Custom Programs",
    desc: "Bespoke wellness solutions for hotels, corporates, and residential properties — designed around your brand and your guests.",
    href: `${base}/programs`,
  },
];

export function Expertise() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 md:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,4vw,48px)] text-[var(--text)] leading-[1.15] tracking-tight mb-16">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--border)] border border-[var(--border)] rounded-lg overflow-hidden">
          {expertiseBlocks.map((block) => (
            <div
              key={block.title}
              className="bg-white p-10 flex flex-col hover:bg-[var(--bg-alt)] transition-colors"
            >
              <h3 className="font-['Montserrat'] font-semibold text-[18px] text-[var(--text)] mb-3">{block.title}</h3>
              <p className="text-[14px] text-[var(--text-muted)] leading-relaxed flex-1">{block.desc}</p>
              <a
                href={block.href}
                className="inline-block mt-6 text-[13px] font-medium text-[var(--accent)] hover:underline tracking-wide"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
