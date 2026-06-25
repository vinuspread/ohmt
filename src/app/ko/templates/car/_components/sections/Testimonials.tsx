// src/app/templates/car/-components/sections/Testimonials.tsx
"use client";

import React from "react";

const testimonials = [
  {
    text: "\"비교 불가한 압도적인 출력과 주행 성능을 자랑합니다. EV9은 마치 내 마음을 읽는 것처럼 정교하게 코너를 돌파하죠. 수많은 명품 슈퍼카로 트랙 주행도 경험해봤지만, 이 차가 선사하는 극도의 정밀함에는 비할 바가 못 됩니다.\"",
    name: "제임스 K. (James K.)",
    model: "VINUSPREAD EV9 · 옵시디언 블랙"
  },
  {
    text: "\"배터리 효율성이 정말 놀라울 정도입니다. 지난 20년간 독·이·일 등 유럽과 아시아의 명품 플래그십 차량들을 두루 소유해 보았지만, EV9은 마침내 미래 모빌리티가 우리 곁에 도착했음을 실감하게 해 준 첫 번째 차입니다.\"",
    name: "사라 M. (Sarah M.)",
    model: "VINUSPREAD EV9 · 아크틱 화이트"
  },
  {
    text: "\"내 인생 최고의 전기차입니다. 넉넉한 7인승 좌석 배치, 여유로운 530km 주행거리, 그리고 단 22분 만에 완료되는 초고속 충전까지. 패밀리카가 이토록 소유욕을 자극하고 완성도 높게 느껴질 수 있다는 것이 놀랍습니다.\"",
    name: "다니엘 P. (Daniel P.)",
    model: "VINUSPREAD X5 · 딥 포레스트"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-12 md:py-24 border-t border-[var(--theme-border)] bg-black">
      <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
        <div className="mb-12">
          <span className="block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)]">
            오너 이야기 (Owner Stories)
          </span>
        </div>
        
         <div className="grid md:grid-cols-3 gap-[1px] bg-[var(--theme-border)] overflow-hidden">
           {testimonials.map((t) => (
             <div key={t.name} className="bg-black px-6 py-6 md:p-10 flex flex-col justify-between gap-4 md:gap-6">
               <div>
                 <div className="text-[0.65rem] tracking-[0.2em] text-[var(--theme-accent)] mb-5">★★★★★</div>
                 <p className="text-[0.88rem] text-white/65 leading-[1.75] font-normal mb-3 break-keep">
                   {t.text}
                 </p>
               </div>
               <div>
                 <div className="text-[0.72rem] font-bold uppercase tracking-[0.15em] text-white mb-1">
                   {t.name}
                 </div>
                 <div className="text-[0.68rem] text-[var(--theme-accent)] uppercase tracking-[0.1em]">
                   {t.model}
                 </div>
               </div>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
};
