import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Logo } from "@/components/Logo";
import { SiteHeader } from "../_components/SiteHeader";

export const metadata: Metadata = {
  title: "상담 신청 완료 | OHMT",
  robots: { index: false, follow: false },
};

export default function ContactCompletePage() {
  return (
    <main className="min-h-screen bg-[#FCFCFD] text-zinc-900 font-sans antialiased dark:bg-zinc-950 dark:text-zinc-100 pt-[64px]">
      <SiteHeader />

      {/* 전환 추적: 이 페이지 도달을 Google Ads 전환으로 잡을 경우, 여기에 gtag 전환 이벤트 스니펫을 추가 */}

      <section className="px-5 sm:px-6 md:px-12 lg:px-20 py-24 max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-6 text-center min-h-[50vh]">
        <CheckCircle size={40} className="text-[#F1B100]" strokeWidth={1.5} />
        <div className="space-y-2">
          <h1 className="text-zinc-900 text-xl font-bold dark:text-zinc-100">상담 신청이 접수되었습니다</h1>
          <p className="text-sm text-zinc-400 font-normal dark:text-zinc-500">문의를 검토 후 24시간 이내에 연락드립니다.</p>
        </div>
        <Link href="/ko" className="mt-4 text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-zinc-900 transition-colors dark:text-zinc-500 dark:hover:text-zinc-100">
          템플릿으로 돌아가기
        </Link>
      </section>

      <footer className="border-t border-zinc-200/60 bg-[#FCFCFD] px-5 py-12 sm:px-6 sm:py-14 md:px-12 lg:px-20 lg:py-16 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col items-start justify-between gap-9 md:flex-row md:gap-12">
            <div>
              <Link href="/ko" className="flex h-6 w-fit items-center" aria-label="OH! MY TEMPLATES 홈">
                <Logo className="block h-6 w-auto" />
              </Link>
              <p className="mt-5 text-sm font-normal leading-[1.7] text-zinc-600 dark:text-zinc-400">
                템플릿을 기반으로 브랜드에 맞는 웹사이트를 제작합니다.
              </p>
            </div>

            <nav aria-label="푸터 메뉴" className="flex flex-row flex-wrap items-center gap-3 text-sm font-bold text-zinc-600 dark:text-zinc-400">
              <Link href="/ko" className="text-[#F1B100] transition-colors hover:text-[#d99e00]">템플릿 보기</Link>
              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-600">|</span>
              <Link href="/ko/privacy-policy" className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-100">개인정보처리방침</Link>
              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-600">|</span>
              <Link href="/en/contact" className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-100">English</Link>
            </nav>
          </div>

          <div className="mt-10 border-t border-zinc-200/80 pt-8 text-[0.75rem] font-normal leading-[1.8] text-zinc-600 sm:text-[0.8125rem] dark:border-zinc-800 dark:text-zinc-400">
            <div className="hidden space-y-0.5 md:block">
              <p>㈜바이너스프레드 <span aria-hidden="true">|</span> 대표 한성영 <span aria-hidden="true">|</span> 사업자등록번호 305-86-09778</p>
              <p>서울특별시 강서구 공항대로 227, 12층 1202호 (마곡동, 마곡센트럴타워1차)</p>
              <p>
                대표전화 <a href="tel:02-3661-1907" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">02-3661-1907</a>
                <span aria-hidden="true"> | </span>
                사이트 <a href="https://www.vinus.co.kr" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">https://www.vinus.co.kr</a>
                <span aria-hidden="true"> | </span>
                이메일 <a href="mailto:vinus@vinus.co.kr" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">vinus@vinus.co.kr</a>
              </p>
            </div>

            <div className="space-y-5 md:hidden">
              <div>
                <p>㈜바이너스프레드 · 대표 한성영</p>
                <p>사업자등록번호 305-86-09778</p>
              </div>
              <address className="not-italic">
                서울특별시 강서구 공항대로 227,<br />
                12층 1202호 (마곡동, 마곡센트럴타워1차)
              </address>
              <div className="flex flex-col items-start">
                <a href="tel:02-3661-1907" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">02-3661-1907</a>
                <a href="https://www.vinus.co.kr" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">https://www.vinus.co.kr</a>
                <a href="mailto:vinus@vinus.co.kr" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">vinus@vinus.co.kr</a>
              </div>
            </div>
          </div>

          <p className="mt-6 text-[0.6875rem] font-normal leading-relaxed text-zinc-500 dark:text-zinc-500">
            &copy; 2026 Oh My Template by Vinus Spread. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
