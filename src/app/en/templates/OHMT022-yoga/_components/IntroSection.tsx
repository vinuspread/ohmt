import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-end px-8 md:px-14 lg:px-20 py-16 md:py-24 bg-[var(--color-bg-medium)]">
        <p className="mb-6 text-sm font-medium tracking-[0.08em] uppercase text-white/65"
           style={{ fontFamily: "var(--font-body)" }}>
          How We Teach
        </p>
        <h2 className="ohmt-display-leading text-[length:var(--text-h1)] font-medium tracking-[-0.02em] text-white"
            style={{ fontFamily: "var(--font-heading)" }}>
          Notice what
          <br />
          your body needs
        </h2>
        <p className="mt-8 max-w-[400px] text-base leading-relaxed text-white/70"
           style={{ fontFamily: "var(--font-body)" }}>
          Each class starts with breath and a short check-in. Your instructor adjusts pace, range, and props to how your body feels that day.
        </p>
        <div className="mt-10 pt-8">
          <Link href="/en/templates/OHMT022-yoga/about"
            className="inline-flex border-b border-white/45 pb-1 text-sm font-medium text-white transition-colors hover:text-white/70"
            style={{ fontFamily: "var(--font-body)" }}>
            See how classes work
          </Link>
        </div>
      </div>
      <div className="min-h-[60vh] md:min-h-[80vh] bg-cover bg-center"
           style={{ backgroundImage: "url('/templates/OHMT022-yoga/intro.jpg')" }} />
    </section>
  );
}
