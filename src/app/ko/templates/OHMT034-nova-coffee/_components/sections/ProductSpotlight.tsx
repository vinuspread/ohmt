'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight } from '@phosphor-icons/react'

const base = '/ko/templates/OHMT034-nova-coffee'

const products = [
  {
    image: 'product-1.jpg',
    alt: '어두운 스톤 카운터 위 브러시드 스틸 바디와 노출 그룹헤드를 가진 NOVA 에스프레소 머신',
    label: '1.5L 필터 탱크',
    desc: '매일 쓰기 충분한 물탱크를 좁은 카운터 안에 담았습니다.',
  },
  {
    image: 'product-2.jpg',
    alt: '작은 컵으로 흐르는 크레마와 에스프레소 추출 클로즈업',
    label: '±0.5°C PID',
    desc: '두 번째 잔도 첫 잔과 같은 온도 범위에서 시작합니다.',
  },
  {
    image: 'product-3.jpg',
    alt: '어두운 스톤 주방 카운터에서 NOVA 그룹헤드에 포터필터를 장착하는 손',
    label: '9bar 로터리 펌프',
    desc: '진동은 줄이고, 압력은 일정하게 밀어줍니다.',
  },
]

export function ProductSpotlight() {
  return (
    <section className="bg-[var(--color-bg)] px-5 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-5 md:grid-cols-12 md:items-end"
        >
          <h2 className="font-display max-w-[460px] text-[length:var(--text-h3)] font-bold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)] md:col-span-5">
            카운터 위에서 먼저 보여야 할 것들.
          </h2>
          <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-7 md:justify-self-end md:text-sm">
            브랜드 설명보다 중요한 것은 크기, 추출 안정성, 손이 닿는 조작부입니다. NOVA는 이 기준을 전면에 둡니다.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-12 md:grid-rows-2">
          {products.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              className={`group ${i === 0 ? 'md:col-span-7 md:row-span-2' : 'md:col-span-5'}`}
            >
              <div className={`relative overflow-hidden bg-[var(--color-bg-secondary)] ${i === 0 ? 'aspect-[4/3] md:h-full md:aspect-auto' : 'aspect-[16/10]'}`}>
                <Image
                  unoptimized
                  loading="eager"
                  src={`/templates/OHMT034-nova-coffee/${p.image}`}
                  alt={p.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4 border-t border-[var(--color-border)] pt-4">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                    {p.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-muted)]">{p.desc}</p>
                </div>
                <Link
                  href={`${base}/technology`}
                  className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors duration-300 hover:border-[var(--color-text)] hover:text-[var(--color-text)]"
                  aria-label={`${p.label} 자세히 보기`}
                >
                  <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
