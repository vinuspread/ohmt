"use client";

import React, { useState } from "react";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { Button } from "../_components/ui/Button";
import { motion } from "framer-motion";
import { CalendarDays, Users, BedDouble, CheckCircle2 } from "lucide-react";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import TemplateSelect from '../_components/TemplateSelect'

const EASE = [0.23, 1, 0.32, 1] as const;

const rooms = [
  { id: "deluxe", name: "디럭스 룸", size: "42㎡", price: "1박 550,000원" },
  { id: "suite", name: "이그제큐티브 스위트", size: "78㎡", price: "1박 890,000원" },
  { id: "villa", name: "풀 빌라", size: "150㎡", price: "1박 1,600,000원" },
];

function BookingPageContent() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState("deluxe");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <Navbar />

        <section className="relative h-[40vh] md:h-[50vh] flex items-center bg-[var(--color-primary)] overflow-hidden">
          <div className="absolute inset-0">
            <img src="/templates/OHMT020-hotel/booking-bg.jpg" alt="객실 예약" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-20">
            <motion.div initial={{ opacity: 0, y: 24, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.75, ease: EASE }}>
              <span className="text-xs font-medium text-[var(--color-accent)] uppercase tracking-[0.25em] block mb-3">숙박 예약</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] font-bold text-[var(--color-bg)]">객실 예약</h1>
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-4 flex flex-col gap-8">
                <div>
                  <span className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-[0.2em] block mb-3">객실 선택</span>
                  <h2 className="text-2xl font-[var(--font-heading)] font-bold text-[var(--color-primary)] mb-6">원하는 객실을 선택해 주세요</h2>
                  <div className="flex flex-col gap-3">
                    {rooms.map((r) => (
                      <button
                        key={r.id}
                        onClick={() => setSelected(r.id)}
                        className={`w-full text-left p-4 border transition-all duration-300 ${selected === r.id ? "border-[var(--color-accent)] bg-[var(--color-bg-secondary)]" : "border-[var(--color-border)] hover:border-[var(--color-primary)]/40"}`}
                      >
                        <div className="flex items-start gap-3">
                          <BedDouble size={18} className={`mt-0.5 flex-shrink-0 transition-colors ${selected === r.id ? "text-[var(--color-accent)]" : "text-[var(--color-text-muted)]"}`} />
                          <div>
                            <p className="text-sm font-semibold text-[var(--color-primary)]">{r.name}</p>
                            <p className="text-sm text-[var(--color-text-muted)] mt-0.5">{r.size}</p>
                            <p className="text-sm font-medium text-[var(--color-accent)] mt-1">{r.price}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-5 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-sm text-[var(--color-text-muted)] leading-relaxed">
                  <p className="font-semibold text-[var(--color-primary)] text-xs uppercase tracking-wider mb-2">예약 안내</p>
                  <ul className="flex flex-col gap-1.5">
                    <li>도착 48시간 전까지 무료로 취소할 수 있습니다</li>
                    <li>체크인 오후 3시부터 · 체크아웃 정오까지</li>
                    <li>모든 객실 요금에 조식이 포함됩니다</li>
                    <li>공항 픽업은 요청 시 별도로 안내해 드립니다</li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-8 bg-white border border-[var(--color-border)] p-8 md:p-12">
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, ease: EASE }} className="text-center py-16 flex flex-col items-center gap-6">
                    <div className="w-16 h-16 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center text-[var(--color-accent)]">
                      <CheckCircle2 size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-[var(--font-heading)] font-bold text-[var(--color-primary)] mb-2">예약 요청이 접수되었습니다</h2>
                      <p className="text-sm text-[var(--color-text-muted)] max-w-lg mx-auto break-keep [text-wrap:pretty] leading-relaxed">
                        예약 요청이 접수되었습니다.<br className="hidden md:block" />
                        객실 가능 여부를 확인한 뒤 24시간 이내에 안내해 드리겠습니다.</p>
                    </div>
                    <Button variant="primary" size="md" onClick={() => setSubmitted(false)} className="text-xs tracking-[0.2em] uppercase rounded-sm mt-2">새 예약 요청</Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-2xl font-[var(--font-heading)] font-bold text-[var(--color-primary)] mb-2">투숙객 정보</h3>
                      <p className="text-sm text-[var(--color-text-muted)] break-keep [text-wrap:pretty]">투숙 정보를 입력하면 객실 가능 여부를 확인해 안내드립니다.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">이름 *</label>
                        <input required type="text" placeholder="지민" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">성 *</label>
                        <input required type="text" placeholder="김" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">이메일 *</label>
                        <input required type="email" placeholder="jimin.kim@example.com" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">연락처</label>
                        <input type="tel" placeholder="010-1234-5678" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">
                          <CalendarDays size={10} className="inline mr-1" />체크인 *
                        </label>
                        <input required type="date" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm text-[var(--color-text)]" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">
                          <CalendarDays size={10} className="inline mr-1" />체크아웃 *
                        </label>
                        <input required type="date" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm text-[var(--color-text)]" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">
                          <Users size={10} className="inline mr-1" />인원 *
                        </label>
                        <TemplateSelect required className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm appearance-none text-[var(--color-text)]">
                          <option value="1">성인 1명</option>
                          <option value="2">성인 2명</option>
                          <option value="3">성인 3명</option>
                          <option value="4">성인 4명</option>
                        </TemplateSelect>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">특별 요청 사항</label>
                      <textarea rows={4} placeholder="식이 제한, 기념일 준비, 이동 지원 등 필요한 사항을 적어 주세요." className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none rounded-sm" />
                    </div>

                    <div>
                      <Button variant="primary" size="lg" className="w-full text-xs tracking-[0.2em] uppercase rounded-sm">
                        예약 요청하기
                      </Button>
                      <p className="text-sm text-[var(--color-text-muted)] text-center mt-3 break-keep [text-wrap:pretty] leading-relaxed">
                        예약 요청 단계에서는 결제가 진행되지 않습니다.<br className="hidden md:block" />
                        객실 가능 여부를 확인한 뒤 연락드립니다.</p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function BookingPage() {
  return (
    <React.Suspense fallback={null}>
      <BookingPageContent />
    </React.Suspense>
  );
}
