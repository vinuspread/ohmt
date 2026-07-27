"use client";
import { Leaf, Shield, Zap, Recycle } from "lucide-react";

const icons = [
  <Leaf key="leaf" size={24} />,
  <Shield key="shield" size={24} />,
  <Zap key="zap" size={24} />,
  <Recycle key="recycle" size={24} />,
];

const features = [
  { icon: icons[0], title: "친환경 소재", desc: "검증된 친환경 소재만 사용" },
  { icon: icons[1], title: "6개월 보증", desc: "제조상 결함에 대한 품질 보증" },
  { icon: icons[2], title: "빠른 배송", desc: "영업일 기준 1~2일 내 출고" },
  { icon: icons[3], title: "친환경 패키징", desc: "재활용 가능한 포장재 사용" },
];

export function FeatureRow() {
  return (
    <section className="border-y border-black/10 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className={`flex flex-col items-center text-center py-10 px-6 gap-3 ${i < features.length - 1 ? "border-r border-black/10" : ""}`}>
              <span className="text-black/30">{f.icon}</span>
              <h4 className="text-[0.85rem] font-bold text-black tracking-[-0.03em]">{f.title}</h4>
              <p className="text-[0.75rem] text-black/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
