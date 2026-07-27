import type { ButtonHTMLAttributes, ReactNode } from "react";

type TabButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active: boolean;
  children: ReactNode;
};

export function TabButton({
  active,
  children,
  className = "",
  type = "button",
  ...props
}: TabButtonProps) {
  return (
    <button
      type={type}
      role="tab"
      aria-selected={active}
      className={`rounded-full px-6 py-2 text-sm transition-all duration-200 focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-[var(--focus-ring-offset)] ${
        active
          ? "bg-[var(--bg-dark)] text-white"
          : "border border-white/40 text-white/70 hover:border-white/70 hover:text-white"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
