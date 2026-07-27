'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { ButtonLink } from '../ui/ButtonLink'

const base = '/ko/templates/OHMT033-foundation'

export function ProgramHighlight() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section ref={ref} className="bg-white px-6 py-16 md:px-12 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-[1440px] border-t border-[var(--color-text)] pt-6 md:pt-12"
      >
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold leading-none text-[var(--color-accent)]">
              대표 프로그램
            </p>
            <h2 className="font-heading text-[length:var(--text-h2)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)]">
              유스 인 테크
            </h2>
            <p className="mt-6 max-w-[600px] text-base leading-relaxed text-[var(--color-text-muted)] md:text-base">
              2020년 이후 2,400명의 학생이 로보틱스와 AI를 배웠습니다. 주말 실습과 현업 멘토링은
              기술 체험을 넘어 진로를 구체적으로 탐색하는 과정으로 이어집니다.</p>
            <ButtonLink href={`${base}/programs#youth-in-tech`} className="mt-9">
              프로그램 보기</ButtonLink>
          </div>

          <div className="grid gap-6 pt-2 md:mt-6 md:border-l md:border-[var(--color-border)] md:pl-6 md:pt-0">
            <div>
              <p className="font-heading text-[length:var(--text-h2)] font-semibold leading-none tracking-tight text-[var(--color-text)]">
                2,400
              </p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--color-text-muted)]">
              2020년 이후 참여 학생</p>
            </div>
            <div>
              <p className="font-heading text-[length:var(--text-h2)] font-semibold leading-none tracking-tight text-[var(--color-text)]">
                74%
              </p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--color-text-muted)]">
              공학·디지털 분야 진로 선택</p>
            </div>
          </div>
        </div>

        <div className="relative mt-12 min-h-[320px] overflow-hidden bg-[var(--color-media-dark)] md:mt-16 md:min-h-[680px] ohmt033-photo-frame">
          <Image
            unoptimized
            src={`/templates/OHMT033-foundation/hero-generated-tech.png`}
            alt="주말 기술 교육 랩에서 활동하는 유스 인 테크 참여 학생"
            fill
            className="object-cover object-center ohmt033-photo-cool"
            sizes="(min-width: 768px) 1320px, 100vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,rgba(8,13,24,0)_0%,rgba(8,13,24,0.7)_100%)]" />
          <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col gap-3 md:bottom-6 md:left-6 md:right-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-[360px] text-sm font-medium leading-relaxed text-white/82">
              주말 실습 · 로보틱스 · 또래 멘토링</p>
            <p className="w-fit bg-white px-4 py-3 text-xs font-semibold text-[var(--color-text)]">
              2020년 이후 2,400명 참여
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
