import Image from 'next/image'
import Link from 'next/link'

const principles = [
  {
    title: 'Crop-First Calendar',
    label: 'STRICT SEASONALITY',
    text: 'Our stand and online shop change as the orchard shifts. Weather and soil dictate the picking schedule, meaning we never force or store crops beyond their natural eating window.'
  },
  {
    title: 'Organic by Habit',
    label: 'BIODYNAMIC SOIL CARE',
    text: 'Using nitrogen-fixing cover crops, organic compost, and hand-thinning. We work with the local ecosystem, ensuring tree longevity and flavor density without synthetic additives.'
  },
  {
    title: 'Packhouse Quality',
    label: 'DIRECT COLD CHAIN',
    text: 'Every single box leaves from our own packing house with the harvest lot, block ID, and optimal eating window stamped by hand. Complete trace-to-tree accountability.'
  },
]

const timeline = [
  { year: '1984', title: 'The First Orchard Stand', text: 'Evelyn and Thomas Grove open a small roadside bench selling Willamette peaches, marking the first hand-planted rows.' },
  { year: '1998', title: 'Organic Conversion', text: 'Fully transitioned the entire acreage away from synthetics, building our first compost yard and introducing native cover crops.' },
  { year: '2008', title: 'The Packing House', text: 'Constructed the direct-air packing house to pack, stamp, and distribute our crates directly from the orchard floor.' },
  { year: '2026', title: 'Third-Generation Heritage', text: 'Now managed by Thomas’s granddaughter Clara, maintaining the same hand-harvest ledger and strict tree-to-crate standards.' },
]

const certifications = [
  {
    name: 'USDA Organic',
    agency: 'Oregon Dept of Agriculture',
    code: 'ODA-ORG-982',
    image: '/templates/OHMT036-amber-grove/usda-organic.png'
  },
  {
    name: 'Demeter Biodynamic',
    agency: 'Biodynamic Association',
    code: 'DBA-CERT-2044',
    image: '/templates/OHMT036-amber-grove/demeter-biodynamic.png'
  },
  {
    name: 'Direct-Trade Verified',
    agency: 'Orchard Growers Alliance',
    code: 'OGA-DIRECT-036',
    image: '/templates/OHMT036-amber-grove/direct-trade.png'
  }
]

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Title & Introduction */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <span className="ledger-num text-xs font-bold bg-[var(--color-bg-secondary)] px-2.5 py-1 text-[var(--color-accent)] rounded">
            [ 01 ]
          </span>
          <span className="ledger-num text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">About Amber Grove</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-6xl font-semibold leading-[var(--leading-heading)] text-[var(--color-text)] mt-8">
          Three generations, one careful harvest at a time.
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-[var(--color-text-muted)] max-w-3xl">
          Amber Grove began as a roadside fruit stand in 1984 and grew into a direct-trade family orchard without leaving its original rows. We still pick by hand, pack in small batches, and sell fruit only when the crop meets our standards.
        </p>
      </section>

      {/* Banner Photo */}
      <section className="relative aspect-[21/9] w-full overflow-hidden rounded border border-[var(--color-border)]">
        <Image 
          src="/templates/OHMT036-amber-grove/hero-orchard-v3.jpg" 
          alt="Amber Grove orchard rows in morning light" 
          fill 
          sizes="(min-width: 1024px) 80vw, 100vw"
          priority 
          className="object-cover" 
        />
      </section>

      {/* Farm Features (특장점) */}
      <section className="grid gap-10 lg:grid-cols-12 border-t border-[var(--color-border)] pt-12">
        <div className="lg:col-span-4 space-y-8">
          <span className="ledger-num text-xs font-bold text-[var(--color-accent)]">[ 02 / STANDARDS ]</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold leading-[var(--leading-heading)]">How we grow.</h2>
          <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
            We focus on traditional husbandry methods rather than agricultural automation. The result is real orchard flavor.
          </p>
        </div>
        
        <div className="lg:col-span-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="space-y-2">
                <span className="ledger-num text-xs font-bold text-[var(--color-accent)] block tracking-widest">{item.label}</span>
                <h3 className="text-base font-bold text-[var(--color-text)] leading-[var(--leading-heading)]">{item.title}</h3>
                <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="grid gap-10 lg:grid-cols-12 border-t border-[var(--color-border)] pt-12">
        <div className="lg:col-span-4 space-y-8">
          <span className="ledger-num text-xs font-bold text-[var(--color-accent)]">[ 03 / TIMELINE ]</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold leading-[var(--leading-heading)]">Our Heritage</h2>
          <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
            Forty years of hand-written records and field logs from Thomas's stand to today's crate shipping.
          </p>
        </div>
        
        <div className="lg:col-span-8">
          <div className="relative border-l border-[var(--color-border)] pl-6 ml-3 space-y-10">
            {timeline.map((item) => (
              <div key={item.year} className="relative">
                <div className="absolute -left-[29px] top-1 flex h-3 w-3 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-white" />
                <span className="ledger-num font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-accent)]">{item.year}</span>
                <h3 className="text-base font-bold mt-1 text-[var(--color-text)] leading-[var(--leading-heading)]">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-muted)]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications (인증마크) */}
      <section className="grid gap-10 lg:grid-cols-12 border-t border-[var(--color-border)] pt-12">
        <div className="lg:col-span-4 space-y-8">
          <span className="ledger-num text-xs font-bold text-[var(--color-accent)]">[ 04 / CERTIFICATES ]</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold leading-[var(--leading-heading)]">Verification</h2>
          <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
            Certified organic and biodynamic agricultural practices audited annually.
          </p>
        </div>
        
        <div className="lg:col-span-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex flex-col justify-between rounded border border-[var(--color-border)] p-5 bg-white space-y-6">
                <div className="space-y-4">
                  <div className="h-20 w-20 relative">
                    <Image src={cert.image} alt={cert.name} fill className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[var(--color-text)] leading-[var(--leading-heading)]">{cert.name}</h3>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{cert.agency}</p>
                  </div>
                </div>
                <div className="border-t border-[var(--color-border)] pt-3">
                  <span className="ledger-num text-xs font-mono text-[var(--color-accent)] bg-[var(--color-bg-secondary)] px-2 py-0.5 rounded font-semibold">
                    {cert.code}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--color-border)] pt-12 pb-6">
        <div className="flex flex-col gap-6 bg-[var(--color-bg-dark)] p-6 text-[var(--color-text-contrast)] sm:p-8 lg:flex-row lg:items-center lg:justify-between rounded">
          <div>
            <span className="ledger-num text-xs font-bold text-[var(--color-accent-light)]">[ 05 / VISIT US ]</span>
            <h2 className="mt-3 max-w-xl font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold leading-[var(--leading-heading)]">
              Pickup days run Thursday through Sunday during peak harvest.
            </h2>
          </div>
          <Link href="/en/templates/OHMT036-amber-grove/visit" className="inline-flex shrink-0 items-center justify-center rounded bg-[var(--color-secondary-accent)] px-6 py-2.5 text-xs font-bold text-[var(--color-bg-dark)] transition-colors duration-200 hover:opacity-90">
            Directions & Hours
          </Link>
        </div>
      </section>
    </div>
  )
}
