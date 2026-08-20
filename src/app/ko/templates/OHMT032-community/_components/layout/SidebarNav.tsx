'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Info, List, X } from 'lucide-react'
import { categories } from '../../data/categories-data'
import { posts } from '../../data/posts-data'

const base = '/ko/templates/OHMT032-community'

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()
  const links = [
    { label: '홈', href: base, icon: Home },
    { label: '전체글', href: `${base}/board`, icon: List },
    { label: '소개', href: `${base}/about`, icon: Info },
  ]
  const categoryCounts = categories.reduce<Record<string, number>>((acc, category) => {
    acc[category.slug] = posts.filter((post) => post.category === category.slug).length
    return acc
  }, {})

  return (
    <nav className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-2 shadow-[0_8px_24px_rgba(18,24,40,0.04)]">
      <div className="space-y-1">
        {links.map((item) => {
          const Icon = item.icon
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`group flex h-10 items-center gap-2.5 rounded-[14px] px-2.5 text-xs font-semibold transition ${
                active ? 'bg-[var(--color-bg-hover)] text-[var(--color-text)]' : 'text-[var(--color-text-muted)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text)]'
              }`}
            >
              <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${
                active ? 'text-[var(--color-text)]' : 'text-[var(--color-text-muted)]'
              }`}>
                <Icon size={17} strokeWidth={1.8} />
              </span>
              <span className="min-w-0 flex-1">{item.label}</span>
              {item.href.endsWith('/board') && (
                <span className="rounded-full bg-[var(--color-bg-elevated)] px-1.5 text-xs font-semibold text-[var(--color-text-muted)] ring-1 ring-[var(--color-border)]">
                  {posts.length}
                </span>
              )}
            </Link>
          )
        })}
      </div>

      <div className="mt-3 border-t border-[var(--color-border)] pt-3">
        <p className="px-2.5 text-xs font-semibold text-[var(--color-text-muted)]">카테고리</p>
        <div className="mt-2 space-y-1">
          {categories.map((category) => {
            const href = `${base}/board/${category.slug}`
            const active = pathname === href
            return (
              <Link
                key={category.slug}
                href={href}
                onClick={onNavigate}
                className={`flex h-9 items-center justify-between gap-2 rounded-[12px] px-2.5 text-xs transition ${
                  active ? 'bg-[var(--color-accent-soft)] font-semibold text-[var(--color-accent)]' : 'text-[var(--color-text-muted)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text)]'
                }`}
              >
                <span className="min-w-0 truncate">{category.name}</span>
                <span className={`inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-semibold ${
                  active ? 'bg-white text-[var(--color-accent)]' : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)]'
                }`}>
                  {categoryCounts[category.slug] ?? 0}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export function SidebarNav({
  mobileOpen,
  onMobileClose,
}: {
  mobileOpen: boolean
  onMobileClose: () => void
}) {
  return (
    <>
      <aside className="sticky top-24 hidden h-[calc(100dvh-92px)] w-[220px] shrink-0 self-start overflow-y-auto pb-8 lg:block">
        <NavList />
      </aside>
      {mobileOpen && (
        <>
          <button className="fixed inset-0 z-40 bg-black/30 text-left lg:hidden" aria-label="메뉴 닫기" onClick={onMobileClose} />
          <aside className="fixed left-0 top-0 z-50 h-dvh w-[284px] overflow-y-auto bg-[var(--color-bg-elevated)] p-4 shadow-[var(--shadow-card)] lg:hidden">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-semibold text-[var(--color-text)]">AGORA 커뮤니티</span>
              <button type="button" onClick={onMobileClose} className="rounded-full p-2 hover:bg-[var(--color-bg-hover)]" aria-label="닫기">
                <X size={20} strokeWidth={1.7} />
              </button>
            </div>
            <NavList onNavigate={onMobileClose} />
          </aside>
        </>
      )}
    </>
  )
}
