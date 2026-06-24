'use client'

import { useEffect, useState } from 'react'
import { Search, Bell, MessageCircle, Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'

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

export function Header({ title, collapsed }: { title: string; collapsed: boolean }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <header
      className={`fixed top-0 right-0 h-16 bg-[var(--color-bg)] border-b border-[var(--color-border)] z-20 flex items-center justify-between px-6 transition-all duration-300 ease-in-out ${
        collapsed ? 'left-[56px]' : 'left-[220px]'
      }`}
    >
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-[var(--font-heading)] font-semibold text-[var(--color-text)]">{title}</h2>
      </div>

      <div className="flex items-center gap-2">
        <Clock />

        <button className="p-2 rounded-[var(--radius-md)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)] transition-colors">
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

        <button
          onClick={toggleTheme}
          className="p-2 rounded-[var(--radius-md)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)] transition-colors"
        >
          <motion.div
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {theme === 'dark' ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
          </motion.div>
        </button>
      </div>
    </header>
  )
}
