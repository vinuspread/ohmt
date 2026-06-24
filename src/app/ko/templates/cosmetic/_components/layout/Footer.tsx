// src/app/ko/templates/OHMT010-cosmetic-KO/-components/layout/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  const shopLinks = ["전체 상품", "신상품", "베스트셀러", "스킨 퀴즈"];
  const aboutLinks = ["브랜드 스토리", "성분 안내", "지속가능성", "채용 정보"];
  const supportLinks = ["문의하기", "배송 안내", "교환/반품", "자주 묻는 질문"];

  return (
    <footer className="bg-black text-white py-12 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-20 mb-20">
          <div>
            <Link href="/ko/templates/OHMT010-cosmetic-KO" className="text-[1rem] md:text-[1.15rem] font-medium md:font-black tracking-[0.12em] uppercase mb-8 block">
              VINUSPREAD
            </Link>
            <p className="text-[0.85rem] opacity-70 leading-relaxed max-w-[320px]">
              우리는 의식 있는 뷰티를 믿습니다. 타협 없는 포뮬러, 확실한 결과. 모든 제품은 동물 실험을 하지 않으며 비건입니다.
            </p>
          </div>
          
          <div>
            <h4 className="text-[0.75rem] font-medium uppercase tracking-widest mb-8">쇼핑</h4>
            <nav className="flex flex-col gap-4">
              {shopLinks.map(item => (
                <Link key={item} href="#" className="text-[0.88rem] opacity-70 hover:opacity-100 transition-opacity">{item}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-[0.75rem] font-medium uppercase tracking-widest mb-8">어바웃</h4>
            <nav className="flex flex-col gap-4">
              {aboutLinks.map(item => (
                <Link key={item} href="#" className="text-[0.88rem] opacity-50 hover:opacity-100 transition-opacity">{item}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-[0.75rem] font-medium uppercase tracking-widest mb-8">고객지원</h4>
            <nav className="flex flex-col gap-4">
              {supportLinks.map(item => (
                <Link key={item} href="#" className="text-[0.88rem] opacity-50 hover:opacity-100 transition-opacity">{item}</Link>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 text-[0.8rem] opacity-40 text-center md:text-left">
          © 2026 Vinuspread Beauty. All Rights Reserved. Made in France.
        </div>
      </div>
    </footer>
  );
};
