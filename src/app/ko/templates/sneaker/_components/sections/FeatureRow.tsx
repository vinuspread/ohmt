"use client";
import { Leaf, Shield, Zap, Recycle } from "lucide-react";

const icons = [<Leaf size={24} />, <Shield size={24} />, <Zap size={24} />, <Recycle size={24} />];

const features = [
  { icon: icons[0], title: "친환경 소재", desc: "책임감 있게 조달된 친환경 원단" },
  { icon: icons[1], title: "6개월 보증", desc: "모든 제품에 적용되는 풀 커버리지" },
  { icon: icons[2], title: "빠른 배송", desc: "1-2일 내 배송 완료" },
  { icon: icons[3], title: "친환경 패키징", desc: "100% 재활용 가능한 소재" },
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
