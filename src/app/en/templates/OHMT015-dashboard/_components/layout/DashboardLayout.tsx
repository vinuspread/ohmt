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
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
        <Sidebar
          collapsed={collapsed}
          onToggle={() => setCollapsed((p) => !p)}
          mobileOpen={mobileOpen}
          onMobileClose={() => setMobileOpen(false)}
        />
        <Header title={title} collapsed={collapsed} onMenuClick={() => setMobileOpen(true)} />
        <main
          className={`pt-16 min-h-screen transition-all duration-300 ease-in-out max-lg:pl-0 ${
            collapsed ? 'pl-14' : 'pl-56'
          }`}
        >
          <div className="p-4 lg:p-6">{children}</div>
        </main>
      </div>
    </ThemeProvider>
  )
}
