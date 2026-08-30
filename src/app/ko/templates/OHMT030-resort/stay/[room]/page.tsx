import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";
import { SubpageHero } from "../../_components/SubpageHero";
import { BookingRequestSection } from "../../_components/sections/BookingRequestSection";
import { RoomGallerySection } from "../../_components/sections/RoomGallerySection";
import { RoomOverviewSection } from "../../_components/sections/RoomOverviewSection";

const base = "/ko/templates/OHMT030-resort";

const rooms: Record<string, {
  name: string; price: string; img: string; hero: string;
  desc: string; spec: { label: string; value: string }[];
  gallery: string[];
}> = {
  celestial: {
    name: "셀레스티얼 스위트",
    price: "₩480,000",
    img: "villa-bedroom-arch.jpg",
    hero: "room-celestial.jpg",
    desc: "셀레스티얼 스위트는 리조트에서 가장 높은 곳에 자리 잡고 있습니다. 칼데라 가장자리에 새겨진 이 전망대에서는 하늘이 손에 닿을 듯 가깝게 느껴집니다. 침실과 거실을 감싸는 천장부터 바닥까지의 유리창은 에게해의 수평선 전체를 첫 빛부터 마지막 별자리까지 담아냅니다. 프라이빗 플런지 풀이 바다 위에 떠 있는 듯한 테라스로 이어집니다.",
    spec: [
      { label: "수용 인원", value: "2명" },
      { label: "면적", value: "85 sqm" },
      { label: "전망", value: "에게해 & 칼데라" },
      { label: "침대", value: "킹사이즈 유기농 코튼" },
      { label: "편의시설", value: "프라이빗 플런지 풀, 야외 샤워" },
    ],
    gallery: ["pool-bluehour.jpg", "villa-pool-caldera.jpg", "terrace-dining-caldera.jpg"],
  },
  bellemont: {
    name: "벨몬트 스위트",
    price: "₩360,000",
    img: "villa-bedroom-seaview.jpg",
    hero: "room-bellemont.jpg",
    desc: "야생 정원과 돌담으로 둘러싸인 벨몬트 스위트는 부겐빌레아, 라벤더, 올리브 나무 사이에 자리 잡고 있습니다. 실내외가 연결된 레이아웃은 일광욕실이 있는 프라이빗 파티오로 열리며, 자스민 향기와 짭짤한 바다 공기가 어우러집니다. 느린 아침과 긴 오후를 책과 함께 보내기 위해 완성한 스위트입니다.",
    spec: [
      { label: "수용 인원", value: "2명" },
      { label: "면적", value: "70 sqm" },
      { label: "전망", value: "가든 & 부분 바다뷰" },
      { label: "침대", value: "킹사이즈 유기농 코튼" },
      { label: "편의시설", value: "프라이빗 가든, 야외 라운징" },
    ],
    gallery: ["alley-bougainvillea.jpg", "villa-exterior-golden.jpg", "overwater-cabana-sunset.jpg"],
  },
  tofutalia: {
    name: "토푸탈리아 스위트",
    price: "₩320,000",
    img: "villa-bedroom-porthole.jpg",
    hero: "room-tofutalia.jpg",
    desc: "절벽면에 직접 새겨진 토푸탈리아 스위트는 물에 최대한 가까이 다가갈 수 있는 아늑한 동굴형 은신처입니다. 침실에서 내려가면 현지 돌로 조각된 냉각욕조가 있는 보호된 테라스가 나오며, 파도 소리가 화산암에 울려 퍼집니다. 거친 질감과 부드러운 린넨이 인테리어를 정의합니다.",
    spec: [
      { label: "수용 인원", value: "2명" },
      { label: "면적", value: "55 sqm" },
      { label: "전망", value: "해수면 절벽 사이드" },
      { label: "침대", value: "퀸사이즈 유기농 코튼" },
      { label: "편의시설", value: "냉각욕조, 스톤 테라스" },
    ],
    gallery: ["sailing-cove.jpg", "villa-pool-caldera.jpg", "blue-dome-church.jpg"],
  },
  zephyr: {
    name: "제피르 로프트",
    price: "₩290,000",
    img: "room-zephyr.jpg",
    hero: "room-zephyr.jpg",
    desc: "메인 빌라 단지 위에 자리 잡은 오픈 플랜 로프트, 제피르 로프트는 빛의 볼륨감이 특징입니다. 이중 천장 높이와 창문 벽이 이름처럼 해안 바람을 닮은 공기감을 만들어냅니다. 미닫이식 침실 공간이 아래의 거실을 내려다보고, 컴팩트한 간이 주방이 프라이빗 다이닝을 실현합니다.",
    spec: [
      { label: "수용 인원", value: "2명" },
      { label: "면적", value: "60 sqm" },
      { label: "전망", value: "파노라마 해안선" },
      { label: "침대", value: "퀸사이즈 유기농 코튼" },
      { label: "편의시설", value: "미닫이 구조, 간이 주방" },
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
          title={data.name.replace(" ", "\n")}
          image={data.hero}
          alt={data.name}
          eyebrow="SANCTUM 리조트 - 더 빌라스"
          price={`${data.price} / 1박`}
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
