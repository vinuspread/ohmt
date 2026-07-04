"use client";
import React from "react";
import { useParams } from "next/navigation";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

const PRODUCTS_KO = [
  { id: 1, name: "다이아몬드 솔리테어 반지", price: "₩4,250,000", img: "/templates/OHMT002-jewelry/jewelry-ring.png", category: "engagement" },
  { id: 2, name: "로즈 골드 인피니티 밴드", price: "₩3,400,000", img: "/templates/OHMT002-jewelry/infinity-band.png", category: "engagement" },
  { id: 3, name: "에메랄드 컷 헤일로 반지", price: "₩6,800,000", img: "/templates/OHMT002-jewelry/emerald-cut-ring.png", category: "engagement" },
  { id: 4, name: "레이디언트 펄 펜던트", price: "₩1,850,000", img: "/templates/OHMT002-jewelry/jewelry-pendant.png", category: "collections" },
  { id: 5, name: "클래식 테니스 다이아몬드 목걸이", price: "₩15,500,000", img: "/templates/OHMT002-jewelry/tennis-necklace.png", category: "high-jewelry" },
  { id: 6, name: "티파니 블루 사파이어 뱅글", price: "₩12,200,000", img: "/templates/OHMT002-jewelry/bangle-item.png", category: "high-jewelry" },
  { id: 7, name: "골드 링크 체인 팔찌", price: "₩2,950,000", img: "/templates/OHMT002-jewelry/gold-link-bracelet.png", category: "high-jewelry" },
  { id: 8, name: "다이아몬드 스터드 귀걸이", price: "₩1,250,000", img: "/templates/OHMT002-jewelry/diamond-studs.png", category: "collections" },
  { id: 9, name: "펄 드롭 아코야 귀걸이", price: "₩980,000", img: "/templates/OHMT002-jewelry/pearl-drop-earrings.png", category: "collections" },
  { id: 10, name: "에메랄드 샹들리에 귀걸이", price: "₩18,900,000", img: "/templates/OHMT002-jewelry/emerald-chandelier.png", category: "high-jewelry" },
];

const CATEGORY_ASSETS_KO: Record<string, { bg: string; eyebrow: string }> = {
  collections: { bg: "/templates/OHMT002-jewelry/category-atelier.png", eyebrow: "부티크" },
  engagement: { bg: "/templates/OHMT002-jewelry/category-engagement.png", eyebrow: "부티크" },
  "high-jewelry": { bg: "/templates/OHMT002-jewelry/category-high-jewelry.png", eyebrow: "오트 주얼리" },
  about: { bg: "/templates/OHMT002-jewelry/jewelry-craft.png", eyebrow: "브랜드 스토리" },
};

