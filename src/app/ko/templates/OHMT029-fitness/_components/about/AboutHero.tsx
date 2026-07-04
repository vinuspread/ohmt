export function AboutHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/templates/OHMT029-fitness/about-hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center px-6">
        <h1 className="font-['Montserrat'] font-bold text-[clamp(36px,5vw,64px)] text-white leading-[1.1] tracking-tight mb-4">
          2018년부터 쌓아온
          <br />
          맞춤형 웰니스.
        </h1>
        <p className="text-[15px] text-white/70 max-w-[460px] mx-auto leading-relaxed">
          한 명의 몸을 정확히 보는 일에서 시작해,
          <br />
          호텔과 레지던스의 웰니스 파트너로 확장했습니다.
        </p>
      </div>
    </section>
  );
}
