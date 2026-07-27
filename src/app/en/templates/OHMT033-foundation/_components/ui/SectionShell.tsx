type SectionSurface = 'default' | 'white' | 'muted' | 'fine'

const surfaceClass: Record<SectionSurface, string> = {
  default: 'bg-[var(--color-bg)]',
  white: 'bg-white',
  muted: 'bg-[var(--color-section-muted)]',
  fine: 'ohmt033-fine-surface bg-[var(--color-bg)]',
}

export function SectionShell({
  children,
  surface = 'default',
  borderBottom = false,
  className = '',
  innerClassName = '',
}: {
  children: React.ReactNode
  surface?: SectionSurface
  borderBottom?: boolean
  className?: string
  innerClassName?: string
}) {
  return (
    <section
      className={`${surfaceClass[surface]} px-6 py-16 md:px-12 md:py-32 ${
        borderBottom ? 'border-b border-[var(--color-border)]' : ''
      } ${className}`}
    >
      <div className={`mx-auto max-w-[var(--container-width)] ${innerClassName}`}>{children}</div>
    </section>
  )
}

export function RuleHeader({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`border-t border-[var(--color-text)] pt-6 ${className}`}>{children}</div>
}
