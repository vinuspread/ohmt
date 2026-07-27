"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/sections/Footer";
import { SplitHeading } from "../_components/ui/SplitHeading";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    label: "주행거리",
    heading: "한 번 충전으로 도심 280km.",
    body: "한 번 충전으로 최대 280km를 주행합니다. 출퇴근과 일상적인 도심 이동을 여유 있게 이어갈 수 있습니다.",
    stat: "280 km",
    image: "highlight-range.jpg",
  },
  {
    label: "충전",
    heading: "30분 만에 80% 충전.",
    body: "최대 80kW DC 급속 충전을 지원합니다. 짧은 휴식 시간에도 필요한 전력을 빠르게 채울 수 있습니다.",
    stat: "30분",
    image: "highlight-charge.jpg",
  },
  {
    label: "디자인",
    heading: "도시에서 눈에 띄는 실루엣.",
    body: "일곱 가지 외장 컬러와 시그니처 LED, 균형 잡힌 차체 비율로 NUBI만의 인상을 완성했습니다.",
    stat: "7가지 컬러",
    image: "highlight-design.jpg",
  },
  {
    label: "실내",
    heading: "간결한 조작과 여유로운 실내.",
    body: "10.4인치 디스플레이와 열선 시트, 부드러운 소재를 적용해 작은 차체 안에서도 편안한 공간을 만들었습니다.",
    stat: "10.4인치",
    image: "highlight-interior.jpg",
  },
  {
    label: "주차 보조",
    heading: "좁은 공간에서도 편안하게.",
    body: "협소한 주차 공간과 지하 주차장에서도 센서와 조향 보조 기능이 주차 부담을 줄여줍니다.",
    stat: "주차 보조",
    image: "highlight-smart.jpg",
  },
  {
    label: "무선 업데이트",
    heading: "밤사이 새로워지는 기능.",
    body: "서비스센터 방문 없이 인터페이스와 주행 보조, 배터리 관리 기능을 무선으로 업데이트할 수 있습니다.",
    stat: "OTA 업데이트",
    image: "highlight-ota.jpg",
  },
];

function FeatureBlock({ feature, index }: { feature: typeof features[0]; index: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isRight = index % 2 === 1;

  useGSAP(() => {
    if (!contentRef.current) return;
    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 24 },
      {
        opacity: 1, y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen overflow-hidden bg-[var(--bg)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/templates/OHMT028-ev/${feature.image}')` }}
      />
      <div className={`absolute inset-0 ${
        isRight
          ? "bg-gradient-to-tl from-[var(--bg)] via-[var(--bg)]/55 to-[var(--bg)]/5"
          : "bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/50 to-[var(--bg)]/10"
      }`} />

      <div className={`relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 min-h-screen flex items-end pb-16 md:pb-24 ${
        isRight ? "justify-end" : ""
      }`}>
        <div ref={contentRef} className="max-w-[540px]">
          <span className="font-michroma text-xs tracking-[0.12em] text-[var(--text-muted)] mb-5 block">
            {String(index + 1).padStart(2, "0")} / {features.length}
          </span>
          <SplitHeading
            text={feature.heading}
            className="font-michroma text-[length:var(--text-h2)] text-[var(--text)] leading-[var(--leading-heading)] tracking-[-0.03em] mb-5"
          />
          <p className="font-inter text-sm text-[var(--text-muted)] leading-relaxed mb-8 max-w-[440px]">
            {feature.body}
          </p>
          <span className="font-michroma text-[length:var(--text-h2)] text-[var(--accent)] leading-none">
            {feature.stat}
          </span>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);

  const stats = [
    { value: "280", unit: "km", label: "도심 주행 거리" },
    { value: "30", unit: "분", label: "80% 급속 충전" },
    { value: "7", unit: "", label: "외장 컬러" },
    { value: "80", unit: "kW", label: "최대 충전 출력" },
  ];

  useGSAP(() => {
    gsap.fromTo(
      ref.current?.querySelectorAll(".stat-item") ?? [],
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      }
    );
  }, []);

  return (
    <section className="bg-[var(--bg-alt)] border-y border-[var(--border)]">
      <div
        ref={ref}
        className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map((s) => (
          <div key={s.label} className="stat-item">
            <div className="flex items-baseline gap-1 mb-1.5">
              <span className="font-michroma text-[length:var(--text-h2)] text-[var(--text)] leading-none">
                {s.value}
              </span>
              {s.unit && (
                <span className="font-inter text-sm text-[var(--accent)] ml-1">{s.unit}</span>
              )}
            </div>
            <p className="font-inter text-xs text-[var(--text-muted)] tracking-[0.04em]">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HeroBanner() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current?.children ?? [],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, delay: 0.2 }
    );
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-[var(--bg)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/templates/OHMT028-ev/highlight-range.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/20 via-transparent to-[var(--bg)]/80" />
      <div className="absolute inset-0 flex items-end">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
          <div ref={ref}>
            <p className="font-inter text-xs tracking-[0.15em] text-[var(--accent)] uppercase mb-4">
              NUBI 주요 기능</p>
            <h1 className="font-michroma text-[length:var(--text-h1)] text-[var(--text)] leading-[var(--leading-display)] tracking-[-0.03em] mb-5">
              도시를 위한 기능.<br />전기로 완성했습니다.</h1>
            <p className="font-inter text-sm text-[var(--text-muted)] max-w-[420px]">
              주행거리부터 실내와 주차 보조까지, NUBI의 주요 기능을 확인해보세요.</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-[1px] h-10 bg-[var(--text-muted)] animate-pulse" />
        <p className="font-inter text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">스크롤</p>
      </div>
    </section>
  );
}

function HighlightCta() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current?.children ?? [],
      { opacity: 0, y: 24 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      }
    );
  }, []);

  return (
    <section className="bg-[var(--bg)] py-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div ref={ref} className="max-w-[560px]">
          <p className="font-inter text-xs tracking-[0.15em] text-[var(--accent)] uppercase mb-4">
            사전 예약</p>
          <SplitHeading
            text="NUBI를 먼저 만나보세요."
            className="font-michroma text-[length:var(--text-h2)] text-[var(--text)] leading-[var(--leading-heading)] tracking-[-0.03em] mb-5"
          />
          <p className="font-inter text-sm text-[var(--text-muted)] mb-10">
            3,290만 원부터 시작합니다.
            <br className="hidden md:block" />{" "}
            30만 원의 환불 가능한 예약금으로 신청할 수 있습니다.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/ko/templates/OHMT028-ev/order">
              <button className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--text-on-light)] px-8 py-4 rounded-full font-inter font-medium text-xs tracking-[0.03em] hover:bg-[var(--accent-dark)] transition-colors">
                사전 예약하기 +</button>
            </a>
            <a href="/ko/templates/OHMT028-ev/specs">
              <button className="inline-flex items-center gap-2 border border-[var(--border)] text-[var(--text)] px-8 py-4 rounded-full font-inter text-xs tracking-[0.03em] hover:border-[var(--text-muted)] transition-colors">
                전체 사양 보기
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HighlightPage() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      {features.map((f, i) => (
        <FeatureBlock key={f.label} feature={f} index={i} />
      ))}
      <StatsBar />
      <HighlightCta />
      <Footer />
    </>
  );
}
