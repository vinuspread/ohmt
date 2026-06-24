"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { packages } from "../data/data";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";

export default function PricingFull() {
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
                투자 안내
              </span>
              <h1
                className="font-[family-name:var(--font-heading)] font-light capitalize text-[var(--color-text)] leading-[1.05]"
                style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
              >
                웨딩 컬렉션
              </h1>
              <p className="mt-6 text-[0.85rem] text-[var(--color-text-muted)] leading-relaxed max-w-md font-[family-name:var(--font-body)]">
                여러분의 웨딩에 가장 잘 어울리는 패키지를 선택해보세요. 모든 패키지는 세심하게 구성됩니다.
              </p>
            </motion.div>

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
              {packages.map((pkg, idx) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                  className="flex flex-col bg-transparent hover:opacity-95 transition-opacity duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-none mb-8">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex-grow">
                    <h2 className="font-[family-name:var(--font-heading)] text-3xl font-light uppercase tracking-[0.05em] text-[var(--color-text)]">
                      {pkg.title}
                    </h2>
                    <div className="mt-2 text-2xl font-light text-[var(--color-primary)]">
                      {pkg.price}
                    </div>
                    <p className="mt-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {pkg.description}
                    </p>
                    <ul className="mt-8 space-y-4 border-t border-[var(--color-border)] pt-8">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start text-sm text-[var(--color-text)]">
                          <span className="mr-3 text-[var(--color-primary)] font-bold">·</span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-8">
                    <Link
                      href="/ko/templates/OHMT025-wedding-KO/contact"
                      className="w-full inline-flex items-center justify-center border border-[var(--color-primary)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)] transition-all duration-300"
                    >
                      이 패키지로 문의하기
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#2C241E] py-20">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
            <h2 className="font-[family-name:var(--font-heading)] font-light text-4xl lg:text-6xl capitalize text-white leading-[1.1] mb-6">
              어떤 패키지가 좋을지 모르시겠나요?
            </h2>
            <p className="text-sm text-white/60 mb-8 font-[family-name:var(--font-body)]">
              여러분의 웨딩에 가장 잘 맞는 구성을 찾아드리겠습니다.
            </p>
            <Link
              href="/ko/templates/OHMT025-wedding-KO/contact"
              className="inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200"
            >
              문의하기
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
