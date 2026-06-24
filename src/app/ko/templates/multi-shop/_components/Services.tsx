"use client";
import React from "react";
import { Truck, RefreshCw, ShieldCheck, Headphones } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "무료배송",
    description: "전 세계 $75 이상 주문 시 무료 배송.",
  },
  {
    icon: RefreshCw,
    title: "간편 반품",
    description: "마음에 들지 않으면 30일 이내에 무료 반품 가능.",
  },
  {
    icon: ShieldCheck,
    title: "안전한 결제",
    description: "모든 거래는 종단 간 암호화로 안전하게 보호됩니다.",
  },
  {
    icon: Headphones,
    title: "연중무휴 지원",
    description: "저희 팀이 항상 대기 중입니다. 언제든 연락주세요.",
  },
];

export const Services = () => {
  return (
    <section className="bg-[var(--color-bg-dark)] py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 md:gap-0 md:divide-x md:divide-white/10">
          {services.map((s) => (
            <div key={s.title} className="flex flex-col gap-3 md:gap-5 md:px-10 first:md:pl-0 last:md:pr-0">
              <s.icon strokeWidth={1.0} className="text-white/60 w-9 h-9 md:w-12 md:h-12" />
              <div>
                <h4 className="text-sm font-semibold text-white tracking-wide">{s.title}</h4>
                <p className="text-[11px] md:text-xs text-white/50 mt-1 md:mt-2 leading-relaxed max-w-full md:max-w-[200px]">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

