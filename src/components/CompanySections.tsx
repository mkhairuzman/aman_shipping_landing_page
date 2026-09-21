import type { Content } from "../content"
import { SectionHeading } from "./shared"
import { EvidenceStrip } from "./EvidenceStrip"

const aboutImage = new URL("../assets/company-profile.jpg", import.meta.url)
  .href

const experienceImage = new URL(
  "../assets/cargo-container-illustration.jpg",
  import.meta.url,
).href

export function TrustBand({ t }: { t: Content }) {
  return (
    <div id="stats-band" className="bg-light-blue border-y border-border">
      <dl className="site-container py-8 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {t.trust.map((item) => (
          <div key={item.label} className="text-center flex flex-col reveal">
            <dt className="text-muted text-sm mt-2 order-2">{item.label}</dt>
            <dd className="text-deep-blue font-bold text-xl lg:text-2xl">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function About({ t }: { t: Content }) {
  return (
    <section className="section-space section-space-feature bg-white">
      <div id="about" className="site-container anchor-target">
        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-10 lg:gap-20 items-center">
          <div>
            <SectionHeading {...t.about} />
            <p className="text-muted leading-relaxed mb-5 reveal">
              {t.about.copy}
            </p>
            <p className="text-muted leading-relaxed reveal">{t.about.copy2}</p>
            <blockquote
              lang="ms"
              className="mt-7 text-lg font-semibold text-navy reveal"
            >
              “{t.about.tagline}”
            </blockquote>
          </div>
          <figure className="reveal">
            <div className="media-frame aspect-[4/3] image-reveal">
              <img
                src={aboutImage}
                alt={t.about.companyImageAlt}
                width="1122"
                height="1402"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="text-muted text-xs mt-3">
              {t.about.companyImageCaption}
            </figcaption>
          </figure>
        </div>
        <dl className="grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-border">
          {[
            [t.about.missionLabel, t.about.mission],
            [t.about.visionLabel, t.about.vision],
          ].map(([title, desc]) => (
            <div key={title} className="reveal">
              <dt className="font-bold mb-3">{title}</dt>
              <dd className="text-muted text-sm leading-relaxed">{desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export function WhySection({ t }: { t: Content }) {
  return (
    <section className="section-space bg-white">
      <div className="site-container">
        <div className="text-center">
          <SectionHeading {...t.why} />
        </div>
        <div className="grid md:grid-cols-2 gap-x-10">
          {t.why.benefits.map((item) => (
            <article
              key={item.title}
              className="border-t border-border py-6 text-left reveal"
            >
              <h3 className="font-semibold text-navy mb-3">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
        <EvidenceStrip copy={t.why.evidence} />
      </div>
    </section>
  )
}

export function Experience({ t }: { t: Content }) {
  return (
    <section className="section-space section-space-feature bg-light-blue">
      <div className="site-container grid lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] gap-10 lg:gap-20 items-center">
        <figure className="reveal">
          <div className="media-frame aspect-[4/3] image-reveal">
            <img
              src={experienceImage}
              alt={t.achievement.imageAlt}
              width="1584"
              height="993"
              className="w-full h-full object-cover object-[65%_50%]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption className="text-muted text-xs mt-3">
            {t.achievement.imageCaption}
          </figcaption>
        </figure>
        <div>
          <SectionHeading {...t.achievement} />
          <p className="text-muted text-sm leading-relaxed mb-7">
            {t.achievement.note}
          </p>
          <dl className="grid grid-cols-2 gap-4">
            {t.achievement.items.map((item) => (
              <div
                key={item.label}
                className="bg-white border border-border rounded-2xl p-5 sm:p-6 flex flex-col reveal"
              >
                <dt className="text-muted text-xs mt-3 order-2 leading-relaxed">
                  {item.label}
                </dt>
                <dd className="text-2xl sm:text-3xl font-extrabold text-deep-blue leading-tight tabular-nums">
                  {item.value}
                  <span className="text-base font-bold">{item.unit}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export function Credentials({ t }: { t: Content }) {
  return (
    <section className="section-space bg-white">
      <div className="site-container">
        <div className="text-center">
          <SectionHeading {...t.credentials} />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {t.credentials.items.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-2xl p-7 border border-border reveal"
            >
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
