import { TestimonialCard } from "../cards/TestimonialCard";
import { SectionHeading } from "../ui/Typography";

const testimonials = [
  { name: "이 가족", role: "빌라 솔라야 투숙객", quote: "빌라에서 바로 보이는 바다와 조용한 동선이 좋았습니다. 아이와 함께 지내기에도 편안했어요.", rating: "9.3" },
  { name: "아멜리아 & 제임스 파커", role: "빌라 미라이아 투숙객", quote: "파도 소리로 아침을 시작했습니다. 일정 없이 머무는 시간이 가장 좋았어요.", rating: "9.1" },
  { name: "제임스 윌리엄스", role: "솔로 여행자", quote: "객실, 음식, 서비스가 모두 차분했습니다. 혼자 쉬러 오기에 좋은 곳입니다.", rating: "9.4" },
  { name: "니나 데이비스", role: "빌라 아자리 투숙객", quote: "공간이 넓고 조용해서 오래 쉬었습니다. 다시 돌아오고 싶은 리조트예요.", rating: "9.0" },
];

export function Testimonials() {
  return (
    <section className="pb-16 md:pb-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <SectionHeading>
              게스트 후기
            </SectionHeading>
          </div>
        </div>

        {/* Cards track */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>


      </div>
    </section>
  );
}
