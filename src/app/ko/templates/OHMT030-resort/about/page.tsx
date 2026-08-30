import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { SubpageHero } from "../_components/SubpageHero";
import { TimelineItem } from "../_components/cards/TimelineItem";
import { IntroTextSection } from "../_components/sections/IntroTextSection";

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
        <SubpageHero title={"더\n생추어리"} image="sub-hero-about.jpg" alt="OHMT 리조트 전경">
          <>
            하얀 벽, 코발트빛 돔, 끝없는 고요.<br />
            절벽에서 태어나 빛으로 완성된 공간.
          </>
        </SubpageHero>

        <IntroTextSection>
          OHMT는 과시하기 위해 지어진 리조트가 아닙니다. 절벽 속으로 낮게
          스며들고, 매 시간 달라지는 빛의 일부가 되도록 설계했습니다. 이곳의
          가장 중요한 편의시설은 고요함입니다.
        </IntroTextSection>

        <section className="py-16 md:py-32" style={{ backgroundColor: "var(--bg)" }}>
          <div className="resort-container grid grid-cols-1 items-center gap-16 md:grid-cols-2">
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
              <p className="resort-body mb-6 text-lg font-normal text-white/85">
                OHMT는 칼데라가 열린 바다와 만나는 화산 절벽 위에 놓였습니다.
                현지 석재, 노출 콘크리트, 지속 가능한 에게해 목재가 건축의 중심이 됩니다.
                모든 벽은 절벽의 곡선을 따르고, 모든 창은 하루 중 가장 아름다운 빛을 프레임에 담습니다.
              </p>
              <p className="resort-body text-base font-normal text-white/70">
                우리는 건축이 풍경을 지배하지 않고, 풍경과 대화해야 한다고 믿습니다.
                그래서 인테리어는 의도적으로 조용합니다.
                절제된 팔레트와 거친 질감, 부드러운 빛만 남겨 바다가 가장 큰 목소리를 내게 했습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 md:px-12 md:py-32">
          <div className="mx-auto max-w-[800px]">
            <p className="mb-16 text-left text-sm leading-[var(--leading-body)] text-neutral-500 md:text-center">여정</p>
            <div className="flex max-w-[326px] flex-col gap-12 md:mx-auto md:max-w-[640px]">
              {timeline.map((t) => (
                <TimelineItem
                  key={t.year}
                  year={t.year}
                  title={t.title}
                  desc={t.desc}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
