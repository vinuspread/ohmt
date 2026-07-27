import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { SubpageHero } from "../_components/SubpageHero";
import { MenuCard } from "../_components/cards/MenuCard";
import { IntroTextSection } from "../_components/sections/IntroTextSection";

const menu = [
  { category: "전채", tag: "전채",
    items: [
      { name: "에게해산 문어구이", desc: "야생 오레가노와 현지 케이퍼, 레몬을 곁들인 문어구이", price: "₩28,000", img: "dish-octopus.jpg" },
      { name: "크레타식 다코스", desc: "보리 러스크, 잘 익은 토마토, 숙성 페타 치즈, 올리브 오일", price: "₩16,000", img: "restaurant-terrace-food.jpg" },
      { name: "오징어 프리토", desc: "바삭하게 튀긴 오징어와 시트러스 마늘 아이올리", price: "₩18,000", img: "pkg-bbq.jpg" },
      { name: "차가운 가스파초", desc: "잘 익은 토마토와 오이, 청피망, 셰리 식초", price: "₩15,000", img: "restaurant-indoor.jpg" },
    ] },
  { category: "주요리", tag: "주요리",
    items: [
      { name: "소금 껍질 도미구이", desc: "소금 껍질에 구운 통 도미와 향긋한 허브", price: "₩42,000", img: "dining.jpg" },
      { name: "천천히 구운 양 어깨살", desc: "야생 허브와 마늘로 천천히 익힌 부드러운 양고기", price: "₩38,000", img: "gallery-8.jpg" },
      { name: "랍스터 링귀니", desc: "생면 링귀니, 현지 랍스터, 사프란 크림, 화이트 와인", price: "₩46,000", img: "terrace-dining-caldera.jpg" },
      { name: "야생 버섯 리소토", desc: "아퀘렐로 쌀, 제철 버섯, 파르미지아노 레지아노, 트러플 오일", price: "₩32,000", img: "dish-risotto.jpg" },
    ] },
  { category: "디저트", tag: "디저트",
    items: [
      { name: "그릭 요거트 바클라바", desc: "필로 페이스트리, 호두, 꽃 시럽, 진한 그릭 요거트", price: "₩14,000", img: "dish-baklava.jpg" },
      { name: "오렌지 아몬드 케이크", desc: "세몰리나 케이크, 블러드 오렌지 시럽, 구운 아몬드", price: "₩12,000", img: "dish-cake.jpg" },
      { name: "꿀과 무화과 아이스크림", desc: "야생 타임 꿀, 말린 무화과, 바닐라 빈", price: "₩10,000", img: "dish-icecream.jpg" },
      { name: "올리브 오일 초콜릿 무스", desc: "다크 초콜릿, 햇올리브 오일, 바다 소금", price: "₩16,000", img: "dish-mousse.jpg" },
    ] },
  { category: "와인", tag: "와인",
    items: [
      { name: "아시르티코, 산토리니 2023", desc: "선명한 미네랄 향과 시트러스가 돋보이는 산토리니 드라이 화이트", price: "₩14,000", img: "bar-rooftop-sunset.jpg" },
      { name: "크시노마브로, 나우사 2020", desc: "야생 체리와 말린 토마토, 따뜻한 향신료가 어우러진 레드 와인", price: "₩18,000", img: "concept-2.jpg" },
      { name: "만딜라리아, 로도스 2021", desc: "검붉은 과실과 부드러운 오크 향, 긴 여운이 특징인 풀바디 와인", price: "₩16,000", img: "aerial-caldera-golden.jpg" },
      { name: "빈산토, 산토리니", desc: "자연 건조한 포도로 만들고 오크통에서 4년 숙성한 디저트 와인", price: "₩22,000", img: "aerial-village-dusk.jpg" },
    ] },
];

export default function DinePage() {
  const allItems = menu.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.tag }))
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
        <SubpageHero title={"THE\nCULINARY"} image="sub-hero-dine.jpg" alt="OHMT 다이닝">
          <>
            오늘 잡은 해산물과<br />
            섬에서 기른 제철 재료를 한 접시에 담습니다.</>
        </SubpageHero>

        <IntroTextSection>
          요리는 주방이 문을 열기 전부터 시작됩니다.<br />
          새벽에 들어온 해산물과 섬에서 수확한 채소를 확인한 뒤 그날의 메뉴를 정합니다.<br />
          저녁이면 테라스에 불이 켜지고, 에게해를 바라보며 식사가 시작됩니다.
        </IntroTextSection>

        <section className="resort-container grid grid-cols-1 items-center gap-16 py-16 md:grid-cols-2 md:py-32">
          <div className="aspect-[4/3] md:aspect-[3/4] rounded-2xl overflow-hidden">
            <img
              src="/templates/OHMT030-resort/restaurant-indoor.jpg"
              alt="OHMT 레스토랑 내부"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="resort-body mb-6 text-lg font-normal text-white/85">
              OHMT의 메뉴는 에게해의 바다와 섬의 농산물에서 출발합니다.<br />
              잘 익은 토마토와 야생 허브, 새벽에 들어온 생선을 필요한 만큼만 손질해 재료 본연의 맛을 살립니다.<br />
              탁 트인 바다 전망과 함께 산토리니의 계절을 한 접시에 담습니다.
            </p>
            <p className="resort-body text-base font-normal text-white/70">
              헤드 셰프 엘레나 마르케티는 키클라데스의 어부와 소규모 생산자에게 직접 재료를 공급받습니다.<br />
              메뉴는 계절과 어획량에 따라 달라지며, 정해진 구성보다 그날 가장 좋은 재료를 우선합니다.
            </p>
            <div className="mt-8 pl-6 border-l-2 border-[var(--accent)]">
              <p className="resort-body text-sm font-normal text-white/60">
                &ldquo;재료를 과하게 꾸미지 않습니다. 그날 바다와 밭에서 가장 좋은 것이 메뉴를 정합니다.&rdquo;</p>
              <p className="text-[var(--accent)] text-xs font-medium mt-2 tracking-widest uppercase">
                셰프 엘레나 마르케티
              </p>
            </div>
          </div>
        </section>

        <section className="resort-container pb-16 md:pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allItems.map((item) => (
              <MenuCard
                key={item.name}
                category={item.category}
                name={item.name}
                desc={item.desc}
                price={item.price}
                image={item.img}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
