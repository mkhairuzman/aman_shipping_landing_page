import { useEffect, useRef, useState } from "react"
import type { Content } from "../content"
import { LanguageSelector, type LanguageProps } from "./LanguageSelector"
import { company } from "../data/company"
import { WhatsAppLink } from "./shared"

const amanTreeLogo = new URL("../../logo/logonew.svg", import.meta.url).href

const navKeys = ["home", "services", "howItWorks", "about", "faq"] as const
const anchors = ["home", "services", "how-it-works", "about", "faq"]

export function Header({ t, lang, setLang }: { t: Content } & LanguageProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const header = useRef<HTMLElement>(null)
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
  return (
    <header
      ref={header}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false)
          toggle.current?.focus()
        }
      }}
      onBlur={(e) => {
        if (
          !e.currentTarget.contains(e.relatedTarget) &&
          !(
            e.relatedTarget instanceof Element &&
            e.relatedTarget.closest("[data-language-menu]")
          )
        )
          setOpen(false)
      }}
      className={`fixed top-0 inset-x-0 z-50 bg-white border-b transition-shadow duration-200 ${
        scrolled || open ? "border-border shadow-sm" : "border-transparent"
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
          onClick={() => setOpen(!open)}
          className="xl:hidden text-deep-blue flex items-center justify-center"
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
      <nav
        id="mobile-navigation"
        aria-label={t.nav.navigation}
        hidden={!open}
        className="mobile-navigation xl:hidden border-t border-border px-5 py-4"
      >
        {navKeys.map((key, i) => (
          <a
            key={key}
            href={`#${anchors[i]}`}
            onClick={() => setOpen(false)}
            className="flex items-center text-navy font-medium"
          >
            {t.nav[key]}
          </a>
        ))}
        <div className="border-t border-border pt-3 mt-2">
          <LanguageSelector lang={lang} setLang={setLang} active={open} />
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
            <p className="text-white/70 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <p className="text-white/70 text-sm">
              {t.footer.registration}: {company.registrationNumber}
            </p>
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
  useEffect(() => {
    const hero = document.getElementById("home")
    const footer = document.getElementById("contact")
    if (!hero || !footer || !("IntersectionObserver" in window)) return
    let heroPassed = false
    let footerVisible = false
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hero)
          heroPassed =
            !entry.isIntersecting && entry.boundingClientRect.bottom <= 0
        if (entry.target === footer) footerVisible = entry.isIntersecting
      })
      setShow(heroPassed && !footerVisible)
    })
    observer.observe(hero)
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])
  return (
    <div
      inert={!show}
      aria-hidden={!show}
      className={`sticky-contact fixed bottom-0 inset-x-0 z-40 xl:hidden ${
        show ? "is-visible" : ""
      }`}
    >
      <div className="px-4 pb-safe pt-2 bg-white/95 border-t border-border shadow-lg">
        <WhatsAppLink message={t.whatsappMsg.general} className="w-full">
          {t.nav.cta}
        </WhatsAppLink>
      </div>
    </div>
  )
}
