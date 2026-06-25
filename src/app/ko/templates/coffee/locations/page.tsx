"use client";
import React from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { locations } from "../data/data";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function LocationsPageContent() {
  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        {/* Hero */}
        <section className="relative bg-[var(--color-bg-dark)] h-[300px] flex items-center overflow-hidden">
          <img
            src="/templates/coffee/location-seongsu.jpg"
            alt="매장 안내 서브 비주얼"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 text-center pt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">지점 안내</p>
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-[1.1] text-white mb-2">
              매장 안내
            </h1>
            <p className="text-sm text-white/60 max-w-md mx-auto">
              서울 다섯 곳에서 만나보세요.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((loc) => (
                <div key={loc.id} className="flex flex-col group transition-colors duration-300">
                  {loc.image && (
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[var(--color-bg-secondary)]">
                      <img
                        src={loc.image}
                        alt={loc.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                  )}
                  <div className="py-8 flex flex-col flex-grow bg-[var(--color-bg)]">
                    <h3 className="text-2xl font-bold font-heading mb-4 text-[var(--color-text)]">{loc.name}</h3>
                    <div className="space-y-2 text-sm text-[var(--color-text-muted)] mb-8 flex-grow">
                      <p className="border-b border-[var(--color-ui-border)] pb-2">{loc.address}</p>
                      <p className="border-b border-[var(--color-ui-border)] pb-2">{loc.hours}</p>
                      <p className="pb-2">{loc.phone}</p>
                    </div>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center border border-[var(--color-text)] text-[var(--color-text)] px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[var(--color-text)] hover:text-[var(--color-text-contrast)] transition-colors duration-300"
                    >
                      길찾기 &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Franchise Inquiry Form */}
        <section className="py-20 bg-[var(--color-bg-secondary)] border-t border-[var(--color-ui-border)]">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-3">파트너십</p>
              <h2 className="text-3xl font-bold font-heading mb-4 text-[var(--color-text)]">가맹점 문의</h2>
              <p className="text-sm text-[var(--color-text-muted)]">Oh My Template 브랜드와 함께 특별한 커피 문화를 만들어갈 파트너를 모십니다.</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert("문의가 접수되었습니다. 담당자가 곧 연락드리겠습니다."); }} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)] mb-2">이름 / 회사명</label>
                  <input required type="text" placeholder="홍길동" className="w-full bg-[var(--color-bg)] border border-[var(--color-ui-border)] text-[var(--color-text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-text)]" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)] mb-2">연락처</label>
                  <input required type="tel" placeholder="010-0000-0000" className="w-full bg-[var(--color-bg)] border border-[var(--color-ui-border)] text-[var(--color-text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-text)]" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)] mb-2">이메일 주소</label>
                <input required type="email" placeholder="example@email.com" className="w-full bg-[var(--color-bg)] border border-[var(--color-ui-border)] text-[var(--color-text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-text)]" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)] mb-2">희망 지역 및 예산</label>
                <input required type="text" placeholder="서울 성수동 / 약 1억 원" className="w-full bg-[var(--color-bg)] border border-[var(--color-ui-border)] text-[var(--color-text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-text)]" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)] mb-2">문의 내용</label>
                <textarea rows={4} placeholder="개설 희망시기 및 기타 문의사항을 적어주세요." className="w-full bg-[var(--color-bg)] border border-[var(--color-ui-border)] text-[var(--color-text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-text)] resize-none"></textarea>
              </div>
              <div className="text-center pt-4">
                <button type="submit" className="bg-[var(--color-text)] text-[var(--color-text-contrast)] px-10 py-3 text-xs uppercase tracking-widest font-semibold hover:opacity-90 active:scale-95 transition-all">
                  문의 등록하기
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
