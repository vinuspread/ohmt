'use client'

import { motion } from 'framer-motion'

export interface Column<T> {
  key: string
  label: string
  render?: (item: T) => React.ReactNode
  className?: string
}

export function DataTable<T extends { id: string | number }>({
  columns,
  data,
  onRowClick,
}: {
  columns: Column<T>[]
  data: T[]
  onRowClick?: (item: T) => void
}) {
  return (
    <>
      <div className="hidden overflow-x-auto sm:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`text-left text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)] font-medium px-4 py-3 ${col.className || ''}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.03 }}
                onClick={() => onRowClick?.(item)}
                className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg-hover)] cursor-pointer transition-colors"
              >
                {columns.map((col) => (
                  <td key={col.key} className={`px-4 py-3 text-[var(--color-text)] ${col.className || ''}`}>
                    {col.render ? col.render(item) : (item as Record<string, unknown>)[col.key] as React.ReactNode}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="divide-y divide-[var(--color-border)] sm:hidden">
        {data.map((item, i) => (
          <motion.button
            key={item.id}
            type="button"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: i * 0.03 }}
            onClick={() => onRowClick?.(item)}
            className="block w-full p-4 text-left transition-colors hover:bg-[var(--color-bg-hover)]"
          >
            <dl className="space-y-3">
              {columns.map((col) => (
                <div key={col.key} className="flex min-w-0 items-start justify-between gap-3">
                  <dt className="shrink-0 text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                    {col.label}
                  </dt>
                  <dd className="min-w-0 text-right text-sm text-[var(--color-text)]">
                    {col.render ? col.render(item) : (item as Record<string, unknown>)[col.key] as React.ReactNode}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.button>
        ))}
      </div>
    </>
  )
}
