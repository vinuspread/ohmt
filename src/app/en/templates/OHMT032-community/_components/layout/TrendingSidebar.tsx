import Link from 'next/link'
import { Bell, Hash, MessageSquarePlus, TrendingUp } from 'lucide-react'
import { categories } from '../../data/categories-data'
import { posts } from '../../data/posts-data'

const base = '/en/templates/OHMT032-community'

export function TrendingSidebar() {
  const popularPosts = [...posts].sort((a, b) => b.likes + b.views / 20 - (a.likes + a.views / 20)).slice(0, 5)

  return (
    <aside className="hidden w-[280px] shrink-0 space-y-3 lg:block">
      <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
        <h2 className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-text)]">
          <Hash size={20} strokeWidth={1.8} className="text-[var(--color-accent)]" />
          Popular Tags
        </h2>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`${base}/board/${category.slug}`}
              className="inline-flex h-6 items-center rounded-full bg-[var(--color-bg-secondary)] px-2 text-xs font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)]"
            >
              #{category.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
        <h2 className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-text)]">
          <TrendingUp size={20} strokeWidth={1.8} className="text-[var(--color-accent)]" />
          Trending This Week
        </h2>
        <ol className="mt-3 divide-y divide-[var(--color-border)]">
          {popularPosts.map((post, index) => (
            <li key={post.id} className="flex gap-3 py-2.5 first:pt-0 last:pb-0">
              <span className="mt-0.5 w-5 shrink-0 text-base font-semibold leading-5 text-[var(--color-accent)]">{['①', '②', '③', '④', '⑤'][index]}</span>
              <Link href={`${base}/post/${post.id}`} className="text-xs leading-5 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]">
                {post.title}
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-[var(--radius-lg)] bg-[var(--color-secondary)] p-6 text-[var(--color-text-contrast)]">
        <div className="flex items-center gap-2 text-base font-semibold">
          <MessageSquarePlus size={20} strokeWidth={1.8} className="text-white/82" />
          Posting Guide
        </div>
        <p className="mt-2 text-xs leading-5 text-white/72">Questions get better answers when the title includes context and the reply you need.</p>
        <Link href={`${base}/post/1002`} className="mt-3 inline-flex h-6 items-center rounded-full bg-white px-2 text-xs font-semibold text-[var(--color-secondary)]">
          View Example
        </Link>
      </section>

      <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
        <div className="flex items-center gap-2 text-base font-semibold text-[var(--color-text)]">
          <Bell size={20} strokeWidth={1.8} className="text-[var(--color-accent)]" />
          Moderator Notes
        </div>
        <p className="mt-2 text-xs leading-5 text-[var(--color-text-muted)]">Weekly highlights collect active questions and notices.</p>
        <Link href={`${base}/board/notice`} className="mt-3 inline-flex h-6 items-center rounded-full bg-[var(--color-accent-soft)] px-2 text-xs font-semibold text-[var(--color-accent)]">
          View Notices
        </Link>
      </section>
    </aside>
  )
}
