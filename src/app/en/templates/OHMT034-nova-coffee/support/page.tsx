import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const base = '/en/templates/OHMT034-nova-coffee'

export const metadata: Metadata = {
  title: 'OHMT - Support',
  description:
    'NOVA support resources: care and descaling guides, warranty registration, filter and gasket replacement, book a tasting demo, find a stockist, and contact customer support.',
}

const supportItems = [
  {
    step: '01',
    title: 'Care & Descaling',
    desc: 'Step-by-step maintenance, descaling schedules, and the cleaning products that match the machine.',
    image: 'accessory-care-kit.png',
  },
  {
    step: '02',
    title: 'Parts & Warranty',
    desc: 'Boiler, pump, and gasket guidance so service starts with the right part, not guesswork.',
    image: 'technology-internals.png',
  },
  {
    step: '03',
    title: 'Showroom Demo',
    desc: 'A guided 45-minute session for espresso, technique, and the machine before purchase.',
    image: 'showroom-demo.png',
  },
]

const kits = [
  {
    title: 'Daily Shot Kit',
    desc: 'Bottomless portafilter, 18g precision basket, blind basket, microfiber cloth, and compact knock box.',
    meta: 'Included with launch orders',
  },
  {
    title: 'Water Care Kit',
    desc: 'Carbon filters, test strips, descaling powder, and a six-month reminder card.',
    meta: 'Recommended every 6 months',
  },
  {
    title: 'Counter Setup Kit',
    desc: 'Low-profile tamp mat, 58mm tamper, dosing ring, and slim tool tray for tight kitchens.',
    meta: 'Optional add-on',
  },
]

const faqs = [
  {
    q: 'What actually makes this different from a $300 machine?',
    a: 'A single-boiler machine has to drop brew temperature to make steam, then recover before your next shot. NOVA dual boilers hold brew and steam temperature independently.',
  },
  {
    q: 'I have never used a portafilter. Can I learn it?',
    a: 'Yes. The analog pressure gauge shows extraction in progress, and pre-infusion runs automatically so there is no first timing step to miss.',
  },
  {
    q: 'How loud is it at 6am?',
    a: 'NOVA uses a rotary pump around 50dB instead of the vibration pump found in many entry machines.',
  },
  {
    q: 'What is the warranty period?',
    a: 'The boiler carries a 5-year limited warranty, electrical components are covered for 2 years, and consumable parts are covered for 1 year.',
  },
  {
    q: 'If it breaks, am I replacing the whole machine?',
    a: 'No. The boiler, pump, and grouphead gasket are replaceable as single modules.',
  },
  {
    q: 'Can I install the machine myself?',
    a: 'NOVA ships ready for a standard 15A outlet. For plumbed water installation, use a certified installer to keep warranty coverage intact.',
  },
  {
    q: 'How often should I descale?',
    a: 'Descale every 8-12 weeks depending on water hardness. Backflushing takes under a minute once a week.',
  },
  {
    q: 'Will my tap water damage it?',
    a: 'The removable 1.5L tank includes a carbon filter. Very hard water areas should descale on the shorter end of the schedule.',
  },
  {
    q: 'Does the milk steaming compare to a cafe?',
    a: 'The independent steam boiler holds steam pressure while the brew boiler keeps the next shot ready.',
  },
  {
    q: 'What is the average warm-up time?',
    a: 'From a cold start, NOVA reaches brewing temperature in under 15 minutes. From standby, the first shot is ready in under 45 seconds.',
  },
  {
    q: 'Do you offer international shipping?',
    a: 'NOVA is available through authorized dealers in 12 countries. Direct shipping is available in the United States and Canada.',
  },
]

