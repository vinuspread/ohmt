import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const base = '/en/templates/OHMT034-nova-coffee'

export const metadata: Metadata = {
  title: 'OHMT - Company',
  description:
    'About NOVA, the Portland engineering team building serviceable dual-boiler espresso machines for serious home coffee.',
}

const principles = [
  ['01', 'Make temperature visible', 'A good machine should explain what changed between one shot and the next.', 'spec-control-detail.png'],
  ['02', 'Design for repair', 'Boilers, pumps, and gaskets are treated as service parts, not reasons to replace the unit.', 'technology-internals.png'],
  ['03', 'Respect the counter', 'The machine has to feel serious without taking over the kitchen.', 'showroom-demo.png'],
]

export default function CompanyPage() {
  return (
    <div>
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
              Company
            </p>
            <h1 className="mt-4 max-w-[700px] font-display text-[length:var(--text-h1)] font-bold leading-[var(--leading-display)] tracking-tight text-[var(--color-text)]">
              Built by people who got tired of hidden variables.
            </h1>
          </div>
          <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-7 md:justify-self-end md:text-sm">
            NOVA started in Portland in 2019 when two commercial-machine engineers asked why home espresso had to
            choose between fragile appliances and oversized cafe hardware.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-[1440px] gap-5 md:grid-cols-12">
          <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-bg-secondary)] md:col-span-7">
            <Image
              unoptimized
              src="/templates/OHMT034-nova-coffee/story-lifestyle.jpg"
              alt="NOVA espresso machine styled as an interior object on a modern kitchen counter"
              fill
              priority
              className="object-cover brightness-[1.06] contrast-[1.04]"
              sizes="(min-width: 768px) 60vw, 100vw"
            />
          </div>
          <div className="nova-gradient-precision grid p-7 text-white md:col-span-5 md:p-9">
            <div className="self-end">
              <p className="font-mono text-[length:var(--text-display)] font-semibold leading-none">12</p>
              <p className="mt-3 text-sm leading-relaxed text-white/68">
                engineers, designers, and service specialists building one machine family instead of a broad catalog.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-secondary)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-display text-[length:var(--text-h3)] font-bold leading-tight text-[var(--color-text)]">
            Three principles guide the machine.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {principles.map(([step, title, desc, image]) => (
              <article key={step} className="bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-bg-secondary)]">
                  <Image
                    unoptimized
                    src={`/templates/OHMT034-nova-coffee/${image}`}
                    alt={`${title} principle visual`}
                    fill
                    className="object-cover brightness-[1.05] contrast-[1.04]"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="grid min-h-[220px] p-6 md:p-8">
                  <p className="font-mono text-xs font-semibold text-[var(--color-accent)]">{step}</p>
                  <div className="self-end">
                    <h3 className="font-display text-2xl font-bold leading-tight text-[var(--color-text)]">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-5 border-t border-[var(--color-border)] pt-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-[var(--color-text)]">See the machine itself.</h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">Move from company story to the working system.</p>
          </div>
          <Link
            href={`${base}/technology`}
            className="inline-flex border border-[var(--color-text)] bg-[var(--color-text)] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-[var(--color-text)]"
          >
            Open Technology
          </Link>
        </div>
      </section>
    </div>
  )
}
