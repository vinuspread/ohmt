
import Image from "next/image";
import Link from "next/link";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import SubpageHero from "../_components/SubpageHero";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";

type ReservationViewState = "ready" | "empty" | "error";
type PageProps = { searchParams: Promise<{ state?: string | string[] }> };
type Reservation = { id: string; date: string; time: string; name: string; instructor: string; status: string; slug: string };

const UPCOMING: Reservation[] = [
  { id: "1", date: "6월 16일 월요일", time: "오전 7:00", name: "빈야사 플로우", instructor: "소피아 첸", status: "예약 확정", slug: "vinyasa-flow" },
  { id: "2", date: "6월 18일 수요일", time: "오후 6:30", name: "하타 요가", instructor: "소피아 첸", status: "예약 확정", slug: "hatha-yoga" },
  { id: "3", date: "6월 20일 금요일", time: "오전 8:00", name: "명상", instructor: "미라 송", status: "예약 확정", slug: "meditation" },
];

function BookingRow({ item }: { item: Reservation }) {
  return <article className="grid gap-5 border-b border-[var(--color-border)] py-7 md:grid-cols-12 md:items-center md:gap-8"><div className="md:col-span-3"><p className="prana-sub-small text-[var(--color-text)]">{item.date}</p><p className="prana-sub-small mt-2 text-[var(--color-text-muted)]">{item.time}</p></div><div className="md:col-span-5"><h3 className="prana-sub-title text-[var(--color-text)]">{item.name}</h3><p className="prana-sub-small mt-2 text-[var(--color-text-muted)]">{item.instructor} · {item.status}</p></div><div className="flex gap-6 md:col-span-4 md:justify-end"><Link href={`/ko/templates/OHMT022-yoga/classes/${item.slug}`} className="prana-sub-small inline-flex min-h-11 items-center text-[var(--color-text)]">수업 정보</Link><Link href="/ko/templates/OHMT022-yoga/schedule" className="prana-sub-small inline-flex min-h-11 items-center border-b border-[var(--color-text)] font-medium text-[var(--color-text)]">변경</Link></div></article>;
}

