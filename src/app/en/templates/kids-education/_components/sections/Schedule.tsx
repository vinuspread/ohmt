"use client";

import { motion, useReducedMotion } from "framer-motion";
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
                className="group flex flex-wrap sm:flex-nowrap items-center gap-4 border-b border-black/10 py-5 rounded-lg px-4 -mx-4 [@media(hover:hover)]:hover:bg-white transition-colors duration-150"
              >
                {/* Category dot + label */}
                <div className="flex items-center gap-2 w-full sm:w-36 shrink-0">
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
                  className="flex-1 text-lg font-bold tracking-tight [@media(hover:hover)]:group-hover:text-[var(--color-primary)] transition-colors duration-150"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {event.title}
                </h3>

                {/* Date / Time */}
                <div className="flex items-center gap-6 text-sm text-[var(--color-text-muted)] font-semibold">
                  <span>{event.date}</span>
                  <span>{event.time}</span>
                </div>

                {/* Price */}
                <span
                  className="text-xl font-bold w-16 text-right"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {event.price}
                </span>

                {/* Arrow */}
                <span className="text-[var(--color-text-muted)] [@media(hover:hover)]:group-hover:text-[var(--color-primary)] [@media(hover:hover)]:group-hover:translate-x-1 transition-all duration-150">
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
