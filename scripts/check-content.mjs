import assert from "node:assert/strict"
import { registerHooks } from "node:module"
import { existsSync, readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import ts from "typescript"
import { createElement, Fragment } from "react"
import { renderToStaticMarkup } from "react-dom/server"

// Transpile only in memory; production source and generated Figma helpers stay untouched.
registerHooks({
  resolve(specifier, context, next) {
    if (specifier.startsWith(".") && context.parentURL) {
      const url = new URL(specifier, context.parentURL)
      for (const extension of [".ts", ".tsx"]) {
        if (existsSync(fileURLToPath(url) + extension))
          return { url: url.href + extension, shortCircuit: true }
      }
    }
    return next(specifier, context)
  },
  load(url, context, next) {
    if (/\.svg$/.test(url))
      return {
        format: "module",
        shortCircuit: true,
        source: `export default ${JSON.stringify(url)}`,
      }
    if (/\.tsx?$/.test(url))
      return {
        format: "module",
        shortCircuit: true,
        source: ts.transpileModule(readFileSync(fileURLToPath(url), "utf8"), {
          compilerOptions: {
            module: ts.ModuleKind.ESNext,
            jsx: ts.JsxEmit.ReactJSX,
            target: ts.ScriptTarget.ES2022,
          },
        }).outputText,
      }
    return next(url, context)
  },
})

const { content } = await import("../src/content.ts")
const { company, whatsappUrl } = await import("../src/data/company.ts")
const { Header, Footer, StickyWhatsApp } = await import(
  "../src/components/Layout.tsx"
)
const { Hero } = await import("../src/components/Hero.tsx")
const { About, WhySection, Experience } = await import(
  "../src/components/CompanySections.tsx"
)
const { Services, CargoProcess, RouteSection } = await import(
  "../src/components/Services.tsx"
)
const { FAQSection, ContactCTA } = await import(
  "../src/components/ContactSections.tsx"
)
assert.match(company.whatsapp, /^\d+$/)
assert.equal(company.whatsapp, company.phoneMalaysia.replace(/\D/g, ""))
assert.equal(
  new URL(whatsappUrl("A & B? / café")).searchParams.get("text"),
  "A & B? / café",
)

for (const [lang, t] of Object.entries(content)) {
  const sections = [
    Hero,
    About,
    Services,
    RouteSection,
    WhySection,
    CargoProcess,
    Experience,
    FAQSection,
    ContactCTA,
  ]
  const props = { t, lang, setLang() {} }
  const html = renderToStaticMarkup(
    createElement(
      Fragment,
      null,
      createElement(Header, props),
      createElement(
        "main",
        { id: "main-content" },
        ...sections.map((Component, i) =>
          createElement(Component, { ...props, key: i }),
        ),
      ),
      createElement(Footer, props),
      createElement(StickyWhatsApp, props),
    ),
  )
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1])
  assert.equal(ids.length, new Set(ids).size, "IDs must be unique")
  for (const [, id] of html.matchAll(/(?:href="#|aria-controls=")([^"]+)"/g))
    assert.ok(ids.includes(id), `Missing target ${id}`)
  assert.equal((html.match(/<h1\b/g) || []).length, 1)
  const heroHtml = renderToStaticMarkup(createElement(Hero, props))
  const aboutHtml = renderToStaticMarkup(createElement(About, props))
  const experienceHtml = renderToStaticMarkup(createElement(Experience, props))
  assert.doesNotMatch(heroHtml, /hero-facts|stats-band|1272996-T|2018/)
  assert.equal(
    html.split(company.registrationNumber).length - 1,
    1,
    "Registration belongs only in About",
  )
  assert.equal(aboutHtml.split(company.registrationNumber).length - 1, 1)
  assert.equal(aboutHtml.split(String(company.establishedYear)).length - 1, 1)
  assert.equal(
    html.split(t.about.tagline).length - 1,
    1,
    "Company quote appears only once",
  )
  assert.doesNotMatch(aboutHtml, /\b(?:loop|controls)[=\s>]|<figcaption/)
  assert.match(
    aboutHtml,
    /<video[^>]*autoPlay=""[^>]*muted=""[^>]*playsInline=""/,
  )
  assert.match(heroHtml, /id="latest-info"/)
  assert.match(heroHtml, /class="latest-info"/)
  assert.match(heroHtml, /href="#about" aria-label="Scroll to About"/)
  assert.doesNotMatch(heroHtml, /class="latest-label/)
  assert.match(heroHtml, /15 October 2026/)
  assert.match(heroHtml, /SAR 18 \/ kg/)
  assert.match(heroHtml, /MYR 23 \/ kg/)
  assert.doesNotMatch(heroHtml, /Talk to Us on WhatsApp|Get Today(?:’|')s Rate/)
  assert.doesNotMatch(
    heroHtml,
    /Contact us for the latest departure|Booking availability: Ask us/,
  )
  assert.equal(
    html.split(company.successStories).length - 1,
    1,
    "One success stories destination",
  )
  assert.ok(html.includes(t.why.storiesCta))
  assert.ok(heroHtml.includes(t.why.storiesCta))
  assert.match(heroHtml, /class="latest-facebook-button"[^>]*>[\s\S]*?<svg/)
  for (const value of ["~200", "~80", "2 × 20", "&lt;1"])
    assert.ok(experienceHtml.includes(value))
  assert.ok(experienceHtml.includes(t.achievement.note))
  const routeHtml = renderToStaticMarkup(createElement(RouteSection, props))
  assert.doesNotMatch(heroHtml, /route-map/)
  assert.match(routeHtml, /id="connection"/)
  assert.equal((routeHtml.match(/class="route-map /g) || []).length, 1)
  assert.doesNotMatch(routeHtml, /route-graphic/)
  assert.match(routeHtml, /M1266 365C1350 275 1500 320 1570 478/)
  assert.match(routeHtml, /dur="10s"/)
  assert.match(routeHtml, /begin="-5s"/)
  assert.match(routeHtml, /repeatCount="indefinite"/)
  assert.match(routeHtml, /rotate="auto"/)
  assert.match(routeHtml, /translate\(1423\.25 328\.5\) rotate\(19\.18\)/)
  const headings = [...html.matchAll(/<h([1-6])\b/g)].map((match) =>
    Number(match[1]),
  )
  headings.forEach((level, i) => {
    if (i) assert.ok(level <= headings[i - 1] + 1, "Skipped heading level")
  })
  let whatsappCount = 0
  for (const [, href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    assert.notEqual(href, "#")
    if (!href.startsWith("https:")) continue
    const url = new URL(href.replaceAll("&amp;", "&").replaceAll("&#x27;", "'"))
    if (url.href === company.successStories) continue
    assert.equal(url.host, "wa.me")
    assert.equal(url.pathname, `/${company.whatsapp}`)
    assert.ok(
      Object.values(t.whatsappMsg).includes(url.searchParams.get("text")),
    )
    whatsappCount++
  }
  assert.equal(whatsappCount, 8)
  for (const [Component, messages] of [
    [Hero, [t.whatsappMsg.availability]],
    [
      Services,
      [
        t.whatsappMsg.cargo,
        t.whatsappMsg.moving,
        t.whatsappMsg.storage,
        t.whatsappMsg.modular,
      ],
    ],
    [CargoProcess, []],
    [ContactCTA, [t.whatsappMsg.general]],
    [StickyWhatsApp, [t.whatsappMsg.general]],
  ]) {
    const section = renderToStaticMarkup(createElement(Component, props))
    const links = [
      ...section.matchAll(/href="(https:\/\/wa\.me\/[^"]+)"/g),
    ].map((match) =>
      match[1].replaceAll("&amp;", "&").replaceAll("&#x27;", "'"),
    )
    assert.deepEqual(
      links,
      messages.map(whatsappUrl),
      `${Component.name}: enquiry destinations`,
    )
  }
  assert.ok(
    html.includes("tel:+60139395190") && html.includes("tel:+966530499112"),
  )
  assert.equal((html.match(/aria-haspopup="menu"/g) || []).length, 3)
  assert.equal((html.match(/role="menuitemradio"/g) || []).length, 6)
  assert.equal((html.match(/aria-checked="true"/g) || []).length, 3)
  assert.ok(html.includes('lang="en"') && html.includes('lang="ms"'))
  const languageLabel = lang === "en" ? "English" : "Bahasa Malaysia"
  assert.equal(
    html.split(`aria-label="Language / Bahasa: ${languageLabel}"`).length - 1,
    3,
    "Every language trigger must reflect the selected language",
  )
  const heading = html
    .match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]
    .replace(/<[^>]+>/g, "")
    .replaceAll("&amp;", "&")
  assert.equal(
    heading,
    t.hero.headline,
    "Word wrappers must preserve headline text and spacing",
  )
  assert.ok(html.includes('inert=""'))
  assert.ok(
    !/60XXXXXXXX|info@amantree|mailto:|200\+|FCL|LCL|exclusive|24\/7|—/.test(
      html,
    ),
  )
  assert.deepEqual(
    t.services.items.map((item) => item.id),
    ["moving", "storage", "modular"],
  )
  assert.equal(t.howItWorks.steps.length, 5)
  for (const [, tag] of html.matchAll(/(<img\b[^>]*>)/g))
    assert.match(tag, /alt="[^"]*"/)
  console.log(
    `${lang}: rendered content PASS; ${whatsappCount} WhatsApp links (including hidden menu and sticky control), one success stories link, About-only company facts, schedule/rate safeguards, autoplay video, anchors, FAQ targets, headings, contact numbers, language state and service order`,
  )
}

function luminance(hex) {
  const channels = hex
    .match(/\w\w/g)
    .map((value) => parseInt(value, 16) / 255)
    .map((value) =>
      value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4,
    )
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722
}
for (const [foreground, background] of [
  ["0b7a3a", "ffffff"],
  ["0d76b7", "ffffff"],
  ["0b5f93", "ffffff"],
  ["475569", "ffffff"],
  ["475569", "f8fafc"],
  ["0f172a", "ffffff"],
  ["ffffff", "0b5f93"],
  ["ffffff", "073b5c"],
]) {
  const values = [luminance(foreground), luminance(background)].sort(
    (a, b) => b - a,
  )
  const ratio = (values[0] + 0.05) / (values[1] + 0.05)
  assert.ok(ratio >= 4.5, `Contrast ${foreground}/${background}: ${ratio}`)
  console.log(
    `Contrast #${foreground}/#${background}: ${ratio.toFixed(2)}:1 PASS`,
  )
}
