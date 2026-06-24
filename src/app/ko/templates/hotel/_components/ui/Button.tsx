"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  href,
  className = "",
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-5 py-2.5",
    lg: "text-lg px-8 py-3.5",
  }[size];

  const variantClasses = {
    primary: "bg-[var(--color-primary)] text-[var(--color-bg)] hover:bg-[var(--color-accent)]",
    secondary: "bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-[var(--color-primary)]",
    outline: "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)]",
    ghost: "text-[var(--color-text)] hover:text-[var(--color-accent)]",
  }[variant];

  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const finalClassName = twMerge(clsx(baseClasses, sizeClasses, variantClasses, className));

  if (href) {
    return <Link href={href} className={finalClassName}>{children}</Link>;
  }

  return <button type="button" className={finalClassName} {...props}>{children}</button>;
}
