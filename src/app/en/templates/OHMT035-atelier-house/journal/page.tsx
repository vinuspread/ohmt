import type { Metadata } from 'next'
import Link from 'next/link'
import { journalPosts } from '../data/journal'

const base = '/en/templates/OHMT035-atelier-house'

export const metadata: Metadata = {
  title: 'OHMT - Journal',
  description: 'Notes on wood, finish, and furnishing a small room well.',
}

const journalImages: Record<string, string> = {
  'reading-wood-grain': 'journal-wood-grain.jpg',
  'small-room-seating': 'journal-small-room.jpg',
  'oiled-vs-lacquered': 'journal-oiled-lacquer.jpg',
  'wood-joint-stability': 'journal-wood-joint-stability.jpg',
  'solid-wood-seasonal-care': 'journal-solid-wood-seasonal-care.jpg',
}

export default function JournalPage() {
  return (
    <div>
      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1440px]">
          <h1 className="font-display text-[length:var(--text-h2)] font-semibold tracking-tight text-[var(--color-text)]">
            Journal
          </h1>
          <p className="mt-3 max-w-[520px] text-sm leading-relaxed text-[var(--color-text-muted)]">
            Notes on wood, finish, and furnishing a small room well.
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
              <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-muted)]">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
