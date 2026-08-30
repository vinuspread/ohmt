'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { clsx } from 'clsx'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { IMG, formatUsd, lineLabel, type Figure } from '../../data/figures'
import { Badge, statusBadgeLabel, statusBadgeVariant } from '../ui/Badge'
import { SpecBar } from '../ui/SpecBar'
import { useCart } from '../CartContext'

function AccordionRow({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const reduced = useReducedMotion()

  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        type="button"
        className="ui-label flex w-full items-center justify-between py-4 text-left text-[var(--color-ink)]"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {title}
        <ChevronDown
          size={16}
          aria-hidden
          className={clsx('transition-transform duration-200', open && 'rotate-180')}
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduced ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-base leading-relaxed text-[var(--color-ink-muted)]">{children}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export function FigureDetail({ figure }: { figure: Figure }) {
  const gallery = [figure.images.main, figure.images.alt]
  const [activeImage, setActiveImage] = useState(0)
  const [colorway, setColorway] = useState(figure.colorways[0]?.id ?? '')
  const [added, setAdded] = useState(false)
  const { add } = useCart()

  const purchasable = figure.status === 'In stock' || figure.status === 'Pre-order'
  const detailStats = [
    { label: '스케일', value: figure.scale },
    { label: '높이', value: `${figure.heightMm} mm` },
    { label: '에디션 수량', value: figure.editionSize.toString() },
    { label: '아티스트', value: figure.artist },
  ]
  const detailImages = [
    {
      src: figure.images.alt,
      title: '마감 클로즈업',
      body: '표면의 결, 모서리 처리, 컬러 경계를 중립 조명에서 다시 봅니다. 사진으로도 손마감의 차이가 읽히도록 가까운 컷을 함께 제공합니다.',
    },
    {
      src: `${IMG}/craft-01.webp`,
      title: '벤치 검수',
      body: '도색, 조립, 넘버링을 같은 배치 단위로 기록합니다. 런이 끝난 뒤에도 어떤 공정에서 나온 피스인지 추적할 수 있게 둡니다.',
    },
    {
      src: `${IMG}/craft-02.webp`,
      title: '컬렉터 패키징',
      body: '서명 프로세스 카드와 맞춤 보호재를 맞춘 뒤 출고 박스에 넣습니다. 선반에 올리기 전까지 흔들리지 않도록 내부 공간을 고정합니다.',
    },
  ]
  const ctaLabel =
    figure.status === 'Pre-order'
      ? '예약 주문'
      : figure.status === 'In stock'
        ? '장바구니에 담기'
        : figure.status === 'Coming soon'
          ? '오픈 전'
          : '판매 종료'

  const onAdd = () => {
    const cw = figure.colorways.find((c) => c.id === colorway)
    add(figure, cw?.label ?? colorway)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1600)
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:sticky lg:top-16 lg:h-[calc(100vh-64px)]">
          <div className="relative flex h-full flex-col bg-[var(--color-bg-tile)]">
            <div className="absolute left-4 top-4 z-10">
              <Badge variant={statusBadgeVariant(figure.status)}>{statusBadgeLabel(figure.status)}</Badge>
            </div>
            <div className="relative aspect-[4/5] w-full lg:aspect-auto lg:flex-1">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.24 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={gallery[activeImage]}
                    alt={`${figure.name} 이미지 ${activeImage + 1}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    unoptimized
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex gap-2 p-4">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  aria-label={`이미지 ${i + 1} 보기`}
                  aria-pressed={activeImage === i}
                  onClick={() => setActiveImage(i)}
                  className={clsx(
                    'relative h-16 w-12 overflow-hidden border transition-colors duration-150',
                    activeImage === i ? 'border-[var(--color-ink)]' : 'border-[var(--color-border)]',
                  )}
                >
                  <Image src={src} alt="" fill sizes="48px" className="object-cover" unoptimized />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="px-4 py-12 lg:px-12 lg:py-16">
          <p className="meta-label text-[var(--color-ink-faint)]">
            {lineLabel(figure.line)} / {figure.scale} / {figure.heightMm} mm
          </p>
          <h1 className="mt-3 text-4xl leading-[var(--leading-heading)] tracking-normal text-[var(--color-ink)] lg:text-5xl">
            {figure.name}
          </h1>
          <p className="value-text mt-3 text-[var(--color-ink)]">{formatUsd(figure.priceUsd)}</p>
          <p className="mt-6 max-w-[520px] text-base leading-relaxed text-[var(--color-ink-muted)]">
            {figure.description}
          </p>

          <dl className="mt-8 grid max-w-[560px] grid-cols-2 gap-x-8 gap-y-6">
            {detailStats.map((item) => (
              <div key={item.label}>
                <dt className="meta-label text-[var(--color-ink-faint)]">{item.label}</dt>
                <dd className="mt-2 text-base font-semibold leading-tight text-[var(--color-ink)]">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 max-w-[560px]">
            <p className="meta-label text-[var(--color-ink-faint)]">소재 구성</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {figure.materials.map((material) => (
                <li
                  key={material}
                  className="rounded-full border border-[var(--color-border)] px-3 py-2 text-sm leading-none text-[var(--color-ink-muted)]"
                >
                  {material}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-9">
            <label htmlFor="colorway" className="meta-label block text-[var(--color-ink-faint)]">
              에디션
            </label>
            <select
              id="colorway"
              value={colorway}
              onChange={(e) => setColorway(e.target.value)}
              className="ui-label mt-2 w-full max-w-[480px] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-ink)]"
            >
              {figure.colorways.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6 max-w-[480px]">
            <button
              type="button"
              disabled={!purchasable}
              onClick={onAdd}
              className={clsx(
                'ui-label w-full rounded-full px-6 py-4 transition-[opacity,transform] duration-150 active:scale-[0.99]',
                purchasable
                  ? 'bg-[var(--color-accent)] text-white hover:opacity-90'
                  : 'cursor-not-allowed border border-[var(--color-border)] text-[var(--color-ink-faint)]',
              )}
            >
              {added ? '장바구니에 담았습니다' : ctaLabel}
            </button>
          </div>

          <div className="mt-12 flex max-w-[480px] flex-col gap-3 bg-[var(--color-bg-tile-deep)] p-6">
            <SpecBar label="도색 등급" valueLabel={`${figure.paintGrade}`} pct={figure.paintGrade} />
            <SpecBar label="조립 난도" valueLabel={`${figure.assembly}`} pct={figure.assembly} />
            <SpecBar label="소진율" valueLabel={`${figure.claimedPct}%`} pct={figure.claimedPct} accent />
            <p className="meta-label mt-1 text-[var(--color-ink-faint)]">
              총 {figure.editionSize}개 에디션, 베이스 플레이트 넘버링
            </p>
          </div>

          <div className="mt-10 grid max-w-[560px] grid-cols-1 gap-8 md:grid-cols-2">
            <section>
              <h2 className="meta-label text-[var(--color-ink)]">포함 구성</h2>
              <ul className="mt-4 flex list-none flex-col gap-3 text-base leading-relaxed text-[var(--color-ink-muted)]">
                <li>에디션 원장과 연결된 넘버링 베이스 플레이트.</li>
                <li>아티스트와 마감 노트가 적힌 서명 프로세스 카드.</li>
                <li>맞춤 보호재가 들어간 더블월 컬렉터 박스.</li>
              </ul>
            </section>
            <section>
              <h2 className="meta-label text-[var(--color-ink)]">벤치 노트</h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-muted)]">
                도색 점수, 조립 난도, 소진율을 구매 전에 보여줍니다. 단순한 상품 타일이 아니라,
                어떤 런에서 나온 피스인지 읽을 수 있게 하기 위한 정보입니다.
              </p>
            </section>
          </div>

          <div className="mt-6 max-w-[480px]">
            <AccordionRow title="아티스트와 크레딧">
              <p>
                조형과 페인트 방향은 {figure.artist}가 맡았습니다. 캐스팅, 마감, 최종 검수는 FORMA
                스튜디오 벤치에서 진행하며, 각 피스에는 서명 프로세스 카드가 동봉됩니다.
              </p>
            </AccordionRow>
            <AccordionRow title="소재와 관리">
              <ul className="flex list-none flex-col gap-2">
                {figure.materials.map((m) => (
                  <li key={m}>{m}</li>
                ))}
                <li>직사광선을 피하고, 마른 부드러운 브러시로만 먼지를 털어주세요.</li>
              </ul>
            </AccordionRow>
            <AccordionRow title="에디션 정보">
              <p>
                총 {figure.editionSize}개 에디션입니다. 현재 {figure.claimedPct}%가 소진되었습니다.
                닫힌 런은 다시 캐스팅하지 않고, 마지막 생산 뒤 몰드를 퇴역시킵니다.
              </p>
            </AccordionRow>
          </div>
        </div>
      </div>

      <section className="px-4 pb-20 pt-4 lg:px-12 lg:pb-28 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="max-w-[440px]">
            <p className="meta-label text-[var(--color-ink-faint)]">디테일 검수</p>
            <h2 className="mt-4 text-3xl leading-[var(--leading-heading)] tracking-normal text-[var(--color-ink)] lg:text-5xl">
              어느 방향에서 보아도 마감이 읽히도록 구성했습니다.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-ink-muted)]">
              하단 갤러리는 구매자가 실제로 궁금해하는 단서를 보여줍니다. 표면 마감, 제작 과정,
              박스 안에 들어가는 구성까지 상세 페이지 안에서 바로 확인해보세요.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {detailImages.map((item, index) => (
              <article key={item.title} className={clsx(index === 0 && 'md:col-span-2')}>
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-bg-tile-deep)] md:aspect-[5/6]">
                  <Image
                    src={item.src}
                    alt={`${figure.name} ${item.title}`}
                    fill
                    sizes={index === 0 ? '(max-width: 768px) 100vw, 42vw' : '(max-width: 768px) 100vw, 22vw'}
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="ui-label mt-4 text-[var(--color-ink)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
