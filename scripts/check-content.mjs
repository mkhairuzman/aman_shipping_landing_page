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
const { TrustBand, About, WhySection, Experience, Credentials } = await import(
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
    TrustBand,
    About,
    Services,
    WhySection,
    CargoProcess,
    RouteSection,
    Experience,
    Credentials,
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
    const url = new URL(href.replaceAll("&amp;", "&"))
    assert.equal(url.host, "wa.me")
    assert.equal(url.pathname, `/${company.whatsapp}`)
    assert.ok(
      Object.values(t.whatsappMsg).includes(url.searchParams.get("text")),
    )
    whatsappCount++
  }
  assert.equal(whatsappCount, 8)
  for (const [Component, messages] of [
    [Hero, [t.whatsappMsg.general]],
    [
      Services,
      [
        t.whatsappMsg.cargo,
        t.whatsappMsg.moving,
        t.whatsappMsg.storage,
        t.whatsappMsg.modular,
      ],
    ],
    [CargoProcess, [t.whatsappMsg.cargo]],
    [ContactCTA, [t.whatsappMsg.general]],
    [StickyWhatsApp, [t.whatsappMsg.general]],
  ]) {
    const section = renderToStaticMarkup(createElement(Component, props))
    const links = [
      ...section.matchAll(/href="(https:\/\/wa\.me\/[^"]+)"/g),
    ].map((match) => match[1].replaceAll("&amp;", "&"))
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
    `${lang}: rendered content PASS; 8 WhatsApp links with section-specific messages (including hidden sticky control), anchors, FAQ targets, headings, contact numbers, language state, service order and claim exclusions`,
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
