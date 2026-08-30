'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, FileText, Search } from 'lucide-react'
import { categories, getCategory } from '../../data/categories-data'
import { posts } from '../../data/posts-data'
import { PostCard } from '../PostCard'

type SortKey = 'latest' | 'popular' | 'comments'

const base = '/ko/templates/OHMT032-community'
const pageSize = 8

export function BoardClient({
  categorySlug,
  initialQuery = '',
}: {
  categorySlug?: string
  initialQuery?: string
}) {
  const [sortKey, setSortKey] = useState<SortKey>('latest')
  const [query, setQuery] = useState(initialQuery)
  const [page, setPage] = useState(1)
  const category = categorySlug ? getCategory(categorySlug) : undefined
  const invalidCategory = Boolean(categorySlug && !category)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return posts
      .filter((post) => (!categorySlug || post.category === categorySlug) && !invalidCategory)
      .filter((post) => {
        if (!q) return true
        return `${post.title} ${post.excerpt} ${post.body.join(' ')} ${post.tags.join(' ')}`.toLowerCase().includes(q)
      })
      .sort((a, b) => {
        if (sortKey === 'popular') return b.likes + b.views / 20 - (a.likes + a.views / 20)
        if (sortKey === 'comments') return b.commentCount - a.commentCount
        return b.id.localeCompare(a.id)
      })
  }, [categorySlug, invalidCategory, query, sortKey])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const visiblePosts = filtered.slice((page - 1) * pageSize, page * pageSize)

  return (
    <div className="space-y-5">
      <section className="rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] p-6">
        <p className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-accent)]">
          <FileText size={24} strokeWidth={1.8} />
          {category?.name ?? '전체글'}
        </p>
        <h1 className="mt-2.5 text-3xl font-semibold leading-[var(--leading-heading)] text-[var(--color-text)] md:text-5xl">
          {invalidCategory ? '게시판을 찾을 수 없습니다' : category?.description ?? '커뮤니티의 모든 게시글을 확인하세요'}
        </h1>
      </section>

      <div className="space-y-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
        <div className="flex gap-1.5 overflow-x-auto pb-1">
          <Link href={`${base}/board`} className={`inline-flex h-7 shrink-0 items-center rounded-full px-2.5 text-xs font-semibold ${!categorySlug ? 'bg-[var(--color-secondary)] text-[var(--color-text-contrast)]' : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)]'}`}>
            전체
          </Link>
          {categories.map((item) => (
            <Link
              key={item.slug}
              href={`${base}/board/${item.slug}`}
              className={`inline-flex h-7 shrink-0 items-center rounded-full px-2.5 text-xs font-semibold ${categorySlug === item.slug ? 'bg-[var(--color-secondary)] text-[var(--color-text-contrast)]' : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)]'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <label className="relative block">
            <Search size={16} strokeWidth={1.7} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value)
                setPage(1)
              }}
              className="h-10 w-full rounded-full border border-[#E6E8EC] bg-[#F8F9FB] pl-9 pr-4 text-xs text-[var(--color-text)] placeholder:text-[#9AA1AD]"
              placeholder="제목, 본문, 태그 검색"
              type="search"
            />
          </label>
          <select
            value={sortKey}
            onChange={(event) => {
              setSortKey(event.target.value as SortKey)
              setPage(1)
            }}
            className="h-10 rounded-full border border-[#E6E8EC] bg-[#F8F9FB] px-3 text-xs font-semibold text-[var(--color-text)]"
          >
            <option value="latest">최신순</option>
            <option value="popular">인기순</option>
            <option value="comments">댓글많은순</option>
          </select>
        </div>
      </div>

      {visiblePosts.length > 0 ? (
        <div className="space-y-3">
          {visiblePosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 text-center">
          <h2 className="text-xl font-semibold text-[var(--color-text)]">게시글이 없습니다</h2>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">조건을 바꾸거나 전체 게시판으로 이동해 주세요.</p>
          <Link href={`${base}/board`} className="mt-4 inline-flex h-8 items-center rounded-full bg-[var(--color-accent)] px-3 text-xs font-semibold text-[var(--color-text-contrast)]">
            전체글 보기
          </Link>
        </div>
      )}

      {filtered.length > pageSize && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button type="button" onClick={() => setPage((value) => Math.max(1, value - 1))} className="rounded-full p-1.5 hover:bg-[var(--color-bg-hover)]" aria-label="이전 페이지">
            <ChevronLeft size={16} strokeWidth={1.8} />
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setPage(index + 1)}
              className={`h-7 w-7 rounded-full text-xs font-semibold ${page === index + 1 ? 'bg-[var(--color-secondary)] text-[var(--color-text-contrast)]' : 'text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)]'}`}
            >
              {index + 1}
            </button>
          ))}
          <button type="button" onClick={() => setPage((value) => Math.min(totalPages, value + 1))} className="rounded-full p-1.5 hover:bg-[var(--color-bg-hover)]" aria-label="다음 페이지">
            <ChevronRight size={16} strokeWidth={1.8} />
          </button>
        </div>
      )}
    </div>
  )
}
