"use client"

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] border-b border-[var(--color-border)]">

      {/* Mobile layout: text top, image below, button pinned to bottom */}
      <div
        className="lg:hidden relative flex flex-col w-full"
        style={{ height: 'calc(100vh - 68px)' }}
      >
        {/* Text area - solid bg, no overlap */}
        <div className="px-6 pt-10 pb-6 bg-[var(--color-bg)] flex-shrink-0">
          <h1 className="text-[clamp(3rem,11vw,4rem)] font-extrabold tracking-[-0.04em] leading-[1.08] text-[var(--color-text)] font-heading mb-4">
            Autonomy<br />
            isn't the future -<br />
            <span className="text-[var(--color-accent)]">it's now.</span>
          </h1>
          <div className="mb-3 w-12 h-[3px] bg-[var(--color-accent)]" />
          <p className="text-sm text-[var(--color-text-muted)] leading-[1.5]">
            Autonomous systems engineered for high-precision navigation, on-device AI computing, and fluid human-robot collaboration.
          </p>
        </div>
        {/* Image fills remaining space */}
        <div className="flex-1 overflow-hidden">
          <img
            src="/templates/OHMT016-technology/hero-clean-robot.png?v=3"
            alt="OmniBot"
            className="w-full h-full object-cover"
            style={{ objectPosition: '60% top' }}
          />
        </div>
        {/* Button pinned to bottom */}
        <div className="absolute bottom-8 left-6 right-6">
          <Link
            href="#models"
            className="inline-flex items-center justify-center w-full px-8 py-5 bg-[var(--color-accent)] text-white font-bold text-sm uppercase tracking-[0.15em] hover:opacity-90 active:scale-95 transition-all duration-200 rounded-md shadow-[0_8px_32px_rgba(59,130,246,0.5)]"
          >
            Reserve Now
          </Link>
        </div>
      </div>

      {/* Desktop layout: text left, image background right */}
      <div
        className="hidden lg:flex items-center border-b border-[var(--color-border)]"
        style={{ minHeight: 'calc(100vh - 68px)' }}
      >
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        {/* Robot background */}
        <div
          className="absolute inset-0 z-0 bg-no-repeat pointer-events-none bg-[position:right_bottom] bg-[length:auto_100%] -translate-x-[400px]"
          style={{ backgroundImage: "url('/templates/OHMT016-technology/hero-clean-robot.png?v=3')" }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
          <div className="w-1/2 flex flex-col items-start pr-8">
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold tracking-[-0.04em] leading-[1.08] text-[var(--color-text)] font-heading">
              Autonomy isn't<br />
              the future -<br />
              <span className="text-[var(--color-accent)]">it's now.</span>
            </h1>
            <div className="my-6 w-12 h-[3px] bg-[var(--color-accent)]" />
            <p className="mb-10 text-base md:text-lg text-[var(--color-text-muted)] font-normal leading-[1.3] max-w-[480px]">
              Autonomous systems engineered for high-precision navigation, on-device AI computing, and fluid human-robot collaboration.
            </p>
            <div className="flex flex-row items-start gap-4">
              <Link
                href="#models"
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-text)] text-white font-bold text-[13px] uppercase tracking-[0.15em] hover:bg-[var(--color-accent)] active:scale-95 transition-all duration-200 rounded-md"
              >
                Reserve Now
              </Link>
              <Link
                href="#models"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[var(--color-border)] bg-white text-[var(--color-text)] font-bold text-[13px] uppercase tracking-[0.15em] hover:border-[var(--color-text)] active:scale-95 transition-all duration-200 rounded-md"
              >
                From $45,000 USD
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
