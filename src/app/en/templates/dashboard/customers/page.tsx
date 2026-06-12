'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Plus, LayoutGrid, List } from 'lucide-react'
import { DashboardLayout } from '../_components/layout/DashboardLayout'
import { PageHeader } from '../_components/common/PageHeader'
import { Badge } from '../_components/common/Badge'
import { Avatar } from '../_components/common/Avatar'
import { DataTable, type Column } from '../_components/common/DataTable'
import { customers, customerStats, type Customer } from '../data/customers-data'
import { TemplateWrapper } from '../_components/TemplateWrapper'

type ViewMode = 'grid' | 'list'

function PlanBadge({ plan }: { plan: string }) {
  const variant = plan === 'Enterprise' ? 'primary' : plan === 'Pro' ? 'info' : plan === 'Standard' ? 'neutral' : 'neutral'
  const label = plan === 'Free' ? 'neutral' : variant
  return <Badge variant={variant as 'primary' | 'info' | 'neutral'}>{plan}</Badge>
}

export default function CustomersPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = customers.filter((c) => {
    if (!searchQuery) return true
    const q = searchQuery.toLowerCase()
    return c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q)
  })

  const columns: Column<Customer>[] = [
    {
      key: 'name', label: 'Customer',
      render: (c) => (
        <div className="flex items-center gap-3">
          <Avatar name={c.name} src={c.avatarUrl} size="sm" />
          <div>
            <p className="text-sm font-medium text-[var(--color-text)]">{c.name}</p>
            <p className="text-xs text-[var(--color-text-muted)]">{c.email}</p>
          </div>
        </div>
      ),
    },
    { key: 'plan', label: 'Plan', render: (c) => <PlanBadge plan={c.plan} /> },
    { key: 'status', label: 'Status', render: (c) => (
      <div className="flex items-center gap-1.5">
        <div className={`w-1.5 h-1.5 rounded-[var(--radius-full)] ${c.status === 'active' ? 'bg-[var(--color-success)]' : 'bg-[var(--color-text-muted)]'}`} />
        <span className="text-sm text-[var(--color-text-secondary)]">{c.status.charAt(0).toUpperCase() + c.status.slice(1)}</span>
      </div>
    )},
    { key: 'joinDate', label: 'Joined', render: (c) => <span className="text-[var(--color-text-muted)]">{c.joinDate}</span> },
  ]

  return (
    <DashboardLayout title="Customers">
      <TemplateWrapper>
        <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-3"
      >
        <PageHeader
          title="Customers"
          action={
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search size={16} strokeWidth={1.5} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
                <input
                  type="text"
                  placeholder="Search customers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-52 pl-9 pr-3 py-2 text-sm bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary-border)] transition-colors"
                />
              </div>
              <div className="flex bg-[var(--color-bg-surface)] rounded-[var(--radius-md)] p-0.5 border border-[var(--color-border)]">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-[var(--radius-sm)] transition-colors ${viewMode === 'grid' ? 'bg-[var(--color-bg-elevated)] text-[var(--color-text)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'}`}
                >
                  <LayoutGrid size={16} strokeWidth={1.5} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-[var(--radius-sm)] transition-colors ${viewMode === 'list' ? 'bg-[var(--color-bg-elevated)] text-[var(--color-text)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'}`}
                >
                  <List size={16} strokeWidth={1.5} />
                </button>
              </div>
              <button className="flex items-center gap-1.5 px-3 py-2 bg-[var(--color-primary)] text-white text-sm font-medium rounded-[var(--radius-md)] hover:bg-[var(--color-primary-hover)] transition-colors">
                <Plus size={16} strokeWidth={1.5} />
                Invite
              </button>
            </div>
          }
        />

        <div className="grid grid-cols-4 gap-3">
          {[
            { label: 'Total', value: customerStats.total, color: 'var(--color-text)' },
            { label: 'Active', value: customerStats.active, color: 'var(--color-success)' },
            { label: 'New / Month', value: customerStats.newPerMonth, color: 'var(--color-info)' },
            { label: 'Churn', value: `${customerStats.churn}%`, color: 'var(--color-warning)' },
          ].map((stat) => (
            <div key={stat.label} className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]">
              <p className="text-xs text-[var(--color-text-muted)] mb-1">{stat.label}</p>
              <p className="text-2xl font-[var(--font-mono)] font-bold" style={{ color: stat.color }}>{typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}</p>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-4 gap-3"
            >
              {filtered.map((customer) => (
                <div
                  key={customer.id}
                  className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)] group"
                >
                  <div className="flex flex-col items-center text-center">
                    <Avatar name={customer.name} src={customer.avatarUrl} size="lg" />
                    <h4 className="mt-3 text-sm font-medium text-[var(--color-text)]">{customer.name}</h4>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{customer.email}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <PlanBadge plan={customer.plan} />
                      <div className={`w-1.5 h-1.5 rounded-[var(--radius-full)] ${customer.status === 'active' ? 'bg-[var(--color-success)]' : 'bg-[var(--color-text-muted)]'}`} />
                    </div>
                    <button className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-medium">
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] border border-[var(--color-border)]"
            >
              <DataTable columns={columns} data={filtered} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
          </TemplateWrapper>
    </DashboardLayout>
  )
}
