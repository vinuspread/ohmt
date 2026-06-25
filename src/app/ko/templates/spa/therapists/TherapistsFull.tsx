"use client";

import { motion, useReducedMotion } from "framer-motion";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";
import { team } from "../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const specializations = ["레이저 치료", "페이셜 리쥬버네이션", "케미컬 필", "마이크로니들링", "마사지 테라피", "아로마테라피", "바디 트리트먼트", "피부 상담"];

export default function TherapistsFull() {
  const reduce = useReducedMotion();
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="bg-[var(--color-secondary)] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE_OUT }} className="max-w-2xl">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">테라피스트</span>
              <h1 className="mt-4 font-[family-name:var(--font-heading)] text-6xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[1.05]">전문가를 만나보세요</h1>
              <p className="mt-4 text-[0.95rem] text-white/60 leading-relaxed max-w-lg">저희 클리닉의 모든 테라피스트는 면허를 소지하고 경험이 풍부하며 당신의 웰니스 목표 달성을 열정적으로 돕습니다.</p>
            </motion.div>
          </div>
        </section>
        <section className="overflow-hidden py-16 bg-[var(--color-bg-secondary)]">
          <div className="animate-marquee-left flex gap-4 w-max" style={{ animationDuration: "30s" }}>
            {[...specializations, ...specializations].map((spec, i) => (<span key={i} className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-text-muted)] whitespace-nowrap">{spec}</span>))}
          </div>
          <style>{`@keyframes marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } } .animate-marquee-left { animation: marquee-left linear infinite; } @media (prefers-reduced-motion: reduce) { .animate-marquee-left { animation: none; } }`}</style>
        </section>
        <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, i) => (
                <motion.div key={member.id} id={member.id} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT }} className="group rounded-2xl overflow-hidden bg-[var(--color-bg-secondary)] border border-[var(--color-border)] scroll-mt-28">
                  <div className="h-80 overflow-hidden"><img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                  <div className="p-6">
                    <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)]">{member.name}</h2>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">{member.role}</p>
                    <a href="/ko/templates/spa/contact" className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--color-primary)] hover:underline">{member.name.split(" ")[0]}에게 예약하기</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
