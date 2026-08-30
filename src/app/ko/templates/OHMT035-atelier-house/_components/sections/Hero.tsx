'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const base = '/ko/templates/OHMT035-atelier-house'

export function Hero() {
  return (
    <section className="bg-[var(--color-bg)] px-4 py-4 md:px-6 md:py-6">
      <div className="mx-auto grid min-h-[560px] max-w-[1440px] gap-4 md:grid-cols-2 md:min-h-[62vh]">
        <div className="relative min-h-[420px] overflow-hidden rounded-[12px]">
          <img
            src="/templates/OHMT035-atelier-house/hero-left.jpg"
            alt="원목 라운지 체어와 탁자가 있는 차분하고 조용한 거실 전경"
            className="absolute inset-0 h-full w-full object-cover object-[75%_center]"
          />
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-5 left-5 right-5 max-w-[430px] rounded-[8px] bg-[#FAFAF8] p-6 text-[var(--color-text)] shadow-[0_8px_24px_rgba(0,0,0,0.14)] md:bottom-8 md:left-8 md:right-auto md:p-8"
          >
            <p className="font-display text-[length:var(--text-h2)] font-semibold leading-[var(--leading-body)] tracking-tight text-[var(--color-text)] break-keep">
              일상의 여백을 지키는, 오래 머무는 원목 가구.
            </p>
            <p className="mt-4 max-w-[360px] text-sm leading-relaxed text-[var(--color-text-muted)] word-keep-all">
              쉽게 사고 쉽게 버리는 대신 손수 고쳐 쓸 수 있도록, 자작나무와 참나무 원목을 짜 맞추어 견고하게 제작합니다.
            </p>
            <Link
              href={`${base}/shop`}
              className="mt-6 inline-flex items-center rounded-[4px] bg-[#1a1a1a] px-6 py-3 text-xs font-semibold text-white transition-opacity duration-300 hover:opacity-85"
            >
              컬렉션 보기
            </Link>
          </motion.div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-[12px]">
          <img
            src="/templates/OHMT035-atelier-house/hero-right.jpg"
            alt="참나무 다이닝 테이블과 패브릭 직조 디테일이 돋보이는 식당 코너"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-5 top-5 w-[min(78%,320px)] rounded-[8px] bg-[#1A1A1A] p-5 text-white md:right-8 md:top-8 md:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/45">신제품</p>
                <p className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight">
                  쿼리 다이닝 테이블
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center rounded-[4px] bg-white px-2.5 py-1 text-xs font-semibold uppercase leading-none tracking-wider text-[var(--color-text)]">
                참나무
              </span>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-white/62 word-keep-all">
              집성 원목에 무광 오일로 차분하게 마감해 여섯 명까지 넉넉히 앉을 수 있는 식탁입니다.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
