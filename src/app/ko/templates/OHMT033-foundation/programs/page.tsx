import type { Metadata } from 'next'
import { programs } from '../data/programs'
import { ProgramRow } from '../_components/ui/ProgramRow'
import { SectionShell } from '../_components/ui/SectionShell'
import { SubpageHeader } from '../_components/ui/SubpageHeader'

export const metadata: Metadata = {
  title: '프로그램',
  description: '청소년 기술 교육부터 지역 건강 지원, 숲 복원, 장학 사업까지 OHMT 파운데이션의 네 가지 프로그램을 소개합니다.',
}

export default function ProgramsPage() {
  return (
    <SectionShell className="md:py-24">
      <SubpageHeader
        title={"네 가지 프로그램,\n하나의 운영 기준"}
        description={"각 프로그램은 참여자 이야기와 핵심 성과 지표를 함께 공개합니다.\n결과를 직접 확인할 수 있도록 운영합니다."}
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
