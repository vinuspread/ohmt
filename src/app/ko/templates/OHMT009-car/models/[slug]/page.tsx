"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Header } from "../../_components/layout/Header";
import { Footer } from "../../_components/layout/Footer";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

const models = [
  {
    slug: "ev9",
    name: "EV9",
    type: "순수 전기 SUV",
    range: "530km",
    power: "402hp",
    acceleration: "5.3초",
    topSpeed: "200km/h",
    img: "/templates/OHMT009-car/ev9-model.png",
    description: "도시와 자연을 자유롭게 넘나드는 순수 전기 플래그십 SUV. 7인승 넉넉한 공간과 압도적인 주행거리로 어디든 망설임 없이 떠날 수 있습니다.",
    features: ["전방 충돌 방지 보조", "차로 유지 보조", "스마트 크루즈 컨트롤", "서라운드 뷰 모니터", "고속도로 주행 보조 2"],
  },
  {
    slug: "gt7",
    name: "GT7",
    type: "퍼포먼스 세단",
    range: "480km",
    power: "615hp",
    acceleration: "3.5초",
    topSpeed: "260km/h",
    img: "/templates/OHMT009-car/hero-2.jpg",
    description: "트랙에서 단련된 퍼포먼스를 일상으로 가져온 고성능 전기 세단. 듀얼 모터 AWD와 가변형 서스펜션이 모든 도로를 서킷으로 만듭니다.",
    features: ["듀얼 모터 AWD", "전자식 가변 서스펜션", "트랙 모드", "카본 세라믹 브레이크", "스포츠 버킷 시트"],
  },
  {
    slug: "x5",
    name: "X5",
    type: "럭셔리 SUV",
    range: "510km",
    power: "355hp",
    acceleration: "5.8초",
    topSpeed: "210km/h",
    img: "/templates/OHMT009-car/hero-3.jpg",
    description: "클래스를 초월한 럭셔리와 전기차의 혁신이 만나는 프리미엄 SUV. 파노라믹 글라스 루프와 마사지 시트가 동승자 모두를 위한 안락함을 완성합니다.",
    features: ["파노라믹 선루프", "마사지 기능 시트", "23스피커 오디오", "헤드업 디스플레이", "후석 엔터테인먼트"],
  },
  {
    slug: "s3",
    name: "S3",
    type: "컴팩트 비즈니스 세단",
    range: "460km",
    power: "295hp",
    acceleration: "6.1초",
    topSpeed: "195km/h",
    img: "/templates/OHMT009-car/car-2.jpg",
    description: "도심 비즈니스맨을 위한 스마트 컴팩트 세단. 민첩한 주행성과 첨단 커넥티비티로 바쁜 일상을 앞서 나갑니다.",
    features: ["무선 스마트폰 연동", "자동 주차 보조", "음성 인식 제어", "빌트인 캠", "OTA 소프트웨어 업데이트"],
  },
];

function CarModelDetailContent({ params }: { params: { slug: string } }) {
  const model = models.find((m) => m.slug === params.slug);

  if (!model) {
    return (
      <>
        <Header />
        <TemplateWrapper theme={theme}>
          <main className="min-h-screen bg-black pt-32 text-center text-white/40">
            <p>모델을 찾을 수 없습니다.</p>
            <Link href="/ko/templates/OHMT009-car/models" className="mt-6 inline-block text-sm underline">모델 목록으로</Link>
          </main>
        </TemplateWrapper>
      </>
    );
  }

  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
        <main className="antialiased bg-black text-white selection:bg-[var(--theme-accent)] selection:text-black">
          {/* Hero */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <img src={model.img} alt={model.name} className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-0 right-0 max-w-[var(--theme-container)] mx-auto px-5 md:px-[var(--theme-gutter)]">
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-3 block">우리의 라인업</span>
              <h1 className="text-[length:var(--text-display)] font-bold tracking-[-0.04em] leading-none mb-2">{model.name}</h1>
              <p className="text-[0.8rem] uppercase tracking-[0.2em] text-white/50">{model.type}</p>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="max-w-[var(--theme-container)] mx-auto px-5 md:px-[var(--theme-gutter)] pt-8 pb-2">
            <Link href="/ko/templates/OHMT009-car/models" className="inline-flex items-center gap-1.5 text-[0.72rem] uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors">
              <ChevronLeft size={13} />모델 목록
            </Link>
          </div>

          {/* Stats */}
          <section className="max-w-[var(--theme-container)] mx-auto px-5 md:px-[var(--theme-gutter)] py-16 md:py-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
              {[
                { label: "주행거리", value: model.range },
                { label: "출력", value: model.power },
                { label: "제로백", value: model.acceleration },
                { label: "최고속도", value: model.topSpeed },
              ].map((stat) => (
                <div key={stat.label} className="bg-black p-8 md:p-12">
                  <div className="text-[length:var(--text-h2)] font-bold text-[var(--theme-accent)] mb-2">{stat.value}</div>
                  <div className="text-[0.68rem] uppercase tracking-[0.2em] text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Description + Features */}
          <section className="max-w-[var(--theme-container)] mx-auto px-5 md:px-[var(--theme-gutter)] pb-24 grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-5 block">모델 소개</span>
              <p className="text-[1rem] text-white/70 leading-loose break-keep">{model.description}</p>
            </div>
            <div>
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-5 block">주요 기능</span>
              <ul className="space-y-4">
                {model.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-4 text-[0.9rem] text-white/70 border-b border-white/10 pb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="border-t border-white/10 py-16 text-center">
            <Link
              href="/ko/templates/OHMT009-car/configure"
              className="inline-block bg-[var(--theme-accent)] text-black text-[0.75rem] font-bold uppercase tracking-[0.2em] px-12 py-5 hover:opacity-85 transition-opacity"
            >
              {model.name} 구성하기
            </Link>
          </section>

          <Footer />
        </main>
      </TemplateWrapper>
    </>
  );
}

export default function CarModelDetailPage() {
  const routerParams = useParams();
  const slug = (routerParams?.slug || "") as string;
  return (
    <React.Suspense fallback={null}>
      <CarModelDetailContent params={{ slug }} />
    </React.Suspense>
  );
}
