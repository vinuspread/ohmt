"use client";

import React, { useState } from "react";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { Button } from "../_components/ui/Button";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageSquare, Send } from "lucide-react";
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
            <img src="/templates/OHMT020-hotel/hero-main.jpg" alt="리조트 문의" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-xs font-medium text-[var(--color-accent)] tracking-tight block mb-3">문의 안내</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] font-bold text-[var(--color-bg)]">오시는 길과 문의</h1>
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
                  <span className="text-xs font-semibold text-[var(--color-accent)] tracking-tight block mb-3">연락처</span>
                  <h2 className="text-3xl font-[var(--font-heading)] font-bold text-[var(--color-primary)] mb-6">리조트 위치</h2>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed break-keep [text-wrap:pretty]">
                    럭스 헤이븐은 코사무이 북동쪽 해안의 조용한 언덕과 전용 해변 사이에 자리하고 있습니다.</p>
                </div>

                <div className="flex flex-col gap-6 text-sm">
                  <div className="flex gap-4 items-start">
                    <MapPin className="text-[var(--color-accent)] flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-semibold text-[var(--color-primary)] mb-1">리조트 주소</h4>
                      <p className="text-[var(--color-text-muted)]">태국 코사무이 세레니티 베이 123</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Phone className="text-[var(--color-accent)] flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-semibold text-[var(--color-primary)] mb-1">예약 문의</h4>
                      <p className="text-[var(--color-text-muted)]">+66 2 123 4567</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Mail className="text-[var(--color-accent)] flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-semibold text-[var(--color-primary)] mb-1">이메일 문의</h4>
                      <p className="text-[var(--color-text-muted)]">contact@ohmt.site</p>
                    </div>
                  </div>
                </div>

                <div className="border border-[var(--color-border)] bg-white overflow-hidden">
                  <iframe
                    title="럭스 헤이븐 코사무이 위치 지도"
                    src="https://www.google.com/maps?q=Ko%20Samui%2C%20Surat%20Thani%2C%20Thailand&z=12&output=embed"
                    className="aspect-[16/10] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <div className="flex flex-col gap-3 border-t border-[var(--color-border)] p-5">
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed break-keep [text-wrap:pretty]">
                      코사무이 국제공항에서 차량으로 약 15분 거리입니다.
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Ko+Samui%2C+Surat+Thani%2C+Thailand"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--color-primary)] underline decoration-[var(--color-accent)] underline-offset-4"
                    >
                      <MapPin size={15} aria-hidden="true" />
                      Google 지도에서 길찾기
                    </a>
                  </div>
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
                      <p className="text-sm text-[var(--color-text-muted)] max-w-lg mx-auto break-keep [text-wrap:pretty] leading-relaxed">
                        문의가 정상적으로 접수되었습니다.<br className="hidden md:block" />
                        내용을 확인한 뒤 빠르게 답변드리겠습니다.</p>
                    </div>
                    <Button variant="primary" size="md" onClick={() => setSubmitted(false)} className="text-xs tracking-tight mt-4">다른 문의 보내기</Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSend} className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-2xl font-[var(--font-heading)] font-bold text-[var(--color-primary)] mb-2">문의하기</h3>
                      <p className="text-sm text-[var(--color-text-muted)] break-keep [text-wrap:pretty]">예약과 부대시설, 단체 이용 등 궁금한 내용을 남겨 주세요.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div>
                        <label className="text-xs font-semibold text-[var(--color-text-muted)] tracking-tight block mb-2">이름 *</label>
                        <input required type="text" placeholder="홍길동" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[var(--color-text-muted)] tracking-tight block mb-2">이메일 주소 *</label>
                        <input required type="email" placeholder="gildong@example.com" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[var(--color-text-muted)] tracking-tight block mb-2">문의 주제</label>
                        <input type="text" placeholder="스파 예약, 단체 이용, 공항 셔틀 등" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[var(--color-text-muted)] tracking-tight block mb-2">문의 내용 *</label>
                        <textarea required rows={5} placeholder="문의 내용을 자세히 적어 주세요." className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none rounded-sm" />
                      </div>
                    </div>

                    <div>
                      <Button variant="primary" size="lg" className="w-full text-xs tracking-tight flex items-center justify-center gap-2">
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
