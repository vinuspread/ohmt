'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { Figure } from '../data/figures'

export type CartItem = {
  slug: string
  name: string
  priceUsd: number
  image: string
  colorway: string
  qty: number
}

type CartContextValue = {
  items: CartItem[]
  count: number
  totalUsd: number
  add: (figure: Figure, colorway: string) => void
  remove: (slug: string, colorway: string) => void
  setQty: (slug: string, colorway: string, qty: number) => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const add = useCallback((figure: Figure, colorway: string) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === figure.slug && i.colorway === colorway)
      if (existing) {
        return prev.map((i) =>
          i.slug === figure.slug && i.colorway === colorway ? { ...i, qty: i.qty + 1 } : i,
        )
      }
      return [
        ...prev,
        {
          slug: figure.slug,
          name: figure.name,
          priceUsd: figure.priceUsd,
          image: figure.images.main,
          colorway,
          qty: 1,
        },
      ]
    })
  }, [])

  const remove = useCallback((slug: string, colorway: string) => {
    setItems((prev) => prev.filter((i) => !(i.slug === slug && i.colorway === colorway)))
  }, [])

  const setQty = useCallback((slug: string, colorway: string, qty: number) => {
    setItems((prev) =>
      qty < 1
        ? prev.filter((i) => !(i.slug === slug && i.colorway === colorway))
        : prev.map((i) => (i.slug === slug && i.colorway === colorway ? { ...i, qty } : i)),
    )
  }, [])

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((n, i) => n + i.qty, 0)
    const totalUsd = items.reduce((n, i) => n + i.qty * i.priceUsd, 0)
    return { items, count, totalUsd, add, remove, setQty }
  }, [items, add, remove, setQty])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
