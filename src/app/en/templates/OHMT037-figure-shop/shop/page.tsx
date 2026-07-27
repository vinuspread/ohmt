import type { Metadata } from 'next'
import { ShopExplorer } from '../_components/sections/ShopExplorer'
import { SubHero } from '../_components/ui/SubHero'

export const metadata: Metadata = {
  title: 'OHMT - Forma Figures | Shop',
  description:
    'The full FORMA catalog: numbered collectible figures across 1:7 Scale, Mecha, Chibi, Garage Kit, and Limited lines.',
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ line?: string }>
}) {
  const { line } = await searchParams
  return (
    <div className="pt-16">
      <SubHero
        title="The Catalog"
        label="Shop"
        description="Browse numbered figures by line, status, scale, and edition availability."
      />
      <ShopExplorer initialLine={line} />
    </div>
  )
}
