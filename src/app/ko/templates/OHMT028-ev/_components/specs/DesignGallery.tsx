"use client";
import { useState } from "react";

const gallery = {
  exterior: [
    { image: "hero-static.jpg",      title: "도시 실루엣",      desc: "작은 차체 안에 안정적인 비율과 분명한 인상을 담았습니다." },
    { image: "detail-headlight.jpg", title: "시그니처 라이트",  desc: "원형 LED 헤드램프로 낮과 밤 모두 NUBI만의 인상을 보여줍니다." },
    { image: "detail-side.jpg",      title: "사이드 라인",      desc: "부드러운 측면 라인이 공기 저항을 줄이고 안정적인 비율을 만듭니다." },
  ],
  interior: [
    { image: "detail-interior.jpg",  title: "운전석",           desc: "자주 쓰는 기능을 손이 닿는 위치에 배치하고 불필요한 버튼은 줄였습니다." },
    { image: "detail-roof.jpg",      title: "파노라마 루프",    desc: "넓은 글라스 루프가 자연광을 들이고 실내의 개방감을 높입니다." },
    { image: "detail-charge.jpg",    title: "스마트 디스플레이", desc: "10.4인치 터치 디스플레이. NUBI OS와 무선 업데이트를 지원합니다." },
  ],
} as const;

type Tab = keyof typeof gallery;

export function DesignGallery() {
  const [tab, setTab] = useState<Tab>("exterior");
  const [active, setActive] = useState(0);

  const items = gallery[tab];
  const featured = items[active];

  const handleTab = (t: Tab) => { setTab(t); setActive(0); };

  const tabLabels: Record<Tab, string> = { exterior: "외관", interior: "실내" };

  return (
    <section className="bg-[var(--bg)]">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-michroma text-[length:var(--text-h3)] text-[var(--text)] leading-[var(--leading-heading)] tracking-[-0.02em]">
            디자인</h2>
          <div className="flex gap-1 border border-[var(--border)] rounded-full p-1">
            {(["exterior", "interior"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => handleTab(t)}
                className={`px-5 py-2 rounded-full font-inter text-xs tracking-[0.04em] transition-all duration-200 ${
                  tab === t
                    ? "bg-[var(--text)] text-[var(--bg)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {tabLabels[t]}
              </button>
            ))}
          </div>
        </div>

        <div className="aspect-[16/7] rounded-xl overflow-hidden bg-[var(--bg-alt)] mb-6">
          <div
            key={`${tab}-${active}`}
            className="w-full h-full bg-cover bg-center transition-all duration-500"
            style={{ backgroundImage: `url('/templates/OHMT028-ev/${featured.image}')` }}
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="max-w-[480px]">
            <p className="font-inter text-xs tracking-[0.12em] text-[var(--accent)] uppercase mb-2">
              {tabLabels[tab]}
            </p>
            <h3 className="font-michroma text-[length:var(--text-lead)] text-[var(--text)] leading-[var(--leading-heading)] tracking-[-0.02em] mb-3">
              {featured.title}
            </h3>
            <p className="font-inter text-sm text-[var(--text-muted)] leading-relaxed">
              {featured.desc}
            </p>
          </div>
          <div className="flex max-w-full flex-shrink-0 gap-3 overflow-x-auto pb-1 md:overflow-visible">
            {items.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-[120px] md:w-[140px] aspect-[4/3] rounded-lg overflow-hidden transition-all duration-200 flex-shrink-0 ${
                  active === i ? "ring-2 ring-[var(--accent)] opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('/templates/OHMT028-ev/${item.image}')` }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