function CategoryContent() {
  const params = useParams();
  const categoryId = String(params?.id || "collections");

  const assetKo = CATEGORY_ASSETS_KO[categoryId] || CATEGORY_ASSETS_KO.collections;

  const filteredProducts = PRODUCTS_KO.filter(p => {
    if (categoryId === "collections") return true;
    return p.category === categoryId;
  });

  const getCategoryTitle = () => {
    switch (categoryId) {
      case "collections": return "더 컬렉션";
      case "engagement": return "약혼 & 웨딩";
      case "high-jewelry": return "하이 주얼리";
      case "about": return "하우스의 헤리티지";
      default: return "파인 주얼리";
    }
  };

  const getCategoryDesc = () => {
    switch (categoryId) {
      case "collections": return "매일 착용하고 소중히 간직할 수 있도록 큐레이션된 모던 클래식 피스들.";
      case "engagement": return "영원의 약속을 간직할 수 있도록 장인의 손길로 정교하게 세팅된 다이아몬드 반지.";
      case "high-jewelry": return "독보적인 광채와 극도로 희귀한 원석들로 완성된 하우스의 걸작 컬렉션.";
      case "about": return "한 세기 동안 이어져 온 장인정신의 집념, 당신의 가장 빛나는 순간을 위해 존재합니다.";
      default: return "OHMT 파인 주얼리만의 독보적인 브릴리언스를 만나보세요.";
    }
  };

  return (
    <TemplateWrapper theme={theme}>
      <main className="min-h-screen bg-[var(--color-bg)] selection:bg-[var(--color-primary)] selection:text-white font-sans text-neutral-900">
        <Navbar />

        {/* Category Header - h-[40vh] */}
        <section className="relative h-[40vh] min-h-[320px] overflow-hidden flex items-center justify-center">
          <img
            src={assetKo.bg}
            alt={getCategoryTitle()}
            className="absolute inset-0 w-full h-full object-cover brightness-[0.65] contrast-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/45" />
          <div className="relative z-10 text-center px-6">
            <span className="text-[13px] text-white/80 mb-3 block tracking-[-0.03em] font-bold uppercase">
              {assetKo.eyebrow}
            </span>
            <h1 className="font-serif text-[clamp(2rem,4vw,4rem)] font-bold text-white leading-[1.1] tracking-[-0.04em]">
              {getCategoryTitle()}
            </h1>
            <p className="text-[15px] text-white/70 max-w-xl mx-auto mt-4 leading-relaxed break-keep tracking-[-0.025em]">
              {getCategoryDesc()}
            </p>
          </div>
        </section>

        {categoryId === "about" ? (
          /* About Page Content — split into multiple full-width sections for alternating backgrounds */
          <>
            {/* Story Grid Section */}
            <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
              <div className="max-w-[1440px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                  <div className="aspect-[4/5] overflow-hidden bg-white border border-neutral-100 shadow-sm">
                    <img src="/templates/OHMT002-jewelry/jewelry-visual-detail.png" alt="Craftsmanship" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-6">
                    <span className="text-[13px] uppercase tracking-[-0.03em] text-neutral-500 font-bold">장인 기술</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-neutral-900 leading-[1.1] tracking-[-0.04em]">장인정신의 영혼을 담은 마감</h2>
                    <p className="text-[15px] text-neutral-600 leading-relaxed break-keep tracking-[-0.025em]">
                      원석 본연의 순수한 엘레강스를 보존하겠다는 집념으로 설립된 OHMT 파인 주얼리는 자연이 빚어낸 거친 아름다움과 하이엔드 디자인을 연결하는 다리입니다. 모든 개별 패싯은 숙련된 마장 장인들의 수작업으로 직접 세팅되고 폴리싱되며, 하나의 돌에서 최고의 불꽃을 끌어내기 위해 수백 시간을 헌신합니다.
                    </p>
                    <p className="text-[15px] text-neutral-600 leading-relaxed break-keep tracking-[-0.025em]">
                      우리는 변치 않는 가치를 지향합니다. 빠르게 흘러가는 유행의 홍수 속에서, 우리의 주얼리는 대를 이어 전달되며 삶의 영원한 약속과 소중한 추억을 온전히 간직하도록 디자인되었습니다.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Three Pillars Section */}
            <section className="py-20 md:py-28 px-6 md:px-12 bg-[#FAF9F6] border-y border-neutral-200/50">
              <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-16">
                  <span className="text-[12px] uppercase tracking-[0.3em] text-neutral-400 font-bold">브랜드 철학</span>
                  <h3 className="text-2xl md:text-4xl font-serif font-bold text-neutral-900 mt-2 tracking-[-0.03em]">OHMT를 지탱하는 3대 철학</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                  <div className="bg-white p-8 md:p-10 border border-neutral-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.01)] space-y-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center mx-auto text-[18px] font-serif text-white font-bold">I</div>
                    <h4 className="text-lg font-serif font-bold text-neutral-800 tracking-[-0.02em]">윤리적 원석 조달</h4>
                    <p className="text-[14px] text-neutral-500 leading-relaxed max-w-xs mx-auto break-keep tracking-[-0.02em]">
                      모든 원석의 유통 과정을 엄격히 추적하여 분쟁 없는 광산에서 투명하고 책임감 있게 채굴된 원석만을 사용합니다.
                    </p>
                  </div>
                  <div className="bg-white p-8 md:p-10 border border-neutral-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.01)] space-y-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center mx-auto text-[18px] font-serif text-white font-bold">II</div>
                    <h4 className="text-lg font-serif font-bold text-neutral-800 tracking-[-0.02em]">독보적인 커팅 기법</h4>
                    <p className="text-[14px] text-neutral-500 leading-relaxed max-w-xs mx-auto break-keep tracking-[-0.02em]">
                      숙련된 원석 세공 장인들이 각 원석의 굴절률을 극대화하는 정밀한 커팅과 폴리싱으로 독보적인 광채를 구현합니다.
                    </p>
                  </div>
                  <div className="bg-white p-8 md:p-10 border border-neutral-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.01)] space-y-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center mx-auto text-[18px] font-serif text-white font-bold">III</div>
                    <h4 className="text-lg font-serif font-bold text-neutral-800 tracking-[-0.02em]">대를 잇는 헤리티지</h4>
                    <p className="text-[14px] text-neutral-500 leading-relaxed max-w-xs mx-auto break-keep tracking-[-0.02em]">
                      세월의 흐름에 흔들리지 않는 완벽한 균형감과 무게감으로 설계되어 세대를 넘어 전해지도록 제작됩니다.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Legacy Chronicles (Timeline) */}
            <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
              <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-12">
                  <span className="text-[12px] uppercase tracking-[0.3em] text-neutral-400 font-bold">우리의 유산</span>
                  <h3 className="text-2xl md:text-4xl font-serif font-bold text-neutral-900 mt-2 tracking-[-0.03em]">광채의 역사</h3>
                </div>
                <div className="max-w-5xl mx-auto space-y-8 relative before:absolute before:inset-y-0 before:left-4 md:before:left-1/2 before:w-[1px] before:bg-neutral-200">
                  
                  {/* 1924 */}
                  <div className="relative flex flex-col md:flex-row items-start md:justify-between">
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white -translate-x-[7px] md:-translate-x-2 z-10" />
                    <div className="w-full md:w-[47%] pl-10 md:pl-0 md:pr-10 md:text-right">
                      <div className="bg-white p-6 md:p-8 border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-transform hover:-translate-y-1 inline-block text-left w-full">
                        <span className="text-[20px] md:text-[22px] font-serif font-bold text-[var(--color-primary)]">1924</span>
                        <h4 className="text-[16px] md:text-[17px] font-serif font-bold text-neutral-800 mt-1">첫 공방의 시작</h4>
                        <p className="text-[14px] text-neutral-500 mt-2 leading-relaxed break-keep tracking-[-0.025em]">
                          창립자가 파리에 첫 번째 작은 아틀리에를 열고, 자연 상태 그대로의 정제되지 않은 다이아몬드로 하이 주얼리를 만들기 위해 평생을 헌신하기 시작했습니다.
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block w-[47%]" />
                  </div>

                  {/* 1968 */}
                  <div className="relative flex flex-col md:flex-row items-start md:justify-between">
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white -translate-x-[7px] md:-translate-x-2 z-10" />
                    <div className="hidden md:block w-[47%]" />
                    <div className="w-full md:w-[47%] pl-10 md:pl-10">
                      <div className="bg-white p-6 md:p-8 border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-transform hover:-translate-y-1 inline-block w-full">
                        <span className="text-[20px] md:text-[22px] font-serif font-bold text-[var(--color-primary)]">1968</span>
                        <h4 className="text-[16px] md:text-[17px] font-serif font-bold text-neutral-800 mt-1">왕실 조달 하우스 지정</h4>
                        <p className="text-[14px] text-neutral-500 mt-2 leading-relaxed break-keep tracking-[-0.025em]">
                          유럽 전역의 황실과 왕가에 오직 한 사람만을 위한 커스텀 주얼리를 제작하여 독점 납품하는 최고의 가문으로 공식 인정받았습니다.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 2002 */}
                  <div className="relative flex flex-col md:flex-row items-start md:justify-between">
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white -translate-x-[7px] md:-translate-x-2 z-10" />
                    <div className="w-full md:w-[47%] pl-10 md:pl-0 md:pr-10 md:text-right">
                      <div className="bg-white p-6 md:p-8 border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-transform hover:-translate-y-1 inline-block text-left w-full">
                        <span className="text-[20px] md:text-[22px] font-serif font-bold text-[var(--color-primary)]">2002</span>
                        <h4 className="text-[16px] md:text-[17px] font-serif font-bold text-neutral-800 mt-1">글로벌 영토 확장</h4>
                        <p className="text-[14px] text-neutral-500 mt-2 leading-relaxed break-keep tracking-[-0.025em]">
                          뉴욕과 도쿄의 핵심가에 글로벌 플래그십 살롱을 개설하여 브랜드의 독보적인 다이아몬드 커팅 서명을 널리 확립했습니다.
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block w-[47%]" />
                  </div>

                  {/* 2026 */}
                  <div className="relative flex flex-col md:flex-row items-start md:justify-between">
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white -translate-x-[7px] md:-translate-x-2 z-10" />
                    <div className="hidden md:block w-[46%]" />
                    <div className="w-full md:w-[46%] pl-10 md:pl-8">
                      <div className="bg-white p-6 md:p-8 border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-transform hover:-translate-y-1 inline-block w-full">
                        <span className="text-[20px] md:text-[22px] font-serif font-bold text-[var(--color-primary)]">2026</span>
                        <h4 className="text-[16px] md:text-[17px] font-serif font-bold text-neutral-800 mt-1">새로운 주얼리 유산의 선언</h4>
                        <p className="text-[14px] text-neutral-500 mt-2 leading-relaxed break-keep tracking-[-0.025em]">
                          공정무역 원석 사용, 제조 전 과정의 탄소 배출 저감, 블록체인을 통한 유통 투명성을 보장하는 윤리적 헤리티지 캠페인을 전 세계에 선포했습니다.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* Pledge Box Section */}
            <section className="pb-24 px-6 md:px-12 bg-white">
              <div className="max-w-[1440px] mx-auto">
                <div className="bg-[#1C1C1A] border-t-2 border-t-[var(--color-primary)] border-x border-b border-neutral-800 p-10 md:p-16 text-center max-w-5xl mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                  <span className="text-[11px] tracking-[0.3em] text-[var(--color-primary)] font-bold uppercase block mb-3">우리의 약속</span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6">OHMT의 영원한 보증</h3>
                  <p className="text-[16px] md:text-[18px] text-neutral-300 leading-relaxed max-w-2xl mx-auto font-light break-keep">
                    모든 구매 품목에는 정품 인증서, 평생 장인정신 보증서와 함께<br className="hidden md:block" /> 제품 수명 동안 무상 사이즈 조절 및 클리닝 서비스가 제공됩니다.
                  </p>
                </div>
              </div>
            </section>
          </>
        ) : (
          /* Products Grid Content */
          <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
            <div className="max-w-[1440px] mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {filteredProducts.map((item) => (
                  <div key={item.id} className="group cursor-pointer">
                    <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-[var(--color-bg-secondary)]">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover scale-[1.06] group-hover:scale-[1.12] transition-transform duration-[2.5s] ease-out" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                        <button className="w-full py-4 bg-[var(--color-primary)] text-white text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-neutral-900 transition-colors rounded-none">
                          상담 예약 신청
                        </button>
                      </div>
                    </div>
                    <div className="space-y-1 text-center">
                      <h4 className="text-sm md:text-base font-serif font-bold text-neutral-800 group-hover:text-[var(--color-primary)] transition-colors leading-[1.1] truncate tracking-[-0.03em]">
                        {item.name}
                      </h4>
                      <p className="text-sm text-neutral-500 font-bold tracking-[-0.025em]">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function CategoryPage() {
  return (
    <React.Suspense fallback={null}>
      <CategoryContent />
    </React.Suspense>
  );
}