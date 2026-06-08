"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const integrations = [
  "Figma",
  "Adobe XD",
  "Sketch",
  "Photoshop",
  "Illustrator",
  "After Effects",
  "Premiere Pro",
  "Blender",
  "Cinema 4D",
  "Unity",
  "Unreal Engine",
  "GitHub",
  "GitLab",
  "Bitbucket",
  "Slack",
  "Discord",
  "Notion",
  "Airtable",
  "Trello",
  "Asana",
  "Jira",
  "Linear",
  "Stripe",
  "PayPal",
  "Shopify",
  "WordPress",
  "Webflow",
  "Framer",
  "Vercel",
  "Netlify",
]

export function IntegrationsSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Integrates With Your Favorite Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Connect with 100+ apps and services to streamline your workflow
          </p>
        </div>

        {/* Logo Cloud */}
        <div className="relative overflow-hidden">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-lg border border-border bg-card hover:bg-accent hover:border-accent-foreground/20 transition-all cursor-pointer"
              >
                <span className="text-sm font-medium">{integration}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/integrations">
              Explore All Apps
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
