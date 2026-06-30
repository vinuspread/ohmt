import Link from "next/link";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";

const base = "/ko/templates/resort";

const suites = [
  { slug: "celestial", name: "셀레스티얼 스위트", price: "$480", img: "villa-bedroom-arch.jpg" },
  { slug: "bellemont", name: "벨몬트 스위트", price: "$360", img: "villa-bedroom-seaview.jpg" },
  { slug: "tofutalia", name: "토푸탈리아 스위트", price: "$320", img: "villa-bedroom-porthole.jpg" },
  { slug: "zephyr", name: "제피르 로프트", price: "$290", img: "room-zephyr.jpg" },
];

export default function StayPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-24" style={{ backgroundColor: "var(--bg)" }}>
        <section className="relative h-[65vh] overflow-hidden flex items-end pb-14 mb-16">
          <img
            src="/templates/resort/sub-hero-stay.jpg"
            alt="더 빌라스"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
          <div className="relative z-10 max-w-[1440px] mx-auto w-full px-10">
            <h1 className="text-white font-semibold tracking-[-0.04em] leading-[0.85] mb-4 uppercase"
                style={{ fontSize: "clamp(60px, 10vw, 160px)" }}>
              더<br />빌라스
            </h1>
            <p className="text-white/70 text-[19px] max-w-[520px] font-[300] leading-relaxed">
              에게해의 전망을 품은 4개의 럭셔리 스위트. 완전한 고요와 아늑한 해안의 온기가 머무는 곳.
            </p>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-10 pb-16 border-b border-white/10 mb-16">
          <p className="text-white/60 text-[15px] md:text-[17px] font-[300] leading-[1.85] max-w-[720px]">
            네 개의 스위트, 각각 절벽 위의 위치에 따라 그 형태가 달라집니다. 어떤 스위트는 칼데라의 전체 아치를 마주하고, 다른 스위트는 고요한 바다를 향합니다. 모든 공간은 하나의 원칙을 따릅니다: 당신은 결코 갇혀 있다고 느껴서는 안 된다는 것.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 max-w-[1440px] mx-auto px-10">
          {suites.map((s) => (
            <Link key={s.slug} href={`${base}/stay/${s.slug}`} className="group block">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={`/templates/resort/${s.img}`}
                  alt={s.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h2 className="text-xl text-white mt-4 font-[400]">{s.name}</h2>
              <p className="text-[14px] text-white/60 mt-1">{s.price} / 1박</p>
              <div className="inline-block rounded-full border border-white/40 px-4 py-2 text-[13px] text-white hover:bg-white/10 transition-all mt-3">
                스위트 둘러보기 &rarr;
              </div>
            </Link>
          ))}
        </section>

      </main>
      <Footer />
    </>
  );
}
