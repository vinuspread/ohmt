import Link from "next/link";
import { VillaRow } from "../cards/VillaRow";
import { BodyText, SectionHeading } from "../ui/Typography";

const base = "/ko/templates/OHMT030-resort";

const villas = [
  { name: "빌라 솔라야", desc: "최대 6인이 머물 수 있는 독채 빌라입니다.\n두 개의 수영장과 정원, 넓은 야외 공간을 갖추고 있습니다." },
  { name: "빌라 미라이아", desc: "최대 6인이 머물 수 있는 독채 빌라입니다.\n두 개의 수영장과 정원, 넓은 야외 공간을 갖추고 있습니다." },
  { name: "빌라 아자리", desc: "허브 정원과 프라이빗 테라스를 갖춘 조용한 빌라입니다.\n바람과 파도 소리를 가까이에서 느낄 수 있습니다." },
  { name: "빌라 벨루나", desc: "두 사람이 조용히 머물기 좋은 빌라입니다.\n야자수 정원과 라벤더가 둘러싼 야외 휴식 공간을 갖추고 있습니다." },
];

export function Villas() {
  return (
    <section className="bg-[var(--bg-dark)] py-16 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          
          {/* Left: Text Area (Vertical layout) */}
          <div className="flex flex-col items-start max-w-[580px]">
            <SectionHeading size="large" className="mb-6 tracking-[-0.04em] md:mb-12">
              바다를 따라<br />이어지는 머무름</SectionHeading>
            <BodyText className="mb-9 text-white/60 md:mb-12">
              각 빌라는 해안선을 따라 독립적으로 배치했습니다.{"\n"}
              객실과 정원, 수영장에서 바다를 바라보며 조용히 머물 수 있습니다.
            </BodyText>
            <Link href={`${base}/#contact`}
              className="inline-block rounded-full border border-white/50 px-6 py-3 text-white text-base hover:bg-white/10 transition-all focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-[var(--focus-ring-offset)]">
              빌라 문의</Link>
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
