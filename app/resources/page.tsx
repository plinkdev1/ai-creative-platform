import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Lightbulb, Palette, Code, Rocket, Video, Puzzle, TrendingUp, Package, Zap, Download } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-orange-950/20 dark:via-pink-950/20 dark:to-purple-950/20" />
        <div className="container relative px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
              Your Creative Development Hub
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              Guides, tools, and insights for creators, makers, and developers shaping the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link href="#toolkits">Explore Resources</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/dashboard">Start a New Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Toolkits & Templates */}
      <section id="toolkits" className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Toolkits & Templates</h2>
            <p className="text-lg text-muted-foreground">
              Downloadable resources for every stage of your creative journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="font-semibold text-lg">Idea Validation Framework</h3>
              <p className="text-sm text-muted-foreground">
                Structured templates to validate your product ideas before building
              </p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center">
                <Palette className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="font-semibold text-lg">Product Design Template Pack</h3>
              <p className="text-sm text-muted-foreground">Complete design system templates for Figma and Sketch</p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-lg">Development Boilerplates</h3>
              <p className="text-sm text-muted-foreground">Next.js, Supabase, and AI API starter templates</p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <Rocket className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-lg">Launch & Marketing Toolkit</h3>
              <p className="text-sm text-muted-foreground">Go-to-market strategies and launch checklists</p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Tutorials & Learning */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tutorials & Learning</h2>
            <p className="text-lg text-muted-foreground">Master your craft with expert-led courses and guides</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Button variant="outline" size="sm">
              All
            </Button>
            <Button variant="ghost" size="sm">
              UI/UX
            </Button>
            <Button variant="ghost" size="sm">
              Development
            </Button>
            <Button variant="ghost" size="sm">
              Launch
            </Button>
            <Button variant="ghost" size="sm">
              AI
            </Button>
            <Button variant="ghost" size="sm">
              Growth
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
                <Video className="h-12 w-12 text-white" />
              </div>
              <div className="p-6 space-y-3">
                <div className="text-xs font-medium text-orange-600 dark:text-orange-400">DEVELOPMENT</div>
                <h3 className="font-semibold text-lg">Building a Full-Stack Prototype in 1 Hour</h3>
                <p className="text-sm text-muted-foreground">
                  Learn rapid prototyping techniques with Next.js and Supabase
                </p>
                <Button variant="link" className="p-0 h-auto">
                  Watch Tutorial →
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                <Video className="h-12 w-12 text-white" />
              </div>
              <div className="p-6 space-y-3">
                <div className="text-xs font-medium text-pink-600 dark:text-pink-400">AI</div>
                <h3 className="font-semibold text-lg">Integrating AI Agents Into Your App Workflow</h3>
                <p className="text-sm text-muted-foreground">Add intelligent automation to your applications</p>
                <Button variant="link" className="p-0 h-auto">
                  Watch Tutorial →
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                <Video className="h-12 w-12 text-white" />
              </div>
              <div className="p-6 space-y-3">
                <div className="text-xs font-medium text-purple-600 dark:text-purple-400">UI/UX</div>
                <h3 className="font-semibold text-lg">Design Systems That Scale</h3>
                <p className="text-sm text-muted-foreground">
                  Build maintainable design systems from a developer's perspective
                </p>
                <Button variant="link" className="p-0 h-auto">
                  Watch Tutorial →
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Community & Case Studies */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Community & Case Studies</h2>
            <p className="text-lg text-muted-foreground">Real projects built by creators using Sapphari</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-400 to-pink-500" />
                <div>
                  <h3 className="font-semibold text-lg">Nova Labs</h3>
                  <p className="text-sm text-muted-foreground">AI-Powered Analytics Platform</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "We built our entire MVP in 48 hours using Sapphari's integrated toolchain. The seamless workflow
                between design, development, and deployment was game-changing."
              </p>
              <Button variant="link" className="p-0 h-auto">
                Read Case Study →
              </Button>
            </Card>

            <Card className="p-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
                <div>
                  <h3 className="font-semibold text-lg">FlowUI</h3>
                  <p className="text-sm text-muted-foreground">Component Library Platform</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Sapphari's resources and community support helped us scale from a side project to serving 10,000+
                developers in just 6 months."
              </p>
              <Button variant="link" className="p-0 h-auto">
                Read Case Study →
              </Button>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="/community">Submit Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Integrations & Stack */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Integrations & Stack</h2>
            <p className="text-lg text-muted-foreground">Connect with the tools you already love</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
            {[
              "Figma",
              "Next.js",
              "Supabase",
              "GitHub",
              "Vercel",
              "OpenAI",
              "Notion",
              "Stripe",
              "Tailwind",
              "TypeScript",
              "React",
              "Node.js",
            ].map((tool) => (
              <Card key={tool} className="p-6 flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="h-12 w-12 mx-auto mb-2 rounded-lg bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/20 dark:to-pink-900/20 flex items-center justify-center">
                    <Puzzle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <p className="text-sm font-medium">{tool}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild>
              <Link href="/docs">View Developer Docs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Insights & Trends */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Insights & Trends</h2>
            <p className="text-lg text-muted-foreground">Stay ahead with industry research and analysis</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <TrendingUp className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              <h3 className="font-semibold text-lg">The Future of AI-Assisted Product Design</h3>
              <p className="text-sm text-muted-foreground">
                How artificial intelligence is transforming the creative process
              </p>
              <Button variant="link" className="p-0 h-auto">
                Read Article →
              </Button>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <Zap className="h-8 w-8 text-pink-600 dark:text-pink-400" />
              <h3 className="font-semibold text-lg">Streamline MVP Cycles With Microservices</h3>
              <p className="text-sm text-muted-foreground">
                Modern architecture patterns for rapid product development
              </p>
              <Button variant="link" className="p-0 h-auto">
                Read Article →
              </Button>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <Package className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              <h3 className="font-semibold text-lg">2026 Creative-Tech Ecosystem Report</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive analysis of tools, trends, and opportunities
              </p>
              <Button variant="link" className="p-0 h-auto">
                Download Report →
              </Button>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="outline">Subscribe for Monthly Insights</Button>
          </div>
        </div>
      </section>

      {/* Brand & Media Kit */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Brand & Media Kit</h2>
            <p className="text-lg text-muted-foreground">Resources for press, investors, and collaborators</p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Logos
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Brand Guidelines
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Media Kit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum & Flow Mindset */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Think, Build, and Create in Flow</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover neuroscience-based practices for focus, productivity, and creative flow. Aligned energy and
              intentional focus accelerate product success and personal fulfillment.
            </p>
            <Button size="lg" asChild>
              <Link href="/flow-practices">Access Flow Practices</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
