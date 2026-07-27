import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { products } from '../../data/products'

const base = '/ko/templates/OHMT035-atelier-house'

const featured = products.find((p) => p.slug === 'harbor-sofa')!

const highlights = [
  { text: '가공판재 없이 인공 건조한 하드우드로 제작한 프레임' },
  { text: '생활 오염을 닦아내기 쉬운 기능성 패브릭 시트' },
  { text: '몸을 안정적으로 받치는 복원력 높은 3쿠션 구조' },
]

export function FeatureSpotlight() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[12px] md:aspect-[21/9]">
          <img
            src={`/templates/OHMT035-atelier-house/product-${featured.slug}.jpg`}
            alt={featured.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="mt-4 grid gap-8 rounded-[12px] bg-[var(--color-bg-secondary)] p-6 md:grid-cols-2 md:gap-0 md:p-10">
          <div className="md:border-r md:border-[var(--color-border)] md:pr-10">
            <h2 className="font-display text-[length:var(--text-h3)] font-semibold uppercase leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)]">
              {featured.name}
            </h2>
            <p className="mt-3 text-lg font-semibold text-[var(--color-text)]">
              {featured.price.toLocaleString()}원
            </p>
            <div className="mt-6 border-t border-[var(--color-border)] pt-6">
              <Link
                href={`${base}/shop/${featured.slug}`}
                className="inline-flex items-center gap-2 rounded-[4px] bg-[#1a1a1a] px-6 py-3 text-xs font-semibold text-white transition-opacity duration-300 hover:opacity-85"
              >
                자세히 보기
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </div>

          <div className="md:pl-10">
            <p className="whitespace-pre-line text-sm leading-relaxed text-[var(--color-text-muted)] word-keep-all">{featured.description}</p>
            <ul className="mt-6 flex list-disc flex-col gap-3 pl-5 marker:text-[var(--color-accent)]">
              {highlights.map((h, i) => (
                <li key={i} className="text-sm leading-relaxed text-[var(--color-text)] word-keep-all">
                  {h.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
