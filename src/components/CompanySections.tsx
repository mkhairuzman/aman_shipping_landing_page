import type { Content } from "../content"
import { SectionHeading } from "./shared"
import { EvidenceStrip } from "./EvidenceStrip"

const experienceImage = new URL(
  "../assets/cargo-container-upscaled.webp",
  import.meta.url,
).href

export function About({ t }: { t: Content }) {
  return (
    <section className="about-section section-space-feature">
      <div id="about" className="site-container anchor-target">
        <div className="about-layout">
          <div className="about-heading">
            <SectionHeading {...t.about} />
          </div>
          <figure className="about-media reveal">
            <div className="about-video-frame image-reveal">
              <video
                autoPlay
                muted
                playsInline
                preload="metadata"
                poster="/videos/aman-tree-welcome-poster.webp"
                width="1280"
                height="720"
              >
                <source src="/videos/aman-tree-welcome.mp4" type="video/mp4" />
              </video>
            </div>
          </figure>
          <div className="about-body reveal">
            <p>{t.about.copy}</p>
          </div>
          <blockquote lang="ms" className="about-quote reveal">
            <p>“{t.about.tagline}”</p>
          </blockquote>
        </div>
        <dl className="about-facts reveal">
          {t.trust.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
        <dl className="about-principles">
          {[
            [t.about.missionLabel, t.about.mission],
            [t.about.visionLabel, t.about.vision],
          ].map(([title, desc]) => (
            <div key={title} className="about-principle reveal">
              <dt>{title}</dt>
              <dd>{desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export function WhySection({ t }: { t: Content }) {
  return (
    <section className="why-section section-space bg-white">
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
    <section className="experience-section section-space section-space-feature bg-light-blue">
      <div className="experience-layout site-container grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-10 lg:gap-14">
        <figure className="experience-figure reveal">
          <div className="experience-media image-reveal">
            <img
              src={experienceImage}
              alt={t.achievement.imageAlt}
              width="2376"
              height="1490"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
        </figure>
        <div className="experience-copy">
          <SectionHeading {...t.achievement} />
          <p className="text-muted text-sm leading-relaxed mb-7">
            {t.achievement.note}
          </p>
          <dl className="experience-stats">
            {t.achievement.items.map((item) => (
              <div key={item.label} className="flex flex-col reveal">
                <dt className="text-muted text-sm mt-2 order-2 leading-relaxed">
                  {item.label}
                </dt>
                <dd className="text-2xl sm:text-3xl font-bold text-deep-blue leading-tight tabular-nums">
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
