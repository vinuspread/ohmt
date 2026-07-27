import type { Metadata } from 'next'
import Image from 'next/image'
import { stats } from '../data/stats'
import { ButtonLink } from '../_components/ui/ButtonLink'
import { SectionShell } from '../_components/ui/SectionShell'
import { SubpageHeader } from '../_components/ui/SubpageHeader'

const base = '/ko/templates/OHMT033-foundation'

export const metadata: Metadata = {
  title: '소개',
  description: 'OHMT 파운데이션은 2015년, 성과를 숫자로 공개하고 참여자의 이름과 근거를 함께 기록한다는 원칙으로 시작했습니다.',
}

const principles = [
  {
    title: '성과를 숫자로 공개합니다',
    body: '모든 프로그램은 분기마다 핵심 지표를 정리하고 내부 검토를 거쳐 사이트에 공개합니다.',
  },
  {
    title: '사람과 역할을 함께 기록합니다',
    body: '스토리에는 실제 참여자의 이름과 역할, 확인된 결과만 담습니다. 여러 사례를 합쳐 만든 가상의 인물은 사용하지 않습니다.',
  },
  {
    title: '근거 자료를 남깁니다',
    body: '지원금 집행 내역과 봉사 시간은 요약 수치에 그치지 않고 요청 시 확인할 수 있는 기록으로 보관합니다.',
  },
]

const leadership = [
  { name: '프리야 찬드란', role: '상임이사', focus: '운영 체계' },
  { name: '마르쿠스 페레이라', role: '프로그램 총괄', focus: '현장 운영' },
  { name: '유키 다나카', role: '재무 책임자', focus: '재무·감사' },
  { name: '나오미 오카포', role: '커뮤니케이션 책임자', focus: '정보 공개' },
]

export default function AboutPage() {
  return (
    <SectionShell className="md:py-24">
        <section>
          <SubpageHeader
            title="좋은 의도를 확인 가능한 기록으로."
            description="OHMT 파운데이션은 2015년, 성과를 숫자로 공개하고 참여자의 이름과 근거를 함께 기록한다는 원칙으로 시작했습니다."
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
              규모는 커졌지만 운영 원칙은 그대로입니다.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <p className="text-base leading-relaxed text-[var(--color-text)] md:text-base">
              네 명의 자원봉사 엔지니어는 좋은 일을 했다는 만족보다 실제 변화가 있었는지 확인하고 싶었습니다.
              그 기준이 지금의 운영 방식으로 이어졌습니다.</p>
            <p className="text-base leading-relaxed text-[var(--color-text-muted)] md:text-base">
              10년이 지난 지금 활동은 12개국, 4개 프로그램으로 확장됐습니다. 규모가 달라져도 모든 프로그램은
              출석과 집행 내역, 후속 성과처럼 구체적인 수치를 보고해야 합니다.</p>
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
            책임지는 사람과 역할을 공개합니다.</h2>
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
            성과 수치의 근거와 세부 기록을 확인해보세요.</p>
          <ButtonLink href={`${base}/newsroom`} variant="outline" size="sm">
            연차보고서 확인</ButtonLink>
        </section>
    </SectionShell>
  )
}
