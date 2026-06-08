import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-orange-950/20 dark:via-pink-950/20 dark:to-purple-950/20" />
        <div className="container relative px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">Sapphari Blog</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Insights, tutorials, and stories from the world of creative development
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="default" size="sm">
              All Posts
            </Button>
            <Button variant="ghost" size="sm">
              Product Updates
            </Button>
            <Button variant="ghost" size="sm">
              Tutorials
            </Button>
            <Button variant="ghost" size="sm">
              Case Studies
            </Button>
            <Button variant="ghost" size="sm">
              Engineering
            </Button>
            <Button variant="ghost" size="sm">
              Design
            </Button>
            <Button variant="ghost" size="sm">
              Community
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto bg-gradient-to-br from-orange-400 to-pink-500" />
                <div className="p-8 md:p-12 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Tag className="h-4 w-4" />
                    <span>Product Updates</span>
                  </div>
                  <h2 className="text-3xl font-bold">Introducing Sapphari 2.0: The Future of Creative Development</h2>
                  <p className="text-muted-foreground">
                    We're excited to announce the biggest update to Sapphari yet, featuring AI-powered workflows,
                    enhanced collaboration tools, and a completely redesigned interface.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Jan 8, 2025
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />5 min read
                    </div>
                  </div>
                  <Button>
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Recent Posts</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Building a Full-Stack App in 48 Hours",
                  excerpt: "A step-by-step guide to rapid prototyping with Next.js and Supabase",
                  category: "Tutorials",
                  date: "Jan 5, 2025",
                  readTime: "8 min",
                  color: "from-orange-400 to-pink-500",
                },
                {
                  title: "How We Scaled to 100K Users",
                  excerpt: "Lessons learned from our journey to serving 100,000 creators",
                  category: "Engineering",
                  date: "Jan 3, 2025",
                  readTime: "6 min",
                  color: "from-pink-400 to-purple-500",
                },
                {
                  title: "Design Systems That Scale",
                  excerpt: "Best practices for building maintainable design systems",
                  category: "Design",
                  date: "Dec 28, 2024",
                  readTime: "7 min",
                  color: "from-purple-400 to-blue-500",
                },
                {
                  title: "Community Spotlight: Nova Labs",
                  excerpt: "How one team built an AI analytics platform in record time",
                  category: "Case Studies",
                  date: "Dec 25, 2024",
                  readTime: "5 min",
                  color: "from-blue-400 to-teal-500",
                },
                {
                  title: "The Future of AI-Assisted Development",
                  excerpt: "Exploring how AI is transforming the way we build products",
                  category: "Product Updates",
                  date: "Dec 20, 2024",
                  readTime: "10 min",
                  color: "from-teal-400 to-green-500",
                },
                {
                  title: "Optimizing React Performance",
                  excerpt: "Advanced techniques for building lightning-fast React applications",
                  category: "Tutorials",
                  date: "Dec 15, 2024",
                  readTime: "12 min",
                  color: "from-green-400 to-lime-500",
                },
              ].map((post) => (
                <Card key={post.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`aspect-video bg-gradient-to-br ${post.color}`} />
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Tag className="h-3 w-3" />
                      <span>{post.category}</span>
                    </div>
                    <h3 className="font-semibold text-lg line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime} read
                      </div>
                    </div>
                    <Button variant="link" className="p-0 h-auto">
                      Read More →
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Posts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <Card className="max-w-3xl mx-auto p-12 text-center space-y-6 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-950/20 dark:to-pink-950/20 border-orange-200 dark:border-orange-800">
            <h2 className="text-3xl font-bold">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-muted-foreground">
              Get the latest posts, tutorials, and product updates delivered to your inbox every week
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
