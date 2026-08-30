'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { news } from '../../data/news'
import { ButtonLink } from '../ui/ButtonLink'

const base = '/ko/templates/OHMT033-foundation'
const preview = news.slice(0, 3)

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric', year: 'numeric' })
}

export function NewsroomPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section ref={ref} className="ohmt033-fine-surface border-b border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-16 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-6 flex items-end justify-between border-t border-[var(--color-text)] pt-6 md:mb-12">
          <div>
            <h2 className="font-heading text-[length:var(--text-h3)] font-semibold tracking-tight text-[var(--color-text)]">
              최근 소식
            </h2>
          </div>
          <ButtonLink
            href={`${base}/newsroom`}
            variant="outline"
            size="sm"
            className="hidden md:inline-flex"
          >
            전체 소식 보기
          </ButtonLink>
        </div>

        <div className="grid md:grid-cols-3">
          {preview.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
            >
              <Link href={`${base}/newsroom`} className="group block py-6 md:border-r md:border-[var(--color-border)] md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <div className="relative aspect-[16/10] overflow-hidden ohmt033-photo-frame">
                  <Image
                    unoptimized
                    src={`/templates/OHMT033-foundation/${item.image}`}
                    alt={item.title}
                    fill
                    className="object-cover ohmt033-photo-cool transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <p className="mt-4 text-xs font-medium leading-snug text-[var(--color-text-muted)]">
                  {item.tag} ·{formatDate(item.date)}
                </p>
                <h3 className="mt-3 font-heading text-lg font-semibold leading-snug text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                  {item.title}
                </h3>
              </Link>
            </motion.article>
          ))}
        </div>

        <ButtonLink
          href={`${base}/newsroom`}
          variant="outline"
          size="sm"
          className="mt-6 md:hidden"
        >
          전체 소식 보기
        </ButtonLink>
      </div>
    </section>
  )
}
