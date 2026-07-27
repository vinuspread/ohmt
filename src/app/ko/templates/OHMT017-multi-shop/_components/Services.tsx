"use client";
import React from "react";
import { Truck, RefreshCw, ShieldCheck, Headphones } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "무료 배송",
    description: "10만 원 이상 구매 시 배송비가 무료입니다.",
  },
  {
    icon: RefreshCw,
    title: "간편 반품",
    description: "수령 후 30일 이내에 무료로 반품할 수 있습니다.",
  },
  {
    icon: ShieldCheck,
    title: "안전한 결제",
    description: "결제 정보는 암호화되어 안전하게 처리됩니다.",
  },
  {
    icon: Headphones,
    title: "고객 지원",
    description: "상품과 주문에 관한 문의를 도와드립니다.",
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
                <p className="text-sm md:text-sm text-white/50 mt-1 md:mt-2 leading-relaxed max-w-full md:max-w-[200px]">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
