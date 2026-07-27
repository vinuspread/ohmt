import type { Metadata } from 'next'
import Link from 'next/link'
import { TemplateWrapper } from '../../_components/TemplateWrapper'
import { PostDetailClient } from '../../_components/pages/PostDetailClient'
import { getPost } from '../../data/posts-data'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const post = getPost(id)
  return {
    title: post ? post.title : 'Post not found',
    description: post ? post.excerpt : 'Unknown posts show a helpful fallback instead of an empty screen.',
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = getPost(id)

  return (
    <TemplateWrapper>
      {post ? (
        <PostDetailClient post={post} />
      ) : (
        <section className="rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] p-6 text-center">
          <h1 className="text-2xl font-semibold text-[var(--color-text)]">Post not found</h1>
          <p className="mt-3 text-sm text-[var(--color-text-muted)]">This post was removed or does not exist. Browse the full board for another discussion.</p>
          <Link href="/en/templates/OHMT032-community/board" className="mt-5 inline-flex h-9 items-center rounded-full bg-[var(--color-accent)] px-3.5 text-xs font-semibold text-[var(--color-text-contrast)]">
            Back
          </Link>
        </section>
      )}
    </TemplateWrapper>
  )
}
