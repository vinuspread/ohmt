'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { DashboardLayout } from '../_components/layout/DashboardLayout'
import { PageHeader } from '../_components/common/PageHeader'
import { Badge } from '../_components/common/Badge'
import { DataTable, type Column } from '../_components/common/DataTable'
import { orders, orderStats, type Order, type OrderStatus } from '../data/orders-data'

const statusFilter: (OrderStatus | 'all')[] = ['all', 'pending', 'processing', 'shipped', 'completed', 'cancelled']

const statusBadgeVariant: Record<OrderStatus, 'success' | 'warning' | 'info' | 'danger' | 'primary' | 'neutral'> = {
  pending: 'warning',
  processing: 'info',
  shipped: 'primary',
  completed: 'success',
  cancelled: 'danger',
}

const PAGE_SIZE = 6

function OrderDetailPanel({ order, onClose }: { order: Order; onClose: () => void }) {
  return (
    <motion.div
      initial={{ x: 400 }}
      animate={{ x: 0 }}
      exit={{ x: 400 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed right-0 top-16 bottom-0 w-[360px] bg-[var(--color-bg-elevated)] border-l border-[var(--color-border)] z-20 shadow-elevated overflow-y-auto"
      style={{ boxShadow: 'var(--shadow-elevated)' }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-base font-[var(--font-heading)] font-semibold text-[var(--color-text)]">
            Order #{order.id}
          </h3>
          <button onClick={onClose} className="p-1 rounded-[var(--radius-md)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)] transition-colors">
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-xs text-[var(--color-text-muted)] mb-1">Date</p>
            <p className="text-sm text-[var(--color-text)]">{order.date}, 2026</p>
          </div>
          <div>
            <p className="text-xs text-[var(--color-text-muted)] mb-1">Customer</p>
            <p className="text-sm text-[var(--color-text)]">{order.customer}</p>
          </div>
          <div>
            <p className="text-xs text-[var(--color-text-muted)] mb-1">Email</p>
            <p className="text-sm text-[var(--color-text)]">{order.email}</p>
          </div>
          <div>
            <p className="text-xs text-[var(--color-text-muted)] mb-1">Plan</p>
            <p className="text-sm text-[var(--color-text)]">{order.plan}</p>
          </div>
          <div>
            <p className="text-xs text-[var(--color-text-muted)] mb-1">Amount</p>
            <p className="text-sm font-[var(--font-mono)] text-[var(--color-text)]">${order.amount}</p>
          </div>
          <div>
            <p className="text-xs text-[var(--color-text-muted)] mb-1">Status</p>
            <Badge variant={statusBadgeVariant[order.status]}>
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </Badge>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function OrdersPage() {
  const [activeStatus, setActiveStatus] = useState<OrderStatus | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  const filtered = orders.filter((o) => {
    if (activeStatus !== 'all' && o.status !== activeStatus) return false
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      return o.customer.toLowerCase().includes(q) || o.id.toString().includes(q)
    }
    return true
  })

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const columns: Column<Order>[] = [
    { key: 'id', label: 'ID', render: (o) => <span className="font-[var(--font-mono)] text-[var(--color-text-muted)]">#{o.id}</span> },
    { key: 'customer', label: 'Customer', render: (o) => <span className="font-medium text-[var(--color-text)]">{o.customer}</span> },
    { key: 'plan', label: 'Plan', render: (o) => <span className="text-[var(--color-text-secondary)]">{o.plan}</span> },
    { key: 'amount', label: 'Amount', render: (o) => <span className="font-[var(--font-mono)]">${o.amount}</span>, className: 'text-right' },
    { key: 'status', label: 'Status', render: (o) => <Badge variant={statusBadgeVariant[o.status]}>{o.status.charAt(0).toUpperCase() + o.status.slice(1)}</Badge> },
    { key: 'date', label: 'Date', render: (o) => <span className="text-[var(--color-text-muted)]">{o.date}</span> },
  ]

  return (
    <DashboardLayout title="Orders">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-3"
      >
        <PageHeader
          title="Orders"
          action={
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search size={16} strokeWidth={1.5} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
                <input
                  type="text"
                  placeholder="Search orders..."
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setPage(1) }}
                  className="w-56 pl-9 pr-3 py-2 text-sm bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary-border)] transition-colors"
                />
              </div>
            </div>
          }
        />

        <div className="grid grid-cols-4 gap-3">
          {[
            { label: 'Total', value: orderStats.total, color: 'var(--color-text)' },
            { label: 'Pending', value: orderStats.pending, color: 'var(--color-warning)' },
            { label: 'Shipped', value: orderStats.shipped, color: 'var(--color-primary)' },
            { label: 'Completed', value: orderStats.completed, color: 'var(--color-success)' },
          ].map((stat) => (
            <div key={stat.label} className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]">
              <p className="text-xs text-[var(--color-text-muted)] mb-1">{stat.label}</p>
              <p className="text-2xl font-[var(--font-mono)] font-bold" style={{ color: stat.color }}>{stat.value.toLocaleString()}</p>
            </div>
          ))}
        </div>

        <div className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] border border-[var(--color-border)] overflow-hidden">
          <div className="flex gap-1 p-3 border-b border-[var(--color-border)]">
            {statusFilter.map((s) => (
              <button
                key={s}
                onClick={() => { setActiveStatus(s); setPage(1) }}
                className={`px-3 py-1 rounded-[var(--radius-sm)] text-xs font-medium transition-colors ${
                  activeStatus === s
                    ? 'bg-[var(--color-primary-muted)] text-[var(--color-primary)]'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-hover)]'
                }`}
              >
                {s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>

          <DataTable columns={columns} data={paginated} onRowClick={setSelectedOrder} />

          {totalPages > 1 && (
            <div className="flex items-center justify-between px-4 py-3 border-t border-[var(--color-border)]">
              <span className="text-xs text-[var(--color-text-muted)]">
                Page {page} of {totalPages}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="p-1 rounded-[var(--radius-sm)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)] disabled:opacity-40 transition-colors"
                >
                  <ChevronLeft size={16} strokeWidth={1.5} />
                </button>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`w-7 h-7 rounded-[var(--radius-sm)] text-xs font-medium transition-colors ${
                      page === i + 1
                        ? 'bg-[var(--color-primary-muted)] text-[var(--color-primary)]'
                        : 'text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)]'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="p-1 rounded-[var(--radius-sm)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)] disabled:opacity-40 transition-colors"
                >
                  <ChevronRight size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          )}
        </div>

        <AnimatePresence>
          {selectedOrder && (
            <OrderDetailPanel order={selectedOrder} onClose={() => setSelectedOrder(null)} />
          )}
        </AnimatePresence>
      </motion.div>
    </DashboardLayout>
  )
}
