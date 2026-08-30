import type { Metadata } from 'next'
import Image from 'next/image'
import { stats } from '../data/stats'
import { ButtonLink } from '../_components/ui/ButtonLink'
import { SectionShell } from '../_components/ui/SectionShell'
import { SubpageHeader } from '../_components/ui/SubpageHeader'

const base = '/ko/templates/OHMT033-foundation'

export const metadata: Metadata = {
  title: '소개',
  description: 'OHMT 파운데이션은 2015년, 숫자를 공개하고 사람의 이름을 밝히고 근거를 보여준다는 원칙으로 시작했습니다.',
}

const principles = [
  {
    title: '숫자를 공개합니다',
    body: '모든 프로그램은 분기마다 핵심 지표를 보고하고, 검토를 거친 뒤에만 사이트에 공개됩니다.',
  },
  {
    title: '사람의 이름을 밝힙니다',
    body: '스토리에는 실제 이름과 역할, 실제 결과만 담습니다. 여러 사례를 합친 가상의 인물은 쓰지 않습니다.',
  },
  {
    title: '근거를 보여줍니다',
    body: '지원금 집행 내역과 봉사 시간 기록은 연차보고서 요약이 아니라 요청 시 확인할 수 있는 자료로 남깁니다.',
  },
]

const leadership = [
  { name: '프리야 찬드란', role: '상임이사', focus: '거버넌스' },
  { name: '마르쿠스 페레이라', role: '프로그램 총괄', focus: '현장 운영' },
  { name: '유키 다나카', role: '재무 책임자', focus: '감사 기록' },
  { name: '나오미 오카포', role: '커뮤니케이션 책임자', focus: '공개 기록' },
]

export default function AboutPage() {
  return (
    <SectionShell className="md:py-24">
        <section>
          <SubpageHeader
            title="약속이 아니라 근거로."
            description="OHMT 파운데이션은 2015년, 숫자를 공개하고 사람의 이름을 밝히고 근거를 보여준다는 단순한 원칙으로 시작했습니다."
          />
          <div className="relative mt-12 h-[240px] overflow-hidden bg-[var(--color-field)] md:h-[400px] ohmt033-photo-frame">
            <Image
              unoptimized
              src="/templates/OHMT033-foundation/about-wide.png"
              alt="파운데이션 팀이 커뮤니티 운영 공간에서 프로그램 기록을 검토하는 모습"
              fill
              priority
              className="object-cover object-[center_48%] ohmt033-photo-cool"
              sizes="1440px"
            />
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:mt-24 md:gap-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-heading text-[length:var(--text-h3)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)]">
              커진 것은 규모이고, 남은 것은 원칙입니다.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <p className="text-base leading-relaxed text-[var(--color-text)] md:text-base">
              네 명의 자원봉사 엔지니어가 원한 것은 의미 있는 일을 한다는 느낌이 아니라, 실제로 변화가 생겼다는 증거였습니다.
              그 태도가 지금의 운영 방식이 되었습니다.
            </p>
            <p className="text-base leading-relaxed text-[var(--color-text-muted)] md:text-base">
              10년이 지난 지금 활동은 12개국, 4개 프로그램으로 확장됐습니다. 그래도 모든 프로그램은 거짓이라면 공개하기
              부끄러울 만큼 구체적인 숫자를 보고해야 합니다.
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:mt-24 lg:grid-cols-3">
          {principles.map((principle, i) => (
            <article key={principle.title} className="grid md:min-h-[220px] md:grid-rows-[auto_1fr]">
              <p className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs font-bold text-white">
                {String(i + 1).padStart(2, '0')}
              </p>
              <div className="mt-6 self-end md:mt-12">
                <h3 className="font-heading text-[length:var(--text-lead)] font-semibold leading-tight text-[var(--color-text)]">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{principle.body}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12 md:mt-24">
          <h2 className="font-heading max-w-[860px] text-[length:var(--text-h3)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)]">
            책임에는 이름이 필요합니다.
          </h2>
          <div className="mt-6 divide-y divide-[var(--color-border)] md:mt-6">
            {leadership.map((person) => (
              <div key={person.name} className="grid gap-2 py-4 sm:grid-cols-3">
                <p className="font-heading text-base font-semibold text-[var(--color-text)]">{person.name}</p>
                <p className="text-sm text-[var(--color-text-muted)]">{person.role}</p>
                <p className="text-sm font-medium text-[var(--color-primary)]">{person.focus}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid grid-cols-1 gap-6 md:mt-24 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id}>
              <p className="font-heading text-5xl font-bold leading-none tracking-tight text-[var(--color-text)] md:text-5xl">
                {stat.prefix}
                {stat.value.toLocaleString('ko-KR', {
                  minimumFractionDigits: stat.decimals ?? 0,
                  maximumFractionDigits: stat.decimals ?? 0,
                })}
                <span className="text-[var(--color-primary)]">{stat.suffix}</span>
              </p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--color-text-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-12 flex flex-col gap-8 bg-white p-6 sm:flex-row sm:items-center sm:justify-between md:mt-24 md:px-12 md:py-12">
          <p className="max-w-[480px] text-base leading-relaxed text-[var(--color-text-muted)]">
            요약이 아니라 이 숫자 뒤의 전체 기록이 궁금하신가요?
          </p>
          <ButtonLink href={`${base}/newsroom`} variant="outline" size="sm">
            연차보고서 보기
          </ButtonLink>
        </section>
    </SectionShell>
  )
}
