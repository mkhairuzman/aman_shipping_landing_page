import { useState } from "react"
import type { Content } from "../content"
import { SectionHeading, WhatsAppLink } from "./shared"
import { HeadingWords } from "./languageTransition"

export function FAQSection({ t }: { t: Content }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="section-space section-space-compact bg-soft">
      <div id="faq" className="anchor-target max-w-2xl mx-auto px-5 lg:px-8">
        <div className="text-center">
          <SectionHeading {...t.faq} />
        </div>
        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-border reveal"
            >
              <h3>
                <button
                  id={`faq-question-${i}`}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-light-blue/50 rounded-2xl transition-colors duration-200"
                >
                  <span className="font-semibold text-sm leading-relaxed">
                    {item.q}
                  </span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </h3>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                hidden={open !== i}
                className="faq-answer px-6 pb-5 text-muted leading-relaxed text-sm border-t border-border pt-4"
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactCTA({ t }: { t: Content }) {
  return (
    <section className="section-space section-space-compact bg-deep-blue relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center space-y-7">
        <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight reveal">
          <HeadingWords text={t.finalCta.headline} />
        </h2>
        <p className="text-white/75 text-lg leading-relaxed reveal">
          {t.finalCta.copy}
        </p>
        <div className="pt-2">
          <WhatsAppLink message={t.whatsappMsg.general}>
            {t.finalCta.cta}
          </WhatsAppLink>
        </div>
        <p className="pt-6 text-white/70 text-sm font-semibold tracking-wider uppercase">
          {t.route.headline}
        </p>
      </div>
    </section>
  )
}
