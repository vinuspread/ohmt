"use client";
import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg-dark)] text-white border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-2">
            <Link href="/ko/templates/OHMT017-multi-shop" className="text-2xl font-bold tracking-tight text-white">
              Oh My Template
            </Link>
            <p className="text-sm text-white/50 mt-4 leading-relaxed max-w-[260px]">
              모던 미니멀리스트를 위한 큐레이티드 패션. 계절을 초월하는 섬세한 디자인.
            </p>
            <div className="flex gap-5 mt-8 text-sm">
              {["인스타그램", "트위터", "핀터레스트", "틱톡"].map((s) => (
                <Link key={s} href="#" className="text-white/30 hover:text-white transition-colors duration-200 text-xs uppercase tracking-[0.1em]">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-[11px] uppercase tracking-[0.2em] text-white/30 mb-5">쇼핑</h5>
            <ul className="space-y-3 text-sm text-white/60">
              {[
                { label: "신상품", href: "/ko/templates/OHMT017-multi-shop/shop" },
                { label: "베스트셀러", href: "/ko/templates/OHMT017-multi-shop/shop" },
                { label: "액세서리", href: "/ko/templates/OHMT017-multi-shop/shop/accessories" },
                { label: "신발", href: "/ko/templates/OHMT017-multi-shop/shop/footwear" },
                { label: "여성", href: "/ko/templates/OHMT017-multi-shop/shop/womens" },
                { label: "남성", href: "/ko/templates/OHMT017-multi-shop/shop/mens" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-white transition-colors duration-200">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] uppercase tracking-[0.2em] text-white/30 mb-5">회사</h5>
            <ul className="space-y-3 text-sm text-white/60">
              {[
                { label: "스토리", href: "/ko/templates/OHMT017-multi-shop/about" },
                { label: "매거진", href: "/ko/templates/OHMT017-multi-shop/blog" },
                { label: "문의하기", href: "/ko/templates/OHMT017-multi-shop/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-white transition-colors duration-200">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] uppercase tracking-[0.2em] text-white/30 mb-5">고객지원</h5>
            <ul className="space-y-3 text-sm text-white/60">
              {["자주 묻는 질문", "교환 및 반품", "배송", "사이즈 가이드"].map((l) => (
                <li key={l}>
                  <Link href="#" className="hover:text-white transition-colors duration-200">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-white/25">
          <p>&copy; 2026 Oh My Template.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white/50 transition-colors duration-200">개인정보처리방침</Link>
            <Link href="#" className="hover:text-white/50 transition-colors duration-200">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

