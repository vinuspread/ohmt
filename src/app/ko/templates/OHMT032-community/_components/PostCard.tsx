import Link from 'next/link'
import { Eye, Heart, MessageCircle, Pin, Timer } from 'lucide-react'
import { categories } from '../data/categories-data'
import type { Post } from '../data/posts-data'
import { Avatar } from './Avatar'

export function PostCard({ post }: { post: Post }) {
  const category = categories.find((item) => item.slug === post.category)

  return (
    <article className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition hover:border-[var(--color-border-strong)] hover:bg-white">
      <div className="mb-3 flex flex-wrap items-center gap-1.5">
        {post.pinned && (
          <span className="inline-flex h-6 items-center gap-1 rounded-full bg-[var(--color-secondary)] px-2 text-xs font-medium text-[var(--color-text-contrast)]">
            <Pin size={12} strokeWidth={1.8} />
            고정
          </span>
        )}
        <Link
          href={`/ko/templates/OHMT032-community/board/${post.category}`}
          className="inline-flex h-6 items-center rounded-full bg-[var(--color-accent-soft)] px-2 text-xs font-medium text-[var(--color-accent)]"
        >
          {category?.name ?? post.category}
        </Link>
        {post.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="inline-flex h-6 items-center rounded-full border border-[var(--color-border)] px-2 text-xs font-medium text-[var(--color-text-muted)]">
            #{tag}
          </span>
        ))}
      </div>

      <Link href={`/ko/templates/OHMT032-community/post/${post.id}`} className="group block">
        <h2 className="text-base font-semibold leading-[var(--leading-body)] text-[var(--color-text)] group-hover:text-[var(--color-accent)]">
          {post.title}
        </h2>
        <p className="ohmt032-clamp-2 mt-1.5 text-xs leading-5 text-[var(--color-text-muted)]">{post.excerpt}</p>
      </Link>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <Avatar label={post.author.avatar} size="sm" />
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-[var(--color-text)]">{post.author.name}</p>
            <p className="text-xs text-[var(--color-text-muted)]">{post.createdAt} · {post.author.level}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2.5 text-xs text-[var(--color-text-muted)]">
          <span className="inline-flex items-center gap-1"><Eye size={13} strokeWidth={1.8} className="text-[var(--color-accent)]" />{post.views.toLocaleString()}</span>
          <span className="inline-flex items-center gap-1"><Heart size={13} strokeWidth={1.8} className="text-[var(--color-accent)]" />{post.likes.toLocaleString()}</span>
          <span className="inline-flex items-center gap-1"><MessageCircle size={13} strokeWidth={1.8} className="text-[var(--color-accent)]" />{post.commentCount}</span>
          <span className="inline-flex items-center gap-1"><Timer size={13} strokeWidth={1.8} className="text-[var(--color-accent)]" />{post.readMinutes}분</span>
        </div>
      </div>
    </article>
  )
}
