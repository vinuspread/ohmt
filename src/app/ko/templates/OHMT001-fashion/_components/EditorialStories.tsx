"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const stories = [
  {
    num: "01",
    title: "레이어링의 미학",
    excerpt: "가벼운 실크 슬립 위에 묵직한 아우터를 겹쳐 완성하는 간절기 스타일링 가이드.",
    image: "/templates/OHMT001-fashion/journal-layering-v2.jpg",
  },
  {
    num: "02",
    title: "천연 원사의 생명력",
    excerpt: "이탈리아산 버진 울과 고품질 실크가 지닌 유기적 질감을 오래 보존하는 법.",
    image: "/templates/OHMT001-fashion/journal-fibers-v2.jpg",
  },
  {
    num: "03",
    title: "구조의 우아함",
    excerpt: "몸을 구속하지 않으면서도 어깨선을 입체적으로 잡아주는 SILO만의 테일러링.",
    image: "/templates/OHMT001-fashion/journal-structure-v2.jpg",
  },
];

export const EditorialStories = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-bg)] py-16 text-[var(--color-text)] md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="mb-14 flex flex-col gap-7 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              SILO Journal
            </span>
            <h2 className="text-4xl font-light leading-tight tracking-[-0.03em] text-balance sm:text-5xl" style={{ fontFamily: "var(--font-bodoni)" }}>
              실과 실루엣의 기록
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--color-text-secondary)] break-keep">
            우리는 소재가 지닌 고유의 목소리와 조용한 럭셔리의 철학을 나눕니다. 공정의 세부와 장인정신에 대한 이야기를 읽어보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {stories.map((story, index) => (
            <motion.article
              key={story.num}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ delay: index * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col"
            >
              <div className="mb-6 aspect-[4/5] overflow-hidden bg-[var(--color-bg-secondary)]">
                <img src={story.image} alt={story.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" />
              </div>
              <div className="mb-4 flex items-baseline gap-4">
                <span className="text-xs italic text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-bodoni)" }}>{story.num}</span>
                <h3 className="text-xl font-normal tracking-[-0.02em] break-keep">{story.title}</h3>
              </div>
              <p className="mb-7 max-w-[34ch] text-sm leading-relaxed text-[var(--color-text-secondary)] break-keep">{story.excerpt}</p>
              <Link href="#" className="mt-auto w-fit border-b border-[var(--color-text)]/20 pb-1 text-xs font-bold tracking-[0.14em] transition-colors hover:border-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
                자세히 읽기
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
