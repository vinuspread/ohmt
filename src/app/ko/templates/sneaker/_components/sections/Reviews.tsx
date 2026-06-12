"use client";
import { Star } from "lucide-react";

const ratings = [5, 5, 4, 5];

const reviews = [
  { name: "제임스 K.", text: "최고의 스니커즈입니다. 완성도가 뛰어나고 실물이 더 멋져요.", product: "에어 스트라이드 프로", date: "2026년 5월" },
  { name: "사라 M.", text: "한 달 내내 신고 다녔어요. 엄청 편안하고 여전히 새것 같아요.", product: "펄 로우", date: "2026년 4월" },
  { name: "데이비드 L.", text: "디자인이 훌륭하고 매우 편안해요. 배송도 빠르고 포장도 깔끔했어요.", product: "섀도우 러너", date: "2026년 4월" },
  { name: "에마 R.", text: "두 켤레를 주문했어요. 가격 대비 품질이 훌륭합니다. 또 구매할게요.", product: "어반 클래식", date: "2026년 3월" },
];

export const Reviews = () => {
  return (
  <section className="py-16 bg-[var(--color-bg-secondary)]">
    <div className="max-w-[1440px] mx-auto px-6">
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black/40 block mb-2">고객 리뷰</span>
          <h2 className="text-[1.6rem] font-black tracking-[-0.03em] uppercase">고객 후기</h2>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <span className="text-[2rem] font-black text-black">4.6</span>
          <div>
            <div className="flex gap-0.5 mb-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-black text-black" />)}
            </div>
            <p className="text-[0.72rem] text-black/50">총 680+개의 리뷰 기준</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white p-6 border border-black/5">
            <div className="flex gap-0.5 mb-4">
              {[1,2,3,4,5].map(s => (
                <Star key={s} size={12} className={s <= ratings[i] ? "fill-black text-black" : "fill-black/20 text-black/20"} />
              ))}
            </div>
            <p className="text-[0.85rem] text-black/70 leading-relaxed mb-6">"{r.text}"</p>
            <div className="border-t border-black/5 pt-4">
              <p className="text-[0.82rem] font-bold text-black">{r.name}</p>
              <p className="text-[0.72rem] text-black/40">{r.product} · {r.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};
