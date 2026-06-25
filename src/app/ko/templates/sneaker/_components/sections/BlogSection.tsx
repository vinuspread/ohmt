"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const slugs = ["how-to-style-sneakers", "sustainable-footwear", "sneaker-care-guide", "2026-trends"];
const imgs = ["/templates/OHMT005-sneaker/blog-1.jpg", "/templates/OHMT005-sneaker/blog-2.jpg", "/templates/OHMT005-sneaker/blog-3.jpg", "/templates/OHMT005-sneaker/blog-4.jpg"];

const posts = [
  { title: "어떤 자리든 완벽한 스니커즈 스타일링", category: "스타일", date: "2026년 5월 20일" },
  { title: "지속 가능한 신발의 부상", category: "지속가능성", date: "2026년 5월 14일" },
  { title: "스니커즈 관리 완벽 가이드", category: "케어", date: "2026년 5월 8일" },
  { title: "2026년 스니커즈 트렌드", category: "트렌드", date: "2026년 5월 1일" },
];

export const BlogSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-[1.6rem] font-black tracking-[-0.03em] uppercase">블로그</h2>
          <Link href={`/ko/templates/OHMT005-sneaker/blog`} className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-black/50 hover:text-black transition-colors border-b border-black/20 pb-0.5">
            전체 포스트
          </Link>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {posts.map((p, i) => (
            <Link key={slugs[i]} href={`/ko/templates/OHMT005-sneaker/blog`} className="group block">
              <div className="aspect-[4/3] overflow-hidden bg-[var(--color-bg-secondary)] mb-4">
                <img loading="lazy" src={imgs[i]} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-black/40 block mb-2">{p.category} · {p.date}</span>
              <h3 className="text-[0.9rem] font-bold text-black leading-snug mb-3 group-hover:opacity-60 transition-opacity tracking-[-0.03em]">{p.title}</h3>
              <span className="inline-flex items-center gap-1.5 text-[0.75rem] font-bold uppercase tracking-[0.08em] text-black border-b border-black/30 pb-0.5">
                더 읽기 <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
