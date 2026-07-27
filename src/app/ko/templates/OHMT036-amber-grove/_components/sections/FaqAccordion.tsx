'use client'

import { useState } from 'react'
import { Plus } from '@phosphor-icons/react'

const faqs = [
  ['품종을 직접 고를 수 있나요?', '상자 구성은 그 주의 수확 품목에 따라 달라지지만, 과일 종류는 선택할 수 있습니다. 출고 전에 실제로 담기는 품종을 안내해 드립니다.'],
  ['베리류도 전국 배송이 되나요?', '베리류는 쉽게 무르기 때문에 현재는 인근 지역 당일 배송만 운영합니다. 장거리 배송을 위한 과도한 포장을 줄이기 위한 기준입니다.'],
  ['유기농 인증을 받았나요?', '네. 유기농산물 인증을 받은 과수원이며, 수확 구역별로 선별과 포장 기록을 남깁니다.'],
  ['날씨 때문에 작황이 바뀌면 어떻게 되나요?', '출고 전에 배송 연기나 대체 품목을 안내하며, 환불을 선택할 수도 있습니다. 정해진 날짜에 맞추려고 상태가 좋지 않은 과일을 보내지는 않습니다.'],
]

export function FaqAccordion() {
  const [open, setOpen] = useState(0)

  return (
    <section className="border-t border-[var(--color-border)] py-20 lg:py-28">
      <div className="grid grid-cols-12 gap-y-8 sm:gap-x-10 lg:gap-x-16">
        <div className="col-span-12 lg:col-span-4">
          <p className="ledger-num text-sm font-bold text-[var(--color-accent)]">06 · 자주 묻는 질문</p>
          <h2 className="copy-heading mt-4 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-[var(--leading-body)] sm:text-4xl">
            주문 전에 꼭 확인하세요.
          </h2>
        </div>
        <div className="col-span-12 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)] lg:col-span-8">
          {faqs.map(([question, answer], index) => {
            const active = open === index
            return (
              <div key={question} className="py-7">
                <button
                  type="button"
                  onClick={() => setOpen(active ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 text-left"
                >
                  <span className="text-base font-semibold">{question}</span>
                  <Plus className={`shrink-0 transition-transform duration-200 ${active ? 'rotate-45' : ''}`} size={18} />
                </button>
                {active ? <p className="copy-body mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text-muted)]">{answer}</p> : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
