// src/app/ko/templates/OHMT010-cosmetic-KO/-components/sections/Hero.tsx
"use client";

export const Hero = () => {
  return (
    <section className="bg-[var(--color-bg)] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center py-12 mt-20 gap-16">
          <div className="flex-1 max-w-[860px]">
            <h1 className="text-[22px] md:text-[36px] md:text-[56px] font-normal leading-[1.0] mb-12">
              자연에 뿌리를 두고,<br />과학으로 정제한<br />고기능성 스킨케어.
            </h1>
            <div className="flex gap-6">
              <button className="px-10 py-4 bg-black text-white text-[0.85rem] font-bold uppercase tracking-wider hover:opacity-80 transition-opacity">
                컬렉션 쇼핑하기
              </button>
              <button className="px-10 py-4 border border-black text-black text-[0.85rem] font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                더 리추얼
              </button>
            </div>
          </div>
          
          <div className="hidden md:block w-[240px] border border-black/10 bg-white p-6 shrink-0 group">
            <img 
              src="/templates/OHMT010-cosmetic/cosmetic-1.jpg" 
              className="w-full h-[180px] object-cover mb-4 grayscale group-hover:grayscale-0 transition-[filter] duration-700" 
              alt="Featured product" 
            />
            <div className="text-[0.85rem] font-bold mb-1">리커버리 리스토러티브 세럼</div>
            <div className="text-base font-bold mb-4">$85.00</div>
            <button className="text-[0.75rem] font-bold uppercase border-b border-black/20 pb-0.5 hover:border-black transition-colors">
              빠른 추가
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full h-[50vh] overflow-hidden">
        <img 
          src="/templates/OHMT010-cosmetic/cosmetic-hero-luxury.jpg?v=2" 
          className="w-full h-full object-cover object-center" 
          alt="Hero background" 
        />
      </div>
    </section>
  );
};
