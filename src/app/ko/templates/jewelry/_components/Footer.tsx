// src/app/templates/OHMT002-jewelry/-internal/components/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import Button from "./ui/Button";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-secondary)] text-neutral-800 py-12 md:py-24 px-6 md:px-12 border-t border-neutral-200/50 selection:bg-[var(--color-primary)] selection:text-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-24">
        
        {/* Newsletter / Brand Statement */}
        <div className="md:col-span-2 space-y-6">
          <h4 className="text-[13px] font-medium uppercase tracking-[0.2em] text-neutral-900">메종의 세계와 함께하기</h4>
          <p className="text-[14px] font-normal text-neutral-500 leading-relaxed max-w-sm normal-case">
            아틀리에 전시회의 독점 초대장, 신규 컬렉션 조기 프리뷰, 그리고 럭셔리 파인 주얼리 세계에 대한 특별한 스토리를 받아보세요.
          </p>
          <div className="flex border-b border-neutral-300 pb-3 max-w-md">
            <input
              type="email"
              placeholder="이메일 주소"
              className="bg-transparent border-none outline-none w-full text-[13px] text-neutral-800 placeholder-neutral-400 font-normal"
            />
            <Button variant="ghost" className="text-[13px] font-medium uppercase tracking-[0.1em]">
              구독하기
            </Button>
          </div>
        </div>

        {/* Column 1 - Client Services */}
        <div className="space-y-6">
          <h4 className="text-[13px] font-medium uppercase tracking-[0.2em] text-neutral-400">고객 지원</h4>
          <ul className="space-y-3 text-[13px] font-normal text-neutral-600">
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">문의하기</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">배송 및 반품 안내</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">주문 조회</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">부티크 프라이빗 예약</Link></li>
          </ul>
        </div>

        {/* Column 2 - Legal & Philosophy */}
        <div className="space-y-6">
          <h4 className="text-[13px] font-medium uppercase tracking-[0.2em] text-neutral-400">이용약관 및 개인정보</h4>
          <ul className="space-y-3 text-[13px] font-normal text-neutral-600">
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">이용 약관</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">개인정보 처리방침</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">아틀리에 헤리티지</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">윤리적 원석 조달</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-[1440px] mx-auto mt-20 pt-8 border-t border-neutral-200/30 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] font-medium text-neutral-400 uppercase tracking-widest">
        <span>© 2026 MAISON VINUSPREAD FINE JEWELRY. 모든 권리 보유.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[var(--color-primary)] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}
