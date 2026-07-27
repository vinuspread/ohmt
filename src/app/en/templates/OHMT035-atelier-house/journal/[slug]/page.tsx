import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { journalPosts } from '../../data/journal'

const base = '/en/templates/OHMT035-atelier-house'

const journalImages: Record<string, string> = {
  'reading-wood-grain': 'journal-wood-grain.jpg',
  'small-room-seating': 'journal-small-room.jpg',
  'oiled-vs-lacquered': 'journal-oiled-lacquer.jpg',
  'wood-joint-stability': 'journal-wood-joint-stability.jpg',
  'solid-wood-seasonal-care': 'journal-solid-wood-seasonal-care.jpg',
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = journalPosts.find((p) => p.slug === slug)
  if (!post) return { title: 'OHMT - Journal' }
  return {
    title: `OHMT - ${post.title}`,
    description: post.excerpt,
  }
}

export default async function JournalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = journalPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    description: post.excerpt,
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <article className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-[720px]">
          <p className="text-xs text-[var(--color-text-muted)]">{post.date}</p>
          <h1 className="mt-3 font-display text-[length:var(--text-h3)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)]">
            {post.title}
          </h1>
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[8px]">
            <img
              src={`/templates/OHMT035-atelier-house/${journalImages[post.slug]}`}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="mt-8 flex flex-col gap-5">
            {post.body.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-[var(--color-text)]">
                {para}
              </p>
            ))}
          </div>
          <p className="mt-10 text-xs">
            <Link href={`${base}/journal`} className="underline decoration-[var(--color-border)] underline-offset-4 hover:text-[var(--color-accent)]">
              Back to journal
            </Link>
          </p>
        </div>
      </article>
    </div>
  )
}
