import type { Metadata } from 'next'
import { Hammer, Leaf, Package, MapPin, UsersThree, Tag } from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'OHMT - About',
  description: 'Atelier House is a six-person furniture studio building solid-wood seating, tables, and lighting.',
}

const principles = [
  {
    title: 'Solid wood only',
    desc: 'No particleboard, no veneer-over-MDF. If a piece cannot be built in solid hardwood, it does not ship.',
  },
  {
    title: 'A catalog small enough to sit in every piece',
    desc: 'Under thirty items, on purpose. Every one of them has been lived with by someone on the team for at least a season.',
  },
  {
    title: 'Repairable by design',
    desc: 'Joinery over glue-and-staple construction, so a chair can be reglued instead of replaced.',
  },
]

const focus = [
  {
    title: 'Vision',
    desc: 'Furniture that earns a decade of daily use before anyone thinks about replacing it, not a season of good photos.',
  },
  {
    title: 'Mission',
    desc: 'Prototype every piece ourselves, live with it for a season, and only add it to the catalog once it has earned a permanent spot in someone’s home.',
  },
]

const values = [
  { icon: Hammer, title: 'Built to be repaired', desc: 'Joinery over glue-and-staple, so a chair gets reglued instead of replaced.' },
  { icon: Package, title: 'Small batches, not mass runs', desc: 'We build to the size of the current order, not a warehouse forecast.' },
  { icon: Leaf, title: 'Traceable sourcing', desc: 'Every board is FSC-tracked hardwood, no unnamed veneer suppliers.' },
  { icon: UsersThree, title: 'Tested by the team first', desc: 'Every new piece lives in someone’s home for a season before it ships.' },
  { icon: MapPin, title: 'Made in one workshop', desc: 'No subcontracted frames. If it carries our name, it was built under this roof.' },
  { icon: Tag, title: 'Priced for the build', desc: 'The number on the tag covers materials and labor, not a markup for a showroom.' },
]

const team = [
  { name: 'Mireille Okafor', role: 'Founder, lead joiner', image: 'team-mireille-okafor.jpg' },
  { name: 'Tomas Ferreira', role: 'Frame fabrication', image: 'team-tomas-ferreira.jpg' },
  { name: 'Priya Nair', role: 'Upholstery lead', image: 'team-priya-nair.jpg' },
  { name: 'Sander Voss', role: 'Finish and repair', image: 'team-sander-voss.jpg' },
  { name: 'Elena Kowalski', role: 'Studio manager', image: 'team-elena-kowalski.jpg' },
  { name: 'Marcus Webb', role: 'Photography and catalog', image: 'team-marcus-webb.jpg' },
]

export default function AboutPage() {
  return (
    <div>
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            About
          </p>
          <h1 className="mt-4 max-w-[680px] font-display text-[length:var(--text-h1)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)]">
            A workshop-sized studio, kept that way on purpose.
          </h1>
          <p className="mt-6 max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)]">
            Atelier House started as a six-person workshop building dining tables for neighbors. The studio has
            grown since, but the team size and the small-batch process have not changed - every piece still passes
            through the same six sets of hands before it ships.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="relative mx-auto aspect-[21/9] max-w-[1440px] overflow-hidden rounded-[8px]">
          <img
            src="/templates/OHMT035-atelier-house/about-hero-band.jpg"
            alt="Wide panoramic view of a small furniture workshop interior"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-[var(--color-bg-secondary)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-display text-[length:var(--text-h3)] font-semibold leading-[1.05] tracking-tight text-[var(--color-text)]">
            Three rules the catalog has to follow.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {principles.map((p, i) => (
              <div key={p.title}>
                <p className="text-xs font-semibold text-[var(--color-accent)]">0{i + 1}</p>
                <h3 className="mt-3 text-base font-semibold text-[var(--color-text)]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Vision &amp; mission
            </p>
            <h2 className="mt-4 font-display text-[length:var(--text-h3)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)]">
              What the studio is actually optimizing for.
            </h2>
            <div className="mt-9 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
              {focus.map((f, i) => (
                <div key={f.title} className="grid grid-cols-2 gap-4 py-6">
                  <p className="text-xs font-semibold text-[var(--color-accent)]">0{i + 1}</p>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--color-text)]">{f.title}</h3>
                    <p className="mt-2 max-w-[420px] text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] md:h-[460px] md:aspect-auto">
            <img
              src="/templates/OHMT035-atelier-house/brand-workshop.jpg"
              alt="Two people working at a workbench in the Atelier House workshop"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-secondary)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="max-w-[560px] font-display text-[length:var(--text-h3)] font-semibold leading-[1.05] tracking-tight text-[var(--color-text)]">
            Six things the workshop will not compromise on.
          </h2>
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title}>
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[6px] border border-[var(--color-border)] bg-[var(--color-bg)] shadow-[0_1px_0_rgba(20,20,20,0.03)]">
                  <v.icon size={36} weight="regular" className="text-[var(--color-text-muted)]" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-[var(--color-text)]">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="max-w-[560px] font-display text-[length:var(--text-h3)] font-semibold leading-[1.05] tracking-tight text-[var(--color-text)]">
            Six people, no hidden layers.
          </h2>
          <div className="mt-10 grid grid-cols-3 gap-x-4 gap-y-8 md:grid-cols-6 md:gap-x-6">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-[var(--color-bg-secondary)]">
                  <img
                    src={`/templates/OHMT035-atelier-house/${member.image}`}
                    alt={member.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-3 text-sm font-semibold tracking-tight text-[var(--color-text)]">{member.name}</h3>
                <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
