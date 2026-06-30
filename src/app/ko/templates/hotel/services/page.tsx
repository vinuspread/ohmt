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
            <img src="/templates/OHMT020-hotel/hero-main.jpg" alt="Services" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-[12px] font-medium text-[var(--color-accent)] tracking-tight block mb-3">리조트 경험</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] font-bold text-[var(--color-bg)]">서비스 & 부대시설</h1>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto">
              <span className="text-[12px] font-semibold text-[var(--color-accent)] tracking-tight block mb-3">웰니스 & 레저</span>
              <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-primary)] mb-6">당신의 웰빙을 위한 설계</h2>
              <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
                럭스 헤이븐에서는 영혼에 울림을 주는 서비스를 엄선하여 제안합니다. 미쉐린 셰프의 미식 여정부터 몸과 마음을 치유하는 스파 리추얼, 맞춤형 아일랜드 투어에 이르기까지 모든 과정이 온전한 평온을 위해 준비되었습니다.
              </p>
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
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{srv.desc}</p>
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
                <img src="/templates/OHMT020-hotel/story-01.jpg" alt="Aman Spa" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <span className="text-[12px] font-semibold text-[var(--color-accent)] tracking-tight block">시그니처 프로그램</span>
                <h3 className="text-3xl md:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-primary)]">아만 스파 리추얼</h3>
                <p className="text-base text-[var(--color-text-muted)] leading-relaxed font-light">
                  자연의 리듬과 온전한 에너지를 조율해 보세요. 아만 스파에서는 직접 손으로 채취한 섬의 오가닉 야생 꽃과 에센셜 오일, 그리고 미네랄이 풍부한 머드를 사용합니다.
                </p>
                <div className="flex flex-col gap-3 text-sm text-[var(--color-text-muted)]">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full" />
                    <span>싱잉볼 사운드 배스 & 명상 세션 - 오전 8:00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full" />
                    <span>전통 허벌 마사지 케어 - 90분</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full" />
                    <span>오션뷰 요가 파빌리온 - 24시간 개방</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button variant="primary" size="md" className="text-[12px] tracking-tight">스파 프로그램 안내 책자 다운로드</Button>
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
