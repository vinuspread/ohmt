"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";

const posts = [
  { slug: "how-to-style-sneakers", title: "어떤 자리든 완벽한 스니커즈 스타일링", date: "2026. 5. 20.", category: "스타일", img: "/templates/OHMT005-sneaker/blog-1.jpg", excerpt: "회의부터 주말 브런치까지, 모든 상황에 어울리는 스니커즈 활용법을 소개합니다." },
  { slug: "sustainable-footwear", title: "지속 가능한 신발의 부상", date: "2026. 5. 14.", category: "지속가능성", img: "/templates/OHMT005-sneaker/blog-2.jpg", excerpt: "친환경 인증, 재활용 솔, 탄소 상쇄 물류 - 2026년에 진정한 지속 가능성이란 무엇일까요?" },
  { slug: "sneaker-care-guide", title: "스니커즈 케어 완전 정복", date: "2026. 5. 8.", category: "케어", img: "/templates/OHMT005-sneaker/blog-3.jpg", excerpt: "잘 관리한 신발은 몇 년 더 오래 갑니다. 세척, 보관, 보호까지 완벽 가이드." },
  { slug: "2026-trends", title: "2026년 스니커즈 트렌드", date: "2026. 5. 1.", category: "트렌드", img: "/templates/OHMT005-sneaker/blog-4.jpg", excerpt: "청키 솔은 이제 그만. 깔끔한 라인, 절제된 팔레트, 소재 투명성이 대세입니다." },
  { slug: "material-guide", title: "신발 소재 이해하기", date: "2026. 4. 24.", category: "가이드", img: "/templates/OHMT005-sneaker/product-1.jpg", excerpt: "풀그레인 가죽, 캔버스, 재활용 메쉬 - 각 소재의 특징과 라이프스타일에 맞는 선택을 알려드립니다." },
  { slug: "collab-2026", title: "비누스 x 아틀리에 노르데 컬래버레이션", date: "2026. 4. 17.", category: "뉴스", img: "/templates/OHMT005-sneaker/product-2.jpg", excerpt: "완벽한 장인정신과 지속 가능성에 대한 두 집착에서 탄생한 캡슐 컬렉션." },
  { slug: "sizing-guide", title: "완벽한 핏 찾는 방법", date: "2026. 4. 10.", category: "도움말", img: "/templates/OHMT005-sneaker/product-3.jpg", excerpt: "너비, 아치 높이, 토 박스 - 사이즈는 단순한 숫자가 아닙니다. 온라인 주문의 고민을 덜어드립니다." },
  { slug: "boot-season", title: "부츠 시즌 준비하기", date: "2026. 4. 3.", category: "스타일", img: "/templates/OHMT005-sneaker/product-6.jpg", excerpt: "테라 부트가 3가지 새로운 컬러웨이로 돌아왔습니다. 가을 로테이션에 활용하는 방법을 소개합니다." },
];

const categories = ["전체", "스타일", "지속가능성", "트렌드", "케어", "가이드", "뉴스", "도움말"];

function BlogPageContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory);

  return (
    <TemplateWrapper theme={theme}>
      <div className="bg-white text-black font-sans">
        <Header />

        {/* Page header */}
        <section className="pt-16 md:pt-32 pb-12 border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-6">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-black/40 block mb-4">저널</span>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-[-0.03em] uppercase leading-[1.5]">블로그</h1>
          </div>
        </section>

        {/* Category filter */}
        <div className="sticky top-16 z-30 bg-white border-b border-black/10">
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
                  <h2 className="text-[2rem] font-black uppercase tracking-[-0.03em] leading-tight mb-6">{filtered[0].title}</h2>
                  <p className="text-[0.9rem] text-black/60 leading-relaxed mb-8">{filtered[0].excerpt}</p>
                  <Link href="/ko/templates/OHMT010-sneaker-kr/blog" className="inline-flex items-center gap-3 bg-black text-white text-[0.82rem] font-bold uppercase tracking-[0.08em] px-8 py-4 hover:bg-black/80 transition-colors">
                    기사 읽기 <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Post grid */}
        <section className="py-16">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {filtered.slice(1).map((p) => (
                <Link key={p.slug} href="/ko/templates/OHMT010-sneaker-kr/blog" className="group block">
                  <div className="aspect-[4/3] overflow-hidden bg-[var(--color-bg-secondary)] mb-5">
                    <img loading="lazy" src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-black/40 block mb-2">{p.category} · {p.date}</span>
                  <h3 className="text-[1rem] font-black uppercase leading-snug mb-3 group-hover:opacity-60 transition-opacity tracking-[-0.03em]">{p.title}</h3>
                  <p className="text-[0.82rem] text-black/60 leading-relaxed mb-4">{p.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-[0.75rem] font-bold uppercase tracking-[0.08em] text-black border-b border-black/30 pb-0.5">
                    더보기 <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </TemplateWrapper>
  );
}


export default function BlogPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <BlogPageContent {...props} />
    </React.Suspense>
  );
}
