import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react"
import type { Lang } from "../content"

export function HeadingWords({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\s+)/).map((word, i) =>
        /^\s+$/.test(word) ? (
          <Fragment key={i}>{word}</Fragment>
        ) : (
          <span className="language-word" key={i}>
            {word}
          </span>
        ),
      )}
    </>
  )
}

const selector = [
  "main h1",
  "main h2",
  "main h3",
  "main p",
  "main li",
  "main dt",
  "main dd",
  "main figcaption",
  "main blockquote",
  "main .faq-answer",
  "main button > span",
  "a.wa-link > span",
  "a.secondary-link",
  "header nav a",
  "footer nav a",
  "footer p",
  "footer address a",
].join(",")

function textElements() {
  const all = [...document.querySelectorAll<HTMLElement>(selector)].filter(
    (el) =>
      !el.closest("#stats-band, .language-selector, [data-language-menu]"),
  )
  return all.filter(
    (el) => !all.some((child) => child !== el && el.contains(child)),
  )
}

function isVisible(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  return (
    rect.height > 0 &&
    rect.bottom > 0 &&
    rect.top < window.innerHeight &&
    !el.closest("[hidden], [inert], .reveal-pending") &&
    getComputedStyle(el).visibility !== "hidden"
  )
}

export function useLanguageTransition() {
  const [lang, setLang] = useState<Lang>("en")
  const current = useRef(lang)
  const pending = useRef<Lang | null>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const animations = useRef<Animation[]>([])
  const snapshot = useRef<{
    heights: number[]
    anchor: number
    top: number
    scrollY: number
  } | null>(null)
  const reserved = useRef(new Map<HTMLElement, string>())
  const stopAnimations = () => {
    animations.current.forEach((animation) => animation.cancel())
    animations.current = []
  }
  const restoreHeights = () => {
    reserved.current.forEach((value, el) => {
      el.style.minHeight = value
    })
    reserved.current.clear()
  }

  useEffect(() => {
    let width = window.innerWidth
    const resize = () => {
      if (width !== window.innerWidth) {
        restoreHeights()
        width = window.innerWidth
      }
    }
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const reduce = () => {
      if (media.matches) stopAnimations()
    }
    window.addEventListener("resize", resize)
    media.addEventListener("change", reduce)
    return () => {
      if (timer.current) clearTimeout(timer.current)
      stopAnimations()
      restoreHeights()
      document.documentElement.style.removeProperty("overflow-anchor")
      window.removeEventListener("resize", resize)
      media.removeEventListener("change", reduce)
    }
  }, [])

  useLayoutEffect(() => {
    current.current = lang
    document.documentElement.lang = lang
    const before = snapshot.current
    if (!before) return
    snapshot.current = null
    const elements = textElements()
    const heights = elements.map((el) => el.getBoundingClientRect().height)
    reserved.current.forEach((_, el) => {
      if (!el.isConnected) reserved.current.delete(el)
    })
    elements.forEach((el, index) => {
      if (!before.heights[index] || el.matches("a, span")) return
      if (!reserved.current.has(el))
        reserved.current.set(el, el.style.minHeight)
      el.style.minHeight = `${Math.max(before.heights[index], heights[index])}px`
    })
    const anchor = elements[before.anchor]
    if (
      anchor &&
      before.scrollY > 0 &&
      Math.abs(window.scrollY - before.scrollY) < 2
    ) {
      const delta = anchor.getBoundingClientRect().top - before.top
      if (Math.abs(delta) > 1)
        window.scrollTo({ top: window.scrollY + delta, behavior: "instant" })
    }
    stopAnimations()
    document.documentElement.style.removeProperty("overflow-anchor")
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !Element.prototype.animate
    )
      return
    elements.filter(isVisible).forEach((el) => {
      const words = [...el.querySelectorAll<HTMLElement>(".language-word")]
      const targets = words.length ? words : [el]
      targets.forEach((target, index) => {
        const crossfade =
          el.matches("a, span") || !!el.closest("button, a, nav")
        animations.current.push(
          target.animate(
            [
              { opacity: 0, transform: crossfade ? "none" : "translateY(5px)" },
              { opacity: 1, transform: "none" },
            ],
            {
              duration: 240,
              delay: words.length ? Math.min(index * 20, 100) : 0,
              easing: "ease-out",
              fill: "backwards",
            },
          ),
        )
      })
    })
  }, [lang])

  const changeLanguage = (next: Lang) => {
    if (timer.current) clearTimeout(timer.current)
    stopAnimations()
    pending.current = next
    if (next === current.current) return
    const commit = () => {
      const elements = textElements()
      const anchor = elements.findIndex(
        (el) =>
          el.closest("main, footer") &&
          isVisible(el) &&
          el.getBoundingClientRect().bottom > 80,
      )
      snapshot.current = {
        heights: elements.map((el) => el.getBoundingClientRect().height),
        anchor,
        top: elements[anchor]?.getBoundingClientRect().top ?? 0,
        scrollY: window.scrollY,
      }
      document.documentElement.style.overflowAnchor = "none"
      setLang(pending.current!)
      timer.current = null
    }
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !Element.prototype.animate
    ) {
      commit()
      return
    }
    textElements()
      .filter(isVisible)
      .forEach((el) => {
        animations.current.push(
          el.animate([{ opacity: 1 }, { opacity: 0.15 }], {
            duration: 140,
            easing: "ease-out",
            fill: "forwards",
          }),
        )
      })
    timer.current = setTimeout(commit, 140)
  }

  return { lang, changeLanguage }
}
