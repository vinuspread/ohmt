"use client";

import { MapPin, FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <img
        src="/templates/resort/hero.jpg"
        alt="OHMT 리조트"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 pt-[90px] md:pt-[100px]">


        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 text-white text-sm">
            <MapPin size={16} color="#FFC392" weight="fill" />
            <span>88 Tidal Walk, Byron Bay, Australia</span>
          </div>
          <p className="text-white text-sm text-right max-w-[260px] leading-relaxed hidden md:block">
            미니멀리즘 럭셔리가 깃든 해변의 은신처, OHMT
          </p>
        </div>

        <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16 pointer-events-none">
          <h1 className="font-semibold text-white leading-[0.85] tracking-[-0.04em] select-none"
              style={{ fontSize: "clamp(80px, 16vw, 280px)" }}>
            <span className="block">Slow</span>
            <span className="block">Luxuriance</span>
          </h1>
        </div>

        <div className="flex justify-between items-end gap-8 z-10">
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 max-w-[380px]">
            <p className="text-white text-sm leading-relaxed">
              현지 돌, 모래 처리 콘크리트, 자연 목재 마감재가 해안선의 질감을
              그대로 살려 건축과 자연을 하나로 이어줍니다.
            </p>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 max-w-[360px] hidden md:block">
            <p className="text-white text-sm leading-relaxed">
              모든 빌라는 땅의 자연스러운 곡선을 따라 저영향 공법으로 지어졌으며,
              해안 풍경 속에 부드럽게 스며듭니다.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 flex gap-3 z-10">
        {[FacebookLogo, InstagramLogo, XLogo].map((Icon, i) => (
          <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-all">
            <Icon size={16} weight="bold" />
          </a>
        ))}
      </div>
    </section>
  );
}
