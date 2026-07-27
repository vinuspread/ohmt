'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, FileText, ListChecks, MessageCircle, MessageSquareText, Radio, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { PostCard } from '../PostCard'
import { categories } from '../../data/categories-data'
import { posts } from '../../data/posts-data'

type SortKey = 'latest' | 'popular' | 'comments'

function sortPosts(sortKey: SortKey) {
  return [...posts].sort((a, b) => {
    if (sortKey === 'popular') return b.likes + b.views / 20 - (a.likes + a.views / 20)
    if (sortKey === 'comments') return b.commentCount - a.commentCount
    return b.id.localeCompare(a.id)
  })
}

export function HomeClient() {
  const [sortKey, setSortKey] = useState<SortKey>('latest')
  const [pollChoice, setPollChoice] = useState<string | null>(null)
  const sortedPosts = useMemo(() => sortPosts(sortKey).slice(0, 9), [sortKey])
  const featuredPost = posts.find((post) => post.id === '1001') ?? posts[0]
  const latestQuestion = posts.find((post) => post.category === 'question')
  const categorySummary = categories.map((category) => ({
    ...category,
    count: posts.filter((post) => post.category === category.slug).length,
  }))
  const pollOptions = [
    { label: 'Operations case studies', value: 46 },
    { label: 'Question answer sessions', value: 32 },
    { label: 'Member review roundup', value: 22 },
  ]

  const openJoin = () => window.dispatchEvent(new Event('ohmt032:join'))

  return (
    <div className="space-y-5">
      <section className="rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] p-6">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)]">
            <Sparkles size={24} strokeWidth={1.8} />
            OHMT Community
          </p>
          <h1 className="mt-2.5 text-3xl font-semibold leading-[var(--leading-heading)] text-[var(--color-text)] md:text-5xl">
            A community where questions become the next action
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text-muted)]">
            A community template designed to organize operating notes, questions, reviews, and notices so members can return to useful knowledge.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={openJoin}
              className="inline-flex h-9 items-center rounded-full bg-[var(--color-accent)] px-3.5 text-sm font-semibold text-[var(--color-text-contrast)] hover:bg-[var(--color-accent-hover)]"
            >
              Join
            </button>
            <Link
              href="/en/templates/OHMT032-community/board"
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[var(--color-bg-elevated)] px-3.5 text-sm font-semibold text-[var(--color-text)] ring-1 ring-[var(--color-border)] hover:bg-[var(--color-bg-hover)]"
            >
              Board
              <ArrowRight size={14} strokeWidth={1.8} />
            </Link>
          </div>
        </div>

        <div className="mt-6 grid gap-2.5 sm:grid-cols-3">
          {[
            { label: 'Active members', value: '8,240', icon: Users },
            { label: 'Published posts', value: posts.length.toLocaleString(), icon: FileText },
            { label: 'Comments this month', value: '1,284', icon: MessageCircle },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="rounded-[var(--radius-md)] bg-[var(--color-bg-elevated)] p-6 ring-1 ring-[var(--color-border)]">
                <Icon size={24} strokeWidth={1.8} className="text-[var(--color-accent)]" />
                <p className="mt-2 text-xl font-semibold text-[var(--color-text)]">{item.value}</p>
                <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">{item.label}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="grid gap-3 lg:grid-cols-2">
        <article className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-accent)]">
            <Radio size={24} strokeWidth={1.8} />
            Today Brief
          </div>
          <h2 className="mt-3 max-w-xl text-2xl font-semibold leading-[var(--leading-body)] text-[var(--color-text)]">
            Surface the first posts every new member should read.
          </h2>
          <p className="mt-2 max-w-2xl text-xs leading-5 text-[var(--color-text-muted)]">
            Notices, questions, and reviews are mixed so visitors can understand the tone and participation rules quickly.
          </p>

          <Link
            href={`/en/templates/OHMT032-community/post/${featuredPost.id}`}
            className="mt-4 block rounded-[var(--radius-md)] bg-[#F3F4F6] p-6 hover:bg-[var(--color-bg-hover)]"
          >
            <div className="flex flex-wrap gap-1.5">
              {featuredPost.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="inline-flex h-6 items-center rounded-full bg-[var(--color-accent-soft)] px-2 text-xs font-semibold text-[var(--color-accent)]">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="mt-2 text-base font-semibold leading-6 text-[var(--color-text)]">{featuredPost.title}</h3>
            <p className="mt-1.5 text-xs leading-5 text-[var(--color-text-muted)]">{featuredPost.excerpt}</p>
          </Link>
        </article>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <article className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
            <div className="flex items-center gap-2 text-base font-semibold text-[var(--color-text)]">
              <MessageSquareText size={24} strokeWidth={1.8} className="text-[var(--color-accent)]" />
              Questions to answer
            </div>
            <p className="mt-2 text-xs leading-5 text-[var(--color-text-muted)]">
              {latestQuestion?.title ?? 'Waiting for the next member question.'}
            </p>
            <Link href="/en/templates/OHMT032-community/board/question" className="mt-3 inline-flex h-7 items-center rounded-full bg-[var(--color-accent-soft)] px-2.5 text-xs font-semibold text-[var(--color-accent)]">
              View Questions
            </Link>
          </article>

          <article className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
            <div className="flex items-center gap-2 text-base font-semibold text-[var(--color-text)]">
              <ShieldCheck size={24} strokeWidth={1.8} className="text-[var(--color-accent)]" />
              Moderator checklist
            </div>
            <ul className="mt-2 space-y-2 text-xs leading-5 text-[var(--color-text-muted)]">
              {['Leave the first reply quickly', 'Keep notices and questions distinct', 'Promote useful posts into starter guides'].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 size={16} strokeWidth={1.8} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">Category Flow</h2>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">See which topics are active and move straight into the right board.</p>
          </div>
          <span className="text-xs font-semibold text-[var(--color-accent)]">{posts.length} posts</span>
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
          {categorySummary.map((category) => (
            <Link
              key={category.slug}
              href={`/en/templates/OHMT032-community/board/${category.slug}`}
              className="rounded-[var(--radius-md)] bg-[#F3F4F6] p-6 hover:bg-[var(--color-bg-hover)]"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-[var(--color-text)]">{category.name}</span>
                <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-2 text-xs font-semibold text-[var(--color-accent)] ring-1 ring-[var(--color-border)]">
                  {category.count}
                </span>
              </div>
              <p className="mt-2 line-clamp-2 text-xs leading-5 text-[var(--color-text-muted)]">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-accent)]">
              <ListChecks size={24} strokeWidth={1.8} />
              Weekly Poll
            </div>
            <h2 className="mt-3 text-lg font-semibold leading-[var(--leading-body)] text-[var(--color-text)] lg:whitespace-nowrap xl:text-xl">
              What community operations content should come next?
            </h2>
            <p className="mt-2 text-xs leading-5 text-[var(--color-text-muted)]">
              Poll results feed into the next notice and recommended reading list.
            </p>
          </div>
          <span className="rounded-full bg-[var(--color-bg-secondary)] px-2.5 py-1 text-xs font-semibold text-[var(--color-text-muted)]">
            128 votes
          </span>
        </div>

        <div className="mt-4 grid gap-2">
          {pollOptions.map((option) => {
            const selected = pollChoice === option.label
            return (
              <button
                key={option.label}
                type="button"
                onClick={() => setPollChoice(option.label)}
                className={`group rounded-[var(--radius-md)] border p-6 text-left transition ${
                  selected ? 'border-[var(--color-accent)] bg-[var(--color-accent-soft)]' : 'border-[var(--color-border)] bg-[#F3F4F6] hover:bg-[var(--color-bg-hover)]'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-[var(--color-text)]">{option.label}</span>
                  <span className="text-xs font-semibold text-[var(--color-accent)]">{pollChoice ? `${option.value}%` : 'Vote'}</span>
                </div>
                {pollChoice && (
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white">
                    <div className="h-full rounded-full bg-[var(--color-accent)]" style={{ width: `${option.value}%` }} />
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold text-[var(--color-text)]">Community Feed</h2>
          <div className="flex rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] p-0.5">
            {[
              { key: 'latest', label: 'Latest' },
              { key: 'popular', label: 'Popular' },
              { key: 'comments', label: 'Most Commented' },
            ].map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setSortKey(item.key as SortKey)}
                className={`rounded-[var(--radius-sm)] px-2.5 py-1 text-xs font-semibold ${
                  sortKey === item.key ? 'bg-[var(--color-bg-elevated)] text-[var(--color-text)] shadow-sm' : 'text-[var(--color-text-muted)]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {sortedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <Link
          href="/en/templates/OHMT032-community/board"
          className="inline-flex h-8 items-center gap-1.5 rounded-[var(--radius-md)] px-3 text-xs font-semibold text-[var(--color-accent)] hover:bg-[var(--color-bg-hover)]"
        >
          View All Posts
          <ArrowRight size={14} strokeWidth={1.8} />
        </Link>
      </section>
    </div>
  )
}
