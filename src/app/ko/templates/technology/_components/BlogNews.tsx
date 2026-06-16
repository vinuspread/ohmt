"use client"

import Link from 'next/link'
import { blogData } from '../data/data'

export default function BlogNews() {
  const featuredPost = blogData.find((b) => b.id === 'featured')
  const listPosts = blogData.filter((b) => b.id !== 'featured')

  return (
    <section id="news" className="bg-[var(--color-bg-secondary)] py-20 md:py-32 border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3 block">
              Knowledge Hub
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.02em] leading-[1.2] text-[var(--color-text)] font-heading">
              Our latest news
            </h2>
          </div>
          <Link
            href="#news"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[var(--color-accent)] text-white font-bold text-xs uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all duration-300 rounded-md"
          >
            Browse All Articles
          </Link>
        </div>

        {/* Layout - responsive height constraints */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 h-auto lg:h-[406px]">
          {/* Left: Featured image with text overlay */}
          {featuredPost && (
            <Link href="#news" className="lg:col-span-7 group relative block h-[300px] sm:h-[360px] lg:h-full overflow-hidden rounded-2xl">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Text at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-white/20 text-white rounded-sm">
                    {featuredPost.category}
                  </span>
                  <span className="text-xs text-white/70">
                    {featuredPost.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white font-heading leading-[1.2] tracking-tight">
                  {featuredPost.title}
                </h3>
              </div>
            </Link>
          )}

          {/* Right: Vertical List of 3 posts */}
          <div className="lg:col-span-5 flex flex-col justify-between h-auto lg:h-full gap-6 lg:gap-0 divide-y divide-[var(--color-border)]/50">
            {listPosts.map((post) => (
              <Link
                key={post.id}
                href="#news"
                className="group flex items-center gap-6 py-6 first:pt-0 last:pb-0"
              >
                <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="inline-block px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-sm">
                      {post.category}
                    </span>
                    <span className="text-[11px] text-[var(--color-text-muted)]">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[var(--color-text)] font-heading transition-colors group-hover:text-[var(--color-accent)] leading-snug tracking-tight">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors duration-200 mt-1">
                    <span>Read article</span>
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="transform group-hover:translate-x-1 transition-transform text-[var(--color-accent)]">
                      <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
