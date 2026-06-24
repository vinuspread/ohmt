"use client";

import { motion } from "framer-motion";
import { packages } from "../../data/data";

export default function Pricing() {
  return (
    <section id="Pricing" className="py-32 bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)] font-semibold">
            이용 요금 안내
          </span>
          <h2 className="mt-4 font-[var(--font-heading)] text-5xl font-light uppercase tracking-[0.05em] text-[var(--color-text)]">
            웨딩 촬영 컬렉션
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-[var(--color-text-muted)] leading-relaxed">
            결혼식의 규모와 구성에 가장 잘 어울리는 보정 패키지를 확인해보세요.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              className="flex flex-col bg-[var(--color-bg)] border border-[var(--color-border)] rounded-sm overflow-hidden p-8 hover:border-[var(--color-primary)]/40 transition-colors duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-none mb-8">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex-grow">
                <h3 className="font-[var(--font-heading)] text-3xl font-light uppercase tracking-[0.05em] text-[var(--color-text)]">
                  {pkg.title}
                </h3>
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
                <a
                  href="/ko/templates/OHMT025-wedding-KO/contact"
                  className="w-full inline-flex items-center justify-center border border-[var(--color-primary)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)] transition-all duration-300"
                >
                  이 패키지로 문의하기
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
