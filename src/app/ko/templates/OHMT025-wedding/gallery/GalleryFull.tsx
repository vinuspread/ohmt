"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import GalleryGrid from "../_components/sections/GalleryGrid";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";

export default function GalleryFull() {
  return (
    <>
      <Navbar solid />
      <NavSpacer />
      <main>
        <section className="bg-[var(--color-bg)] py-24 lg:py-32">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
              className="mb-16"
            >
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[var(--color-primary)] block mb-4">
                포트폴리오
              </span>
              <h1
                className="font-[family-name:var(--font-heading)] font-light capitalize text-[var(--color-text)] leading-[var(--leading-heading)]"
                style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
              >
                웨딩 스토리</h1>
              <p className="mt-6 max-w-2xl text-[0.85rem] leading-relaxed text-[var(--color-text-muted)] font-[family-name:var(--font-body)]">
                <span className="md:block">서로 다른 장소와 분위기 속에서 자연스럽게 기록한</span>{" "}
                <span className="md:block">결혼식의 순간들을 살펴보세요.</span>
              </p>
            </motion.div>

            <GalleryGrid />
          </div>
        </section>

        <section className="bg-[#2C241E] py-20">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
            <h2 className="font-[family-name:var(--font-heading)] font-light text-4xl lg:text-6xl capitalize text-white leading-[var(--leading-heading)] mb-6">
              촬영을 준비하고 계신가요?</h2>
            <p className="text-sm text-white/60 mb-8 font-[family-name:var(--font-body)]">
              <span className="md:block">예식 날짜와 장소를 알려주시면</span>{" "}
              <span className="md:block">촬영 가능 여부를 확인해드립니다.</span>
            </p>
            <Link
              href="/ko/templates/OHMT025-wedding/contact"
              className="inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200"
            >
              촬영 문의</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function NavSpacer() {
  return <div className="h-[72px]" />;
}
