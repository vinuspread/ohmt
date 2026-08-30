import type { Metadata } from 'next'
import { programs } from '../data/programs'
import { ProgramRow } from '../_components/ui/ProgramRow'
import { SectionShell } from '../_components/ui/SectionShell'
import { SubpageHeader } from '../_components/ui/SubpageHeader'

export const metadata: Metadata = {
  title: '프로그램',
  description: '청소년 로보틱스 교육부터 숲 복원까지 OHMT 파운데이션이 운영하는 네 가지 커뮤니티 프로그램.',
}

export default function ProgramsPage() {
  return (
    <SectionShell className="md:py-24">
      <SubpageHeader
        title="네 가지 프로그램. 하나의 증명 기준."
        description="각 프로그램은 자체 숫자와 스토리를 공개합니다. 말로 믿기보다 직접 확인할 수 있도록 설계했습니다."
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
            imageAlt={`${p.name} 프로그램 활동 이미지`}
            reversed={i % 2 === 1}
          />
        ))}
      </div>
    </SectionShell>
  )
}
