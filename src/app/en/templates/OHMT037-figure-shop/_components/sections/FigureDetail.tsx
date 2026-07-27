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
    { label: 'Scale', value: figure.scale },
    { label: 'Height', value: `${figure.heightMm} mm` },
    { label: 'Edition size', value: figure.editionSize.toString() },
    { label: 'Artist', value: figure.artist },
  ]
  const detailImages = [
    {
      src: figure.images.alt,
      title: 'Finish close-up',
      body: 'Surface texture, edge work, and color separation are checked under neutral studio light.',
    },
    {
      src: `${IMG}/craft-01.webp`,
      title: 'Bench inspection',
      body: 'Each run is handled in small batches so paint, assembly, and numbering stay traceable.',
    },
    {
      src: `${IMG}/craft-02.webp`,
      title: 'Shelf-ready packing',
      body: 'The final pass pairs the signed process card with fitted protection before dispatch.',
    },
  ]
  const ctaLabel =
    figure.status === 'Pre-order'
      ? 'Pre-order'
      : figure.status === 'In stock'
        ? 'Add to cart'
        : figure.status === 'Coming soon'
          ? 'Claim window not open'
          : 'Edition closed'

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
                    alt={`${figure.name}, view ${activeImage + 1}`}
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
                  aria-label={`Show view ${i + 1}`}
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
          <h1 className="mt-3 text-4xl font-medium leading-[var(--leading-heading)] tracking-tight text-[var(--color-ink)] lg:text-5xl">
            {figure.name}
          </h1>
          <p className="value-text mt-3 text-[var(--color-ink)]">{formatUsd(figure.priceUsd)}</p>
          <p className="mt-6 max-w-[480px] text-base leading-relaxed text-[var(--color-ink-muted)]">
            {figure.description}
          </p>

          <dl className="mt-8 grid max-w-[560px] grid-cols-2 gap-x-8 gap-y-6">
            {detailStats.map((item) => (
              <div key={item.label}>
                <dt className="meta-label text-[var(--color-ink-faint)]">{item.label}</dt>
                <dd className="mt-2 text-base font-medium leading-tight text-[var(--color-ink)]">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 max-w-[560px]">
            <p className="meta-label text-[var(--color-ink-faint)]">Material stack</p>
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
              Edition
            </label>
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
              {added ? 'Added to cart' : ctaLabel}
            </button>
          </div>

          <div className="mt-12 flex max-w-[480px] flex-col gap-3 bg-[var(--color-bg-tile-deep)] p-6">
            <SpecBar label="Paint grade" valueLabel={`${figure.paintGrade}`} pct={figure.paintGrade} />
            <SpecBar label="Assembly" valueLabel={`${figure.assembly}`} pct={figure.assembly} />
            <SpecBar
              label="Edition claimed"
              valueLabel={`${figure.claimedPct}%`}
              pct={figure.claimedPct}
              accent
            />
            <p className="meta-label mt-1 text-[var(--color-ink-faint)]">
              Edition of {figure.editionSize}, numbered on the base plate
            </p>
          </div>

          <div className="mt-10 grid max-w-[560px] grid-cols-1 gap-8 md:grid-cols-2">
            <section>
              <h2 className="meta-label text-[var(--color-ink)]">Included</h2>
              <ul className="mt-4 flex list-none flex-col gap-3 text-base leading-relaxed text-[var(--color-ink-muted)]">
                <li>Numbered base plate matched to the edition ledger.</li>
                <li>Signed process card with artist and finish notes.</li>
                <li>Double-wall collector box with fitted inner protection.</li>
              </ul>
            </section>
            <section>
              <h2 className="meta-label text-[var(--color-ink)]">Bench notes</h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-muted)]">
                Paint, assembly, and claimed counts are shown before checkout so the piece reads as a
                documented edition, not just a product tile.
              </p>
            </section>
          </div>

          <div className="mt-6 max-w-[480px]">
            <AccordionRow title="Artist and credits">
              <p>
                Sculpt and paint direction by {figure.artist}. Casting, finishing, and quality pass by the
                FORMA studio bench. Each piece ships with a signed process card.
              </p>
            </AccordionRow>
            <AccordionRow title="Materials and care">
              <ul className="flex list-none flex-col gap-2">
                {figure.materials.map((m) => (
                  <li key={m}>{m}</li>
                ))}
                <li>Keep out of direct sunlight. Dust with a dry soft brush only.</li>
              </ul>
            </AccordionRow>
            <AccordionRow title="Edition info">
              <p>
                Edition of {figure.editionSize}. {figure.claimedPct}% claimed. Closed runs are never
                recast; the mold is retired after the final pull.
              </p>
            </AccordionRow>
          </div>
        </div>
      </div>

      <section className="px-4 pb-20 pt-4 lg:px-12 lg:pb-28 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="max-w-[420px]">
            <p className="meta-label text-[var(--color-ink-faint)]">Detail proof</p>
            <h2 className="mt-4 text-3xl font-medium leading-[var(--leading-heading)] tracking-tight text-[var(--color-ink)] lg:text-5xl">
              Built to be inspected from every side.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-ink-muted)]">
              The lower gallery gives shoppers the missing cues: finish, production handling, and what
              arrives in the box.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {detailImages.map((item, index) => (
              <article key={item.title} className={clsx(index === 0 && 'md:col-span-2')}>
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-bg-tile-deep)] md:aspect-[5/6]">
                  <Image
                    src={item.src}
                    alt={`${figure.name} ${item.title.toLowerCase()}`}
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
