'use client'

import { useState } from 'react'
import { ChevronDown, Info, ShieldCheck } from 'lucide-react'

import { faqs } from '../../data/faqs-data'

export function AboutClient() {
  const [openIndex, setOpenIndex] = useState(0)
  const openJoin = () => window.dispatchEvent(new Event('ohmt032:join'))

  return (
    <div className="space-y-5">
      <section className="rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] p-6">
        <p className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-accent)]">
          <Info size={24} strokeWidth={1.8} />
          About
        </p>
        <h1 className="mt-2.5 text-3xl font-semibold leading-[var(--leading-heading)] text-[var(--color-text)] md:text-5xl">
          A community structure built for reusable knowledge
        </h1>
        <div className="mt-4 max-w-3xl space-y-3 text-sm leading-6 text-[var(--color-text-secondary)]">
          <p>OHMT Community is a board-style template for organizing questions, resources, reviews, and notices around a focused topic.</p>
          <p>The three-column layout keeps frequent categories and popular discussions visible, then collapses into drawer navigation on mobile.</p>
          <p>Static data makes it useful for presenting a community MVP or validating screen structure before connecting a CMS.</p>
        </div>
      </section>

      <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-[var(--color-text)]">
          <ShieldCheck size={24} strokeWidth={1.8} className="text-[var(--color-accent)]" />
          Community Rules
        </h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {['Questions include context and attempted solutions.', 'Resources include links or source names when available.', 'Reviews share the process, not only the result.', 'Critique focuses on content and methods, not people.'].map((rule) => (
            <div key={rule} className="rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] p-6 text-xs leading-5 text-[var(--color-text-secondary)]">
              {rule}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
        <h2 className="text-xl font-semibold text-[var(--color-text)]">FAQ</h2>
        <div className="mt-4 divide-y divide-[var(--color-border)]">
          {faqs.map((faq, index) => (
            <div key={faq.q} className="py-3.5">
              <button
                type="button"
                onClick={() => setOpenIndex((value) => (value === index ? -1 : index))}
                className="flex w-full items-center justify-between gap-4 text-left text-sm font-semibold text-[var(--color-text)]"
              >
                {faq.q}
                <ChevronDown size={18} strokeWidth={1.7} className={openIndex === index ? 'rotate-180 transition' : 'transition'} />
              </button>
              {openIndex === index && <p className="mt-2.5 text-xs leading-5 text-[var(--color-text-muted)]">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[var(--radius-lg)] bg-[var(--color-secondary)] p-6 text-[var(--color-text-contrast)]">
        <h2 className="text-xl font-semibold">Start your community template now</h2>
        <p className="mt-2 max-w-2xl text-xs leading-5 text-white/72">Includes board structure, detail pages, comments, and a membership inquiry flow.</p>
        <button type="button" onClick={openJoin} className="mt-4 inline-flex h-8 items-center rounded-full bg-white px-3 text-xs font-semibold text-[var(--color-secondary)] hover:bg-white/90">
          Open Membership Inquiry
        </button>
      </section>
    </div>
  )
}
