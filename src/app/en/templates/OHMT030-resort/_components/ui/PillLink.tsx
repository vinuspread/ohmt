import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/ssr";

type PillLinkProps = {
  href: string;
  children: React.ReactNode;
  direction?: "left" | "right";
  tone?: "accent" | "outline" | "muted";
  className?: string;
};

export function PillLink({
  href,
  children,
  direction = "right",
  tone = "outline",
  className = "",
}: PillLinkProps) {
  const Icon = direction === "left" ? ArrowLeft : ArrowRight;
  const toneClass = {
    accent:
      "bg-[var(--accent)] text-[var(--text-contrast)] hover:bg-[var(--accent-hover)]",
    outline: "border border-white/40 text-white hover:bg-white/10",
    muted: "text-white/40 hover:text-white/70",
  }[tone];

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-[var(--focus-ring-offset)] ${toneClass} ${className}`}
    >
      {direction === "left" ? (
        <Icon size={14} weight="bold" aria-hidden="true" />
      ) : null}
      <span>{children}</span>
      {direction === "right" ? (
        <Icon size={14} weight="bold" aria-hidden="true" />
      ) : null}
    </Link>
  );
}
