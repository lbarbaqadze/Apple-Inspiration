import MainHero from "./components/MainHero"
import FAQ from "./components/FAQ"
import { ContactSupportSection } from "./components/SupportHero"
import Safety from "./components/Safety"

export default function SupportPage() {
  return (
    <>
      <MainHero />
      <FAQ />
      <Safety />
      <ContactSupportSection />

    </>
  )
}
