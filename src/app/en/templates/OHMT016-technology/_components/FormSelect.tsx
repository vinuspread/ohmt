"use client"

import { useEffect, useId, useRef, useState } from "react"

export type FormSelectOption = {
  value: string
  label: string
}

type FormSelectProps = {
  id: string
  name: string
  value: string
  options: FormSelectOption[]
  placeholder: string
  onChange: (value: string) => void
  required?: boolean
}

export default function FormSelect({
  id,
  name,
  value,
  options,
  placeholder,
  onChange,
  required = false,
}: FormSelectProps) {
  const listboxId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const selectedIndex = options.findIndex((option) => option.value === value)
  const [activeIndex, setActiveIndex] = useState(Math.max(selectedIndex, 0))
  const selectedOption = options[selectedIndex]

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick)
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick)
  }, [])

  const selectOption = (index: number) => {
    const option = options[index]
    if (!option) return
    onChange(option.value)
    setActiveIndex(index)
    setOpen(false)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Escape") {
      setOpen(false)
      return
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault()
      const direction = event.key === "ArrowDown" ? 1 : -1
      setOpen(true)
      setActiveIndex((current) => (current + direction + options.length) % options.length)
      return
    }

    if ((event.key === "Enter" || event.key === " ") && open) {
      event.preventDefault()
      selectOption(activeIndex)
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        id={id}
        type="button"
        role="combobox"
        aria-controls={listboxId}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-required={required}
        aria-activedescendant={open ? `${listboxId}-${activeIndex}` : undefined}
        onClick={() => {
          setActiveIndex(Math.max(selectedIndex, 0))
          setOpen((current) => !current)
        }}
        onKeyDown={handleKeyDown}
        className="flex w-full items-center justify-between gap-4 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-left text-sm text-[var(--color-text)] outline-none transition-colors duration-200 hover:border-[var(--color-text-muted)] focus-visible:border-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/20"
      >
        <span className={selectedOption ? "" : "text-[var(--color-text-muted)]"}>
          {selectedOption?.label ?? placeholder}
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={`h-3.5 w-3.5 shrink-0 text-[var(--color-text-muted)] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          id={listboxId}
          role="listbox"
          aria-labelledby={id}
          className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-md border border-[var(--color-border)] bg-white p-1 shadow-[0_4px_8px_rgba(0,0,0,0.12)]"
        >
          {options.map((option, index) => {
            const selected = option.value === value
            const active = index === activeIndex

            return (
              <button
                id={`${listboxId}-${index}`}
                key={option.value}
                type="button"
                role="option"
                aria-selected={selected}
                onPointerEnter={() => setActiveIndex(index)}
                onClick={() => selectOption(index)}
                className={`flex w-full items-center justify-between rounded px-3 py-2.5 text-left text-sm transition-colors ${
                  selected
                    ? "bg-[var(--color-accent)] text-white"
                    : active
                      ? "bg-neutral-100 text-neutral-950"
                      : "bg-white text-neutral-800"
                }`}
              >
                <span>{option.label}</span>
                {selected && <span aria-hidden="true">✓</span>}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
