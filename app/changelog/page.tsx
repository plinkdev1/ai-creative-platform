import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function ChangelogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 md:py-32">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Changelog</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Track all updates, new features, and improvements to Sapphari
            </p>

            <div className="space-y-8">
              <Card className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-orange-600 dark:text-orange-400">v2.1.0</span>
                  <span className="text-sm text-muted-foreground">January 15, 2025</span>
                </div>
                <h3 className="font-semibold text-lg">AI-Powered Recommendations</h3>
                <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Launched personalized AI tool recommendations</li>
                  <li>Improved search relevance algorithm</li>
                  <li>Added smart filters for better discovery</li>
                </ul>
              </Card>

              <Card className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-orange-600 dark:text-orange-400">v2.0.0</span>
                  <span className="text-sm text-muted-foreground">December 1, 2024</span>
                </div>
                <h3 className="font-semibold text-lg">Platform Redesign</h3>
                <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Complete UI/UX overhaul</li>
                  <li>New dashboard experience</li>
                  <li>Enhanced mobile responsiveness</li>
                </ul>
              </Card>

              <Card className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-orange-600 dark:text-orange-400">v1.5.0</span>
                  <span className="text-sm text-muted-foreground">November 10, 2024</span>
                </div>
                <h3 className="font-semibold text-lg">Community Features</h3>
                <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>Added project showcase</li>
                  <li>Launched creator spotlights</li>
                  <li>Introduced collaboration spaces</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
