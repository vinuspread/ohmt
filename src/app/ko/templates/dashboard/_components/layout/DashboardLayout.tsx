'use client'

import { useState } from 'react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { ThemeProvider } from './ThemeProvider'

export function DashboardLayout({
  children,
  title = 'Dashboard',
}: {
  children: React.ReactNode
  title?: string
}) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((p) => !p)} />
        <Header title={title} collapsed={collapsed} />
        <main
          className={`pt-16 min-h-screen transition-all duration-300 ease-in-out ${
            collapsed ? 'pl-[56px]' : 'pl-[220px]'
          }`}
        >
          <div className="p-6">{children}</div>
        </main>
      </div>
    </ThemeProvider>
  )
}
