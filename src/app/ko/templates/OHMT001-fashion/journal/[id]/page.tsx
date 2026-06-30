"use client";
import React from "react";
import Link from "next/link";
import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import { ArrowLeft } from "lucide-react";
import theme from "../../theme.json";

function JournalDetailContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="min-h-screen bg-white antialiased selection:bg-black selection:text-white">
        <Navbar />
        <div className="max-w-[820px] mx-auto px-6 md:px-12 pt-[120px] md:pt-[160px] pb-24">
          <Link
            href="/ko/templates/OHMT001-fashion"
            className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-black transition-all mb-10 md:mb-16"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            홈으로
          </Link>

          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/30 mb-4">저널</p>
          <h1 className="text-[28px] sm:text-[40px] font-bold tracking-tighter uppercase leading-tight mb-6">
            스타일의 본질에 대하여
          </h1>
          <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-black/30 mb-12 pb-12 border-b border-black/5">
            2026년 6월
          </p>

          <div className="prose prose-sm max-w-none text-[15px] leading-[1.9] text-black/70 space-y-6">
            <p>
              패션은 단순히 옷을 입는 행위를 넘어, 자신을 표현하는 언어입니다. 매 시즌 새로운 트렌드가 등장하지만, 진정한 스타일은 유행을 초월한 곳에 있습니다.
            </p>
            <p>
              우리가 추구하는 것은 빠르게 소비되고 사라지는 패스트 패션이 아닙니다. 오래도록 곁에 두고 싶은, 시간이 흘러도 빛을 잃지 않는 옷. 그것이 OHMT가 생각하는 패션의 본질입니다.
            </p>
            <p>
              좋은 소재, 정직한 공정, 절제된 디자인. 이 세 가지가 만나는 지점에서 진짜 스타일이 탄생합니다.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function JournalDetailPage() {
  return (
    <React.Suspense fallback={null}>
      <JournalDetailContent />
    </React.Suspense>
  );
}
