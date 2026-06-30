"use client";
import { useState } from "react";

const tabs = ["1:1 PT", "소그룹", "기업 웰니스"];

const programs: Record<string, { title: string; desc: string; image: string; duration: string; level: string; frequency: string }[]> = {
  "1:1 PT": [
    { title: "프리시전 스트렝스", desc: "올바른 폼과 점진적 과부하에 초점을 맞춘 1:1 코칭. 당신의 신체에 맞춘 측정 가능한 근력 향상.", image: "program-strength.jpg", duration: "60분", level: "모든 레벨", frequency: "주 2-3회" },
    { title: "리커버리 테라피", desc: "모빌리티 운동, 근막 이완, 가이드 릴렉세이션 테크닉을 결합한 맞춤형 회복 세션.", image: "program-recovery.jpg", duration: "60분", level: "모든 레벨", frequency: "주 1-2회" },
  ],
  "소그룹": [
    { title: "밸런스 & 플로우", desc: "근력, 유연성, 브레스워크의 다이내믹한 조화. 최대 6명의 소그룹 환경에서 균형을 되찾는 프로그램.", image: "program-mobility.jpg", duration: "50분", level: "모든 레벨", frequency: "주 2회" },
    { title: "HIIT 퍼포먼스", desc: "최대 칼로리 소모와 심혈관 효율을 위한 고강도 인터벌 트레이닝. 최대 6명 그룹.", image: "program-hiit.jpg", duration: "50분", level: "중급", frequency: "주 2회" },
  ],
  "기업 웰니스": [
    { title: "스트레스 관리", desc: "직장 내 스트레스를 줄이고 집중력과 팀 웰빙을 향상시키는 과학적 테크닉.", image: "about-hero.jpg", duration: "45분", level: "팀 세션", frequency: "맞춤" },
    { title: "자세 교정", desc: "데스크 워커 맞춤형 프로그램. 자세 불균형 개선, 긴장 완화, 인체공학적 인식 향상.", image: "cta-bg.jpg", duration: "45분", level: "팀 세션", frequency: "맞춤" },
  ],
};

export function ProgramList() {
  const [activeTab, setActiveTab] = useState("1:1 PT");
  const items = programs[activeTab];

  return (
    <section className="bg-[var(--bg)] py-24 md:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-1 mb-12 border-b border-[var(--border)]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 text-[13px] font-medium transition-colors border-b-2 -mb-[1px] whitespace-nowrap ${
                activeTab === tab
                  ? "text-[var(--accent)] border-[var(--accent)]"
                  : "text-[var(--text-muted)] border-transparent hover:text-[var(--text)]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((p) => (
            <div
              key={p.title}
              className="group border border-[var(--border)] rounded-lg overflow-hidden hover:shadow-md transition-all"
            >
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url('/templates/OHMT029-fitness/${p.image}')` }}
              />
              <div className="p-6 md:p-8">
                <h3 className="font-['Montserrat'] font-semibold text-[22px] text-[var(--text)] tracking-tight">{p.title}</h3>
                <p className="text-[15px] text-[var(--text-muted)] mt-3 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-4 mt-5 text-[12px]">
                  <span className="text-[var(--text-muted)]">시간: <span className="text-[var(--text)] font-medium">{p.duration}</span></span>
                  <span className="text-[var(--text-muted)]">레벨: <span className="text-[var(--text)] font-medium">{p.level}</span></span>
                  <span className="text-[var(--text-muted)]">빈도: <span className="text-[var(--text)] font-medium">{p.frequency}</span></span>
                </div>
                <button className="mt-6 border border-[var(--border)] text-[var(--text)] text-[12px] font-semibold px-5 py-2.5 rounded-lg hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition-all tracking-wide">
                  세션 예약하기 →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
