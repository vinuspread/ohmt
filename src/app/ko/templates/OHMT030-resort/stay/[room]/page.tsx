import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";
import { SubpageHero } from "../../_components/SubpageHero";
import { BookingRequestSection } from "../../_components/sections/BookingRequestSection";
import { RoomGallerySection } from "../../_components/sections/RoomGallerySection";
import { RoomOverviewSection } from "../../_components/sections/RoomOverviewSection";

const base = "/ko/templates/OHMT030-resort";

const rooms: Record<string, {
  name: string; heroTitle: string; price: string; img: string; hero: string;
  desc: string; spec: { label: string; value: string }[];
  gallery: string[];
}> = {
  celestial: {
    name: "셀레스티얼 스위트",
    heroTitle: "Celestial Suite",
    price: "₩480,000",
    img: "villa-bedroom-arch.jpg",
    hero: "room-celestial.jpg",
    desc: "리조트 가장 높은 곳에 자리한 셀레스티얼 스위트입니다.\n침실과 거실의 전면 창으로 칼데라와 에게해가 한눈에 들어옵니다.\n넓은 테라스의 프라이빗 플런지 풀에서 일출부터 밤하늘까지 조용히 감상할 수 있습니다.",
    spec: [
      { label: "수용 인원", value: "2명" },
      { label: "면적", value: "85m²" },
      { label: "전망", value: "에게해와 칼데라" },
      { label: "침대", value: "킹사이즈 침대·유기농 면 침구" },
      { label: "편의시설", value: "프라이빗 플런지 풀·야외 샤워" },
    ],
    gallery: ["pool-bluehour.jpg", "villa-pool-caldera.jpg", "terrace-dining-caldera.jpg"],
  },
  bellemont: {
    name: "벨몬트 스위트",
    heroTitle: "Bellemont Suite",
    price: "₩360,000",
    img: "villa-bedroom-seaview.jpg",
    hero: "room-bellemont.jpg",
    desc: "돌담과 올리브 나무, 라벤더 정원 사이에 자리한 벨몬트 스위트입니다.\n거실에서 바로 이어지는 프라이빗 파티오에는 선베드와 야외 휴식 공간이 마련되어 있습니다.\n정원과 바다 전망을 함께 즐기며 여유롭게 머물기 좋은 객실입니다.",
    spec: [
      { label: "수용 인원", value: "2명" },
      { label: "면적", value: "70m²" },
      { label: "전망", value: "정원 및 일부 바다 전망" },
      { label: "침대", value: "킹사이즈 침대·유기농 면 침구" },
      { label: "편의시설", value: "프라이빗 정원·야외 라운지" },
    ],
    gallery: ["alley-bougainvillea.jpg", "villa-exterior-golden.jpg", "overwater-cabana-sunset.jpg"],
  },
  tofutalia: {
    name: "토푸탈리아 스위트",
    heroTitle: "Tofutalia Suite",
    price: "₩320,000",
    img: "villa-bedroom-porthole.jpg",
    hero: "room-tofutalia.jpg",
    desc: "절벽의 지형을 따라 만든 동굴형 토푸탈리아 스위트입니다.\n프라이빗 테라스에는 현지 돌로 만든 냉수 욕조가 있어 가까이에서 파도 소리를 들을 수 있습니다.\n화산석의 거친 질감과 부드러운 린넨이 차분한 분위기를 만듭니다.",
    spec: [
      { label: "수용 인원", value: "2명" },
      { label: "면적", value: "55m²" },
      { label: "전망", value: "절벽 아래 바다 전망" },
      { label: "침대", value: "퀸사이즈 침대·유기농 면 침구" },
      { label: "편의시설", value: "냉수 욕조·스톤 테라스" },
    ],
    gallery: ["sailing-cove.jpg", "villa-pool-caldera.jpg", "blue-dome-church.jpg"],
  },
  zephyr: {
    name: "제피르 로프트",
    heroTitle: "Zephyr Loft",
    price: "₩290,000",
    img: "room-zephyr.jpg",
    hero: "room-zephyr.jpg",
    desc: "메인 빌라 위쪽에 자리한 오픈 플랜형 제피르 로프트입니다.\n높은 천장과 넓은 창으로 자연광이 깊숙이 들어오며, 침실과 거실은 미닫이 구조로 유연하게 나뉩니다.\n간이 주방에서 객실 안의 간단한 식사를 준비할 수 있습니다.",
    spec: [
      { label: "수용 인원", value: "2명" },
      { label: "면적", value: "60m²" },
      { label: "전망", value: "탁 트인 해안 전망" },
      { label: "침대", value: "퀸사이즈 침대·유기농 면 침구" },
      { label: "편의시설", value: "미닫이형 공간·간이 주방" },
    ],
    gallery: ["aerial-caldera-golden.jpg", "villa-bedroom-arched-window.jpg", "bar-rooftop-sunset.jpg"],
  },
};

export default async function RoomPage({ params }: { params: Promise<{ room: string }> }) {
  const { room } = await params;
  const data = rooms[room];
  if (!data) return <div>객실을 찾을 수 없습니다</div>;

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <SubpageHero
          title={data.heroTitle.replace(" ", "\n")}
          image={data.hero}
          alt={data.name}
          eyebrow="OHMT 리조트 · 스위트"
          price={`${data.price} · 1박`}
          detail
          overlay="bg-gradient-to-t from-black/70 via-black/25 to-transparent"
        >
          {null}
        </SubpageHero>

        <RoomOverviewSection description={data.desc} specs={data.spec} />
        <RoomGallerySection images={data.gallery} />
        <BookingRequestSection backHref={`${base}/stay`} />
      </main>
      <Footer />
    </>
  );
}
