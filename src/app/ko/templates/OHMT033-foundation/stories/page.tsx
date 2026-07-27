import type { Metadata } from 'next'
import { stories } from '../data/stories'
import { ImageCard } from '../_components/ui/ImageCard'
import { SectionShell } from '../_components/ui/SectionShell'
import { SubpageHeader } from '../_components/ui/SubpageHeader'

const base = '/ko/templates/OHMT033-foundation'

export const metadata: Metadata = {
  title: '스토리',
  description: 'OHMT 파운데이션 프로그램에 참여한 학생과 봉사자, 졸업생의 실제 이야기를 소개합니다.',
}

export default function StoriesPage() {
  return (
    <SectionShell className="md:py-24">
      <SubpageHeader
        title="프로그램을 움직이는 사람들의 이야기"
        description="모든 성과 수치 뒤에는 프로그램에 참여하고 현장을 지킨 사람이 있습니다. 그들의 이야기를 소개합니다."
      />
      <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
        {stories.map((s) => (
          <ImageCard
            key={s.id}
            href={`${base}/stories/${s.id}`}
            image={s.image}
            alt={`${s.name}, ${s.role}`}
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
