"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function SpecsCta() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { backgroundPosition: "50% 0%" },
      {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[60vh] flex items-center justify-center bg-[var(--bg)] bg-cover"
      style={{ backgroundImage: "url('/templates/OHMT028-ev/cta-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-[var(--bg)]/60" />
      <div className="relative z-10 text-center px-6">
        <h2 className="font-michroma text-[length:var(--text-h2)] text-[var(--text)] leading-[var(--leading-heading)] tracking-[-0.03em] mb-4">
          원하는 모델과 옵션을 고르고<br />NUBI의 생산 순서를<br />먼저 예약하세요.</h2>
        <p className="font-inter text-sm text-[var(--text-muted)] mb-8">
          2,890만 원부터 시작합니다.
          <br className="hidden md:block" />{" "}
          예약금 35만 원은 취소 시 전액 환불됩니다.</p>
        <button className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--text-on-light)] px-8 py-4 rounded-full text-sm font-inter font-medium tracking-[0.03em] hover:bg-[var(--accent-dark)] transition-colors duration-300 mb-6">
          NUBI 사전 예약 →</button>
        <div>
          <a href="#top" className="font-inter text-xs text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
            트림 비교 ↑
          </a>
        </div>
      </div>
    </section>
  );
}
