import { clsx } from "clsx";

export type BadgeStatus = "uploaded" | "published" | "draft" | "archived" | "paid" | "pending" | "cancelled";

export interface BadgeProps {
  status: BadgeStatus;
  label?: string;
}

const statusClasses: Record<BadgeStatus, { badge: string; dot: string }> = {
  uploaded: { badge: "bg-violet-50 text-violet-700", dot: "bg-violet-500" },
  published: { badge: "bg-emerald-50 text-emerald-700", dot: "bg-emerald-500" },
  draft: { badge: "bg-zinc-100 text-zinc-600", dot: "bg-zinc-400" },
  archived: { badge: "bg-red-50 text-red-600", dot: "bg-red-400" },
  paid: { badge: "bg-blue-50 text-blue-700", dot: "bg-blue-500" },
  pending: { badge: "bg-amber-50 text-amber-700", dot: "bg-amber-500" },
  cancelled: { badge: "bg-zinc-100 text-zinc-500", dot: "bg-zinc-400" },
};

export function Badge({ status, label }: BadgeProps) {
  const classes = statusClasses[status];

  return (
    <span className={clsx("inline-flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-full", classes.badge)}>
      <span aria-hidden="true" className={clsx("inline-block w-1.5 h-1.5 rounded-full", classes.dot)} />
      {label ?? status}
    </span>
  );
}
