import { useEffect, useState } from "react"
import type { Content } from "../content"
import { company } from "../data/company"
import { WhatsAppLink } from "./shared"
import { HeadingWords } from "./languageTransition"

export const cargoImage = "/images/aman-cargo-hero-container.png"

function ScrollCue() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const update = () => setVisible(window.scrollY < 24)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <a
      href="#about"
      aria-label="Scroll to About"
      className={`hero-scroll-cue${visible ? " is-visible" : ""}`}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="m7 10 5 5 5-5" />
      </svg>
    </a>
  )
}

export function Hero({ t }: { t: Content }) {
  const alternateRate = t.latest.offer.rate.replace("SAR 18", "MYR 23")

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
            <HeadingWords text={t.hero.headline} stagger />
          </h1>
          <p className="hero-lede hero-intro-item">{t.hero.copy}</p>
          <div className="flex flex-wrap gap-3 pt-1 hero-actions hero-intro-item">
            <a href="#services" className="secondary-link">
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>
        <section
          id="latest-info"
          className="latest-info"
          aria-label={t.latest.label}
        >
          <article className="latest-block">
            <h2 className="eyebrow">{t.latest.shipment.label}</h2>
            <div className="latest-summary">
              <p className="latest-main">{t.latest.shipment.route}</p>
            </div>
            <p className="latest-value">{t.latest.shipment.date}</p>
          </article>
          <article className="latest-block">
            <h2 className="eyebrow">{t.latest.offer.label}</h2>
            <div className="latest-summary">
              <p className="latest-main">{t.latest.offer.title}</p>
              <p className="latest-route">{t.latest.offer.route}</p>
            </div>
            <p
              className="latest-value latest-rate"
              aria-label={t.latest.offer.rate}
            >
              <span className="latest-rate-primary">{t.latest.offer.rate}</span>
              <span className="latest-rate-alternate" aria-hidden="true">
                {alternateRate}
              </span>
            </p>
            <p className="latest-detail">{t.latest.offer.scope}</p>
          </article>
          <div className="latest-actions">
            <WhatsAppLink
              message={t.whatsappMsg.availability}
              className="latest-primary"
            >
              {t.latest.shipment.cta}
            </WhatsAppLink>
            <a
              className="latest-facebook-button"
              href={company.successStories}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.414c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.971h-1.513c-1.49 0-1.956.93-1.956 1.885v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
              </svg>
              <span>{t.why.storiesCta}</span>
            </a>
          </div>
        </section>
      </div>
      <ScrollCue />
    </section>
  )
}
