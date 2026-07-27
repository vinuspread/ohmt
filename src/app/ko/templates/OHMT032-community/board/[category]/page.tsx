import type { Metadata } from 'next'
import Link from 'next/link'
import { TemplateWrapper } from '../../_components/TemplateWrapper'
import { BoardClient } from '../../_components/pages/BoardClient'
import { getCategory } from '../../data/categories-data'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const { category } = await params
  const found = getCategory(category)
  return {
    title: found ? `${found.name} 게시판` : '게시판을 찾을 수 없습니다',
    description: found ? found.description : '존재하지 않는 카테고리에도 빈 화면 대신 안내 화면을 선보입니다.',
  }
}

export default async function CategoryBoardPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params

  return (
    <TemplateWrapper>
      <BoardClient categorySlug={category} />
      {!getCategory(category) && (
        <div className="mt-4 text-center">
          <Link href="/ko/templates/OHMT032-community/board" className="text-sm font-semibold text-[var(--color-accent)]">
            전체 게시판으로 돌아가기
          </Link>
        </div>
      )}
    </TemplateWrapper>
  )
}
