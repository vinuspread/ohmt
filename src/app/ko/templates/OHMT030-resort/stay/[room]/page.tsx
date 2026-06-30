import Link from "next/link";
import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";

const base = "/ko/templates/OHMT030-resort";

const rooms: Record<string, {
  name: string; price: string; img: string;
  desc: string; spec: { label: string; value: string }[];
  gallery: string[];
}> = {
  celestial: {
    name: "셀레스티얼 스위트",
    price: "$480",
    img: "villa-bedroom-arch.jpg",
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
    price: "$360",
    img: "villa-bedroom-seaview.jpg",
    desc: "야생 정원과 건조석墙으로 둘러싸인 벨몬트 스위트는 부겐빌레아, 라벤더, 올리브 나무 사이에 자리 잡고 있습니다. 실내외가 연결된 레이아웃은 일광욕실이 있는 프라이빗 파티오로 열리며, 자스민 향기와 짭짤한 바다 공기가 어우러집니다. 느린 아침과 긴 오후를 책과 함께 보내기 위해 설계된 스위트입니다.",
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
    price: "$320",
    img: "villa-bedroom-porthole.jpg",
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
    price: "$290",
    img: "room-zephyr.jpg",
    desc: "메인 빌라 단지 위에 자리 잡은 오픈 플랜 로프트, 제피르 로프트는 빛의 볼륨감이 특징입니다. 이중 천장 높이와 창문 벽이 이름처럼 해안 바람을 닮은 공기감을 만들어냅니다. 미닫이식 침실 공간이 아래의 거실을 내려다보고, 컴팩트한 간이 주방이 프라이빗 다이닝을 가능하게 합니다.",
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
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end pb-14 overflow-hidden">
          <img
            src={`/templates/OHMT030-resort/${data.img}`}
            alt={data.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
          <div className="relative z-10 max-w-[1440px] mx-auto w-full px-10">
            <p className="text-white/50 text-[12px] uppercase tracking-[0.18em] mb-3">
              OHMT 리조트 — 빌라
            </p>
            <h1 className="text-white font-[300] tracking-[-0.04em] leading-none mb-3"
                style={{ fontSize: "clamp(42px, 6vw, 80px)" }}>
              {data.name}
            </h1>
            <p className="text-white/60 text-[15px]">{data.price} / 1박</p>
          </div>
        </section>

        {/* Description + Specs */}
        <section className="py-20" style={{ backgroundColor: "var(--bg)" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1440px] mx-auto px-10">
            <div>
              <p className="text-white/90 text-[17px] leading-[1.85] font-[300]">
                {data.desc}
              </p>
            </div>
            <div className="border-t border-white/10">
              {data.spec.map((s, i) => (
                <div key={s.label} className={`flex justify-between py-4 ${i < data.spec.length - 1 ? "border-b border-white/10" : ""}`}>
                  <span className="text-white/45 text-[13px] font-[300] uppercase tracking-[0.08em]">{s.label}</span>
                  <span className="text-white text-[14px] font-[300]">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="pb-20" style={{ backgroundColor: "var(--bg)" }}>
          <div className="max-w-[1440px] mx-auto px-10">
            <p className="text-white/30 text-[11px] uppercase tracking-[0.2em] mb-6">갤러리</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {data.gallery.map((img, i) => (
                <div
                  key={i}
                  className={`overflow-hidden rounded-xl ${i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}
                >
                  <img
                    src={`/templates/OHMT030-resort/${img}`}
                    alt=""
                    className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="py-20 text-center" style={{ backgroundColor: "var(--bg-dark)" }}>
          <h2 className="text-4xl text-white font-[300] mb-3 tracking-[-0.04em]">투숙을 요청하세요.</h2>
          <p className="text-white/40 text-[14px] mb-10">24시간 이내에 예약 가능 여부를 확인해 드립니다.</p>
          <div className="max-w-[600px] mx-auto px-10">
            <div className="flex flex-col md:flex-row gap-4">
              <input type="email" placeholder="이메일 주소"
                className="flex-1 px-5 py-3 rounded-full border border-white/20 bg-transparent text-white text-[15px] placeholder-white/40 outline-none focus:border-white/60 transition-all" />
              <input type="date" lang="ko" placeholder="체크인"
                className="flex-1 px-5 py-3 rounded-full border border-white/20 bg-transparent text-white text-[15px] outline-none focus:border-white/60 transition-all" />
            </div>
            <button className="mt-6 rounded-full bg-[var(--accent)] px-8 py-3 text-[var(--text-dark)] text-[15px] font-medium hover:bg-[#ffb37a] transition-all">
              요청 제출
            </button>
          </div>
          <Link href={`${base}/stay`} className="inline-block mt-12 text-white/40 text-[13px] hover:text-white/70 transition-all">
            &larr; 빌라 목록으로
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
