import { useEffect, useId, useLayoutEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import type { Lang } from "../content"

export type LanguageProps = {
  lang: Lang
  setLang: (lang: Lang) => void
}
const languages = [
  { value: "en", label: "English" },
  { value: "ms", label: "Bahasa Malaysia" },
] as const

function Flag({ lang }: { lang: Lang }) {
  const clip = useId()
  return (
    <svg aria-hidden="true" viewBox="0 0 60 30" className="language-flag">
      <defs>
        <clipPath id={clip}>
          <rect width="60" height="30" rx="2" />
        </clipPath>
        <clipPath id={`${clip}-saltire`}>
          <path d="M30 15H0V0zM30 15V0h30zM30 15h30v15zM30 15v15H0z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        {lang === "en" ? (
          <>
            <path fill="#012169" d="M0 0h60v30H0z" />
            <path stroke="white" strokeWidth="6" d="m0 0 60 30m0-30L0 30" />
            <path
              clipPath={`url(#${clip}-saltire)`}
              stroke="#C8102E"
              strokeWidth="4"
              d="m0 0 60 30m0-30L0 30"
            />
            <path stroke="white" strokeWidth="10" d="M30 0v30M0 15h60" />
            <path stroke="#C8102E" strokeWidth="6" d="M30 0v30M0 15h60" />
          </>
        ) : (
          <>
            <path fill="white" d="M0 0h60v30H0z" />
            {Array.from({ length: 7 }, (_, i) => (
              <rect
                key={i}
                y={(i * 30) / 7}
                width="60"
                height={30 / 14}
                fill="#CC0001"
              />
            ))}
            <path fill="#010066" d="M0 0h30v17.143H0z" />
            <circle cx="11" cy="8.57" r="6.2" fill="#FFCC00" />
            <circle cx="13" cy="8.57" r="5.2" fill="#010066" />
            <polygon
              fill="#FFCC00"
              points={Array.from({ length: 28 }, (_, i) => {
                const angle = (i * Math.PI) / 14 - Math.PI / 2
                const radius = i % 2 ? 2.1 : 5.2
                return `${21 + Math.cos(angle) * radius},${8.57 + Math.sin(angle) * radius}`
              }).join(" ")}
            />
          </>
        )}
      </g>
    </svg>
  )
}

export function LanguageSelector({
  lang,
  setLang,
  active = true,
}: LanguageProps & { active?: boolean }) {
  const [open, setOpen] = useState(false)
  const [portal, setPortal] = useState<HTMLElement | null>(null)
  const [position, setPosition] = useState({ top: 0, left: 0, width: 196 })
  const root = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const menu = useRef<HTMLDivElement>(null)
  const options = useRef<(HTMLButtonElement | null)[]>([])
  const firstFocus = useRef(0)
  const id = useId()
  const selected = languages.find((item) => item.value === lang)!

  useEffect(() => setPortal(document.body), [])
  useEffect(() => {
    if (!active) setOpen(false)
  }, [active])
  useLayoutEffect(() => {
    if (!open || !trigger.current) return
    const rect = trigger.current.getBoundingClientRect()
    const width = Math.min(196, window.innerWidth - 24)
    const height = 104
    setPosition({
      width,
      left: Math.max(
        12,
        Math.min(rect.right - width, window.innerWidth - width - 12),
      ),
      top:
        rect.bottom + height + 8 <= window.innerHeight - 12
          ? rect.bottom + 8
          : Math.max(12, rect.top - height - 8),
    })
    options.current[firstFocus.current]?.focus({ preventScroll: true })
  }, [open])
  useEffect(() => {
    if (!open) return
    const outside = (event: PointerEvent) => {
      const target = event.target as Node
      if (!root.current?.contains(target) && !menu.current?.contains(target))
        setOpen(false)
    }
    const close = () => setOpen(false)
    const scroll = (event: Event) => {
      if (!menu.current?.contains(event.target as Node)) close()
    }
    document.addEventListener("pointerdown", outside)
    window.addEventListener("resize", close)
    window.addEventListener("scroll", scroll, true)
    return () => {
      document.removeEventListener("pointerdown", outside)
      window.removeEventListener("resize", close)
      window.removeEventListener("scroll", scroll, true)
    }
  }, [open])

  const panel = (
    <div
      ref={menu}
      id={id}
      role="menu"
      aria-label="Language / Bahasa"
      aria-hidden={!open}
      inert={!open}
      data-language-menu=""
      className={`language-panel${open ? " is-open" : ""}`}
      style={position}
      onKeyDown={(event) => {
        const index = options.current.indexOf(
          document.activeElement as HTMLButtonElement,
        )
        if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
          event.preventDefault()
          const next =
            event.key === "Home"
              ? 0
              : event.key === "End"
                ? 1
                : (index + (event.key === "ArrowDown" ? 1 : -1) + 2) % 2
          options.current[next]?.focus()
        } else if (event.key === "Escape" || event.key === "Tab") {
          event.stopPropagation()
          if (event.key === "Escape") event.preventDefault()
          setOpen(false)
          trigger.current?.focus({ preventScroll: true })
        } else if (
          event.key.toLowerCase() === "e" ||
          event.key.toLowerCase() === "b"
        ) {
          event.preventDefault()
          options.current[event.key.toLowerCase() === "e" ? 0 : 1]?.focus()
        }
      }}
    >
      {languages.map((item, i) => (
        <button
          key={item.value}
          ref={(node) => {
            options.current[i] = node
          }}
          type="button"
          role="menuitemradio"
          aria-checked={lang === item.value}
          tabIndex={-1}
          lang={item.value}
          className="language-option"
          onClick={() => {
            setOpen(false)
            trigger.current?.focus({ preventScroll: true })
            setLang(item.value)
          }}
        >
          <Flag lang={item.value} />
          <span>{item.label}</span>
          <span aria-hidden="true" className="language-check">
            {lang === item.value ? "✓" : ""}
          </span>
        </button>
      ))}
    </div>
  )

  return (
    <div
      ref={root}
      className="language-selector"
      onBlur={(event) => {
        if (
          !root.current?.contains(event.relatedTarget) &&
          !menu.current?.contains(event.relatedTarget)
        )
          setOpen(false)
      }}
    >
      <button
        ref={trigger}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={id}
        aria-label={`Language / Bahasa: ${selected.label}`}
        className="language-trigger"
        onClick={() => {
          firstFocus.current = lang === "en" ? 0 : 1
          setOpen(!open)
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault()
            firstFocus.current = event.key === "ArrowDown" ? 0 : 1
            setOpen(true)
          }
        }}
      >
        <Flag lang={lang} />
        <span lang={lang}>{selected.label}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          className={`language-chevron${open ? " is-open" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {portal ? createPortal(panel, portal) : panel}
    </div>
  )
}
