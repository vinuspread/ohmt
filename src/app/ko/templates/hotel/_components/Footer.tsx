"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-bg)] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          <div>
            <h3 className="text-2xl font-[var(--font-heading)] font-bold mb-4">OHMT</h3>
            <p className="text-sm text-[var(--color-bg)]/60 leading-relaxed max-w-xs">
              고요한 럭셔리, 영원한 안식처. 숲과 바다가 만나는 곳, 모든 순간이 기억이 됩니다.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold text-[var(--color-accent)] uppercase tracking-[0.2em] mb-5">연락처</h4>
            <div className="flex flex-col gap-3 text-sm text-[var(--color-bg)]/70">
              <div className="flex items-center gap-3">
                <MapPin size={14} strokeWidth={1.2} className="text-[var(--color-accent)] flex-shrink-0" />
                <span>123 세레니티 베이, 코 사무이, 태국</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} strokeWidth={1.2} className="text-[var(--color-accent)] flex-shrink-0" />
                <span>+66 2 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} strokeWidth={1.2} className="text-[var(--color-accent)] flex-shrink-0" />
                <span>contact@ohmt.site</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold text-[var(--color-accent)] uppercase tracking-[0.2em] mb-5">링크</h4>
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-sm text-[var(--color-bg)]/70 hover:text-[var(--color-accent)] transition-colors">개인정보처리방침</Link>
              <Link href="#" className="text-sm text-[var(--color-bg)]/70 hover:text-[var(--color-accent)] transition-colors">이용약관</Link>
              <Link href="#" className="text-sm text-[var(--color-bg)]/70 hover:text-[var(--color-accent)] transition-colors">梨꾩슜 ?뺣낫</Link>
              <Link href="#" className="text-sm text-[var(--color-bg)]/70 hover:text-[var(--color-accent)] transition-colors">보도자료</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-bg)]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--color-bg)]/40">
          <span>&copy; 2026 OHMT. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Globe size={14} strokeWidth={1.2} className="hover:text-[var(--color-accent)] transition-colors cursor-pointer" />
            <span>OHMT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

