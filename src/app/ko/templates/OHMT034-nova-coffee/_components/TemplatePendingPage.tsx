import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'

type TemplatePendingPageProps = {
  eyebrow: string
  title: string
  description: string[]
  backHref: string
  backLabel: string
}

export function TemplatePendingPage({
  eyebrow,
  title,
  description,
  backHref,
  backLabel,
}: TemplatePendingPageProps) {
  return (
    <main className="flex min-h-[calc(100dvh-73px)] items-center bg-[var(--color-bg)] px-5 py-20 md:px-8">
      <div className="mx-auto w-full max-w-[1440px]">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-[860px] font-display text-[length:var(--text-h1)] font-bold tracking-tight text-[var(--color-text)]">
          {title}
        </h1>
        <p className="mt-7 max-w-[680px] text-sm leading-[1.8] text-[var(--color-text-muted)] md:text-base">
          {description.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <Link
          href={backHref}
          className="mt-10 inline-flex items-center gap-3 border border-[var(--color-text)] bg-[var(--color-text)] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-transparent hover:text-[var(--color-text)]"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          {backLabel}
        </Link>
      </div>
    </main>
  )
}
