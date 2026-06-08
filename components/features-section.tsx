import { Zap, Shield, Users, Palette, Code, BarChart, Cloud, Lock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with instant loading and real-time updates across all integrations.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, SSO support, and compliance with GDPR, SOC 2, and ISO standards.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with real-time collaboration, comments, and version control.",
  },
  {
    icon: Palette,
    title: "Design Tools",
    description: "Access premium design assets, templates, and integrations with top creative software.",
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Comprehensive API, webhooks, and SDKs for custom integrations and automation.",
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Track usage, performance metrics, and team productivity with detailed insights.",
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description: "Secure cloud storage with automatic backups and unlimited version history.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your data stays yours. No tracking, no selling data, complete transparency.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Everything You Need to Create</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Powerful features designed for modern creative workflows
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
