'use client'

import { FormEvent, useMemo, useState } from 'react'
import Link from 'next/link'
import { Bookmark, FileText, Heart, MessageCircle, Send } from 'lucide-react'
import { Avatar } from '../Avatar'
import { categories } from '../../data/categories-data'
import { comments as initialComments, type Comment } from '../../data/comments-data'
import { posts, type Post } from '../../data/posts-data'

const base = '/ko/templates/OHMT032-community'

export function PostDetailClient({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [content, setContent] = useState('')
  const [comments, setComments] = useState<Comment[]>(() => initialComments.filter((comment) => comment.postId === post.id))
  const category = categories.find((item) => item.slug === post.category)
  const sameCategory = posts.filter((item) => item.category === post.category)
  const currentIndex = sameCategory.findIndex((item) => item.id === post.id)
  const prevPost = currentIndex > 0 ? sameCategory[currentIndex - 1] : undefined
  const nextPost = currentIndex >= 0 && currentIndex < sameCategory.length - 1 ? sameCategory[currentIndex + 1] : undefined
  const rootComments = useMemo(() => comments.filter((comment) => !comment.parentId), [comments])

  const submitComment = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = content.trim()
    if (!trimmed) return
    setComments((current) => [
      ...current,
      {
        id: `local-${Date.now()}`,
        postId: post.id,
        author: { name: '방문자', avatar: '방' },
        content: trimmed,
        createdAt: '방금 전',
        likes: 0,
      },
    ])
    setContent('')
  }

  return (
    <article className="space-y-5">
      <header className="rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] p-6">
        <div className="flex flex-wrap items-center gap-2">
          <FileText size={24} strokeWidth={1.8} className="text-[var(--color-accent)]" />
          <Link href={`${base}/board/${post.category}`} className="inline-flex h-7 items-center rounded-full bg-[var(--color-accent-soft)] px-2.5 text-xs font-semibold text-[var(--color-accent)]">
            {category?.name ?? post.category}
          </Link>
        </div>
        <h1 className="mt-3 max-w-3xl text-2xl font-semibold leading-[var(--leading-heading)] text-[var(--color-text)] md:text-4xl">{post.title}</h1>
        <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-[var(--color-text-muted)]">
          <div className="flex items-center gap-2.5">
            <Avatar label={post.author.avatar} />
            <div>
              <p className="font-semibold text-[var(--color-text)]">{post.author.name}</p>
              <p>{post.author.level}</p>
            </div>
          </div>
          <span>{post.createdAt}</span>
          <span>조회 {post.views.toLocaleString()}</span>
        </div>
      </header>

      <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
        <div className="space-y-4 text-sm leading-7 text-[var(--color-text-secondary)]">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-1.5">
          <button type="button" onClick={() => setLiked((value) => !value)} className={`inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-semibold ${liked ? 'bg-[var(--color-secondary)] text-[var(--color-text-contrast)]' : 'bg-[var(--color-bg-secondary)] text-[var(--color-text)]'}`}>
            <Heart size={14} strokeWidth={1.8} />
            좋아요 {post.likes + (liked ? 1 : 0)}
          </button>
          <button type="button" onClick={() => setSaved((value) => !value)} className={`inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-semibold ${saved ? 'bg-[var(--color-secondary)] text-[var(--color-text-contrast)]' : 'bg-[var(--color-bg-secondary)] text-[var(--color-text)]'}`}>
            <Bookmark size={14} strokeWidth={1.8} />
            {saved ? '스크랩됨' : '스크랩'}
          </button>
        </div>
      </section>

      <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-[var(--color-text)]">
          <MessageCircle size={24} strokeWidth={1.8} className="text-[var(--color-accent)]" />
          댓글 {comments.length}
        </h2>
        <div className="mt-5 space-y-4">
          {rootComments.map((comment) => (
            <div key={comment.id} className="space-y-3">
              <CommentItem comment={comment} />
              {comments.filter((reply) => reply.parentId === comment.id).map((reply) => (
                <div key={reply.id} className="ml-8 border-l border-[var(--color-border)] pl-4">
                  <CommentItem comment={reply} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <form onSubmit={submitComment} className="mt-6 flex gap-2">
          <input
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className="h-10 min-w-0 flex-1 rounded-full border border-[#E6E8EC] bg-[#F8F9FB] px-3.5 text-xs text-[var(--color-text)] placeholder:text-[#9AA1AD]"
            placeholder="댓글을 입력하세요"
          />
          <button type="submit" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-text-contrast)] hover:bg-[var(--color-accent-hover)]" aria-label="댓글 등록">
            <Send size={16} strokeWidth={1.8} />
          </button>
        </form>
      </section>

      <nav className="grid gap-3 md:grid-cols-2">
        {[prevPost, nextPost].map((item, index) => (
          item ? (
            <Link key={item.id} href={`${base}/post/${item.id}`} className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 hover:bg-[var(--color-bg-secondary)]">
              <p className="text-xs font-semibold text-[var(--color-text-muted)]">{index === 0 ? '이전글' : '다음글'}</p>
              <p className="mt-1 text-xs font-semibold text-[var(--color-text)]">{item.title}</p>
            </Link>
          ) : (
            <div key={index} className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 text-xs text-[var(--color-text-muted)]">
              {index === 0 ? '이전글이 없습니다' : '다음글이 없습니다'}
            </div>
          )
        ))}
      </nav>
    </article>
  )
}

function CommentItem({ comment }: { comment: Comment }) {
  return (
    <div className="flex gap-3">
      <Avatar label={comment.author.avatar} size="sm" />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs font-semibold text-[var(--color-text)]">{comment.author.name}</p>
          <p className="text-xs text-[var(--color-text-muted)]">{comment.createdAt}</p>
        </div>
        <p className="mt-1 text-xs leading-5 text-[var(--color-text-secondary)]">{comment.content}</p>
      </div>
    </div>
  )
}
