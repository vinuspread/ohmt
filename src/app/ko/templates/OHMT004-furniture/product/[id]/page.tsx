"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Star } from "lucide-react";
import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";
import { Button } from "../../_components/ui/Button";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import { products } from "../../data/data";
import theme from "../../theme.json";

const categorySlugs: Record<string, string> = {
  "의자": "chairs",
  "소파": "sofas",
  "다이닝": "dining",
  "라운지": "chairs",
  "조명": "lighting",
  "리빙": "living",
  "홈 오피스": "home-office",
  "침실": "bedroom",
  "수납": "storage",
};

const detailLabels: Record<string, string> = {
  material: "소재",
  dimensions: "크기",
  weight: "무게",
  assembly: "설치",
  maxLoad: "하중",
  warranty: "보증",
  care: "관리",
  origin: "원산지",
};

export default function ProductPage() {
  const params = useParams<{ id: string }>();
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    return (
      <TemplateWrapper theme={theme}>
        <main className="min-h-screen bg-white text-[var(--color-text)] antialiased">
          <Navbar />
          <section className="max-w-[900px] mx-auto px-6 pt-32 pb-24 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-5">상품을 찾을 수 없습니다</h1>
            <p className="text-[var(--color-secondary)] mb-8">
              선택한 상품은 현재 컬렉션에서 확인할 수 없습니다.
            </p>
            <Button href="/ko/templates/OHMT004-furniture" size="lg">
              컬렉션으로 돌아가기
            </Button>
          </section>
          <Footer />
        </main>
      </TemplateWrapper>
    );
  }

  const gallery = product.gallery?.length ? product.gallery : [product.image];
  const categorySlug = categorySlugs[product.category] ?? "living";

  return (
    <TemplateWrapper theme={theme}>
      <main className="min-h-screen bg-white text-[var(--color-text)] antialiased">
        <Navbar />
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-16 md:pb-24">
          <Link
            href={`/ko/templates/OHMT004-furniture/category/${categorySlug}`}
            className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
          >
            <ArrowLeft size={16} strokeWidth={1.6} />
            {product.category}
          </Link>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] gap-10 lg:gap-16">
            <div>
              <div className="aspect-[4/5] bg-[var(--color-light-bg)] rounded-md overflow-hidden">
                <img src={gallery[0]} alt={product.name} className="w-full h-full object-contain p-8 md:p-12" />
              </div>
              {gallery.length > 1 && (
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {gallery.slice(1).map((image) => (
                    <div key={image} className="aspect-[4/3] bg-[var(--color-light-bg)] rounded-md overflow-hidden">
                      <img src={image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:sticky lg:top-28 self-start">
              <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[var(--color-secondary)] mb-4">
                {product.tag} / {product.category}
              </p>
              <h1 className="text-4xl md:text-6xl font-black leading-none">{product.name}</h1>
              <p className="mt-6 text-2xl md:text-3xl font-black">{product.price}</p>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-[var(--color-secondary)]">
                {product.desc}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button href="/ko/templates/OHMT004-furniture/cart" size="lg" className="w-full sm:w-auto">
                  장바구니 담기
                </Button>
                <Button
                  href="/ko/templates/OHMT004-furniture"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  쇼핑 계속하기
                </Button>
              </div>

              <div className="mt-10 border-t border-black/10 pt-8">
                <h2 className="text-xl font-black mb-4">제품 정보</h2>
                <div className="grid grid-cols-1 gap-3">
                  {Object.entries(product.details).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-[100px_1fr] gap-4 text-sm border-b border-black/5 pb-3">
                      <span className="font-bold text-[var(--color-secondary)]">{detailLabels[key] ?? key}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 border-t border-black/10 pt-8">
                <h2 className="text-xl font-black mb-4">고객 리뷰</h2>
                <div className="space-y-5">
                  {product.reviewsList.slice(0, 3).map((review) => (
                    <article key={review.id} className="border-b border-black/5 pb-5">
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <div className="flex items-center gap-1 text-[var(--color-primary)]">
                          {Array.from({ length: review.rating }).map((_, index) => (
                            <Star key={index} size={14} fill="currentColor" strokeWidth={1.2} />
                          ))}
                        </div>
                        <span className="text-xs font-medium text-[var(--color-secondary)]">{review.date}</span>
                      </div>
                      <p className="font-bold text-sm mb-1">{review.reviewer}</p>
                      <p className="text-sm leading-relaxed text-[var(--color-secondary)]">{review.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </TemplateWrapper>
  );
}
