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
          <h2 className="font-michroma text-[clamp(32px,4vw,60px)] text-[var(--text)] leading-[1.0] tracking-[-0.03em] mb-4">
            당신의 도시가<br />기다리고 있습니다.
          </h2>
          <p className="font-inter text-[15px] text-[var(--text-muted)] mb-8 max-w-[380px] leading-relaxed">
            NUBI와 함께 가장 먼저 도심을 달리세요. 완전 환불 가능한 30만 원 보증금으로 예약할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`${base}/order`}>
              <button className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--text-on-light)] px-8 py-4 rounded-full font-inter font-medium text-[13px] tracking-[0.03em] hover:bg-[var(--accent-dark)] transition-colors">
                지금 예약하기 →
              </button>
            </a>
            <a href={`${base}/specs`}>
              <button className="inline-flex items-center gap-2 border border-[var(--border)] text-[var(--text)] px-8 py-4 rounded-full font-inter text-[13px] tracking-[0.03em] hover:border-[var(--text-muted)] transition-colors">
                전체 사양 보기
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
