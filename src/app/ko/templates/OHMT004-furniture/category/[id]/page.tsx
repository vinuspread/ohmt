"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import { products } from "../../data/data";
import theme from "../../theme.json";

const categoryFilters: Record<string, string[]> = {
  living: ["소파", "의자", "라운지", "리빙"],
  sofas: ["소파"],
  chairs: ["의자", "라운지"],
  bedroom: ["침실", "수납"],
  dining: ["다이닝"],
  workspace: ["홈 오피스"],
  "home-office": ["홈 오피스"],
  lighting: ["조명"],
  storage: ["수납"],
};

const categoryLabels: Record<string, string> = {
  living: "리빙룸",
  sofas: "소파",
  chairs: "의자",
  bedroom: "침실",
  dining: "다이닝",
  workspace: "워크스페이스",
  "home-office": "홈 오피스",
  lighting: "조명",
  storage: "수납",
};

function normalize(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}

export default function CategoryPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const filter = categoryFilters[id] ?? [id];
  const items = products.filter((product) =>
    filter.some((category) => normalize(product.category) === normalize(category))
  );
  const title = categoryLabels[id] ?? id.replace(/-/g, " ");

  return (
    <TemplateWrapper theme={theme}>
      <main className="min-h-screen bg-white text-[var(--color-text)] antialiased">
        <Navbar />
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-16 md:pb-24">
          <Link
            href="/ko/templates/OHMT004-furniture"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
          >
            <ArrowLeft size={16} strokeWidth={1.6} />
            컬렉션
          </Link>

          <div className="mt-8 mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-secondary)] mb-3">
                Furniture Archive
              </p>
              <h1 className="text-4xl md:text-7xl font-black capitalize leading-none">{title}</h1>
            </div>
            <p className="text-sm md:text-base font-medium text-[var(--color-secondary)]">
              {items.length}개 상품
            </p>
          </div>

          {items.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {items.map((product) => (
                <Link
                  key={product.id}
                  href={`/ko/templates/OHMT004-furniture/product/${product.id}`}
                  className="group block"
                >
                  <div className="aspect-[4/5] bg-[var(--color-light-bg)] overflow-hidden rounded-md">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-secondary)]">
                      {product.category}
                    </p>
                    <h2 className="mt-2 text-xl md:text-2xl font-black">{product.name}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-secondary)] line-clamp-2">
                      {product.desc}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4">
                      <span className="text-lg font-black">{product.price}</span>
                      <span className="inline-flex items-center gap-2 text-sm font-bold uppercase">
                        <ShoppingBag size={16} strokeWidth={1.6} />
                        보기
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="border border-black/10 rounded-md p-10 text-center">
              <h2 className="text-2xl font-black mb-3">상품이 없습니다</h2>
              <p className="text-[var(--color-secondary)] mb-6">
                해당 카테고리는 준비 중입니다. 전체 컬렉션으로 돌아가 주세요.
              </p>
              <Link
                href="/ko/templates/OHMT004-furniture"
                className="inline-flex h-11 items-center justify-center rounded-md bg-[var(--color-primary)] px-5 text-sm font-bold uppercase text-white"
              >
                쇼핑 계속하기
              </Link>
            </div>
          )}
        </section>
        <Footer />
      </main>
    </TemplateWrapper>
  );
}
