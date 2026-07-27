import Link from 'next/link'

const base = '/ko/templates/OHMT035-atelier-house'

const categories = [
  { name: '의자', slug: 'seating', image: 'category-seating.jpg' },
  { name: '테이블', slug: 'tables', image: 'category-tables.jpg' },
  { name: '조명', slug: 'lighting', image: 'category-lighting.jpg' },
  { name: '패브릭', slug: 'textiles', image: 'category-textiles.jpg' },
]

export function CategoryGrid() {
  return (
    <section className="px-5 py-12 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`${base}/shop`}
              className="group relative aspect-square overflow-hidden rounded-[8px] bg-[var(--color-bg-secondary)]"
            >
              <img
                src={`/templates/OHMT035-atelier-house/${c.image}`}
                alt={c.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/20" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-flex rounded-[4px] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--color-text)] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  {c.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
