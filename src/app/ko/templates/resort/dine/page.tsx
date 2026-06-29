import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";

const menu = [
  { category: "스타터", tag: "스타터",
    items: [
      { name: "그릴드 에게해 문어", desc: "와일드 오레가노, 로컬 케이퍼, 레몬즙과 함께 천천히 구운", price: "$28", img: "dish-octopus.jpg" },
      { name: "크레탄 다코스", desc: "올리브 오일에 적신 보리 루스크, 간 토마토, 배럴 에이징 페타", price: "$16", img: "restaurant-terrace-food.jpg" },
      { name: "칼라마리 프리토", desc: "가볍게 튀긴 바삭한 오징어, 하우스메이드 시트러스 마늘 아이올리", price: "$18", img: "pkg-bbq.jpg" },
      { name: "칠드 가스파초", desc: "햇살에 익은 토마토, 오이, 청피망, 셰리 식초", price: "$15", img: "restaurant-indoor.jpg" },
    ] },
  { category: "메인", tag: "메인",
    items: [
      { name: "솔트 크러스트 도미", desc: "소금에 구운 통 도미, 허브와 함께 테이블 사이드에서 서빙", price: "$42", img: "dining.jpg" },
      { name: "슬로우 로스트 양 어깨살", desc: "와일드 허브, 마늘, 푸짐하게 익힌 부드러운 양고기", price: "$38", img: "gallery-8.jpg" },
      { name: "랍스터 링귀니", desc: "핸드메이드 파스타, 로컬 랍스터, 크리미 사프란, 화이트 와인", price: "$46", img: "terrace-dining-caldera.jpg" },
      { name: "와일드 머쉬룸 리소토", desc: "아퀘렐로 쌀, 숲 버섯, 파르미지아노 레지아노, 트러플 오일", price: "$32", img: "dish-risotto.jpg" },
    ] },
  { category: "디저트", tag: "디저트",
    items: [
      { name: "그릭 요거트 바클라바", desc: "겹겹이 쌓은 필로, 호두, 꽃 시럽, 걸쭉한 그릭 요거트", price: "$14", img: "dish-baklava.jpg" },
      { name: "오렌지 아몬드 케이크", desc: "세몰리나, 블러드 오렌지 시럽, 토스티드 아몬드 플레이크", price: "$12", img: "dish-cake.jpg" },
      { name: "허니 & 피그 아이스크림", desc: "와일드 타임 허니, 건조 스미르나 무화과, 바닐라 빈", price: "$10", img: "dish-icecream.jpg" },
      { name: "올리브 오일 초콜릿 무스", desc: "다크 쿠베르튀르, 얼리 하베스트 올리브 오일, 씨솔트 플레이크", price: "$16", img: "dish-mousse.jpg" },
    ] },
  { category: "와인", tag: "와인",
    items: [
      { name: "아시르티코, 산토리니 2023", desc: "상쾌한 미네랄리티, 시트러스, 이 섬의 시그니처 드라이 화이트", price: "$14", img: "bar-rooftop-sunset.jpg" },
      { name: "크시노마브로, 나우사 2020", desc: "복합적인 레드, 와일드 체리, 선드라이 토마토, 따뜻한 스파이스", price: "$18", img: "concept-2.jpg" },
      { name: "만딜라리아, 로도스 2021", desc: "풀바디, 다크 프루트, 부드러운 오크, 긴 여운", price: "$16", img: "aerial-caldera-golden.jpg" },
      { name: "빈산토, 산토리니", desc: "자연 건조 포도로 만든 달콤한 와인, 배럴 에이징 4년", price: "$22", img: "aerial-village-dusk.jpg" },
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
        <section className="relative h-[65vh] overflow-hidden flex items-end pb-14">
          <img
            src="/templates/resort/sub-hero-dine.jpg"
            alt="OHMT 다이닝"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
          <div className="relative z-10 max-w-[1440px] mx-auto w-full px-10">
            <h1 className="text-white tracking-[-0.04em] leading-[0.85] mb-3 font-semibold uppercase"
                style={{ fontSize: "clamp(60px, 10vw, 160px)" }}>
              더<br />큘리너리
            </h1>
            <p className="text-white/70 text-[22px] max-w-[700px] font-[300] leading-relaxed">
              미쉐린 스타의 요리, 오늘 잡은 해산물과<br />
              섬에서 재배한 농산물로 완성됩니다.
            </p>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-10 py-16 border-b border-white/10 mb-16">
          <p className="text-white/60 text-[15px] md:text-[17px] font-[300] leading-[1.85] max-w-[720px]">
            모든 요리는 주방이 문을 열기 전부터 시작됩니다. 새벽이면 저희 팀이 에게해에서 돌아오는 배들을 맞이합니다. 정오가 되면 오늘의 메뉴가 완성됩니다. 저녁이 되면 테라스가 준비되고, 바다는 언제나 그 배경이 됩니다.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-16 items-center max-w-[1440px] mx-auto px-10 mb-20">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img
              src="/templates/resort/restaurant-indoor.jpg"
              alt="OHMT 레스토랑 내부"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-white/85 text-[17px] leading-[1.9] font-[300] mb-6">
              OHMT에서 모든 식사는 땅과 바다의 대화입니다. 저희 주방은 에게해의 해안 식료품 저장고에서 재료를 가져옵니다: 햇살에 익은 토마토, 절벽에서 채취한 야생 허브, 새벽에 잡아 몇 시간 안에 서빙되는 생선. 미쉐린 스타 팀은 절제와 존중으로 작업하며, 각 재료가 탁 트인 바다 전망을 배경으로 스스로 말하게 합니다.
            </p>
            <p className="text-white/70 text-[15px] leading-[1.8] font-[300]">
              헤드 셰프 엘레나 마르케티는 키클라데스 전역의 현지 어부와 소규모 생산자로부터 직접 재료를 조달합니다. 모든 요리는 접시가 아닌 물과 흙에서 시작됩니다. 메뉴는 계절과 어획량에 따라 변하며, 기대되는 것보다 가장 신선한 것이 기준입니다.
            </p>
            <div className="mt-8 pl-6 border-l-2 border-[var(--accent)]">
              <p className="text-white/60 text-[14px] leading-[1.7] font-[300]">
                &ldquo;우리는 재료에 우리의 의도를 강요하지 않습니다. 그들의 목소리를 듣습니다. 바다가 매일 아침 무엇을 요리할지 알려줍니다.&rdquo;
              </p>
              <p className="text-[var(--accent)] text-[12px] font-medium mt-2 tracking-widest uppercase">
                셰프 엘레나 마르케티
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24 max-w-[1440px] mx-auto px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {allItems.map((item) => (
              <div key={item.name} className="group rounded-2xl overflow-hidden bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={`/templates/resort/${item.img}`}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-medium text-white/40 uppercase tracking-[0.1em] bg-white/10 rounded-full px-3 py-1">
                      {item.category}
                    </span>
                    <span className="text-[var(--accent)] text-sm font-semibold ml-auto">{item.price}</span>
                  </div>
                  <h3 className="text-white text-[15px] font-medium leading-snug mb-1">{item.name}</h3>
                  <p className="text-white/50 text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
