import { useEffect, useRef, useState, type PointerEvent } from "react"

import type { Content } from "../content"

import { SectionHeading, WhatsAppLink } from "./shared"

import planeIcon from "../../logo/plane.svg"

import worldMap from "../../logo/world.svg"

export function Services({ t }: { t: Content }) {
  const trackRef = useRef<HTMLDivElement>(null)

  const drag = useRef({ x: 0, scroll: 0, active: false, moved: false })

  const [edges, setEdges] = useState({ start: true, end: false })

  const isMalay = t.nav.home !== "Home"

  useEffect(() => {
    const track = trackRef.current

    if (!track) return

    track.scrollLeft = 0

    const update = () => {
      const next = {
        start: track.scrollLeft <= 2,

        end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 2,
      }

      setEdges((previous) =>
        previous.start === next.start && previous.end === next.end
          ? previous
          : next,
      )
    }

    const resize = new ResizeObserver(update)

    resize.observe(track)

    track.querySelectorAll("article").forEach((card) => resize.observe(card))

    track.addEventListener("scroll", update, { passive: true })

    update()

    return () => {
      resize.disconnect()

      track.removeEventListener("scroll", update)
    }
  }, [])

  function scrollTo(left: number) {
    trackRef.current?.scrollTo({
      left,

      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    })
  }

  function advance(direction: number) {
    const track = trackRef.current

    if (!track) return

    const cards = Array.from(track.querySelectorAll("article"))

    const positions = cards.map((card) => card.offsetLeft - cards[0].offsetLeft)

    const target =
      direction > 0
        ? (positions.find((position) => position > track.scrollLeft + 2) ??
          track.scrollWidth)
        : (positions

            .reverse()

            .find((position) => position < track.scrollLeft - 2) ?? 0)

    scrollTo(target)
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current.active) return

    drag.current.active = false

    const distance = event.currentTarget.scrollLeft - drag.current.scroll

    event.currentTarget.classList.remove("is-dragging")

    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId)

    if (
      drag.current.moved &&
      Math.abs(distance) > 40 &&
      event.type === "pointerup"
    )
      advance(Math.sign(distance))
  }

  return (
    <section className="services-section section-space section-space-feature bg-soft">
      <div id="services" className="site-container anchor-target">
        <div className="services-heading">
          <SectionHeading {...t.services} />
          <p className="services-swipe-hint">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="m7 8-4 4 4 4m10-8 4 4-4 4M3 12h18" />
            </svg>
            {isMalay
              ? `Leret untuk lihat semua ${t.services.items.length + 1} perkhidmatan`
              : `Swipe to view all ${t.services.items.length + 1} services`}
          </p>
        </div>
        <div
          className="services-carousel-shell"
          data-at-start={edges.start}
          data-at-end={edges.end}
        >
          <div
            className="services-controls"
            role="group"
            aria-label={t.nav.services}
          >
            <button
              type="button"
              aria-label={
                isMalay ? "Perkhidmatan sebelumnya" : "Previous service"
              }
              aria-controls="services-carousel"
              disabled={edges.start}
              onClick={() => advance(-1)}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="m14 6-6 6 6 6M8 12h12" />
              </svg>
            </button>
            <button
              type="button"
              aria-label={isMalay ? "Perkhidmatan seterusnya" : "Next service"}
              aria-controls="services-carousel"
              disabled={edges.end}
              onClick={() => advance(1)}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="m10 6 6 6-6 6M16 12H4" />
              </svg>
            </button>
          </div>
          <div
            className="services-grid"
            id="services-carousel"
            ref={trackRef}
            role="region"
            aria-roledescription="carousel"
            aria-label={t.nav.services}
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.target !== event.currentTarget) return

              if (
                !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)
              )
                return

              event.preventDefault()

              if (event.key === "Home") scrollTo(0)
              else if (event.key === "End")
                scrollTo(event.currentTarget.scrollWidth)
              else advance(event.key === "ArrowRight" ? 1 : -1)
            }}
            onPointerDown={(event) => {
              drag.current.moved = false

              if (event.pointerType !== "mouse" || event.button !== 0) return

              drag.current = {
                x: event.clientX,

                scroll: event.currentTarget.scrollLeft,

                active: true,

                moved: false,
              }
            }}
            onPointerMove={(event) => {
              if (!drag.current.active) return

              const distance = event.clientX - drag.current.x

              if (!drag.current.moved && Math.abs(distance) < 6) return

              drag.current.moved = true

              event.currentTarget.setPointerCapture(event.pointerId)

              event.currentTarget.classList.add("is-dragging")

              event.currentTarget.scrollLeft = drag.current.scroll - distance
            }}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onLostPointerCapture={endDrag}
            onPointerLeave={(event) => {
              if (!drag.current.moved) endDrag(event)
            }}
            onDragStart={(event) => event.preventDefault()}
            onClickCapture={(event) => {
              if (drag.current.moved && event.detail > 0) {
                event.preventDefault()

                event.stopPropagation()

                drag.current.moved = false
              }
            }}
          >
            <article className="featured-service">
              <div className="min-w-0">
                <p className="eyebrow text-deep-blue">
                  {t.services.featured.label}
                </p>
                <h3 className="text-2xl lg:text-3xl font-bold text-navy">
                  {t.services.featured.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {t.services.featured.desc}
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  {t.services.featured.audience}
                </p>
              </div>
              <WhatsAppLink message={t.whatsappMsg.cargo}>
                {t.services.featured.cta}
              </WhatsAppLink>
            </article>
            <div className="services-supporting">
              {t.services.items.map((item) => (
                <article key={item.id} className="service-card">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="service-icon"
                  >
                    <path
                      d={
                        item.id === "moving"
                          ? "M3 9l9-7 9 7v12H3zM9 21v-9h6v9"
                          : item.id === "storage"
                            ? "M3 7l9-5 9 5v10l-9 5-9-5zM3 7l9 5 9-5M12 12v10"
                            : "M2 5h20v14H2zM6 8v8M10 8v8M14 8v8M18 8v8"
                      }
                    />
                  </svg>
                  <p className="eyebrow text-deep-blue">{item.label}</p>
                  <h3>{item.title}</h3>
                  <p className="service-card-desc">{item.desc}</p>
                  <ul className="service-highlights">
                    {item.highlights.map((value) => (
                      <li key={value}>{value}</li>
                    ))}
                  </ul>
                  <WhatsAppLink
                    message={
                      t.whatsappMsg[
                        (item.id as "moving" | "storage" | "modular")
                      ]
                    }
                    className="wa-text"
                  >
                    {item.cta}
                  </WhatsAppLink>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CargoProcess({ t }: { t: Content }) {
  return (
    <section className="process-section section-space section-space-compact bg-deep-blue">
      <div id="how-it-works" className="site-container anchor-target">
        <div className="text-center">
          <SectionHeading {...t.howItWorks} dark />
        </div>
        <ol className="cargo-process grid lg:grid-cols-5 gap-0 lg:gap-4">
          {t.howItWorks.steps.map((step) => (
            <li
              key={step.num}
              className="relative flex lg:block gap-5 pb-8 lg:pb-0 lg:text-center reveal"
            >
              <div className="process-number relative z-10 w-11 h-11 lg:w-16 lg:h-16 rounded-full bg-white text-deep-blue font-bold flex items-center justify-center shrink-0 lg:mx-auto lg:mb-5 border-4 border-deep-blue">
                {step.num}
              </div>
              <div>
                <h3 className="font-semibold text-white mt-2 lg:mt-0 mb-2">
                  {step.title}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function RouteSection({ t }: { t: Content }) {
  const routePath = "M1266 365C1350 275 1500 320 1570 478"

  return (
    <section
      id="connection"
      className="route-section section-space bg-light-green relative overflow-hidden"
    >
      <div className="route-section-inner site-container relative">
        <div className="route-intro">
          <SectionHeading {...t.route} />
          <p className="text-muted leading-relaxed reveal">{t.route.copy}</p>
        </div>
        <div className="route-map reveal" aria-hidden="true">
          <svg
            className="route-world-map"
            viewBox="1120 220 560 330"
            role="presentation"
          >
            <image href={worldMap} width="2000" height="857" />
          </svg>
          <svg
            className="route-map-layer"
            viewBox="1120 220 560 330"
            role="presentation"
          >
            <defs>
              <linearGradient
                id="route-map-gradient"
                gradientUnits="userSpaceOnUse"
                x1="1266"
                y1="365"
                x2="1570"
                y2="478"
              >
                <stop offset="0" stopColor="var(--color-brand-blue)" />
                <stop offset="1" stopColor="var(--color-brand-green)" />
              </linearGradient>
              <radialGradient id="route-origin-glow">
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
              <radialGradient id="route-destination-glow">
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
                id="route-line-glow"
                x="-30%"
                y="-50%"
                width="160%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="4" />
              </filter>
            </defs>
            <circle cx="1266" cy="365" r="54" fill="url(#route-origin-glow)" />
            <circle
              cx="1570"
              cy="478"
              r="50"
              fill="url(#route-destination-glow)"
            />
            <path className="route-map-glow-line" d={routePath} />
            <path className="route-map-line" d={routePath} />
            <path className="route-map-progress" d={routePath} />
            <g className="route-map-plane route-map-plane-moving">
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
              className="route-map-plane route-map-plane-static"
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
            <g className="route-map-node route-map-node-origin">
              <circle cx="1266" cy="365" r="10" />
              <circle cx="1266" cy="365" r="3" />
            </g>
            <g className="route-map-node route-map-node-destination">
              <circle cx="1570" cy="478" r="10" />
              <circle cx="1570" cy="478" r="3" />
            </g>
          </svg>
          <span className="route-endpoint route-endpoint-origin">
            {t.route.origin}
          </span>
          <span className="route-endpoint route-endpoint-destination">
            {t.route.destination}
          </span>
        </div>
      </div>
    </section>
  )
}
