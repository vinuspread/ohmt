"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";

const posts = [
  { slug: "how-to-style-sneakers", title: "출근부터 주말까지, 스니커즈 활용법", date: "2026. 5. 20.", category: "스타일", img: "/templates/OHMT005-sneaker/hero-detail.jpg", excerpt: "슬랙스와 데님, 원피스까지 일상복에 스니커즈를 자연스럽게 맞춰 신는 방법을 소개합니다." },
  { slug: "sustainable-footwear", title: "지속 가능한 신발을 고르는 기준", date: "2026. 5. 14.", category: "지속 가능성", img: "/templates/OHMT005-sneaker/product-6.jpg", excerpt: "소재의 인증과 공급 경로, 재활용 부품과 생산 방식까지 구매 전에 확인할 기준을 정리했습니다." },
  { slug: "sneaker-care-guide", title: "스니커즈를 오래 신는 관리법", date: "2026. 5. 8.", category: "관리", img: "/templates/OHMT005-sneaker/cat-sneakers-new.jpg", excerpt: "소재별 세척 방법부터 건조와 보관까지, 신발의 형태를 오래 유지하는 방법을 알려드립니다." },
  { slug: "2026-trends", title: "2026 스니커즈 트렌드", date: "2026. 5. 1.", category: "트렌드", img: "/templates/OHMT005-sneaker/category-running-new.jpg", excerpt: "과한 장식을 덜어낸 실루엣과 차분한 색, 소재 정보를 투명하게 공개하는 흐름을 살펴봅니다." },
  { slug: "material-guide", title: "가죽·캔버스·메시, 소재별 차이", date: "2026. 4. 24.", category: "가이드", img: "/templates/OHMT005-sneaker/product-15.jpg", excerpt: "풀그레인 가죽과 캔버스, 재활용 메시의 착용감과 관리 방법을 비교해 봅니다." },
  { slug: "collab-2026", title: "OHMT × 아틀리에 노르데 협업 컬렉션", date: "2026. 4. 17.", category: "뉴스", img: "/templates/OHMT005-sneaker/product-10.jpg", excerpt: "두 브랜드가 소재와 제작 방식을 함께 검토해 완성한 소량 제작 컬렉션을 소개합니다." },
  { slug: "sizing-guide", title: "내 발에 맞는 사이즈 고르기", date: "2026. 4. 10.", category: "도움말", img: "/templates/OHMT005-sneaker/product-3.jpg", excerpt: "발길이뿐 아니라 발볼과 발등 높이, 앞코 공간까지 확인해 온라인 주문의 실패를 줄이는 방법을 안내합니다." },
  { slug: "boot-season", title: "가을에 신기 좋은 테라 부츠", date: "2026. 4. 3.", category: "스타일", img: "/templates/OHMT005-sneaker/cat-boots.jpg", excerpt: "새롭게 추가된 세 가지 색상과 데님, 치노 팬츠에 자연스럽게 맞춰 신는 방법을 소개합니다." },
];

const categories = ["전체", "스타일", "지속 가능성", "트렌드", "관리", "가이드", "뉴스", "도움말"];

function BlogPageContent() {
  const [activeCategory, setActiveCategory] = useState("전체");
  const filtered = activeCategory === "전체" ? posts : posts.filter(p => p.category === activeCategory);

  React.useEffect(() => {
    const resetBlog = () => setActiveCategory("전체");
    window.addEventListener("ohmt005:reset-blog", resetBlog);
    return () => window.removeEventListener("ohmt005:reset-blog", resetBlog);
  }, []);

  return (
    <TemplateWrapper theme={theme}>
      <div className="bg-white text-black font-sans">
        <Header />

        {/* Page header */}
        <section className="pt-16 md:pt-32 pb-12 border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-6">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-black/40 block mb-4">저널</span>
            <h1 className="text-[length:var(--text-h1)] font-black tracking-[-0.03em] uppercase leading-[var(--leading-heading)]">블로그</h1>
          </div>
        </section>

        {/* Category filter */}
        <div className="sticky top-14 md:top-20 z-20 bg-white border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="flex gap-0 overflow-x-auto scrollbar-none">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-4 text-[0.72rem] font-bold uppercase tracking-[0.1em] whitespace-nowrap border-b-2 transition-colors ${
                    activeCategory === cat ? "border-black text-black" : "border-transparent text-black/40 hover:text-black"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured post (first) */}
        {filtered.length > 0 && (
          <section className="py-16 border-b border-black/10">
            <div className="max-w-[1440px] mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="aspect-[4/3] overflow-hidden bg-[var(--color-bg-secondary)]">
                  <img loading="lazy" src={filtered[0].img} alt={filtered[0].title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-black/40 block mb-4">{filtered[0].category} · {filtered[0].date}</span>
                  <h2 className="text-[2rem] font-black uppercase tracking-[-0.03em] leading-[var(--leading-heading)] mb-6">{filtered[0].title}</h2>
                  <p className="text-[0.9rem] text-black/60 leading-relaxed mb-8">{filtered[0].excerpt}</p>
                  <Link href="/ko/templates/OHMT005-sneaker/blog" className="inline-flex items-center gap-3 bg-black text-white text-[0.82rem] font-bold uppercase tracking-[0.08em] px-8 py-4 hover:bg-black/80 transition-colors">
                    글 읽기 <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Post grid */}
        <section className="py-16">
          <div className="max-w-[1440px] mx-auto px-6">
            {filtered.length === 0 ? (
              <div className="flex min-h-64 items-center justify-center border border-black/10 px-6 text-center">
                <p className="text-sm font-bold text-black/45">해당 카테고리에 등록된 글이 없습니다.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-8">
                {filtered.slice(1).map((p) => (
                  <Link key={p.slug} href="/ko/templates/OHMT005-sneaker/blog" className="group block">
                    <div className="aspect-[4/3] overflow-hidden bg-[var(--color-bg-secondary)] mb-5">
                      <img loading="lazy" src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-black/40 block mb-2">{p.category} · {p.date}</span>
                    <h3 className="text-[1rem] font-black uppercase leading-[var(--leading-heading)] mb-3 group-hover:opacity-60 transition-opacity tracking-[-0.03em]">{p.title}</h3>
                    <p className="text-[0.82rem] text-black/60 leading-relaxed mb-4">{p.excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 text-[0.75rem] font-bold uppercase tracking-[0.08em] text-black border-b border-black/30 pb-0.5">
                      더 보기 <ArrowRight size={12} />
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </TemplateWrapper>
  );
}


export default function BlogPage() {
  return (
    <React.Suspense fallback={null}>
      <BlogPageContent />
    </React.Suspense>
  );
}
