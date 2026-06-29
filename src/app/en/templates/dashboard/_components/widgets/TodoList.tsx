'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import type { Todo } from '../../data/dashboard-data'
import { Badge } from '../common/Badge'

const priorityConfig = {
  urgent: { label: 'Urgent', variant: 'danger' as const },
  important: { label: 'Important', variant: 'warning' as const },
  normal: { label: 'Normal', variant: 'neutral' as const },
}

export function TodoList({ todos: initialTodos }: { todos: Todo[] }) {
  const [todos, setTodos] = useState(initialTodos)

  const toggle = (id: number) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  const today = new Date()
  const dateStr = today.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)] flex-1">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-[var(--font-heading)] font-semibold text-[var(--color-text)]">
            Today&apos;s Tasks
          </h3>
          <p className="text-sm text-[var(--color-text-muted)]">{dateStr}</p>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-md)] text-xs font-medium text-[var(--color-primary)] bg-[var(--color-primary-muted)] hover:bg-[var(--color-primary-border)] transition-colors">
          <Plus size={14} strokeWidth={1.5} />
          Add Task
        </button>
      </div>

      <ul className="divide-y divide-[var(--color-border)]">
        {todos.map((todo) => {
          const config = priorityConfig[todo.priority]
          return (
            <motion.li
              key={todo.id}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-3 py-3"
            >
              <button
                onClick={() => toggle(todo.id)}
                className={`mt-0.5 w-4 h-4 rounded-[4px] border-2 flex items-center justify-center shrink-0 transition-colors ${
                  todo.done
                    ? 'bg-[var(--color-primary)] border-[var(--color-primary)]'
                    : 'border-[var(--color-border-strong)] hover:border-[var(--color-primary)]'
                }`}
              >
                {todo.done && (
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    viewBox="0 0 12 12"
                    className="w-3 h-3 text-white"
                  >
                    <motion.path
                      d="M2 6l3 3 5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                )}
              </button>

              <div className="flex-1 min-w-0 flex items-center gap-2 flex-wrap">
                <span
                  className={`text-sm ${
                    todo.done ? 'line-through opacity-50 text-[var(--color-text-muted)]' : 'text-[var(--color-text)]'
                  }`}
                >
                  {todo.text}
                </span>
                <Badge variant={config.variant}>{config.label}</Badge>
              </div>
            </motion.li>
          )
        })}
      </ul>
    </div>
  )
}
