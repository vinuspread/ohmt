// src/lib/cart-context.tsx
"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { MedusaCart, createCart, fetchCart, addToCart, updateCartItem, deleteCartItem } from "./medusa-client";

const CART_ID_KEY = "ohmt_cart_id";
const REGION_ID = process.env.NEXT_PUBLIC_MEDUSA_REGION_ID ?? "";

interface CartContextValue {
  cart: MedusaCart | null;
  itemCount: number;
  isLoading: boolean;
  addItem: (variantId: string, quantity: number) => Promise<void>;
  updateItem: (itemId: string, quantity: number) => Promise<void>;
  removeItem: (itemId: string) => Promise<void>;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<MedusaCart | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getOrCreateCart = useCallback(async () => {
    const cartId = localStorage.getItem(CART_ID_KEY);
    if (cartId) {
      const existingCart = await fetchCart(cartId);
      if (existingCart) {
        setCart(existingCart);
        return existingCart;
      }
    }
    const newCart = await createCart(REGION_ID);
    localStorage.setItem(CART_ID_KEY, newCart.id);
    setCart(newCart);
    return newCart;
  }, []);

  useEffect(() => {
    getOrCreateCart();
  }, [getOrCreateCart]);

  const addItem = useCallback(async (variantId: string, quantity: number) => {
    setIsLoading(true);
    try {
      const currentCart = await getOrCreateCart();
      const updated = await addToCart(currentCart.id, variantId, quantity);
      setCart(updated);
    } finally {
      setIsLoading(false);
    }
  }, [getOrCreateCart]);

  const updateItem = useCallback(async (itemId: string, quantity: number) => {
    if (!cart) return;
    setIsLoading(true);
    try {
      const updated = await updateCartItem(cart.id, itemId, quantity);
      setCart(updated);
    } finally {
      setIsLoading(false);
    }
  }, [cart]);

  const removeItem = useCallback(async (itemId: string) => {
    if (!cart) return;
    setIsLoading(true);
    try {
      const updated = await deleteCartItem(cart.id, itemId);
      setCart(updated);
    } finally {
      setIsLoading(false);
    }
  }, [cart]);

  const clearCart = useCallback(() => {
    localStorage.removeItem(CART_ID_KEY);
    setCart(null);
  }, []);

  const itemCount = cart?.items?.reduce((sum, item) => sum + item.quantity, 0) ?? 0;

  return (
    <CartContext.Provider value={{ cart, itemCount, isLoading, addItem, updateItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
