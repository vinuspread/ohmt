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
        <SubpageHero title={"THE\nVILLAS"} image="sub-hero-stay.jpg" alt="OHMT 스위트">
          <>
            에게해와 칼데라를 바라보는 네 개의 스위트.<br />
            서로 다른 전망과 구조로 편안한 머무름을 제공합니다.
          </>
        </SubpageHero>

        <IntroTextSection>
          네 개의 스위트는 절벽 위 위치와 전망에 따라 서로 다른 구조를 갖습니다.<br />
          칼데라를 정면으로 바라보는 객실부터 정원과 바다를 함께 품은 객실까지,<br />
          모든 공간은 자연광과 개방감을 중심으로 설계했습니다.
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
