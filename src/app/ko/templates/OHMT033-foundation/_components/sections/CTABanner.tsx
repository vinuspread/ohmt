'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ActionButton } from '../ui/ActionButton'

export function CTABanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section ref={ref} id="contact" className="bg-white px-6 py-16 md:px-12 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto grid max-w-[1440px] border-y border-[var(--color-text)] md:grid-cols-2"
      >
        <div className="border-b border-[var(--color-border)] py-12 md:border-b-0 md:border-r md:py-12 md:pr-12">
          <p className="text-sm font-semibold leading-none text-[var(--color-primary)]">참여</p>
          <h2 className="mt-6 max-w-[560px] font-heading text-[length:var(--text-h2)] font-semibold leading-[var(--leading-heading)] text-[var(--color-text)]">
            함께할 기업과 개인을 기다립니다.</h2>
        </div>
        <div className="py-12 md:pb-12 md:pl-12 md:pt-24">
          <p className="max-w-[520px] text-base leading-relaxed text-[var(--color-text-muted)]">
            사회공헌 파트너십을 준비하는 기업과 자원봉사를 시작하려는 개인에게
            목적과 참여 방식에 맞는 프로그램을 안내합니다.</p>
          <form className="mt-6 flex max-w-[520px] flex-col gap-3 sm:flex-row">
            <label htmlFor="foundation-contact-email" className="sr-only">
              이메일 주소
            </label>
            <input
              id="foundation-contact-email"
              type="email"
              required
              placeholder="email@example.com"
              className="ohmt033-contact-input h-12 w-full flex-1 border border-[#d8dee5] bg-[var(--color-bg)] px-4 text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-primary)]"
              style={{ height: 48 }}
            />
            <ActionButton type="submit" className="ohmt033-contact-submit h-12 px-6">
              참여 문의</ActionButton>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
