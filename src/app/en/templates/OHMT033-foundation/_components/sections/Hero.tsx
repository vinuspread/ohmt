'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ButtonLink } from '../ui/ButtonLink'

const base = '/en/templates/OHMT033-foundation'

const slides = [
  {
    image: 'hero-generated-tech.png',
    mobileObjectClass: 'object-[72%_center]',
    alt: 'A Youth in Tech workshop participant working with a robotics kit',
    headline: ['A robot at fourteen.', 'An AI lab', 'at twenty-two.'],
    sub: 'Every program we run is built around one person’s next step.',
  },
  {
    image: 'hero-generated-health.png',
    mobileObjectClass: 'object-[74%_center]',
    alt: 'A Neighborhood Health Corps volunteer speaking with a resident',
    headline: ['92,000 volunteer hours.', 'One neighbor', 'at a time.'],
    sub: 'Trust is built block by block, not campaign by campaign.',
  },
  {
    image: 'hero-generated-green.png',
    mobileObjectClass: 'object-[70%_center]',
    alt: 'A Green Futures volunteer planting a tree in a restored watershed',
    headline: ['1.2 million trees.', 'One watershed,', 'one home.'],
    sub: 'Impact we can measure, in places our volunteers grew up in.',
  },
]

export function Hero() {
  const [active, setActive] = useState(0)
  const slide = slides[active]
  const frameRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: frameRef, offset: ['start start', 'end start'] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 110])

  useEffect(() => {
    slides.forEach((item) => {
      const preload = new window.Image()
      preload.src = `/templates/OHMT033-foundation/${item.image}`
    })
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, 7000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section className="bg-white px-6 pb-12 md:px-12 md:pb-24">
      <motion.div
        ref={frameRef}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto h-[680px] max-w-[1440px] overflow-hidden bg-[var(--color-hero-dark)] md:h-[calc(100dvh-96px)] md:min-h-[720px] md:max-h-[820px]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <motion.div
              style={{ y: parallaxY }}
              initial={{ scale: 1 }}
              animate={{ scale: 1.08 }}
              transition={{ duration: 7, ease: 'linear' }}
              className="absolute inset-[-8%]"
            >
              <Image
                unoptimized
                src={`/templates/OHMT033-foundation/${slide.image}`}
                alt={slide.alt}
                fill
                priority={active === 0}
                className={`object-cover grayscale-[0.03] saturate-[0.88] contrast-[1.03] brightness-[1.08] ${slide.mobileObjectClass} md:object-[58%_center]`}
                sizes="(min-width: 768px) 1440px, calc(100vw - 32px)"
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/15" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,10,18,0.14)_0%,rgba(5,10,18,0)_56%)]" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 flex h-full w-full flex-col justify-start">
          <div className="w-full px-6 pt-24 md:px-24 md:pt-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${slide.image}-copy`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mb-6 flex max-w-[820px] items-center gap-3 text-white/76">
                  <span className="h-px w-12 bg-[var(--color-accent)]" />
                  <p className="text-sm font-semibold text-white/82">VERITAS Foundation</p>
                </div>
                <h1 className="max-w-[760px] font-heading text-[length:var(--text-h2)] font-semibold leading-[var(--leading-heading)] tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.28)] md:max-w-[900px] md:text-[length:var(--text-h1)] md:leading-[var(--leading-display)]">
                  {slide.headline.map((line) => (
                    <span key={line} className="block text-balance">
                      {line}
                    </span>
                  ))}
                </h1>
                <div className="mt-6 flex max-w-[620px] flex-col items-start gap-6">
                  <p className="max-w-[400px] text-base leading-relaxed text-white/86 drop-shadow-[0_1px_10px_rgba(0,0,0,0.22)] md:text-base">{slide.sub}</p>
                  <ButtonLink href={`${base}/stories`} variant="primary" size="sm">
                    Read the story
                  </ButtonLink>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 z-10 flex items-center gap-3 md:right-24">
        {slides.map((s, i) => (
          <motion.button
            key={s.image}
            onClick={() => setActive(i)}
            whileTap={{ scale: 0.85 }}
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === active}
            className={`h-[3px] transition-all duration-300 ${
              i === active ? 'w-12 bg-white' : 'w-6 bg-white/35 hover:bg-white/70'
            }`}
          />
        ))}
        </div>
      </motion.div>
    </section>
  )
}
