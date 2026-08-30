import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const base = '/en/templates/OHMT034-nova-coffee'

export const metadata: Metadata = {
  title: 'OHMT - Technology',
  description:
    'Inside the NOVA dual-boiler architecture: PID temperature control, commercial-grade 58mm group head, programmable pre-infusion, and hand-finished materials.',
}

const modules = [
  {
    step: '01',
    title: 'Independent boilers',
    desc: 'Brew and steam circuits hold temperature separately, so the machine never asks one boiler to do two jobs.',
    image: 'technology-internals.png',
  },
  {
    step: '02',
    title: 'Visible pressure',
    desc: 'The gauge, pump, and pre-infusion profile make extraction behavior readable before the cup is ruined.',
    image: 'spec-control-detail.png',
  },
  {
    step: '03',
    title: 'Counter-scale fit',
    desc: 'Commercial logic is reduced into a footprint that still belongs in a home kitchen.',
    image: 'showroom-demo.png',
  },
]

const specGroups = [
  {
    step: '01',
    title: 'Extraction System',
    rows: [
      ['Boilers', 'Dual stainless steel, brew 0.5L / steam 1.2L'],
      ['Temperature', 'PID controlled within +/-0.5 C of target'],
      ['Pump', 'Rotary vane, 9 bar nominal pressure'],
      ['Pre-infusion', 'Programmable 0-10 second low-pressure phase'],
      ['Group head', '58mm commercial-grade chrome-plated brass'],
    ],
  },
  {
    step: '02',
    title: 'Fit & Daily Use',
    rows: [
      ['Water tank', '1.5L removable tank with carbon filter'],
      ['Dimensions', '14 in W x 18 in D x 16 in H'],
      ['Warm-up', 'Under 15 minutes from cold start'],
      ['Noise', 'Around 50dB at the rotary pump'],
    ],
  },
  {
    step: '03',
    title: 'Build & Ownership',
    rows: [
      ['Body', 'Brushed 304 stainless steel and matte charcoal panels'],
      ['Warranty', '5 years boiler, 2 years electrical, 1 year consumables'],
      ['Service', 'Boiler, pump, and grouphead gasket replace as modules'],
      ['Maintenance', 'Descale every 8-12 weeks depending on water hardness'],
    ],
  },
]

const summary = [
  ['2', 'independent boilers'],
  ['58mm', 'commercial group head'],
  ['9 bar', 'rotary pressure'],
  ['5yr', 'boiler warranty'],
]

const howItWorks = [
  ['01', 'Fill & Power On', 'Both boilers preheat independently to their target temperatures.'],
  ['02', 'Dose & Tamp', 'Grind, dose, and tamp level with the basket and portafilter you already use.'],
  ['03', 'Lock & Extract', 'Pre-infusion runs automatically before full 9-bar pressure begins.'],
  ['04', 'Steam & Serve', 'Texture milk while the brew boiler holds temperature for the next shot.'],
]

export default function TechnologyPage() {
  return (
    <div>
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
              Technology
            </p>
            <h1 className="mt-4 max-w-[700px] font-display text-[length:var(--text-h1)] font-bold leading-[var(--leading-display)] tracking-tight text-[var(--color-text)]">
              The architecture behind repeatable espresso.
            </h1>
          </div>
          <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-7 md:justify-self-end md:text-sm">
            NOVA is built around the variables that make espresso drift: temperature, pressure, saturation, and
            serviceability. The machine exposes those variables instead of hiding them behind presets.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-[1440px] gap-5 md:grid-cols-12">
          <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-bg-secondary)] md:col-span-7">
            <Image
              unoptimized
              src="/templates/OHMT034-nova-coffee/technology-internals.png"
              alt="NOVA dual-boiler internal architecture with stainless steel boilers and machined frame"
              fill
              priority
              className="object-cover brightness-[1.03] contrast-[1.05]"
              sizes="(min-width: 768px) 60vw, 100vw"
            />
          </div>
          <div className="nova-gradient-precision grid p-7 text-white md:col-span-5 md:p-9">
            <div className="self-end">
              <p className="font-mono text-[length:var(--text-display)] font-semibold leading-none">0.5</p>
              <p className="mt-3 text-sm leading-relaxed text-white/68">
                degrees of target-temperature tolerance, monitored continuously by the PID controller.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-secondary)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-display text-[length:var(--text-h3)] font-bold leading-[1.05] text-[var(--color-text)]">
            Three systems do the work.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {modules.map((item) => (
              <article key={item.step} className="bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-bg-secondary)]">
                  <Image
                    unoptimized
                    src={`/templates/OHMT034-nova-coffee/${item.image}`}
                    alt={`${item.title} visual detail`}
                    fill
                    className="object-cover brightness-[1.05] contrast-[1.04]"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="grid min-h-[220px] p-6 md:p-8">
                  <p className="font-mono text-xs font-semibold text-[var(--color-accent)]">{item.step}</p>
                  <div className="self-end">
                    <h3 className="font-display text-2xl font-bold leading-[1.05] text-[var(--color-text)]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="specs" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid border-l border-t border-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-4">
            {summary.map(([value, label]) => (
              <div key={value} className="border-b border-r border-[var(--color-border)] p-6">
                <p className="font-mono text-[length:var(--text-h2)] font-semibold leading-none text-[var(--color-text)]">
                  {value}
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {specGroups.map((group) => (
              <article key={group.title} className="border-t border-[var(--color-border)] pt-6">
                <p className="font-mono text-xs font-semibold text-[var(--color-accent)]">{group.step}</p>
                <h2 className="mt-6 font-display text-2xl font-bold leading-[1.05] text-[var(--color-text)]">
                  {group.title}
                </h2>
                <div className="mt-6 divide-y divide-[var(--color-border)]">
                  {group.rows.map(([label, value]) => (
                    <div key={label} className="py-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                        {label}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-text)] md:text-sm">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 border-t border-[var(--color-border)] pt-10 md:grid-cols-4">
            {howItWorks.map(([step, title, desc]) => (
              <div key={step}>
                <p className="font-mono text-xs font-semibold text-[var(--color-accent)]">{step}</p>
                <h2 className="mt-3 font-display text-base font-bold leading-[1.05] text-[var(--color-text)]">{title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-muted)]">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-col items-start gap-5 border-t border-[var(--color-border)] pt-10 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-[var(--color-text)]">Ready to experience it?</h2>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">Book a demo or find a NOVA stockist near you.</p>
            </div>
            <Link
              href={`${base}/support`}
              className="inline-flex border border-[var(--color-text)] bg-[var(--color-text)] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-[var(--color-text)]"
            >
              Find a Store
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
