import type { Metadata } from 'next'
import { BASE } from '../data/figures'
import { Button } from '../_components/ui/Button'
import { SubHero } from '../_components/ui/SubHero'

export const metadata: Metadata = {
  title: 'OHMT - Forma Figures | Shipping & Returns',
  description:
    'How FORMA packs, ships, and handles claims for numbered resin and vinyl editions.',
}

const SHIPPING = [
  {
    title: 'Packaging',
    body: 'Every figure ships in its numbered box, wrapped in acid-free tissue, and cradled in cut foam inside a second outer carton. Nothing rides loose.',
  },
  {
    title: 'Domestic',
    body: 'Orders leave the bench within 3 business days of a closed edition window. Standard delivery runs 2-5 business days once shipped.',
  },
  {
    title: 'International',
    body: 'Customs handling adds 5-12 business days depending on region. Duties and import fees are the buyer’s responsibility and are not included at checkout.',
  },
  {
    title: 'Multi-piece orders',
    body: 'Figures from the same claim window ship together once the full edition has been QC’d and numbered. We do not split-ship a single order.',
  },
]

const RETURNS = [
  {
    title: 'Numbered editions are final sale',
    body: 'Because each base plate is engraved to your order, we cannot accept returns for a change of mind once a figure has shipped.',
  },
  {
    title: 'Damage in transit',
    body: 'Photograph the outer carton and the figure before unpacking further, then contact us within 5 days of delivery. We replace confirmed transit damage from the next available cast run at no charge.',
  },
  {
    title: 'Manufacturing defects',
    body: 'Miscast seams, paint transfer, or loose joints reported within 14 days of delivery are repaired or replaced. This does not cover normal handling wear.',
  },
  {
    title: 'Pre-order cancellations',
    body: 'Claimed pre-orders can be cancelled for a full refund any time before the edition window closes. Once casting begins, the claim is locked to that edition number.',
  },
]

const FAQ = [
  { q: 'Can I change my shipping address after ordering?', a: 'Yes, up until the order leaves the bench. Message us with your order number and the new address.' },
  { q: 'Do you ship to PO boxes?', a: 'No. Outer cartons are sized for door delivery and do not fit standard PO box dimensions.' },
  { q: 'What if my edition number arrives wrong?', a: 'That’s a defect claim, not a returns request — contact us with the base plate number and we’ll correct it from the ledger.' },
]

export default function ShippingReturnsPage() {
  return (
    <div className="pt-16">
      <SubHero
        title="Shipping & Returns"
        label="Support"
        description="Every figure is numbered before it leaves the bench. Here is exactly how packing, delivery, and claims work."
      />

      <section id="shipping" className="mx-auto max-w-[1440px] scroll-mt-16 px-4 py-16 lg:px-6 lg:py-24">
        <h2 className="max-w-[720px] text-4xl font-medium leading-[var(--leading-display)] tracking-tight text-[var(--color-ink)] lg:text-6xl">
          Shipping
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6">
          {SHIPPING.map((s) => (
            <article
              key={s.title}
              className="grid grid-cols-1 gap-4 bg-[var(--color-bg-tile)] p-6 md:grid-cols-2 md:gap-12"
            >
              <h3 className="text-2xl font-medium tracking-tight text-[var(--color-ink)]">{s.title}</h3>
              <p className="max-w-[560px] text-base leading-relaxed text-[var(--color-ink-muted)]">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="returns" className="scroll-mt-16 bg-[var(--color-bg-tile)]">
        <div className="mx-auto max-w-[1440px] px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="max-w-[720px] text-4xl font-medium leading-[var(--leading-display)] tracking-tight text-[var(--color-ink)] lg:text-6xl">
            Returns &amp; claims
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6">
            {RETURNS.map((r) => (
              <article
                key={r.title}
                className="grid grid-cols-1 gap-4 bg-[var(--color-bg)] p-6 md:grid-cols-2 md:gap-12"
              >
                <h3 className="text-2xl font-medium tracking-tight text-[var(--color-ink)]">{r.title}</h3>
                <p className="max-w-[560px] text-base leading-relaxed text-[var(--color-ink-muted)]">{r.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-16 lg:px-6 lg:py-24">
        <h2 className="max-w-[720px] text-4xl font-medium leading-[var(--leading-display)] tracking-tight text-[var(--color-ink)] lg:text-6xl">
          Common questions
        </h2>
        <ul className="mt-9 grid grid-cols-1 gap-4">
          {FAQ.map((item) => (
            <li key={item.q} className="bg-[var(--color-bg)] p-6">
              <span className="text-lg font-medium text-[var(--color-ink)]">{item.q}</span>
              <p className="mt-2 max-w-[640px] text-base leading-relaxed text-[var(--color-ink-muted)]">{item.a}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-6 px-4 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-6 lg:py-24">
          <div>
            <h2 className="max-w-[480px] text-3xl font-medium leading-[var(--leading-display)] tracking-tight text-[var(--color-ink)] lg:text-4xl">
              Still need help with an order?
            </h2>
            <p className="mt-4 max-w-[440px] text-base leading-relaxed text-[var(--color-ink-muted)]">
              Shipping notes and claims run through the same desk as everything else at FORMA.
            </p>
          </div>
          <Button variant="solid" href={`${BASE}/story#visit`}>
            Contact the studio
          </Button>
        </div>
      </section>
    </div>
  )
}
