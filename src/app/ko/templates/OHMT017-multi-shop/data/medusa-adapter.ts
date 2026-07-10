// data/medusa-adapter.ts
// Medusa API 데이터를 기존 컴포넌트 props 형식으로 변환

import { fetchProducts, fetchCategories, fetchProduct, MedusaProduct } from "@/lib/medusa-client";

// 기존 ProductCard props와 호환되는 형식
export interface ProductItem {
  id: string;
  name: string;
  price: number;       // 원 단위 (예: 29000)
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  category: string;   // 카테고리 handle
  categoryName?: string; // 카테고리 한글명
  tag?: string;
  image: string;
  description: string;
  longDescription: string;
  specs?: { label: string; value: string }[];
  reviewsList?: { id: string; reviewer: string; rating: number; date: string; text: string }[];
  variantId?: string; // Medusa variant ID (장바구니용)
}

export interface CategoryItem {
  id: string;
  name: string;
  handle: string;
  image: string;
}

// Medusa 상품 → 기존 컴포넌트 형식 변환
export function adaptProduct(p: MedusaProduct): ProductItem {
  const variant = p.variants?.[0];
  const price = variant?.prices?.find((pr) => pr.currency_code === "krw")?.amount ?? 0;
  const category = p.categories?.[0];

  // metadata에서 추가 정보 추출 (optional)
  const meta = (p as unknown as { metadata?: Record<string, unknown> }).metadata ?? {};

  return {
    id: p.handle ?? p.id,
    name: p.title,
    price,
    originalPrice: (meta.original_price as number) ?? undefined,
    rating: (meta.rating as number) ?? undefined,
    reviewCount: (meta.review_count as number) ?? undefined,
    category: category?.handle ?? "uncategorized",
    categoryName: category?.name ?? "",
    tag: (meta.tag as string) ?? undefined,
    image: p.thumbnail ?? "/templates/OHMT017-multi-shop/placeholder.jpg",
    description: p.description ?? "",
    longDescription: (meta.long_description as string) ?? p.description ?? "",
    variantId: variant?.id,
  };
}

// 상품 목록 조회 (카테고리 필터 포함)
export async function getProducts(categoryHandle?: string): Promise<ProductItem[]> {
  let categoryIds: string[] | undefined;

  if (categoryHandle) {
    const cats = await fetchCategories();
    const cat = cats.find((c) => c.handle === categoryHandle);
    if (cat) categoryIds = [cat.id];
  }

  const { products } = await fetchProducts({ category_id: categoryIds, limit: 50 });
  return products.map(adaptProduct);
}

// 카테고리 목록
export async function getCategories(): Promise<CategoryItem[]> {
  const cats = await fetchCategories();
  return cats.map((c) => ({
    id: c.handle,
    name: c.name,
    handle: c.handle,
    // 카테고리 이미지는 기존 이미지 경로 규칙 유지
    image: `/templates/OHMT017-multi-shop/category-${c.handle}.jpg`,
  }));
}

// 상품 상세
export async function getProduct(handleOrId: string): Promise<ProductItem | null> {
  const p = await fetchProduct(handleOrId);
  if (!p) return null;
  return adaptProduct(p);
}

// 신상품 (최근 등록 4개)
export async function getNewArrivals(): Promise<ProductItem[]> {
  const { products } = await fetchProducts({ limit: 4 });
  return products.map(adaptProduct);
}

// 베스트셀러 (메타데이터 tag: bestseller 기준, 없으면 전체에서 4개)
export async function getBestSellers(): Promise<ProductItem[]> {
  const { products } = await fetchProducts({ limit: 20 });
  const best = products.filter(
    (p) => (p as unknown as { metadata?: { tag?: string } }).metadata?.tag === "bestseller"
  );
  if (best.length >= 4) return best.slice(0, 4).map(adaptProduct);
  return products.slice(0, 4).map(adaptProduct);
}
