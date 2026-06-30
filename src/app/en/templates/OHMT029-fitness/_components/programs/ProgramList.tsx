"use client";
import { useState } from "react";

const tabs = ["1:1 PT", "Small Group", "Corporate Wellness"];

const programs: Record<string, { title: string; desc: string; image: string; duration: string; level: string; frequency: string }[]> = {
  "1:1 PT": [
    { title: "Precision Strength", desc: "One-on-one coaching focused on proper form, progressive overload, and measurable strength gains tailored to your body.", image: "program-strength.jpg", duration: "60 min", level: "All levels", frequency: "2-3x / week" },
    { title: "Recovery Therapy", desc: "Targeted recovery sessions combining mobility work, myofascial release, and guided relaxation techniques.", image: "program-recovery.jpg", duration: "60 min", level: "All levels", frequency: "1-2x / week" },
  ],
  "Small Group": [
    { title: "Balance & Flow", desc: "A dynamic blend of strength, flexibility, and breathwork designed to restore balance in a small-group setting for groups of up to 6.", image: "program-mobility.jpg", duration: "50 min", level: "All levels", frequency: "2x / week" },
    { title: "HIIT Performance", desc: "High-intensity interval training for maximum calorie burn and cardiovascular efficiency. Groups of up to 6.", image: "program-hiit.jpg", duration: "50 min", level: "Intermediate", frequency: "2x / week" },
  ],
  "Corporate Wellness": [
    { title: "Stress Management", desc: "Evidence-based techniques to reduce workplace stress, improve focus, and boost team well-being.", image: "about-hero.jpg", duration: "45 min", level: "Team session", frequency: "Custom" },
    { title: "Postural Recovery", desc: "Desk-worker specific program addressing postural imbalances, tension relief, and ergonomic awareness.", image: "cta-bg.jpg", duration: "45 min", level: "Team session", frequency: "Custom" },
  ],
};

export function ProgramList() {
  const [activeTab, setActiveTab] = useState("1:1 PT");
  const items = programs[activeTab];

  return (
    <section className="bg-[var(--bg)] py-24 md:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-1 mb-12 border-b border-[var(--border)]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 text-[13px] font-medium transition-colors border-b-2 -mb-[1px] whitespace-nowrap ${
                activeTab === tab
                  ? "text-[var(--accent)] border-[var(--accent)]"
                  : "text-[var(--text-muted)] border-transparent hover:text-[var(--text)]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((p) => (
            <div
              key={p.title}
              className="group border border-[var(--border)] rounded-lg overflow-hidden hover:shadow-md transition-all"
            >
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url('/templates/OHMT029-fitness/${p.image}')` }}
              />
              <div className="p-6 md:p-8">
                <h3 className="font-['Montserrat'] font-semibold text-[22px] text-[var(--text)] tracking-tight">{p.title}</h3>
                <p className="text-[15px] text-[var(--text-muted)] mt-3 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-4 mt-5 text-[12px]">
                  <span className="text-[var(--text-muted)]">Duration: <span className="text-[var(--text)] font-medium">{p.duration}</span></span>
                  <span className="text-[var(--text-muted)]">Level: <span className="text-[var(--text)] font-medium">{p.level}</span></span>
                  <span className="text-[var(--text-muted)]">Frequency: <span className="text-[var(--text)] font-medium">{p.frequency}</span></span>
                </div>
                <button className="mt-6 border border-[var(--border)] text-[var(--text)] text-[12px] font-semibold px-5 py-2.5 rounded-lg hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition-all tracking-wide">
                  Book a session →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
