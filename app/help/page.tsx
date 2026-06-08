import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, BookOpen, MessageCircle, Video, FileText, HelpCircle } from "lucide-react"

export default function HelpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-orange-950/20 dark:via-pink-950/20 dark:to-purple-950/20" />
        <div className="container relative px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">How Can We Help?</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Search our knowledge base or get in touch with our support team
            </p>
            <div className="flex gap-2 max-w-2xl mx-auto pt-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background"
                />
              </div>
              <Button size="lg">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="font-semibold text-lg">Getting Started</h3>
              <p className="text-sm text-muted-foreground">
                New to Sapphari? Learn the basics and set up your first project
              </p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/docs">View Guides →</Link>
              </Button>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center">
                <Video className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="font-semibold text-lg">Video Tutorials</h3>
              <p className="text-sm text-muted-foreground">
                Watch step-by-step video guides for common tasks and features
              </p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/tutorials">Watch Videos →</Link>
              </Button>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-lg">Documentation</h3>
              <p className="text-sm text-muted-foreground">Comprehensive technical documentation and API references</p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/docs">Read Docs →</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Topics</h2>
            <p className="text-lg text-muted-foreground">Frequently accessed help articles</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {[
              "How do I create my first project?",
              "Managing team members and permissions",
              "Connecting integrations to your workspace",
              "Understanding subscription plans and billing",
              "Uploading and organizing files",
              "Setting up custom domains",
              "Troubleshooting common errors",
              "Exporting and backing up your data",
            ].map((topic) => (
              <Card key={topic} className="p-4 hover:shadow-md transition-shadow">
                <Link href="#" className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-muted-foreground" />
                    <span className="group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {topic}
                    </span>
                  </div>
                  <span className="text-muted-foreground">→</span>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-lg text-muted-foreground">Our support team is here to assist you</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-8 space-y-4 text-center">
              <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-xl">Live Chat</h3>
              <p className="text-muted-foreground">
                Chat with our support team in real-time. Available Monday-Friday, 9am-6pm PST
              </p>
              <Button>Start Chat</Button>
            </Card>

            <Card className="p-8 space-y-4 text-center">
              <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-xl">Submit a Ticket</h3>
              <p className="text-muted-foreground">
                Send us a detailed message and we'll get back to you within 24 hours
              </p>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
