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
    title: "마지막 시즌",
    date: "2026년 6월 15일",
    image: "/templates/fashion/journal-hero-v2.png",
    content: `끝과 그 조용한 아름다움에 대한 시각적 명상. 베네치아 석호에서 3일간 촬영되었습니다.

    공기는 소금기와 침묵으로 가득 차 있습니다. 우리는 밀려가는 조수를 바라보며, 영원한 것 같으면서도 찰나처럼 느껴졌던 한 시즌의 마지막 흔적들을 떠나보냅니다. 이 공간에서 옷은 단순한 직물이기를 멈추고 하나의 방패이자 기억, 그리고 두 번째 피부가 됩니다.

    이번 캠페인의 모든 실루엣은 이러한 과도기적 상태를 포착하도록 디자인되었습니다. 바람을 따라 흐르는 가벼운 울 원단, 추위 속에서 편안함을 제공하는 비정형 테일러링, 그리고 베네치아의 석회암과 회색 빛 바다에서 직접 영감을 얻은 컬러 팔레트. 직물의 무게감을 직접 느끼며, 그 조용한 아름다움을 발견해 보시기 바랍니다.`
  },
  {
    id: 2,
    category: "소재",
    title: "일본 데님에 대하여",
    date: "2026년 5월 28일",
    image: "/templates/fashion/hero-custom.jpg",
    content: `셀비지, 무게, 그리고 완벽한 색바램에 대한 집착. 오카야마의 한 공장으로 거슬러 올라갑니다.

    우리가 선보이는 데님의 진정한 성격을 이해하려면 오래된 셔틀 직기의 리듬을 이해해야 합니다. 현대식 초고속 직기 속도의 아주 작은 일부로만 작동하는 이 빈티지 기계들은 기계가 흉내 낼 수 없는 자연스러운 텐션과 구조적인 변화를 직물에 불어넣습니다.

    그 결과 아주 독특하고 풍부한 텍스처를 지닌 표면(slubby)과 스스로 마감된 가장자리인 셀비지(selvedge)가 탄생합니다. 우리는 실을 천연 인디고로 여러 번 반복 염색하여 시간이 흐르고 옷이 길들여질 때 단순히 색이 바래는 것이 아닌, 착용자의 움직임이 깊게 새겨지는 세상에 단 하나뿐인 그라데이션을 만듭니다.`
  },
  {
    id: 3,
    category: "컬렉션",
    title: "조용한 장인정신",
    date: "2026년 5월 10일",
    image: "/templates/fashion/exclusive-lifestyle.png",
    content: `지금까지 가장 기술적으로 까다로운 의복, 구조적 울 오버코트의 솔기 뒤 이야기.

    우리는 진정한 럭셔리란 보이지 않는 곳에 숨겨진 세심한 디테일에 있다고 믿습니다. 우리의 구조적 울 오버코트는 이러한 철학을 고스란히 보여주는 대표적인 제품입니다. 두꺼운 이중직 울 겉감 아래에는 말총 캔버스로 정교하게 설계된 내부 심지가 자리 잡고 있으며, 칼라에 손바느질로 고정되어 주름이 지지 않고 자연스럽게 롤링됩니다.

    겨드랑이 진동선은 높게 재단되고 수작업으로 안착되어, 날렵하고 정돈된 라인을 유지하면서도 활동에 어떠한 제약도 주지 않습니다. 모든 주머니는 코튼 트윌로 튼튼하게 보강되었으며 단춧구멍은 실크사로 마감되었습니다. 한 벌의 오버코트를 완성하기 위해 장인들이 20시간 이상 손수 작업하며, 수십 년 동안 당신을 보호할 옷을 만듭니다.`
  },
  {
    id: 4,
    category: "스타일",
    title: "계절을 위한 옷차림",
    date: "2026년 4월 22일",
    image: "/templates/fashion/branding-custom.jpg",
    content: `당신과 함께 나이 들어가는 캡슐 워드로브를 만들기 위한 실용적인 안내.

    현대의 옷장은 옷이 채 닳기도 전에 유행이 지나버리는 트렌드 제품들로 채워지기 일쑤입니다. 우리는 다른 접근법을 제안합니다. 계절과 세월을 아우르며 자연스럽게 녹아드는 기본 아이템들로 정교하게 큐레이션된 컬렉션입니다.

    세 가지 핵심 요소인 구조적인 울 오버코트, 완벽하게 길들여지는 생지 데님 팬츠, 그리고 묵직한 오가닉 코튼 티셔츠로 시작해 보십시오. 이러한 기본 피스들은 개인의 독특한 개성을 담아낼 캔버스가 됩니다. 소재의 완전성과 비율에 집중하십시오. 천연 섬유로 섬세하게 짜인 옷은 시간이 흐를수록 더 멋지게 드레이프되고 깊이 있는 품격을 만들어 낼 것입니다. 더 적게 선택하되, 더 좋은 것을 선택하십시오.`
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

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-[120px] md:pt-[160px] pb-24">
          <Link
            href="/ko/templates/OHMT001-fashion/journal"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[-0.03em] text-black/60 hover:text-black mb-8 transition-colors group font-bold"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            저널 목록으로 돌아가기
          </Link>

          <article className="max-w-3xl mx-auto">
            <span className="text-[11px] uppercase tracking-[-0.03em] text-black/40 font-bold">{article.category}</span>
            <h1 className="font-[family-name:var(--font-bodoni)] text-[36px] md:text-[56px] text-black font-bold tracking-[-0.04em] mt-4 leading-[1.1]">{article.title}</h1>
            <p className="text-[12px] text-black/40 mt-3 pb-8 border-b border-black/10 tracking-[-0.025em]">{article.date}</p>

            <div className="mt-8 aspect-[21/9] overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>

            <div className="mt-12 space-y-6">
              {paragraphs.map((p, index) => (
                <p key={index} className="text-[15px] text-black/70 leading-relaxed break-keep tracking-[-0.025em]">
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
