'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Circle, CheckCircle2 } from 'lucide-react'

const initialNotes = [
  { id: 1, text: 'EV9 delivery bottleneck - Incheon port logistics delay', tags: ['Urgent', 'Logistics'], date: 'Jun 10', done: false },
  { id: 2, text: 'GT7 media drive confirmed - 24 press invites sent', tags: ['Done', 'PR'], date: 'Jun 09', done: true },
  { id: 3, text: 'Align with HQ on S3 pricing for EU launch', tags: ['Upcoming', 'Strategy'], date: 'Jun 12', done: false },
  { id: 4, text: 'Dealer NPS score review with regional managers', tags: ['Meeting'], date: 'Jun 11', done: false },
]

const tagColor: Record<string, string> = {
  'Urgent': 'bg-[var(--color-danger-muted,rgba(239,68,68,0.12))] text-[var(--color-danger)]',
  'Done': 'bg-[var(--color-success-muted,rgba(52,211,153,0.12))] text-[var(--color-success)]',
  'Upcoming': 'bg-[var(--color-primary-muted)] text-[var(--color-primary)]',
  'Meeting': 'bg-[var(--color-info-muted,rgba(99,179,237,0.12))] text-[var(--color-info)]',
  'Logistics': 'bg-[var(--color-bg-hover)] text-[var(--color-text-muted)]',
  'PR': 'bg-[var(--color-bg-hover)] text-[var(--color-text-muted)]',
  'Strategy': 'bg-[var(--color-warning-muted,rgba(234,179,8,0.12))] text-yellow-400',
}

export function QuickNotes({ className = '' }: { className?: string }) {
  const [notes, setNotes] = useState(initialNotes)

  const toggle = (id: number) => setNotes(prev => prev.map(n => n.id === id ? { ...n, done: !n.done } : n))

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
      className={`bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)] flex flex-col ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-[var(--color-text)]">Field Notes</h3>
        <button className="flex items-center gap-1 text-xs text-[var(--color-primary)] hover:underline">
          <Plus size={13} strokeWidth={2} /> Add Note
        </button>
      </div>
      <ul className="divide-y divide-[var(--color-border)]">
        {notes.map((note) => (
          <li key={note.id} className="py-3 flex items-start gap-3">
            <button onClick={() => toggle(note.id)} className="mt-0.5 shrink-0 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
              {note.done
                ? <CheckCircle2 size={16} strokeWidth={1.5} className="text-[var(--color-success)]" />
                : <Circle size={16} strokeWidth={1.5} />
              }
            </button>
            <div className="flex-1 min-w-0">
              <p className={`text-sm leading-snug ${note.done ? 'line-through text-[var(--color-text-muted)]' : 'text-[var(--color-text)]'}`}>
                {note.text}
              </p>
              <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                {note.tags.map(tag => (
                  <span key={tag} className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${tagColor[tag] ?? 'bg-[var(--color-bg-hover)] text-[var(--color-text-muted)]'}`}>
                    {tag}
                  </span>
                ))}
                <span className="text-[10px] text-[var(--color-text-muted)] ml-auto">{note.date}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
