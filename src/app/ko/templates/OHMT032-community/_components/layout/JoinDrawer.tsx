'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export function JoinDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  if (!open) return null

  const mailto = `mailto:hello@ohmytemplate.io?subject=${encodeURIComponent('AGORA 커뮤니티 가입 문의')}&body=${encodeURIComponent(
    `이름: ${name}\n이메일: ${email}\n문의내용: ${message}`,
  )}`

  return (
    <>
      <button className="fixed inset-0 z-40 bg-black/30 text-left" aria-label="가입 문의 닫기" onClick={onClose} />
      <aside className="fixed right-0 top-0 z-50 h-dvh w-full max-w-[420px] overflow-y-auto bg-[var(--color-bg-elevated)] p-6 shadow-[var(--shadow-card)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-[var(--color-accent)]">가입 문의</p>
            <h2 className="mt-1 text-xl font-semibold text-[var(--color-text)]">커뮤니티를 시작해 보세요</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)]"
            aria-label="닫기"
          >
            <X size={20} strokeWidth={1.7} />
          </button>
        </div>

        <div className="mt-6 space-y-3.5">
          <label className="block">
            <span className="text-xs font-semibold text-[var(--color-text)]">이름</span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-2 h-9 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 text-xs text-[var(--color-text)]"
              placeholder="홍길동"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-[var(--color-text)]">이메일</span>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 h-9 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 text-xs text-[var(--color-text)]"
              placeholder="hello@example.com"
              type="email"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-[var(--color-text)]">문의내용</span>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="mt-2 min-h-28 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-2.5 text-xs leading-5 text-[var(--color-text)]"
              placeholder="운영하려는 커뮤니티 주제와 필요한 기능을 적어 주세요."
            />
          </label>
        </div>

        <a
          href={mailto}
          className="mt-5 inline-flex h-9 w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-3.5 text-xs font-semibold text-[var(--color-text-contrast)] hover:bg-[var(--color-accent-hover)]"
        >
          메일로 문의 보내기
        </a>
      </aside>
    </>
  )
}
