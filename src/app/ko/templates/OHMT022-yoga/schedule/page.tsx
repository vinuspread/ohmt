import Link from "next/link";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import SubpageHero from "../_components/SubpageHero";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import { ScheduleBooking } from "./ScheduleBooking";

type PageProps = { searchParams: Promise<Record<string, string | string[] | undefined>> };
type BookingParams = { preferredSlug?: string; preferredDay?: string; preferredTime?: string; demoState?: string };

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function ScheduleContent(bookingParams: BookingParams) {
  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <main className="prana-subpage bg-white pt-16 md:pt-[76px] break-keep">
        <SubpageHero eyebrow="BOOK A CLASS" title="나를 위한 한 시간을 고르세요" description="날짜를 고르고 가능한 수업을 비교한 뒤, 모든 정보가 맞을 때 예약을 확정하세요." image="/templates/OHMT022-yoga/subpage-schedule-v3.webp" imageAlt="다음 수업을 위해 정돈된 PRANA 스튜디오" />
        <ScheduleBooking {...bookingParams} />
      </main>
      <section className="bg-[var(--color-bg-alt)] px-6 py-16 md:px-14 md:py-20 lg:px-20"><div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-12 lg:gap-20"><h2 className="prana-sub-section max-w-[12ch] text-[var(--color-text)] lg:col-span-4">10분 먼저 도착하세요.</h2><div className="border-t border-[var(--color-text)] pt-7 lg:col-span-8"><p className="prana-sub-body max-w-2xl leading-8 text-[var(--color-text-muted)]">매트와 도구는 준비되어 있습니다. 물과 움직이기 편한 옷만 챙기고, 더 세심한 도움이 필요한 부분은 수업 전에 강사에게 알려 주세요.</p><Link href="/ko/templates/OHMT022-yoga/mypage" className="prana-sub-small mt-6 inline-flex min-h-11 items-center border-b border-[var(--color-text)] font-medium text-[var(--color-text)]">기존 예약 관리하기</Link></div></div></section>
      <Footer />
    </TemplateWrapper>
  );
}

export default async function SchedulePage({ searchParams }: PageProps) {
  const params = await searchParams;
  return <ScheduleContent preferredSlug={firstValue(params.class)} preferredDay={firstValue(params.day)} preferredTime={firstValue(params.time)} demoState={firstValue(params.state)} />;
}
