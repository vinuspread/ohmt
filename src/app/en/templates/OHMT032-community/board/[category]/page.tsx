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
    title: found ? `${found.name} Board` : 'Board not found',
    description: found ? found.description : 'Unknown categories show a helpful fallback instead of an empty screen.',
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
          <Link href="/en/templates/OHMT032-community/board" className="text-sm font-semibold text-[var(--color-accent)]">
            Back to all boards
          </Link>
        </div>
      )}
    </TemplateWrapper>
  )
}
