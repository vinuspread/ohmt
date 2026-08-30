export function SubpageHeader({
  title,
  description,
  className = '',
}: {
  title: string
  description?: string
  className?: string
}) {
  return (
    <header className={className}>
      <h1 className="font-heading max-w-[900px] text-5xl font-semibold leading-[var(--leading-heading)] text-[var(--color-text)] md:text-6xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-8 max-w-[620px] text-base leading-[var(--leading-body)] text-[var(--color-text-muted)]">
          {description}
        </p>
      ) : null}
    </header>
  )
}
