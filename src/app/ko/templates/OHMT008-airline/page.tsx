"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { SearchWidget } from "./_components/SearchWidget";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";
import { ArrowRight, Utensils, BedDouble, Wifi, ShieldCheck } from "lucide-react";

const sectionVariants = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as const } }
};

const staggerChildren = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const } }
};

function AirlineTemplateContent() {
  const services = [
    {
      icon: BedDouble,
      title: "독립형 퍼스트 클래스 스위트",
      desc: "슬라이딩 도어와 180° 플랫베드, 개인 수납공간을 갖춘 독립형 객실입니다."
    },
    {
      icon: Utensils,
      title: "사전 예약 기내식",
      desc: "계절과 노선에 맞춘 코스 메뉴를 출발 전에 선택하고, 와인 또는 무알코올 음료와 함께 즐길 수 있습니다."
    },
    {
      icon: Wifi,
      title: "4K 기내 엔터테인먼트",
      desc: "32인치 4K 스크린과 주문형 영화·음악, 국제 뉴스와 기내 Wi-Fi를 이용할 수 있습니다."
    },
    {
      icon: ShieldCheck,
      title: "우선 수속 서비스",
      desc: "전용 체크인과 우선 탑승, 라운지 이용과 도착지 수하물 우선 처리 서비스를 제공합니다."
    }
  ];

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]">
        <Header />

        <Hero />

        <SearchWidget />

        {/* Section 1: The Experience */}
        <motion.section
          variants={sectionVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-80px" }}
          className="py-16 md:py-24 bg-white"
        >
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <motion.div variants={staggerChildren}>
                <span className="block text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-5">
                  퍼스트 클래스
                </span>
                <h2 className="font-[family-name:var(--theme-font-heading)] text-[length:var(--text-h2)] font-[var(--font-weight-heading)] tracking-tight text-[var(--color-primary)] leading-[var(--leading-heading)] mb-6">
                  긴 비행을 편안하게 만드는<br />세심한 서비스.
                </h2>
                <p className="text-[0.95rem] text-[var(--color-text-muted)] leading-loose mb-8 md:mb-10 font-normal">
                  독립형 좌석과 사전 예약 기내식, 조용한 객실과 개인별 서비스로 장거리 비행의 피로를 줄입니다. 탑승 전부터 도착 후까지 필요한 절차를 편리하게 이용할 수 있습니다.
                </p>
                <div className="grid grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
                  <div>
                    <strong className="block text-[var(--color-primary)] font-bold mb-1">프라이빗 스위트</strong>
                    <p className="text-[0.85rem] text-[var(--color-text-muted)]">슬라이딩 도어와 완전 평면 침대를 갖춘 독립형 좌석입니다.</p>
                  </div>
                  <div>
                    <strong className="block text-[var(--color-primary)] font-bold mb-1">기내 다이닝</strong>
                    <p className="text-[0.85rem] text-[var(--color-text-muted)]">노선과 계절에 맞춰 구성한 코스형 기내식입니다.</p>
                  </div>
                </div>
                <Link href="/ko/templates/OHMT008-airline/experience" className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[-0.02em] text-[var(--color-primary)] group transition-[gap] duration-[var(--transition-fast)] hover:gap-4">
                  퍼스트 클래스 보기 <ArrowRight size={16} className="transition-transform duration-[var(--transition-fast)] group-hover:translate-x-1" />
                </Link>
              </motion.div>
              <div className="relative h-[320px] md:h-[480px] overflow-hidden">
                <motion.img
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] as const }}
                  src="/templates/OHMT008-airline/destination-3.jpg"
                  className="w-full h-full object-cover transition-transform duration-[var(--transition-slow)] hover:scale-105"
                  alt="기내 서비스"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Crew / Service image + stats */}
        <motion.section
          variants={sectionVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-80px" }}
          className="bg-[var(--color-primary)] py-16 md:py-24"
        >
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] as const }}
                className="relative h-[320px] md:h-[560px] overflow-hidden order-2 md:order-1"
              >
                <img
                  src="/templates/OHMT008-airline/airline-experience-hero.png"
                  className="w-full h-full object-cover opacity-80 transition-transform duration-[var(--transition-slow)] hover:scale-105"
                  alt="STRATUS 객실 승무원"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/60 via-transparent to-transparent" />
              </motion.div>
              <div className="order-1 md:order-2 space-y-8 md:space-y-10">
                <motion.div variants={staggerChildren}>
                  <span className="block text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-5">
                    객실 서비스
                  </span>
