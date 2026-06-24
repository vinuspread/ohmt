'use client'

type BadgeVariant = 'success' | 'warning' | 'danger' | 'info' | 'primary' | 'neutral'

const variantStyles: Record<BadgeVariant, string> = {
  success: 'bg-[var(--color-success-muted)] text-[var(--color-success)]',
  warning: 'bg-[var(--color-warning-muted)] text-[var(--color-warning)]',
  danger: 'bg-[var(--color-danger-muted)] text-[var(--color-danger)]',
  info: 'bg-[var(--color-info-muted)] text-[var(--color-info)]',
  primary: 'bg-[var(--color-primary-muted)] text-[var(--color-primary)]',
  neutral: 'bg-[var(--color-bg-hover)] text-[var(--color-text-muted)]',
}

export function Badge({
  variant = 'neutral',
  children,
}: {
  variant?: BadgeVariant
  children: React.ReactNode
}) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-[11px] font-medium rounded-[var(--radius-sm)] ${variantStyles[variant]}`}
    >
      {children}
    </span>
  )
}
