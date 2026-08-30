'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { stories } from '../../data/stories'

const MotionLink = motion.create(Link)

const base = '/ko/templates/OHMT033-foundation'
const featured = stories.slice(0, 5)

const cardLayouts = [
  'md:col-span-5 md:row-span-2',
  'md:col-span-4',
  'md:col-span-3',
  'md:col-span-3',
  'md:col-span-4',
]

function StoryCard({
  story,
  index,
  className,
}: {
  story: (typeof featured)[number]
  index: number
  className: string
}) {
  const isLarge = index === 0

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.52, ease: [0.16, 1, 0.3, 1] } },
      }}
      className={`group relative min-h-[320px] overflow-hidden bg-[var(--color-media-dark)] md:min-h-0 ${className} ohmt033-photo-frame`}
    >
      <Link href={`${base}/stories/${story.id}`} className="absolute inset-0 z-20" aria-label={`${story.name} 이야기 읽기`} />
      <Image
        unoptimized
        src={`/templates/OHMT033-foundation/${story.image}`}
        alt={`${story.name}, ${story.role}`}
        fill
        className="object-cover ohmt033-photo-cool transition duration-700 ease-out group-hover:scale-[1.035]"
        sizes={isLarge ? '(min-width: 768px) 42vw, 100vw' : '(min-width: 768px) 28vw, 100vw'}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,13,24,0.04)_0%,rgba(8,13,24,0.18)_36%,rgba(8,13,24,0.82)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-6">
        <p className="text-xs font-semibold leading-none text-[var(--color-media-accent)]">
          {String(index + 1).padStart(2, '0')} / {story.program}
        </p>
        <h3 className="mt-3 max-w-[520px] font-heading text-[length:var(--text-lead)] font-semibold leading-[var(--leading-heading)] tracking-tight text-white">
          {story.name}
        </h3>
        <p className={`mt-3 max-w-[460px] text-sm leading-relaxed text-white/76 md:text-sm ${isLarge ? 'md:block' : 'md:hidden lg:block'}`}>
          {story.excerpt}
        </p>
      </div>
    </motion.article>
  )
}

export function StorySpotlight() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section ref={ref} className="bg-[var(--color-bg-secondary)] px-6 py-16 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 grid gap-6 border-t border-[var(--color-text)] pt-6 md:mb-12 md:grid-cols-2 md:items-end md:gap-6 md:pt-6"
        >
          <div>
            <p className="mb-6 text-sm font-semibold leading-none text-[var(--color-accent)]">
              참여자 이야기
            </p>
            <h2 className="max-w-[700px] font-heading text-[length:var(--text-h1)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)]">
              모든 변화는 한 사람의 참여에서 시작됩니다.
            </h2>
          </div>
          <div className="md:justify-self-end">
            <p className="max-w-[360px] text-base leading-relaxed text-[var(--color-text-muted)]">
              참여자와 멘토, 지역 파트너가 프로그램에서 경험한 변화와 과정을 기록했습니다.
            </p>
            <MotionLink
              href={`${base}/stories`}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex border border-[var(--color-text)] px-4 py-3 text-sm font-semibold text-[var(--color-text)] transition-colors hover:bg-[var(--color-text)] hover:text-white"
            >
              모든 이야기 보기
            </MotionLink>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.065, delayChildren: 0.08 } },
          }}
          className="grid gap-3 md:grid-cols-12 md:auto-rows-[300px] lg:auto-rows-[340px]"
        >
          {featured.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} className={cardLayouts[index]} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
