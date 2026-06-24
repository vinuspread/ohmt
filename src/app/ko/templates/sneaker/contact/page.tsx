"use client";
import React, { useState } from "react";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";

function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <TemplateWrapper theme={theme}>
      <div className="bg-white text-black font-sans">
        <Header />

        {/* Header */}
        <section className="pt-16 md:pt-32 pb-16 border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-6">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-black/40 block mb-4">문의하기</span>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-[-0.03em] uppercase leading-[1.5]">고객 문의</h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-10 md:py-20">
          <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-20">

            {/* Info */}
            <div>
              <p className="text-[0.95rem] text-black/60 leading-relaxed mb-12 max-w-[420px]">
                사이즈, 반품, 도매 문의가 있으신가요? 영업일 기준 1일 이내에 답변 드립니다. 리스본 플래그십 스토어에서도 만나보실 수 있습니다.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <span className="mt-1 text-black/30"><Mail size={20} /></span>
                  <div>
                    <p className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-black/40 mb-1">이메일</p>
                    <p className="text-[0.9rem] font-bold">hello@vinus.co</p>
                    <p className="text-[0.82rem] text-black/50">반품 및 교환: returns@vinus.co</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <span className="mt-1 text-black/30"><MapPin size={20} /></span>
                  <div>
                    <p className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-black/40 mb-1">플래그십 스토어</p>
                    <p className="text-[0.9rem] font-bold">Rua do Ouro 142</p>
                    <p className="text-[0.82rem] text-black/50">1150-062 Lisbon, Portugal</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <span className="mt-1 text-black/30"><Clock size={20} /></span>
                  <div>
                    <p className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-black/40 mb-1">영업 시간</p>
                    <p className="text-[0.9rem] font-bold">월 – 토: 10:00 – 20:00</p>
                    <p className="text-[0.82rem] text-black/50">일요일: 12:00 – 18:00</p>
                  </div>
                </div>
              </div>

              {/* FAQ quick links */}
              <div className="mt-14 pt-10 border-t border-black/10">
                <p className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-black/40 mb-5">빠른 도움말</p>
                <div className="space-y-3">
                  {["사이즈 가이드", "배송 안내", "반품 정책", "케어 방법"].map(item => (
                    <div key={item} className="flex items-center justify-between py-3 border-b border-black/5 group cursor-pointer">
                      <span className="text-[0.88rem] font-bold group-hover:opacity-60 transition-opacity">{item}</span>
                      <ArrowRight size={14} className="text-black/30 group-hover:translate-x-1 transition-transform" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10 md:py-20">
                  <div className="w-16 h-16 bg-black flex items-center justify-center mb-6">
                    <ArrowRight size={24} className="text-white" />
                  </div>
                  <h2 className="text-[1.5rem] font-black tracking-[-0.03em] uppercase mb-3">메시지 전송 완료</h2>
                  <p className="text-[0.9rem] text-black/60">영업일 기준 1일 이내에 답변 드리겠습니다.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[0.72rem] font-bold uppercase tracking-[0.1em] text-black/50 mb-2">이름</label>
                      <input required type="text" className="w-full border border-black/20 px-4 py-3 text-[0.88rem] focus:outline-none focus:border-black transition-colors bg-white" placeholder="길동" />
                    </div>
                    <div>
                      <label className="block text-[0.72rem] font-bold uppercase tracking-[0.1em] text-black/50 mb-2">성</label>
                      <input required type="text" className="w-full border border-black/20 px-4 py-3 text-[0.88rem] focus:outline-none focus:border-black transition-colors bg-white" placeholder="홍" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.72rem] font-bold uppercase tracking-[0.1em] text-black/50 mb-2">이메일</label>
                    <input required type="email" className="w-full border border-black/20 px-4 py-3 text-[0.88rem] focus:outline-none focus:border-black transition-colors bg-white" placeholder="email@example.com" />
                  </div>

                  <div>
                    <label className="block text-[0.72rem] font-bold uppercase tracking-[0.1em] text-black/50 mb-2">문의 유형</label>
                    <select className="w-full border border-black/20 px-4 py-3 text-[0.88rem] focus:outline-none focus:border-black transition-colors bg-white">
                      <option>주문 문의</option>
                      <option>반품 및 교환</option>
                      <option>사이즈 문의</option>
                      <option>도매 문의</option>
                      <option>프레스 및 미디어</option>
                      <option>기타</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[0.72rem] font-bold uppercase tracking-[0.1em] text-black/50 mb-2">메시지</label>
                    <textarea required rows={6} className="w-full border border-black/20 px-4 py-3 text-[0.88rem] focus:outline-none focus:border-black transition-colors bg-white resize-none" placeholder="무엇을 도와드릴까요?" />
                  </div>

                  <button type="submit" className="w-full bg-black text-white text-[0.82rem] font-bold uppercase tracking-[0.08em] py-4 hover:bg-black/80 transition-colors flex items-center justify-center gap-3">
                    메시지 보내기 <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </TemplateWrapper>
  );
}


export default function ContactPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <ContactPageContent {...props} />
    </React.Suspense>
  );
}
