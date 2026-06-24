"use client";

import { Suspense } from "react";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const categoryContent: Record<string, { title: string; articles: Array<{ title: string; slug: string; excerpt: string; author: string; time: string; image: number }> }> = {
  world: {
    title: "국제 뉴스",
    articles: [
      { title: "제네바에서 글로벌 무역 회담 전격 재개", slug: "global-trade-talks", excerpt: "각국 대표단, 역사적 무역 협정 프레임워크 타결을 위해 머리를 맞대다.", author: "제임스 미첼", time: "2시간 전", image: 1 },
      { title: "신흥 시장의 견고한 성장세 지속 전망", slug: "emerging-markets-growth", excerpt: "동남아시아 주요 신흥국, 글로벌 평균 성장률 가볍게 상회.", author: "리사 첸", time: "4시간 전", image: 2 },
      { title: "기후 정상회의, 5,000억 달러 기금 조성 극적 타결", slug: "climate-summit-fund", excerpt: "선진국들, 기후 위기 극복 및 친환경 에너지 전환 가속화를 위한 대규모 재정 지원 합의.", author: "토마스 그린", time: "6시간 전", image: 3 },
      { title: "국제사법재판소, 오랜 영토 분쟁 최종 판결", slug: "border-dispute-ruling", excerpt: "역사적 판결로 갈등 매듭... 지역 지정학적 구도 재편 예고.", author: "마리아 로드리게스", time: "8시간 전", image: 4 }
    ]
  },
  politics: {
    title: "정치",
    articles: [
      { title: "의회, 역사적인 역사적 개혁 법안 전격 통과", slug: "parliament-legislation", excerpt: "새로운 선거 제도 개혁안 즉시 효력 발생... 정치권 지각변동 예고.", author: "데이비드 스털링", time: "1시간 전", image: 2 },
      { title: "선관위, 투개표 투명성 제고를 위한 고강도 신규 절차 발표", slug: "election-procedures", excerpt: "유권자 신뢰 회복을 위한 겹겹의 신뢰성 검증 제도 도입.", author: "사라 젠킨스", time: "3시간 전", image: 3 },
      { title: "연합정부 구성 협상 최종 분수령... 막판 조율 돌입", slug: "coalition-negotiations", excerpt: "마감 시한을 앞두고 다당제 연합정부 구성을 위한 양측 협상 최고조.", author: "로버트 월시", time: "5시간 전", image: 4 },
      { title: "여야 지도부, 민생 경제 정책 논의차 긴급 회동", slug: "economic-policy-meeting", excerpt: "초당적 협력을 통한 국가 재정 전략 및 규제 혁신 움직임 본격화.", author: "엠마 톰슨", time: "7시간 전", image: 1 }
    ]
  },
  economy: {
    title: "경제",
    articles: [
      { title: "금융 규제 개혁 호재 속 글로벌 증시 일제히 랠리", slug: "markets-banking-reforms", excerpt: "투자 심리 완연한 회복세에 힘입어 반 년 만에 최고치 경신.", author: "마이클 브룩스", time: "30분 전", image: 3 },
      { title: "중앙은행, 기준금리 동결 전격 결정", slug: "interest-rates-steady", excerpt: "소비자 물가 안정세 유지에 따른 합리적 거시경제적 판단.", author: "캐롤라인 프라이스", time: "1시간 전", image: 4 },
      { title: "기술 산업 주도의 신규 고용 급증세 지속", slug: "tech-job-creation", excerpt: "노동 시장 훈풍... 실업률 5년 만에 최저 수준으로 급감.", author: "앨런 포스터", time: "3시간 전", image: 1 },
      { title: "부동산 시장, 바닥 다지고 마침내 완연한 회복 조짐", slug: "real-estate-recovery", excerpt: "자산 가치 조정을 거친 후 전국 주요 거점 가격 안착세 진입.", author: "빅토리아 뉴먼", time: "5시간 전", image: 2 }
    ]
  },
  tech: {
    title: "IT/과학",
    articles: [
      { title: "AI 기술 혁신: 새로운 거대 모델의 압도적 성능 입증", slug: "ai-breakthrough", excerpt: "글로벌 연구진, 머신러닝 분야의 기념비적 기술적 도약 공식 선언.", author: "알렉스 쿠마르 박사", time: "1시간 전", image: 4 },
      { title: "양자 컴퓨팅 기술, 또 하나의 거대한 이정표 달성", slug: "quantum-milestone", excerpt: "자체 개발 프로토타입 프로세서, 초고난도 다차원 최적화 난제 단 몇 초 만에 해결.", author: "레베카 리 박사", time: "3시간 전", image: 1 },
      { title: "스마트 기기 혁신 주기 극적 가속화", slug: "smartphone-innovation", excerpt: "차세대 하드웨어 및 온디바이스 AI 결합으로 사용자 생산성 기하급수적 향상.", author: "마커스 첸", time: "5시간 전", image: 2 },
      { title: "글로벌 보안 위협 고조에 따른 신규 보안 프레임워크 출범", slug: "cybersecurity-framework", excerpt: "전 세계 주요 IT 기구 참여, 초국가적 데이터 보호 표준 공조 체계 수립.", author: "조나단 블레이크", time: "7시간 전", image: 3 }
    ]
  },
  culture: {
    title: "문화 & 예술",
    articles: [
      { title: "국립 미술관, 오랜 세월 유실되었던 거장의 걸작 극적 입수", slug: "museum-masterpiece", excerpt: "기적적으로 재발견된 미공개 오리지널 유작, 가치 5천만 달러 상회 추산.", author: "이사벨라 로마노", time: "2시간 전", image: 2 },
      { title: "영화제 개막... 실험적 독립 영화인들의 뜨거운 축제", slug: "film-festival", excerpt: "역대 최대 관람객 몰려... 스트리밍 시대 속 대중문화 트렌드의 변화 증명.", author: "오스카 델가도", time: "4시간 전", image: 3 },
      { title: "발레단, 클래식과 현대 무용 융합한 파격 신작 쇼케이스 프리미어", slug: "ballet-premiere", excerpt: "전통적 우아함과 파격적인 컨템포러리 안무의 완벽한 결합으로 관객 매료.", author: "빅토리아 레인", time: "6시간 전", image: 4 },
      { title: "음원 스트리밍 서비스, 역대 최고 구독률 경신", slug: "music-streaming-growth", excerpt: "사용자 잔류 시간 및 참여도 역대 최고치 기록... 디지털 미디어 산업 지각변동.", author: "네이슨 스콧", time: "8시간 전", image: 1 }
    ]
  },
  sports: {
    title: "스포츠",
    articles: [
      { title: "챔피언십 파이널, 끝없는 언더독의 기적적인 드라마틱 우승", slug: "championship-final-delivers", excerpt: "막강한 우승 후보 꺾고 연장전 혈투 끝에 극적인 우승 트로피 거머쥐다.", author: "제임스 패터슨", time: "1시간 전", image: 1 },
      { title: "2032년 하계 올림픽 개최 도시 최종 선정 완료", slug: "olympic-venue-2032", excerpt: "국제올림픽위원회, 치열했던 다국적 유치 경쟁 끝에 최종 개최지 공식 발표.", author: "소피아 마르티네스", time: "3시간 전", image: 2 },
      { title: "테니스 샛별, 유력 우승 후보 무너뜨리며 메이저 그랜드슬램 달성", slug: "tennis-grand-slam", excerpt: "비시드 선수가 써 내려간 감동적인 이변과 세대 교체의 드라마.", author: "윌리엄 헤이즈", time: "5시간 전", image: 3 },
      { title: "세계 육상 선수권 대회, 쏟아지는 세계 신기록의 향연", slug: "world-championships-records", excerpt: "인간의 한계 극복... 장기 집권하던 마의 장벽들이 차례로 허물어지다.", author: "안젤라 피어스", time: "7시간 전", image: 4 }
    ]
  }
};

