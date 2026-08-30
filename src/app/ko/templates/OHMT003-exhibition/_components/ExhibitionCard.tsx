import Link from 'next/link';
import type { Exhibition } from '../types';

export default function ExhibitionCard({ exhibition }: { exhibition: Exhibition }) {
  return (
    <Link href={`/ko/templates/OHMT003-exhibition/exhibitions/${exhibition.slug}`} className="group block cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden transition-transform duration-300 ease-out group-hover:-translate-y-1">
        <img src={exhibition.image} alt={exhibition.name} className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105" />
      </div>

      <div className="flex items-center justify-between mt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body)' }}>
          {exhibition.tags.genre} <span className="mx-1.5 opacity-40">·</span> {exhibition.tags.theme}
        </p>
        <span className="text-xs font-semibold uppercase tracking-[0.08em] px-2 py-0.5 bg-black text-white" style={{ fontFamily: 'var(--font-body)' }}>
          {exhibition.tags.ageRating}
        </span>
      </div>

      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.06em] text-[var(--color-text)]" style={{ fontFamily: 'var(--font-body)' }}>
        {exhibition.name}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.06em] text-[var(--color-text-muted)]" style={{ fontFamily: 'var(--font-body)' }}>
        {exhibition.dateFrom} - {exhibition.dateTo}
      </p>
    </Link>
  );
}
