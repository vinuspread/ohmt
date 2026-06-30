const steps = [
  {
    number: "01",
    title: "Consultation",
    desc: "We begin with a deep dive into your vision, space, and goals to understand what success looks like for you.",
  },
  {
    number: "02",
    title: "Design",
    desc: "Our team creates a tailored wellness concept — from layout and equipment to programming and brand alignment.",
  },
  {
    number: "03",
    title: "Staffing",
    desc: "We recruit, train, and certify your team through Vitalis Academy to ensure consistent quality from day one.",
  },
  {
    number: "04",
    title: "Management",
    desc: "Ongoing operational support, performance tracking, and continuous improvement — we handle the details.",
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-[var(--bg)] py-24 md:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,4vw,48px)] text-[var(--text)] leading-[1.15] tracking-tight mb-16">
          Our process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <p className="font-['Montserrat'] text-[48px] font-bold text-[var(--accent-soft)] leading-none mb-4">{step.number}</p>
              <h3 className="font-['Montserrat'] font-semibold text-[18px] text-[var(--text)] mb-3">{step.title}</h3>
              <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 -right-4 text-[var(--border)] text-2xl">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
