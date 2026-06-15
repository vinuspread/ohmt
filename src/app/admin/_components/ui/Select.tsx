"use client";

import { useId, type SelectHTMLAttributes } from "react";
import { clsx } from "clsx";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
}

export function Select({ label, error, options, id, className, ...props }: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const errorId = `${selectId}-error`;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={selectId} className="text-sm font-medium text-zinc-700">
          {label}
        </label>
      )}
      <select
        id={selectId}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={clsx(
          "w-full px-3 py-2 text-sm border rounded-lg outline-none transition-colors border-zinc-200 focus:border-zinc-900 placeholder:text-zinc-400 disabled:bg-zinc-50 disabled:text-zinc-400 focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2",
          error && "border-red-400 focus:border-red-400",
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={errorId} className="text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
