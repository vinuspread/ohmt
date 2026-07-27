"use client";
import { Star } from "lucide-react";

const ratings = [5, 5, 4, 5];

const reviews = [
  { name: "김현우", text: "사진보다 실물이 더 깔끔합니다. 마감이 단정하고 발을 안정적으로 잡아줘 러닝할 때 자주 신습니다.", product: "에어 스트라이드 프로", date: "2026년 5월" },
  { name: "이수진", text: "한 달 정도 자주 신었는데 가죽이 발에 맞게 부드러워졌습니다. 오염도 쉽게 닦여 관리하기 편합니다.", product: "펄 로우", date: "2026년 4월" },
  { name: "박지훈", text: "퀵 레이스가 편하고 비 오는 날에도 부담 없이 신었습니다. 포장 상태와 배송도 만족스러웠습니다.", product: "섀도우 러너", date: "2026년 4월" },
  { name: "최예린", text: "기본 색상이라 옷에 맞추기 쉽고 착화감도 편합니다. 다른 색상도 추가로 구매했습니다.", product: "어반 클래식", date: "2026년 3월" },
];

export const Reviews = () => {
  return (
  <section className="py-16 bg-[var(--color-bg-secondary)]">
    <div className="max-w-[1440px] mx-auto px-6">
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black/40 block mb-2">구매 후기</span>
          <h2 className="text-[1.6rem] font-black tracking-[-0.03em] uppercase">직접 신어본 고객의 이야기</h2>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <span className="text-[2rem] font-black text-black">4.6</span>
          <div>
            <div className="flex gap-0.5 mb-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-black text-black" />)}
            </div>
            <p className="text-[0.72rem] text-black/50">680개 이상의 구매 후기 기준</p>
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
