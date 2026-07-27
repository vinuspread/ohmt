'use client'

import { motion } from 'framer-motion'

type ActionVariant = 'primary' | 'dark' | 'outline'

const variantClass: Record<ActionVariant, string> = {
  primary: 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white hover:bg-white hover:text-[var(--color-primary)]',
  dark: 'border-[var(--color-text)] bg-[var(--color-text)] text-white hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)]',
  outline: 'border-[var(--color-text)] text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-white',
}

export function ActionButton({
  children,
  type = 'button',
  variant = 'primary',
  className = '',
}: {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  variant?: ActionVariant
  className?: string
}) {
  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`inline-flex w-fit shrink-0 items-center justify-center border px-6 py-3 text-sm font-semibold leading-none transition-colors duration-300 focus-visible:outline-[var(--focus-outline)] focus-visible:outline-offset-[var(--focus-outline-offset)] ${variantClass[variant]} ${className}`}
    >
      {children}
    </motion.button>
  )
}
