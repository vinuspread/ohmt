import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { stories } from '../../data/stories'

const base = '/ko/templates/OHMT033-foundation'

type PageProps = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const story = stories.find((s) => s.id === id)
  if (!story) return { title: '해당 스토리를 찾을 수 없습니다' }

  return {
    title: `${story.name} | ${story.program}`,
    description: story.excerpt,
    openGraph: {
      title: `${story.name} | ${story.program}`,
      description: story.excerpt,
      images: [{ url: `/templates/OHMT033-foundation/${story.image}` }],
    },
  }
}

export default async function StoryDetailPage({ params }: PageProps) {
  const { id } = await params
  const story = stories.find((s) => s.id === id)
  if (!story) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${story.name} | ${story.program}`,
    description: story.excerpt,
    author: { '@type': 'Organization', name: 'OHMT 파운데이션' },
  }

  return (
    <article className="mx-auto max-w-[880px] px-6 py-16 md:px-12 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Link
        href={`${base}/stories`}
        className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:underline"
      >
        <ArrowLeft size={16} weight="bold" aria-hidden="true" />
        <span>스토리 목록</span>
      </Link>

      <p className="mt-6 text-sm font-medium text-[var(--color-accent)]">
        {story.program}
      </p>
      <h1 className="font-heading mt-3 text-[length:var(--text-h2)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)]">
        {story.name}
      </h1>
      <p className="mt-2 text-base text-[var(--color-text-muted)]">{story.role}</p>

      <div className="relative mt-12 aspect-[16/10] overflow-hidden">
        <Image
          unoptimized
          src={`/templates/OHMT033-foundation/${story.image}`}
          alt={`${story.name}, ${story.role}`}
          fill
          priority
          className="object-cover"
          sizes="(min-width: 880px) 880px, 100vw"
        />
      </div>

      <blockquote className="font-heading mt-12 border-l-2 border-[var(--color-accent)] pl-6 text-xl font-medium not-italic leading-relaxed text-[var(--color-text)]">
        &ldquo;{story.quote}&rdquo;
      </blockquote>

      <div className="mt-6 flex flex-col gap-6 text-base leading-relaxed text-[var(--color-text)]">
        {story.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-16 border-t border-[var(--color-border)] pt-6">
        <Link
          href={`${base}/programs`}
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:underline"
        >
          <span>프로그램 전체 보기</span>
          <ArrowRight size={16} weight="bold" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
