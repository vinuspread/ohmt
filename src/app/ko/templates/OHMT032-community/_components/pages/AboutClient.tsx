'use client'

import { useState } from 'react'
import { ChevronDown, Info, ShieldCheck } from 'lucide-react'

import { faqs } from '../../data/faqs-data'

export function AboutClient() {
  const [openIndex, setOpenIndex] = useState(0)
  const openJoin = () => window.dispatchEvent(new Event('ohmt032:join'))

  return (
    <div className="space-y-5">
      <section className="rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] p-6">
        <p className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-accent)]">
          <Info size={24} strokeWidth={1.8} />
          소개
        </p>
        <h1 className="mt-2.5 text-3xl font-semibold leading-[var(--leading-heading)] text-[var(--color-text)] md:text-5xl">
          지식을 쌓고 다시 꺼내 쓰는 커뮤니티 구조
        </h1>
        <div className="mt-4 max-w-3xl space-y-3 text-sm leading-6 text-[var(--color-text-secondary)]">
          <p>OHMT 커뮤니티는 특정 주제를 중심으로 질문, 정보, 후기, 공지를 정리하는 게시판형 템플릿입니다.</p>
          <p>3단 레이아웃은 자주 이동하는 카테고리와 인기글을 한눈에 보여 주고, 모바일에서는 드로어 내비게이션으로 단순하게 전환됩니다.</p>
          <p>정적 데이터로 구성되어 있어 빠르게 커뮤니티 MVP를 보여 주거나, 실제 CMS 연동 전 화면 설계를 검증하기 좋습니다.</p>
        </div>
      </section>

      <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-[var(--color-text)]">
          <ShieldCheck size={24} strokeWidth={1.8} className="text-[var(--color-accent)]" />
          운영 규칙
        </h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {['질문은 상황과 시도한 방법을 함께 적습니다.', '출처가 있는 정보는 링크나 문서명을 남깁니다.', '후기는 결과뿐 아니라 과정을 함께 공유합니다.', '비판은 사람보다 내용과 방법에 집중합니다.'].map((rule) => (
            <div key={rule} className="rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] p-6 text-xs leading-5 text-[var(--color-text-secondary)]">
              {rule}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
        <h2 className="text-xl font-semibold text-[var(--color-text)]">FAQ</h2>
        <div className="mt-4 divide-y divide-[var(--color-border)]">
          {faqs.map((faq, index) => (
            <div key={faq.q} className="py-3.5">
              <button
                type="button"
                onClick={() => setOpenIndex((value) => (value === index ? -1 : index))}
                className="flex w-full items-center justify-between gap-4 text-left text-sm font-semibold text-[var(--color-text)]"
              >
                {faq.q}
                <ChevronDown size={18} strokeWidth={1.7} className={openIndex === index ? 'rotate-180 transition' : 'transition'} />
              </button>
              {openIndex === index && <p className="mt-2.5 text-xs leading-5 text-[var(--color-text-muted)]">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[var(--radius-lg)] bg-[var(--color-secondary)] p-6 text-[var(--color-text-contrast)]">
        <h2 className="text-xl font-semibold">커뮤니티 템플릿을 바로 시작하세요</h2>
        <p className="mt-2 max-w-2xl text-xs leading-5 text-white/72">게시판 구조, 상세 페이지, 댓글 UI, 가입 문의 흐름까지 포함되어 있습니다.</p>
        <button type="button" onClick={openJoin} className="mt-4 inline-flex h-8 items-center rounded-full bg-white px-3 text-xs font-semibold text-[var(--color-secondary)] hover:bg-white/90">
          가입 문의 열기
        </button>
      </section>
    </div>
  )
}
