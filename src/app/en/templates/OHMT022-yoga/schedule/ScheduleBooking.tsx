
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
const DATE_FORMATTER = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", timeZone: "UTC" });

function getDate(weekOffset: number, dayIndex: number) {
  return new Date(BASE_WEEK_UTC + (weekOffset * 7 + dayIndex) * 86_400_000);
}
function formatDate(date: Date) {
  return DATE_FORMATTER.format(date);
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
            level: yogaClass?.level ?? "All Levels",
            duration: yogaClass?.duration ?? "60 min",
            preparation: yogaClass?.preparation ?? "Wear comfortable clothes.",
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
            <p className="prana-sub-label font-medium tracking-[0.16em] text-[var(--color-text-muted)]">YOUR BOOKING</p>
            <h3 className="mt-6 font-medium leading-[1.05] tracking-[-0.02em] text-[var(--color-text)]">Choose one time.</h3>
            <p className="mt-5 max-w-sm prana-sub-small leading-7 text-[var(--color-text-muted)]">Select a class from the day&apos;s list. Your details will appear here before anything is confirmed.</p>
          </>
        ) : (
          <>
            <p className="prana-sub-label font-medium tracking-[0.16em] text-[var(--color-text-muted)]">{bookingStatus === "complete" ? "BOOKING CONFIRMED" : "YOUR BOOKING"}</p>
            <h3 className="mt-6 font-medium leading-[1.05] tracking-[-0.02em] text-[var(--color-text)]">{selected.name}</h3>
            <p className="mt-4 prana-sub-body font-medium text-[var(--color-text)]">{selected.dateLabel} · {selected.time}</p>
            <p className="mt-2 prana-sub-small leading-6 text-[var(--color-text-muted)]">{selected.instructor}, {selected.level}, {selected.duration}</p>
            {bookingStatus === "error" ? <p className="mt-6 border-l-2 border-[var(--color-accent)] pl-4 prana-sub-small leading-6 text-[var(--color-text)]">We could not complete the booking. Please try again.</p> : null}
            {bookingStatus === "complete" ? (
              <>
                <p className="mt-6 prana-sub-small leading-7 text-[var(--color-text-muted)]">{selected.preparation}</p>
                <Link href="/en/templates/OHMT022-yoga/mypage" className="mt-7 inline-flex min-h-12 items-center justify-center bg-[var(--color-accent)] px-7 prana-sub-small font-medium text-white transition-opacity hover:opacity-85">View my booking</Link>
              </>
            ) : (
              <button type="button" onClick={submitBooking} disabled={bookingStatus === "submitting"} className="mt-7 min-h-12 bg-[var(--color-accent)] px-7 prana-sub-small font-medium text-white transition-opacity hover:opacity-85 disabled:cursor-wait disabled:opacity-60">
                {bookingStatus === "submitting" ? "Booking…" : bookingStatus === "error" ? "Try again" : "Book this class"}
              </button>
            )}
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );

  return (
    <>
      <section className="min-w-0 bg-white">
        <div className="min-w-0 bg-[var(--color-bg-alt)] px-6 py-12 md:px-14 md:py-16 lg:px-20 lg:py-20">
          <div className="mx-auto max-w-[1180px]">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="prana-sub-label uppercase tracking-[0.14em] text-[var(--color-text-muted)]">Selected week</p>
              <p className="mt-4 prana-sub-lead text-[var(--color-text)] [font-variant-numeric:tabular-nums]">{weekLabel}</p>
            </div>
            <nav aria-label="Change schedule week" className="flex flex-wrap items-center gap-1 prana-sub-small">
              <button type="button" onClick={() => changeWeek(weekOffset - 1)} className="min-h-11 px-3 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]">Previous</button>
              <button type="button" onClick={() => changeWeek(0)} className={`min-h-11 px-4 font-medium transition-colors ${weekOffset === 0 ? "bg-[var(--color-accent)] text-white" : "bg-white text-[var(--color-text)]"}`}>This week</button>
              <button type="button" onClick={() => changeWeek(weekOffset + 1)} className="min-h-11 px-3 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]">Next</button>
            </nav>
          </div>

          <div className="mt-10 overflow-x-auto border-y border-[var(--color-border)]">
            <div className="grid auto-cols-[6.75rem] grid-flow-col md:grid-cols-7 md:auto-cols-auto">
              {week.map((day, index) => (
                <button key={day.day} type="button" onClick={() => changeDay(index)} aria-pressed={index === activeDayIndex} className={`min-h-24 px-4 py-5 text-left transition-colors ${index === activeDayIndex ? "bg-[var(--color-text)] text-white" : "bg-transparent text-[var(--color-text)] hover:bg-white"}`}>
                  <span className={`block prana-sub-label uppercase tracking-[0.12em] ${index === activeDayIndex ? "text-white/60" : "text-[var(--color-text-muted)]"}`}>{day.day.slice(0, 3)}</span>
                  <span className="mt-3 block prana-sub-small font-medium">{day.dateLabel}</span>
                </button>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-white px-6 py-14 md:px-14 md:py-20 lg:px-20 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] items-start gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20">
          <div>
            <div className="mb-8 flex items-end justify-between border-b border-[var(--color-text)] pb-5">
              <div>
                <p className="prana-sub-label uppercase tracking-[0.14em] text-[var(--color-text-muted)]">Available on</p>
                <h2 className="mt-3 font-medium leading-none tracking-[-0.02em] text-[var(--color-text)]">{activeDay.day}</h2>
              </div>
              <p className="prana-sub-small text-[var(--color-text-muted)]">{activeDay.sessions.length} classes</p>
            </div>
            <div>
              {activeDay.sessions.map((session) => {
                const isSelected = selected?.id === session.id;
                return (
                  <button key={session.id} type="button" onClick={() => selectSession(session)} aria-pressed={isSelected} disabled={bookingStatus === "submitting"} className={`grid w-full gap-5 border-b border-[var(--color-border)] px-1 py-8 text-left transition-colors md:grid-cols-[7rem_minmax(0,1fr)_auto] md:items-center md:px-5 ${isSelected ? "bg-[var(--color-bg-alt)] shadow-[inset_3px_0_0_var(--color-accent)]" : "hover:bg-[var(--color-bg-alt)]"}`}>
                    <span className="prana-sub-lead font-medium tracking-[-0.02em] text-[var(--color-text)] [font-variant-numeric:tabular-nums]">{session.time}</span>
                    <span>
                      <span className="block prana-sub-lead font-medium tracking-[-0.02em] text-[var(--color-text)]">{session.name}</span>
                      <span className="mt-2 block prana-sub-small text-[var(--color-text-muted)]">{session.instructor}, {session.level}, {session.duration}</span>
                    </span>
                    <span className="prana-sub-small font-medium text-[var(--color-text)]">{isSelected ? "Selected" : "Select time"}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <aside className="border-t border-[var(--color-text)] pt-8 lg:sticky lg:top-28">{summaryContent}</aside>
        </div>
      </section>
    </>
  );
}
