import Image from "next/image";
import Link from "next/link";
import type { YogaClass } from "../types";

interface ClassCardProps {
  yogaClass: YogaClass;
  nextSession?: string;
  active?: boolean;
  onActivate?: () => void;
}

const INTENSITY_LABELS = ["", "Low", "Moderate", "High"] as const;

export default function ClassCard({ yogaClass, nextSession, active = false, onActivate }: ClassCardProps) {
  return (
    <article
      className={`group border-b border-[var(--color-border)] transition-colors duration-200 motion-reduce:transition-none ${
        active ? "bg-[var(--color-bg-alt)]" : "bg-[var(--color-bg)]"
      }`}
      onMouseEnter={onActivate}
      onFocus={onActivate}
    >
      <div className="relative aspect-[5/4] overflow-hidden lg:hidden">
        <Image
          src={yogaClass.image}
          alt={`${yogaClass.name} class in progress`}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[260ms] ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="px-6 py-8 md:px-14 md:py-10 lg:px-16">
        <div className="flex items-start justify-between gap-5">
          <div>
            <h3 className="text-2xl font-medium leading-[1.05] tracking-[-0.02em] text-[var(--color-text)] md:text-[28px]">
              {yogaClass.name}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">{yogaClass.subtitle}</p>
          </div>
          <span className="shrink-0 border-l border-[var(--color-border)] pl-4 text-sm text-[var(--color-text-muted)]">
            {yogaClass.duration}
          </span>
        </div>

        <p className="mt-5 max-w-xl text-[15px] leading-7 text-[var(--color-text-muted)]">
          {yogaClass.description}
        </p>

        <dl className="mt-7 grid grid-cols-2 gap-x-5 gap-y-5 border-t border-[var(--color-border)] pt-5 sm:grid-cols-3">
          <div>
            <dt className="text-xs text-[var(--color-text-muted)]">Level</dt>
            <dd className="mt-1 text-sm font-medium text-[var(--color-text)]">{yogaClass.level}</dd>
          </div>
          <div>
            <dt className="text-xs text-[var(--color-text-muted)]">Intensity</dt>
            <dd className="mt-1 text-sm font-medium text-[var(--color-text)]">{INTENSITY_LABELS[yogaClass.intensity]}</dd>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <dt className="text-xs text-[var(--color-text-muted)]">Next class</dt>
            <dd className="mt-1 text-sm font-medium text-[var(--color-text)]">{nextSession ?? "View schedule"}</dd>
          </div>
        </dl>

        <Link
          href={`/en/templates/OHMT022-yoga/classes/${yogaClass.slug}`}
          className="mt-7 inline-flex min-h-11 items-center border-b border-[var(--color-text)] text-sm font-medium text-[var(--color-text)] transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
        >
          View class
        </Link>
      </div>
    </article>
  );
}
