import { useEffect, useRef, useState } from "react"
import type { Content } from "../content"

const photos = [
  {
    src: new URL(
      "../../image_evidence/476116236_9207694099285235_6712604263204147949_n.jpg",
      import.meta.url,
    ).href,
    position: "50% 75%",
  },
  {
    src: new URL(
      "../../image_evidence/476228797_9207693952618583_5677697081526155658_n.jpg",
      import.meta.url,
    ).href,
    position: "50% 70%",
  },
  {
    src: new URL(
      "../../image_evidence/476836037_9246902315364413_6896860557963422683_n.jpg",
      import.meta.url,
    ).href,
    position: "center",
  },
  {
    src: new URL(
      "../../image_evidence/486503671_1213859697408651_263651536402803785_n.jpg",
      import.meta.url,
    ).href,
    position: "50% 10%",
  },
  {
    src: new URL(
      "../../image_evidence/488050687_1221472029980751_186399125557439761_n.jpg",
      import.meta.url,
    ).href,
    position: "center",
  },
  {
    src: new URL(
      "../../image_evidence/783031844_1676945934433356_2495208616774659914_n.jpg",
      import.meta.url,
    ).href,
    position: "50% 55%",
  },
]

export function EvidenceStrip({ copy }: { copy: Content["why"]["evidence"] }) {
  const viewport = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!viewport.current || !("IntersectionObserver" in window)) return
    const observer = new IntersectionObserver(([entry]) =>
      setInView(entry.isIntersecting),
    )
    observer.observe(viewport.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="evidence-strip" data-in-view={inView}>
      <p className="evidence-label text-muted text-sm">{copy.label}</p>
      <div
        ref={viewport}
        className="evidence-viewport"
        role="region"
        aria-label={copy.label}
        tabIndex={0}
      >
        <div className="evidence-track">
          {[false, true].map((duplicate) => (
            <div
              key={String(duplicate)}
              className={`evidence-group${
                duplicate ? " evidence-duplicate" : ""
              }`}
              aria-hidden={duplicate || undefined}
              inert={duplicate || undefined}
            >
              {photos.map((photo, index) => (
                <div className="evidence-card" key={photo.src}>
                  <img
                    src={photo.src}
                    alt={duplicate ? "" : copy.alts[index]}
                    width="280"
                    height="210"
                    loading="lazy"
                    decoding="async"
                    style={{
                      objectPosition: photo.position,
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
