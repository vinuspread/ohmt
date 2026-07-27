"use client";
import { Suspense } from "react";
import React from "react";
import { motion } from "motion/react";
import Header from "../_components/layout/Header";
import Footer from "../_components/layout/Footer";

import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function CuratorNotePageContent() {

  return (

    <TemplateWrapper theme={theme}>

      <>
      <Header />
      <main className="min-h-screen bg-[var(--color-accent)] text-[var(--color-primary)] pt-20 md:pt-40 pb-16 md:pb-32">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-xs uppercase font-bold tracking-[0.5em] text-black/40 block mb-6">{"큐레이터 노트"}</span>
          <h1 className="text-5xl md:text-8xl font-serif leading-[var(--leading-heading)] tracking-tighter break-keep">{"작품 속 비례와 질서"}</h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="aspect-[21/9] w-full bg-black mb-24 overflow-hidden relative"
        >
          <img 
            src="/templates/OHMT021-museum/curator.png" 
            alt="Curator Note Architecture"
            className="w-full h-full object-cover grayscale opacity-90"
          />
        </motion.div>

        <motion.article 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="prose prose-lg md:prose-xl font-serif mx-auto text-black/80 leading-relaxed"
        >
          <p className="first-letter:text-7xl first-letter:font-bold first-letter:float-left first-letter:mr-4 first-letter:mt-2 break-keep">
            바티칸 미술관은 여러 시대의 예술과 기록이 한곳에 쌓인 공간입니다.<br className="hidden md:block" />
            회랑을 따라 걷다 보면 르네상스의 생각과 기술이 작품과 건축에 어떻게 남아 있는지 자연스럽게 확인할 수 있습니다.
          </p>
          <p className="mt-8 break-keep">
            이번 큐레이션은 화려한 장식보다 작품의 구조와 표정에 집중합니다.<br className="hidden md:block" />
            라오콘 군상과 피에타를 한 점씩 자세히 살펴보며, 조각에 담긴 긴장과 감정을 차분하게 전합니다.
          </p>
          <p className="mt-8 break-keep">
            라파엘로의 붓질과 미켈란젤로가 다듬은 대리석은 과거에만 머물지 않습니다.<br className="hidden md:block" />
            인간의 감정과 지식, 믿음에 관한 질문을 지금도 이어갑니다.
          </p>
          
          <div className="border-t border-black/20 mt-20 pt-10">
            <span className="text-xs uppercase tracking-[0.4em] font-bold block mb-2">{"큐레이터"}</span>
            <span className="font-serif text-2xl">{"OHMT 미술관"}</span>
          </div>
        </motion.article>

      </div>
      </main>
      <Footer />
    </>

    </TemplateWrapper>
);
}


export default function CuratorNotePage(props: Record<string, unknown>) {
  return (
    <React.Suspense fallback={null}>
      <CuratorNotePageContent {...props} />
    </React.Suspense>
  );
}
