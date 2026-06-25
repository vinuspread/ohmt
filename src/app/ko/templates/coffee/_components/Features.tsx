"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

const easeOut = [0.23, 1, 0.32, 1] as const;

const features = [
  {
    num: "01",
    image: "/templates/coffee/feature-order.jpg",
    title: "온라인 주문",
    desc: "음료를 고르고, 시간을 설정하고, 기다림 없이 픽업하세요.",
    link: "/ko/templates/OHMT019-coffee-KO/menu",
    linkText: "메뉴 보기",
  },
  {
    num: "02",
    image: "/templates/coffee/feature-loyalty.jpg",
    title: "리워즈 가입",
    desc: "스탬프를 모아 10번째 커피를 무료로.",
    link: "#",
    linkText: "자세히 보기",
  },
  {
    num: "03",
    image: "/templates/coffee/feature-location.jpg",
    title: "카페 찾기",
    desc: "서울 다섯 곳에서 만나보세요.",
    link: "/ko/templates/OHMT019-coffee-KO/locations",
    linkText: "매장 안내",
  },
];

export const Features = () => {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.num}
              className="bg-[var(--color-bg-secondary)] p-8 rounded-none group cursor-pointer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: i * 0.1, ease: easeOut }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            >
              <p className="text-xs tracking-[0.3em] text-[var(--color-text-muted)] mb-4">
                {f.num}
              </p>
              <div className="aspect-square overflow-hidden mb-5 rounded-none">
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <h3 className="text-xl font-bold font-heading mb-2">{f.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-4">
                {f.desc}
              </p>
              <Link
                href={f.link}
                className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-primary)] hover:opacity-80 transition-opacity"
              >
                {f.linkText} &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
