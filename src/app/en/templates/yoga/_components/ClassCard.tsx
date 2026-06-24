import Link from "next/link";
import type { YogaClass } from "../types";

interface ClassCardProps {
  yogaClass: YogaClass;
}

export default function ClassCard({ yogaClass }: ClassCardProps) {
  return (
    <Link
      href={`/en/templates/OHMT022-yoga-EN/classes/${yogaClass.slug}`}
      className="group block border-b border-[var(--color-border)]"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] ease-out scale-100 group-hover:scale-110"
          style={{ backgroundImage: `url('${yogaClass.image}')` }}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700" />
      </div>

      {/* Text */}
      <div className="px-6 py-8 bg-[var(--color-bg)]">
        <p
          className="text-[11px] tracking-[0.22em] uppercase text-[var(--color-text-muted)] mb-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {yogaClass.level} · {yogaClass.duration}
        </p>
        <h3
          className="text-[18px] font-normal text-[var(--color-text)] leading-[1.2] tracking-[-0.01em]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {yogaClass.name}
        </h3>
        <p
          className="mt-3 text-[13px] text-[var(--color-text-muted)] leading-[1.75]"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {yogaClass.description}
        </p>
        <span
          className="inline-block mt-5 text-[11px] tracking-[0.2em] uppercase text-[var(--color-text)] font-medium border-b border-[var(--color-text)] pb-0.5 group-hover:opacity-60 transition-opacity"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Learn More &rarr;
        </span>
      </div>
    </Link>
  );
}
