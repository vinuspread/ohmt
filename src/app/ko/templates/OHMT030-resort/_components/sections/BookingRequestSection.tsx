import { PillLink } from "../ui/PillLink";

type BookingRequestSectionProps = {
  backHref: string;
};

export function BookingRequestSection({ backHref }: BookingRequestSectionProps) {
  return (
    <section
      className="py-16 text-center md:py-32"
      style={{ backgroundColor: "var(--bg-dark)" }}
    >
      <h2 className="resort-heading mb-3 text-4xl font-normal tracking-[-0.02em] text-white">
        예약 가능 여부를 확인해보세요.</h2>
      <p className="mb-12 text-sm text-white/40">
        요청하신 날짜의 객실을 확인한 뒤 24시간 이내에 안내해드립니다.</p>
      <div className="mx-auto max-w-[600px] px-6 md:px-12">
        <div className="flex flex-col gap-4 md:flex-row">
          <input
            type="email"
            placeholder="이메일 주소"
            className="flex-1 rounded-full border border-white/20 bg-transparent px-6 py-3 text-base text-white outline-none transition-all placeholder-white/40 focus:border-white/60"
          />
          <input
            type="date"
            lang="ko"
            placeholder="체크인"
            className="flex-1 rounded-full border border-white/20 bg-transparent px-6 py-3 text-base text-white outline-none transition-all focus:border-white/60"
          />
        </div>
        <button className="mt-6 rounded-full bg-[var(--accent)] px-9 py-3 text-base font-medium text-[var(--text-contrast)] transition-all hover:bg-[var(--accent-hover)]">
          예약 문의 보내기</button>
      </div>
      <PillLink
        href={backHref}
        direction="left"
        tone="muted"
        className="mt-12 px-0 py-0"
      >
        객실 목록으로</PillLink>
    </section>
  );
}
