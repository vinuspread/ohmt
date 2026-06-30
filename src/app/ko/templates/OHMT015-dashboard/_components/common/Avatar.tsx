'use client'

import Image from 'next/image'

const bgPalette = [
  'bg-[var(--color-primary)]',
  'bg-[var(--color-success)]',
  'bg-[var(--color-warning)]',
  'bg-[var(--color-info)]',
  'bg-[var(--color-danger)]',
]

function hashColor(name: string): number {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return Math.abs(hash) % bgPalette.length
}

export function Avatar({
  name,
  src,
  size = 'md',
  className = '',
}: {
  name: string
  src?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  className?: string
}) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
  const colorClass = bgPalette[hashColor(name)]
  const sizeClass = size === 'xs' ? 'w-6 h-6 text-[10px]' : size === 'sm' ? 'w-8 h-8 text-xs' : size === 'lg' ? 'w-16 h-16 text-xl' : 'w-10 h-10 text-sm'

  if (src) {
    return (
      <div className={`${sizeClass} rounded-[var(--radius-full)] overflow-hidden shrink-0 ${className}`}>
        <Image src={src} alt={name} width={64} height={64} className="w-full h-full object-cover" />
      </div>
    )
  }

  return (
    <div
      className={`${colorClass} ${sizeClass} rounded-[var(--radius-full)] flex items-center justify-center font-[var(--font-heading)] font-medium text-white shrink-0 ${className}`}
    >
      {initials}
    </div>
  )
}
