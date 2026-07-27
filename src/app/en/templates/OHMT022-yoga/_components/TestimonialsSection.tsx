import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[var(--color-border)]">
      <div className="min-h-[50vh] md:min-h-[60vh] bg-cover bg-center"
           style={{ backgroundImage: "url('/templates/OHMT022-yoga/cta-bg.jpg')" }} />

      <div className="flex flex-col justify-between bg-[var(--color-bg-dark)]">
        <div className="px-8 md:px-12 pt-10 pb-6 border-b border-white/20">
          <p className="text-xs tracking-[0.25em] uppercase text-white/30 font-normal"
             style={{ fontFamily: "var(--font-body)" }}>
            Begin Your Journey
          </p>
        </div>

        <div className="flex-1 flex items-center px-8 md:px-12 py-12">
          <h2 className="text-[length:var(--text-h2)] font-normal text-white leading-[var(--leading-heading)] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-heading)" }}>
            Your First Class
            <br />
            Is On Us
          </h2>
        </div>

        <div className="px-8 md:px-12 py-8 border-t border-white/20">
          <p className="text-sm text-white/35 leading-loose max-w-[300px] font-normal mb-7"
             style={{ fontFamily: "var(--font-body)" }}>
            Come experience what mindful movement can do. Your first class is free.
          </p>
          <Link href="/en/templates/OHMT022-yoga/schedule"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white hover:text-white/70 group transition-colors font-medium"
            style={{ fontFamily: "var(--font-body)" }}>
            Book Free Class
            <span className="group-hover:translate-x-1 transition-all"><ArrowRight size={14} className="inline" /></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
