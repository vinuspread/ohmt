'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Trash2, Plus, Eye, EyeOff } from 'lucide-react'
import { DashboardLayout } from '../_components/layout/DashboardLayout'
import { PageHeader } from '../_components/common/PageHeader'

type SettingsTab = 'general' | 'notifications' | 'security' | 'api-keys'

const tabs: { id: SettingsTab; label: string }[] = [
  { id: 'general', label: 'General' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'security', label: 'Security' },
  { id: 'api-keys', label: 'API Keys' },
]

function ToggleSwitch({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className="relative w-11 h-6 rounded-full transition-colors"
      style={{ backgroundColor: checked ? 'var(--color-primary)' : 'var(--color-border)' }}
    >
      <motion.div
        className="absolute top-1 w-4 h-4 bg-white rounded-full"
        animate={{ x: checked ? 24 : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </button>
  )
}

const apiKeys = [
  { id: 1, name: 'Production API Key', key: 'vp_live_8a7f3b2c1d9e4f', created: 'Jan 15, 2026' },
  { id: 2, name: 'Staging API Key', key: 'vp_test_3e8f2a1b7c6d5e', created: 'Feb 20, 2026' },
  { id: 3, name: 'Development API Key', key: 'vp_dev_9d4e2f1a8b7c3e', created: 'Mar 10, 2026' },
]

function FormInput({ label, value, type = 'text' }: { label: string; value: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs font-medium text-[var(--color-text-muted)] mb-1.5">{label}</label>
      <input
        type={type}
        defaultValue={value}
        className="w-full px-3 py-2 text-sm bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary-border)] focus:shadow-[var(--shadow-focus)] transition-colors"
      />
    </div>
  )
}

function APIKeyRow({ name, keyValue, created }: { name: string; keyValue: string; created: string }) {
  const [visible, setVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  return (
    <div className="flex items-center justify-between py-3 border-b border-[var(--color-border)] last:border-0">
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-[var(--color-text)]">{name}</p>
        <div className="flex items-center gap-2 mt-1">
          <code className="text-xs font-[var(--font-mono)] text-[var(--color-text-muted)]">
            {visible ? keyValue : `${keyValue.slice(0, 8)}${'•'.repeat(24)}`}
          </code>
          <button onClick={() => setVisible(!visible)} className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
            {visible ? <EyeOff size={14} strokeWidth={1.5} /> : <Eye size={14} strokeWidth={1.5} />}
          </button>
        </div>
        <p className="text-[10px] text-[var(--color-text-muted)] mt-0.5">Created {created}</p>
      </div>
      <div className="flex items-center gap-1">
        <button
          onClick={() => { navigator.clipboard.writeText(keyValue); setCopied(true); setTimeout(() => setCopied(false), 1500) }}
          className="p-1.5 rounded-[var(--radius-sm)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)] transition-colors"
        >
          {copied ? <span className="text-[10px] text-[var(--color-success)]">Copied</span> : <Copy size={14} strokeWidth={1.5} />}
        </button>
        <button className="p-1.5 rounded-[var(--radius-sm)] text-[var(--color-danger)] hover:bg-[var(--color-danger-muted)] transition-colors">
          <Trash2 size={14} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}

function TabContent({ tab }: { tab: SettingsTab }) {
  const [notifs, setNotifs] = useState({
    emailDigest: true,
    orderUpdates: true,
    securityAlerts: true,
    marketingEmails: false,
    productUpdates: true,
    weeklyReport: false,
    teamActivity: true,
    billingAlerts: true,
  })

  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  switch (tab) {
    case 'general':
      return (
        <div className="space-y-5">
          <h4 className="text-sm font-medium text-[var(--color-text)] border-b border-[var(--color-border)] pb-2">General Information</h4>
          <FormInput label="Name" value="Morgan Chen" />
          <FormInput label="Email" value="morgan@ohmytemplate.io" />
          <FormInput label="Company" value="Oh My Template" />
          <div>
            <label className="block text-xs font-medium text-[var(--color-text-muted)] mb-1.5">Timezone</label>
            <select className="w-full px-3 py-2 text-sm bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary-border)] transition-colors">
              <option>UTC+9 (Seoul)</option>
              <option>UTC-8 (PST)</option>
              <option>UTC-5 (EST)</option>
              <option>UTC+0 (GMT)</option>
              <option>UTC+1 (CET)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-[var(--color-text-muted)] mb-2">Theme</label>
            <div className="flex gap-3">
              {['Light', 'Dark', 'System'].map((t) => (
                <label key={t} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="theme" defaultChecked={t === 'Dark'} className="accent-[var(--color-primary)]" />
                  <span className="text-sm text-[var(--color-text)]">{t}</span>
                </label>
              ))}
            </div>
          </div>
          <button className="px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-medium rounded-[var(--radius-md)] hover:bg-[var(--color-primary-hover)] transition-colors">
            Save Changes
          </button>
        </div>
      )

    case 'notifications':
      return (
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-[var(--color-text)] border-b border-[var(--color-border)] pb-2">Notification Preferences</h4>
          {Object.entries(notifs).map(([key, val]) => (
            <div key={key} className="flex items-center justify-between py-1">
              <span className="text-sm text-[var(--color-text)]">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}
              </span>
              <ToggleSwitch checked={val} onChange={(v) => setNotifs({ ...notifs, [key]: v })} />
            </div>
          ))}
        </div>
      )

    case 'security':
      return (
        <div className="space-y-5">
          <div>
            <h4 className="text-sm font-medium text-[var(--color-text)] border-b border-[var(--color-border)] pb-2 mb-4">Change Password</h4>
            <div className="space-y-4">
              <FormInput label="Current Password" type="password" value="••••••••" />
              <div>
                <label className="block text-xs font-medium text-[var(--color-text-muted)] mb-1.5">New Password</label>
                <div className="relative">
                  <input type={showNewPassword ? 'text' : 'password'} defaultValue="••••••••" className="w-full px-3 py-2 text-sm bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary-border)] transition-colors" />
                  <button onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
                    {showNewPassword ? <EyeOff size={16} strokeWidth={1.5} /> : <Eye size={16} strokeWidth={1.5} />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-[var(--color-text-muted)] mb-1.5">Confirm New Password</label>
                <div className="relative">
                  <input type={showConfirmPassword ? 'text' : 'password'} defaultValue="••••••••" className="w-full px-3 py-2 text-sm bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary-border)] transition-colors" />
                  <button onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
                    {showConfirmPassword ? <EyeOff size={16} strokeWidth={1.5} /> : <Eye size={16} strokeWidth={1.5} />}
                  </button>
                </div>
              </div>
              <button className="px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-medium rounded-[var(--radius-md)] hover:bg-[var(--color-primary-hover)] transition-colors">
                Update Password
              </button>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-[var(--color-text)] border-b border-[var(--color-border)] pb-2 mb-4">Two-Factor Authentication</h4>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[var(--color-text)]">2FA via Authenticator App</p>
                <p className="text-xs text-[var(--color-text-muted)]">Add an extra layer of security</p>
              </div>
              <ToggleSwitch checked={false} onChange={() => {}} />
            </div>
          </div>
        </div>
      )

    case 'api-keys':
      return (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-medium text-[var(--color-text)]">API Keys</h4>
            <button className="flex items-center gap-1 px-3 py-1.5 bg-[var(--color-primary)] text-white text-xs font-medium rounded-[var(--radius-md)] hover:bg-[var(--color-primary-hover)] transition-colors">
              <Plus size={14} strokeWidth={1.5} />
              New Key
            </button>
          </div>
          <div className="divide-y divide-[var(--color-border)]">
            {apiKeys.map((k) => (
              <APIKeyRow key={k.id} name={k.name} keyValue={k.key} created={k.created} />
            ))}
          </div>
        </div>
      )
  }
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('general')

  return (
    <DashboardLayout title="Settings">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <PageHeader title="Settings" />

        <div className="flex gap-6">
          <div className="w-48 shrink-0">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-3 py-2 rounded-[var(--radius-md)] text-sm transition-colors relative ${
                    activeTab === tab.id
                      ? 'text-[var(--color-primary)] font-medium'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-hover)]'
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div layoutId="settingsTab" className="absolute inset-0 bg-[var(--color-primary-muted)] rounded-[var(--radius-md)]" />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="flex-1 bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
              >
                <TabContent tab={activeTab} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  )
}
