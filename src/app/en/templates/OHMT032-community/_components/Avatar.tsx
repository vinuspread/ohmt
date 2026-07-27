import Image from 'next/image'

export function Avatar({ label, size = 'md' }: { label: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClass = {
    sm: 'h-7 w-7',
    md: 'h-9 w-9',
    lg: 'h-11 w-11',
  }[size]
  const dimensions = {
    sm: 28,
    md: 36,
    lg: 44,
  }[size]
  const seed = encodeURIComponent(label)

  return (
    <span className={`${sizeClass} relative inline-flex shrink-0 overflow-hidden rounded-full bg-[var(--color-accent-soft)] ring-2 ring-white`} aria-hidden="true">
      <Image
        src={`https://picsum.photos/seed/ohmt032-${seed}/96/96`}
        alt=""
        width={dimensions}
        height={dimensions}
        sizes={`${dimensions}px`}
        className="h-full w-full object-cover"
      />
    </span>
  )
}
