"use client";

import React, { useState } from "react";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { rooms } from "../data/data";
import { Button } from "../_components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function RoomsPageContent() {
  const [filterView, setFilterView] = useState("all");

  const filteredRooms = filterView === "all" 
    ? rooms 
    : rooms.filter(r => r.view.includes(viewKoMap[filterView]));

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-[var(--color-bg)]">
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] flex items-center bg-[var(--color-primary)] overflow-hidden">
          <div className="absolute inset-0">
            <img src="/templates/hotel/hero-main.jpg" alt="Rooms & Suites" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-[12px] font-medium text-[var(--color-accent)] tracking-tight block mb-3">객실 안내</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] font-bold text-[var(--color-bg)]">객실 & 스위트</h1>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm font-medium text-[var(--color-text-muted)] tracking-tight">전망별 필터:</span>
            <div className="flex gap-2 overflow-x-auto no-scrollbar max-w-full pb-1">
              {["all", "garden", "ocean", "pool"].map((view) => (
                <button
                  key={view}
                  onClick={() => setFilterView(view)}
                  className={`px-4 py-2 text-xs font-semibold tracking-tight transition-colors rounded-sm border ${filterView === view ? "bg-[var(--color-primary)] text-[var(--color-bg)] border-[var(--color-primary)]" : "bg-transparent text-[var(--color-text-muted)] border-[var(--color-border)] hover:border-[var(--color-primary)]"}`}
                >
                  {viewLabelKo[view]}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Rooms List Grid */}
        <section className="py-20 md:py-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 gap-16 lg:gap-24">
              {filteredRooms.map((room, idx) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col lg:flex-row gap-10 md:gap-16 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Room Image */}
                  <div className="w-full lg:w-1/2 overflow-hidden aspect-[16/10] border border-[var(--color-border)]">
                    <img src={room.image} alt={room.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
                  </div>

                  {/* Room Details */}
                  <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-primary)] mb-3">{room.name}</h2>
                      <p className="text-base text-[var(--color-text-muted)] leading-relaxed">{room.desc}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-[var(--color-border)]">
                      <div>
                        <span className="text-[11px] font-medium text-[var(--color-text-muted)] tracking-tight block">크기</span>
                        <span className="text-sm font-semibold text-[var(--color-text)]">{room.size}</span>
                      </div>
                      <div>
                        <span className="text-[11px] font-medium text-[var(--color-text-muted)] tracking-tight block">전망</span>
                        <span className="text-sm font-semibold text-[var(--color-text)]">{room.view}</span>
                      </div>
                      <div>
                        <span className="text-[11px] font-medium text-[var(--color-text-muted)] tracking-tight block">수용 인원</span>
                        <span className="text-sm font-semibold text-[var(--color-text)]">{room.capacity}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-medium text-[var(--color-text-muted)] tracking-tight block mb-3">객실 어메니티</span>
                      <div className="grid grid-cols-2 gap-2">
                        {room.amenities.map((a) => (
                          <div key={a} className="flex items-center gap-2 text-sm text-[var(--color-text)]">
                            <Check size={14} className="text-[var(--color-accent)] flex-shrink-0" />
                            <span>{a}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                      <div>
                        <span className="text-[11px] font-medium text-[var(--color-text-muted)] tracking-tight">1박 요금</span>
                        <p className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">{room.price}</p>
                      </div>
                      <div className="flex gap-4">
                        <Link href={`/ko/templates/hotel/rooms/${room.id}`}>
                          <Button variant="secondary" size="md" className="text-[12px] tracking-tight">상세 정보</Button>
                        </Link>
                        <Link href="/ko/templates/hotel/booking">
                          <Button variant="primary" size="md" className="text-[12px] tracking-tight">예약하기</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}

const viewKoMap: Record<string, string> = {
  garden: "가든",
  ocean: "오션",
  pool: "풀",
};

const viewLabelKo: Record<string, string> = {
  all: "전체 보기",
  garden: "가든 뷰",
  ocean: "오션 뷰",
  pool: "풀 & 가든",
};

export default function RoomsPage() {
  return (
    <React.Suspense fallback={null}>
      <RoomsPageContent />
    </React.Suspense>
  );
}
