// src/app/templates/OHMT012-magazine/-components/sections/LatestStories.tsx
"use client";

import React from "react";
import Link from "next/link";

const stories = [
  {
    slug: "brutalist-heart-london",
    tag: "사진",
    title: "빛과 그림자로 기록한 런던 브루탈리즘",
    desc: "거친 콘크리트 건축이 만든 도시의 표정을 따라가다.",
    img: '/templates/OHMT012-magazine/mag-article-brutalist-london-v2.jpg'
  },
  {
    slug: "hidden-teahouses-kyoto",
    tag: "여행",
    title: "교토 외곽의 숨은 찻집",
    desc: "관광지에서 벗어나 만나는 오래된 차 문화와 고요.",
    img: '/templates/OHMT012-magazine/mag-article-kyoto-teahouse-v2.jpg'
  }
];

const mostReadItems = [
  "순환하는 패션의 미래",
  "다시 필름 사진을 찾는 이유",
  "미니멀리즘이 감추고 있는 것"
];

export const LatestStories = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <div className="text-[1.1rem] font-bold uppercase tracking-tight text-[var(--theme-text-muted)] pb-4 border-b border-[var(--theme-text)] mb-8">
              최신 기사
            </div>
            {stories.map((story, i) => (
              <div key={i} className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 py-8 border-b border-gray-100 group">
                <div className="overflow-hidden h-[135px]">
                  <img loading="lazy" src={story.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={story.title} />
                </div>
                <div>
                  <span className="text-[0.875rem] font-bold uppercase tracking-tight text-[var(--theme-accent)] mb-2 block">{story.tag}</span>
                  <h3 className="font-[family-name:var(--theme-font-heading)] text-[1rem] font-normal leading-[var(--leading-heading)] mb-2 tracking-[-0.02em]">
                    <Link href={`/ko/templates/OHMT012-magazine/article/${story.slug}`} className="hover:text-[var(--theme-accent)] transition-colors">{story.title}</Link>
                  </h3>
                  <p className="text-[0.8rem] text-[var(--theme-text-muted)] leading-[var(--leading-body)] font-normal">
                    {story.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <aside className="sticky top-8">
            <div className="text-[1.1rem] font-bold uppercase tracking-tight text-[var(--theme-text-muted)] pb-4 border-b border-[var(--theme-text)] mb-8">
              많이 읽은 기사
            </div>
            <div className="flex flex-col">
              {[
                { n: 1, slug: "sustainable-fashion-circular" },
                { n: 2, slug: "return-to-film-photography" },
                { n: 3, slug: "hidden-costs-minimalism" }
              ].map(({ n, slug }, i) => (
                <div key={n} className="flex gap-6 py-6 border-b border-gray-100 group last:border-0">
                  <span className="font-[family-name:var(--theme-font-heading)] text-[2.5rem] leading-none text-[var(--theme-border)] group-hover:text-[var(--theme-accent)] transition-colors shrink-0 pt-1">
                    0{n}
                  </span>
                  <h5 className="font-[family-name:var(--theme-font-heading)] text-[0.9rem] leading-[var(--leading-body)] self-center tracking-[-0.02em]">
                    <Link href={`/ko/templates/OHMT012-magazine/article/${slug}`} className="hover:text-[var(--theme-accent)] transition-colors">
                      {mostReadItems[i]}
                    </Link>
                  </h5>
                </div>
              ))}
            </div>
          </aside>
        </div>

      </div>
    </section>
  );
};

export const NewsletterStrip = () => {
  return (
  <section className="bg-[var(--theme-text)] text-white py-10 md:py-20 text-center px-6">
    <div className="max-w-[var(--theme-container)] mx-auto">
      <h2 className="font-[family-name:var(--theme-font-heading)] text-[length:var(--text-h3)] font-normal mb-3 tracking-[-0.02em]">
        매주 새로운 이야기를 받아보세요
      </h2>
      <p className="text-[0.88rem] text-white/55 mb-8 tracking-wide font-normal">
        엄선한 기사와 소식을 이메일로 보내드립니다.
      </p>
      <form className="flex flex-col sm:flex-row max-w-[460px] mx-auto">
        <input
          type="email"
          placeholder="이메일 주소"
          className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white outline-none placeholder:text-white/30 text-sm"
        />
        <button className="px-8 py-4 bg-[var(--theme-accent)] text-white font-bold text-[0.875rem] uppercase tracking-widest hover:brightness-110 transition-[filter]">
          구독하기
        </button>
      </form>
    </div>
  </section>
  );
};
