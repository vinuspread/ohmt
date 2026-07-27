import { clsx } from 'clsx'

type SubHeroProps = {
  title: string
  label?: string
  description?: string
  children?: React.ReactNode
}

export function SubHero({ title, label, description, children }: SubHeroProps) {
  return (
    <section className="relative flex min-h-[340px] items-end overflow-hidden bg-[var(--color-bg-tile)] pb-14 pt-24 lg:min-h-[380px] lg:pb-16 lg:pt-32">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-6">
        <div
          className={clsx(
            'grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-end',
            !description && !children && 'lg:grid-cols-1',
          )}
        >
          <div>
            {label && <p className="meta-label mb-4 text-[var(--color-ink-faint)]">{label}</p>}
            <h1 className="max-w-[920px] text-5xl font-medium leading-[var(--leading-display)] tracking-tight text-[var(--color-ink)] lg:text-8xl">
              {title}
            </h1>
          </div>
          {(description || children) && (
            <div className="w-full max-w-[560px] lg:justify-self-end">
              {description && (
                <p className="text-base leading-[var(--leading-body)] text-[var(--color-ink-muted)] lg:text-lg">
                  {description}
                </p>
              )}
              {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
