import { Suspense } from "react";
import Link from "next/link";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import Navbar from "../_components/Navbar";
import PageHeader from "../_components/PageHeader";
import Footer from "../_components/Footer";

const MY_SCHEDULE = [
  { date: "Mon, Jun 16", time: "07:00 AM", name: "Vinyasa Flow", instructor: "Sophia Chen", status: "Upcoming" },
  { date: "Wed, Jun 18", time: "06:30 PM", name: "Hatha Yoga", instructor: "Lena Park", status: "Upcoming" },
  { date: "Fri, Jun 20", time: "08:00 AM", name: "Meditation", instructor: "Marcus Webb", status: "Upcoming" },
  { date: "Mon, Jun 9",  time: "07:00 AM", name: "Vinyasa Flow", instructor: "Sophia Chen", status: "Completed" },
  { date: "Fri, Jun 6",  time: "06:30 PM", name: "Pilates",      instructor: "Lena Park",   status: "Completed" },
];

const PAYMENT_HISTORY = [
  { date: "Jun 1, 2026",  desc: "Monthly Membership",  amount: "$89.00",  status: "Paid" },
  { date: "May 1, 2026",  desc: "Monthly Membership",  amount: "$89.00",  status: "Paid" },
  { date: "Apr 1, 2026",  desc: "Monthly Membership",  amount: "$89.00",  status: "Paid" },
];

function MyPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <PageHeader
        title="My Page"
        subtitle="Manage your bookings, membership, and account settings."
        image="/templates/OHMT022-yoga/subpage-mypage.jpg"
      />

      {/* Profile + stats row */}
      <section className="grid grid-cols-1 lg:grid-cols-4 border-b border-[var(--color-border)]">
        {/* Profile */}
        <div className="px-8 md:px-14 lg:px-20 py-10 border-b lg:border-b-0 lg:border-r border-[var(--color-border)] bg-[var(--color-bg-alt)] flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <div
              className="w-16 h-16 rounded-full bg-cover bg-center flex-shrink-0"
              style={{ backgroundImage: "url('/templates/OHMT022-yoga/instructor-1.jpg')" }}
            />
            <div>
              <p
                className="text-[12px] tracking-[0.22em] uppercase text-[var(--color-text-muted)] mb-1"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                Member since 2024
              </p>
              <h2
                className="text-[20px] font-light text-[var(--color-text)] tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Alex Kim
              </h2>
              <p
                className="mt-0.5 text-[15px] text-[var(--color-text-muted)]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                alex.kim@email.com
              </p>
            </div>
          </div>
          <div className="pt-6 border-t border-[var(--color-border)]">
            <p
              className="text-[12px] tracking-[0.22em] uppercase text-[var(--color-text-muted)] mb-2"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Current Plan
            </p>
            <p
              className="text-[16px] font-light text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Monthly Membership
            </p>
            <p
              className="mt-1 text-[15px] text-[var(--color-text-muted)]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Renews Jul 1, 2026 · $89/mo
            </p>
          </div>
          <Link
            href="/en/templates/OHMT022-yoga/schedule"
            className="mt-2 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[var(--color-text)] hover:text-[var(--color-text-muted)] font-medium transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Book a Class →
          </Link>
        </div>

        {/* Stats */}
        <div className="col-span-1 lg:col-span-3 grid grid-cols-3 divide-x divide-[var(--color-border)]">
          {[
            { value: "48",    label: "Classes Attended" },
            { value: "12",    label: "This Month" },
            { value: "6 mo",  label: "Active Streak" },
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

      {/* My Schedule */}
      <section className="bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        <div className="px-8 md:px-14 lg:px-20 pt-20 pb-14 border-b border-[var(--color-border)]">
          <p
            className="text-[12px] tracking-[0.25em] uppercase text-[var(--color-text-muted)] mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Reservations
          </p>
          <h2
            className="text-[clamp(1.6rem,3vw,2.8rem)] font-light text-[var(--color-text)] leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            My Schedule
          </h2>
        </div>

        <div className="divide-y divide-[var(--color-border)]">
          {MY_SCHEDULE.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-[5rem_1fr] md:grid-cols-[8rem_1fr_auto] items-center gap-x-6 md:gap-x-10 px-8 md:px-14 lg:px-20 py-6"
            >
              {/* Date / Time */}
              <div>
                <p
                  className="text-[11px] tracking-[0.12em] uppercase text-[var(--color-text-muted)]"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {item.date}
                </p>
                <p
                  className="mt-0.5 text-[14px] text-[var(--color-text-muted)]"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {item.time}
                </p>
              </div>

              {/* Class / Instructor */}
              <div className="min-w-0">
                <p
                  className="text-[15px] font-light text-[var(--color-text)] tracking-[-0.01em]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.name}
                </p>
                <p
                  className="mt-0.5 text-[14px] text-[var(--color-text-muted)]"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {item.instructor}
                </p>
              </div>

              {/* Status - desktop only */}
              <div className="hidden md:flex items-center gap-4">
                <span
                  className={`text-[10px] tracking-[0.15em] uppercase ${
                    item.status === "Completed"
                      ? "text-[var(--color-text-muted)]"
                      : "text-[var(--color-text)]"
                  }`}
                  style={{ fontFamily: "var(--font-body)", fontWeight: item.status === "Upcoming" ? 500 : 300 }}
                >
                  {item.status}
                </span>
                {item.status === "Upcoming" && (
                  <button
                    className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Payment + Account - side by side */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[var(--color-border)]">

        {/* Left: Payment History */}
        <div className="border-b md:border-b-0 md:border-r border-[var(--color-border)] bg-[var(--color-bg-alt)]">
          <div className="px-8 md:px-14 lg:px-20 pt-14 pb-8 border-b border-[var(--color-border)]">
            <p
              className="text-[11px] tracking-[0.25em] uppercase text-[var(--color-text-muted)] mb-3"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Billing
            </p>
            <h2
              className="text-[clamp(1.4rem,2vw,2rem)] font-light text-[var(--color-text)] leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Payment History
            </h2>
          </div>
          <div className="divide-y divide-[var(--color-border)]">
            {PAYMENT_HISTORY.map((item, i) => (
              <div key={i} className="grid grid-cols-[5rem_1fr_auto] md:grid-cols-[8rem_1fr_auto] items-center gap-x-6 md:gap-x-10 px-8 md:px-14 lg:px-20 py-5">
                <p
                  className="text-[14px] text-[var(--color-text-muted)]"
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

        {/* Right: Account Settings */}
        <div className="bg-[var(--color-bg)]">
          <div className="px-8 md:px-14 lg:px-20 pt-14 pb-8 border-b border-[var(--color-border)]">
            <p
              className="text-[11px] tracking-[0.25em] uppercase text-[var(--color-text-muted)] mb-3"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Profile
            </p>
            <h2
              className="text-[clamp(1.4rem,2vw,2rem)] font-light text-[var(--color-text)] leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Account Settings
            </h2>
          </div>
          <div className="divide-y divide-[var(--color-border)]">
            {[
              { label: "Full Name",     value: "Alex Kim" },
              { label: "Email",         value: "alex.kim@email.com" },
              { label: "Phone",         value: "+1 (555) 012-3456" },
              { label: "Password",      value: "••••••••••" },
              { label: "Notifications", value: "Email & Push" },
            ].map((field) => (
              <div
                key={field.label}
                className="flex items-center justify-between px-8 md:px-14 lg:px-20 py-5 group hover:bg-[var(--color-bg-alt)] transition-colors"
              >
                <div className="flex items-center gap-6 min-w-0">
                  <p
                    className="text-[11px] tracking-[0.18em] uppercase text-[var(--color-text-muted)] w-28 flex-shrink-0"
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
                  Edit →
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
