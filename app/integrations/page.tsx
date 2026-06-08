import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Puzzle } from "lucide-react"

export default function IntegrationsPage() {
  const integrations = [
    "Figma",
    "Next.js",
    "Supabase",
    "GitHub",
    "Vercel",
    "OpenAI",
    "Notion",
    "Stripe",
    "Tailwind CSS",
    "TypeScript",
    "React",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 md:py-32">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Integrations</h1>
            <p className="text-xl text-muted-foreground">Connect with the tools and services you already love</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration) => (
              <Card
                key={integration}
                className="p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
              >
                <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/20 dark:to-pink-900/20 flex items-center justify-center mb-3">
                  <Puzzle className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <p className="font-medium text-center">{integration}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/docs">View Documentation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
