"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

const ARTICLES_KO = [
  {
    id: 1,
    category: "캠페인",
    title: "베네치아에서 기록한 마지막 여름",
    date: "2026년 6월 15일",
    image: "/templates/OHMT001-fashion/journal-hero-v2.png",
    content: `베네치아 석호에서 봄·여름 컬렉션의 마지막 캠페인을 촬영했습니다. 흐린 하늘과 잔잔한 수면, 오래된 건축물의 빛바랜 색이 이번 컬렉션의 차분한 색감과 자연스럽게 어우러졌습니다.

    가벼운 울 재킷과 오간자 드레스는 바람에 따라 부드럽게 움직입니다. 옷만 강조하기보다 실제 공간에서 소재가 어떻게 빛을 받고, 걸을 때 실루엣이 어떻게 달라지는지 보여주는 데 집중했습니다.

    이번 캠페인을 통해 제품 사진만으로는 확인하기 어려운 소재의 무게감과 움직임을 살펴볼 수 있습니다.`
  },
  {
    id: 2,
    category: "소재",
    title: "셀비지 데님은 어떻게 달라지는가",
    date: "2026년 5월 28일",
    image: "/templates/OHMT001-fashion/hero-custom.jpg",
    content: `오카야마의 일부 데님 공장에서는 지금도 오래된 셔틀 직기로 천을 짭니다. 생산 속도는 느리지만 실에 미세한 차이가 생겨 표면에 자연스러운 요철과 깊은 질감이 남습니다. 천의 가장자리가 풀리지 않도록 함께 짜이는 셀비지 역시 이 방식의 특징입니다.

    원사는 인디고로 여러 차례 염색합니다. 겉은 짙게 물들고 실의 중심에는 밝은 색이 남아, 입고 세탁할수록 자주 닿는 부분부터 서서히 색이 옅어집니다. 무릎과 주머니, 밑단에 각자의 움직임이 흔적으로 남는 이유입니다.

    셀비지 데님은 처음에는 다소 단단하지만 입을수록 몸에 맞게 부드러워집니다. 세탁 횟수와 착용 습관에 따라 색과 형태가 달라지는 점도 이 소재를 오래 입는 즐거움 중 하나입니다.`
  },
  {
    id: 3,
    category: "컬렉션",
    title: "울 오버코트 안쪽의 설계",
    date: "2026년 5월 10일",
    image: "/templates/OHMT001-fashion/exclusive-lifestyle.png",
    content: `울 오버코트는 겉감만으로 형태가 완성되지 않습니다. 안쪽에는 옷의 중심을 잡아주는 심지를 넣고, 칼라와 라펠은 자연스럽게 접히도록 여러 지점을 손바느질로 고정합니다.

    소매와 진동의 위치는 팔을 움직일 때 불편하지 않도록 피팅을 거쳐 조정합니다. 주머니 안쪽과 마찰이 잦은 부분은 코튼 트윌로 보강하고, 단춧구멍과 가장자리는 쉽게 닳지 않도록 촘촘하게 마감합니다.

    완성까지 시간이 오래 걸리는 이유는 겉으로 보이는 실루엣뿐 아니라 실제로 입었을 때의 움직임과 내구성을 함께 확인하기 때문입니다. 오래 입은 뒤에도 필요한 부분을 수선할 수 있도록 구조를 단순하고 견고하게 설계했습니다.`
  },
  {
    id: 4,
    category: "스타일",
    title: "적은 옷으로 계절을 보내는 법",
    date: "2026년 4월 22일",
    image: "/templates/OHMT001-fashion/branding-custom.jpg",
    content: `옷장을 새로 채우기보다 자주 입는 옷부터 살펴보세요. 단정한 코트와 재킷, 몸에 맞게 길들여지는 데님, 형태가 쉽게 무너지지 않는 티셔츠처럼 서로 함께 입기 쉬운 옷이 좋은 출발점입니다.

    색상은 세 가지 정도의 기본색을 정해두면 조합이 훨씬 간단해집니다. 구매 전에는 눈에 띄는 디자인만 보기보다 착용감과 세탁 방법, 이미 가지고 있는 옷과 얼마나 잘 어울리는지를 확인하는 것이 좋습니다.

    계절마다 옷을 크게 바꾸기보다 셔츠와 니트, 아우터를 겹쳐 입는 방식으로 활용하면 적은 수의 옷으로도 다양한 차림을 만들 수 있습니다.`
  }
];

function JournalDetailContent() {
  const params = useParams();
  const articleId = Number(params?.id);
  const article = ARTICLES_KO.find(a => a.id === articleId) || ARTICLES_KO[0];

  const paragraphs = article.content.split("\n\n");

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-white">
        <Navbar />

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-30 md:pt-40 pb-24">
          <Link
            href="/ko/templates/OHMT001-fashion/journal"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[-0.03em] text-black/60 hover:text-black mb-8 transition-colors group font-bold"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            저널 목록으로
          </Link>

          <article className="max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[-0.03em] text-black/40 font-bold">{article.category}</span>
            <h1 className="font-[family-name:var(--font-bodoni)] text-4xl md:text-6xl text-black font-normal tracking-[-0.04em] mt-4 leading-[var(--leading-heading)]">{article.title}</h1>
            <p className="text-xs text-black/40 mt-3 pb-8 border-b border-black/10 tracking-[-0.025em]">{article.date}</p>

            <div className="mt-8 aspect-[21/9] overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>

            <div className="mt-12 space-y-6">
              {paragraphs.map((p, index) => (
                <p key={index} className="text-sm text-black/70 leading-relaxed break-keep tracking-[-0.025em]">
                  {p.trim()}
                </p>
              ))}
            </div>
          </article>
        </div>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function JournalDetailPage() {
  return (
    <React.Suspense fallback={null}>
      <JournalDetailContent />
    </React.Suspense>
  );
}
