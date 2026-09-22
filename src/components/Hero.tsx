import { useEffect, useState, type CSSProperties } from "react"
import type { Content } from "../content"
import { WhatsAppLink } from "./shared"
import arrowDown from "../../logo/arrow_down.svg"
import { HeadingWords } from "./languageTransition"

let userHasScrolled = false

function ScrollCue() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (userHasScrolled || Math.abs(window.scrollY) > 2) {
      userHasScrolled = true
      return
    }
    const dismiss = () => {
      if (Math.abs(window.scrollY) <= 2) return
      userHasScrolled = true
      setVisible(false)
      window.clearTimeout(timer)
      window.removeEventListener("scroll", dismiss)
    }
    const timer = window.setTimeout(() => {
      if (!userHasScrolled && Math.abs(window.scrollY) <= 2) setVisible(true)
    }, 2800)
    window.addEventListener("scroll", dismiss, { passive: true })
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener("scroll", dismiss)
    }
  }, [])

  return (
    <a
      href="#stats-band"
      aria-label="Scroll to next section"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`hero-scroll-cue${visible ? " is-visible" : ""}`}
      onClick={() => {
        userHasScrolled = true
        setVisible(false)
      }}
    >
      <span
        aria-hidden="true"
        style={{ "--scroll-cue-icon": `url("${arrowDown}")` } as CSSProperties}
      />
    </a>
  )
}

export const cargoImage = "/images/aman-cargo-hero-container.png"
export const portImage =
  "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=900&auto=format&fit=crop&q=80"

export function Hero({ t }: { t: Content }) {
  return (
    <section id="home" className="hero-section relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src={cargoImage}
          alt=""
          fetchPriority="high"
          className="hero-background-image w-full h-full object-cover"
        />
        <div className="hero-tonal-overlay absolute inset-0" />
      </div>
      <div className="hero-layout site-container relative">
        <div className="hero-copy min-w-0 flex flex-col gap-5 sm:gap-6">
          <p className="hero-kicker eyebrow hero-intro-item">
            {t.hero.eyebrow}
          </p>
          <h1 className="hero-title hero-intro-item">
            <HeadingWords text={t.hero.headline} />
          </h1>
          <p className="hero-lede hero-intro-item">{t.hero.copy}</p>
          <div className="flex flex-wrap gap-3 pt-1 hero-actions hero-intro-item">
            <WhatsAppLink message={t.whatsappMsg.general}>
              {t.hero.primaryCta}
            </WhatsAppLink>
            <a href="#services" className="secondary-link">
              {t.hero.secondaryCta}
            </a>
          </div>
          <ul className="hero-proof flex flex-wrap items-center gap-x-5 gap-y-3 text-sm hero-intro-item">
            {t.hero.proof.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <dl id="stats-band" className="hero-facts">
          {t.trust.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <ScrollCue />
    </section>
  )
}
