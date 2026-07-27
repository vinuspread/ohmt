import type { Metadata } from 'next'
import Link from 'next/link'
import { journalPosts } from '../data/journal'

const base = '/ko/templates/OHMT035-atelier-house'

const journalImages: Record<string, string> = {
  'reading-wood-grain': 'journal-wood-grain.jpg',
  'small-room-seating': 'journal-small-room.jpg',
  'oiled-vs-lacquered': 'journal-oiled-lacquer.jpg',
  'wood-joint-stability': 'journal-wood-joint-stability.jpg',
  'solid-wood-seasonal-care': 'journal-solid-wood-seasonal-care.jpg',
}

export const metadata: Metadata = {
  title: '저널 | 아틀리에 하우스',
  description: '원목의 특성, 가구 관리법, 좁은 공간을 위한 가구 배치와 실측 방법을 소개합니다.',
}

export default function JournalPage() {
  return (
    <div>
      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1440px]">
          <h1 className="font-display text-[length:var(--text-h2)] font-semibold tracking-tight text-[var(--color-text)]">
            저널
          </h1>
          <p className="mt-3 max-w-[520px] text-sm leading-relaxed text-[var(--color-text-muted)] word-keep-all">
            원목의 특성과 식탁 마감 관리법, 작은 방에 맞는 가구 배치까지.
            <br className="hidden md:block" />
            가구를 고르고 오래 사용하는 데 필요한 정보를 기록합니다.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-[1440px] gap-x-4 gap-y-12 md:grid-cols-3 md:gap-y-14">
          {journalPosts.map((post) => (
            <Link key={post.slug} href={`${base}/journal/${post.slug}`} className="group block">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[8px]">
                <img
                  src={`/templates/OHMT035-atelier-house/${journalImages[post.slug]}`}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 text-xs text-[var(--color-text-muted)]">{post.date}</p>
              <h2 className="mt-1 text-base font-semibold leading-snug text-[var(--color-text)]">{post.title}</h2>
              <p className="mt-2 whitespace-pre-line text-xs leading-relaxed text-[var(--color-text-muted)] word-keep-all">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
