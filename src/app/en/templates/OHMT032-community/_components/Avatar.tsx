const AVATAR_PALETTE = [
  { bg: '#FDE8D7', text: '#B45309' },
  { bg: '#DBEAFE', text: '#1D4ED8' },
  { bg: '#DCFCE7', text: '#15803D' },
  { bg: '#FCE7F3', text: '#BE185D' },
  { bg: '#EDE9FE', text: '#6D28D9' },
  { bg: '#FEF3C7', text: '#92400E' },
]

function paletteFor(label: string) {
  let hash = 0
  for (let i = 0; i < label.length; i++) {
    hash = (hash * 31 + label.charCodeAt(i)) >>> 0
  }
  return AVATAR_PALETTE[hash % AVATAR_PALETTE.length]
}

export function Avatar({ label, size = 'md' }: { label: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClass = {
    sm: 'h-7 w-7 text-xs',
    md: 'h-9 w-9 text-sm',
    lg: 'h-11 w-11 text-base',
  }[size]
  const { bg, text } = paletteFor(label)

  return (
    <span
      className={`${sizeClass} relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full font-semibold ring-2 ring-white`}
      style={{ backgroundColor: bg, color: text }}
      aria-hidden="true"
    >
      {label.slice(0, 1)}
    </span>
  )
}
