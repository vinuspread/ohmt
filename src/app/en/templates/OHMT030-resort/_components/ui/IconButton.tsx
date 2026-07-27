import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  tone?: "outline" | "solid";
};

const toneClass = {
  outline: "border border-white/40 text-white hover:bg-white/15",
  solid: "bg-white text-[var(--bg-dark)] hover:opacity-85",
};

export function IconButton({
  children,
  className = "",
  tone = "outline",
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={`flex size-12 items-center justify-center rounded-full transition-colors focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-[var(--focus-ring-offset)] ${toneClass[tone]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
