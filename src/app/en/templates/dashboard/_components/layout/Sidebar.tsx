'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, TrendingUp, FileText, Calendar, Package, ShoppingCart, Users, Settings, UserCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { Avatar } from '../common/Avatar'

const menuGroups = [
  {
    label: 'Main',
    items: [
      { label: 'Dashboard', href: '/en/templates/OHMT015-dashboard-EN', icon: LayoutDashboard },
      { label: 'Analytics', href: '/en/templates/OHMT015-dashboard-EN/analytics', icon: TrendingUp },
      { label: 'Reports', href: '/en/templates/OHMT015-dashboard-EN/reports', icon: FileText },
    ],
  },
  {
    label: 'Manage',
    items: [
      { label: 'Orders', href: '/en/templates/OHMT015-dashboard-EN/orders', icon: ShoppingCart },
      { label: 'Customers', href: '/en/templates/OHMT015-dashboard-EN/customers', icon: Users },
      { label: 'Calendar', href: '/en/templates/OHMT015-dashboard-EN/calendar', icon: Calendar },
    ],
  },
  {
    label: 'Account',
    items: [
      { label: 'Settings', href: '/en/templates/OHMT015-dashboard-EN/settings', icon: Settings },
      { label: 'Profile', href: '/en/templates/OHMT015-dashboard-EN/profile', icon: UserCircle },
    ],
  },
]

export function Sidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  const pathname = usePathname()

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-[var(--color-bg-elevated)] border-r border-[var(--color-border)] z-30 flex flex-col transition-all duration-300 ease-in-out ${
        collapsed ? 'w-[56px]' : 'w-[220px]'
      }`}
    >
      <div className="h-16 flex items-center px-4 border-b border-[var(--color-border)]">
        {!collapsed && (
          <span className="text-lg font-[var(--font-heading)] font-semibold text-[var(--color-primary)]">
            Oh My Template
          </span>
        )}
      </div>

      {/* Toggle button - floats on the right edge, vertically centered */}
      <button
        onClick={onToggle}
        className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center bg-[var(--color-bg-elevated)] text-[var(--color-primary)] border border-[var(--color-primary-border)] hover:bg-[var(--color-primary)] hover:text-white transition-all z-40"
      >
        {collapsed ? <ChevronRight size={13} strokeWidth={2} /> : <ChevronLeft size={13} strokeWidth={2} />}
      </button>

      <nav className="flex-1 overflow-y-auto py-4 space-y-6">
        {menuGroups.map((group) => (
          <div key={group.label}>
            {!collapsed && (
              <p className="text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-muted)] font-medium px-3 mb-2">
                {group.label}
              </p>
            )}
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center text-sm transition-colors ${
                        collapsed
                          ? 'justify-center mx-auto w-9 h-9 rounded-[var(--radius-md)]'
                          : 'gap-3 py-2 pl-3 pr-3'
                      } ${
                        isActive
                          ? collapsed
                            ? 'bg-[var(--color-primary-muted)] text-[var(--color-primary)] font-medium'
                            : 'bg-[var(--color-primary-muted)] text-[var(--color-primary)] font-medium rounded-[var(--radius-md)]'
                          : collapsed
                            ? 'rounded-[var(--radius-md)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text)]'
                            : 'rounded-[var(--radius-md)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text)]'
                      }`}
                    >
                      <Icon size={18} strokeWidth={1.5} />
                      {!collapsed && <span>{item.label}</span>}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className={`border-t border-[var(--color-border)] flex items-center ${collapsed ? 'justify-center p-2' : 'gap-3 p-4'}`}>
        <Avatar name="Morgan Chen" src="/templates/OHMT007-portfolio/portfolio-1.jpg" size="sm" />
        {!collapsed && (
          <div className="min-w-0">
            <p className="text-sm font-medium text-[var(--color-text)] truncate">Morgan Chen</p>
            <p className="text-xs text-[var(--color-text-muted)] truncate">morgan@ohmytemplate.io</p>
          </div>
        )}
      </div>
    </aside>
  )
}
