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
        <h2 className="font-michroma text-[clamp(32px,4vw,56px)] text-[var(--text)] leading-[0.93] tracking-[-0.03em] mb-4">
          원하는 NUBI를<br />먼저 확보하세요.
        </h2>
        <p className="font-inter text-[14px] text-[var(--text-muted)] mb-8">
          2,890만 원부터 시작됩니다. 예약금 35만 원은 언제든 전액 환불됩니다.
        </p>
        <button className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--text-on-light)] px-8 py-4 rounded-full text-[14px] font-inter font-medium tracking-[0.03em] hover:bg-[var(--accent-dark)] transition-colors duration-300 mb-6">
          지금 사전 예약하기 →
        </button>
        <div>
          <a href="#top" className="font-inter text-[12px] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
            트림 비교 ↑
          </a>
        </div>
      </div>
    </section>
  );
}