export default async function MyPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const raw = Array.isArray(params.state) ? params.state[0] : params.state;
  const state: ReservationViewState = raw === "empty" || raw === "error" ? raw : "ready";
  const next = UPCOMING[0];

  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <main className="prana-subpage bg-white pt-16 md:pt-[76px] break-keep">
        <SubpageHero eyebrow="MY PRACTICE" title="한 주의 수련을 차분하게 모아보세요" description="다음 수업을 확인하고 필요한 변경만 간단히 처리한 뒤, 다시 수련에 집중하세요." image="/templates/OHMT022-yoga/subpage-mypage-v3.webp" imageAlt="식물이 있는 PRANA 스튜디오에서 수련을 준비하는 회원" imagePosition="object-[70%_center] md:object-center" />

        <section className="border-b border-[var(--color-border)] px-6 md:px-14 lg:px-20"><dl className="mx-auto grid max-w-[1180px] md:grid-cols-3">{[["회원", "김지수"], ["이용권", "8회 남음"], ["갱신일", "7월 1일"]].map(([label, value], index) => <div key={label} className={`py-7 ${index ? "border-t border-[var(--color-border)] md:border-l md:border-t-0 md:pl-8" : ""}`}><dt className="prana-sub-label tracking-[0.14em] text-[var(--color-text-muted)]">{label}</dt><dd className="prana-sub-small mt-3 text-[var(--color-text)]">{value}</dd></div>)}</dl></section>

        <section className="bg-[var(--color-bg-alt)] px-6 py-20 md:px-14 md:py-28 lg:px-20"><div className="mx-auto max-w-[1180px]">{state === "ready" ? (
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
            <div>
              <p className="prana-sub-label tracking-[0.16em] text-[var(--color-text-muted)]">다음 수업</p>
              <p className="prana-sub-lead mt-6 text-[var(--color-text)]">{next.date}</p>
              <p className="prana-sub-small mt-2 text-[var(--color-text-muted)]">{next.time}</p>
              <h2 className="prana-sub-section mt-10 text-[var(--color-text)]">{next.name}</h2>
              <p className="prana-sub-small mt-4 text-[var(--color-text-muted)]">{next.instructor} · {next.status}</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href={`/ko/templates/OHMT022-yoga/classes/${next.slug}`} className="prana-sub-small inline-flex min-h-12 items-center border border-[var(--color-border)] bg-white px-6 font-medium text-[var(--color-text)]">수업 정보</Link>
                <Link href="/ko/templates/OHMT022-yoga/schedule" className="prana-sub-small inline-flex min-h-12 items-center bg-[var(--color-accent)] px-6 font-medium text-white">시간 변경</Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] min-h-[300px] overflow-hidden bg-[var(--color-bg-secondary)] lg:min-h-[420px]">
              <Image src="/templates/OHMT022-yoga/class-vinyasa-v2.webp" alt="PRANA 스튜디오의 빈야사 플로우 수업" fill sizes="(max-width: 1023px) 100vw, 58vw" className="object-cover" />
            </div>
          </div>
        ) : <div><p className="prana-sub-label tracking-[0.16em] text-[var(--color-text-muted)]">{state === "error" ? "예약 정보를 불러올 수 없음" : "다음 수업 없음"}</p><h2 className="prana-sub-section mt-6 max-w-[15ch] text-[var(--color-text)]">{state === "error" ? "예약 내용은 그대로 보관되어 있습니다." : "이번 주 첫 수업을 골라보세요."}</h2><p className="prana-sub-small mt-6 max-w-xl leading-7 text-[var(--color-text-muted)]">{state === "error" ? "페이지를 다시 불러오거나 급한 변경은 스튜디오로 연락해 주세요." : "날짜와 수련을 고르면 확정된 일정이 여기에 표시됩니다."}</p><Link href={state === "error" ? "/ko/templates/OHMT022-yoga/mypage" : "/ko/templates/OHMT022-yoga/schedule"} className="prana-sub-small mt-7 inline-flex min-h-12 items-center bg-[var(--color-accent)] px-7 font-medium text-white">{state === "error" ? "다시 불러오기" : "수업 찾기"}</Link></div>}</div></section>

        <section className="px-6 py-20 md:px-14 md:py-28 lg:px-20 lg:py-32"><div className="mx-auto max-w-[1180px]"><div className="grid gap-7 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-8"><p className="prana-sub-label tracking-[0.16em] text-[var(--color-text-muted)]">UPCOMING</p><h2 className="prana-sub-section mt-5 text-[var(--color-text)]">다가오는 수업</h2></div><div className="lg:col-span-4 lg:text-right"><Link href="/ko/templates/OHMT022-yoga/schedule" className="prana-sub-small inline-flex min-h-12 items-center bg-[var(--color-accent)] px-7 font-medium text-white">수업 추가</Link></div></div><div className="mt-10 border-t border-[var(--color-text)]">{state === "ready" ? UPCOMING.slice(1).map((item) => <BookingRow key={item.id} item={item} />) : <p className="prana-sub-small py-10 text-[var(--color-text-muted)]">예약한 수업이 여기에 표시됩니다.</p>}</div><div className="mt-16 grid gap-6 border-t border-[var(--color-border)] pt-8 md:grid-cols-12 md:gap-10"><h2 className="prana-sub-title text-[var(--color-text)] md:col-span-4">늦은 변경에 도움이 필요하신가요?</h2><p className="prana-sub-small max-w-2xl leading-7 text-[var(--color-text-muted)] md:col-span-8">수업 시작 전에 스튜디오로 연락해 주세요. 다른 시간으로 옮길 수 있는지 확인해 드립니다.</p></div></div></section>
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