function CategoryPageContent({ params }: { params: Promise<{ category: string }> }) {
  const { category } = React.use(params);
  const content = categoryContent[category.toLowerCase()] || categoryContent.world;

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white text-[var(--color-secondary)] selection:bg-[var(--color-primary)] selection:text-white">
        <Header />

        <div className="max-w-[1280px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-12 border-b-2 border-black"
          >
            <h1 className="font-[family-name:var(--theme-font-heading)] text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight mb-2 tracking-[-0.03em]">
              {content.title}
            </h1>
            <p className="text-[1rem] text-[#555] font-sans">{content.title} 분야의 가장 신속하고 정확한 심층 보도</p>
          </motion.div>

          <div className="py-12">
            <div className="grid md:grid-cols-2 gap-12">
              {content.articles.map((article, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="pb-8 border-b border-[var(--color-border)] group"
                >
                  <Link href={`/ko/templates/OHMT013-newspaper-KO/${category}/${article.slug}`}>
                    <img
                      src={`/templates/newspaper/news-${article.image}.jpg`}
                      className="w-full h-64 object-cover mb-4 group-hover:opacity-80 transition-opacity"
                      alt={article.title}
                    />
                  </Link>
                  <h2 className="font-[family-name:var(--theme-font-heading)] text-[1.3rem] font-bold leading-snug mb-3 group-hover:text-[var(--color-primary)] transition-colors tracking-[-0.03em]">
                    <Link href={`/ko/templates/OHMT013-newspaper-KO/${category}/${article.slug}`}>{article.title}</Link>
                  </h2>
                  <p className="text-[0.95rem] text-[#555] font-sans leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="font-sans text-[0.75rem] text-[#999] uppercase tracking-wide">
                    By <strong className="text-[#555]">{article.author}</strong> · {article.time}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function CategoryPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <CategoryPageContent {...props} />
    </React.Suspense>
  );
}
