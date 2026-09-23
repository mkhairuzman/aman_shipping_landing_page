import { useEffect, useRef, useState } from "react"
import type { Content } from "../content"
import { LanguageSelector, type LanguageProps } from "./LanguageSelector"
import { company } from "../data/company"
import { WhatsAppLink } from "./shared"

const amanTreeLogo = new URL("../../logo/logonew.svg", import.meta.url).href

const navKeys = ["home", "about", "services", "howItWorks", "faq"] as const
const anchors = ["home", "about", "services", "how-it-works", "faq"]

export function Header({ t, lang, setLang }: { t: Content } & LanguageProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const header = useRef<HTMLElement>(null)
  const navigation = useRef<HTMLElement>(null)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    const media = window.matchMedia("(min-width: 1280px)")
    const onResize = () => {
      if (media.matches) setOpen(false)
    }
    media.addEventListener("change", onResize)
    return () => {
      window.removeEventListener("scroll", onScroll)
      media.removeEventListener("change", onResize)
    }
  }, [])
  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    const background = document.querySelectorAll<HTMLElement>(
      "#main-content, footer, .sticky-contact",
    )
    document.body.style.overflow = "hidden"
    background.forEach((element) => (element.inert = true))
    navigation.current?.querySelector<HTMLAnchorElement>("a")?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      background.forEach((element) => (element.inert = false))
    }
  }, [open])

  const closeMenu = () => {
    setOpen(false)
    toggle.current?.focus()
  }
  return (
    <header
      ref={header}
      onKeyDown={(e) => {
        if (!open) return
        if (e.key === "Escape") closeMenu()
        if (e.key !== "Tab") return
        const focusable = Array.from(
          e.currentTarget.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ),
        ).filter((element) => element.getClientRects().length > 0)
        const first = focusable[0]
        const last = focusable.at(-1)
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }}
      className={`site-header fixed top-0 inset-x-0 z-50 border-b transition-all duration-200 ${
        open ? "is-menu-open " : ""
      }${
        scrolled || open
          ? "is-scrolled border-border shadow-sm"
          : "border-transparent"
      }`}
    >
      <div className="site-container h-20 flex items-center justify-between gap-5">
        <a
          href="#home"
          className="h-20 w-[8.625rem] sm:w-[9.625rem] shrink-0 flex items-center"
          onClick={() => setOpen(false)}
        >
          <img
            src={amanTreeLogo}
            alt="Aman Tree"
            width="1536"
            height="1024"
            className="h-[4.5rem] w-full object-contain"
          />
        </a>
        <nav
          aria-label={t.nav.navigation}
          className="hidden xl:flex items-center gap-8"
        >
          {navKeys.map((key, i) => (
            <a
              key={key}
              href={`#${anchors[i]}`}
              className="text-muted hover:text-deep-blue text-sm font-medium"
            >
              {t.nav[key]}
            </a>
          ))}
        </nav>
        <div className="hidden xl:flex items-center">
          <LanguageSelector lang={lang} setLang={setLang} />
        </div>
        <button
          ref={toggle}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? t.nav.close : t.nav.menu}
          onClick={() => (open ? closeMenu() : setOpen(true))}
          className="menu-toggle xl:hidden text-deep-blue flex items-center justify-center"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6"
          >
            <path
              d={open ? "M18 6L6 18M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"}
            />
          </svg>
        </button>
      </div>
      <button
        type="button"
        aria-label={t.nav.close}
        tabIndex={-1}
        hidden={!open}
        className="mobile-menu-backdrop xl:hidden"
        onClick={closeMenu}
      />
      <nav
        ref={navigation}
        id="mobile-navigation"
        aria-label={t.nav.navigation}
        hidden={!open}
        className="mobile-navigation xl:hidden"
      >
        {navKeys.map((key, i) => (
          <a
            key={key}
            href={`#${anchors[i]}`}
            onClick={() => setOpen(false)}
            className="mobile-nav-link"
          >
            {t.nav[key]}
          </a>
        ))}
        <div className="mobile-nav-tools">
          <LanguageSelector lang={lang} setLang={setLang} active={open} />
          <WhatsAppLink message={t.whatsappMsg.general} className="w-full">
            {t.nav.cta}
          </WhatsAppLink>
        </div>
      </nav>
    </header>
  )
}

export function Footer({ t, lang, setLang }: { t: Content } & LanguageProps) {
  return (
    <footer id="contact" className="bg-footer border-t border-white/10 py-14">
      <div className="site-container">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div className="space-y-3">
            <p className="text-white font-bold text-xl">{company.name}</p>
          </div>
          <nav aria-label={`${t.nav.navigation} (${t.nav.contact})`}>
            <h2 className="text-white font-semibold text-sm mb-4">
              {t.nav.navigation}
            </h2>
            {navKeys.map((key, i) => (
              <a
                key={key}
                href={`#${anchors[i]}`}
                className="flex items-center text-white/70 hover:text-white text-sm"
              >
                {t.nav[key]}
              </a>
            ))}
          </nav>
          <div>
            <h2 className="text-white font-semibold text-sm mb-4">
              {t.nav.contact}
            </h2>
            <address className="not-italic text-sm text-white/75 space-y-3">
              <a
                className="block hover:text-white"
                href={`tel:${company.phoneMalaysia.replace(/\s|-/g, "")}`}
              >
                {t.footer.malaysia}: {company.phoneMalaysia}
              </a>
              <a
                className="block hover:text-white"
                href={`tel:${company.phoneSaudi.replace(/\s|-/g, "")}`}
              >
                {t.footer.saudi}: {company.phoneSaudi}
              </a>
              <p className="leading-relaxed">
                {company.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </address>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} {company.name}. {t.footer.rights}
          </p>
          <LanguageSelector lang={lang} setLang={setLang} />
        </div>
      </div>
    </footer>
  )
}

export function StickyWhatsApp({ t }: { t: Content }) {
  const [show, setShow] = useState(false)
  const control = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const hero = document.getElementById("home")
    const footer = document.getElementById("contact")
    if (!hero || !footer || !control.current) return
    let frame = 0
    const update = () => {
      frame = 0
      if (!control.current) return
      const height = window.innerHeight
      const style = getComputedStyle(control.current)
      const right = window.innerWidth - (parseFloat(style.right) || 16)
      const bottom = height - (parseFloat(style.bottom) || 16)
      const left = right - 56
      const top = bottom - 56
      const blocked = Array.from(
        document.querySelectorAll<HTMLElement>(
          "main p, main h2, main h3, main a, main button, main article, main video, main img, main dl, main li, .route-map, .contact-cta",
        ),
      ).some((element) => {
        const rect = element.getBoundingClientRect()
        return (
          rect.width > 0 &&
          rect.height > 0 &&
          rect.left < right + 8 &&
          rect.right > left - 8 &&
          rect.top < bottom + 8 &&
          rect.bottom > top - 8
        )
      })
      setShow(
        hero.getBoundingClientRect().bottom <= 0 &&
          footer.getBoundingClientRect().top >= height &&
          !blocked,
      )
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    const resize = new ResizeObserver(schedule)
    resize.observe(document.body)
    update()
    return () => {
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      resize.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [t])
  return (
    <div
      ref={control}
      inert={!show}
      aria-hidden={!show}
      className={`sticky-contact fixed z-40 xl:hidden ${
        show ? "is-visible" : ""
      }`}
    >
      <WhatsAppLink message={t.whatsappMsg.general}>{t.nav.cta}</WhatsAppLink>
    </div>
  )
}
