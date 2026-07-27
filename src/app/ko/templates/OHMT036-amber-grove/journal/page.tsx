import Image from 'next/image'
import Link from 'next/link'
import { journalPosts } from '../data/journal'

const base = '/ko/templates/OHMT036-amber-grove'

export default function JournalPage() {
  return (
    <div>
      <section className="py-20 lg:py-28">
        <p className="ledger-num text-sm font-bold text-[var(--color-accent)]">과수원 일지</p>
        <h1 className="copy-heading mt-4 max-w-4xl font-[family-name:var(--font-heading)] text-3xl font-semibold leading-[var(--leading-body)] sm:text-5xl">
          재배와 수확, 포장 과정에서
          <br className="hidden sm:block" /> 배운 내용을 기록합니다.
        </h1>
      </section>

      <section className="border-t border-[var(--color-border)] pb-24 pt-14">
        <div className="grid gap-x-10 gap-y-14 lg:grid-cols-3">
          {journalPosts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`${base}/journal/${post.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-bg-secondary)]">
                  <Image src={post.image} alt={post.title} fill loading="eager" sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                </div>
                <p className="ledger-num mt-5 text-sm font-semibold text-[var(--color-text-muted)]">{post.date}</p>
                <h2 className="copy-heading mt-2 text-2xl font-bold leading-[var(--leading-body)]">{post.title}</h2>
                <p className="copy-body mt-3 text-sm leading-6 text-[var(--color-text-muted)]">{post.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-bold text-[var(--color-accent)] underline decoration-1 underline-offset-4">
                  글 읽기
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
