import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const base = '/en/templates/OHMT034-nova-coffee'

export const metadata: Metadata = {
  title: 'OHMT - Product',
  description:
    'NOVA product overview: two finish options, the kit that ships in the box, transparent pricing, and the core specifications of the dual-boiler espresso machine.',
}

const finishes = [
  {
    step: '01',
    title: 'Brushed Steel',
    desc: 'A polished 304 stainless body with the grain running across the side panels. Bright highlights and crisp edges keep it reading as metal, and it sits naturally on pale stone counters.',
    image: 'product-1.jpg',
    alt: 'NOVA espresso machine in brushed steel finish on a cool stone countertop',
  },
  {
    step: '02',
    title: 'Matte Charcoal',
    desc: 'Powder-coated panels with a low, even sheen that picks up little glare. The finish holds a steadier silhouette in dim light and suits darker, moodier kitchens.',
    image: 'story-lifestyle.jpg',
    alt: 'NOVA espresso machine in matte charcoal finish staged in a modern kitchen',
  },
]

const inTheBox = [
  ['Removable water tank', '1.5L, with the carbon filter cartridge fitted'],
  ['Bottomless portafilter', 'open spout so extraction stays visible while you dial in'],
  ['18g precision basket', 'matched to the group head for repeatable dosing'],
  ['Blind basket', 'for weekly backflushing without extra hardware'],
  ['Microfiber cloth', 'for the brushed-steel body between deep cleans'],
  ['Compact knock box', 'tucks into a low shelf or a tight corner'],
]

export default function ProductPage() {
  return (
    <div>
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
              Product
            </p>
            <h1 className="mt-4 max-w-[700px] font-display text-[length:var(--text-h1)] font-bold leading-[var(--leading-display)] tracking-tight text-[var(--color-text)]">
              The machine, fully specified.
            </h1>
          </div>
          <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-7 md:justify-self-end md:text-sm">
            One price, stated up front, and a footprint sized for a standard kitchen counter. No bundles, no fine
            print — just the machine and what ships with it.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-[1440px] gap-5 md:grid-cols-12">
          <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-bg-secondary)] md:col-span-7">
            <Image
              unoptimized
              src="/templates/OHMT034-nova-coffee/product-1.jpg"
              alt="NOVA espresso machine ready to pull a shot on a cool stone countertop"
              fill
              priority
              className="object-cover brightness-[1.04] contrast-[1.04]"
              sizes="(min-width: 768px) 60vw, 100vw"
            />
          </div>
          <div className="nova-gradient-precision grid p-7 text-white md:col-span-5 md:p-9">
            <div className="self-end">
              <p className="font-mono text-[length:var(--text-h2)] font-semibold leading-none">$3,499</p>
              <p className="mt-3 text-sm leading-relaxed text-white/68">
                starting price, ships with the Daily Shot Kit included.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-secondary)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <h2 className="font-display text-[length:var(--text-h3)] font-bold leading-[1.05] text-[var(--color-text)]">
                Two finishes, one machine.
              </h2>
            </div>
            <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-7 md:justify-self-end md:text-sm">
              The internal system is identical in both. Finish is the only choice you make, so pick the surface that
              matches your counter.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {finishes.map((item) => (
              <article key={item.title} className="bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-bg-secondary)]">
                  <Image
                    unoptimized
                    src={`/templates/OHMT034-nova-coffee/${item.image}`}
                    alt={item.alt}
                    fill
                    className="object-cover brightness-[1.05] contrast-[1.04]"
                    sizes="(min-width: 768px) 50vw, 100vw"
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

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                Included
              </p>
              <h2 className="mt-4 max-w-[520px] font-display text-[length:var(--text-h3)] font-bold leading-[1.05] text-[var(--color-text)]">
                What ships with every NOVA.
              </h2>
            </div>
            <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-8 md:justify-self-end md:text-sm">
              Everything needed for the first shot is in the box — no separate accessory cart to build before you can
              pull a drinkable espresso.
            </p>
          </div>
          <div className="mt-10 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
            {inTheBox.map(([name, note]) => (
              <div
                key={name}
                className="flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:gap-8"
              >
                <p className="font-display text-base font-bold leading-tight text-[var(--color-text)]">{name}</p>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)] md:ml-auto md:max-w-[520px] md:text-right">
                  {note}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href={`${base}/support`}
              className="inline-flex text-sm font-semibold text-[var(--color-text)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--color-accent)]"
            >
              Looking for care and maintenance kits?
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                Specs
              </p>
              <h2 className="mt-4 font-display text-[length:var(--text-h3)] font-bold leading-[1.05] text-[var(--color-text)]">
                Two numbers to start with.
              </h2>
            </div>
            <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-6 md:justify-self-end md:text-sm">
              The full sheet lives on the technology page. These two figures answer the questions buyers ask first.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="nova-gradient-precision grid min-h-[220px] p-7 text-white md:p-9">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-white/55">
                Dimensions
              </p>
              <div className="self-end">
                <p className="font-mono text-[length:var(--text-h2)] font-semibold leading-none">14 x 18 x 16 in</p>
                <p className="mt-3 text-sm leading-relaxed text-white/68">
                  W x D x H — fits beneath standard upper cabinets.
                </p>
              </div>
            </div>
            <div className="nova-gradient-precision grid min-h-[220px] p-7 text-white md:p-9">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-white/55">
                Temperature
              </p>
              <div className="self-end">
                <p className="font-mono text-[length:var(--text-h2)] font-semibold leading-none">±0.5°C</p>
                <p className="mt-3 text-sm leading-relaxed text-white/68">
                  PID-held target, monitored continuously across the shot.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-14">
            <Link
              href={`${base}/technology#specs`}
              className="inline-flex border border-[var(--color-text)] bg-[var(--color-text)] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-[var(--color-text)]"
            >
              See full specifications
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-secondary)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-[640px] text-center">
            <h2 className="font-display text-[length:var(--text-h2)] font-bold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text-contrast)]">
              See the machine before you commit.
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted-on-dark)]">
              Book a guided demo at a showroom near you, or find the NOVA stockist that carries it.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <Link
                href={`${base}/support`}
                className="inline-flex border border-white bg-white px-7 py-3 text-xs font-semibold text-[var(--color-text)] transition-colors duration-300 hover:bg-transparent hover:text-white"
              >
                Book a Demo
              </Link>
              <Link
                href={`${base}/support#store`}
                className="inline-flex border border-white/40 px-7 py-3 text-xs font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
              >
                Find a Store
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
