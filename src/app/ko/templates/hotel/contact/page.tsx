"use client";

import React, { useState } from "react";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { Button } from "../_components/ui/Button";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] flex items-center bg-[var(--color-primary)] overflow-hidden">
          <div className="absolute inset-0">
            <img src="/templates/hotel/hero-main.jpg" alt="Contact" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-[12px] font-medium text-[var(--color-accent)] tracking-tight block mb-3">고객 지원</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] font-bold text-[var(--color-bg)]">오시는 길 & 문의</h1>
            </motion.div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              {/* Left Column: Contact details & Map */}
              <div className="lg:col-span-5 flex flex-col gap-10">
                <div>
                  <span className="text-[12px] font-semibold text-[var(--color-accent)] tracking-tight block mb-3">연락처 정보</span>
                  <h2 className="text-3xl font-[var(--font-heading)] font-bold text-[var(--color-primary)] mb-6">리조트 위치 안내</h2>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    프라이빗 만으로 부드럽게 떨어지는 한적한 언덕에 자리 잡은 럭스 헤이븐은 코사무이의 가장 깨끗한 북동쪽 해안에 위치해 있습니다.
                  </p>
                </div>

                <div className="flex flex-col gap-6 text-sm">
                  <div className="flex gap-4 items-start">
                    <MapPin className="text-[var(--color-accent)] flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-semibold text-[var(--color-primary)] mb-1">리조트 주소</h4>
                      <p className="text-[var(--color-text-muted)]">123 Serenity Bay, Koh Samui, Thailand</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Phone className="text-[var(--color-accent)] flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-semibold text-[var(--color-primary)] mb-1">예약 및 고객 문의</h4>
                      <p className="text-[var(--color-text-muted)]">+66 2 123 4567</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Mail className="text-[var(--color-accent)] flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-semibold text-[var(--color-primary)] mb-1">일반 문의 이메일</h4>
                      <p className="text-[var(--color-text-muted)]">vinus@vinus.co.kr</p>
                    </div>
                  </div>
                </div>

                {/* Styled Map Placeholder */}
                <div className="aspect-[16/10] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] relative flex flex-col items-center justify-center p-8 text-center text-xs text-[var(--color-text-muted)] overflow-hidden">
                  <div className="absolute inset-0 bg-cover opacity-20 pointer-events-none" style={{ backgroundImage: "url('/templates/hotel/story-01.jpg')" }} />
                  <MapPin size={32} className="text-[var(--color-accent)] mb-3 relative z-10" />
                  <span className="font-semibold text-[var(--color-primary)] relative z-10 mb-1">인터랙티브 지도 미리보기</span>
                  <span className="relative z-10 max-w-xs leading-relaxed">지도 모듈 로딩이 보류되었습니다. 리조트는 코사무이 국제공항(USM)에서 전용 셔틀 차량으로 약 15분 거리에 위치하고 있습니다.</span>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7 bg-white border border-[var(--color-border)] p-8 md:p-12">
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 flex flex-col items-center gap-6">
                    <div className="w-16 h-16 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center text-[var(--color-accent)]">
                      <MessageSquare size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-[var(--font-heading)] font-bold text-[var(--color-primary)] mb-2">메시지가 전송되었습니다</h2>
                      <p className="text-sm text-[var(--color-text-muted)] max-w-md mx-auto">
                        작성해주신 문의 내용이 고객 관계 센터 데스크로 안전하게 전달되었습니다. 신속하게 검토 후 답변드리겠습니다.
                      </p>
                    </div>
                    <Button variant="primary" size="md" onClick={() => setSubmitted(false)} className="text-[12px] tracking-tight mt-4">새로운 메시지 보내기</Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSend} className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-2xl font-[var(--font-heading)] font-bold text-[var(--color-primary)] mb-2">resort 문의 작성</h3>
                      <p className="text-sm text-[var(--color-text-muted)]">커스텀 패키지 조율 또는 일반적인 안내 지원이 필요하신 경우 아래 양식을 통해 전송해 주세요.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div>
                        <label className="text-[11px] font-semibold text-[var(--color-text-muted)] tracking-tight block mb-2">이름 *</label>
                        <input required type="text" placeholder="홍길동" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm" />
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-[var(--color-text-muted)] tracking-tight block mb-2">이메일 주소 *</label>
                        <input required type="email" placeholder="gildong@example.com" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm" />
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-[var(--color-text-muted)] tracking-tight block mb-2">문의 주제</label>
                        <input type="text" placeholder="스파 예약 문의, 단체 대관, 공항 셔틀 예약 등" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm" />
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-[var(--color-text-muted)] tracking-tight block mb-2">상세 문의 내용 *</label>
                        <textarea required rows={5} placeholder="문의하실 구체적인 내용들을 입력하세요..." className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none rounded-sm" />
                      </div>
                    </div>

                    <div>
                      <Button variant="primary" size="lg" className="w-full text-[12px] tracking-tight flex items-center justify-center gap-2">
                        <Send size={14} /> 메시지 보내기
                      </Button>
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

export default function ContactPage() {
  return (
    <React.Suspense fallback={null}>
      <ContactPageContent />
    </React.Suspense>
  );
}
