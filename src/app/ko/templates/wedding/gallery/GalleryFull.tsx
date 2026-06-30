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
                className="font-[family-name:var(--font-heading)] font-light capitalize text-[var(--color-text)] leading-[1.05]"
                style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
              >
                사랑의 이야기
              </h1>
              <p className="mt-6 text-[0.85rem] text-[var(--color-text-muted)] leading-relaxed max-w-md font-[family-name:var(--font-body)]">
                모든 웨딩은 특별한 이야기입니다. 저희가 기록한 사랑의 순간들을 만나보세요.
              </p>
            </motion.div>

            <GalleryGrid />
          </div>
        </section>

        <section className="bg-[#2C241E] py-20">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
            <h2 className="font-[family-name:var(--font-heading)] font-light text-4xl lg:text-6xl capitalize text-white leading-[1.1] mb-6">
              지금 시작해보세요
            </h2>
            <p className="text-sm text-white/60 mb-8 font-[family-name:var(--font-body)]">
              여러분의 사랑 이야기도 아름답게 기록될 자격이 있습니다.
            </p>
            <Link
              href="/ko/templates/OHMT025-wedding/contact"
              className="inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200"
            >
              촬영 문의하기
            </Link>
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
