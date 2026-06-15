"use client";

import { useId, type InputHTMLAttributes } from "react";
import { clsx } from "clsx";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export function Input({ label, error, hint, id, className, ...props }: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const messageId = `${inputId}-message`;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-zinc-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={error || hint ? messageId : undefined}
        className={clsx(
          "w-full px-3 py-2 text-sm border rounded-lg outline-none transition-colors border-zinc-200 focus:border-zinc-900 placeholder:text-zinc-400 disabled:bg-zinc-50 disabled:text-zinc-400 focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2",
          error && "border-red-400 focus:border-red-400",
          className
        )}
        {...props}
      />
      {error && (
        <p id={messageId} className="text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
      {!error && hint && (
        <p id={messageId} className="text-xs text-zinc-400">
          {hint}
        </p>
      )}
    </div>
  );
}
