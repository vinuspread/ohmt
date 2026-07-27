'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export function JoinDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  if (!open) return null

  const mailto = `mailto:hello@ohmytemplate.io?subject=${encodeURIComponent('OHMT Community Membership Inquiry')}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  )}`

  return (
    <>
      <button className="fixed inset-0 z-40 bg-black/30 text-left" aria-label="Close membership inquiry" onClick={onClose} />
      <aside className="fixed right-0 top-0 z-50 h-dvh w-full max-w-[420px] overflow-y-auto bg-[var(--color-bg-elevated)] p-6 shadow-[var(--shadow-card)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-[var(--color-accent)]">Membership Inquiry</p>
            <h2 className="mt-1 text-xl font-semibold text-[var(--color-text)]">Start your community</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)]"
            aria-label="Close"
          >
            <X size={20} strokeWidth={1.7} />
          </button>
        </div>

        <div className="mt-6 space-y-3.5">
          <label className="block">
            <span className="text-xs font-semibold text-[var(--color-text)]">Name</span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-2 h-9 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 text-xs text-[var(--color-text)]"
              placeholder="Jane Smith"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-[var(--color-text)]">Email</span>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 h-9 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 text-xs text-[var(--color-text)]"
              placeholder="hello@example.com"
              type="email"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-[var(--color-text)]">Message</span>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="mt-2 min-h-28 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-2.5 text-xs leading-5 text-[var(--color-text)]"
              placeholder="Tell us about your community topic and the features you need."
            />
          </label>
        </div>

        <a
          href={mailto}
          className="mt-5 inline-flex h-9 w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-3.5 text-xs font-semibold text-[var(--color-text-contrast)] hover:bg-[var(--color-accent-hover)]"
        >
          Send inquiry
        </a>
      </aside>
    </>
  )
}
