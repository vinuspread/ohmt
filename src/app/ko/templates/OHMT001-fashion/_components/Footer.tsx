"use client";
import React from "react";
import Link from "next/link";
import { Mail, ArrowRight, Globe, Link as LinkIcon, ExternalLink } from "lucide-react";

export const Newsletter = () => {
    return (
        <section className="py-12 md:py-24 lg:py-32 bg-[var(--color-bg-secondary)] text-black">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
                <span className="text-xs uppercase tracking-tight font-bold opacity-40 mb-6 md:mb-10 block">소식 받기</span>
                <h2 className="text-3xl sm:text-[4vw] font-bold tracking-[-0.03em] uppercase mb-10 md:mb-16 leading-[var(--leading-heading)]">
                    새 컬렉션과 재입고, 저널 소식을 이메일로 받아보세요.
                </h2>
                <div className="max-w-2xl mx-auto relative group">
                    <input 
                        type="email" 
                        placeholder="이메일 주소" 
                        className="w-full bg-white border-0 py-4 sm:py-6 px-6 sm:px-10 text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] outline-none placeholder:text-black/20 focus:ring-1 focus:ring-black transition-shadow"
                    />
                     <button className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-xs sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] bg-black text-white px-6 py-3 hover:bg-black/80 transition-colors">
                        구독하기 <ArrowRight size={12} className="sm:w-3.5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export const Footer = () => {
  return (
    <footer className="bg-white pt-12 md:pt-24 pb-12 border-t border-black/5 selection:bg-black selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20 mb-12 md:mb-24">
        <div className="col-span-2 lg:col-span-1">
          <Link href="/ko/templates/OHMT001-fashion" className="text-xl md:text-2xl font-normal tracking-[0.08em] uppercase block" style={{ fontFamily: "var(--font-bodoni)" }}>
            SILO
          </Link>
          <p className="text-sm text-black/60 font-medium leading-relaxed max-w-xs mt-4 md:mt-6">
            오래 입을수록 자연스러운 옷.<br />
            좋은 소재와 편안한 재단을 기준으로 만듭니다.
          </p>
          <div className="flex gap-6 mt-8 md:mt-12">
            <Link href="#" className="hover:opacity-50 transition-opacity"><Globe size={18} /></Link>
            <Link href="#" className="hover:opacity-50 transition-opacity"><LinkIcon size={18} /></Link>
            <Link href="#" className="hover:opacity-50 transition-opacity"><ExternalLink size={18} /></Link>
          </div>
        </div>

        <div className="space-y-4 md:space-y-8">
            <h5 className="text-xs font-medium uppercase tracking-tight text-black/30">컬렉션</h5>
            <ul className="space-y-3 md:space-y-4 text-xs font-medium uppercase tracking-widest">
                <li><Link href="/ko/templates/OHMT001-fashion/collection" className="hover:text-black/40 transition-colors">26 봄/여름</Link></li>
                <li><Link href="/ko/templates/OHMT001-fashion/archive" className="hover:text-black/40 transition-colors">25 가을/겨울</Link></li>
                <li><Link href="/ko/templates/OHMT001-fashion/collection" className="hover:text-black/40 transition-colors">코어 컬렉션</Link></li>
                <li><Link href="/ko/templates/OHMT001-fashion/archive" className="hover:text-black/40 transition-colors">한정 컬렉션</Link></li>
            </ul>
        </div>

        <div className="space-y-4 md:space-y-8">
            <h5 className="text-xs font-medium uppercase tracking-tight text-black/30">고객지원</h5>
            <ul className="space-y-3 md:space-y-4 text-xs font-medium uppercase tracking-widest">
                <li><Link href="/ko/templates/OHMT001-fashion/about" className="hover:text-black/40 transition-colors">고객센터</Link></li>
            </ul>
        </div>

        <div className="space-y-4 md:space-y-8">
            <h5 className="text-xs font-medium uppercase tracking-tight text-black/30">이용 안내</h5>
            <ul className="space-y-3 md:space-y-4 text-xs font-medium uppercase tracking-widest">
                <li><Link href="#" className="hover:text-black/40 transition-colors">개인정보처리방침</Link></li>
                <li><Link href="#" className="hover:text-black/40 transition-colors">이용약관</Link></li>
                <li><Link href="#" className="hover:text-black/40 transition-colors">쿠키 설정</Link></li>
            </ul>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-8 md:pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-medium tracking-tight text-black/20 uppercase">
            © 2026 SILO.
          </p>
          <div className="flex gap-10 text-xs font-medium tracking-[0.2em] text-black/40 uppercase">
              <Link href="#" className="hover:text-black transition-colors">Seoul</Link>
              <Link href="#" className="hover:text-black transition-colors">Paris</Link>
              <Link href="#" className="hover:text-black transition-colors">Tokyo</Link>
          </div>
      </div>
    </footer>
  );
};
