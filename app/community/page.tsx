import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Users,
  Sparkles,
  GitBranch,
  Calendar,
  MessageSquare,
  Award,
  Heart,
  ExternalLink,
  Github,
  MessageCircle,
} from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-orange-950/20 dark:via-pink-950/20 dark:to-purple-950/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-orange-400 blur-3xl" />
          <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-pink-400 blur-3xl" />
        </div>
        <div className="container relative px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">Where Builders Belong</h1>
            <p className="text-xl text-muted-foreground text-balance">
              A thriving community of creators, developers, and innovators shaping what's next — together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link href="#projects">Join the Community</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#showcase">Showcase Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section id="projects" className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built With Sapphari</h2>
            <p className="text-lg text-muted-foreground">Discover amazing projects created by our community</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Button variant="outline" size="sm">
              All
            </Button>
            <Button variant="ghost" size="sm">
              Design
            </Button>
            <Button variant="ghost" size="sm">
              AI
            </Button>
            <Button variant="ghost" size="sm">
              Tools
            </Button>
            <Button variant="ghost" size="sm">
              Launch
            </Button>
            <Button variant="ghost" size="sm">
              Open Source
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-video bg-gradient-to-br from-orange-400 to-pink-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500" />
                  <span className="text-sm font-medium">@sofia_dev</span>
                </div>
                <h3 className="font-semibold text-lg">FlowUI — Modular Interface Library</h3>
                <p className="text-sm text-muted-foreground">
                  A comprehensive component library built for modern web applications
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300">
                    Design
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300">
                    Open Source
                  </span>
                </div>
                <Button variant="link" className="p-0 h-auto group-hover:translate-x-1 transition-transform">
                  View Project <ExternalLink className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-video bg-gradient-to-br from-pink-400 to-purple-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <GitBranch className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
                  <span className="text-sm font-medium">@alex_builds</span>
                </div>
                <h3 className="font-semibold text-lg">NovaOS — Design-to-Code Framework</h3>
                <p className="text-sm text-muted-foreground">
                  Transform Figma designs into production-ready code instantly
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300">
                    AI
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300">
                    Tools
                  </span>
                </div>
                <Button variant="link" className="p-0 h-auto group-hover:translate-x-1 transition-transform">
                  View Project <ExternalLink className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-blue-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-500" />
                  <span className="text-sm font-medium">@maya_creates</span>
                </div>
                <h3 className="font-semibold text-lg">Emerge — AI Agent Launcher Toolkit</h3>
                <p className="text-sm text-muted-foreground">
                  Deploy intelligent AI agents for any workflow in minutes
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300">
                    AI
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300">
                    Launch
                  </span>
                </div>
                <Button variant="link" className="p-0 h-auto group-hover:translate-x-1 transition-transform">
                  View Project <ExternalLink className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">View More Projects</Button>
          </div>
        </div>
      </section>

      {/* Creator Spotlights */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Creator Spotlights</h2>
            <p className="text-lg text-muted-foreground">Meet the innovators building the future</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-24 w-24 mx-auto rounded-full bg-gradient-to-br from-orange-400 to-pink-500" />
              <div>
                <h3 className="font-semibold text-lg">Sofia Chen</h3>
                <p className="text-sm text-muted-foreground">Full-Stack Visionary</p>
              </div>
              <p className="text-sm text-muted-foreground">
                "Building the future of design systems with Quantum Flow UI"
              </p>
              <div className="text-xs text-muted-foreground">
                <strong>Favorite Stack:</strong> Next.js, Tailwind, Supabase
              </div>
              <Button variant="link" className="p-0 h-auto">
                View Profile →
              </Button>
            </Card>

            <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-24 w-24 mx-auto rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
              <div>
                <h3 className="font-semibold text-lg">Alex Rivera</h3>
                <p className="text-sm text-muted-foreground">AI Engineer</p>
              </div>
              <p className="text-sm text-muted-foreground">"Pioneering AI-assisted development workflows"</p>
              <div className="text-xs text-muted-foreground">
                <strong>Favorite Stack:</strong> Python, OpenAI, React
              </div>
              <Button variant="link" className="p-0 h-auto">
                View Profile →
              </Button>
            </Card>

            <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-24 w-24 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-blue-500" />
              <div>
                <h3 className="font-semibold text-lg">Maya Patel</h3>
                <p className="text-sm text-muted-foreground">Product Designer</p>
              </div>
              <p className="text-sm text-muted-foreground">"Crafting delightful user experiences at scale"</p>
              <div className="text-xs text-muted-foreground">
                <strong>Favorite Stack:</strong> Figma, Framer, TypeScript
              </div>
              <Button variant="link" className="p-0 h-auto">
                View Profile →
              </Button>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="outline">Nominate a Creator</Button>
          </div>
        </div>
      </section>

      {/* Collaboration Spaces */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Collaboration Spaces</h2>
            <p className="text-lg text-muted-foreground">
              Join open-source initiatives, contribute components, or brainstorm in collaborative labs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <MessageCircle className="h-10 w-10 text-orange-600 dark:text-orange-400" />
              <h3 className="font-semibold text-lg">Discord Community</h3>
              <p className="text-sm text-muted-foreground">
                Real-time discussions, support, and collaboration with 10,000+ creators
              </p>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="https://discord.gg" target="_blank">
                  Join Discord
                </Link>
              </Button>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <Github className="h-10 w-10 text-pink-600 dark:text-pink-400" />
              <h3 className="font-semibold text-lg">GitHub Organization</h3>
              <p className="text-sm text-muted-foreground">
                Contribute to open-source projects and collaborative repositories
              </p>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="https://github.com" target="_blank">
                  View Repos
                </Link>
              </Button>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <Users className="h-10 w-10 text-purple-600 dark:text-purple-400" />
              <h3 className="font-semibold text-lg">Collaborative Labs</h3>
              <p className="text-sm text-muted-foreground">
                Shared workspaces for brainstorming and co-creating projects
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                Enter the Labs
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Events & Meetups */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Events & Meetups</h2>
            <p className="text-lg text-muted-foreground">Connect, learn, and build together</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Button variant="outline" size="sm">
              Upcoming
            </Button>
            <Button variant="ghost" size="sm">
              Past
            </Button>
            <Button variant="ghost" size="sm">
              Virtual
            </Button>
            <Button variant="ghost" size="sm">
              IRL
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-orange-600 dark:text-orange-400 mb-1">
                    MAY 15, 2025 • VIRTUAL
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Build Jam 2025 — Rapid MVP Challenge</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    48-hour hackathon to build and launch your product idea
                  </p>
                  <Button variant="outline" size="sm">
                    Register Now
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-pink-600 dark:text-pink-400 mb-1">
                    JUNE 3, 2025 • VIRTUAL
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Workshop: From Prototype to Production</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn deployment strategies and scaling best practices
                  </p>
                  <Button variant="outline" size="sm">
                    Register Now
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-1">MONTHLY • VIRTUAL</div>
                  <h3 className="font-semibold text-lg mb-2">Community Sync — Monthly Creator Meetup</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Share progress, get feedback, and network with fellow builders
                  </p>
                  <Button variant="outline" size="sm">
                    Join Next Sync
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-1">
                    JULY 20, 2025 • SAN FRANCISCO
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Sapphari Summit 2025</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Annual conference bringing together the global creator community
                  </p>
                  <Button variant="outline" size="sm">
                    Get Tickets
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">See All Events</Button>
          </div>
        </div>
      </section>

      {/* Discussion & Support */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Discussion & Support</h2>
            <p className="text-lg text-muted-foreground">Ask questions, share progress, and collaborate in real time</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 space-y-6">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <Button variant="outline" asChild>
                  <Link href="https://discord.gg" target="_blank">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Discord
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://twitter.com" target="_blank">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Twitter/X
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com" target="_blank">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
              </div>
              <div className="text-center">
                <Button size="lg">Join the Conversation</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contributor Circle */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contributor & Ambassador Circle</h2>
            <p className="text-lg text-muted-foreground">Grow by giving. Lead by creating.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mx-auto rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="font-semibold">Beta Tester</h3>
              <p className="text-sm text-muted-foreground">Get early access to new features and shape the product</p>
            </Card>

            <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mx-auto rounded-full bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center">
                <Award className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="font-semibold">Brand Ambassador</h3>
              <p className="text-sm text-muted-foreground">Represent Sapphari and earn exclusive perks</p>
            </Card>

            <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mx-auto rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold">Mentor</h3>
              <p className="text-sm text-muted-foreground">Guide new creators and share your expertise</p>
            </Card>

            <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mx-auto rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <GitBranch className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold">Open Source Contributor</h3>
              <p className="text-sm text-muted-foreground">Submit tools, tutorials, and components</p>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg">Become a Contributor</Button>
          </div>
        </div>
      </section>

      {/* Values & Vision */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Our Values & Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe creativity is exponential when shared. Every idea contributes to a collective evolution.
              Together, we're building tools, products, and worlds that redefine what's possible.
            </p>
            <Button size="lg" asChild>
              <Link href="/signup">Start Building With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
