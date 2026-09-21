import { content } from "./content"
import { useLanguageTransition } from "./components/languageTransition"
import { Header, Footer, StickyWhatsApp } from "./components/Layout"
import { Hero } from "./components/Hero"
import {
  TrustBand,
  About,
  WhySection,
  Experience,
  Credentials,
} from "./components/CompanySections"
import { Services, CargoProcess, RouteSection } from "./components/Services"
import { FAQSection, ContactCTA } from "./components/ContactSections"
import { useReveals } from "./components/shared"

export default function App() {
  const { lang, changeLanguage } = useLanguageTransition()
  const main = useReveals()
  const t = content[lang]
  return (
    <>
      <a href="#main-content" className="skip-link">
        {t.nav.skip}
      </a>
      <Header t={t} lang={lang} setLang={changeLanguage} />
      <main id="main-content" ref={main} tabIndex={-1}>
        <Hero t={t} />
        <TrustBand t={t} />
        <About t={t} />
        <Services t={t} />
        <WhySection t={t} />
        <CargoProcess t={t} />
        <RouteSection t={t} />
        <Experience t={t} />
        <Credentials t={t} />
        <FAQSection t={t} />
        <ContactCTA t={t} />
      </main>
      <Footer t={t} lang={lang} setLang={changeLanguage} />
      <StickyWhatsApp t={t} />
    </>
  )
}
