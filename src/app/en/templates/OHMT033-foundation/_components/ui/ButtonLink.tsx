'use client'

import Link from 'next/link'
import { ArrowUpRight } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

const MotionLink = motion.create(Link)

type ButtonVariant = 'dark' | 'light' | 'outline' | 'primary'
type ButtonSize = 'sm' | 'md'

const variantClass: Record<ButtonVariant, string> = {
  dark:
    'border-[var(--color-text)] bg-[var(--color-text)] text-white hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)]',
  light: 'border-white bg-white text-[var(--color-secondary)] hover:bg-transparent hover:text-white',
  outline: 'border-[var(--color-text)] text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-white',
  primary: 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white hover:bg-white hover:text-[var(--color-primary)]',
}

const sizeClass: Record<ButtonSize, string> = {
  sm: 'gap-2 py-2 pl-4 pr-2 text-sm',
  md: 'gap-3 py-3 pl-6 pr-3 text-sm',
}

export function ButtonLink({
  href,
  children,
  variant = 'dark',
  size = 'md',
  showIcon = true,
  className = '',
  onClick,
}: {
  href: string
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  showIcon?: boolean
  className?: string
  onClick?: () => void
}) {
  return (
    <MotionLink
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`group inline-flex w-fit shrink-0 items-center justify-center border font-semibold leading-none transition-colors duration-300 focus-visible:outline-[var(--focus-outline)] focus-visible:outline-offset-[var(--focus-outline-offset)] ${variantClass[variant]} ${sizeClass[size]} ${className}`}
    >
      <span>{children}</span>
      {showIcon ? (
        <span className="flex h-4 w-4 items-center justify-center transition-colors duration-300">
          <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
        </span>
      ) : null}
    </MotionLink>
  )
}
