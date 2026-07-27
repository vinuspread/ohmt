import { ButtonLink } from '../ui/ButtonLink'

const base = '/ko/templates/OHMT033-foundation'

const notes = [
  {
    title: '확인 가능한 지표부터 설계합니다',
    body: '출석 기록과 지원금 집행 내역, 봉사 시간, 후속 성과처럼 나중에 다시 확인할 수 있는 자료를 프로그램의 핵심 지표로 삼습니다.',
  },
  {
    title: '숫자 뒤의 사람을 함께 기록합니다',
    body: '공개하는 수치는 학생과 이웃, 봉사자, 가족 중 처음 대학에 진학한 졸업생의 변화를 설명하기 위한 자료입니다.',
  },
]

export function FoundationIntro() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-6 border-t border-[var(--color-text)] pt-6 md:pt-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-semibold leading-none text-[var(--color-accent)]">OHMT 파운데이션 소개</p>
          <h2 className="mt-6 max-w-[560px] font-heading text-[length:var(--text-h2)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)] md:mt-6">
            확인 가능한 변화를 만들고 기록하는 재단</h2>
          <ButtonLink href={`${base}/about`} variant="outline" size="sm" className="mt-6 md:mt-6">
            운영 원칙 보기</ButtonLink>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:items-start md:gap-6 lg:pt-9">
          <div>
            <p className="max-w-[520px] text-base leading-relaxed text-[var(--color-text)]">
              OHMT 파운데이션은 참여자와 담당자를 밝히고, 성과를 수치로 기록하며, 시간이 지나도 다시 확인할 수 있는 프로그램을 운영합니다.
              이 사이트에는 캠페인 문구보다 프로그램의 사람과 과정, 근거 자료를 중심으로 담았습니다.</p>
          </div>
          <div className="grid gap-6">
            {notes.map((note) => (
              <div key={note.title}>
                <h3 className="font-heading text-lg font-semibold leading-snug text-[var(--color-text)]">
                  {note.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{note.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
