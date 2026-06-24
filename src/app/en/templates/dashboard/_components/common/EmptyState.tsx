'use client'

export function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      {icon && <div className="text-[var(--color-text-muted)] mb-4 opacity-40">{icon}</div>}
      <h3 className="text-lg font-[var(--font-heading)] font-medium text-[var(--color-text)]">{title}</h3>
      {description && (
        <p className="text-sm text-[var(--color-text-muted)] mt-2 max-w-[320px]">{description}</p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  )
}
