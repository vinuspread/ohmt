"use client"

import Link from 'next/link'
import { modelData } from '../data/data'

export default function Pricing() {
  return (
    <section id="models" className="bg-[var(--color-bg)] py-20 md:py-32 border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3 block">
            제품 라인업
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.02em] leading-[1.2] text-[var(--color-text)] font-heading break-keep">
            사용 가능한 모델
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-sm md:text-base text-[var(--color-text-muted)] leading-[1.2]">
            운영 및 확장성 기준에 가장 적합한 자율 시스템을 선택하세요.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {modelData.map((model) => (
            <div
              key={model.id}
              className="group transition-all duration-300 flex flex-col md:flex-row md:items-center"
            >
              {/* Info Column */}
              <div className="py-8 pr-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-2 font-heading transition-colors group-hover:text-[var(--color-accent)]">
                    {model.name}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-[1.2] mb-6">
                    {model.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-bold text-[var(--color-text)] font-heading">
                      {model.id === 'gen2' ? '$20K' : '$25K'}
                    </span>
                    <span className="text-sm text-[var(--color-text-muted)] line-through">
                      {model.slashedPrice}
                    </span>
                    <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[var(--color-success)]/10 text-[var(--color-success)]">
                      {model.saveAmount}
                    </span>
                  </div>

                  <p className="text-[11px] text-[var(--color-text-muted)] mb-6">
                    {model.financing}
                  </p>

                  <Link
                    href="#models"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-200"
                  >
                    <span>자세히 알아보기</span>
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform">
                      <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Product Image Column */}
              <div className="relative w-full md:w-[200px] flex-shrink-0 aspect-square overflow-hidden rounded-2xl">
                <img
                  src={model.image}
                  alt={model.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
