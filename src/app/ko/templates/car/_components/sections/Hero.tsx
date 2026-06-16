// src/app/ko/templates/car/-components/sections/Hero.tsx
"use client";

import { useEffect, useRef, useState } from "react";

const HERO_VIDEO_SRC = "https://pub-10d6d534a06c495c8b45f39cfed47497.r2.dev/car-hero-bg.mp4";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleReady = () => {
      setVideoReady(true);
      video.play().catch(() => {});
    };

    if (video.readyState >= 4) {
      handleReady();
      return;
    }

    video.addEventListener("canplaythrough", handleReady);
    return () => video.removeEventListener("canplaythrough", handleReady);
  }, []);

  return (
    <section className="relative h-screen min-h-[680px] overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover object-[center_40%]"
        src="/templates/car/hero-main.jpg"
        alt="VINUS EV9"
      />
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover object-[center_40%] transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}
        muted
        loop
        playsInline
        preload="auto"
        poster="/templates/car/hero-main.jpg"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,10,10,0.75)_0%,rgba(10,10,10,0.2)_60%,transparent_100%)]"></div>
      
      <div className="absolute bottom-[42vh] left-0 right-0 max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
        <span className="block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-[1.2rem]">
          NEW - EV9 플래그십 전기 SUV
        </span>
        <h1 className="text-[clamp(3rem,5.5vw,6rem)] font-bold tracking-[-0.03em] leading-[1.2] mb-[1.8rem] max-w-[1000px] text-white">
          전기차의 새로운 시대,<br />그 <span className="text-[var(--theme-accent)]/80">위대한 시작</span>
        </h1>
        <p className="text-[1.05rem] text-[var(--theme-text-muted)] leading-[1.7] max-w-[400px] mb-[2.5rem] font-normal">
          배출가스 제로. 한계 없는 주행. VINUS EV9은 럭셔리 모빌리티의 기준을 새롭게 정의합니다.
        </p>
        
        <div className="flex gap-6 items-center">
          <button className="text-[0.68rem] font-bold uppercase tracking-[0.16em] px-8 py-[0.65rem] bg-[var(--theme-accent)] text-black hover:opacity-85 transition-all duration-500">
            EV9 자세히 보기
          </button>
          <button className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white hover:translate-x-1.5 transition-all duration-500">
            전체 라인업 <span className="text-[1.2em]">→</span>
          </button>
        </div>
        
        <p className="text-[0.7rem] text-[var(--theme-text-muted)] uppercase tracking-[0.2em] mt-8">
          시작가 <strong className="text-white text-base font-bold ml-1">$79,900</strong>
        </p>
      </div>
    </section>
  );
};
