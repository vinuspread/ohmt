"use client";

import { motion, useReducedMotion } from "framer-motion";
import { team } from "../../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function MeetOurTeam() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="mb-16 max-w-2xl">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">팀 소개</span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">당신을 돌볼 전문가들</h2>
          <p className="mt-5 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed max-w-md">모든 테라피스트는 면허를 소지하고 경험이 풍부하며 당신의 웰빙에 전념합니다.</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <motion.a key={member.id} href={`/ko/templates/OHMT026-spa/therapists#${member.id}`} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT }} className="group rounded-2xl overflow-hidden bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:-translate-y-1 transition-all duration-300">
              <div className="h-72 overflow-hidden"><img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)]">{member.name}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{member.role}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
