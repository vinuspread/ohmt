import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { SubpageHero } from "../_components/SubpageHero";
import { TimelineItem } from "../_components/cards/TimelineItem";
import { IntroTextSection } from "../_components/sections/IntroTextSection";

const timeline = [
  { year: "2024", title: "설계 시작", desc: "현지 석재와 노출 콘크리트, 에게해산 목재를 바탕으로 건축의 방향을 정했습니다." },
  { year: "2025", title: "건축과 인테리어 완성", desc: "주변 환경에 미치는 영향을 줄여 시공하고, 수공예 가구와 화산석으로 실내를 완성했습니다." },
  { year: "2026", title: "정식 개관", desc: "네 개의 스위트와 레스토랑, 탁 트인 에게해 전망으로 첫 투숙객을 맞았습니다." },
  { year: "2027", title: "다음 여정", desc: "레스토랑의 첫 미쉐린 스타에 이어 절벽 위 스파와 새로운 레지던스를 준비합니다." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero title={"THE\nSANCTUARY"} image="sub-hero-about.jpg" alt="OHMT 리조트 전경">
          <>
            하얀 벽과 푸른 바다, 오래 머무는 고요.<br />
            절벽의 지형과 빛을 따라 완성한 공간.</>
        </SubpageHero>

        <IntroTextSection>
          OHMT는 주변 풍경보다 앞서 보이지 않도록 절벽의 높이와 곡선을 따라 낮게 자리 잡았습니다.<br />
          시간에 따라 달라지는 빛과 바다를 가까이 느끼며<br />
          조용히 머물 수 있도록 설계했습니다.
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
                OHMT는 칼데라와 에게해가 맞닿는 화산 절벽 위에 자리합니다.<br />
                현지 석재와 노출 콘크리트, 책임 있게 조달한 목재를 중심으로 공간을 구성했습니다.<br />
                벽은 지형의 흐름을 따르고, 창은 바다와 자연광을 향해 열립니다.
              </p>
              <p className="resort-body text-base font-normal text-white/70">
                건축이 풍경을 가리지 않아야 한다는 원칙으로 실내도 차분하게 정리했습니다.<br />
                색과 장식을 줄이고 돌과 목재의 질감, 부드러운 빛을 남겼습니다.<br />
                어느 공간에서든 바다와 절벽이 자연스럽게 중심이 됩니다.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 md:px-12 md:py-32">
          <div className="mx-auto max-w-[800px]">
            <p className="mb-16 text-left text-sm leading-[var(--leading-body)] text-neutral-500 md:text-center">리조트의 여정</p>
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
