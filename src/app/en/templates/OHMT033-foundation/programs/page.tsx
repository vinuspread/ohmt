import type { Metadata } from 'next'
import { programs } from '../data/programs'
import { ProgramRow } from '../_components/ui/ProgramRow'
import { SectionShell } from '../_components/ui/SectionShell'
import { SubpageHeader } from '../_components/ui/SubpageHeader'

export const metadata: Metadata = {
  title: 'Programs',
  description: 'Four community programs run by OHMT Foundation, from youth robotics education to reforestation.',
}

export default function ProgramsPage() {
  return (
    <SectionShell className="md:py-24">
      <SubpageHeader
        title="Four programs. One standard of proof."
        description="Each program publishes its own numbers and its own stories. We would rather you check our work than take our word for it."
      />
      <div className="mt-12 flex flex-col gap-16 md:mt-16 md:gap-24">
        {programs.map((p, i) => (
          <ProgramRow
            key={p.id}
            id={p.id}
            name={p.name}
            stat={p.stat}
            tagline={p.tagline}
            description={p.description}
            image={p.image}
            imageAlt={`${p.name} program activity`}
            reversed={i % 2 === 1}
          />
        ))}
      </div>
    </SectionShell>
  )
}
