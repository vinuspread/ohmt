'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type LabelRowProps = {
  label: string
  link?: { label: string; href: string }
  onPrev?: () => void
  onNext?: () => void
}

export function LabelRow({ label, link, onPrev, onNext }: LabelRowProps) {
  return (
    <div className="flex h-16 items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-bg)] px-4 lg:px-6">
      <div className="flex items-baseline gap-4">
        <span className="meta-label text-[var(--color-ink)]">{label}</span>
        {link ? (
          <Link
            href={link.href}
            className="meta-label text-[var(--color-ink-faint)] transition-colors duration-150 hover:text-[var(--color-accent)]"
          >
            {link.label}
          </Link>
        ) : null}
      </div>
      {onPrev && onNext ? (
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={`Scroll ${label} backward`}
            onClick={onPrev}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-ink)] transition-colors duration-150 hover:border-[var(--color-ink)]"
          >
            <ChevronLeft size={16} aria-hidden />
          </button>
          <button
            type="button"
            aria-label={`Scroll ${label} forward`}
            onClick={onNext}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-ink)] transition-colors duration-150 hover:border-[var(--color-ink)]"
          >
            <ChevronRight size={16} aria-hidden />
          </button>
        </div>
      ) : null}
    </div>
  )
}
