"use client";
import React, { useState, use } from "react";
import Link from "next/link";
import { Star, ArrowLeft, ShoppingBag, Heart } from "lucide-react";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import theme from "../../theme.json";
import { Header } from "../../_components/layout/Header";
import { Footer } from "../../_components/layout/Footer";
import { products } from "../../_components/sections/ProductGrid";

const sizes = [6, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 13];

function ProductPageContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find(p => p.id === id) ?? products[0];
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedImg, setSelectedImg] = useState(0);
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const imgs = [product.img, ...related.slice(0, 2).map(p => p.img)];

  return (
    <TemplateWrapper theme={theme}>
      <div className="bg-white text-black selection:bg-black selection:text-white font-sans">
        <Header />
        <main className="antialiased pt-20">
          {/* Breadcrumb */}
          <div className="max-w-[1440px] mx-auto px-6 py-4 border-b border-black/10">
            <Link href="/ko/templates/sneaker/shop-all" className="inline-flex items-center gap-2 text-[0.78rem] text-black/50 hover:text-black transition-colors">
              <ArrowLeft size={14} /> 쇼핑으로 돌아가기
            </Link>
          </div>

          {/* Product */}
          <div className="max-w-[1440px] mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
            {/* Images */}
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                {imgs.map((img, i) => (
                  <button key={i} onClick={() => setSelectedImg(i)}
                    className={`w-16 h-16 border overflow-hidden transition-colors ${selectedImg === i ? "border-black" : "border-black/10"}`}>
                    <img loading="lazy" src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              <div className="flex-1 aspect-square bg-[var(--color-bg-secondary)] overflow-hidden">
                <img loading="lazy" src={imgs[selectedImg]} alt={product.name} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Info */}
            <div className="sticky top-24">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black/40 block mb-3">신발</span>
              <h1 className="text-[2rem] font-black tracking-[-0.03em] uppercase mb-3">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} size={13} className={i <= Math.round(product.rating) ? "fill-black text-black" : "fill-black/20 text-black/20"} />)}
                </div>
                <span className="text-[0.78rem] text-black/50">{product.rating} (리뷰 {product.reviews}개)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-8 pb-8 border-b border-black/10">
                <span className="text-[1.6rem] font-black">${product.price} 달러</span>
                {product.originalPrice && (
                  <span className="text-[1rem] text-black/30 line-through">${product.originalPrice}</span>
                )}
              </div>

              {/* Size */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[0.82rem] font-bold uppercase tracking-[0.08em]">사이즈 선택 (미국)</span>
                  <button className="text-[0.75rem] text-black/40 underline">사이즈 가이드</button>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {sizes.map(s => (
                    <button key={s} onClick={() => setSelectedSize(s)}
                      className={`py-2.5 text-[0.78rem] font-bold border transition-colors ${selectedSize === s ? "bg-black text-white border-black" : "bg-white text-black border-black/20 hover:border-black"}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mb-6">
                <button className="flex-1 bg-black text-white text-[0.82rem] font-bold uppercase tracking-[0.08em] py-4 flex items-center justify-center gap-2 hover:bg-black/80 transition-colors">
                  <ShoppingBag size={16} /> 장바구니 담기
                </button>
                <button className="w-14 h-14 border border-black/20 flex items-center justify-center hover:border-black transition-colors">
                  <Heart size={18} />
                </button>
              </div>

              <p className="text-[0.82rem] text-black/50 leading-relaxed">
                지속 가능한 소재로 제작된 프리미엄 품질의 신발. $200 이상 주문 시 무료 배송. 30일 반품 가능.
              </p>
            </div>
          </div>

          {/* Related Products */}
          <div className="border-t border-black/10 py-16">
            <div className="max-w-[1440px] mx-auto px-6">
              <h2 className="text-[1.3rem] font-black uppercase tracking-[-0.03em] mb-8">추천 상품</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {related.map(p => (
                  <Link key={p.id} href={`/ko/templates/sneaker/product/${p.id}`} className="group block border border-black/10 hover:border-black transition-colors">
                    <div className="aspect-square overflow-hidden bg-[var(--color-bg-secondary)]">
                      <img loading="lazy" src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-3">
                      <p className="text-[0.85rem] font-bold mb-1">{p.name}</p>
                      <p className="text-[0.9rem] font-black">${p.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </TemplateWrapper>
  );
}


export default function ProductPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <ProductPageContent {...props} />
    </React.Suspense>
  );
}
