'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'motion/react'

const base = '/ko/templates/OHMT034-nova-coffee'

const heroSpecs = [
  { label: '온도 편차', value: '±0.5°C' },
  { label: '로터리 펌프', value: '50dB' },
  { label: '본체 폭', value: '240mm' },
]

export function Hero() {
  const frameRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: frameRef, offset: ['start start', 'end start'] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section className="nova-gradient-hero relative flex min-h-[60vh] items-center overflow-hidden md:min-h-[70vh]">
      <motion.div
        ref={frameRef}
        style={{ y: parallaxY }}
        className="absolute inset-0"
      >
        <Image
          unoptimized
          src="/templates/OHMT034-nova-coffee/hero.jpg"
          alt="어두운 그라데이션 배경에 놓인 브러시드 스틸과 무광 차콜 마감의 NOVA 듀얼 보일러 에스프레소 머신"
          fill
          priority
          className="object-cover object-[65%_center] brightness-[1.12] contrast-[1.08] saturate-[1.03] md:object-[55%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B1C1E]/82 via-[#1B1C1E]/38 to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-5 py-24 md:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="max-w-[920px]">
            <span className="font-display block text-[length:var(--text-display)] font-medium leading-[var(--leading-display)] tracking-tight text-white/85">
              첫 샷의 기준을</span>
            <span className="font-display block text-[length:var(--text-display)] font-medium leading-[var(--leading-display)] tracking-tight text-white/85">
              다음 샷에도</span>
            <span className="font-display block text-[length:var(--text-display)] font-bold leading-[var(--leading-display)] tracking-tight text-white">
              그대로</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-[420px] text-xs font-medium uppercase tracking-[0.12em] text-white/50 md:mt-8"
        >
          듀얼 보일러 에스프레소 머신 &middot; &plusmn;0.5&deg;C PID 온도 제어</motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Link
            href={`${base}/technology`}
            className="inline-flex w-fit items-center justify-center border border-white bg-white px-5 py-3 text-xs font-semibold text-[var(--color-text)] transition-colors hover:bg-transparent hover:text-white"
          >
            제품 기술 보기</Link>
          <Link
            href={`${base}/support#store`}
            className="inline-flex w-fit items-center justify-center border border-white/35 px-5 py-3 text-xs font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            쇼룸 찾기
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid border-t border-white/18 sm:grid-cols-3 md:max-w-[760px]"
        >
          {heroSpecs.map((item) => (
            <div key={item.label} className="border-b border-white/18 py-4 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0">
              <p className="font-mono text-xl font-semibold leading-none text-white md:text-2xl">{item.value}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-white/55">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
