"use client";
import { Suspense } from "react";
import React from "react";
import { motion } from "framer-motion";
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
          <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-black/40 block mb-6">{"에디토리얼"}</span>
          <h1 className="text-5xl md:text-8xl font-serif leading-[1.5] tracking-tighter break-keep">{"신성한 비례"}</h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="aspect-[21/9] w-full bg-black mb-24 overflow-hidden relative"
        >
          <img 
            src="/templates/exhibition/curator.png" 
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
            {"바티칸 미술관은 단순히 역사적 유물의 저장소가 아닌, 완벽을 향한 인류의 끊임없는 열망이 담긴 거대한 기념비와 같습니다. 그 회랑을 거니는 것은 르네상스 시대의 지성과 영혼이 물리적으로 구현된 공간을 직접 마주하는 것과 다름없습니다."}
          </p>
          <p className="mt-8 break-keep">
            {"우리의 큐레이션은 압도적인 장식성 너머에 존재하는 구조적인 눈부심을 포착하고자 합니다. 라오콘(Laocoön)이나 피에타(Pietà)와 같은 걸작들을 고요하고 정제된 디지털 공간에 홀로 세움으로써, 번잡한 미술관의 소음 없이 그 작품들이 지닌 순수한 신학적·감정적 무게감을 오롯이 전하고자 합니다."}
          </p>
          <p className="mt-8 break-keep">
            {"라파엘로가 남긴 붓 터치 하나, 미켈랑젤로의 망치 아래 스러져간 대리석 조각 하나까지, 이 모든 것은 박제된 과거의 유산이 아닙니다. 그것은 인간성, 고통, 지식, 그리고 신성에 대해 인류가 끊임없이 이어가는 대화입니다."}
          </p>
          
          <div className="border-t border-black/20 mt-20 pt-10">
            <span className="text-xs uppercase tracking-[0.4em] font-bold block mb-2">{"큐레이터"}</span>
            <span className="font-serif text-2xl">{"Oh My Template 엑시비션"}</span>
          </div>
        </motion.article>

      </div>
      </main>
      <Footer />
    </>

    </TemplateWrapper>
);
}


export default function CuratorNotePage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <CuratorNotePageContent {...props} />
    </React.Suspense>
  );
}
