"use client";
import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg-dark)] text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/ko/templates/OHMT019-coffee" className="text-xl font-heading font-semibold text-white">
              OHMT
            </Link>
                        <p className="text-sm text-white/50 mt-4 leading-relaxed max-w-[220px]">
              산지에서 직접 공들여 만든 최고의 콜드브루.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-4">Menu</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/ko/templates/OHMT019-coffee/menu" className="text-sm text-white/60 hover:text-white transition-colors">콜드브루</Link>
              <Link href="/ko/templates/OHMT019-coffee/menu" className="text-sm text-white/60 hover:text-white transition-colors">라떼</Link>
              <Link href="/ko/templates/OHMT019-coffee/menu" className="text-sm text-white/60 hover:text-white transition-colors">디저트</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-4">留ㅼ옣 ?덈궡</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/ko/templates/OHMT019-coffee/locations" className="text-sm text-white/60 hover:text-white transition-colors">강남점</Link>
              <Link href="/ko/templates/OHMT019-coffee/locations" className="text-sm text-white/60 hover:text-white transition-colors">홍대점</Link>
              <Link href="/ko/templates/OHMT019-coffee/locations" className="text-sm text-white/60 hover:text-white transition-colors">부산점</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-4">연락처</h4>
            <div className="flex flex-col gap-2.5 text-sm text-white/60">
              <a href="mailto:contact@ohmt.site" className="hover:text-white transition-colors">contact@ohmt.site</a>
              <p>02-1234-5678</p>
            </div>
            <div className="flex gap-4 mt-5">
              <Link href="#" className="text-xs text-white/40 hover:text-white transition-colors uppercase tracking-[0.1em]">인스타그램</Link>
              <Link href="#" className="text-xs text-white/40 hover:text-white transition-colors uppercase tracking-[0.1em]">트위터</Link>
              <Link href="#" className="text-xs text-white/40 hover:text-white transition-colors uppercase tracking-[0.1em]">페이스북</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>&copy; 2026 OHMT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

