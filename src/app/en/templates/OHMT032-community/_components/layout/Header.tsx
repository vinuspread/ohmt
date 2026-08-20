'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Megaphone, Menu, Search, UserPlus } from 'lucide-react'

export function Header({
  onMenuClick,
  onJoinClick,
}: {
  onMenuClick: () => void
  onJoinClick: () => void
}) {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = query.trim()
    router.push(trimmed ? `/en/templates/OHMT032-community/board?q=${encodeURIComponent(trimmed)}` : '/en/templates/OHMT032-community/board')
  }

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-[var(--color-border)] bg-white/86 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-2.5 px-4 lg:px-6">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-[var(--radius-md)] p-1.5 text-[var(--color-text)] hover:bg-[var(--color-bg-hover)] lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={18} strokeWidth={1.8} />
        </button>
        <a href="/en/templates/OHMT032-community" className="shrink-0 text-lg font-semibold text-[var(--color-text)]">
          AGORA Community
        </a>

        <form onSubmit={submitSearch} className="relative ml-auto hidden w-full max-w-[420px] md:block">
          <Search size={16} strokeWidth={1.7} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="h-9 w-full rounded-full border border-[#E6E8EC] bg-[#F8F9FB] pl-9 pr-3 text-sm text-[var(--color-text)] placeholder:text-[#9AA1AD]"
            placeholder="Search posts..."
            type="search"
          />
        </form>

        <button
          type="button"
          onClick={onJoinClick}
          className="ml-auto inline-flex h-9 items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-3.5 text-xs font-semibold text-[var(--color-text-contrast)] hover:bg-[var(--color-accent-hover)] md:ml-0"
        >
          <UserPlus size={14} strokeWidth={1.8} />
          Join
        </button>
      </div>
      </header>
      <div className="h-20 border-t border-[#2F3137] bg-[#2F3137]">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-3 px-4 lg:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
              <Megaphone size={24} strokeWidth={1.8} />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">Start community operations faster</p>
              <p className="mt-0.5 hidden truncate text-xs text-white/64 sm:block">A ready structure for notices, questions, and reviews</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onJoinClick}
            className="inline-flex h-8 shrink-0 items-center rounded-full bg-white px-3 text-xs font-semibold text-[#2F3137] hover:bg-white/90"
          >
            Inquire
          </button>
        </div>
      </div>
    </>
  )
}
