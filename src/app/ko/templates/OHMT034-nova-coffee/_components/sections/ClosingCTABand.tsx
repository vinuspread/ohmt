'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'

const base = '/ko/templates/OHMT034-nova-coffee'

export function ClosingCTABand() {
  return (
    <section className="relative flex min-h-[430px] items-center overflow-hidden md:min-h-[560px]">
      <div className="absolute inset-0">
        <Image
          unoptimized
          loading="eager"
          src="/templates/OHMT034-nova-coffee/closing-band.jpg"
          alt="어두운 스톤 위 작은 컵에 담긴 크레마와 에스프레소 클로즈업"
          fill
          className="object-cover brightness-[1.12] contrast-[1.04]"
          sizes="100vw"
        />
        <div className="nova-gradient-closing absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 md:px-8">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-[640px] text-center"
        >
          <h2 className="font-display text-[length:var(--text-h2)] font-bold leading-[var(--leading-heading)] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
            직접 추출해보세요
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-sm">
            가까운 쇼룸에서 NOVA의 온도 안정성, 압력, 소음을 직접 확인해보세요.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5">
            <Link
              href={`${base}/support`}
              className="inline-flex items-center gap-2 border border-white bg-white px-7 py-3 text-xs font-semibold text-[var(--color-text)] transition-colors duration-300 hover:bg-transparent hover:text-white"
            >
              데모 예약
            </Link>
            <Link
              href={`${base}/support#store`}
              className="inline-flex items-center gap-2 border border-white/40 px-7 py-3 text-xs font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
            >
              매장 찾기
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
