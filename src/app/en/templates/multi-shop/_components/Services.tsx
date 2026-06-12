"use client";
import React from "react";
import { Truck, RefreshCw, ShieldCheck, Headphones } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary delivery on all orders over $75, worldwide.",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "Changed your mind? Return anything within 30 days, no questions asked.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "Every transaction is protected with end-to-end encryption.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our team is always available. Reach us anytime, any day.",
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
