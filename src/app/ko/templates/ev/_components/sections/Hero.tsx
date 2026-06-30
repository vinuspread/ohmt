"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(labelRef.current, { opacity: 0, y: 16, duration: 0.7 })
      .from(headingRef.current, { opacity: 0, y: 32, duration: 0.9 }, "-=0.3")
      .from(ctaRef.current, { opacity: 0, y: 20, duration: 0.7 }, "-=0.4");
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] bg-[var(--bg)] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/templates/ev/hero-static.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 via-[var(--bg)]/20 to-transparent" />

      <div className="absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 w-full h-full flex flex-col justify-end pb-16 z-10 pointer-events-none">
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-12 pointer-events-auto">
          <div className="max-w-[560px] w-full">
            <span ref={labelRef} className="font-inter font-medium text-[11px] tracking-[0.15em] text-[var(--accent)] uppercase block mb-4">
              NUBI — 도시를 위한 전기차
            </span>
            <h1 ref={headingRef} className="font-michroma text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-[-0.02em] text-[var(--text)] mb-8">
              작은 크기로,<br />도시를 장악하세요
            </h1>
            <div ref={ctaRef} className="flex items-center gap-4">
              <button className="inline-flex items-center gap-2.5 bg-[var(--accent)] text-[var(--text-on-light)] px-7 py-3.5 rounded-full text-[13px] font-inter font-medium tracking-[0.03em] hover:bg-[var(--accent-dark)] transition-colors duration-300">
                사전 예약하기 →
              </button>
              <button className="inline-flex items-center gap-2.5 border border-[var(--text)]/40 text-[var(--text)] px-7 py-3.5 rounded-full text-[13px] font-inter font-medium tracking-[0.03em] hover:border-[var(--text)] transition-colors duration-300">
                NUBI 살펴보기 →
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 cursor-pointer group flex-shrink-0">
            <div className="w-[160px] h-[90px] rounded-lg overflow-hidden border border-[var(--border)] relative transition-transform duration-300 group-hover:scale-105">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/templates/ev/video-thumb.jpg')" }}
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/95 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <span className="text-[12px] text-black ml-0.5">▶</span>
                </div>
              </div>
            </div>
            <div>
              <p className="font-inter text-[15px] font-semibold text-[var(--text)] leading-tight mb-1 group-hover:text-[var(--accent)] transition-colors duration-300">영상 보기</p>
              <p className="font-inter text-[14px] text-[var(--text-muted)]">01:48</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none z-10 hidden md:block">
        <div className="w-[1px] h-[80px] bg-gradient-to-b from-transparent via-[var(--text-muted)] to-transparent" />
      </div>
    </section>
  );
}
