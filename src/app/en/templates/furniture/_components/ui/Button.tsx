import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export function Button({
  href,
  className = "",
  variant = "primary",
  size = "md",
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  // Base classes - polymorphic rendering
  const Component = href ? Link : "button";

  // Size variants
  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  }[size];

  // Variant variants using CSS variables from furniture theme
  const variantClasses = {
    primary: `bg-[var(--color-primary)] text-[var(--color-bg)] hover:bg-black/80`,
    secondary: `bg-[var(--color-bg)] text-[var(--color-primary)] hover:bg-[var(--color-bg)]/50`,
    outline: `border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10`,
    ghost: `hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]`,
  }[variant];

  // Base classes
  const baseClasses = `inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none`;

  const finalClassName = twMerge(
    clsx(
      baseClasses,
      sizeClasses,
      variantClasses,
      className
    )
  );

  if (href) {
    return (
      <Link href={href} className={finalClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={finalClassName}
      {...props}
    >
      {children}
    </button>
  );
}