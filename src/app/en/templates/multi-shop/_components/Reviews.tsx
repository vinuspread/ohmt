"use client";
import React, { useState } from "react";
import { reviews } from "../data/data";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export const Reviews = () => {
  const [current, setCurrent] = useState(0);
  const review = reviews[current];

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  return (
    <section className="bg-[var(--color-bg-secondary)] py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={16} fill="var(--color-star)" color="var(--color-star)" />
            ))}
            <span className="text-sm text-[var(--color-text-muted)] ml-2">
              4.9 out of 5 ??500+ reviews
            </span>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div key={r.id} className="bg-white p-6">
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={13} fill="var(--color-star)" color="var(--color-star)" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-5 pt-4 border-t border-[var(--color-border)]">
                <p className="text-sm font-semibold text-[var(--color-text)]">{r.reviewer}</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{r.product}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden bg-white p-8 text-center">
          <div className="flex justify-center gap-0.5 mb-5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={16} fill="var(--color-star)" color="var(--color-star)" />
            ))}
          </div>
          <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
            &ldquo;{review.text}&rdquo;
          </p>
          <p className="text-sm font-semibold mt-5">{review.reviewer}</p>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">{review.product}</p>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button onClick={prev} className="p-1 hover:opacity-60 transition-opacity duration-200 active:scale-[0.95]" aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                    i === current ? "bg-[var(--color-primary)]" : "bg-[var(--color-border)]"
                  }`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-1 hover:opacity-60 transition-opacity duration-200 active:scale-[0.95]" aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
