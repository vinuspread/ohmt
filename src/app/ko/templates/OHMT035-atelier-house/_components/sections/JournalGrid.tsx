import Link from 'next/link'
import { journalPosts } from '../../data/journal'

const base = '/ko/templates/OHMT035-atelier-house'

const journalImages: Record<string, string> = {
  'reading-wood-grain': 'journal-wood-grain.jpg',
  'small-room-seating': 'journal-small-room.jpg',
  'oiled-vs-lacquered': 'journal-oiled-lacquer.jpg',
  'wood-joint-stability': 'journal-wood-joint-stability.jpg',
  'solid-wood-seasonal-care': 'journal-solid-wood-seasonal-care.jpg',
}

export function JournalGrid() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--color-text)]">
          아틀리에 저널
        </h2>
        <div className="mt-8 grid gap-y-8 md:grid-cols-3 md:gap-x-4 md:gap-y-4">
          {journalPosts.slice(0, 3).map((post) => (
            <Link key={post.slug} href={`${base}/journal/${post.slug}`} className="group block">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[8px]">
                <img
                  src={`/templates/OHMT035-atelier-house/${journalImages[post.slug]}`}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 text-xs text-[var(--color-text-muted)]">{post.date}</p>
              <h3 className="mt-1 text-base font-semibold leading-snug text-[var(--color-text)]">{post.title}</h3>
              <span className="mt-2 inline-block text-xs font-semibold text-[var(--color-text)] underline decoration-[var(--color-border)] underline-offset-4 transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                글 읽기</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
