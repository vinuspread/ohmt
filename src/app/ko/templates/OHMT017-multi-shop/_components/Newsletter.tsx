"use client";
import React from "react";

export const Newsletter = () => {
  return (
    <section className="relative bg-[var(--color-bg-dark)] py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          새로운 소식을 먼저 받아보세요
        </h2>
        <p className="text-base text-white/50 mt-4 max-w-sm mx-auto leading-relaxed">
          새로운 컬렉션과 단독 혜택, 스타일 이야기를 이메일로 보내드립니다.
        </p>

        <div className="max-w-md mx-auto mt-10 flex">
          <input
            type="email"
            placeholder="이메일 주소"
            className="flex-1 bg-white/10 border border-white/20 px-5 py-3.5 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/50 transition-colors duration-200 min-w-0"
          />
          <button className="bg-white text-[var(--color-primary)] px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-white/90 transition-[transform,colors] duration-160 ease-out active:scale-[0.97] shrink-0">
            구독하기
          </button>
        </div>
        <p className="text-sm text-white/25 mt-4">
          필요할 때 언제든 구독을 취소할 수 있습니다.
        </p>
      </div>
    </section>
  );
};
