import Link from "next/link";

const base = "/ko/templates/OHMT030-resort";

const villas = [
  { name: "빌라 솔라야", desc: "최대 6인이 머무는 공간. 2개의 수영장과 푸른 정원, 그리고 끝없는 햇살 아래에서의 하루." },
  { name: "빌라 미라이아", desc: "최대 6인이 머무는 공간. 2개의 수영장과 푸른 정원, 그리고 끝없는 햇살 아래에서의 하루." },
  { name: "빌라 아자리", desc: "시간이 멈추는 듯한 곳. 허브 향 가득한 정원과 바람 소리 속에서 세상과 단절된 평화를 경험하세요." },
  { name: "빌라 벨루나", desc: "연인과 휴식가들을 위한 공간. 야자수 너머로 반짝이는 달빛과 은은한 라벤더 향이 감도는 밤." },
];

export function Villas() {
  return (
    <section className="bg-[var(--bg-dark)] py-16 md:py-[130px]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          
          {/* Left: Text Area (Vertical layout) */}
          <div className="flex flex-col items-start max-w-[580px]">
            <h2 className="text-[clamp(32px,4.5vw,64px)] font-semibold text-white leading-[1.1] tracking-[-0.04em] mb-6 md:mb-10">
              해안을 따라<br />펼쳐진 삶
            </h2>
            <p className="text-base text-white/60 leading-relaxed mb-8 md:mb-10">
              각 빌라는 해안선을 따라 들어선 프라이빗한 공간입니다.
              온전한 휴식과 머무름, 그리고 바다의 고요한 리듬에 집중할 수 있도록 설계했습니다.
            </p>
            <Link href={`${base}/#contact`}
              className="inline-block rounded-full border border-white/50 px-6 py-3 text-white text-[15px] hover:bg-white/10 transition-all">
              문의하기
            </Link>
          </div>

          {/* Right: List Area (Width 1/2 of container) */}
          <div className="flex flex-col w-full">
            {villas.map((v, i) => (
              <div key={v.name}
                className="py-7 border-t border-white/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex-1 min-w-0 pr-4">
                  <h3 className="text-xl font-medium text-white mb-2">{v.name}</h3>
                  <p className="text-base text-white/60 leading-relaxed">{v.desc}</p>
                </div>
                <div className="flex-shrink-0">
                  <Link href={`${base}/#`}
                    className="inline-flex items-center text-[var(--accent)] text-base hover:opacity-70 transition-opacity">
                    더 보기 &rarr;
                  </Link>
                </div>
              </div>
            ))}
            <div className="border-b border-white/20" />
          </div>

        </div>
      </div>
    </section>
  );
}
