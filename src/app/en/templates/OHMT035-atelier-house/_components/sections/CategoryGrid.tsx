import Link from 'next/link'

const base = '/en/templates/OHMT035-atelier-house'

const categories = [
  { label: 'Seating', image: 'category-seating.jpg' },
  { label: 'Tables', image: 'category-tables.jpg' },
  { label: 'Lighting', image: 'category-lighting.jpg' },
  { label: 'Textiles', image: 'category-textiles.jpg' },
]

export function CategoryGrid() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--color-text)]">
          Shop by category
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((cat) => (
            <Link key={cat.label} href={`${base}/shop`} className="group block">
              <div className="relative aspect-square overflow-hidden rounded-[12px] bg-[var(--color-bg-secondary)]">
                <img
                  src={`/templates/OHMT035-atelier-house/${cat.image}`}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-[var(--color-text)]">{cat.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
