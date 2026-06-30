"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitHeading } from "../ui/SplitHeading";

gsap.registerPlugin(ScrollTrigger);

export function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!imageRef.current) return;
    gsap.fromTo(imageRef.current,
      { yPercent: 8 },
      {
        yPercent: -8,
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
    <section ref={sectionRef} id="story" className="relative w-full bg-[var(--light-bg)] overflow-hidden">
      {/* 모바일: 이미지 위에 쌓기 */}
      <div className="md:hidden w-full h-[65vw] min-h-[260px] overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-[center_bottom]"
          style={{ backgroundImage: "url('/templates/OHMT028-ev/story-hero.jpg')" }}
        />
      </div>

      {/* 데스크탑: 절대 포지션 분할 배경 */}
      <div className="hidden md:flex absolute inset-0 flex-row pointer-events-none z-0">
        <div className="w-1/2 relative overflow-hidden">
          <div
            ref={imageRef}
            className="absolute -top-[10%] left-0 w-full h-[120%] bg-cover bg-[center_bottom]"
            style={{ backgroundImage: "url('/templates/OHMT028-ev/story-hero.jpg')" }}
          />
        </div>
        <div className="w-1/2 bg-[var(--light-bg)]" />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 md:min-h-[80vh] md:grid md:grid-cols-2 pointer-events-none">
        <div className="hidden md:block" />
        <div className="w-full flex flex-col justify-center py-10 md:py-32 md:pl-16 lg:pl-20 pointer-events-auto">
          <SplitHeading
            text="City is yours. Every single day."
            className="font-michroma text-[clamp(24px,3vw,40px)] text-[var(--text-on-light)] leading-[1.05] tracking-[-0.02em] mb-6"
          />
          <p className="font-inter text-[15px] text-[var(--text-muted-light)] leading-relaxed max-w-[480px] mb-8">
            NUBI was made for urban life — tight streets,
            quick errands, weekend adventures. Small on the outside,
            surprisingly spacious inside. Zero emissions, all smiles.
          </p>
          <a
            href="/en/templates/OHMT028-ev/story"
            className="font-inter text-[12px] font-medium tracking-[0.06em] uppercase text-[var(--text-on-light)] hover:opacity-60 transition-opacity inline-flex items-center gap-2"
          >
            Our story →
          </a>
        </div>
      </div>
    </section>
  );
}
