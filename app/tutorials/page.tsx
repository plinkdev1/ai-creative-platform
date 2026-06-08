import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Video, BookOpen } from "lucide-react"

export default function TutorialsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 md:py-32">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Tutorials</h1>
            <p className="text-xl text-muted-foreground">Learn how to make the most of Sapphari</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
                <Video className="h-12 w-12 text-white" />
              </div>
              <div className="p-6 space-y-3">
                <div className="text-xs font-medium text-orange-600 dark:text-orange-400">GETTING STARTED</div>
                <h3 className="font-semibold text-lg">Platform Overview</h3>
                <p className="text-sm text-muted-foreground">A complete walkthrough of Sapphari's features</p>
                <Button variant="link" className="p-0 h-auto">
                  Watch Tutorial →
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-white" />
              </div>
              <div className="p-6 space-y-3">
                <div className="text-xs font-medium text-pink-600 dark:text-pink-400">AI FEATURES</div>
                <h3 className="font-semibold text-lg">Using AI Recommendations</h3>
                <p className="text-sm text-muted-foreground">Get personalized tool suggestions</p>
                <Button variant="link" className="p-0 h-auto">
                  Read Guide →
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                <Video className="h-12 w-12 text-white" />
              </div>
              <div className="p-6 space-y-3">
                <div className="text-xs font-medium text-purple-600 dark:text-purple-400">FOR CREATORS</div>
                <h3 className="font-semibold text-lg">Submitting Your Tool</h3>
                <p className="text-sm text-muted-foreground">Step-by-step guide to getting listed</p>
                <Button variant="link" className="p-0 h-auto">
                  Watch Tutorial →
                </Button>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/docs">View All Documentation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
