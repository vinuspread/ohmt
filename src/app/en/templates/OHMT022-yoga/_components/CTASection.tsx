import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-[var(--color-secondary)] text-white">
      <div className="grid gap-12 px-8 py-16 md:grid-cols-[minmax(0,7fr)_minmax(18rem,5fr)] md:items-end md:px-14 md:py-24 lg:px-20">
        <div>
          <p
            className="mb-5 text-sm font-medium tracking-[0.08em] uppercase text-white/75"
            style={{ fontFamily: "var(--font-body)" }}
          >
            New to the studio
          </p>
          <h2
            className="text-[length:var(--text-h1)] font-medium leading-[var(--leading-heading)] tracking-[-0.02em] text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Start slowly with
            <br />
            Hatha Yoga
          </h2>
        </div>

        <div>
          <p
            className="max-w-md text-base leading-relaxed text-white/80"
            style={{ fontFamily: "var(--font-body)" }}
          >
            This class takes time with foundational poses. Props are ready at the studio, and your instructor checks any discomfort before you begin.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/templates/OHMT022-yoga/classes/hatha-yoga"
              className="inline-flex min-h-12 items-center bg-[var(--color-accent)] px-6 text-sm font-semibold text-[var(--color-text)] transition-colors hover:bg-[#D2A57D]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Explore Hatha Yoga
            </Link>
            <Link
              href="/en/templates/OHMT022-yoga/schedule"
              className="inline-flex min-h-12 items-center border border-white/35 px-6 text-sm font-semibold text-white transition-colors hover:border-white/70"
              style={{ fontFamily: "var(--font-body)" }}
            >
              View this week&apos;s schedule
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
