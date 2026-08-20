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
          <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-900">AVELINE의 새 소식을 받아보세요</h4>
          <p className="text-sm font-normal text-neutral-500 leading-relaxed max-w-sm normal-case">
            새 컬렉션과 부티크 행사, 주얼리 관리에 관한 소식을 이메일로 전해드립니다.
          </p>
          <div className="flex border-b border-neutral-300 pb-3 max-w-md">
            <input
              type="email"
              placeholder="이메일 주소"
              className="bg-transparent border-none outline-none w-full text-xs text-neutral-800 placeholder-neutral-400 font-normal"
            />
            <Button variant="ghost" className="text-xs font-medium uppercase tracking-[0.1em]">
              구독하기
            </Button>
          </div>
        </div>

        {/* Column 1 - Client Services */}
        <div className="space-y-6">
          <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">고객지원</h4>
          <ul className="space-y-3 text-xs font-normal text-neutral-600">
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">문의하기</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">배송·반품 안내</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">주문 조회</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">방문 상담 예약</Link></li>
          </ul>
        </div>

        {/* Column 2 - Legal & Philosophy */}
        <div className="space-y-6">
          <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">이용 안내</h4>
          <ul className="space-y-3 text-xs font-normal text-neutral-600">
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">이용약관</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">개인정보처리방침</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">브랜드 이야기</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">책임 있는 원석 선택</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-[1440px] mx-auto mt-20 pt-8 border-t border-neutral-200/30 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium text-neutral-500 uppercase tracking-widest">
        <span>© 2026 AVELINE.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[var(--color-primary)] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}
