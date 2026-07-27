import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

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
    <section
      aria-labelledby="pending-page-title"
      className="flex min-h-[calc(100dvh-64px)] items-center bg-[var(--color-bg)] px-4 py-20 sm:px-6 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <p className="meta-label text-[var(--color-accent)]">{eyebrow}</p>
        <h1
          id="pending-page-title"
          className="mt-5 max-w-3xl text-4xl font-semibold leading-[var(--leading-heading)] text-[var(--color-ink)] sm:text-6xl"
        >
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--color-ink-muted)]">
          {description.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <Link
          href={backHref}
          className="ui-label mt-10 inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--color-ink)] px-6 text-white transition-opacity duration-200 hover:opacity-80"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          {backLabel}
        </Link>
      </div>
    </section>
  )
}
