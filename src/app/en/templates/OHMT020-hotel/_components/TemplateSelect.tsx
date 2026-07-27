"use client"

import {
  Children,
  isValidElement,
  useEffect,
  useId,
  useRef,
  useState,
  type OptionHTMLAttributes,
  type ReactElement,
  type ReactNode,
  type SelectHTMLAttributes,
} from "react"
import { createPortal } from "react-dom"

type TemplateSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "multiple" | "size">

type SelectOption = {
  value: string
  label: ReactNode
  disabled: boolean
}

export default function TemplateSelect({
  children,
  className = "",
  value,
  defaultValue,
  onChange,
  id,
  disabled,
  ...selectProps
}: TemplateSelectProps) {
  const generatedId = useId()
  const controlId = id ?? `template-select-${generatedId}`
  const listboxId = `${controlId}-listbox`
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const nativeSelectRef = useRef<HTMLSelectElement>(null)
  const options = Children.toArray(children).flatMap<SelectOption>((child) => {
    if (!isValidElement(child) || child.type !== "option") return []
    const option = child as ReactElement<OptionHTMLAttributes<HTMLOptionElement>>
    return [{
      value: String(option.props.value ?? ""),
      label: option.props.children,
      disabled: Boolean(option.props.disabled),
    }]
  })
  const initialValue = String(value ?? defaultValue ?? options[0]?.value ?? "")
  const [internalValue, setInternalValue] = useState(initialValue)
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(() => Math.max(options.findIndex((option) => option.value === initialValue), 0))
  const selectedValue = value === undefined ? internalValue : String(value)
  const selectedOption = options.find((option) => option.value === selectedValue)
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0, width: 0 })

  const updateMenuPosition = () => {
    const rect = buttonRef.current?.getBoundingClientRect()
    if (!rect) return
    setMenuPosition({ top: rect.bottom + 8, left: rect.left, width: rect.width })
  }

  useEffect(() => {
    if (!open) return
    updateMenuPosition()
    const close = (event: PointerEvent) => {
      const target = event.target as Node
      if (!rootRef.current?.contains(target) && !menuRef.current?.contains(target)) setOpen(false)
    }
    const closeOnViewportChange = () => setOpen(false)
    document.addEventListener("pointerdown", close)
    window.addEventListener("resize", closeOnViewportChange)
    window.addEventListener("scroll", closeOnViewportChange, true)
    return () => {
      document.removeEventListener("pointerdown", close)
      window.removeEventListener("resize", closeOnViewportChange)
      window.removeEventListener("scroll", closeOnViewportChange, true)
    }
  }, [open])

  const choose = (index: number) => {
    const option = options[index]
    if (!option || option.disabled) return
    if (value === undefined) setInternalValue(option.value)
    const nativeSelect = nativeSelectRef.current
    if (nativeSelect) {
      nativeSelect.value = option.value
      nativeSelect.dispatchEvent(new Event("change", { bubbles: true }))
    }
    setActiveIndex(index)
    setOpen(false)
    buttonRef.current?.focus()
  }

  const move = (direction: 1 | -1) => {
    if (!options.length) return
    let next = activeIndex
    do {
      next = (next + direction + options.length) % options.length
    } while (options[next]?.disabled && next !== activeIndex)
    setActiveIndex(next)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Escape") {
      setOpen(false)
      return
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault()
      if (!open) {
        updateMenuPosition()
        setOpen(true)
      }
      move(event.key === "ArrowDown" ? 1 : -1)
      return
    }
    if ((event.key === "Enter" || event.key === " ") && open) {
      event.preventDefault()
      choose(activeIndex)
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <select
        {...selectProps}
        ref={nativeSelectRef}
        id={`${controlId}-native`}
        value={selectedValue}
        disabled={disabled}
        onChange={(event) => {
          if (value === undefined) setInternalValue(event.target.value)
          onChange?.(event)
        }}
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
      >
        {children}
      </select>

      <button
        ref={buttonRef}
        id={controlId}
        type="button"
        role="combobox"
        aria-controls={listboxId}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-activedescendant={open ? `${listboxId}-${activeIndex}` : undefined}
        disabled={disabled}
        onClick={() => {
          updateMenuPosition()
          setActiveIndex(Math.max(options.findIndex((option) => option.value === selectedValue), 0))
          setOpen((current) => !current)
        }}
        onKeyDown={handleKeyDown}
        className={`relative flex min-h-9 w-full items-center justify-between gap-3 text-left disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      >
        <span className="min-w-0 truncate">{selectedOption?.label ?? options[0]?.label}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && typeof document !== "undefined" && createPortal(
        <div
          ref={menuRef}
          id={listboxId}
          role="listbox"
          aria-labelledby={controlId}
          className="fixed z-[90] max-h-72 overflow-y-auto rounded-md border border-neutral-200 bg-white p-1 text-neutral-950 shadow-[0_4px_8px_rgba(0,0,0,0.12)]"
          style={{ top: menuPosition.top, left: menuPosition.left, width: menuPosition.width }}
        >
          {options.map((option, index) => {
            const selected = option.value === selectedValue
            const active = index === activeIndex
            return (
              <button
                id={`${listboxId}-${index}`}
                key={`${option.value}-${index}`}
                type="button"
                role="option"
                aria-selected={selected}
                disabled={option.disabled}
                onPointerEnter={() => !option.disabled && setActiveIndex(index)}
                onClick={() => choose(index)}
                className={`flex w-full items-center justify-between rounded px-3 py-2.5 text-left text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                  selected
                    ? "bg-neutral-900 text-white"
                    : active
                      ? "bg-neutral-100 text-neutral-950"
                      : "bg-white text-neutral-800"
                }`}
              >
                <span className="min-w-0 truncate">{option.label}</span>
                {selected && <span aria-hidden="true">✓</span>}
              </button>
            )
          })}
        </div>,
        document.body,
      )}
    </div>
  )
}
