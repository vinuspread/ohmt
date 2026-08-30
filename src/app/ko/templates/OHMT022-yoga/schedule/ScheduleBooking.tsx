
"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { CLASSES, SCHEDULE } from "../constants";

type BookingStatus = "idle" | "submitting" | "complete" | "error";
type BookingSession = {
  id: string;
  day: string;
  dateLabel: string;
  time: string;
  name: string;
  instructor: string;
  slug: string;
  level: string;
  duration: string;
  preparation: string;
};
type ScheduleBookingProps = { preferredSlug?: string; preferredDay?: string; preferredTime?: string; demoState?: string };

const BASE_WEEK_UTC = Date.UTC(2026, 7, 24);
const CLASS_BY_SLUG = new Map(CLASSES.map((item) => [item.slug, item]));

function getDate(weekOffset: number, dayIndex: number) {
  return new Date(BASE_WEEK_UTC + (weekOffset * 7 + dayIndex) * 86_400_000);
}

function formatDate(date: Date) {
  return `${date.getUTCMonth() + 1}월 ${date.getUTCDate()}일`;
}

export function ScheduleBooking({ preferredSlug, preferredDay, preferredTime, demoState }: ScheduleBookingProps) {
  const reduceMotion = useReducedMotion();
  const initialDay = Math.max(0, SCHEDULE.findIndex((day) => day.day === preferredDay));
  const [weekOffset, setWeekOffset] = useState(0);
  const [activeDayIndex, setActiveDayIndex] = useState(initialDay);

  const week = useMemo(
    () =>
      SCHEDULE.map((day, dayIndex) => ({
        day: day.day,
        dateLabel: formatDate(getDate(weekOffset, dayIndex)),
        sessions: day.classes.map((session, sessionIndex): BookingSession => {
          const yogaClass = CLASS_BY_SLUG.get(session.slug);
          return {
            ...session,
            id: `${weekOffset}-${dayIndex}-${sessionIndex}`,
            day: day.day,
            dateLabel: formatDate(getDate(weekOffset, dayIndex)),
            level: yogaClass?.level ?? "모든 수준",
            duration: yogaClass?.duration ?? "60분",
            preparation: yogaClass?.preparation ?? "움직이기 편한 옷을 준비해 주세요.",
          };
        }),
      })),
    [weekOffset],
  );

  const [selected, setSelected] = useState<BookingSession | null>(() => {
    const sessions = week.flatMap((day) => day.sessions);
    if (!preferredSlug && !preferredDay && !preferredTime) return null;
    return (
      sessions.find(
        (session) =>
          (!preferredSlug || session.slug === preferredSlug) &&
          (!preferredDay || session.day === preferredDay) &&
          (!preferredTime || session.time === preferredTime),
      ) ??
      sessions.find((session) => session.slug === preferredSlug) ??
      null
    );
  });
  const [bookingStatus, setBookingStatus] = useState<BookingStatus>("idle");
  const bookingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeDay = week[activeDayIndex] ?? week[0];
  const weekLabel = `${formatDate(getDate(weekOffset, 0))} - ${formatDate(getDate(weekOffset, 6))}`;

  useEffect(() => () => {
    if (bookingTimer.current) clearTimeout(bookingTimer.current);
  }, []);

  function resetBooking() {
    if (bookingTimer.current) clearTimeout(bookingTimer.current);
    bookingTimer.current = null;
    setBookingStatus("idle");
  }

  function changeWeek(nextOffset: number) {
    resetBooking();
    setSelected(null);
    setActiveDayIndex(0);
    setWeekOffset(nextOffset);
  }

  function changeDay(index: number) {
    resetBooking();
    setSelected(null);
    setActiveDayIndex(index);
  }

  function selectSession(session: BookingSession) {
    if (bookingStatus === "submitting") return;
    resetBooking();
    setSelected(session);
  }

  function submitBooking() {
    if (!selected || bookingStatus === "submitting") return;
    setBookingStatus("submitting");
    bookingTimer.current = setTimeout(() => {
      setBookingStatus(demoState === "error" ? "error" : "complete");
      bookingTimer.current = null;
    }, 700);
  }

  const summaryContent = (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={selected ? `${selected.id}-${bookingStatus}` : "empty"}
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
        transition={{ duration: reduceMotion ? 0 : 0.2 }}
      >
        {!selected ? (
          <>
            <p className="prana-sub-label font-medium tracking-[0.16em] text-[var(--color-text-muted)]">예약 내용</p>
            <h3 className="mt-6 prana-sub-title font-medium leading-[1.08] tracking-[-0.04em] text-[var(--color-text)]">시간 하나를 선택하세요.</h3>
            <p className="mt-5 max-w-sm prana-sub-small leading-7 text-[var(--color-text-muted)]">원하는 수업을 고르면 예약 전에 날짜와 강사, 난이도를 한 번 더 확인할 수 있습니다.</p>
          </>
        ) : (
          <>
            <p className="prana-sub-label font-medium tracking-[0.16em] text-[var(--color-text-muted)]">{bookingStatus === "complete" ? "예약 확정" : "예약 내용"}</p>
            <h3 className="mt-6 prana-sub-title font-medium leading-[1.08] tracking-[-0.04em] text-[var(--color-text)]">{selected.name}</h3>
            <p className="mt-4 prana-sub-body font-medium text-[var(--color-text)]">{selected.dateLabel} · {selected.time}</p>
            <p className="mt-2 prana-sub-small leading-6 text-[var(--color-text-muted)]">{selected.instructor} · {selected.level} · {selected.duration}</p>
            {bookingStatus === "error" ? <p className="mt-6 border-l-2 border-[var(--color-accent)] pl-4 prana-sub-small leading-6 text-[var(--color-text)]">예약을 마치지 못했습니다. 다시 시도해 주세요.</p> : null}
            {bookingStatus === "complete" ? (
              <>
                <p className="mt-6 prana-sub-small leading-7 text-[var(--color-text-muted)]">{selected.preparation}</p>
                <Link href="/ko/templates/OHMT022-yoga/mypage" className="mt-7 inline-flex min-h-12 items-center justify-center bg-[var(--color-accent)] px-7 prana-sub-small font-medium text-white transition-opacity hover:opacity-85">예약 내역 보기</Link>
              </>
            ) : (
              <button type="button" onClick={submitBooking} disabled={bookingStatus === "submitting"} className="mt-7 min-h-12 bg-[var(--color-accent)] px-7 prana-sub-small font-medium text-white transition-opacity hover:opacity-85 disabled:cursor-wait disabled:opacity-60">
                {bookingStatus === "submitting" ? "예약 중…" : bookingStatus === "error" ? "다시 시도하기" : "이 수업 예약하기"}
              </button>
            )}
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );

  return (
    <section className="bg-white px-6 py-20 md:px-14 md:py-24 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-[1180px] break-keep">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="prana-sub-section font-medium leading-[1.08] tracking-[-0.045em] text-[var(--color-text)]">날짜를 선택하세요</h2>
            <p className="mt-4 prana-sub-body text-[var(--color-text-muted)] [font-variant-numeric:tabular-nums]">{weekLabel}</p>
          </div>
          <nav aria-label="주간 일정 변경" className="flex items-center gap-2 prana-sub-small">
            <button type="button" onClick={() => changeWeek(weekOffset - 1)} className="min-h-11 px-3 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]">← 이전 주</button>
            <button type="button" onClick={() => changeWeek(0)} className={`min-h-11 px-5 font-medium transition-colors ${weekOffset === 0 ? "bg-[var(--color-accent)] text-white" : "bg-[var(--color-bg-alt)] text-[var(--color-text)]"}`}>이번 주</button>
            <button type="button" onClick={() => changeWeek(weekOffset + 1)} className="min-h-11 px-3 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]">다음 주 →</button>
          </nav>
        </div>

        <div className="mt-10 overflow-x-auto border-y border-[var(--color-border)] md:mt-12">
          <div className="grid auto-cols-[7rem] grid-flow-col md:grid-cols-7 md:auto-cols-auto">
            {week.map((day, index) => (
              <button key={day.day} type="button" onClick={() => changeDay(index)} aria-pressed={index === activeDayIndex} className={`min-h-24 px-5 py-5 text-left transition-colors ${index === activeDayIndex ? "bg-[var(--color-accent)] text-white" : "bg-white text-[var(--color-text)] hover:bg-[var(--color-bg-alt)]"}`}>
                <span className={`block prana-sub-label tracking-[0.08em] ${index === activeDayIndex ? "text-white/60" : "text-[var(--color-text-muted)]"}`}>{day.day}</span>
                <span className="mt-3 block prana-sub-body font-medium">{day.dateLabel}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-20">
          <div>
            <div className="mb-6 flex items-end justify-between">
              <h3 className="prana-sub-title font-medium tracking-[-0.035em] text-[var(--color-text)]">{activeDay.day}</h3>
              <p className="prana-sub-small text-[var(--color-text-muted)]">수업 {activeDay.sessions.length}개</p>
            </div>
            <div className="border-t border-[var(--color-border)]">
              {activeDay.sessions.map((session) => {
                const isSelected = selected?.id === session.id;
                return (
                  <button key={session.id} type="button" onClick={() => selectSession(session)} aria-pressed={isSelected} disabled={bookingStatus === "submitting"} className={`grid w-full gap-5 border-b border-[var(--color-border)] px-1 py-8 text-left transition-colors md:grid-cols-[7rem_minmax(0,1fr)_auto] md:items-center md:px-5 ${isSelected ? "bg-[var(--color-bg-alt)] shadow-[inset_3px_0_0_var(--color-accent)]" : "hover:bg-[var(--color-bg-alt)]"}`}>
                    <span className="prana-sub-title font-medium tracking-[-0.03em] text-[var(--color-text)] [font-variant-numeric:tabular-nums]">{session.time}</span>
                    <span>
                      <span className="block prana-sub-lead font-medium tracking-[-0.02em] text-[var(--color-text)]">{session.name}</span>
                      <span className="mt-2 block prana-sub-small text-[var(--color-text-muted)]">{session.instructor} · {session.level} · {session.duration}</span>
                    </span>
                    <span className="prana-sub-small font-medium text-[var(--color-text)]">{isSelected ? "선택됨" : "선택 →"}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <aside className="border-t border-[var(--color-text)] pt-8 lg:sticky lg:top-28">{summaryContent}</aside>
        </div>
      </div>
    </section>
  );
}
