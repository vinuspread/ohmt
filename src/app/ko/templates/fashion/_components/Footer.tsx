"use client";
import React from "react";
import Link from "next/link";
import { Mail, ArrowRight, Globe, Link as LinkIcon, ExternalLink } from "lucide-react";

export const Newsletter = () => {
    return (
        <section className="py-12 md:py-24 lg:py-32 bg-[var(--color-bg-secondary)] text-black">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
                <span className="text-[13px] uppercase tracking-tight font-bold opacity-40 mb-6 md:mb-10 block">연결하기</span>
                <h2 className="text-[28px] sm:text-[4vw] font-bold tracking-[-0.03em] uppercase mb-10 md:mb-16 leading-none">
                    래보라토리 시리즈에 합류하세요
                </h2>
                <div className="max-w-2xl mx-auto relative group">
                    <input 
                        type="email" 
                        placeholder="이메일 주소" 
                        className="w-full bg-white border-0 py-4 sm:py-6 px-6 sm:px-10 text-[13px] font-bold tracking-[0.2em] sm:tracking-[0.3em] outline-none placeholder:text-black/20 focus:ring-1 focus:ring-black transition-shadow"
                    />
                     <button className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-[13px] sm:text-[13px] font-bold tracking-[0.15em] sm:tracking-[0.2em] bg-black text-white px-6 py-3 hover:bg-black/80 transition-colors">
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
          <Link href="/ko/templates/OHMT001-fashion-KO" className="text-xl md:text-2xl font-black tracking-tighter uppercase block">
            Oh My Template
          </Link>
          <p className="text-[14px] text-black/60 font-medium leading-relaxed max-w-xs mt-4 md:mt-6">
            침묵 속에서 울려 퍼지는 형태의 언어. 다음 세대를 위한 디지털 럭셔리를 재정의합니다.
          </p>
          <div className="flex gap-6 mt-8 md:mt-12">
            <Link href="#" className="hover:opacity-50 transition-opacity"><Globe size={18} /></Link>
            <Link href="#" className="hover:opacity-50 transition-opacity"><LinkIcon size={18} /></Link>
            <Link href="#" className="hover:opacity-50 transition-opacity"><ExternalLink size={18} /></Link>
          </div>
        </div>

        <div className="space-y-4 md:space-y-8">
            <h5 className="text-[13px] font-medium uppercase tracking-tight text-black/30">카탈로그</h5>
            <ul className="space-y-3 md:space-y-4 text-[12px] font-medium uppercase tracking-widest">
                <li><Link href="/ko/templates/OHMT001-fashion-KO/category/ss26" className="hover:text-black/40 transition-colors">26 봄/여름</Link></li>
                <li><Link href="/ko/templates/OHMT001-fashion-KO/category/aw25" className="hover:text-black/40 transition-colors">25 가을/겨울</Link></li>
                <li><Link href="/ko/templates/OHMT001-fashion-KO/category/core" className="hover:text-black/40 transition-colors">코어 시리즈</Link></li>
                <li><Link href="/ko/templates/OHMT001-fashion-KO/category/limited" className="hover:text-black/40 transition-colors">리미티드 드롭</Link></li>
            </ul>
        </div>

        <div className="space-y-4 md:space-y-8">
            <h5 className="text-[13px] font-medium uppercase tracking-tight text-black/30">고객지원</h5>
            <ul className="space-y-3 md:space-y-4 text-[12px] font-medium uppercase tracking-widest">
                <li><Link href="/ko/templates/OHMT001-fashion-KO/category/ss26" className="hover:text-black/40 transition-colors">고객 센터</Link></li>
            </ul>
        </div>

        <div className="space-y-4 md:space-y-8">
            <h5 className="text-[13px] font-medium uppercase tracking-tight text-black/30">법적고지</h5>
            <ul className="space-y-3 md:space-y-4 text-[12px] font-medium uppercase tracking-widest">
                <li><Link href="#" className="hover:text-black/40 transition-colors">개인정보 처리방침</Link></li>
                <li><Link href="#" className="hover:text-black/40 transition-colors">이용 약관</Link></li>
                <li><Link href="#" className="hover:text-black/40 transition-colors">쿠키 설정</Link></li>
            </ul>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-8 md:pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] font-medium tracking-tight text-black/20 uppercase">
            © 2026 Oh My Template Laboratory. 모든 권리 보유.
          </p>
          <div className="flex gap-10 text-[12px] font-medium tracking-[0.2em] text-black/40 uppercase">
              <Link href="#" className="hover:text-black transition-colors">Seoul</Link>
              <Link href="#" className="hover:text-black transition-colors">Paris</Link>
              <Link href="#" className="hover:text-black transition-colors">Tokyo</Link>
          </div>
      </div>
    </footer>
  );
};
