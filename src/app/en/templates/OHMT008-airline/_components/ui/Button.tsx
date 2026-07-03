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

  // Variant variants using CSS variables
  const variantClasses = {
    primary: `bg-[var(--color-accent)] text-[var(--color-primary)] hover:brightness-110`,
    secondary: `bg-[var(--color-primary)] text-[var(--color-primary-foreground, #ffffff)] hover:brightness-110`,
    outline: `border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white`,
    ghost: `hover:bg-[var(--color-accent)] hover:text-white`,
  }[variant];

  // Base classes
  const baseClasses = `inline-flex items-center justify-center rounded-none font-medium transition-[background,color,border-color,transform,filter] duration-[var(--transition-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97]`;

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