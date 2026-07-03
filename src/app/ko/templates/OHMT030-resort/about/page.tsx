import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";

const timeline = [
  { year: "2024", title: "착공 및 디자인 단계", desc: "현지 석재, 노출 콘크리트, 에게해 목재를 중심으로 건축의 첫 윤곽을 잡았습니다." },
  { year: "2025", title: "건설 및 인테리어 큐레이션", desc: "저영향 공법으로 구조를 세우고, 장인의 가구와 화산석 마감재로 실내의 밀도를 완성했습니다." },
  { year: "2026", title: "그랜드 오픈", desc: "네 개의 스위트, 미쉐린 셰프의 주방, 끝없는 에게해 전망으로 첫 투숙객을 맞이합니다." },
  { year: "2027", title: "미쉐린 스타와 그 너머", desc: "레스토랑의 첫 미쉐린 스타 이후, 절벽 위 스파와 두 개의 신규 레지던스를 준비합니다." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative h-[65vh] flex items-end pb-14 overflow-hidden">
          <img
            src="/templates/OHMT030-resort/sub-hero-about.jpg"
            alt="OHMT 리조트 전경"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
          <div className="relative z-10 max-w-[1440px] mx-auto w-full px-10">
            <h1 className="text-white font-semibold tracking-[-0.04em] leading-[1.1] mb-4 uppercase"
                style={{ fontSize: "clamp(60px, 10vw, 160px)" }}>
              THE<br />SANCTUARY
            </h1>
            <p className="text-white/70 text-[22px] max-w-[700px] font-[300] leading-relaxed">
              하얀 벽, 코발트빛 돔, 끝없는 고요.<br />
              절벽에서 태어나 빛으로 완성된 공간.
            </p>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-10 py-16 border-b border-white/10" style={{ backgroundColor: "var(--bg)" }}>
          <p className="text-white/60 text-[15px] md:text-[17px] font-[300] leading-[1.85] max-w-[720px]">
            OHMT는 과시하기 위해 지어진 리조트가 아닙니다.
            절벽 속으로 낮게 스며들고, 매 시간 달라지는 빛의 일부가 되도록 설계했습니다.
            이곳의 가장 중요한 편의시설은 고요함입니다.
          </p>
        </section>

        <section className="pt-24 pb-48" style={{ backgroundColor: "var(--bg)" }}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 items-center max-w-[1440px] mx-auto px-10">
            <div className="relative">
              <div className="relative z-0 w-[75%] aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="/templates/OHMT030-resort/gallery-1.jpg"
                  alt="OHMT 건축"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-[-104px] right-0 z-10 w-[55%] aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/templates/OHMT030-resort/gallery-3.jpg"
                  alt="OHMT 해안 디테일"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-white/85 text-[17px] leading-[1.9] font-[300] mb-6">
                OHMT는 칼데라가 열린 바다와 만나는 화산 절벽 위에 놓였습니다.
                현지 석재, 노출 콘크리트, 지속 가능한 에게해 목재가 건축의 중심이 됩니다.
                모든 벽은 절벽의 곡선을 따르고, 모든 창은 하루 중 가장 아름다운 빛을 프레임에 담습니다.
              </p>
              <p className="text-white/70 text-[15px] leading-[1.8] font-[300]">
                우리는 건축이 풍경을 지배하지 않고, 풍경과 대화해야 한다고 믿습니다.
                그래서 인테리어는 의도적으로 조용합니다.
                절제된 팔레트와 거친 질감, 부드러운 빛만 남겨 바다가 가장 큰 목소리를 내게 했습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-[800px] mx-auto px-6">
            <p className="text-neutral-500 text-[13px] uppercase tracking-[0.15em] mb-16 text-center">THE JOURNEY</p>
            <div className="relative border-l border-neutral-200 ml-4 md:ml-28 space-y-12">
              {timeline.map((t) => (
                <div key={t.year} className="relative pl-8 md:pl-12 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-300 group-hover:bg-[var(--bg)] transition-all duration-300 border border-white" />
                  
                  {/* Year */}
                  <div className="md:absolute md:left-[-110px] md:top-0 md:text-right md:w-[80px] mb-2 md:mb-0">
                    <span className="text-2xl font-semibold text-neutral-800 leading-none">
                      {t.year}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-neutral-900 text-lg font-semibold mb-2 group-hover:text-[var(--bg)] transition-colors duration-300">
                      {t.title}
                    </h3>
                    <p className="text-neutral-500 text-[14px] leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
