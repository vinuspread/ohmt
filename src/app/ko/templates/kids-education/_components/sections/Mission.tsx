"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const categories = [
  {
    number: "01",
    title: "창작 미술",
    description: "자기 표현력과 상상력을 키우는 음악, 미술, 연극 및 공예 놀이",
    color: "var(--color-accent)",
    href: "/ko/templates/OHMT024-kids-education/classes",
  },
  {
    number: "02",
    title: "STEM 창의교육",
    description: "비판적 사고와 지적 호기심을 기르는 코딩, 과학 실험 및 수학 어드벤처",
    color: "var(--color-secondary)",
    href: "/ko/templates/OHMT024-kids-education/classes",
  },
  {
    number: "03",
    title: "사회성 & 놀이",
    description: "교우 관계를 넓히고 협동심을 배우는 다채로운 단체 놀이와 액티비티",
    color: "var(--color-primary)",
    href: "/ko/templates/OHMT024-kids-education/classes",
  },
];

function CategoryCard({ cat }: { cat: typeof categories[number] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={cat.href}
      className="flex gap-4 py-5 px-5 rounded-2xl border border-black/8 bg-white/60 hover:bg-white hover:border-black/15 hover:shadow-md transition-all duration-200"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="w-3.5 h-3.5 rounded-full shrink-0 mt-1.5"
        style={{ backgroundColor: cat.color }}
      />
      <div className="flex-1">
        <h3
          className="text-lg font-bold tracking-tight transition-colors duration-150"
          style={{ fontFamily: "var(--font-heading)", color: hovered ? cat.color : "var(--color-text-main)" }}
        >
          {cat.title}
        </h3>
        <p className="mt-1 text-sm text-[var(--color-text-muted)] leading-relaxed">
          {cat.description}
        </p>
      </div>
      <span
        className="transition-all duration-150 self-center shrink-0"
        style={{
          color: hovered ? cat.color : "var(--color-text-muted)",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
        }}
      >
        →
      </span>
    </Link>
  );
}

export default function Mission() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="lg:grid lg:grid-cols-2 gap-20 items-start">

          {/* Left: Mission */}
          <motion.div
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
          >
            <span className="inline-flex items-center justify-center bg-[var(--color-red)] text-white rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-6">
              교육 철학
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold tracking-tight leading-none"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              모든 아이는 호기심을<br />갖고 태어납니다.
            </h2>
            <p className="mt-6 text-base text-[var(--color-text-muted)] leading-relaxed">
              키즈 아카데미는 아이들이 다채로운 창의 클래스를 경험하고, 소중한 사람들과 소통하도록 돕습니다. 매 수업 시간은 배움과 성장, 그리고 평생 기억에 남을 즐거운 추억이 됩니다.
            </p>
            <p className="mt-4 text-base text-[var(--color-text-muted)] leading-relaxed">
              우리의 미션은 놀이 기반 교육을 통해 호기심의 불씨를 지피는 것입니다. 아이들이 공부하고 있다는 사실조차 잊은 채 몰입할 때, 가장 훌륭한 학습이 일어나기 때문입니다.
            </p>
            <Link
              href="/ko/templates/OHMT024-kids-education/classes"
              className="inline-block mt-8 bg-[var(--color-text-main)] text-white rounded-full px-7 py-3.5 text-sm font-bold hover:brightness-110 active:scale-[0.97] transition-all duration-150"
            >
              전체 클래스 보기
            </Link>
          </motion.div>

          {/* Right: Categories */}
          <div className="mt-16 lg:mt-0">
            <motion.p
              initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.2, ease: EASE_OUT }}
              className="text-xs font-bold uppercase tracking-wider text-[var(--color-secondary)] mb-6"
            >
              클래스 분야
            </motion.p>

            <div className="flex flex-col gap-3">
              {categories.map((cat, idx) => (
                <motion.div
                  key={cat.number}
                  initial={shouldReduce ? { opacity: 0 } : { opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.18, delay: idx * 0.05, ease: EASE_OUT }}
                >
                  <CategoryCard cat={cat} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
