import type { Metadata } from 'next'
import { news } from '../data/news'
import { ImageCard } from '../_components/ui/ImageCard'
import { SectionShell } from '../_components/ui/SectionShell'
import { SubpageHeader } from '../_components/ui/SubpageHeader'

export const metadata: Metadata = {
  title: 'Newsroom',
  description: 'The latest program milestones, launches, and announcements from OHMT Foundation.',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function NewsroomPage() {
  return (
    <SectionShell className="md:py-24">
      <SubpageHeader title="What's new across the Foundation." />
      <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
        {news.map((item) => (
          <ImageCard
            key={item.id}
            image={item.image}
            alt={item.title}
            meta={`${item.tag} - ${formatDate(item.date)}`}
            title={item.title}
            description={item.excerpt}
          />
        ))}
      </div>
    </SectionShell>
  )
}
