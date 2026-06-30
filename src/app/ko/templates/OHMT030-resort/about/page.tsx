import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";

const timeline = [
  { year: "2024", title: "착공 및 디자인 단계", desc: "건축적 비전이 시작됩니다. 현지 돌, 모래 처리 콘크리트, 에게해 목재가 칼데라 가장자리를 따라 리조트의 유기적 실루엣을 형성하기 위해 선정됩니다." },
  { year: "2025", title: "건설 및 인테리어 큐레이션", desc: "저영향 공법을 사용한 9개월간의 정교한 건설. 그리스 장인의 맞춤 가구, 로우 린넨, 화산석 마감재로 채워진 인테리어." },
  { year: "2026", title: "그랜드 오픈", desc: "OHMT가 첫 투숙객에게 문을 엽니다. 4개의 스위트, 미쉐린이 이끄는 주방, 그리고 끝없는 에게해의 전망. 은신처가 목소리를 찾습니다." },
  { year: "2027", title: "미쉐린 스타와 그 너머", desc: "OHMT 레스토랑이 첫 미쉐린 스타를 획득합니다. 절벽 위 스파와 북쪽 만에 새겨질 두 개의 추가 레지던스 계획이 시작됩니다." },
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
            <h1 className="text-white font-semibold tracking-[-0.04em] leading-[0.85] mb-4 uppercase"
                style={{ fontSize: "clamp(60px, 10vw, 160px)" }}>
              더<br />생추어리
            </h1>
            <p className="text-white/70 text-[22px] max-w-[700px] font-[300] leading-relaxed">
              하얗게 칠해진 벽, 코발트 블루 돔, 그리고 끝없는 고요.<br />
              절벽에서 조각되고, 오직 빛에 의해 형성된 공간.
            </p>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-10 py-16 border-b border-white/10" style={{ backgroundColor: "var(--bg)" }}>
          <p className="text-white/60 text-[15px] md:text-[17px] font-[300] leading-[1.85] max-w-[720px]">
            OHMT는 사람을 감동시키기 위해 지어지지 않았습니다. 절벽 속으로 사라지고, 매 시간 변화하는 빛의 일부가 되며, 진정으로 중요한 유일한 편의시설인 고요함을 제공하기 위해 지어졌습니다.
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
                OHMT는 칼데라가 열린 바다와 만나는 산토리니의 화산 절벽에서 솟아올랐습니다. 빛과 그림자가 끊임없이 교차하는 곳. 리조트는 땅 자체에 의해 형성되었습니다. 현지 돌, 모래 처리 콘크리트, 지속 가능한 에게해 숲에서 수확한 목재를 사용했습니다. 모든 벽은 절벽의 자연스러운 곡선을 따릅니다. 모든 창문은 하루 중 특정 순간을 프레임에 담습니다: 물 위로 떠오르는 새벽, 테라스를 하얗게 태우는 한낮의 태양, 보랏빛 황혼이 밤으로 접어드는 순간.
              </p>
              <p className="text-white/70 text-[15px] leading-[1.8] font-[300]">
                우리는 건축이 풍경을 지배하는 것이 아니라 대화해야 한다고 믿습니다. OHMT에서 인테리어는 의도적으로 조용합니다. 절제된 팔레트, 거친 질감, 부드러운 빛. 그래서 풍경이 방에서 가장 큰 목소리를 내게 됩니다. 그 결과, 현재의 순간에서 절대 산만해지지 않는 곳, 고요함이 궁극의 럭셔리가 되고 바다가 당신의 변함없는 동반자가 되는 공간이 탄생했습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-[800px] mx-auto px-6">
            <p className="text-neutral-400 text-[13px] uppercase tracking-[0.15em] mb-16 text-center">The Journey</p>
            <div className="relative border-l border-neutral-200 ml-4 md:ml-28 space-y-12">
              {timeline.map((t) => (
                <div key={t.year} className="relative pl-8 md:pl-12 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-300 group-hover:bg-[#7C9BAB] transition-all duration-300 border border-white" />
                  
                  {/* Year */}
                  <div className="md:absolute md:left-[-110px] md:top-0 md:text-right md:w-[80px] mb-2 md:mb-0">
                    <span className="text-2xl font-semibold text-neutral-800 leading-none">
                      {t.year}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-neutral-900 text-lg font-semibold mb-2 group-hover:text-[#7C9BAB] transition-colors duration-300">
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