export default function SupportPage() {
  return (
    <div>
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
              Ownership
            </p>
            <h1 className="mt-4 max-w-[700px] font-display text-[length:var(--text-h1)] font-bold leading-[var(--leading-display)] tracking-tight text-[var(--color-text)]">
              Built to last. Backed to match.
            </h1>
          </div>
          <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-7 md:justify-self-end md:text-sm">
            Every NOVA machine is supported by a 5-year boiler warranty, serviceable modules, and a support team
            that answers within one business day.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-[1440px] gap-5 md:grid-cols-12">
          <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-bg-secondary)] md:col-span-7">
            <Image
              unoptimized
              src="/templates/OHMT034-nova-coffee/showroom-demo.png"
              alt="NOVA showroom tasting setup on a cool stone counter"
              fill
              priority
              className="object-cover brightness-[1.04] contrast-[1.04]"
              sizes="(min-width: 768px) 60vw, 100vw"
            />
          </div>
          <div className="nova-gradient-precision grid p-7 text-white md:col-span-5 md:p-9">
            <div className="self-end">
              <p className="font-mono text-[length:var(--text-display)] font-semibold leading-none">1</p>
              <p className="mt-3 text-sm leading-relaxed text-white/68">
                business day response target for support, parts guidance, and demo booking requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="warranty" className="bg-[var(--color-bg-secondary)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-display text-[length:var(--text-h3)] font-bold leading-tight text-[var(--color-text)]">
            Ownership support, split into three paths.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {supportItems.map((item) => (
              <article key={item.title} className="bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-bg-secondary)]">
                  <Image
                    unoptimized
                    src={`/templates/OHMT034-nova-coffee/${item.image}`}
                    alt={`${item.title} support visual`}
                    fill
                    className="object-cover brightness-[1.06] contrast-[1.05]"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="grid min-h-[220px] p-6 md:p-8">
                  <p className="font-mono text-xs font-semibold text-[var(--color-accent)]">{item.step}</p>
                  <div className="self-end">
                    <h3 className="font-display text-2xl font-bold leading-tight text-[var(--color-text)]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                Care kits
              </p>
              <h2 className="mt-4 max-w-[520px] font-display text-[length:var(--text-h3)] font-bold leading-tight text-[var(--color-text)]">
                Small parts that keep the ritual sharp.
              </h2>
            </div>
            <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-8 md:justify-self-end md:text-sm">
              Accessories are treated as part of the machine experience: fewer decorative extras, more pieces that
              improve repeatability, care, and counter fit.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {kits.map((kit, index) => (
              <article key={kit.title} className="grid min-h-[260px] border border-[var(--color-border)] p-6 md:p-8">
                <div className="flex items-start justify-between gap-6">
                  <p className="font-mono text-xs font-semibold text-[var(--color-accent)]">0{index + 1}</p>
                  <p className="max-w-[150px] text-right text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                    {kit.meta}
                  </p>
                </div>
                <div className="self-end">
                  <h3 className="font-display text-2xl font-bold leading-tight text-[var(--color-text)]">{kit.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">{kit.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="font-display text-[length:var(--text-h3)] font-bold leading-tight text-[var(--color-text)]">
              The questions support gets first.
            </h2>
            <p className="mt-4 max-w-[420px] text-sm leading-relaxed text-[var(--color-text-muted)]">
              Ownership concerns should be answered before checkout, not after a machine arrives.
            </p>
          </div>
          <div className="divide-y divide-[var(--color-border)] border-t border-[var(--color-border)] md:col-span-8">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-[var(--color-text)] md:text-sm">
                  {faq.q}
                  <span className="shrink-0 text-[var(--color-text-muted)] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[640px] text-xs leading-relaxed text-[var(--color-text-muted)] md:text-sm">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="store" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-5 border-t border-[var(--color-border)] pt-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-[var(--color-text)]">Not ready to buy? Come taste it.</h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">Find a showroom, book a guided demo, and pull your first shot.</p>
          </div>
          <Link
            href={`${base}/support#store`}
            className="inline-flex border border-[var(--color-text)] bg-[var(--color-text)] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-[var(--color-text)]"
          >
            Find a Stockist
          </Link>
        </div>
      </section>
    </div>
  )
}
