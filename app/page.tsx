import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <IntegrationsSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}
