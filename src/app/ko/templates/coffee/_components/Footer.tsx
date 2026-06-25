"use client";
import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg-dark)] text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/ko/templates/coffee" className="text-xl font-heading font-semibold text-white">
              Oh My Template
            </Link>
            <p className="text-sm text-white/50 mt-4 leading-relaxed max-w-[220px]">
              서울에서 생각하고 엄선한 스페셜티 커피.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-4">Menu</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/ko/templates/coffee/menu" className="text-sm text-white/60 hover:text-white transition-colors">커피</Link>
              <Link href="/ko/templates/coffee/menu" className="text-sm text-white/60 hover:text-white transition-colors">논커피</Link>
              <Link href="/ko/templates/coffee/menu" className="text-sm text-white/60 hover:text-white transition-colors">푸드</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-4">매장 안내</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/ko/templates/coffee/locations" className="text-sm text-white/60 hover:text-white transition-colors">성수</Link>
              <Link href="/ko/templates/coffee/locations" className="text-sm text-white/60 hover:text-white transition-colors">이태원</Link>
              <Link href="/ko/templates/coffee/locations" className="text-sm text-white/60 hover:text-white transition-colors">강남</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-4">문의</h4>
            <div className="flex flex-col gap-2.5 text-sm text-white/60">
              <a href="mailto:contact@ohmytemplate.com" className="hover:text-white transition-colors">contact@ohmytemplate.com</a>
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
          <p>&copy; 2026 Oh My Template. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
