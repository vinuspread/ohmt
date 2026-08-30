import Link from "next/link";
import { VillaRow } from "../cards/VillaRow";
import { BodyText, SectionHeading } from "../ui/Typography";

const base = "/ko/templates/OHMT030-resort";

const villas = [
  { name: "빌라 솔라야", desc: "최대 6인이 머무는 공간. 2개의 수영장과 푸른 정원, 그리고 끝없는 햇살 아래에서의 하루." },
  { name: "빌라 미라이아", desc: "최대 6인이 머무는 공간. 2개의 수영장과 푸른 정원, 그리고 끝없는 햇살 아래에서의 하루." },
  { name: "빌라 아자리", desc: "시간이 멈추는 듯한 곳. 허브 향 가득한 정원과 바람 소리 속에서 세상과 단절된 평화를 경험하세요." },
  { name: "빌라 벨루나", desc: "연인과 휴식가들을 위한 공간. 야자수 너머로 반짝이는 달빛과 은은한 라벤더 향이 감도는 밤." },
];

export function Villas() {
  return (
    <section className="bg-[var(--bg-dark)] py-16 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">

          {/* Left: Text Area (Vertical layout) */}
          <div className="flex flex-col items-start max-w-[580px]">
            <SectionHeading size="large" className="mb-6 tracking-[-0.04em] md:mb-12">
              해안을 따라<br />펼쳐진 삶
            </SectionHeading>
            <BodyText className="mb-9 text-white/60 md:mb-12">
              각 빌라는 해안선을 따라 들어선 프라이빗한 공간입니다.
              온전한 휴식과 머무름, 그리고 바다의 고요한 리듬에 집중할 수 있도록 설계했습니다.
            </BodyText>
            <Link href={`${base}/#contact`}
              className="inline-block rounded-full border border-white/50 px-6 py-3 text-white text-base hover:bg-white/10 transition-all focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-[var(--focus-ring-offset)]">
              문의하기
            </Link>
          </div>

          {/* Right: List Area (Width 1/2 of container) */}
          <div className="flex flex-col w-full">
            {villas.map((v) => (
              <VillaRow
                key={v.name}
                name={v.name}
                description={v.desc}
                href={`${base}/#`}
              />
            ))}
            <div className="border-b border-white/20" />
          </div>

        </div>
      </div>
    </section>
  );
}
