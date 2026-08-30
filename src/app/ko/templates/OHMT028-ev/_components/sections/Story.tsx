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
    <section ref={sectionRef} id="story" className="relative w-full bg-[var(--light-bg)] min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0 flex flex-col md:flex-row pointer-events-none z-0">
        <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-full overflow-hidden">
          <div
            ref={imageRef}
            className="absolute -top-[10%] left-0 w-full h-[120%] bg-cover bg-[center_bottom]"
            style={{ backgroundImage: "url('/templates/OHMT028-ev/story-hero.jpg')" }}
          />
        </div>
        <div className="w-full md:w-1/2 bg-[var(--light-bg)]" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 min-h-[80vh] grid grid-cols-1 md:grid-cols-2 pointer-events-none">
        <div className="w-full md:block hidden" />
        <div className="w-full flex flex-col justify-center py-20 md:py-32 px-0 md:pl-16 lg:pl-20 pointer-events-auto">
          <SplitHeading
            text="복잡한 도시의 모든 도로가 마침내 당신의 편이 됩니다."
            className="font-michroma text-[length:var(--text-h3)] text-[var(--text-on-light)] leading-[var(--leading-heading)] tracking-[-0.02em] mb-6"
          />
          <p className="font-inter text-sm text-[var(--text-muted-light)] leading-relaxed max-w-[480px] mb-8">
            퇴근길 가벼운 러닝부터 주말의 야간 드라이브까지.
            NUBI는 당신의 어떤 하루 속 동선에도 자연스럽게 녹아듭니다.
          </p>
          <a
            href="/ko/templates/OHMT028-ev/story"
            className="font-inter text-xs font-medium tracking-[0.06em] uppercase text-[var(--text-on-light)] hover:opacity-60 transition-opacity inline-flex items-center gap-2"
          >
            스토리 보기
          </a>
        </div>
      </div>
    </section>
  );
}
