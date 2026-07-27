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
          <h1 className="text-[length:var(--text-h1)] font-extrabold tracking-[-0.04em] leading-[var(--leading-heading)] text-[var(--color-text)] font-heading mb-4 break-keep">
            자율 로봇은<br />
            미래의 기술이 아닙니다<br />
            <span className="text-[var(--color-accent)]">바로 지금입니다.</span>
          </h1>
          <div className="mb-3 w-12 h-[3px] bg-[var(--color-accent)]" />
          <p className="text-sm text-[var(--color-text-muted)] leading-[var(--leading-body)] break-keep">
            정밀한 자율주행과 온디바이스 AI, 안전한 인간·로봇 협업을 하나의 시스템에 담았습니다.
          </p>
        </div>
        {/* Image fills remaining space */}
        <div className="flex-1 overflow-hidden">
          <img
            src="/templates/OHMT016-technology/hero-clean-robot.png?v=3"
            alt="Robotflow 자율 로봇"
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
            사전 예약
          </Link>
        </div>
      </div>

      {/* Desktop layout */}
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
          className="absolute inset-0 z-0 bg-no-repeat pointer-events-none bg-[position:right_bottom] bg-[length:auto_100%] lg:-translate-x-[50px] xl:-translate-x-[200px] 2xl:-translate-x-[300px] transition-transform duration-300"
          style={{ backgroundImage: "url('/templates/OHMT016-technology/hero-clean-robot.png?v=3')" }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
          <div className="w-1/2 flex flex-col items-start pr-8">
            <h1 className="text-[length:var(--text-h1)] font-extrabold tracking-[-0.04em] leading-[var(--leading-heading)] text-[var(--color-text)] font-heading break-keep">
              자율 로봇은 미래의 기술이<br />
              아닙니다<br />
              <span className="text-[var(--color-accent)]">바로 지금입니다.</span>
            </h1>
            <div className="my-6 w-12 h-[3px] bg-[var(--color-accent)]" />
            <p className="mb-10 text-base md:text-lg text-[var(--color-text-muted)] font-normal leading-[var(--leading-body)] max-w-[480px] break-keep">
              정밀한 자율주행과 온디바이스 AI, 안전한 인간·로봇 협업을 하나의 시스템에 담았습니다.
            </p>
            <div className="flex flex-row items-start gap-4">
              <Link
                href="#models"
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-text)] text-white font-bold text-xs uppercase tracking-[0.15em] hover:bg-[var(--color-accent)] active:scale-95 transition-all duration-200 rounded-md"
              >
                사전 예약
              </Link>
              <Link
                href="#models"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[var(--color-border)] bg-white text-[var(--color-text)] font-bold text-xs uppercase tracking-[0.15em] hover:border-[var(--color-text)] active:scale-95 transition-all duration-200 rounded-md"
              >
                28,000,000원부터
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
