import type { Metadata } from 'next'
import Image from 'next/image'
import { IMG } from '../data/figures'
import { Button } from '../_components/ui/Button'
import { SubHero } from '../_components/ui/SubHero'

export const metadata: Metadata = {
  title: 'OHMT - Forma Figures | Story',
  description:
    'How FORMA makes figures: one sculpt, small resin and vinyl batches, hand-lined paint, and a public edition ledger.',
}

const PROCESS = [
  {
    title: 'Sculpt',
    body: 'Every figure starts as a clay or digital maquette on one desk. Nothing enters casting until the silhouette reads from three meters away.',
  },
  {
    title: 'Cast',
    body: 'Polystone, resin, or vinyl in batches of fifty. Molds are logged, counted, and retired when the edition closes. No re-pulls, ever.',
  },
  {
    title: 'Finish',
    body: 'Base coats by airbrush, mask lines by one brush. Each piece passes the same bench twice before its number is engraved.',
  },
]

const ARTISTS = [
  { name: 'Rin Okabe', role: 'Character sculpts, paint direction' },
  { name: 'Hana Lieu', role: 'Chibi and art toy line' },
  { name: 'Mikael Sund', role: 'Creature sculpts, translucent casting' },
  { name: 'FORMA Mecha Bureau', role: 'Frame engineering, articulation' },
]

export default function StoryPage() {
  return (
    <div className="pt-16">
      <SubHero
        title="One Bench, Every Figure"
        label="Studio story"
        description="The making process, artists, and edition rules behind every FORMA figure."
      />

      <section id="process" className="mx-auto max-w-[1440px] scroll-mt-16 px-4 py-16 lg:px-6 lg:py-24">
        <h2 className="max-w-[720px] text-4xl font-medium leading-[var(--leading-display)] tracking-tight text-[var(--color-ink)] lg:text-6xl">
          How a figure is made
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6">
          {PROCESS.map((p) => (
            <article
              key={p.title}
              className="grid grid-cols-1 gap-4 bg-[var(--color-bg-tile)] p-6 md:grid-cols-2 md:gap-12"
            >
              <h3 className="text-2xl font-medium tracking-tight text-[var(--color-ink)]">{p.title}</h3>
              <p className="max-w-[560px] text-base leading-relaxed text-[var(--color-ink-muted)]">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-4 pb-16 lg:grid-cols-2 lg:gap-24 lg:px-6 lg:pb-24">
        <div className="relative aspect-[7/5] bg-[var(--color-bg-tile)]">
          <Image
            src={`${IMG}/craft-01.webp`}
            alt="Airbrush bench with masked figure parts"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="max-w-[480px] text-4xl font-medium leading-[var(--leading-display)] tracking-tight text-[var(--color-ink)] lg:text-6xl">
            The ledger is public before the window opens.
          </h2>
          <p className="mt-6 max-w-[440px] text-base leading-relaxed text-[var(--color-ink-muted)]">
            Edition sizes are announced with the drop, claimed counts update live, and closed runs are
            never recast. Your number on the base plate stays yours.
          </p>
        </div>
      </section>

      <section id="artists" className="scroll-mt-16 bg-[var(--color-bg-tile)]">
        <div className="mx-auto max-w-[1440px] px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="max-w-[720px] text-4xl font-medium leading-[var(--leading-display)] tracking-tight text-[var(--color-ink)] lg:text-6xl">
            The artists
          </h2>
          <ul className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2">
            {ARTISTS.map((a) => (
              <li key={a.name} className="flex items-baseline justify-between gap-4 bg-[var(--color-bg)] p-6">
                <span className="text-xl font-medium text-[var(--color-ink)]">{a.name}</span>
                <span className="meta-label text-right text-[var(--color-ink-muted)]">{a.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="visit" className="mx-auto max-w-[1440px] scroll-mt-16 px-4 py-16 lg:px-6 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="max-w-[480px] text-4xl font-medium leading-[var(--leading-display)] tracking-tight text-[var(--color-ink)] lg:text-6xl">
              One email per drop.
            </h2>
            <p className="mt-6 max-w-[440px] text-base leading-relaxed text-[var(--color-ink-muted)]">
              The sculpt, the edition size, and the exact time the claim window opens. Shipping notes
              and returns run through the same desk.
            </p>
          </div>
          <form className="flex max-w-[480px] flex-col gap-6" aria-label="Drop alert sign up">
            <div>
              <label htmlFor="alert-name" className="meta-label text-[var(--color-ink-faint)]">
                Name
              </label>
              <input
                id="alert-name"
                name="name"
                type="text"
                autoComplete="name"
                className="mt-2 w-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-base text-[var(--color-ink)]"
              />
            </div>
            <div>
              <label htmlFor="alert-email" className="meta-label text-[var(--color-ink-faint)]">
                Email
              </label>
              <input
                id="alert-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-2 w-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-base text-[var(--color-ink)]"
              />
            </div>
            <Button variant="solid" type="submit">
              Sign up for drop alerts
            </Button>
            <p className="meta-label text-[var(--color-ink-faint)]">
              Demo form. No data is sent in this template.
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}
