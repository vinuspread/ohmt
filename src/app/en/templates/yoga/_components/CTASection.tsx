import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-[var(--color-bg-alt)] border-b border-[var(--color-border)]">
      <div className="flex flex-col md:flex-row md:items-stretch divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]">
        <div className="flex-1 px-8 md:px-14 lg:px-20 py-16 md:py-20">
          <p
            className="text-[12px] tracking-[0.25em] uppercase text-[var(--color-text-muted)] mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Our Classes
          </p>
          <h2
            className="text-[clamp(2.4rem,5vw,4.5rem)] font-normal text-[var(--color-text)] leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Find Your
            <br />
            Practice
          </h2>
        </div>

        <div className="flex flex-col justify-between px-8 md:px-14 lg:px-20 py-16 md:py-20 md:max-w-[360px]">
          <p
            className="text-[15px] text-[var(--color-text-muted)] leading-[1.9]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Vinyasa, Hatha, Meditation, Pilates.
            <br />
            Every level. Every body.
          </p>
          <Link
            href="/en/templates/yoga/classes"
            className="mt-8 inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[var(--color-text)] hover:text-[var(--color-text-muted)] group transition-colors font-medium"
            style={{ fontFamily: "var(--font-body)" }}
          >
            View All Classes
            <span className="group-hover:translate-x-1 transition-all">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
