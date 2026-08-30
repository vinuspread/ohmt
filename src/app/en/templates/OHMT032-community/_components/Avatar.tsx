const textSizeClass = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
}

export function Avatar({ label, size = 'md' }: { label: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClass = {
    sm: 'h-7 w-7',
    md: 'h-9 w-9',
    lg: 'h-11 w-11',
  }[size]

  return (
    <span
      className={`${sizeClass} ${textSizeClass[size]} relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--color-accent-soft)] font-semibold text-[var(--color-accent)] ring-2 ring-white`}
      aria-hidden="true"
    >
      {label.slice(0, 2).toUpperCase()}
    </span>
  )
}
