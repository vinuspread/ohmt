"use client"

import Link from 'next/link'
import { specData } from '../data/data'

export default function SpecShowcase() {
  const leftSpecs = specData.filter((s) => s.side === 'left')
  const rightSpecs = specData.filter((s) => s.side === 'right')

  return (
    <section id="specs" className="bg-[var(--color-bg-secondary)] py-20 md:py-32 border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3 block">
            시스템 사양
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.02em] leading-[1.2] text-[var(--color-text)] font-heading break-keep">
            OmniBot Gen 2 소개
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-sm md:text-base text-[var(--color-text-muted)] leading-[1.2]">
            모듈형 엔지니어링과 차세대 마이크로컨트롤러의 만남. 현대 작업 공간에 완벽하게 통합되도록 설계되었습니다.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Specs */}
          <div className="lg:col-span-4 space-y-12 pb-16 lg:pb-24 flex flex-col justify-center">
            {leftSpecs.map((spec) => (
              <div key={spec.id} className="group text-left lg:text-right">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)] text-white mb-4 font-mono text-sm font-semibold">
                  {spec.id === 'battery' ? 'L1' : 'L2'}
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-2 font-heading transition-colors group-hover:text-[var(--color-accent)]">
                  {spec.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-[1.2]">
                  {spec.description}
                </p>
                {/* Pointer Line Element for desktop */}
                <div className="hidden lg:block mt-3 border-t border-dashed border-[var(--color-border)] group-hover:border-[var(--color-accent)] transition-colors duration-300 w-full" />
              </div>
            ))}
          </div>

          {/* Central Mockup Image */}
          <div className="lg:col-span-4 flex justify-center items-end relative z-10 lg:-mx-8">
            <div className="relative w-full max-w-[680px] flex items-end justify-center">
              <img
                src="/templates/technology/omnibot-mockup-nuki.png"
                alt="OmniBot Gen 2 목업 구조"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Specs */}
          <div className="lg:col-span-4 space-y-12 pb-16 lg:pb-24 flex flex-col justify-center">
            {rightSpecs.map((spec) => (
              <div key={spec.id} className="group text-left">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)] text-white mb-4 font-mono text-sm font-semibold">
                  {spec.id === 'modular' ? 'R1' : 'R2'}
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-2 font-heading transition-colors group-hover:text-[var(--color-accent)]">
                  {spec.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-[1.2]">
                  {spec.description}
                </p>
                {/* Pointer Line Element for desktop */}
                <div className="hidden lg:block mt-3 border-t border-dashed border-[var(--color-border)] group-hover:border-[var(--color-accent)] transition-colors duration-300 w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner Row */}
        <div className="mt-0 bg-[var(--color-accent)] px-8 md:px-12 py-10 md:py-14 flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-2xl">
          <div className="max-w-xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-heading">
              진짜 로보틱스. 진짜 임팩트.
            </h3>
            <p className="text-sm text-white/70 leading-[1.2]">
              실제 비즈니스 확장과 운영 최적화를 위해 설계된 완전 자율 자동화의 성능을 경험하세요.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="#models"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-[var(--color-accent)] font-bold text-xs uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all duration-300 rounded-md"
            >
              지금 예약하기
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
