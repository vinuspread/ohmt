"use client";
import React, { use } from "react";
import Link from "next/link";
import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

const ARTICLES: Record<string, {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  body: string[];
  img: string;
}> = {
  j1: {
    id: "j1",
    title: "조각적 미니멀리즘의 침묵하는 볼륨",
    category: "디자인 대화",
    date: "2026년 5월",
    summary: "활동적인 실루엣, 해부학적 곡선, 그리고 건축적 편안함을 만들어내는 공극의 선 사이의 역동적 상호작용을 탐구합니다.",
    body: [
      "침묵은 부재가 아니다. 그것은 가장 고도로 계획된 형태의 존재다. 미니멀리즘이 패션과 교차하는 지점에서 우리는 종종 오해를 마주한다 - 적음은 게으름이 아니라, 극도의 정밀함이다.",
      "조각적 실루엣은 몸을 지우지 않는다. 오히려 몸의 언어를 재번역한다. 어깨의 각도 하나, 소매 끝단의 무게 하나가 착용자의 존재감을 재정의한다. 이것이 우리가 '볼륨'이라 부르는 것의 본질이다.",
      "우리의 SS26 컬렉션은 이 질문에서 출발했다: 공간이 곧 소재가 될 수 있는가? 재킷의 어깨와 팔 사이의 공기, 코트 헴라인과 바닥 사이의 거리 - 그것들은 설계된 침묵이다.",
      "결과는 입는 것이 아니라 점유하는 것에 가깝다. 각 피스는 착용자 주변의 공간을 재편한다. 당신이 방에 들어설 때, 옷이 먼저 도착한다.",
    ],
    img: "/templates/OHMT001-fashion/branding-custom.jpg",
  },
  j2: {
    id: "j2",
    title: "제로 웨이스트 크래프트: 테일러링 재구성",
    category: "아틀리에 일기",
    date: "2026년 4월",
    summary: "최신 제로 웨이스트 커팅 알고리즘과 로컬 스튜디오에서의 수작업 마감 심 아키텍처를 상세히 소개하는 기술 워크스루.",
    body: [
      "전통적인 테일러링에서 원단의 15-20%는 재단 과정에서 버려진다. 우리 아틀리에는 3년간 이 문제와 씨름했다. 답은 패턴 자체를 재설계하는 것이었다.",
      "제로 웨이스트 커팅은 단순한 환경적 결정이 아니다. 그것은 디자인의 언어를 바꾼다. 버릴 조각이 없을 때, 모든 선은 기능을 가져야 한다. 장식은 구조가 된다.",
      "우리의 커팅 알고리즘은 각 패턴 조각을 퍼즐처럼 맞춘다. 재킷의 칼라 밴드는 트라우저의 벨트 루프가 되고, 소매 거싯은 포켓 라이닝으로 변환된다. 원단 한 장에서 완전한 룩이 나온다.",
      "가장 어려운 것은 솔기였다. 수작업 마감은 느리지만 대체 불가능하다. 기계 바느질이 줄 수 없는 것이 있다 - 장인의 손이 감지하는 원단의 장력, 그 미세한 조정.",
    ],
    img: "/templates/OHMT001-fashion/exclusive-custom.jpg",
  },
  j3: {
    id: "j3",
    title: "아틀리에 일기: 모노리스 소재 조각하기",
    category: "소재 집중",
    date: "2026년 3월",
    summary: "이중 꼬임 소모사와 특수 드라이 피니시가 어떻게 높은 주름 유지력과 움직임 속 영구적 기하학적 강성을 가능하게 하는지.",
    body: [
      "소재는 디자인의 첫 번째 결정이다. 특히 구조적 실루엣을 목표로 할 때, 원단의 물리적 특성은 모든 것을 결정한다 - 드레이프의 각도, 솔기의 선명도, 착용 후 수십 번의 세탁을 견디는 형태 유지력.",
      "이중 꼬임 소모사는 단순한 고급 소재가 아니다. 그것은 건축 자재에 가깝다. 두 겹의 꼬임이 만드는 밀도는 원단에 기억을 심는다 - 접힌 각도를 기억하고, 주름진 선을 기억하고, 의도된 형태를 기억한다.",
      "드라이 피니시는 이 메모리를 강화한다. 표면의 미세한 처리가 섬유 사이의 마찰을 증가시켜, 원단이 공기 중에서 스스로 형태를 유지하게 한다. 이것이 우리가 '조각하는' 이유다 - 재단이 아니라 형태를 부여하는 것이다.",
      "결과는 움직임 속에서도 선이 살아있는 의복이다. 당신이 걸을 때 코트의 헴라인은 흔들리지 않는다. 그것은 건축물처럼 공간 안에 서있다.",
    ],
    img: "/templates/OHMT001-fashion/hero-custom.jpg",
  },
};

export default function JournalArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const article = ARTICLES[id] || ARTICLES.j1;

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white min-h-screen selection:bg-black selection:text-white">
        <Navbar />

        {/* Hero */}
        <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-black mt-[52px]">
          <motion.img
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.65 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            src={article.img}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-10 md:pb-16">
            <p className="text-[11px] text-white/50 uppercase tracking-tight mb-3">{article.category} - {article.date}</p>
            <h1
              className="text-2xl md:text-[2.8vw] font-normal text-white leading-[1.0] tracking-[-0.02em] max-w-3xl"
              style={{ fontFamily: "'Nanum Myeongjo', 'Bodoni Moda', serif" }}
            >
              {article.title}
            </h1>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-[760px] mx-auto px-8 md:px-6 py-16 md:py-24">

          <Link
            href="/ko/templates/OHMT002-fashion-kr/category/journal"
            className="inline-flex items-center gap-2 text-[12px] text-black/40 uppercase tracking-[0.2em] hover:text-black transition-colors mb-12"
          >
            <ArrowLeft size={13} /> 저널로 돌아가기
          </Link>

          <p
            className="text-[18px] md:text-[20px] text-black/60 leading-[1.8] mb-12 font-normal"
            style={{ fontFamily: "'Nanum Myeongjo', 'Bodoni Moda', serif" }}
          >
            {article.summary}
          </p>

          <hr className="border-black/8 mb-12" />

          <div className="space-y-7">
            {article.body.map((para, i) => (
              <p
                key={i}
                className="text-[16px] md:text-[17px] text-black/75 leading-[1.9] font-normal"
                style={{ fontFamily: "'Nanum Myeongjo', 'Bodoni Moda', serif" }}
              >
                {para}
              </p>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-black/8 flex items-center justify-between">
            <span className="text-[12px] text-black/30 uppercase tracking-[0.2em]">VINUSPREAD - {article.date}</span>
            <Link
              href="/ko/templates/OHMT002-fashion-kr/category/journal"
              className="text-[12px] text-black/40 uppercase tracking-[0.2em] hover:text-black transition-colors"
            >
              다음 아티클 →
            </Link>
          </div>
        </div>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}
