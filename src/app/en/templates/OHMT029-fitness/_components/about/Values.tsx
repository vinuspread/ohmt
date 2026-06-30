const values = [
  {
    title: "Certified Trainers",
    desc: "Every trainer completes Vitalis Academy's rigorous certification program before leading their first session.",
  },
  {
    title: "Curated Experience",
    desc: "From 1:1 coaching to small-group sessions — every program is designed around individual goals and preferences.",
  },
  {
    title: "Proven Excellence",
    desc: "98% member satisfaction rate and industry-leading retention across all partner locations.",
  },
];

export function Values() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 md:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,4vw,48px)] text-[var(--text)] leading-[1.15] tracking-tight mb-16">
          What sets us apart
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-lg p-8 border border-[var(--border)] hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <h3 className="font-['Montserrat'] font-semibold text-[18px] text-[var(--text)] mb-3">{v.title}</h3>
              <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
