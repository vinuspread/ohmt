import type { Metadata } from 'next'
import { stories } from '../data/stories'
import { ImageCard } from '../_components/ui/ImageCard'
import { SectionShell } from '../_components/ui/SectionShell'
import { SubpageHeader } from '../_components/ui/SubpageHeader'

const base = '/ko/templates/OHMT033-foundation'

export const metadata: Metadata = {
  title: '스토리',
  description: 'OHMT 파운데이션 프로그램 뒤에 있는 학생, 봉사자, 졸업생의 실제 이야기.',
}

export default function StoriesPage() {
  return (
    <SectionShell className="md:py-24">
      <SubpageHeader
        title="모든 프로그램 뒤에 있는 이름들."
        description="우리가 공개하는 모든 숫자는 한 사람이 현장에 나서기로 한 결정에서 시작됩니다. 그들의 이야기를 모았습니다."
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
