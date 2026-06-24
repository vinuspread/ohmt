import { Suspense } from "react";
import Link from "next/link";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import Navbar from "../_components/Navbar";
import PageHeader from "../_components/PageHeader";
import Footer from "../_components/Footer";

const MY_SCHEDULE = [
  { date: "6월 16일 (월)", time: "오전 7:00", name: "비니야사 플로우", instructor: "소피아 첸", status: "예정" },
  { date: "6월 18일 (수)", time: "오후 6:30", name: "하타 요가",      instructor: "레나 박",   status: "예정" },
  { date: "6월 20일 (금)", time: "오전 8:00", name: "명상",           instructor: "마커스 웹", status: "예정" },
  { date: "6월 9일 (월)",  time: "오전 7:00", name: "비니야사 플로우", instructor: "소피아 첸", status: "완료" },
  { date: "6월 6일 (금)",  time: "오후 6:30", name: "필라테스",       instructor: "레나 박",   status: "완료" },
];

const PAYMENT_HISTORY = [
  { date: "2026. 6. 1",  desc: "월 정기권",  amount: "89,000원",  status: "결제완료" },
  { date: "2026. 5. 1",  desc: "월 정기권",  amount: "89,000원",  status: "결제완료" },
  { date: "2026. 4. 1",  desc: "월 정기권",  amount: "89,000원",  status: "결제완료" },
];

function MyPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <PageHeader
        title="마이페이지"
        subtitle="예약 내역, 멤버십, 계정 설정을 관리하세요."
        image="/templates/yoga/subpage-mypage.jpg"
      />

      {/* 프로필 + 스탯 */}
      <section className="grid grid-cols-1 lg:grid-cols-4 border-b border-[var(--color-border)]">
        {/* 프로필 */}
        <div className="px-8 md:px-14 lg:px-20 py-10 border-b lg:border-b-0 lg:border-r border-[var(--color-border)] bg-[var(--color-bg-alt)] flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <div
              className="w-16 h-16 rounded-full bg-cover bg-center flex-shrink-0"
              style={{ backgroundImage: "url('/templates/yoga/instructor-1.jpg')" }}
            />
            <div>
              <p
                className="text-[12px] tracking-[0.22em] uppercase text-[var(--color-text-muted)] mb-1"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                2024년 가입
              </p>
              <h2
                className="text-[20px] font-light text-[var(--color-text)] tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                김지수
              </h2>
              <p
                className="mt-0.5 text-[13px] text-[var(--color-text-muted)]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                jisoo.kim@email.com
              </p>
            </div>
          </div>
          <div className="pt-6 border-t border-[var(--color-border)]">
            <p
              className="text-[12px] tracking-[0.22em] uppercase text-[var(--color-text-muted)] mb-2"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              현재 플랜
            </p>
            <p
              className="text-[16px] font-light text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              월 정기권
            </p>
            <p
              className="mt-1 text-[13px] text-[var(--color-text-muted)]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              2026. 7. 1 갱신 · 89,000원/월
            </p>
          </div>
          <Link
            href="/ko/templates/OHMT022-yoga-KO/schedule"
            className="mt-2 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[var(--color-text)] hover:text-[var(--color-text-muted)] font-medium transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            클래스 예약 →
          </Link>
        </div>

        {/* 스탯 */}
        <div className="col-span-1 lg:col-span-3 grid grid-cols-3 divide-x divide-[var(--color-border)]">
          {[
            { value: "48",    label: "수강 횟수" },
            { value: "12",    label: "이번 달" },
            { value: "6개월", label: "연속 수강" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col justify-center px-8 py-8 border-b lg:border-b-0 border-[var(--color-border)]">
              <p
                className="text-[clamp(2rem,4vw,3rem)] font-light text-[var(--color-text)] tracking-[-0.02em] whitespace-nowrap"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </p>
              <p
                className="mt-2 text-[11px] tracking-[0.08em] uppercase text-[var(--color-text-muted)] whitespace-nowrap"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 나의 스케줄 */}
      <section className="bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        <div className="px-8 md:px-14 lg:px-20 pt-20 pb-14 border-b border-[var(--color-border)]">
          <p
            className="text-[12px] tracking-[0.25em] uppercase text-[var(--color-text-muted)] mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            예약 내역
          </p>
          <h2
            className="text-[clamp(1.6rem,3vw,2.8rem)] font-light text-[var(--color-text)] leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            나의 스케줄
          </h2>
        </div>

        <div className="divide-y divide-[var(--color-border)]">
          {MY_SCHEDULE.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-[5rem_1fr] md:grid-cols-[8rem_1fr_auto] items-center gap-x-6 md:gap-x-10 px-8 md:px-14 lg:px-20 py-6"
            >
              <div>
                <p
                  className="text-[11px] tracking-[0.08em] uppercase text-[var(--color-text-muted)]"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {item.date}
                </p>
                <p
                  className="mt-0.5 text-[12px] text-[var(--color-text-muted)]"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {item.time}
                </p>
              </div>
              <div className="min-w-0">
                <p
                  className="text-[15px] font-light text-[var(--color-text)] tracking-[-0.01em]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.name}
                </p>
                <p
                  className="mt-0.5 text-[12px] text-[var(--color-text-muted)]"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {item.instructor}
                </p>
              </div>
              <div className="hidden md:flex items-center gap-4">
                <span
                  className={`text-[10px] tracking-[0.15em] uppercase ${
                    item.status === "완료" ? "text-[var(--color-text-muted)]" : "text-[var(--color-text)]"
                  }`}
                  style={{ fontFamily: "var(--font-body)", fontWeight: item.status === "예정" ? 500 : 300 }}
                >
                  {item.status}
                </span>
                {item.status === "예정" && (
                  <button
                    className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    취소
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 결제 내역 + 계정 설정 */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[var(--color-border)]">

        {/* 결제 내역 */}
        <div className="border-b md:border-b-0 md:border-r border-[var(--color-border)] bg-[var(--color-bg-alt)]">
          <div className="px-8 md:px-14 lg:px-20 pt-14 pb-8 border-b border-[var(--color-border)]">
            <p
              className="text-[11px] tracking-[0.25em] uppercase text-[var(--color-text-muted)] mb-3"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              청구
            </p>
            <h2
              className="text-[clamp(1.4rem,2vw,2rem)] font-light text-[var(--color-text)] leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              결제 내역
            </h2>
          </div>
          <div className="divide-y divide-[var(--color-border)]">
            {PAYMENT_HISTORY.map((item, i) => (
              <div key={i} className="grid grid-cols-[5rem_1fr_auto] md:grid-cols-[8rem_1fr_auto] items-center gap-x-6 md:gap-x-10 px-8 md:px-14 lg:px-20 py-5">
                <p
                  className="text-[12px] text-[var(--color-text-muted)]"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {item.date}
                </p>
                <p
                  className="text-[14px] font-light text-[var(--color-text)] truncate"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.desc}
                </p>
                <div className="flex items-center gap-4">
                  <p
                    className="text-[14px] font-light text-[var(--color-text)]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.amount}
                  </p>
                  <span
                    className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-text-muted)]"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 계정 설정 */}
        <div className="bg-[var(--color-bg)]">
          <div className="px-8 md:px-14 lg:px-20 pt-14 pb-8 border-b border-[var(--color-border)]">
            <p
              className="text-[11px] tracking-[0.25em] uppercase text-[var(--color-text-muted)] mb-3"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              프로필
            </p>
            <h2
              className="text-[clamp(1.4rem,2vw,2rem)] font-light text-[var(--color-text)] leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              계정 설정
            </h2>
          </div>
          <div className="divide-y divide-[var(--color-border)]">
            {[
              { label: "이름",     value: "김지수" },
              { label: "이메일",   value: "jisoo.kim@email.com" },
              { label: "연락처",   value: "010-1234-5678" },
              { label: "비밀번호", value: "••••••••••" },
              { label: "알림 설정", value: "이메일 및 앱 푸시" },
            ].map((field) => (
              <div
                key={field.label}
                className="flex items-center justify-between px-8 md:px-14 lg:px-20 py-5 group hover:bg-[var(--color-bg-alt)] transition-colors"
              >
                <div className="flex items-center gap-6 min-w-0">
                  <p
                    className="text-[11px] tracking-[0.18em] uppercase text-[var(--color-text-muted)] w-24 flex-shrink-0"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {field.label}
                  </p>
                  <p
                    className="text-[14px] font-light text-[var(--color-text)] truncate"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {field.value}
                  </p>
                </div>
                <button
                  className="text-[10px] tracking-[0.18em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-text)] font-medium transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0 ml-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  수정 →
                </button>
              </div>
            ))}
          </div>
        </div>

      </section>

      <Footer />
    </TemplateWrapper>
  );
}

export default function MyPage() {
  return (
    <Suspense>
      <MyPageContent />
    </Suspense>
  );
}
