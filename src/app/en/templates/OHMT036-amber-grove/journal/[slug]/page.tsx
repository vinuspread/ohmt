import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import { getJournalPost, journalPosts } from '../../data/journal'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getJournalPost(slug)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} - Amber Grove Journal`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} - Amber Grove Journal`,
      description: post.excerpt,
      images: [{ url: post.image, width: 1600, height: 1000 }],
    },
  }
}

export default async function JournalDetailPage({ params }: PageProps) {
  const { slug } = await params
  const post = getJournalPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <article>
      <section className="py-14 lg:py-20">
        <div className="w-full">
          <Link href="/en/templates/OHMT036-amber-grove/journal" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent)]">
            <ArrowLeft size={16} weight="bold" />
            Back to journal
          </Link>
          <p className="ledger-num mt-10 text-sm font-semibold text-[var(--color-text-muted)]">{post.date}</p>
          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-semibold leading-[var(--leading-heading)] sm:text-6xl">{post.title}</h1>
          <p className="mt-6 text-xl leading-8 text-[var(--color-text-muted)]">{post.excerpt}</p>
        </div>
      </section>

      <div className="relative aspect-[21/9] overflow-hidden rounded border border-[var(--color-border)]">
        <Image src={post.image} alt={post.title} fill priority sizes="100vw" className="object-cover" />
      </div>

      <section className="border-t border-[var(--color-border)] py-16 lg:py-24">
        <div className="w-full space-y-7 text-lg leading-8 text-[var(--color-text-muted)]">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </article>
  )
}
