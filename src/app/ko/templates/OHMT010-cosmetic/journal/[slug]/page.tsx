"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Header } from "../../_components/layout/Header";
import { Footer } from "../../_components/layout/Footer";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

const entries = [
  {
    slug: "vitamin-c-science",
    title: "스킨케어 속 비타민 C에 담긴 과학적 메커니즘.",
    date: "2026년 5월 20일",
    read: "5분",
    excerpt: "빛나는 피부를 만드는 비타민 C의 과학적 원리와 그 중요성을 알아봅니다.",
    content: "비타민 C는 스킨케어에서 가장 강력한 항산화 성분 중 하나입니다. 활성산소를 억제하고 콜라겐 합성을 촉진하며 맑은 안색을 선사하는 효능 덕분에 필수적인 원료로 꼽힙니다.\n\n피부 장벽을 안전하고 효과적으로 통과하기 위해서는 성분의 안정성이 핵심입니다. 일반 아스코르브산은 산화되기 쉬워 효능이 빠르게 저하되는 반면, 메종이 개발한 안정화 공법은 활성 상태를 오랫동안 유지하며 피부 깊숙이 전달합니다.\n\n꾸준한 사용으로 색소 침착이 옅어지고, 피부 톤이 균일해지며, 탄력 있는 결이 서서히 형성됩니다. 비타민 C가 당신의 루틴에서 어떤 역할을 할 수 있는지, 지금부터 과학적으로 살펴보겠습니다."
  },
  {
    slug: "packaging-philosophy",
    title: "플라스틱 대신 유리를 선택한 이유: 메종의 패키징 철학.",
    date: "2026년 5월 15일",
    read: "4분",
    excerpt: "지속 가능성은 단순한 구호가 아닌, 지구를 향한 우리의 변치 않는 약속입니다.",
    content: "모든 제품에는 그 안에 담긴 품격에 어울리는 옷이 필요합니다. 유리는 원료 본연의 활성 상태와 온전함을 안전하게 보존하고, 탄소 발자국을 줄이며, 선물과도 같은 프리미엄 언박싱 경험을 완성합니다.\n\n플라스틱은 편리하지만 미세 플라스틱 용출과 재활용의 한계로 환경에 오랜 부담을 줍니다. 반면 유리는 내용물과 화학적으로 반응하지 않아 포뮬러의 순수성을 끝까지 지켜냅니다.\n\n메종의 모든 용기는 재사용 및 재활용을 전제로 설계되었습니다. 용기를 다시 채워 쓰는 리필 프로그램에 참여해 함께 지구를 지켜주세요."
  },
  {
    slug: "morning-routine-guide",
    title: "눈부신 아침 피부를 위한 완벽한 모닝 케어 가이드.",
    date: "2026년 5월 10일",
    read: "8분",
    excerpt: "매일 빛나는 피부결을 위한, 가장 기본적인 첫걸음을 배워보세요.",
    content: "일관된 아침 스킨 루틴은 건강한 피부의 기초를 다집니다. 순한 클렌징부터 철저한 자외선 차단까지, 각 단계가 지닌 고유한 중요성을 설명해 드립니다.\n\n1단계: 순한 젤 클렌저로 야간 피지와 잔여 제품을 부드럽게 제거합니다. 과도한 마찰은 피부 장벽을 손상시킬 수 있으니 손바닥으로 가볍게 거품을 낸 뒤 씻어냅니다.\n\n2단계: 비타민 C 세럼을 2~3방울 덜어 얼굴 전체에 얇게 펴 바릅니다. 흡수될 때까지 1분간 기다립니다.\n\n3단계: 보습제로 수분 장벽을 강화하고 피부를 촉촉하게 마무리합니다.\n\n4단계: 자외선 차단제는 생략할 수 없는 마지막 단계입니다. SPF 50 이상을 충분한 양으로 도포해야 합니다. 당신의 라이프스타일과 고유한 피부 타입에 꼭 맞는 솔루션을 처방해보세요."
  },
  {
    slug: "sustainable-sourcing",
    title: "최상급 유기농 원료를 지속 가능하게 조달하는 메종의 여정.",
    date: "2026년 5월 5일",
    read: "6분",
    excerpt: "윤리적 원료 조달과 최첨단 바이오 스킨케어 과학의 조화로운 만남.",
    content: "모든 보태니컬 원료 뒤에는 자연과 공존하고자 하는 메종의 단단한 서사가 담겨 있습니다. 우리는 공정무역과 유기농 지속 가능한 농법을 준수하는 농부들과 파트너십을 맺어 원료를 수급합니다.\n\n모로코산 아르간 오일부터 스리랑카산 세이론 계피 추출물까지, 각 원료는 원산지에서의 영향을 최소화하면서도 최고의 효능을 발휘할 수 있도록 소량 수확으로 채취됩니다.\n\n우리의 선택이 글로벌 생태계에 미치는 선한 영향력을 믿습니다. 더 나은 성분, 더 나은 포뮬러, 더 나은 지구. 메종의 여정은 여기서 시작됩니다."
  }
];

function JournalDetailContent({ params }: { params: { slug: string } }) {
  const entry = entries.find((e) => e.slug === params.slug);

  if (!entry) {
    return (
      <>
        <Header />
        <TemplateWrapper theme={theme}>
          <main className="min-h-screen pt-32 text-center text-black/40">
            <p>아티클을 찾을 수 없습니다.</p>
            <Link href="/ko/templates/OHMT010-cosmetic/journal" className="mt-6 inline-block text-sm underline">저널로 돌아가기</Link>
          </main>
        </TemplateWrapper>
      </>
    );
  }

  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
        <main className="antialiased bg-[var(--color-bg)] text-black selection:bg-black selection:text-white">
          <section className="pt-48 pb-24 md:pb-40">
            <div className="max-w-[800px] mx-auto px-6 md:px-10">
              <Link href="/ko/templates/OHMT010-cosmetic/journal" className="inline-flex items-center gap-1.5 text-[0.72rem] uppercase tracking-[0.2em] text-black/40 hover:text-black transition-colors mb-12">
                <ChevronLeft size={13} />저널
              </Link>

              <div className="flex gap-6 text-[0.72rem] text-black/40 uppercase tracking-wider mb-6">
                <span>{entry.date}</span>
                <span>읽는 시간 {entry.read}</span>
              </div>

              <h1 className="text-[length:var(--text-h2)] font-normal tracking-tight leading-[var(--leading-heading)] mb-8 break-keep">
                {entry.title}
              </h1>

              <p className="text-[1rem] text-black/50 leading-loose mb-12 break-keep border-l-2 border-black/10 pl-6">
                {entry.excerpt}
              </p>

              <div className="border-t border-black/10 pt-12 space-y-6">
                {entry.content.split("\n\n").map((para, i) => (
                  <p key={i} className="text-[0.95rem] text-black/70 leading-loose break-keep">{para}</p>
                ))}
              </div>

              <div className="mt-16 pt-8 border-t border-black/10">
                <Link href="/ko/templates/OHMT010-cosmetic/journal" className="inline-flex items-center gap-1.5 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-black transition-colors">
                  <ChevronLeft size={14} /> 저널 목록으로
                </Link>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </TemplateWrapper>
    </>
  );
}

export default function JournalDetailPage() {
  const routerParams = useParams();
  const slug = (routerParams?.slug || "") as string;
  return (
    <React.Suspense fallback={null}>
      <JournalDetailContent params={{ slug }} />
    </React.Suspense>
  );
}
