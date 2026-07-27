// src/app/ko/templates/OHMT027-architecture/_components/layout/Footer.tsx
"use client";
import React from "react";
import Link from "next/link";

export function Footer() {
  const baseRoute = "/ko/templates/OHMT027-architecture";

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // 뉴스레터 구독 처리
  };

  return (
    <footer className="bg-[#111111] text-white">
      {/* Upper Area */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 py-16 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Logo & Contact */}
          <div className="space-y-6">
            <Link href={baseRoute} className="flex items-center">
              <span className="font-sans font-bold text-lg tracking-[0.06em] text-white">
                OHMT
              </span>
            </Link>
            <div className="font-sans text-sm text-white/70 space-y-2 leading-relaxed">
              <p>서울특별시 성북구 성북로 123</p>
              <p>전화 02-1234-5678</p>
              <p>이메일 contact@ohmt.site</p>
            </div>
          </div>

          {/* Right: Newsletter */}
          <div className="space-y-4">
            <h3 className="font-sans text-xs tracking-[0.08em] font-medium text-white/90">
              소식 구독</h3>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="이메일 주소"
                className="bg-transparent border border-white/30 px-4 py-2.5 text-sm font-sans focus:outline-none focus:border-white flex-1"
              />
              <button
                type="submit"
                className="border border-white hover:bg-white hover:text-[#111111] px-6 py-2.5 text-xs font-sans tracking-[0.08em] transition-colors duration-300"
              >
                구독하기
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Middle Area: Sitemaps */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 py-12 border-b border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-medium text-[#888888] tracking-[0.15em] uppercase">
              스튜디오</h4>
            <div className="flex flex-col gap-2">
              <Link href={`${baseRoute}/about`} className="font-sans text-sm text-white/70 hover:text-[#B07D4F] transition-colors">
                소개
              </Link>
              <Link href={`${baseRoute}/services`} className="font-sans text-sm text-white/70 hover:text-[#B07D4F] transition-colors">
                서비스
              </Link>
              <Link href={`${baseRoute}/contact`} className="font-sans text-sm text-white/70 hover:text-[#B07D4F] transition-colors">
                문의
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-sans text-xs font-medium text-[#888888] tracking-[0.15em] uppercase">
              프로젝트
            </h4>
            <div className="flex flex-col gap-2">
              <Link href={`${baseRoute}/projects?filter=주거`} className="font-sans text-sm text-white/70 hover:text-[#B07D4F] transition-colors">
                주거
              </Link>
              <Link href={`${baseRoute}/projects?filter=상업`} className="font-sans text-sm text-white/70 hover:text-[#B07D4F] transition-colors">
                상업
              </Link>
              <Link href={`${baseRoute}/projects?filter=공공`} className="font-sans text-sm text-white/70 hover:text-[#B07D4F] transition-colors">
                공공
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-sans text-xs font-medium text-[#888888] tracking-[0.15em] uppercase">
              소셜</h4>
            <div className="flex flex-col gap-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-white/70 hover:text-[#B07D4F] transition-colors">
                Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-white/70 hover:text-[#B07D4F] transition-colors">
                LinkedIn
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-white/70 hover:text-[#B07D4F] transition-colors">
                Pinterest
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-sans text-xs font-medium text-[#888888] tracking-[0.15em] uppercase">
              자료
            </h4>
            <div className="flex flex-col gap-2">
              <Link href={`${baseRoute}`} className="font-sans text-sm text-white/70 hover:text-[#B07D4F] transition-colors">
                보도자료</Link>
              <Link href={`${baseRoute}`} className="font-sans text-sm text-white/70 hover:text-[#B07D4F] transition-colors">
                개인정보 처리방침
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Area */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-sans text-sm text-white/50">
          © 2026 OHMT.
        </p>
        <div className="flex gap-6 text-xs text-white/50 font-sans">
          <Link href={`${baseRoute}`} className="hover:text-white transition-colors">
            개인정보 처리방침
          </Link>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
