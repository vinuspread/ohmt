"use client"

import Link from 'next/link'

export default function TechDesign() {
  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-32 border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Content */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3 block">
              Aesthetic Engineering
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--color-text)] font-heading">
              Where technology meets design
            </h2>
          </div>
          <Link
            href="#models"
            className="inline-flex items-center justify-center px-6 py-3 border border-[var(--color-text)] text-[var(--color-text)] font-bold text-xs uppercase tracking-widest hover:bg-[var(--color-text)] hover:text-white active:scale-95 transition-all duration-300 rounded-none"
          >
            Browse All Models
          </Link>
        </div>

        {/* Video Mockup Section */}
        <div className="relative">
          <div 
            className="relative aspect-[4/5] md:aspect-[16/9] w-full overflow-hidden rounded-[48px] bg-cover bg-center group flex items-center justify-between px-6 md:px-20 py-12 md:py-0"
            style={{ backgroundImage: "url('/templates/technology/tech-design-bg.png')" }}
          >
            {/* Dark overlay for typography readability */}
            <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

            {/* Grid overlay */}
            <div
              className="absolute inset-0 z-10 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
 
            {/* Left Column: Tech spec details & Play button */}
            <div className="relative z-20 w-full md:w-3/5 flex flex-col items-start gap-3 md:gap-4 pr-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                system presentation v2
              </span>
              <h3 className="text-xl md:text-3xl font-extrabold text-white font-heading tracking-tight leading-snug">
                OmniBot Gen 2: Autonomous capability demo and hardware layout review.
              </h3>
              
              {/* Play Button */}
              <div className="mt-4 flex items-center gap-4">
                <button className="relative w-14 h-14 rounded-full border border-white/30 bg-white/10 flex items-center justify-center group-hover:scale-105 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] transition-all duration-300">
                  <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <span className="text-xs font-bold uppercase tracking-wider text-white">Watch Showcase (2:45)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
