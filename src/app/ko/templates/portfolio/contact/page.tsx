"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import { designerInfo, faqs } from "@/lib/portfolio-data";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#eef0f6]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-[0.92rem] font-medium text-[#1e1e1e] group-hover:text-[#8a919b] transition-colors pr-6">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={16} className="text-[#8a919b] shrink-0" />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-[0.88rem] text-[#5a6271] leading-relaxed pb-6 pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <TemplateWrapper theme={theme}>
      <div className="bg-white text-[#1e1e1e] font-[family-name:var(--font-inter)] selection:bg-[#1e1e1e] selection:text-white">
        <Header />

        {/* Hero */}
        <section className="pt-40 pb-20 border-b border-[#eef0f6]">
          <div className="max-w-[1440px] mx-auto px-8 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
              <div>
                <span className="text-[13px] font-medium tracking-[0.3em] uppercase text-[#8a919b] block mb-6">문의하기</span>
                <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tighter leading-[1.5] max-w-[700px]">
                  프로젝트가 있으신가요?<br />함께 이야기해 봐요.
                </h1>
                <a
                  href={`mailto:${designerInfo.contact.email}`}
                  className="inline-block mt-8 text-[1.1rem] font-medium text-[#1e1e1e] border-b border-[#1e1e1e] pb-0.5 hover:opacity-50 transition-opacity"
                >
                  {designerInfo.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-6 md:pb-2">
                {[
                  { label: 'BE', href: designerInfo.social.behance },
                  { label: 'DR', href: designerInfo.social.dribbble },
                  { label: 'X', href: designerInfo.social.twitter },
                ].map(s => (
                  <a key={s.label} href={s.href}
                    className="text-[13px] font-medium text-[#8a919b] hover:text-[#1e1e1e] transition-colors">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-12 md:py-24 border-b border-[#eef0f6]">
          <div className="max-w-[1440px] mx-auto px-8 md:px-10">
            <div className="max-w-[680px]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-16"
                >
                  <h2 className="text-[2rem] font-black uppercase tracking-tighter mb-3">메시지 전송 완료</h2>
                  <p className="text-[#8a919b] text-[0.9rem]">영업일 기준 1일 이내에 답변드리겠습니다.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-0">
                  {[
                    { label: '이름', type: 'text', placeholder: '성함을 입력해주세요' },
                    { label: '이메일', type: 'email', placeholder: 'you@company.com' },
                  ].map(field => (
                    <div key={field.label} className="border-b border-[#eef0f6] py-6">
                      <label className="block text-[13px] font-medium uppercase tracking-widest text-[#8a919b] mb-2">{field.label}</label>
                      <input
                        required
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full bg-transparent py-1 text-[0.95rem] text-[#1e1e1e] placeholder:text-[#d0d8e4] outline-none"
                      />
                    </div>
                  ))}
                  <div className="border-b border-[#eef0f6] py-6">
                    <label className="block text-[13px] font-medium uppercase tracking-widest text-[#8a919b] mb-2">메시지</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="프로젝트에 대해 알려주세요..."
                      className="w-full bg-transparent py-1 text-[0.95rem] text-[#1e1e1e] placeholder:text-[#d0d8e4] outline-none resize-none"
                    />
                  </div>
                  <div className="pt-8">
                    <button
                      type="submit"
                      className="bg-[#1e1e1e] text-white text-[0.78rem] font-bold uppercase tracking-widest px-10 py-4 hover:bg-black transition-colors"
                    >
                      보내기
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-24">
          <div className="max-w-[1440px] mx-auto px-8 md:px-10">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <span className="text-[13px] font-medium tracking-[0.3em] uppercase text-[#8a919b] block mb-6">FAQ</span>
                <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tighter leading-tight">자주 묻는 질문</h2>
              </div>
              <div className="border-t border-[#eef0f6]">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} q={faq.q} a={faq.a} />
                ))}
              </div>
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
