import type { Content } from "../content"
import { SectionHeading, WhatsAppLink } from "./shared"

export function Services({ t }: { t: Content }) {
  return (
    <section className="section-space section-space-feature bg-soft">
      <div id="services" className="site-container anchor-target">
        <div className="text-center">
          <SectionHeading {...t.services} />
        </div>
        <article className="bg-white border border-border rounded-2xl p-6 sm:p-8 lg:p-12 grid lg:grid-cols-5 gap-8 items-center mb-6 reveal">
          <div className="lg:col-span-3 space-y-5 min-w-0">
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
            <WhatsAppLink message={t.whatsappMsg.cargo}>
              {t.services.featured.cta}
            </WhatsAppLink>
          </div>
          <ul className="lg:col-span-2 space-y-4 text-muted text-sm">
            {t.services.featured.scope.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="text-brand-green">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </article>
        <div className="grid md:grid-cols-3 gap-5">
          {t.services.items.map((item) => (
            <article
              key={item.id}
              className="service-card bg-white rounded-2xl p-6 lg:p-7 border border-border flex flex-col min-w-0 reveal"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-8 h-8 text-brand-blue mb-5"
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
              <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-5">
                {item.desc}
              </p>
              <ul className="space-y-2 text-sm text-muted mb-6 flex-1">
                {item.highlights.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
              <WhatsAppLink
                message={
                  t.whatsappMsg[(item.id as "moving" | "storage" | "modular")]
                }
                className="wa-text"
              >
                {item.cta}
              </WhatsAppLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CargoProcess({ t }: { t: Content }) {
  return (
    <section className="section-space section-space-compact bg-deep-blue">
      <div id="how-it-works" className="site-container anchor-target">
        <div className="text-center">
          <SectionHeading {...t.howItWorks} dark />
        </div>
        <ol className="cargo-process grid lg:grid-cols-5 gap-0 lg:gap-4 mb-12">
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
        <div className="text-center">
          <WhatsAppLink message={t.whatsappMsg.cargo}>
            {t.howItWorks.cta}
          </WhatsAppLink>
        </div>
      </div>
    </section>
  )
}

export function RouteSection({ t }: { t: Content }) {
  return (
    <section className="section-space bg-light-green relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 route-glow"
      />
      <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <SectionHeading {...t.route} />
        <p className="text-muted max-w-2xl mx-auto leading-relaxed mb-14 reveal">
          {t.route.copy}
        </p>
        <div className="flex items-center gap-3 max-w-2xl mx-auto reveal route-graphic">
          <div className="w-24 sm:w-32 shrink-0 text-navy font-bold">
            <span
              className="block text-deep-blue text-3xl mb-3"
              aria-hidden="true"
            >
              SA
            </span>
            {t.route.origin}
          </div>
          <svg
            viewBox="0 0 300 70"
            className="flex-1 min-w-0"
            aria-hidden="true"
          >
            <path
              className="route-path"
              d="M10 50C80 5 220 5 290 50"
              fill="none"
              stroke="#0D76B7"
              strokeWidth="2"
            />
            <circle cx="10" cy="50" r="4" fill="#0D76B7" />
            <circle cx="290" cy="50" r="4" fill="#12A44D" />
          </svg>
          <div className="w-24 sm:w-32 shrink-0 text-navy font-bold">
            <span
              className="block text-action-green text-3xl mb-3"
              aria-hidden="true"
            >
              MY
            </span>
            {t.route.destination}
          </div>
        </div>
      </div>
    </section>
  )
}
