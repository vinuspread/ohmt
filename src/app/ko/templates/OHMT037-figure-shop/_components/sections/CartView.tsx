'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Minus, Plus, X } from 'lucide-react'
import { BASE, formatUsd } from '../../data/figures'
import { Button } from '../ui/Button'
import { useCart } from '../CartContext'

export function CartView() {
  const { items, totalUsd, setQty, remove } = useCart()

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-6 px-4 py-24 lg:px-6">
        <p className="text-base text-[var(--color-ink-muted)]">장바구니가 비어 있습니다.</p>
        <Button href={`${BASE}/shop`}>전체 보기</Button>
      </div>
    )
  }

  return (
    <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-4 py-12 lg:grid-cols-2 lg:gap-24 lg:px-6 lg:py-16">
      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <li
            key={`${item.slug}-${item.colorway}`}
            className="flex items-center gap-4 bg-[var(--color-bg-tile)] p-4 lg:gap-6"
          >
            <Link
              href={`${BASE}/figures/${item.slug}`}
              className="relative h-24 w-20 shrink-0 overflow-hidden bg-[var(--color-bg-tile)]"
            >
              <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" unoptimized />
            </Link>
            <div className="min-w-0 flex-1">
              <Link
                href={`${BASE}/figures/${item.slug}`}
                className="block truncate text-base font-semibold text-[var(--color-ink)]"
              >
                {item.name}
              </Link>
              <p className="meta-label mt-1 text-[var(--color-ink-faint)]">{item.colorway}</p>
              <p className="value-text mt-2 text-[var(--color-ink)]">{formatUsd(item.priceUsd)}</p>
            </div>
            <div className="flex items-center rounded-full border border-[var(--color-border)]">
              <button
                type="button"
                aria-label={`${item.name} 수량 줄이기`}
                onClick={() => setQty(item.slug, item.colorway, item.qty - 1)}
                className="flex h-9 w-9 items-center justify-center text-[var(--color-ink)]"
              >
                <Minus size={14} aria-hidden />
              </button>
              <span className="value-text w-8 text-center">{item.qty}</span>
              <button
                type="button"
                aria-label={`${item.name} 수량 늘리기`}
                onClick={() => setQty(item.slug, item.colorway, item.qty + 1)}
                className="flex h-9 w-9 items-center justify-center text-[var(--color-ink)]"
              >
                <Plus size={14} aria-hidden />
              </button>
            </div>
            <button
              type="button"
              aria-label={`${item.name} 삭제`}
              onClick={() => remove(item.slug, item.colorway)}
              className="flex h-9 w-9 items-center justify-center text-[var(--color-ink-faint)] transition-colors duration-150 hover:text-[var(--color-accent)]"
            >
              <X size={16} aria-hidden />
            </button>
          </li>
        ))}
      </ul>

      <aside className="h-fit bg-[var(--color-bg-tile)] p-6 lg:sticky lg:top-24">
        <h2 className="meta-label text-[var(--color-ink-faint)]">주문 요약</h2>
        <dl className="mt-6 flex flex-col gap-3">
          <div className="flex items-baseline justify-between">
            <dt className="text-base text-[var(--color-ink-muted)]">상품 금액</dt>
            <dd className="value-text text-[var(--color-ink)]">{formatUsd(totalUsd)}</dd>
          </div>
          <div className="flex items-baseline justify-between">
            <dt className="text-base text-[var(--color-ink-muted)]">배송</dt>
            <dd className="meta-label text-[var(--color-ink-faint)]">결제 단계에서 확인</dd>
          </div>
        </dl>
        <div className="mt-6 border-t border-[var(--color-border)] pt-6">
          <div className="flex items-baseline justify-between">
            <span className="text-base font-semibold text-[var(--color-ink)]">합계</span>
            <span className="value-text text-[var(--color-ink)]">{formatUsd(totalUsd)}</span>
          </div>
          <button
            type="button"
            className="ui-label mt-6 w-full cursor-not-allowed rounded-full border border-[var(--color-border)] px-6 py-4 text-[var(--color-ink-faint)]"
            disabled
          >
            결제하기
          </button>
          <p className="meta-label mt-3 text-[var(--color-ink-faint)]">
            데모 장바구니입니다. 이 템플릿에서는 실제 결제로 연결되지 않습니다.
          </p>
        </div>
      </aside>
    </div>
  )
}
