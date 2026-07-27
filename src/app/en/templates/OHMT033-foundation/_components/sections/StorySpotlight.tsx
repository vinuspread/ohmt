'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { stories } from '../../data/stories'
import { ButtonLink } from '../ui/ButtonLink'

const base = '/en/templates/OHMT033-foundation'
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
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 17 } },
      }}
      className={`group relative min-h-[320px] overflow-hidden bg-[var(--color-media-dark)] md:min-h-0 ${className} ohmt033-photo-frame`}
    >
      <Link href={`${base}/stories/${story.id}`} className="absolute inset-0 z-20" aria-label={`Read ${story.name}'s story`} />
      <Image
        unoptimized
        priority
        src={`/templates/OHMT033-foundation/${story.image}`}
        alt={`Portrait of ${story.name}, ${story.role}`}
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
  return (
    <section className="bg-[var(--color-bg-secondary)] px-6 py-16 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 90, damping: 18 }}
          className="mb-6 grid gap-6 border-t border-[var(--color-text)] pt-6 md:mb-12 md:grid-cols-2 md:items-end md:gap-6 md:pt-6"
        >
          <div>
            <p className="mb-6 text-sm font-semibold leading-none text-[var(--color-accent)]">
              Stories of change
            </p>
            <h2 className="max-w-[700px] font-heading text-[length:var(--text-h1)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)]">
              Every program has a name behind it.
            </h2>
          </div>
          <div className="md:justify-self-end">
            <p className="max-w-[360px] text-base leading-relaxed text-[var(--color-text-muted)]">
              A lens on students, partners, mentors, and local partners who made the programs visible.
            </p>
            <ButtonLink
              href={`${base}/stories`}
              variant="outline"
              size="sm"
              className="mt-6"
            >
              View all stories
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial="show"
          animate="show"
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
