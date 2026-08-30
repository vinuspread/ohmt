"use client";

import { motion, useReducedMotion } from "motion/react";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";
import { team, services } from "../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const specialtyTags = Array.from(new Set(team.flatMap((m) => m.specialtyIds))).map((id) => ({
  id,
  title: services.find((s) => s.id === id)?.title ?? id,
  memberId: team.find((m) => m.specialtyIds.includes(id))!.id,
}));

export default function TherapistsFull() {
  const reduce = useReducedMotion();
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[50dvh] overflow-hidden bg-[var(--color-secondary)]">
          <img src="/templates/OHMT026-spa/instagram-08.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] to-transparent" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 flex h-full min-h-[50dvh] flex-col justify-end pb-16 lg:pb-20">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE_OUT }} className="max-w-2xl">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Therapists</span>
              <h1 className="mt-4 font-[family-name:var(--font-heading)] text-6xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[var(--leading-heading)]">Meet Our Experts</h1>
              <p className="mt-4 text-[0.95rem] text-white/60 leading-relaxed max-w-lg">Every therapist at our clinic is licensed, experienced, and passionate about helping you reach your wellness goals.</p>
            </motion.div>
          </div>
        </section>
        <section className="py-10 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
          <div className="mx-auto max-w-[1440px] px-6 flex flex-wrap items-center justify-center gap-3">
            {specialtyTags.map((tag) => (
              <a key={tag.id} href={`#${tag.memberId}`} className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors duration-200 whitespace-nowrap">{tag.title}</a>
            ))}
          </div>
        </section>
        <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, i) => (
                <motion.div key={member.id} id={member.id} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT }} className="group rounded-2xl overflow-hidden bg-[var(--color-bg-secondary)] border border-[var(--color-border)] scroll-mt-28">
                  <div className="h-80 overflow-hidden"><img src={member.image} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" /></div>
                  <div className="p-6">
                    <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)]">{member.name}</h2>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">{member.role}</p>
                    <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed">{member.bio}</p>
                    <ul className="mt-3 space-y-1">
                      {member.credentials.map((c) => (<li key={c} className="text-xs text-[var(--color-text-muted)]">· {c}</li>))}
                    </ul>
                    <a href="/en/templates/OHMT026-spa/contact" className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--color-primary)] hover:underline">Book with {member.name.split(" ")[0]}</a>
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
