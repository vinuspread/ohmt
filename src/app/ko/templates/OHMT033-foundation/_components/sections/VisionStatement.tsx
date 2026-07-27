'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function VisionStatement() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section ref={ref} className="border-b border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-16 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1120px] border-t border-[var(--color-text)] pt-6 md:pt-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[900px]"
        >
          <p className="text-sm font-semibold leading-none text-[var(--color-accent)]">기록으로 쌓는 변화</p>
          <h2 className="mt-6 font-heading text-[length:var(--text-h2)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)] md:mt-6">
            좋은 의도는 실제 결과로 이어져야 합니다. 우리는 변화를<span className="text-[var(--color-primary)]">확인 가능한 기록</span>으로 보여줍니다.
            봉사 시간과 식재 수, 지원금 집행 내역, 참여자의 후속 변화까지 꾸준히 기록합니다.</h2>
          <p className="mt-4 max-w-[560px] text-base leading-relaxed text-[var(--color-text-muted)] md:mt-6">
            사진과 이야기는 현장의 맥락을 전하고, 수치는 변화의 규모를 보여줍니다. 두 기록을 함께 공개해 프로그램의 과정을 확인할 수 있도록 합니다.</p>
        </motion.div>
      </div>
    </section>
  )
}
