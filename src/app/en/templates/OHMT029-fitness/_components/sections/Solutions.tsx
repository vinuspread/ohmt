const solutions = [
  {
    title: "Recovery",
    desc: "Science-backed recovery protocols for optimal restoration and injury prevention.",
    image: "/templates/OHMT029-fitness/program-recovery.jpg",
  },
  {
    title: "Strength",
    desc: "Precision strength training for every\u00A0body\u00A0\u2014 from beginners to elite athletes.",
    image: "/templates/OHMT029-fitness/program-strength.jpg",
  },
  {
    title: "Balance",
    desc: "Mind-body harmony through curated movement sequences and breathwork.",
    image: "/templates/OHMT029-fitness/program-mobility.jpg",
  },
  {
    title: "Relaxation",
    desc: "Deep relaxation techniques in a serene, private studio environment.",
    image: "/templates/OHMT029-fitness/cta-bg.jpg",
  },
];

export function Solutions() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 md:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,4vw,48px)] text-[var(--text)] leading-[1.15] tracking-tight mb-16">
          Our Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="group bg-[var(--bg)] rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div
                className="aspect-square bg-cover bg-center"
                style={{ backgroundImage: `url('${s.image}')` }}
              />
              <div className="p-6">
                <h3 className="font-['Montserrat'] font-semibold text-[18px] text-[var(--text)] mb-2">{s.title}</h3>
                <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
