"use client";
import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { locations } from "../data/data";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const ease = [0.23, 1, 0.32, 1] as const;

function LocationsPageContent() {
  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">

        {/* Hero */}
        <section className="relative bg-[var(--color-bg-dark)] h-[350px] flex items-center overflow-hidden">
          <img
            src="/templates/OHMT019-coffee/location-seongsu.jpg"
            alt="매장 안내 서브 비주얼"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-bg-dark)]/75" />
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 pt-16">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-3">매장 안내</p>
              <h1 className="font-heading text-[length:var(--text-h1)] font-light text-white leading-[var(--leading-heading)]">
                매장 찾기
              </h1>
            </div>
            <p className="text-white/40 text-sm max-w-[28ch] leading-relaxed">
              서울 다섯 곳의 매장. 일주일 내내 영업합니다.
            </p>
          </div>
        </section>

        {/* Locations */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.id}
                  className="flex flex-col group transition-colors duration-300"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                >
                  {loc.image && (
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[var(--color-bg)]">
                      <img
                        src={loc.image}
                        alt={loc.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                  )}
                  <div className="py-8 flex flex-col flex-grow">
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-2 block">
                      0{i + 1}
                    </span>
                    <h3 className="font-heading text-2xl font-light mb-4">{loc.name}</h3>
                    <div className="text-sm text-[var(--color-text-muted)] leading-relaxed space-y-2 mb-8 flex-grow">
                      <p className="border-b border-[var(--color-border)] pb-2">{loc.address}</p>
                      <p className="border-b border-[var(--color-border)] pb-2">{loc.hours}</p>
                      <p className="pb-2">{loc.phone}</p>
                    </div>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center border border-[var(--color-text)] text-[var(--color-text)] px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[var(--color-text)] hover:text-white transition-colors duration-300"
                    >
                      길찾기 <ArrowRight size={14} className="inline" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Franchise Inquiry Form */}
        <section className="py-20 bg-[var(--color-bg)] border-t border-[var(--color-border)]">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-text-muted)] mb-3">파트너십</p>
              <h2 className="text-3xl font-light font-heading mb-4 text-[var(--color-text)]">가맹점 문의</h2>
              <p className="text-sm text-[var(--color-text-muted)]">SLOW DROP 브랜드와 함께 독특한 커피 문화를 만들어갈 파트너를 찾고 있습니다.</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert("문의가 접수되었습니다. 담당자가 곧 연락드리겠습니다."); }} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)] mb-2">이름 / 회사명</label>
                  <input required type="text" placeholder="홍길동" className="w-full bg-white border border-[var(--color-border)] text-[var(--color-text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-text)]" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)] mb-2">연락처</label>
                  <input required type="tel" placeholder="010-0000-0000" className="w-full bg-white border border-[var(--color-border)] text-[var(--color-text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-text)]" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)] mb-2">이메일 주소</label>
                <input required type="email" placeholder="example@email.com" className="w-full bg-white border border-[var(--color-border)] text-[var(--color-text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-text)]" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)] mb-2">희망 지역 및 투자 규모</label>
                <input required type="text" placeholder="서울 성동구 / 1억원" className="w-full bg-white border border-[var(--color-border)] text-[var(--color-text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-text)]" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)] mb-2">메시지</label>
                <textarea rows={4} placeholder="희망하는 오픈 일정과 궁금한 점을 남겨주세요." className="w-full bg-white border border-[var(--color-border)] text-[var(--color-text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-text)] resize-none"></textarea>
              </div>
              <div className="text-center pt-4">
                <button type="submit" className="bg-[var(--color-text)] text-white px-10 py-3 text-xs uppercase tracking-widest font-semibold hover:opacity-90 active:scale-95 transition-all">
                  문의 제출
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      </TemplateWrapper>
    </>
  );
}

export default function LocationsPage() {
  return <LocationsPageContent />;
}
