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
    <div className="overflow-x-auto">
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
  )
}
