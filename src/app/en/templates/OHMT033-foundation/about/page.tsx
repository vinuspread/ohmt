import type { Metadata } from 'next'
import Image from 'next/image'
import { stats } from '../data/stats'
import { ButtonLink } from '../_components/ui/ButtonLink'
import { SubpageHeader } from '../_components/ui/SubpageHeader'

const base = '/en/templates/OHMT033-foundation'

export const metadata: Metadata = {
  title: 'About',
  description:
    'OHMT Foundation was founded in 2015 on one rule: publish the number, name the person, and show the receipts.',
}

const principles = [
  {
    title: 'Publish the number',
    body: 'Every program reports its core metric every quarter, reviewed before it reaches this site.',
  },
  {
    title: 'Name the person',
    body: 'Stories use real names, real roles, and real outcomes. We do not run composite case studies.',
  },
  {
    title: 'Show the receipts',
    body: 'Grant ledgers and volunteer-hour logs are available on request, not only summarized once a year.',
  },
]

const leadership = [
  { name: 'Priya Chandran', role: 'Executive Director', focus: 'Governance' },
  { name: 'Marcus Ferreira', role: 'Director of Programs', focus: 'Field Operations' },
  { name: 'Yuki Tanaka', role: 'Director of Finance', focus: 'Audit Trail' },
  { name: 'Naomi Okafor', role: 'Communications Director', focus: 'Public Record' },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-white px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-[var(--container-width)]">
          <section>
            <SubpageHeader
              title="Proof before promises."
              description="OHMT Foundation was founded in 2015 on a simple rule: publish the number, name the person, and show the receipts."
            />
            <div className="relative mt-12 h-[240px] overflow-hidden bg-[var(--color-field)] md:h-[400px] ohmt033-photo-frame">
              <Image
                unoptimized
                src="/templates/OHMT033-foundation/about-wide.png"
                alt="Foundation staff reviewing program records in a community operations room"
                fill
                priority
                className="object-cover object-[center_48%] ohmt033-photo-cool"
                sizes="1440px"
              />
            </div>
          </section>

          <section className="mt-12 grid gap-8 md:mt-32 md:gap-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-heading text-4xl font-semibold leading-[var(--leading-heading)] text-[var(--color-text)] md:text-5xl">
                What changed was the scale. The rule stayed the same.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <p className="text-base leading-relaxed text-[var(--color-text)] md:text-base">
                Four volunteer engineers wanted proof that their weekends were making a difference, not just a feeling
                that they were. That instinct became the Foundation&rsquo;s operating model.
              </p>
              <p className="text-base leading-relaxed text-[var(--color-text-muted)] md:text-base">
                Ten years later, the work spans four programs across twelve countries. Each program still has to report
                a number we would be embarrassed to publish if it were false.
              </p>
            </div>
          </section>

          <section className="mt-12 grid gap-8 md:mt-12 md:grid-cols-3 md:gap-6">
            {principles.map((principle, i) => (
              <div key={principle.title} className="contents">
                <article className="flex flex-col items-start md:w-[432px]">
                  <p className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs font-bold leading-none text-white">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 font-heading text-2xl font-semibold leading-[var(--leading-heading)] text-[var(--color-text)] md:mt-6 md:text-3xl">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[var(--leading-body)] text-[#5a615c] md:mt-6 md:max-w-[360px] md:text-[var(--color-text-muted)]">
                    {principle.body}
                  </p>
                </article>
                {i < principles.length - 1 ? <div className="h-px bg-[#d8dee5] md:hidden" /> : null}
              </div>
            ))}
          </section>
        </div>
      </section>

      <section className="bg-[#f5f7fa] px-6 py-16 md:bg-[var(--color-bg)] md:px-12 md:py-32">
        <div className="mx-auto max-w-[var(--container-width)]">
          <section>
            <h2 className="font-heading max-w-[860px] text-3xl font-semibold leading-[var(--leading-heading)] text-[var(--color-text)] md:text-5xl">
              A small leadership table, because accountability needs names.
            </h2>
            <div className="mt-8 md:mt-6">
              {leadership.map((person) => (
                <div
                  key={person.name}
                  className="grid gap-2 border-t border-[#d8dee5] py-4 leading-[var(--leading-heading)] md:grid-cols-3 md:gap-6 md:border-[var(--color-border)] md:py-3"
                >
                  <p className="font-heading text-base font-semibold text-[var(--color-text)]">{person.name}</p>
                  <p className="text-sm text-[#5a615c] md:text-[var(--color-text-muted)]">{person.role}</p>
                  <p className="text-sm font-semibold text-[var(--color-primary)] md:font-medium">{person.focus}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="py-5 md:py-0">
                <p className="font-heading text-5xl font-bold leading-none text-[var(--color-text)]">
                  {stat.prefix}
                  {stat.value.toLocaleString('en-US', {
                    minimumFractionDigits: stat.decimals ?? 0,
                    maximumFractionDigits: stat.decimals ?? 0,
                  })}
                  <span className="text-[var(--color-primary)]">{stat.suffix}</span>
                </p>
                <p className="mt-2 text-xs font-normal leading-[var(--leading-heading)] text-[var(--color-text-muted)] md:text-sm md:font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-12 flex flex-col justify-center gap-8 bg-white p-6 md:flex-row md:items-center md:justify-between md:p-12">
            <p className="max-w-[480px] text-base leading-relaxed text-[var(--color-text-muted)]">
              Want the full ledger behind these numbers,
              <br className="hidden md:block" /> not just the summary?
            </p>
            <ButtonLink href={`${base}/newsroom`} variant="outline" size="sm">
              Find Out More
            </ButtonLink>
          </section>
        </div>
      </section>
    </>
  )
}
