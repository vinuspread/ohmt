import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[var(--color-border)]">
      <div className="flex flex-col justify-end px-8 md:px-14 lg:px-20 py-16 md:py-24 bg-[var(--color-bg-medium)]">
        <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-6"
           style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
          Our Philosophy
        </p>
        <h2 className="text-[length:var(--text-h1)] font-normal text-white leading-[var(--leading-heading)] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}>
          The Heart of
          <br />
          Movement
        </h2>
        <p className="mt-8 text-base text-white/50 leading-loose max-w-[360px]"
           style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
          We believe true wellness begins from within. Movement is medicine &mdash; a daily practice that
          restores balance and reconnects you to yourself.
        </p>
        <div className="mt-10 pt-8 border-t border-white/10">
          <Link href="/en/templates/OHMT022-yoga/about"
            className="inline-flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-white hover:text-white/70 group transition-colors font-medium"
            style={{ fontFamily: "var(--font-body)" }}>
            Our Story
            <span className="group-hover:translate-x-1 transition-all"><ArrowRight size={14} className="inline" /></span>
          </Link>
        </div>
      </div>
      <div className="min-h-[60vh] md:min-h-[80vh] bg-cover bg-center"
           style={{ backgroundImage: "url('/templates/OHMT022-yoga/intro.jpg')" }} />
    </section>
  );
}
