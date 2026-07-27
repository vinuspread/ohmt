'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { clsx } from 'clsx'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { IMG, formatKrw, lineLabel, type Figure } from '../../data/figures'
import { Badge, statusBadgeLabel, statusBadgeVariant } from '../ui/Badge'
import { SpecBar } from '../ui/SpecBar'
import { useCart } from '../CartContext'
import TemplateSelect from '../TemplateSelect'

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
    { label: '제작 수량', value: figure.editionSize.toString() },
    { label: '아티스트', value: figure.artist },
  ]
  const detailImages = [
    {
      src: figure.images.alt,
      title: '마감 상세',
      body: '표면 질감과 모서리 처리, 도색 경계를 중립 조명에서 다시 확인합니다. 손마감 상태를 사진에서도 살펴볼 수 있도록 가까이 촬영한 이미지를 제공합니다.',
    },
    {
      src: `${IMG}/craft-01.webp`,
      title: '제작 검수',
      body: '도색과 조립, 에디션 번호를 생산 단위별로 기록합니다. 판매가 끝난 뒤에도 각 피규어가 어떤 제작 과정에서 나온 제품인지 확인할 수 있습니다.',
    },
    {
      src: `${IMG}/craft-02.webp`,
      title: '전용 포장',
      body: '제작자 서명과 마감 정보가 적힌 카드, 형태에 맞춘 보호재를 함께 넣어 포장합니다. 배송 중 제품이 움직이지 않도록 상자 내부를 고정합니다.',
    },
  ]
  const ctaLabel =
    figure.status === 'Pre-order'
      ? '예약 구매'
      : figure.status === 'In stock'
        ? '장바구니에 담기'
        : figure.status === 'Coming soon'
          ? '판매 예정'
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
          <p className="value-text mt-3 text-[var(--color-ink)]">{formatKrw(figure.priceKrw)}</p>
          <p className="preserve-lines mt-6 max-w-[560px] text-base leading-relaxed text-[var(--color-ink-muted)]">
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
            <p className="meta-label text-[var(--color-ink-faint)]">소재</p>
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
              판매 정보</label>
            <TemplateSelect
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
            </TemplateSelect>
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
            <SpecBar label="도색 완성도" valueLabel={`${figure.paintGrade}`} pct={figure.paintGrade} />
            <SpecBar label="조립 난도" valueLabel={`${figure.assembly}`} pct={figure.assembly} />
            <SpecBar label="판매율" valueLabel={`${figure.claimedPct}%`} pct={figure.claimedPct} accent />
            <p className="meta-label mt-1 text-[var(--color-ink-faint)]">
              총 {figure.editionSize}개 한정 제작 · 베이스 플레이트 번호 각인
            </p>
          </div>

          <div className="mt-10 grid max-w-[560px] grid-cols-1 gap-8 md:grid-cols-2">
            <section>
              <h2 className="meta-label text-[var(--color-ink)]">구성품</h2>
              <ul className="mt-4 flex list-none flex-col gap-3 text-base leading-relaxed text-[var(--color-ink-muted)]">
                <li>에디션 기록과 연결된 번호 각인 베이스 플레이트</li>
                <li>아티스트 서명과 마감 정보가 적힌 제작 카드</li>
                <li>형태에 맞춘 보호재가 들어간 이중 골판지 전용 박스</li>
              </ul>
            </section>
            <section>
              <h2 className="meta-label text-[var(--color-ink)]">제작 정보</h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-muted)]">
                도색 완성도와 조립 난도, 판매율을 구매 전에 확인할 수 있습니다.
                <br className="hidden sm:block" />
                단순한 상품 정보에 그치지 않고, 각 피규어의 제작 수량과 생산 이력을 살펴볼 수 있도록
                구성했습니다.
              </p>
            </section>
          </div>

          <div className="mt-6 max-w-[480px]">
            <AccordionRow title="아티스트 정보">
              <p>
                원형 제작과 도색 방향은 {figure.artist}가 맡았습니다.
                <br />
                성형과 마감, 최종 검수는 FORMA 스튜디오에서 진행하며, 각 피규어에는 제작 정보 카드가
                동봉됩니다.
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
                총 {figure.editionSize}개 한정 에디션이며, 현재 {figure.claimedPct}%가 판매되었습니다.
                <br />
                판매가 끝난 에디션은 같은 구성으로 다시 생산하지 않으며, 마지막 제작 후 몰드는 사용을
                종료합니다.
              </p>
            </AccordionRow>
          </div>
        </div>
      </div>

      <section className="px-4 pb-20 pt-4 lg:px-12 lg:pb-28 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="max-w-[440px]">
            <p className="meta-label text-[var(--color-ink-faint)]">마감 상세</p>
            <h2 className="mt-4 text-3xl leading-[var(--leading-heading)] tracking-normal text-[var(--color-ink)] lg:text-5xl">
              여러 각도에서 표면과 도색 상태를 확인할 수 있습니다.</h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-ink-muted)]">
              하단 갤러리에서 표면 마감과 제작 과정,
              상자에 포함되는 구성품까지 상세하게 확인할 수 있습니다.</p>
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
