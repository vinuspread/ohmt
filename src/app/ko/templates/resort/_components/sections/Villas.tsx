import Link from "next/link";

const base = "/ko/templates/resort";

const villas = [
  { name: "빌라 솔라야", desc: "여섯 영혼이 기쁨을 나누는 공간, 두 개의 수영장, 푸른 정원, 끝없이 펼쳐진 태양 아래의 나날." },
  { name: "빌라 미라이아", desc: "여섯 영혼이 기쁨을 나누는 공간, 두 개의 수영장, 푸른 정원, 끝없이 펼쳐진 태양 아래의 나날." },
  { name: "빌라 아자리", desc: "시간이 멈추는 곳. 허브 향과 바람의 속삭임 속에서 세상으로부터 숨겨진 평화를 만나보세요." },
  { name: "빌라 벨루나", desc: "연인과 몽상가를 위한 공간. 야자수 사이로 달이 반짝이고, 밤은 라벤더 향으로 숨쉽니다." },
];

export function Villas() {
  return (
    <section className="bg-[var(--bg-dark)] py-[130px]">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="grid grid-cols-3 gap-8 mb-16">
          <h2 className="col-span-2 text-[clamp(48px,5.5vw,80px)] font-semibold text-white leading-[0.95] tracking-[-0.04em]">
            해안을 따라<br />펼쳐진 삶
          </h2>
          <div>
            <p className="text-base text-white/60 leading-relaxed mb-6">
              각 빌라는 해안 풍경 속에 새겨진 프라이빗한 세계입니다.
              휴식과 연결, 그리고 바다의 고요한 리듬을 위해 설계되었습니다.
            </p>
            <Link href={`${base}/#contact`}
              className="inline-block rounded-full border border-white/50 px-6 py-3 text-white text-[15px] hover:bg-white/10 transition-all">
              문의하기
            </Link>
          </div>
        </div>

        <div>
          {villas.map((v, i) => (
            <div key={v.name}
              className="grid grid-cols-3 py-7 items-center border-t border-white/20">
              <h3 className="text-xl font-medium text-white">{v.name}</h3>
              <p className="text-base text-white/60 leading-relaxed">{v.desc}</p>
              <div className="text-right">
                <Link href={`${base}/#`}
                  className="text-[var(--accent)] text-base hover:opacity-70 transition-opacity">
                  더 보기 &rarr;
                </Link>
              </div>
            </div>
          ))}
          <div className="border-b border-white/20" />
        </div>
      </div>
    </section>
  );
}
