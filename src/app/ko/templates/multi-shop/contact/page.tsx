"use client";
import React from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { Mail, MapPin, Clock } from "lucide-react";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const contactInfo = [
  { icon: Mail, title: "이메일", details: "contact@ohmytemplate.com" },
  { icon: MapPin, title: "스튜디오", details: "서울, 대한민국" },
  { icon: Clock, title: "영업시간", details: "월-금, 오전 9시-오후 6시" },
];

function ContactPageContent() {
  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen pt-16 md:pt-20 bg-[var(--color-bg-secondary)] text-[var(--color-text)]">

        <section className="py-20 md:py-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">문의하기</h1>
              <p className="text-base leading-relaxed text-[var(--color-text-muted)] mt-4 max-w-md">
                궁금한 점, 협업 제안, 혹은 인사라도 좋습니다. 언제든 연락주세요.
                24시간 이내에 답변드리겠습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <div className="space-y-10">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <item.icon size={20} strokeWidth={1.2} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-1">{item.title}</h3>
                      <p className="text-base">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] block mb-2">이름</label>
                      <input type="text" className="w-full border border-[var(--color-border)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)] transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] block mb-2">이메일</label>
                      <input type="email" className="w-full border border-[var(--color-border)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] block mb-2">제목</label>
                    <input type="text" className="w-full border border-[var(--color-border)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)] transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] block mb-2">메시지</label>
                    <textarea rows={6} className="w-full border border-[var(--color-border)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)] transition-colors resize-none" />
                  </div>
                  <button
                    type="submit"
                    className="bg-[var(--color-primary)] text-white px-10 py-3 text-xs uppercase tracking-[0.2em] hover:bg-black/80 transition-[transform,colors] duration-160 ease-out active:scale-[0.97]"
                  >
                    보내기
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
      </TemplateWrapper>
    </>
  );
}

export default function ContactPage() {
  return (
    <React.Suspense fallback={null}>
      <ContactPageContent />
    </React.Suspense>
  );
}

