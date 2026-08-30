import type { Metadata } from 'next'
import Image from 'next/image'
import { IMG } from '../data/figures'
import { Button } from '../_components/ui/Button'
import { SubHero } from '../_components/ui/SubHero'

export const metadata: Metadata = {
  title: 'OHMT - Forma Figures | Story',
  description: 'FORMA의 제작 방식: 조형, 소량 캐스팅, 손도색, 공개 에디션 원장.',
}

const PROCESS = [
  {
    title: '조형',
    body: '첫 조형은 한 책상에서 시작합니다. 클레이 마케트이든 디지털 마케트이든, 멀리서도 실루엣이 또렷하게 읽히기 전에는 캐스팅으로 넘기지 않습니다.',
  },
  {
    title: '캐스팅',
    body: '폴리스톤, 레진, 비닐을 보통 50개 안팎의 작은 배치로 나눠 붓습니다. 몰드 번호와 생산 수량을 기록하고, 에디션이 닫히면 같은 런을 다시 뽑지 않습니다.',
  },
  {
    title: '마감',
    body: '베이스 코트는 에어브러시로 올리고, 마스크 라인은 손으로 잡습니다. 각 피스는 번호를 새기기 전 같은 벤치를 두 번 지나며 표면과 컬러 경계를 확인합니다.',
  },
]

const ARTISTS = [
  { name: 'Rin Okabe', role: '캐릭터 조형, 페인트 디렉션' },
  { name: 'Hana Lieu', role: 'Chibi와 Art Toy 라인' },
  { name: 'Mikael Sund', role: '크리처 조형, 반투명 캐스팅' },
  { name: 'FORMA Mecha Bureau', role: '프레임 설계, 관절 구조' },
]

export default function StoryPage() {
  return (
    <div className="pt-16">
      <SubHero
        title="하나의 벤치, 모든 피규어"
        label="스튜디오 스토리"
        description="FORMA 피규어가 조형에서 번호 각인까지 거치는 과정을 보여줍니다. 누가 만들고, 몇 개를 만들고, 어떤 기준으로 닫는지까지 함께 기록합니다."
      />

      <section id="process" className="mx-auto max-w-[1440px] scroll-mt-16 px-4 py-16 lg:px-6 lg:py-24">
        <h2 className="max-w-[720px] text-4xl leading-[var(--leading-display)] tracking-normal text-[var(--color-ink)] lg:text-6xl">
          피규어가 만들어지는 순서
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6">
          {PROCESS.map((p) => (
            <article
              key={p.title}
              className="grid grid-cols-1 gap-4 bg-[var(--color-bg-tile)] p-6 md:grid-cols-2 md:gap-12"
            >
              <h3 className="text-2xl tracking-normal text-[var(--color-ink)]">{p.title}</h3>
              <p className="max-w-[600px] text-base leading-relaxed text-[var(--color-ink-muted)]">{p.body}</p>
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
            판매가 열리기 전에 수량을 먼저 공개합니다.
          </h2>
          <p className="mt-6 max-w-[480px] text-base leading-relaxed text-[var(--color-ink-muted)]">
            드롭이 열리면 에디션 수량, 소진율, 상태가 함께 표시됩니다. 닫힌 런은 다시 캐스팅하지 않고,
            베이스 플레이트에 새긴 번호는 그 피스의 기록으로 남습니다.
          </p>
        </div>
      </section>

      <section id="artists" className="scroll-mt-16 bg-[var(--color-bg-tile)]">
        <div className="mx-auto max-w-[1440px] px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="max-w-[720px] text-4xl leading-[var(--leading-display)] tracking-normal text-[var(--color-ink)] lg:text-6xl">
            아티스트
          </h2>
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
              드롭마다 한 번만 보냅니다.
            </h2>
            <p className="mt-6 max-w-[480px] text-base leading-relaxed text-[var(--color-ink-muted)]">
              새 조형, 에디션 수량, 클레임 윈도 오픈 시간을 메일로 보냅니다. 배송과 클레임 문의도 같은 스튜디오 데스크에서 이어서 처리합니다.
            </p>
          </div>
          <form className="flex max-w-[480px] flex-col gap-6" aria-label="드롭 알림 신청">
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
              드롭 알림 받기
            </Button>
            <p className="meta-label text-[var(--color-ink-faint)]">
              데모 폼입니다. 이 템플릿에서는 입력한 정보가 전송되지 않습니다.
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}
