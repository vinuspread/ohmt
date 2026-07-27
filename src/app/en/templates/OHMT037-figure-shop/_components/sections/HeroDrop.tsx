'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { BASE, IMG } from '../../data/figures'
import { Button } from '../ui/Button'
import { ParallaxImage } from '../ui/ParallaxImage'

export function HeroDrop() {
  const reduced = useReducedMotion()
  const item = (i: number) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: reduced ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: 0.1 + i * 0.1, ease: [0.23, 1, 0.32, 1] as const },
  })

  return (
    <section className="relative flex min-h-dvh items-end overflow-hidden bg-[var(--color-bg-tile)]">
      <ParallaxImage
        src={`${IMG}/hero-drop.webp`}
        alt="Vala, the flagship figure of Kaiju Series 03, with the Bitto companion robot on a bright studio set"
        priority
        sizes="100vw"
        anchor="top"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgba(27,27,24,0.65)] to-transparent"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 pb-16 pt-32 lg:px-6 lg:pb-24">
        <motion.h1
          {...item(0)}
          className="max-w-[900px] text-5xl font-medium leading-[var(--leading-display)] tracking-tight text-white lg:text-8xl"
        >
          Solis Leads Ceramic Series 01
        </motion.h1>
        <motion.div {...item(1)} className="mt-9 flex flex-wrap gap-4">
          <Button href={`${BASE}/figures/vala-kaiju-03`} variant="solid-white">View Vala</Button>
          <Button href={`${BASE}/shop`} variant="solid-white">Shop all</Button>
        </motion.div>
      </div>
    </section>
  )
}
