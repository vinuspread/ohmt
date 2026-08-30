type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  rating: string;
};

export function TestimonialCard({
  quote,
  name,
  role,
  rating,
}: TestimonialCardProps) {
  return (
    <article className="flex min-h-[220px] flex-col justify-between rounded-2xl bg-white p-6">
      <p className="text-sm leading-[var(--leading-body)] text-[var(--text-dark)]">
        {quote}
      </p>
      <div className="mt-6 flex items-end justify-between border-t border-black/10 pt-5">
        <div>
          <p className="text-sm font-semibold text-[var(--text-dark)]">
            {name}
          </p>
          <p className="mt-0.5 text-xs text-[var(--text-dark)]/60">
            {role}
          </p>
        </div>
        <p className="text-2xl font-semibold leading-none text-[var(--text-dark)]">
          {rating}
          <span className="text-xs font-normal text-[var(--text-dark)]/50">
            /10
          </span>
        </p>
      </div>
    </article>
  );
}
