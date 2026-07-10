// src/lib/medusa-client.ts
import Medusa from "@medusajs/js-sdk";

export const medusaClient = new Medusa({
  baseUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL ?? "http://localhost:9000",
  publishableKey: process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY,
  debug: process.env.NODE_ENV === "development",
});

// Medusa Store API 타입 정의
export interface MedusaProduct {
  id: string;
  title: string;
  handle: string;
  description: string | null;
  thumbnail: string | null;
  categories: { id: string; name: string; handle: string }[];
  variants: MedusaVariant[];
  status: string;
}

export interface MedusaVariant {
  id: string;
  title: string;
  prices: MedusaPrice[];
  inventory_quantity: number;
  calculated_price?: {
    calculated_amount: number;
    original_amount: number;
    currency_code: string;
  };
}

export interface MedusaPrice {
  id: string;
  amount: number;
  currency_code: string;
}

export interface MedusaCategory {
  id: string;
  name: string;
  handle: string;
}

export interface MedusaCart {
  id: string;
  items: MedusaCartItem[];
  total: number;
  subtotal: number;
  currency_code: string;
  region_id: string;
}

export interface MedusaCartItem {
  id: string;
  title: string;
  thumbnail: string | null;
  quantity: number;
  unit_price: number;
  total: number;
  variant: MedusaVariant;
  product: Pick<MedusaProduct, "id" | "title" | "handle">;
}

// 가격 포맷 (KRW)
export function formatKRW(amount: number): string {
  return `${amount.toLocaleString("ko-KR")}원`;
}

// 상품 목록 조회
export async function fetchProducts(options?: {
  category_id?: string[];
  limit?: number;
  offset?: number;
}): Promise<{ products: MedusaProduct[]; count: number }> {
  const params: Record<string, unknown> = {
    limit: options?.limit ?? 20,
    offset: options?.offset ?? 0,
    fields: "id,title,handle,description,thumbnail,categories,variants.prices,status",
    status: "published",
  };
  if (options?.category_id?.length) {
    params.category_id = options.category_id;
  }
  const res = await medusaClient.store.product.list(params as Parameters<typeof medusaClient.store.product.list>[0]);
  return { products: (res as { products: MedusaProduct[] }).products, count: (res as { count: number }).count ?? 0 };
}

// 상품 상세 조회
export async function fetchProduct(idOrHandle: string): Promise<MedusaProduct | null> {
  try {
    // handle로 조회
    const res = await medusaClient.store.product.list({
      handle: idOrHandle,
      fields: "id,title,handle,description,thumbnail,categories,variants.prices,metadata",
      limit: 1,
    } as Parameters<typeof medusaClient.store.product.list>[0]);
    const products = (res as { products: MedusaProduct[] }).products;
    if (products.length > 0) return products[0];

    // id로 조회
    const res2 = await medusaClient.store.product.retrieve(idOrHandle, {
      fields: "id,title,handle,description,thumbnail,categories,variants.prices,metadata",
    } as Parameters<typeof medusaClient.store.product.retrieve>[1]);
    return (res2 as { product: MedusaProduct }).product;
  } catch {
    return null;
  }
}

// 카테고리 목록 조회
export async function fetchCategories(): Promise<MedusaCategory[]> {
  const res = await medusaClient.store.category.list({
    fields: "id,name,handle",
    is_active: true,
  } as Parameters<typeof medusaClient.store.category.list>[0]);
  return (res as { product_categories: MedusaCategory[] }).product_categories;
}

// 장바구니 생성
export async function createCart(regionId: string): Promise<MedusaCart> {
  const res = await medusaClient.store.cart.create({ region_id: regionId });
  return (res as { cart: MedusaCart }).cart;
}

// 장바구니 조회
export async function fetchCart(cartId: string): Promise<MedusaCart | null> {
  try {
    const res = await medusaClient.store.cart.retrieve(cartId);
    return (res as { cart: MedusaCart }).cart;
  } catch {
    return null;
  }
}

// 장바구니 아이템 추가
export async function addToCart(cartId: string, variantId: string, quantity: number): Promise<MedusaCart> {
  const res = await medusaClient.store.cart.createLineItem(cartId, {
    variant_id: variantId,
    quantity,
  });
  return (res as { cart: MedusaCart }).cart;
}

// 장바구니 아이템 수량 변경
export async function updateCartItem(cartId: string, itemId: string, quantity: number): Promise<MedusaCart> {
  const res = await medusaClient.store.cart.updateLineItem(cartId, itemId, { quantity });
  return (res as { cart: MedusaCart }).cart;
}

// 장바구니 아이템 삭제
export async function deleteCartItem(cartId: string, itemId: string): Promise<MedusaCart> {
  const res = await medusaClient.store.cart.deleteLineItem(cartId, itemId);
  return (res as { cart: MedusaCart }).cart;
}
