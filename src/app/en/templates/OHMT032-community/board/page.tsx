import type { Metadata } from 'next'
import { TemplateWrapper } from '../_components/TemplateWrapper'
import { BoardClient } from '../_components/pages/BoardClient'

export const metadata: Metadata = {
  title: 'All Posts',
  description: 'Browse all OHMT community posts by latest, popular, or most commented.',
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
