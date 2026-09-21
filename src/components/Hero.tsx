import { useEffect, useState, type CSSProperties } from "react"
import type { Content } from "../content"
import { WhatsAppLink } from "./shared"
import planeIcon from "../../logo/plane.svg"
import worldMap from "../../logo/world.svg"
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

export const cargoImage =
  "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200&auto=format&fit=crop&q=80"
export const portImage =
  "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=900&auto=format&fit=crop&q=80"

function HeroRouteMap({ t }: { t: Content }) {
  const routePath = "M1266 365C1350 275 1500 320 1570 478"

  return (
    <div className="hero-route-map" aria-hidden="true">
      <svg
        className="hero-world-map"
        viewBox="1120 220 560 330"
        role="presentation"
      >
        <image href={worldMap} width="2000" height="857" />
      </svg>
      <svg
        className="hero-route-layer"
        viewBox="1120 220 560 330"
        role="presentation"
      >
        <defs>
          <linearGradient
            id="hero-route-gradient"
            gradientUnits="userSpaceOnUse"
            x1="1266"
            y1="365"
            x2="1570"
            y2="478"
          >
            <stop offset="0" stopColor="var(--color-brand-blue)" />
            <stop offset="1" stopColor="var(--color-brand-green)" />
          </linearGradient>
          <radialGradient id="hero-route-origin-glow">
            <stop
              offset="0"
              stopColor="var(--color-brand-blue)"
              stopOpacity=".26"
            />
            <stop
              offset="1"
              stopColor="var(--color-brand-blue)"
              stopOpacity="0"
            />
          </radialGradient>
          <radialGradient id="hero-route-destination-glow">
            <stop
              offset="0"
              stopColor="var(--color-brand-green)"
              stopOpacity=".28"
            />
            <stop
              offset="1"
              stopColor="var(--color-brand-green)"
              stopOpacity="0"
            />
          </radialGradient>
          <filter
            id="hero-route-line-glow"
            x="-30%"
            y="-50%"
            width="160%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>
        <circle cx="1266" cy="365" r="54" fill="url(#hero-route-origin-glow)" />
        <circle
          cx="1570"
          cy="478"
          r="50"
          fill="url(#hero-route-destination-glow)"
        />
        <path className="hero-route-glow-line" d={routePath} />
        <path className="hero-route-line" d={routePath} />
        <path className="hero-route-progress" d={routePath} />
        <g className="hero-route-plane hero-route-plane-moving">
          <animateMotion
            path={routePath}
            dur="10s"
            begin="-5s"
            repeatCount="indefinite"
            rotate="auto"
          />
          <g transform="rotate(45)">
            <image
              href={planeIcon}
              x="-9"
              y="-9"
              width="18"
              height="18"
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        </g>
        <g
          className="hero-route-plane hero-route-plane-static"
          transform="translate(1423.25 328.5) rotate(19.18)"
        >
          <g transform="rotate(45)">
            <image
              href={planeIcon}
              x="-9"
              y="-9"
              width="18"
              height="18"
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        </g>
        <g className="hero-route-node hero-route-node-origin">
          <circle cx="1266" cy="365" r="10" />
          <circle cx="1266" cy="365" r="3" />
        </g>
        <g className="hero-route-node hero-route-node-destination">
          <circle cx="1570" cy="478" r="10" />
          <circle cx="1570" cy="478" r="3" />
        </g>
        <g className="hero-route-label hero-route-label-origin">
          <text x="1248" y="395" textAnchor="end">
            {t.route.origin}
          </text>
        </g>
        <g className="hero-route-label hero-route-label-destination">
          <text x="1588" y="483">
            {t.route.destination}
          </text>
        </g>
      </svg>
    </div>
  )
}

export function Hero({ t }: { t: Content }) {
  return (
    <section
      id="home"
      className="relative min-h-svh lg:min-h-0 bg-light-blue flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src={cargoImage}
          alt=""
          fetchPriority="high"
          className="w-full h-full object-cover opacity-[.06] mix-blend-multiply"
        />
        <div className="hero-tonal-overlay absolute inset-0" />
      </div>
      <div className="site-container relative pt-32 pb-20 lg:pt-28 lg:pb-16 grid lg:grid-cols-[minmax(0,7fr)_minmax(18rem,5fr)] gap-5 sm:gap-8 lg:gap-20 items-center">
        <div className="hero-copy min-w-0 flex flex-col gap-5 sm:gap-6">
          <h1 className="hero-title text-navy">
            <HeadingWords text={t.hero.headline} />
          </h1>
          <p className="hero-lede text-muted">{t.hero.copy}</p>
          <div className="flex flex-wrap gap-3 pt-1 hero-actions">
            <WhatsAppLink message={t.whatsappMsg.general}>
              {t.hero.primaryCta}
            </WhatsAppLink>
            <a href="#services" className="secondary-link">
              {t.hero.secondaryCta}
            </a>
          </div>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-3 text-muted text-sm">
            {t.hero.proof.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-route-visual min-w-0 select-none lg:-mr-4">
          <HeroRouteMap t={t} />
        </div>
      </div>
      <ScrollCue />
    </section>
  )
}
