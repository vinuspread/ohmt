import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'

type TemplatePendingPageProps = {
  eyebrow: string
  title: string
  description: string[]
  backHref: string
  backLabel: string
}

export default function TemplatePendingPage({
  eyebrow,
  title,
  description,
  backHref,
  backLabel,
}: TemplatePendingPageProps) {
  return (
    <main className="flex min-h-[calc(100dvh-80px)] items-center bg-[var(--color-bg)] px-4 py-20 sm:px-6 lg:px-10">
      <div className="w-full max-w-4xl">
        <p className="ledger-num text-xs font-bold text-[var(--color-accent)]">
          {eyebrow}
        </p>
        <h1 className="copy-heading mt-5 max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-semibold leading-[var(--leading-heading)] text-[var(--color-text)] sm:text-6xl">
          {title}
        </h1>
        <p className="copy-body mt-7 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
          {description.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <Link
          href={backHref}
          className="mt-10 inline-flex min-h-11 items-center gap-2 rounded bg-[var(--color-bg-dark)] px-6 text-sm font-bold text-[var(--color-text-contrast)] transition-opacity duration-200 hover:opacity-80"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          {backLabel}
        </Link>
      </div>
    </main>
  )
}
