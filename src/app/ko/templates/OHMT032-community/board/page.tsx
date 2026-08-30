import type { Metadata } from 'next'
import { TemplateWrapper } from '../_components/TemplateWrapper'
import { BoardClient } from '../_components/pages/BoardClient'

export const metadata: Metadata = {
  title: '전체 게시글',
  description: 'OHMT 커뮤니티의 전체 게시글을 최신순, 인기순, 댓글많은순으로 확인합니다.',
}

export default async function BoardPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q = '' } = await searchParams

  return (
    <TemplateWrapper>
      <BoardClient initialQuery={q} />
    </TemplateWrapper>
  )
}
