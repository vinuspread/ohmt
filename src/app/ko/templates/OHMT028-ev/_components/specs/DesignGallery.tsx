"use client";
import { useState } from "react";

const gallery = {
  exterior: [
    { image: "hero-static.jpg",      title: "도시 실루엣",      desc: "최소한의 크기로 최대한의 존재감. 모든 각도가 의도를 담고 있습니다." },
    { image: "detail-headlight.jpg", title: "시그니처 라이트",  desc: "주간에도 야간에도, NUBI만의 표정이 빛납니다." },
    { image: "detail-side.jpg",      title: "사이드 라인",      desc: "공기 저항을 줄인 유려한 바디. 도시의 공기 위를 달립니다." },
  ],
  interior: [
    { image: "detail-interior.jpg",  title: "운전석",           desc: "최소한의 버튼, 최대한의 명료함. 필요한 모든 것이 손 닿는 곳에." },
    { image: "detail-roof.jpg",      title: "파노라마 루프",    desc: "전면 글라스 루프로 하늘을 담습니다. 도시 풍경이 드라이브의 일부가 됩니다." },
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

  const tabLabels: Record<Tab, string> = { exterior: "익스테리어", interior: "인테리어" };

  return (
    <section className="bg-[var(--bg)]">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-michroma text-[clamp(24px,2.5vw,40px)] text-[var(--text)] leading-[1.0] tracking-[-0.02em]">
            디자인 상세
          </h2>
          <div className="flex gap-1 border border-[var(--border)] rounded-full p-1">
            {(["exterior", "interior"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => handleTab(t)}
                className={`px-5 py-2 rounded-full font-inter text-[12px] tracking-[0.04em] transition-all duration-200 ${
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
            <p className="font-inter text-[11px] tracking-[0.12em] text-[var(--accent)] uppercase mb-2">
              {tabLabels[tab]}
            </p>
            <h3 className="font-michroma text-[clamp(20px,2vw,30px)] text-[var(--text)] leading-[1.05] tracking-[-0.02em] mb-3">
              {featured.title}
            </h3>
            <p className="font-inter text-[14px] text-[var(--text-muted)] leading-relaxed">
              {featured.desc}
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
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
