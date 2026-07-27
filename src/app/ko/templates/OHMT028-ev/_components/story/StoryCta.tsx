"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const base = "/ko/templates/OHMT028-ev";

export function StoryCta() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current?.children ?? [],
      { opacity: 0, y: 24 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12,
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      }
    );
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-[var(--bg)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/templates/OHMT028-ev/story-pg-cta.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/55 to-transparent" />
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
        <div ref={ref}>
          <h2 className="font-michroma text-[length:var(--text-h1)] text-[var(--text)] leading-[var(--leading-heading)] tracking-[-0.03em] mb-4">
            NUBI와 함께할<br />도시를 만나보세요.</h2>
          <p className="font-inter text-sm text-[var(--text-muted)] mb-8 max-w-[380px] leading-relaxed">
            30만 원의 환불 가능한 예약금으로 NUBI 사전 예약을 신청할 수 있습니다.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`${base}/order`}>
              <button className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--text-on-light)] px-8 py-4 rounded-full font-inter font-medium text-xs tracking-[0.03em] hover:bg-[var(--accent-dark)] transition-colors">
                지금 예약하기 →
              </button>
            </a>
            <a href={`${base}/specs`}>
              <button className="inline-flex items-center gap-2 border border-[var(--border)] text-[var(--text)] px-8 py-4 rounded-full font-inter text-xs tracking-[0.03em] hover:border-[var(--text-muted)] transition-colors">
                전체 사양 보기
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
