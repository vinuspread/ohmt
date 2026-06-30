"use client"

import { featuresData } from '../data/data'

export default function Features() {
  return (
    <section id="features" className="bg-[var(--color-bg)] py-20 md:py-32 border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3 block">
              Core Capabilities
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.02em] leading-none text-[var(--color-text)] font-heading">
              Key features engineered for impact
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-[var(--color-text-muted)] leading-[1.2]">
            Every subsystem is crafted to combine maximum reliability with next-generation machine intelligence to drive actual performance.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="group transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="aspect-[4/3] w-full overflow-hidden mb-6 rounded-[48px]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title & Description */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-3 font-heading transition-colors group-hover:text-[var(--color-accent)]">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-[1.2] mb-6 flex-grow">
                  {feature.description}
                </p>

                {/* Decorative Arrow indicator */}
                <div className="pt-4 mt-auto border-t border-[var(--color-border)]/50 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors duration-200">
                    Read spec
                  </span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all duration-200">
                    <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
