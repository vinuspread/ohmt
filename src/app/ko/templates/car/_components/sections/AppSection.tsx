// src/app/templates/OHMT009-car/-components/sections/AppSection.tsx
"use client";

import React from "react";

const features = [
  { t: "실시간 원격 모니터링", d: "배터리 잔량, 주행 가능 거리, 충전 상태를 한눈에 확인합니다." },
  { t: "차량 내부 온도 사전 조절", d: "탑승 전 차량 내부 온도를 최적의 상태로 맞춤 제어합니다." },
  { t: "무선 소프트웨어 업데이트 (OTA)", d: "주무시는 동안 차량이 스스로 진화하여 매일 새로운 성능을 선사합니다." },
];

export const AppSection = () => {
  return (
    <section className="bg-[var(--color-primary)] overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[600px]">
        {/* Left: image */}
        <div className="relative overflow-hidden min-h-[360px]">
          <img
            src="/templates/OHMT009-car/car-4.jpg"
            alt="VINUSPREAD Interior"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-primary)]" />
        </div>

        {/* Right: content */}
        <div className="flex flex-col justify-center px-6 md:pr-[max(60px,calc((100vw-1440px)/2+60px))] md:pl-16 py-14 md:py-20">
          <span className="block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-text-muted)] mb-5">
            VINUSPREAD 커넥티드
          </span>
          <h2 className="text-[clamp(2rem,3vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.2] mb-5 text-white break-keep whitespace-pre-line">
            {"완벽하게 조화되는\n듀얼 모터 드라이빙\n경험의 혁신."}
          </h2>
          <p className="text-[0.88rem] text-[var(--theme-text-muted)] leading-[1.8] font-normal mb-10 max-w-[380px] break-keep">
            실시간 배터리 충전 모니터링, 차량 온도 원격 제어, 문 잠금 해제 및 주행 가능 거리 확인까지 - 이 모든 혁신을 VINUSPREAD 앱 하나로 편리하게 누릴 수 있습니다.
          </p>

           <div className="flex flex-col gap-6 mb-10">
             {features.map((f) => (
               <div key={f.t} className="flex gap-4 items-start">
                 <div className="w-px self-stretch bg-[var(--theme-accent)] opacity-40 mt-1 shrink-0" />
                 <div>
                   <strong className="text-white text-[0.82rem] block mb-0.5">{f.t}</strong>
                   <p className="text-[0.78rem] text-[var(--theme-text-muted)] leading-relaxed break-keep">{f.d}</p>
                 </div>
               </div>
             ))}
           </div>

          <button className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white hover:translate-x-1.5 transition-all duration-500 w-fit">
            앱 다운로드 <span className="text-[1.2em]">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
