import type { Metadata } from 'next'
import { stories } from '../data/stories'
import { ImageCard } from '../_components/ui/ImageCard'
import { SectionShell } from '../_components/ui/SectionShell'
import { SubpageHeader } from '../_components/ui/SubpageHeader'

const base = '/en/templates/OHMT033-foundation'

export const metadata: Metadata = {
  title: 'Stories',
  description: 'Real stories from the people behind OHMT Foundation programs - students, volunteers, and graduates.',
}

export default function StoriesPage() {
  return (
    <SectionShell className="md:py-24">
      <SubpageHeader
        title="The names behind every program."
        description="Every statistic we publish started as one person&rsquo;s decision to show up. These are their stories, in their own words."
      />
      <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
        {stories.map((s) => (
          <ImageCard
            key={s.id}
            href={`${base}/stories/${s.id}`}
            image={s.image}
            alt={`Portrait of ${s.name}, ${s.role}`}
            meta={s.program}
            title={s.name}
            description={s.role}
            imageClassName="object-cover object-[center_38%]"
          />
        ))}
      </div>
    </SectionShell>
  )
}
