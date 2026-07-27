'use client'

import { useState } from 'react'
import { Plus } from '@phosphor-icons/react'

const faqs = [
  ['Can I choose exact varieties?', 'Each box follows the current harvest, but you can choose the category. We list the exact varieties before dispatch.'],
  ['Do you ship berries nationwide?', 'Berries are local courier only. They are too delicate for long routes without adding packaging we do not want to use.'],
  ['Is the orchard certified organic?', 'Yes. We farm organically and keep packing notes tied to each harvest block.'],
  ['What happens if weather changes the crop?', 'We delay, substitute, or refund before shipping. Fruit is never sent just to keep a calendar promise.'],
]

export function FaqAccordion() {
  const [open, setOpen] = useState(0)

  return (
    <section className="border-t border-[var(--color-border)] py-20 lg:py-28">
      <div className="grid grid-cols-12 gap-y-8 sm:gap-x-10 lg:gap-x-16">
        <div className="col-span-12 lg:col-span-4">
          <p className="ledger-num text-sm font-bold text-[var(--color-accent)]">06 · FAQ</p>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight sm:text-4xl">
            Practical answers before you order.
          </h2>
        </div>
        <div className="col-span-12 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)] lg:col-span-8">
          {faqs.map(([question, answer], index) => {
            const active = open === index
            return (
              <div key={question} className="py-7">
                <button
                  type="button"
                  onClick={() => setOpen(active ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 text-left"
                >
                  <span className="text-base font-semibold">{question}</span>
                  <Plus className={`shrink-0 transition-transform duration-200 ${active ? 'rotate-45' : ''}`} size={18} />
                </button>
                {active ? <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text-muted)]">{answer}</p> : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
