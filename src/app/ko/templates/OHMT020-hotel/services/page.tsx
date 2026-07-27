"use client";

import React from "react";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { services } from "../data/data";
import { Button } from "../_components/ui/Button";
import { motion } from "framer-motion";
import { Waves, Sparkles, Utensils, Heart, ShieldAlert, Award } from "lucide-react";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const serviceIcons: Record<string, React.ReactNode> = {
  Swimming: <Waves className="w-8 h-8 text-[var(--color-accent)]" />,
  Spa: <Sparkles className="w-8 h-8 text-[var(--color-accent)]" />,
  Dining: <Utensils className="w-8 h-8 text-[var(--color-accent)]" />,
  Fitness: <Heart className="w-8 h-8 text-[var(--color-accent)]" />,
  Concierge: <Award className="w-8 h-8 text-[var(--color-accent)]" />,
  Transport: <ShieldAlert className="w-8 h-8 text-[var(--color-accent)]" />,
};

function ServicesPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] flex items-center bg-[var(--color-primary)] overflow-hidden">
          <div className="absolute inset-0">
            <img src="/templates/OHMT020-hotel/hero-main.jpg" alt="서비스와 부대시설" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-xs font-medium text-[var(--color-accent)] tracking-tight block mb-3">리조트 경험</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] font-bold text-[var(--color-bg)]">서비스와 부대시설</h1>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
              <span className="text-xs font-semibold text-[var(--color-accent)] tracking-tight block mb-3">웰니스와 레저</span>
              <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-primary)] mb-6">몸과 마음을 위한 시간</h2>
              <p className="text-base text-[var(--color-text-muted)] leading-relaxed break-keep [text-wrap:pretty]">
                현지 식재료를 활용한 다이닝과 스파 프로그램,<br className="hidden md:block" />
                요가와 섬 투어까지 머무는 동안 필요한 경험을 세심하게 준비합니다.</p>
            </motion.div>
          </div>
        </section>

        {/* Services Showcase Grid */}
        <section className="py-20 bg-[var(--color-bg-secondary)]/30 border-t border-b border-[var(--color-border)]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((srv, idx) => (
                <motion.div
                  key={srv.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.05, duration: 0.6 }}
                  className="bg-white border border-[var(--color-border)] p-8 md:p-10 flex flex-col gap-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 bg-[var(--color-bg-secondary)] rounded-full flex items-center justify-center border border-[var(--color-border)]">
                    {serviceIcons[srv.icon] || <Sparkles className="w-8 h-8 text-[var(--color-accent)]" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-[var(--font-heading)] font-bold text-[var(--color-primary)] mb-3">{srv.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed break-keep [text-wrap:pretty]">{srv.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Program Section */}
        <section className="py-20 md:py-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="w-full lg:w-1/2 overflow-hidden aspect-[16/10] border border-[var(--color-border)]">
                <img src="/templates/OHMT020-hotel/story-01.jpg" alt="럭스 헤이븐 스파" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <span className="text-xs font-semibold text-[var(--color-accent)] tracking-tight block">시그니처 프로그램</span>
                <h3 className="text-3xl md:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-primary)]">시그니처 스파 프로그램</h3>
                <p className="text-base text-[var(--color-text-muted)] leading-relaxed font-light break-keep [text-wrap:pretty] max-w-2xl">
                  섬에서 얻은 허브와 에센셜 오일, 미네랄 머드를 활용해 몸의 긴장을 풀고 편안한 휴식을 돕습니다.</p>
                <div className="flex flex-col gap-3 text-sm text-[var(--color-text-muted)]">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full" />
                    <span>싱잉볼 명상 · 오전 8시</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full" />
                    <span>허브 마사지 · 90분</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full" />
                    <span>바다 전망 요가 파빌리온 · 24시간 이용</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button variant="primary" size="md" className="text-xs tracking-tight">스파 프로그램 안내서 다운로드</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function ServicesPage() {
  return (
    <React.Suspense fallback={null}>
      <ServicesPageContent />
    </React.Suspense>
  );
}
