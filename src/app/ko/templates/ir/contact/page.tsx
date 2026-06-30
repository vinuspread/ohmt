"use client";

import { Suspense } from "react";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const teamMembers = [
  { name: "Sarah Chen", title: "Vice President, Investor Relations", phone: "+1 (212) 555-0198", email: "schen@ohmytemplate.com", image: "/templates/OHMT011-ir/member-st.png" },
  { name: "James Rodriguez", title: "Director, Investor Relations", phone: "+1 (212) 555-0423", email: "jrodriguez@ohmytemplate.com", image: "/templates/OHMT011-ir/member-rc.png" },
  { name: "Emily Park", title: "Manager, Shareholder Services", phone: "+1 (212) 555-0771", email: "epark@ohmytemplate.com", image: "/templates/OHMT011-ir/member-ca.png" },
  { name: "David Kim", title: "Analyst, Financial Communications", phone: "+1 (212) 555-0635", email: "dkim@ohmytemplate.com", image: "/templates/OHMT011-ir/member-dp.png" },
];

function IRContactContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main lang="ko" className="antialiased bg-white text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-white">
        <Header />

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="bg-[var(--color-dark-bg)] min-h-[260px] flex items-center relative overflow-hidden text-white"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/templates/OHMT011-ir/news-event.png"
              alt="Contact IR"
              fill
              priority
              quality={95}
              className="object-cover opacity-30"
              sizes="100vw"
              style={{ objectPosition: 'center 35%' }}
            />
          </div>
          <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 w-full py-14">
            <div className="max-w-[640px]">
              <div className="flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-8">
                <div className="w-6 h-[1px] bg-[var(--color-accent)]" />
                투자자 관계
              </div>
              <h1 className="text-[clamp(2.2rem,4vw,3.8rem)] font-bold tracking-tight leading-[1.5] mb-6">
                문의하기
              </h1>
              <p className="text-[0.9rem] text-white/55 leading-[1.8] max-w-[520px] font-normal">
                투자자 관계 팀은 적시에 투명한 커뮤니케이션을 제공하기 위해 최선을 다하고 있습니다. 문의 사항을 환영합니다.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Contact Team */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="py-14 bg-white"
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="mb-16 max-w-[640px]">
              <span className="block text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-5">
                팀 소개
              </span>
              <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-tight text-[var(--color-dark-bg)] leading-[1.5] mb-6">
                IR 팀 소개
              </h2>
              <p className="text-[0.88rem] text-[#6B6B6B] leading-[1.82] font-normal">
                전문 투자자 관계 담당자가 재무 문의, 주주 서비스 및 기업 액세스를 지원해 드립니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="pb-12 border-b border-[var(--color-border)]"
                >
                  <div className="flex items-center gap-6 mb-4">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-dark-bg)] flex items-center justify-center text-white font-bold text-lg overflow-hidden relative shrink-0">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      ) : (
                        member.name.split(" ").map(n => n[0]).join("")
                      )}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[var(--color-dark-bg)]">{member.name}</h3>
                      <p className="text-[0.75rem] text-[#6B6B6B]">{member.title}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-x-8 gap-y-1 text-[0.82rem] text-[#6B6B6B]">
                    <span className="flex items-center gap-2">
                      <span className="text-[var(--color-accent)] text-[0.65rem]">●</span> {member.phone}
                    </span>
                    <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-[var(--color-dark-bg)] hover:text-[var(--color-accent)] transition-colors">
                      <span className="text-[var(--color-accent)] text-[0.65rem]">●</span> {member.email}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Form / Inquiry */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="py-14 bg-[#F9F9F8] border-y border-[var(--color-border)]"
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <span className="block text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-5">
                  메시지 보내기
                </span>
                <h2 className="text-[clamp(1.5rem,2.5vw,2.2rem)] font-bold tracking-tight text-[var(--color-dark-bg)] leading-[1.5] mb-6">
                  문의 제출
                </h2>
                <p className="text-[0.88rem] text-[#6B6B6B] leading-[1.82] font-normal mb-8">
                  투자 관련 문의는 양식을 작성해 주시면 영업일 기준 1일 이내에 답변드리겠습니다.
                </p>

                <div className="flex flex-col gap-2 text-[0.82rem] text-[#6B6B6B]">
                  <div className="flex items-center gap-3">
                    <span className="w-20 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)]">주소</span>
                    <span>200 Liberty Street, 45th Floor, New York, NY 10281</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-20 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)]">전화</span>
                    <span>+1 (212) 555-0100</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-20 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)]">이메일</span>
                    <a href="mailto:ir@ohmytemplate.com" className="text-[var(--color-dark-bg)] hover:text-[var(--color-accent)] transition-colors">ir@ohmytemplate.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-20 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)]">주식 이전 대리인</span>
                    <span>Computershare Trust Company, N.A.</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 border border-[var(--color-border)]">
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)] mb-2">이름</label>
                    <input type="text" className="w-full border border-[var(--color-border)] px-4 py-2.5 text-[0.82rem] text-[var(--color-text)] outline-none focus:border-[var(--color-accent)] transition-colors" placeholder="길동" />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)] mb-2">성</label>
                    <input type="text" className="w-full border border-[var(--color-border)] px-4 py-2.5 text-[0.82rem] text-[var(--color-text)] outline-none focus:border-[var(--color-accent)] transition-colors" placeholder="홍" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)] mb-2">이메일</label>
                    <input type="email" className="w-full border border-[var(--color-border)] px-4 py-2.5 text-[0.82rem] text-[var(--color-text)] outline-none focus:border-[var(--color-accent)] transition-colors" placeholder="hong.gildong@example.com" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)] mb-2">제목</label>
                    <select className="w-full border border-[var(--color-border)] px-4 py-2.5 text-[0.82rem] text-[#6B6B6B] outline-none focus:border-[var(--color-accent)] transition-colors bg-white">
                      <option>일반 문의</option>
                      <option>주주 서비스</option>
                      <option>재무 정보</option>
                      <option>미디어 / 언론</option>
                      <option>기타</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)] mb-2">메시지</label>
                    <textarea rows={4} className="w-full border border-[var(--color-border)] px-4 py-2.5 text-[0.82rem] text-[var(--color-text)] outline-none focus:border-[var(--color-accent)] transition-colors resize-none" placeholder="메시지를 입력하세요..." />
                  </div>
                  <div className="col-span-2 pt-2">
                    <button className="text-[0.72rem] font-bold uppercase tracking-[0.14em] px-8 py-3.5 bg-[var(--color-dark-bg)] text-white hover:bg-[var(--color-accent)] transition-all duration-300">
                      문의 제출
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function IRContact(props: any) {
  return (
    <React.Suspense fallback={null}>
      <IRContactContent {...props} />
    </React.Suspense>
  );
}
