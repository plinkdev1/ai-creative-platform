import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookOpen, Sparkles, Users, Building2, DollarSign, Shield, FileText, Zap } from "lucide-react"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-orange-950/20 dark:via-pink-950/20 dark:to-purple-950/20" />
        <div className="container relative px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">The Platform Playbook</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Everything you need to discover, curate, and share tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link href="#overview">Explore Documentation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#submit">Submit a Tool</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Welcome */}
            <div id="overview" className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h2 className="text-3xl font-bold">Welcome to Sapphari</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sapphari is a curated AI-powered discovery platform for creators, makers, and tool builders. We combine
                free discovery, AI-assisted navigation, and sponsored placements to help you find the perfect tools for
                your creative workflow.
              </p>
            </div>

            {/* What is Sapphari */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                </div>
                <h2 className="text-3xl font-bold">What is Sapphari?</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sapphari is your intelligent companion for discovering creative tools and integrations. Think of it as
                StackShare meets Product Hunt meets G2 — but powered by AI that understands your specific needs and
                workflow.
              </p>
              <Card className="p-6 bg-muted/50">
                <h3 className="font-semibold text-lg mb-4">Platform Ecosystem</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <p>
                      <strong className="text-foreground">Browse:</strong> Explore curated tools across design,
                      development, AI, and more
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-pink-500 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <p>
                      <strong className="text-foreground">AI Recommendation:</strong> Get personalized suggestions based
                      on your workflow
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <p>
                      <strong className="text-foreground">Featured Listings:</strong> Discover sponsored and organic
                      content
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      4
                    </div>
                    <p>
                      <strong className="text-foreground">Community Reviews:</strong> Read authentic feedback from real
                      users
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Start */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold">Quick Start</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6 space-y-3">
                  <h3 className="font-semibold text-lg">For Users</h3>
                  <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                    <li>Create a free account</li>
                    <li>Browse tools or ask the AI for recommendations</li>
                    <li>Save your favorites to collections</li>
                    <li>Leave reviews to help the community</li>
                  </ol>
                  <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </Card>

                <Card className="p-6 space-y-3">
                  <h3 className="font-semibold text-lg">For Creators</h3>
                  <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                    <li>Submit your tool for review</li>
                    <li>Complete your tool profile</li>
                    <li>Engage with user feedback</li>
                    <li>Consider sponsorship for visibility</li>
                  </ol>
                  <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                    <Link href="#submit">Submit Tool</Link>
                  </Button>
                </Card>
              </div>
            </div>

            {/* Curation Process */}
            <div id="curation" className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold">Curation Process</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every tool on Sapphari goes through a rigorous curation process to ensure quality and relevance.
              </p>
              <Card className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">Listing Criteria</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      <strong className="text-foreground">Quality:</strong> Tools must be functional, well-maintained,
                      and provide real value
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>
                      <strong className="text-foreground">Relevance:</strong> Must serve creators, developers, or
                      creative professionals
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>
                      <strong className="text-foreground">Community Feedback:</strong> User reviews and ratings
                      influence visibility
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>
                      <strong className="text-foreground">Transparency:</strong> Sponsored placements are clearly marked
                    </span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6 bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-900">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> Our AI evaluates and ranks tools based on
                  relevance, user engagement, and community feedback. Sponsored placements are always clearly labeled.
                </p>
              </Card>
            </div>

            {/* For Creators & Makers */}
            <div id="submit" className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h2 className="text-3xl font-bold">For Creators & Makers</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Get your tool discovered by thousands of creators and developers.
              </p>
              <Card className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">Getting Featured</h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-foreground">1.</span>
                    <span>
                      <strong className="text-foreground">Submit Your Tool:</strong> Fill out the submission form with
                      details about your product
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-foreground">2.</span>
                    <span>
                      <strong className="text-foreground">Review Process:</strong> Our team reviews submissions within
                      3-5 business days
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-foreground">3.</span>
                    <span>
                      <strong className="text-foreground">AI Enhancement:</strong> Our AI analyzes your tool and
                      optimizes its discoverability
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-foreground">4.</span>
                    <span>
                      <strong className="text-foreground">Community Feedback:</strong> Users can review and rate your
                      tool
                    </span>
                  </li>
                </ol>
                <Button className="w-full" asChild>
                  <Link href="/dashboard">Get Your Tool Listed</Link>
                </Button>
              </Card>
            </div>

            {/* For Brands & Partners */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                </div>
                <h2 className="text-3xl font-bold">For Brands & Partners</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Reach your target audience with sponsored placements and advertising options.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 space-y-4">
                  <h3 className="font-semibold text-lg">Sponsorship Options</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Featured placements in search results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Newsletter sponsorships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Banner advertising</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Category sponsorships</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 space-y-4">
                  <h3 className="font-semibold text-lg">Reporting & Analytics</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Real-time click tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Engagement metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Impression data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Conversion tracking</span>
                    </li>
                  </ul>
                </Card>
              </div>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/contact">Partner With Us</Link>
              </Button>
            </div>

            {/* Affiliate & Revenue Transparency */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold">Affiliate & Revenue Transparency</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in complete transparency about how we generate revenue and how affiliates are compensated.
              </p>
              <Card className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">How It Works</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Some tool listings include affiliate links, clearly marked with an "Affiliate" badge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>We earn a commission when you purchase through these links at no extra cost to you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Affiliate relationships never influence our curation or AI recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>All sponsored content is clearly labeled</span>
                  </li>
                </ul>
              </Card>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/contact">Join Affiliate Program</Link>
              </Button>
            </div>

            {/* AI Curation Engine */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold">AI Curation Engine</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our AI understands your workflow and recommends tools that truly fit your needs.
              </p>
              <Card className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">How AI Recommendations Work</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>
                      <strong className="text-foreground">Personalization:</strong> Learns from your browsing and search
                      patterns
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>
                      <strong className="text-foreground">Context-Aware:</strong> Understands your tech stack and
                      workflow
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>
                      <strong className="text-foreground">Privacy-First:</strong> Your data stays private and secure
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>
                      <strong className="text-foreground">Feedback Loop:</strong> Improves with your ratings and reviews
                    </span>
                  </li>
                </ul>
              </Card>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/dashboard">Try AI Recommendations</Link>
              </Button>
            </div>

            {/* User Tiers & Benefits */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h2 className="text-3xl font-bold">User Tiers & Benefits</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 space-y-4">
                  <h3 className="font-semibold text-lg">Free</h3>
                  <div className="text-3xl font-bold">$0</div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>3 AI chats per day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Unlimited browsing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Basic search</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Community access</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </Card>

                <Card className="p-6 space-y-4 border-orange-500 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                    POPULAR
                  </div>
                  <h3 className="font-semibold text-lg">Pro</h3>
                  <div className="text-3xl font-bold">$19</div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Unlimited AI chats</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Saved collections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Smart filters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Priority support</span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/signup">Upgrade to Pro</Link>
                  </Button>
                </Card>

                <Card className="p-6 space-y-4">
                  <h3 className="font-semibold text-lg">Power User</h3>
                  <div className="text-3xl font-bold">$29</div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>All Pro features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Analytics dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Early beta access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>API access</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/signup">Go Power User</Link>
                  </Button>
                </Card>
              </div>
            </div>

            {/* Contributing Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                </div>
                <h2 className="text-3xl font-bold">Contributing Content</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Share your expertise and help the community discover great tools.
              </p>
              <Card className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">Contribution Guidelines</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Write detailed tool guides and tutorials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Create curated collections for specific workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Share honest reviews and comparisons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Earn contributor badges and visibility</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/community">Become a Contributor</Link>
                </Button>
              </Card>
            </div>

            {/* Legal & Compliance */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold">Legal & Compliance</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6 space-y-3 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold">Terms of Service</h3>
                  <p className="text-sm text-muted-foreground">Guidelines for users, sponsors, and affiliates</p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href="/terms">Read Terms →</Link>
                  </Button>
                </Card>

                <Card className="p-6 space-y-3 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold">Privacy Policy</h3>
                  <p className="text-sm text-muted-foreground">How we protect and use your data</p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href="/privacy">Read Policy →</Link>
                  </Button>
                </Card>

                <Card className="p-6 space-y-3 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold">Brand Assets</h3>
                  <p className="text-sm text-muted-foreground">Guidelines for using Sapphari branding</p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href="/resources">View Assets →</Link>
                  </Button>
                </Card>

                <Card className="p-6 space-y-3 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold">GDPR Compliance</h3>
                  <p className="text-sm text-muted-foreground">Our commitment to data protection</p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href="/gdpr">Learn More →</Link>
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
