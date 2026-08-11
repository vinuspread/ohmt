"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const basePath = "/en/templates/OHMT024-kids-education";

const upcoming = [
  { id: 1, title: "Young Scientists Day", date: "Jun 22", time: "10:00 AM", price: "$18", category: "Science", color: "var(--color-secondary)" },
  { id: 2, title: "Family Art Evening", date: "Jun 27", time: "5:30 PM", price: "$16", category: "Creative Arts", color: "var(--color-accent)" },
  { id: 3, title: "Coding Carnival", date: "Jul 8", time: "2:00 PM", price: "$22", category: "Technology", color: "var(--color-primary)" },
  { id: 4, title: "Math Adventures Camp", date: "Jul 15", time: "9:00 AM", price: "$28", category: "Math", color: "var(--color-red)" },
  { id: 5, title: "Summer Art Studio", date: "Jul 24", time: "3:00 PM", price: "$20", category: "Creative Arts", color: "var(--color-accent)" },
  { id: 6, title: "Robotics Workshop", date: "Aug 3", time: "11:00 AM", price: "$35", category: "Technology", color: "var(--color-secondary)" },
];

export default function Schedule() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <motion.div
          initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <span className="inline-flex items-center justify-center bg-[var(--color-primary)] rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-4">
              Upcoming Classes & Events
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              What's Coming Up
            </h2>
          </div>
          <Link
            href={`${basePath}/classes`}
            className="text-sm font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors duration-150 shrink-0"
          >
            See Full Schedule →
          </Link>
        </motion.div>

        {/* Event list */}
        <div className="border-t border-black/10">
          {upcoming.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.18, delay: idx * 0.04, ease: EASE_OUT }}
            >
              <Link
                href={`${basePath}/classes`}
                className="group grid grid-cols-[minmax(0,1fr)_auto_2.75rem] items-center gap-x-3 gap-y-3 border-b border-black/10 py-6 rounded-lg px-4 -mx-4 transition-colors duration-150 [@media(hover:hover)]:hover:bg-white sm:grid-cols-[9rem_minmax(0,1fr)_auto_auto_2.75rem] sm:gap-x-4 sm:gap-y-0"
              >
                {/* Category dot + label */}
                <div className="col-span-full flex items-center gap-2 sm:col-span-1">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: event.color }}
                  />
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                    {event.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="col-span-full min-w-0 text-lg font-bold leading-snug tracking-tight transition-colors duration-150 [@media(hover:hover)]:group-hover:text-[var(--color-primary)] sm:col-span-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {event.title}
                </h3>

                {/* Date / Time */}
                <div className="col-start-1 flex items-center gap-4 whitespace-nowrap text-sm font-semibold text-[var(--color-text-muted)] sm:col-start-auto sm:gap-6">
                  <span>{event.date}</span>
                  <span>{event.time}</span>
                </div>

                {/* Price */}
                <span
                  className="col-start-2 whitespace-nowrap text-right text-xl font-bold sm:col-start-auto sm:w-16"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {event.price}
                </span>

                {/* Arrow */}
                <span className="col-start-3 flex h-11 w-11 items-center justify-end text-[var(--color-text-muted)] transition-all duration-150 [@media(hover:hover)]:group-hover:translate-x-1 [@media(hover:hover)]:group-hover:text-[var(--color-primary)] sm:col-start-auto">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
