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
    label: "Range",
    heading: "도심을 280km 더 자유롭게.",
    body: "NUBI는 실제 도심 주행을 기준으로 한 번 충전에 최대 280km를 달립니다. 평일 출퇴근을 충전 걱정 없이 이어갈 수 있는 거리입니다.",
    stat: "280 km",
    image: "highlight-range.jpg",
  },
  {
    label: "Charging",
    heading: "30분이면 80%까지.",
    body: "최대 80kW DC 급속 충전을 지원합니다. 커피 한 잔을 마시는 동안 충전하고 다시 길 위로 나설 수 있습니다.",
    stat: "30분",
    image: "highlight-charge.jpg",
  },
  {
    label: "Design",
    heading: "한눈에 기억되는 실루엣.",
    body: "일곱 가지 컬러, 시그니처 LED, 작지만 넓게 쓰이는 차체 비율까지. NUBI는 도시 안에서 또렷하게 보이도록 설계되었습니다.",
    stat: "7 colors",
    image: "highlight-design.jpg",
  },
  {
    label: "Interior",
    heading: "덜어낸 조작, 넓어진 실내.",
    body: "문을 여는 순간 외부 크기를 잊게 됩니다. 10.4인치 디스플레이, 열선 시트, 부드러운 터치 소재로 매일의 이동감을 높였습니다.",
    stat: "10.4인치",
    image: "highlight-interior.jpg",
  },
  {
    label: "Smart Parking",
    heading: "좁은 자리도 스스로.",
    body: "비좁은 주차 공간, 좁은 골목, 지하 주차장까지 스마트 주차 보조가 차분하게 처리합니다. 설정하고 한 걸음 물러서면 됩니다.",
    stat: "자동 주차",
    image: "highlight-smart.jpg",
  },
  {
    label: "Over the Air",
    heading: "자는 동안 더 좋아지는 차.",
    body: "무선 업데이트로 새 기능이 자동 적용됩니다. 어제보다 더 똑똑하고 빠른 NUBI를 다음 날 아침 만날 수 있습니다.",
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
              NUBI Electric - Highlights
            </p>
            <h1 className="font-michroma text-[length:var(--text-h1)] text-[var(--text)] leading-[var(--leading-display)] tracking-[-0.03em] mb-5">
              모든 디테일.<br />완전히 전기적으로.
            </h1>
            <p className="font-inter text-sm text-[var(--text-muted)] max-w-[420px]">
              NUBI를 기다릴 이유 여섯 가지. 스크롤하며 핵심 기능을 확인하세요.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-[1px] h-10 bg-[var(--text-muted)] animate-pulse" />
        <p className="font-inter text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">Scroll</p>
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
            Early Access
          </p>
          <SplitHeading
            text="당신의 NUBI를 예약할 준비가 되었나요?"
            className="font-michroma text-[length:var(--text-h2)] text-[var(--text)] leading-[var(--leading-heading)] tracking-[-0.03em] mb-5"
          />
          <p className="font-inter text-sm text-[var(--text-muted)] mb-10">
            3,290만 원부터 시작합니다. 30만 원의 전액 환불 가능 보증금으로 우선 예약하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/ko/templates/OHMT028-ev/order">
              <button className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--text-on-light)] px-8 py-4 rounded-full font-inter font-medium text-xs tracking-[0.03em] hover:bg-[var(--accent-dark)] transition-colors">
                지금 예약하기 +
              </button>
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
