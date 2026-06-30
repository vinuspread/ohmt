"use client";

import { Suspense } from "react";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const boardMembers = [
  { name: "James A. Whitfield", role: "이사회 의장", initials: "JW", bio: "에너지 분야에서 35년 경력을 보유한 MagnaCorp International의 전 CEO.", image: "/templates/OHMT011-ir/member-jw.png" },
  { name: "Elena M. Santos", role: "선임 독립 이사", initials: "ES", bio: "Pacific Advisors Group 사장으로, 5개 상장 기업 이사회에서 활동 중.", image: "/templates/OHMT011-ir/member-es.png" },
  { name: "David K. Park", role: "감사 위원회 위원장", initials: "DP", bio: "Deloitte LLP 전 파트너, CPA, 재무 보고 및 내부 통제 전문가.", image: "/templates/OHMT011-ir/member-dp.png" },
  { name: "Sarah L. Thornton", role: "보상 위원회 위원장", initials: "ST", bio: "GlobalTech Industries 전 CHRO, 임원 보상 및 인재 전략 전문가.", image: "/templates/OHMT011-ir/member-st.png" },
  { name: "Robert M. Chen", role: "이사", initials: "RC", bio: "Crestview Capital 창립자 겸 대표 파트너, 42억 달러 규모 사모펀드 운용.", image: "/templates/OHMT011-ir/member-rc.png" },
  { name: "Maria V. Gonzalez", role: "이사", initials: "MG", bio: "Horizon Renewables CEO, 지속가능 에너지 전환 분야의 선도적 리더.", image: "/templates/OHMT011-ir/member-mg.png" },
  { name: "Thomas W. Hayes", role: "이사", initials: "TH", bio: "전 미국 재무차관보, 규제 업무 및 공공 정책 전문가.", image: "/templates/OHMT011-ir/member-th.png" },
  { name: "Catherine N. Adebayo", role: "이사", initials: "CA", bio: "Sterling Bank COO, 기업 지배구조 및 리스크 관리 분야에서 풍부한 경험 보유.", image: "/templates/OHMT011-ir/member-ca.png" },
];

const committees = [
  {
    name: "감사 위원회",
    members: "D. Park (위원장), R. Chen, T. Hayes",
    charter: "재무 보고, 내부 통제, 감사 프로세스 및 법적 규제 요건 준수를 감독합니다.",
  },
  {
    name: "보상 위원회",
    members: "S. Thornton (위원장), M. Gonzalez, C. Adebayo",
    charter: "임원 보상 프로그램, 주식 계획 및 복리후생 구조를 검토하고 승인합니다.",
  },
  {
    name: "지배구조 및 추천 위원회",
    members: "E. Santos (위원장), R. Chen, T. Hayes",
    charter: "적격 이사회 후보를 발굴하고, 이사회 성과를 평가하며, 기업 지배구조 지침을 감독합니다.",
  },
  {
    name: "지속가능성 위원회",
    members: "M. Gonzalez (위원장), C. Adebayo, S. Thornton",
    charter: "환경, 사회 및 지배구조(ESG) 이니셔티브와 지속가능성 보고를 모니터링합니다.",
  },
];

const documents = [
  { title: "기업 지배구조 가이드라인", type: "PDF", size: "234 KB" },
  { title: "이사회 위원회 헌장 (전체)", type: "PDF", size: "1.2 MB" },
  { title: "사업 행동 강령 및 윤리", type: "PDF", size: "412 KB" },
  { title: "내부자 거래 정책", type: "PDF", size: "189 KB" },
  { title: "주주 커뮤니케이션 정책", type: "PDF", size: "156 KB" },
  { title: "이해상충 정책", type: "PDF", size: "278 KB" },
];

function IRGovernanceContent() {
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
              src="/templates/OHMT011-ir/ir-2.jpg"
              alt="Governance"
              fill
              priority
              quality={95}
              className="object-cover opacity-30"
              sizes="100vw"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>
          <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 w-full py-14">
            <div className="max-w-[640px]">
              <div className="flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-8">
                <div className="w-6 h-[1px] bg-[var(--color-accent)]" />
                기업 지배구조
              </div>
              <h1 className="text-[clamp(2.2rem,4vw,3.8rem)] font-bold tracking-tight leading-[1.5] mb-6">
                지배구조
              </h1>
              <p className="text-[0.9rem] text-white/55 leading-[1.8] max-w-[520px] font-normal">
                투명하고 책임 있는 기업 지배구조에 대한 우리의 약속은 모든 의사 결정의 기준이 됩니다.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Board of Directors */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="py-14 bg-white"
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="mb-14 max-w-[640px]">
              <span className="block text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-5">
                리더십
              </span>
              <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-tight text-[var(--color-dark-bg)] leading-[1.5] mb-6">
                이사회
              </h2>
              <p className="text-[0.88rem] text-[#6B6B6B] leading-[1.82] font-normal">
                에너지, 금융, 기술 및 공공 정책 분야에서 깊은 전문성을 갖춘 저명한 리더들로 구성된 이사회입니다.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {boardMembers.map((member) => (
                <motion.div
                  key={member.name}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <div className="w-full aspect-[4/5] bg-[#F9F9F8] relative overflow-hidden mb-4 border border-[var(--color-border)] group-hover:border-[var(--color-accent)] transition-colors">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-[2.4rem] font-bold text-[var(--color-dark-bg)]/20">{member.initials}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-[0.82rem] font-bold text-[var(--color-dark-bg)] mb-0.5">{member.name}</h3>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--color-accent)] mb-2.5">{member.role}</p>
                  <p className="text-[0.75rem] text-[#6B6B6B] leading-[1.7] font-normal">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Committees */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="py-14 bg-[#F9F9F8]"
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="mb-14 max-w-[640px]">
              <span className="block text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-5">
                이사회 감독
              </span>
              <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-tight text-[var(--color-dark-bg)] leading-[1.5] mb-6">
                위원회
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {committees.map((c) => (
                <motion.div
                  key={c.name}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all"
                >
                  <h3 className="text-[0.82rem] font-bold text-[var(--color-dark-bg)] mb-2">{c.name}</h3>
                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.08em] text-[var(--color-accent)] mb-3.5">{c.members}</p>
                  <p className="text-[0.78rem] text-[#6B6B6B] leading-[1.82] font-normal">{c.charter}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Governance Documents */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="py-14 bg-white"
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="mb-14 max-w-[640px]">
              <span className="block text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-5">
                자료
              </span>
              <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-tight text-[var(--color-dark-bg)] leading-[1.5] mb-6">
                지배구조 문서
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border)]">
              {documents.map((doc) => (
                <div key={doc.title} className="bg-white p-6 flex items-center justify-between group hover:bg-[#F9F9F8] transition-colors">
                  <div>
                    <h3 className="text-[0.82rem] font-bold text-[var(--color-dark-bg)] mb-0.5">{doc.title}</h3>
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.08em] text-[#6B6B6B]">{doc.type} - {doc.size}</p>
                  </div>
                  <a href="#" className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-accent)] hover:text-[var(--color-dark-bg)] transition-colors whitespace-nowrap ml-4">
                    다운로드 →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function IRGovernance(props: any) {
  return (
    <React.Suspense fallback={null}>
      <IRGovernanceContent {...props} />
    </React.Suspense>
  );
}
