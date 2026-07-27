import type { Metadata } from 'next'
import Image from 'next/image'
import { IMG } from '../data/figures'
import { Button } from '../_components/ui/Button'
import { SubHero } from '../_components/ui/SubHero'

export const metadata: Metadata = {
  title: 'FORMA 피규어 | 스튜디오 소개',
  description: 'FORMA 피규어의 원형 제작, 소량 성형, 손도색, 에디션 번호 관리 과정을 소개합니다.',
}

const PROCESS = [
  {
    title: '원형 제작',
    body: '모든 피규어는 하나의 작업대에서 시작합니다.\n클레이 원형이든 디지털 원형이든, 멀리서 보아도 실루엣이 분명해질 때까지 다듬은 뒤 성형 단계로 넘깁니다.',
  },
  {
    title: '성형',
    body: '폴리스톤과 레진, 비닐 소재를 보통 50개 안팎의 소량으로 나누어 제작합니다.\n몰드 번호와 생산 수량을 기록하며, 판매가 끝난 에디션은 같은 구성으로 다시 생산하지 않습니다.',
  },
  {
    title: '도색과 마감',
    body: '밑색은 에어브러시로 칠하고, 세부 도색의 경계는 손으로 정리합니다.\n각 피규어는 번호를 새기기 전 두 차례 검수를 거쳐 표면과 색상 경계를 확인합니다.',
  },
]

const ARTISTS = [
  { name: 'Rin Okabe', role: '캐릭터 원형 제작·도색 디렉션' },
  { name: 'Hana Lieu', role: '치비·아트 토이 라인' },
  { name: 'Mikael Sund', role: '크리처 원형 제작·반투명 성형' },
  { name: 'FORMA Mecha Bureau', role: '프레임 설계·관절 구조' },
]

export default function StoryPage() {
  return (
    <div className="pt-16">
      <SubHero
        title={'한 작업대에서\n완성되는 피규어'}
        label="스튜디오 소개"
        description={
          'FORMA 피규어가 원형 제작부터 에디션 번호 각인까지 거치는 과정을 소개합니다.\n제작자와 생산 수량, 판매 종료 기준도 함께 공개합니다.'
        }
      />

      <section id="process" className="mx-auto max-w-[1440px] scroll-mt-16 px-4 py-16 lg:px-6 lg:py-24">
        <h2 className="max-w-[720px] text-4xl leading-[var(--leading-display)] tracking-normal text-[var(--color-ink)] lg:text-6xl">
          피규어 제작 과정</h2>
        <div className="mt-12 grid grid-cols-1 gap-6">
          {PROCESS.map((p) => (
            <article
              key={p.title}
              className="grid grid-cols-1 gap-4 bg-[var(--color-bg-tile)] p-6 md:grid-cols-2 md:gap-12"
            >
              <h3 className="text-2xl tracking-normal text-[var(--color-ink)]">{p.title}</h3>
              <p className="preserve-lines max-w-[600px] text-base leading-relaxed text-[var(--color-ink-muted)]">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-4 pb-16 lg:grid-cols-2 lg:gap-24 lg:px-6 lg:pb-24">
        <div className="relative aspect-[7/5] bg-[var(--color-bg-tile)]">
          <Image
            src={`${IMG}/craft-01.webp`}
            alt="마스킹 파츠가 놓인 에어브러시 작업대"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="max-w-[520px] text-4xl leading-[var(--leading-display)] tracking-normal text-[var(--color-ink)] lg:text-6xl">
            판매 전에
            <br />
            제작 수량을 공개합니다.
          </h2>
          <p className="mt-6 max-w-[520px] text-base leading-relaxed text-[var(--color-ink-muted)]">
            판매가 시작되면 에디션 수량과 판매 현황을 함께 표시합니다.
            <br className="hidden sm:block" />
            판매가 끝난 에디션은 같은 구성으로 다시 만들지 않으며,
            <br className="hidden sm:block" />
            베이스 플레이트에 새긴 번호는 각 피규어의 제작 기록으로 남습니다.
          </p>
        </div>
      </section>

      <section id="artists" className="scroll-mt-16 bg-[var(--color-bg-tile)]">
        <div className="mx-auto max-w-[1440px] px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="max-w-[720px] text-4xl leading-[var(--leading-display)] tracking-normal text-[var(--color-ink)] lg:text-6xl">
            참여 아티스트</h2>
          <ul className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2">
            {ARTISTS.map((a) => (
              <li key={a.name} className="flex items-baseline justify-between gap-4 bg-[var(--color-bg)] p-6">
                <span className="text-xl font-semibold text-[var(--color-ink)]">{a.name}</span>
                <span className="meta-label text-right text-[var(--color-ink-muted)]">{a.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="visit" className="mx-auto max-w-[1440px] scroll-mt-16 px-4 py-16 lg:px-6 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="max-w-[520px] text-4xl leading-[var(--leading-display)] tracking-normal text-[var(--color-ink)] lg:text-6xl">
              새 소식이 있을 때만
              <br />
              보내드립니다.
            </h2>
            <p className="mt-6 max-w-[480px] text-base leading-relaxed text-[var(--color-ink-muted)]">
              새로운 원형과 제작 수량, 예약 판매 시작 시간을 이메일로 안내합니다.
              <br className="hidden sm:block" />
              배송과 교환·불량 문의도 같은 창구에서 처리합니다.
            </p>
          </div>
          <form className="flex max-w-[480px] flex-col gap-6" aria-label="신규 발매 알림 신청">
            <div>
              <label htmlFor="alert-name" className="meta-label text-[var(--color-ink-faint)]">
                이름
              </label>
              <input
                id="alert-name"
                name="name"
                type="text"
                autoComplete="name"
                className="mt-2 w-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-base text-[var(--color-ink)]"
              />
            </div>
            <div>
              <label htmlFor="alert-email" className="meta-label text-[var(--color-ink-faint)]">
                이메일
              </label>
              <input
                id="alert-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-2 w-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-base text-[var(--color-ink)]"
              />
            </div>
            <Button variant="solid" type="submit">
              신규 발매 알림 받기</Button>
            <p className="meta-label text-[var(--color-ink-faint)]">
              데모 폼입니다. 이 템플릿에서는 입력한 정보가 전송되지 않습니다.
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}
