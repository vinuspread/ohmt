import Link from 'next/link'

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
    <main className="flex min-h-[calc(100dvh-72px)] items-center bg-[var(--color-bg)] px-5 py-20 md:px-8">
      <div className="mx-auto w-full max-w-[1440px]">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-[760px] font-display text-[length:var(--text-h1)] font-semibold tracking-tight text-[var(--color-text)]">
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
          className="mt-10 inline-flex min-h-11 items-center justify-center rounded-[4px] bg-[#1a1a1a] px-6 text-sm font-semibold text-white transition-opacity duration-300 hover:opacity-80"
        >
          {backLabel}
        </Link>
      </div>
    </main>
  )
}
