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
    title: post ? post.title : '게시글을 찾을 수 없습니다',
    description: post ? post.excerpt : '존재하지 않는 게시글에도 빈 화면 대신 안내 화면을 선보입니다.',
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
          <h1 className="text-2xl font-semibold text-[var(--color-text)]">게시글을 찾을 수 없습니다</h1>
          <p className="mt-3 text-sm text-[var(--color-text-muted)]">삭제되었거나 존재하지 않는 글입니다. 전체 게시판에서 다른 글을 확인해 주세요.</p>
          <Link href="/ko/templates/OHMT032-community/board" className="mt-5 inline-flex h-9 items-center rounded-full bg-[var(--color-accent)] px-3.5 text-xs font-semibold text-[var(--color-text-contrast)]">
            목록으로 돌아가기
          </Link>
        </section>
      )}
    </TemplateWrapper>
  )
}
