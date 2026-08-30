import type { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
};

type SectionHeadingProps = TextProps & {
  size?: "compact" | "default" | "large";
};

const headingSize = {
  compact: "text-[length:var(--text-h2)]",
  default: "text-[length:var(--text-h2)]",
  large: "text-[length:var(--text-h1)]",
};

export function SectionEyebrow({ children, className = "" }: TextProps) {
  return (
    <span
      className={`mb-6 block text-sm font-medium uppercase tracking-widest text-[var(--accent)] ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  children,
  className = "",
  size = "default",
}: SectionHeadingProps) {
  return (
    <h2
      className={`${headingSize[size]} break-keep font-semibold leading-[var(--leading-heading)] tracking-[-0.02em] text-white ${className}`}
    >
      {children}
    </h2>
  );
}

export function BodyText({ children, className = "" }: TextProps) {
  return (
    <p className={`resort-body text-base font-normal text-white/70 break-keep ${className}`}>
      {children}
    </p>
  );
}