<h2 className="font-[family-name:var(--theme-font-heading)] text-[length:var(--text-h2)] font-[var(--font-weight-heading)] tracking-tight text-white leading-[var(--leading-heading)]">
                  필요한 순간에 <br />
                  <span className="font-[var(--font-weight-heading)] text-[var(--color-accent)]">부담 없이 이용할 수 있도록.</span>
                  </h2>
                </motion.div>
                <motion.p variants={staggerChildren} className="text-[0.95rem] text-white/60 leading-loose font-normal">
                  객실 승무원은 안전과 응대, 식음료와 장거리 비행 서비스에 관한 교육을 이수합니다.<br />탑승부터 도착까지 필요한 요청을 신속하고 세심하게 지원합니다.
                </motion.p>
                <motion.div variants={staggerChildren} className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8 md:pt-10">
                  {[
                    { value: "200+", label: "취항지" },
                    { value: "98%", label: "정시율" },
                    { value: "15yr", label: "평균 근속" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl md:text-3xl font-black text-[var(--color-accent)]">{stat.value}</div>
                      <div className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/40 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Service Cards */}
        <motion.section
          variants={sectionVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-80px" }}
          className="py-16 md:py-24 bg-[var(--color-bg-secondary)]"
        >
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <motion.div variants={staggerChildren} className="mb-10 md:mb-14">
              <span className="block text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
                서비스
              </span>
              <h2 className="font-[family-name:var(--theme-font-heading)] text-[length:var(--text-h2)] font-[var(--font-weight-heading)] tracking-tight text-[var(--color-primary)] leading-[var(--leading-heading)]">
                더 편안한 비행을<br className="hidden md:block" />위한 서비스를 확인하세요.
              </h2>
            </motion.div>

             <motion.div
               initial="initial"
               whileInView="whileInView"
               viewport={{ once: true }}
               variants={{ whileInView: { transition: { staggerChildren: 0.1 } } }}
               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
             >
                {services.map((s) => (
                  <motion.div
                    key={s.title}
                    variants={{ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const } } }}
                    className="bg-white border border-[var(--color-border)] p-8 md:p-8 space-y-6 group hover:border-[var(--color-accent)] hover:translate-y-[-4px] transition-all duration-[var(--transition-base)]"
                  >
                    <div className="w-10 h-10 bg-[var(--color-primary)] flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors duration-[var(--transition-base)]">
                      <s.icon size={18} className="text-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-colors duration-[var(--transition-base)]" />
                    </div>
                    <h3 className="text-[0.92rem] font-bold text-[var(--color-primary)] leading-[var(--leading-heading)] uppercase tracking-wide">
                      {s.title}
                    </h3>
                    <p className="text-[0.82rem] text-[var(--color-text-muted)] leading-relaxed font-normal">
                      {s.desc}
                    </p>
                  </motion.div>
                ))}
             </motion.div>

            <motion.div variants={staggerChildren} className="mt-10 md:mt-14 text-center">
              <Link
                href="/ko/templates/OHMT008-airline/experience"
                className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[-0.02em] px-10 py-3.5 bg-[var(--color-primary)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-[var(--transition-base)] active:scale-[0.97]"
              >
                전체 경험 보기 <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function AirlineTemplate() {
  return (
    <React.Suspense fallback={null}>
      <AirlineTemplateContent />
    </React.Suspense>
  );
}
