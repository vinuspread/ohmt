"use client";
import React from "react";
import { motion } from "motion/react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const ease = [0.23, 1, 0.32, 1] as const;

function AboutPageContent() {
  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">

        {/* Hero - dark, full bleed */}
        <section className="bg-[var(--color-bg-dark)] pt-32 pb-0 overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 pb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h1
              className="font-heading text-[length:var(--text-display)] font-light text-white leading-[var(--leading-display)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              천천히 즐길<br />가치가 있는 커피.
            </motion.h1>
          </div>
          <motion.div
            className="w-full aspect-[16/7] overflow-hidden"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease }}
          >
            <img
              src="/templates/OHMT019-coffee/story-interior.jpg"
              alt="카페 인테리어"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        {/* Story - 2-col split */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          <motion.div
            className="flex flex-col justify-center px-10 py-16 md:px-20 lg:px-28 md:py-24"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-text-muted)] mb-4">우리 이야기</p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-[var(--color-text)] leading-[var(--leading-heading)] mb-8">
              목적을 담아 내리고,<br />정성으로 대접합니다.
            </h2>
            <p className="text-base leading-loose text-[var(--color-text-muted)]">
              SLOW DROP은 성수동의 작은 커피 카트에서 시작했습니다.
              주말 취미 프로젝트로 시작된 일은 어느새 동네의 든든한
              단골집으로 자리 잡았습니다. 창립자들은 에티오피아와
              콜롬비아의 커피 산지를 수년간 오가며, 품질에 대한
              우리의 신념을 함께 나눌 농부들과 관계를 쌓아왔습니다.
            </p>
            <p className="text-base leading-loose text-[var(--color-text-muted)] mt-4">
              오늘날 우리는 원두를 소량 배치로 직접 로스팅하고,
              과정의 매 순간에 담긴 정성이 그대로 커피에 녹아들도록
              노력합니다. 씨앗에서 한 잔까지, 우리는 올바른 방식으로
              하는 일을 믿습니다.
            </p>
          </motion.div>
          <motion.div
            className="overflow-hidden h-[360px] md:h-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <img
              src="/templates/OHMT019-coffee/story-brewing.jpg"
              alt="커피 추출 장면"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        {/* Philosophy - dark */}
        <section className="bg-[var(--color-bg-dark)] py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-white mb-16">
              우리의 원두 철학
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
              {[
                { title: "싱글 오리진", body: "블렌드가 아닌 단일 농장에서 원두를 공급받습니다. 각 산지는 그 자체로 탐구할 가치가 있는 독특한 풍미를 지닙니다." },
                { title: "직거래", body: "농부들과 직접 파트너십을 맺고, 뛰어난 품질에 대해 공정무역 가격 이상을 지불합니다." },
                { title: "신선한 로스팅", body: "모든 배치는 방문 전 48시간 이내에 로스팅됩니다. 신선함은 타협할 수 없는 원칙입니다." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="bg-[var(--color-bg-dark)] px-8 py-10"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4 block">0{i + 1}</span>
                  <h3 className="font-heading text-xl font-light text-white mb-4">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image pair */}
        <section className="grid grid-cols-2">
          <div className="aspect-square overflow-hidden">
            <img src="/templates/OHMT019-coffee/story-beans.jpg" alt="커피 원두" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src="/templates/OHMT019-coffee/hero-drink.jpg" alt="에스프레소 바" className="w-full h-full object-cover" />
          </div>
        </section>

      </main>
      <Footer />
      </TemplateWrapper>
    </>
  );
}

export default function AboutPage() {
  return <AboutPageContent />;
}
