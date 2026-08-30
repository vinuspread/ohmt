import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { SubpageHero } from "../_components/SubpageHero";
import { SuiteCard } from "../_components/cards/SuiteCard";
import { IntroTextSection } from "../_components/sections/IntroTextSection";

const base = "/ko/templates/OHMT030-resort";

const suites = [
  { slug: "celestial", name: "셀레스티얼 스위트", price: "₩480,000", img: "villa-bedroom-arch.jpg" },
  { slug: "bellemont", name: "벨몬트 스위트", price: "₩360,000", img: "villa-bedroom-seaview.jpg" },
  { slug: "tofutalia", name: "토푸탈리아 스위트", price: "₩320,000", img: "villa-bedroom-porthole.jpg" },
  { slug: "zephyr", name: "제피르 로프트", price: "₩290,000", img: "room-zephyr.jpg" },
];

export default function StayPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
        <SubpageHero title={"더\n빌라스"} image="sub-hero-stay.jpg" alt="더 빌라스">
          에게해의 전망을 품은 4개의 럭셔리 스위트. 완전한 고요와 아늑한 해안의 온기가 머무는 곳.
        </SubpageHero>

        <IntroTextSection>
          네 개의 스위트는 각각 절벽 위 위치에 따라 형태가 달라집니다. 어떤 스위트는 칼데라의 전체 아치를 마주하고, 다른 스위트는 고요한 바다를 향합니다. 모든 공간은 하나의 원칙을 따릅니다: 당신은 결코 갇혀 있다고 느껴서는 안 된다는 것.
        </IntroTextSection>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 max-w-[1440px] mx-auto px-6 pb-16 md:px-12 md:pb-32">
          {suites.map((s) => (
            <SuiteCard
              key={s.slug}
              href={`${base}/stay/${s.slug}`}
              name={s.name}
              price={s.price}
              image={s.img}
            />
          ))}
        </section>

      </main>
      <Footer />
    </>
  );
}
