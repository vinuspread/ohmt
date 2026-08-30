type TimelineItemProps = {
  year: string;
  title: string;
  desc: string;
};

export function TimelineItem({ year, title, desc }: TimelineItemProps) {
  return (
    <div className="group flex gap-5">
      <div className="flex w-[10px] shrink-0 justify-center pt-2.5">
        <span className="h-[10px] w-[10px] rounded-full bg-neutral-300 transition-colors duration-300 group-hover:bg-[var(--bg)]" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <span className="text-2xl font-semibold leading-[var(--leading-heading)] text-neutral-800">
          {year}
        </span>
        <h3 className="text-lg font-semibold leading-[var(--leading-heading)] text-neutral-900 transition-colors duration-300 group-hover:text-[var(--bg)]">
          {title}
        </h3>
        <p className="text-sm leading-[var(--leading-body)] text-neutral-500">{desc}</p>
      </div>
    </div>
  );
}
