import { ButtonLink } from '../ui/ButtonLink'

const base = '/ko/templates/OHMT033-foundation'

const notes = [
  {
    title: '검증을 전제로 설계합니다',
    body: '출석 기록, 지원금 집행 내역, 봉사 시간, 후속 성과처럼 나중에 확인할 수 있는 데이터가 프로그램의 기준이 됩니다.',
  },
  {
    title: '숫자는 사람에게 돌아갑니다',
    body: '우리가 공개하는 숫자는 학생, 이웃, 봉사자, 첫 세대 졸업생처럼 이름과 맥락이 있는 사람을 설명하기 위한 도구입니다.',
  },
]

export function FoundationIntro() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-6 border-t border-[var(--color-text)] pt-6 md:pt-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-semibold leading-none text-[var(--color-accent)]">VERITAS 재단 소개</p>
          <h2 className="mt-6 max-w-[560px] font-heading text-[length:var(--text-h2)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)] md:mt-6">
            확인 가능한 임팩트를 남기기 위해 완성한 재단.
          </h2>
          <ButtonLink href={`${base}/about`} variant="outline" size="sm" className="mt-6 md:mt-6">
            재단 소개 보기
          </ButtonLink>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:items-start md:gap-6 lg:pt-9">
          <div>
            <p className="max-w-[520px] text-base leading-relaxed text-[var(--color-text)]">
              VERITAS 재단은 이름을 밝히고, 숫자로 세고, 시간이 지나도 다시 확인할 수 있는 프로그램만 지원합니다.
              그래서 이 사이트는 캠페인 페이지보다 사람들이 다시 볼 수 있는 공개 기록에 가깝습니다.
            </p>
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
