"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TrainFront, Car, MapPin, MessageCircle, AtSign, Phone } from "lucide-react";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";
import ContactForm from "../_components/sections/ContactForm";
import { contactFaqs } from "../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const transitInfo = [
  { icon: TrainFront, label: "지하철", detail: "2호선 강남역 3번 출구에서 도보 5분" },
  { icon: Car, label: "주차", detail: "건물 지하 주차장 2시간 무료 (발렛 가능)" },
];

const otherChannels = [
  { icon: MessageCircle, label: "카카오톡 채널", detail: "@serenity-spa" },
  { icon: AtSign, label: "인스타그램 DM", detail: "@serenity.spa" },
  { icon: Phone, label: "전화 문의", detail: "+1 (555) 010-2030" },
];

export default function ContactFull() {
  const reduce = useReducedMotion();
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[50dvh] overflow-hidden bg-[var(--color-secondary)]">
          <img src="/templates/OHMT026-spa/contact-hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-top opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] to-transparent" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 flex h-full min-h-[50dvh] flex-col justify-end pb-16 lg:pb-20">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE_OUT }} className="max-w-2xl">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">상담 예약</span>
              <h1 className="mt-4 font-[family-name:var(--font-heading)] text-6xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[var(--leading-heading)]">피부 진단 상담 예약</h1>
              <p className="mt-4 text-[0.95rem] text-white/60 leading-relaxed max-w-lg">피부 고민과 원하는 변화를 남겨주세요. 24시간 이내에 상담 가능 시간을 안내해 드립니다.</p>
            </motion.div>
          </div>
        </section>
        <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }}><ContactForm /></motion.div>
              <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }} className="space-y-8">
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)] mb-2">방문하기</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">123 Wellness Avenue<br />New York, NY 10001</p>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)] mb-2">영업 시간</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">월–금: 9:00 AM – 8:00 PM<br />토: 10:00 AM – 6:00 PM<br />일: 휴무</p>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)] mb-2">연락처</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">+1 (555) 010-2030<br />hello@ohmytemplate.com</p>
                </div>
                <div className="rounded-2xl overflow-hidden h-64"><img src="/templates/OHMT026-spa/clinic-interior.jpg" alt="클리닉 내부" className="w-full h-full object-cover" /></div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[var(--color-bg-secondary)]">
          <div className="mx-auto max-w-5xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="mb-12">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">위치 안내</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">찾아오시는 길</h2>
            </motion.div>
            <div className="grid gap-8 sm:grid-cols-2">
              <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: EASE_OUT }} className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" strokeWidth={1.75} />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-[var(--color-text)]">주소</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">123 Wellness Avenue, New York, NY 10001</p>
                </div>
              </motion.div>
              {transitInfo.map((item, i) => (
                <motion.div key={item.label} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: (i + 1) * 0.08, ease: EASE_OUT }} className="flex items-start gap-4">
                  <item.icon className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" strokeWidth={1.75} />
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-[var(--color-text)]">{item.label}</h3>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-3xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="mb-12">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">방문 전 안내</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">예약 전 자주 묻는 질문</h2>
            </motion.div>
            <div className="space-y-8">
              {contactFaqs.map((faq, i) => (
                <motion.div key={faq.question} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_OUT }} className="flex gap-4">
                  <span className="font-[family-name:var(--font-heading)] text-sm text-[var(--color-text-muted)] w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-[var(--color-text)]">{faq.question}</h3>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
          <div className="mx-auto max-w-5xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center">
              {otherChannels.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-[var(--color-primary)]" strokeWidth={1.75} />
                  <div className="text-left">
                    <p className="text-sm font-medium text-[var(--color-text)]">{item.label}</p>
                    <p className="text-xs text-[var(--color-text-muted)]">{item.detail}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
