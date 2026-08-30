'use client'

import { useEffect, useState } from 'react'
import { Search, Bell, MessageCircle, Menu } from 'lucide-react'

function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="font-[var(--font-mono)] text-sm text-[var(--color-text-muted)]">
      {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
    </span>
  )
}

export function Header({
  title,
  collapsed,
  onMenuClick,
}: {
  title: string
  collapsed: boolean
  onMenuClick?: () => void
}) {
  return (
    <header
      className={`fixed top-0 right-0 h-16 bg-[var(--color-bg)] border-b border-[var(--color-border)] z-20 flex items-center justify-between px-6 transition-all duration-300 ease-in-out ${
        collapsed ? 'left-[56px]' : 'left-[220px]'
      } max-lg:left-0 max-lg:px-4`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onMenuClick}
          className="p-2 -ml-2 rounded-[var(--radius-md)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)] transition-colors lg:hidden"
        >
          <Menu size={20} strokeWidth={1.5} />
        </button>
        <h2 className="text-lg font-[var(--font-heading)] font-semibold text-[var(--color-text)] truncate">{title}</h2>
      </div>

      <div className="flex items-center gap-1 sm:gap-2">
        <span className="hidden sm:inline-flex"><Clock /></span>

        <button className="hidden p-2 rounded-[var(--radius-md)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)] transition-colors sm:inline-flex">
          <Search size={18} strokeWidth={1.5} />
        </button>

        <button className="p-2 rounded-[var(--radius-md)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)] transition-colors relative">
          <Bell size={18} strokeWidth={1.5} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--color-danger)] rounded-[var(--radius-full)]" />
        </button>

        <button className="p-2 rounded-[var(--radius-md)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)] transition-colors relative">
          <MessageCircle size={18} strokeWidth={1.5} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--color-success)] rounded-[var(--radius-full)]" />
        </button>
      </div>
    </header>
  )
}
