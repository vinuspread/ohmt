import type { Metadata } from 'next'
import { Badge, statusBadgeVariant } from '../_components/ui/Badge'
import { Button } from '../_components/ui/Button'
import { FigureCard } from '../_components/ui/FigureCard'
import { LabelRow } from '../_components/ui/LabelRow'
import { SubHero } from '../_components/ui/SubHero'
import {
  ART_TOY_DROPS,
  BASE,
  FIGURES,
  NEW_DROPS,
  figuresBySlugs,
  formatUsd,
  lineLabel,
  statusLabel,
} from '../data/figures'

export const metadata: Metadata = {
  title: 'Drops - OHMT Forma Figures',
  description: 'FORMA의 신규 발매, 예약 판매, 품절 에디션을 확인하는 드롭 페이지.',
}

const openDrops = figuresBySlugs(NEW_DROPS)
const artToyDrops = figuresBySlugs(ART_TOY_DROPS)
const preorderCount = FIGURES.filter((figure) => figure.status === 'Pre-order').length
const liveCount = FIGURES.filter((figure) => figure.status === 'In stock').length
const soldOutCount = FIGURES.filter((figure) => figure.status === 'Sold out').length

const ledgerRows = [
  { label: '판매 중', value: liveCount.toString(), caption: '바로 구매할 수 있는 에디션' },
  { label: '예약 중', value: preorderCount.toString(), caption: '클레임 윈도가 열린 넘버드 런' },
  { label: '종료', value: soldOutCount.toString(), caption: '아카이브로 넘어간 에디션' },
]

export default function DropsPage() {
  return (
    <div className="pt-16">
      <SubHero
        title="한 번에 하나의 런"
        label="드롭"
        description="지금 열려 있는 드롭과 종료된 에디션을 함께 보여줍니다. 수량, 소진율, 상태를 먼저 보고 원하는 피스를 고를 수 있습니다."
      >
        <Button href={`${BASE}/shop`} variant="solid">
          전체 보기
        </Button>
        <Button href={`${BASE}/story#visit`}>드롭 알림 받기</Button>
      </SubHero>

      <LabelRow label="드롭 원장" link={{ label: '전체 카탈로그', href: `${BASE}/shop` }} />
      <section className="grid grid-cols-1 gap-6 bg-[var(--color-bg)] px-4 py-6 md:grid-cols-3 lg:px-6">
        {ledgerRows.map((row) => (
          <article key={row.label} className="bg-[var(--color-bg-tile)] px-6 py-10 lg:px-8 lg:py-14">
            <p className="meta-label text-[var(--color-ink-faint)]">{row.label}</p>
            <p className="mt-4 font-mono text-6xl font-light tracking-normal text-[var(--color-ink)] md:text-7xl">
              {row.value}
            </p>
            <p className="mt-4 text-sm leading-[var(--leading-body)] text-[var(--color-ink-muted)]">
              {row.caption}
            </p>
          </article>
        ))}
      </section>

      <LabelRow label="오픈 드롭" link={{ label: '전체 보기', href: `${BASE}/shop` }} />
      <section className="grid grid-cols-1 gap-6 bg-[var(--color-bg)] px-4 py-6 sm:grid-cols-2 lg:grid-cols-5 lg:px-6">
        {openDrops.map((figure, index) => (
          <FigureCard key={figure.slug} figure={figure} priority={index < 3} />
        ))}
      </section>

      <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-4 py-16 lg:grid-cols-2 lg:gap-24 lg:px-6 lg:py-24">
        <div>
          <p className="meta-label mb-6 text-[var(--color-ink-faint)]">출시 노트</p>
          <h2 className="text-4xl leading-[var(--leading-heading)] tracking-normal text-[var(--color-ink)] lg:text-6xl">
            구매 전에 수량과 상태를 먼저 공개합니다.
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {FIGURES.map((figure) => (
            <article
              key={figure.slug}
              className="grid grid-cols-1 gap-4 bg-[var(--color-bg-tile)] p-5 md:grid-cols-3 md:items-center md:p-6"
            >
              <div>
                <p className="text-lg font-semibold text-[var(--color-ink)]">{figure.name}</p>
                <p className="meta-label mt-1 text-[var(--color-ink-faint)]">{lineLabel(figure.line)}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant={statusBadgeVariant(figure.status)}>{statusLabel(figure.status)}</Badge>
                <span className="meta-label text-[var(--color-ink-muted)]">{figure.claimedPct}% 소진</span>
              </div>
              <div className="flex items-center justify-between gap-4 md:justify-end">
                <span className="value-text text-[var(--color-ink)]">{formatUsd(figure.priceUsd)}</span>
                <Button href={`${BASE}/figures/${figure.slug}`} className="px-5 py-2">
                  보기
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <LabelRow label="아트 토이" link={{ label: '라인 보기', href: `${BASE}/shop?line=chibi` }} />
      <section className="grid grid-cols-1 gap-6 bg-[var(--color-bg)] px-4 py-6 sm:grid-cols-2 lg:grid-cols-5 lg:px-6">
        {artToyDrops.map((figure) => (
          <FigureCard key={figure.slug} figure={figure} />
        ))}
      </section>
    </div>
  )
}
