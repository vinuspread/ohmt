import Link from 'next/link'
import { clsx } from 'clsx'

type Variant = 'outline' | 'outline-inverse' | 'solid' | 'solid-accent' | 'solid-white'

const styles: Record<Variant, string> = {
  outline:
    'border border-[var(--color-ink)] bg-white text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-on-dark)]',
  'outline-inverse':
    'border border-[var(--color-on-dark)] text-[var(--color-on-dark)] hover:bg-[var(--color-on-dark)] hover:text-[var(--color-ink)]',
  solid:
    'bg-[var(--color-ink)] text-[var(--color-on-dark)] border border-[var(--color-ink)] hover:opacity-90',
  'solid-accent':
    'bg-[var(--color-accent)] text-white border border-[var(--color-accent)] hover:opacity-90',
  'solid-white':
    'border border-[rgba(27,27,24,0.2)] bg-white text-[var(--color-ink)] hover:opacity-90',
}

const base =
  'ui-label inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 transition-[background-color,color,opacity,transform] duration-150 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-40'

type ButtonProps = {
  variant?: Variant
  href?: string
  className?: string
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  ariaLabel?: string
}

export function Button({
  variant = 'outline',
  href,
  className,
  children,
  onClick,
  type = 'button',
  disabled,
  ariaLabel,
}: ButtonProps) {
  const cls = clsx(base, styles[variant], className)
  if (href) {
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
