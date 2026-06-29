export function AboutHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/templates/fitness/about-hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center px-6">
        <h1 className="font-['Montserrat'] font-bold text-[clamp(36px,5vw,64px)] text-white leading-[1.1] tracking-tight mb-4">
          2018년부터 웰니스를 재정의하다.
        </h1>
        <p className="text-[15px] text-white/70 max-w-[460px] mx-auto leading-relaxed">
          하나의 스튜디오에서 신뢰받는 웰니스 파트너로&nbsp;— 더 나은 삶을 향해 함께 걸어갑니다.
        </p>
      </div>
    </section>
  );
}
