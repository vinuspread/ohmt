"use client";
import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg-dark)] text-white border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/ko/templates/OHMT018-burger" className="text-xl font-bold tracking-tight text-white">
              Oh My Template
            </Link>
            <p className="text-sm text-white/50 mt-4 leading-relaxed max-w-[220px]">
              프리미엄 버거. 신선한 재료. 타협 없이.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-4">메뉴</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/ko/templates/OHMT018-burger/menu" className="text-sm text-white/60 hover:text-white transition-colors">버거</Link>
              <Link href="/ko/templates/OHMT018-burger/menu" className="text-sm text-white/60 hover:text-white transition-colors">치킨</Link>
              <Link href="/ko/templates/OHMT018-burger/menu" className="text-sm text-white/60 hover:text-white transition-colors">사이드</Link>
              <Link href="/ko/templates/OHMT018-burger/menu" className="text-sm text-white/60 hover:text-white transition-colors">쉐이크</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-4">회사</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/ko/templates/OHMT018-burger/about" className="text-sm text-white/60 hover:text-white transition-colors">소개</Link>
              <Link href="/ko/templates/OHMT018-burger/locations" className="text-sm text-white/60 hover:text-white transition-colors">매장</Link>
              <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">채용</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-4">팔로우</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">인스타그램</Link>
              <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">트위터</Link>
              <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">틱톡</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>&copy; 2026 Oh My Template. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white/60 transition-colors">개인정보처리방침</Link>
            <Link href="#" className="hover:text-white/60 transition-colors">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
