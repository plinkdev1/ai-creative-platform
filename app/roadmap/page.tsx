import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Circle, Clock } from "lucide-react"

export default function RoadmapPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 md:py-32">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Roadmap</h1>
            <p className="text-xl text-muted-foreground mb-12">See what we're building next for Sapphari</p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  Completed
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <h3 className="font-semibold text-lg mb-2">AI-Powered Recommendations</h3>
                    <p className="text-sm text-muted-foreground">
                      Personalized tool suggestions based on your workflow
                    </p>
                  </Card>
                  <Card className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Community Showcase</h3>
                    <p className="text-sm text-muted-foreground">Platform for creators to share their projects</p>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-orange-600" />
                  In Progress
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Advanced Analytics Dashboard</h3>
                    <p className="text-sm text-muted-foreground">Detailed insights for creators and brands</p>
                  </Card>
                  <Card className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Mobile App</h3>
                    <p className="text-sm text-muted-foreground">Native iOS and Android applications</p>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Circle className="h-6 w-6 text-muted-foreground" />
                  Planned
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <h3 className="font-semibold text-lg mb-2">API Access</h3>
                    <p className="text-sm text-muted-foreground">Programmatic access to Sapphari data</p>
                  </Card>
                  <Card className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Team Workspaces</h3>
                    <p className="text-sm text-muted-foreground">Collaborative tool discovery for teams</p>
                  </Card>
                  <Card className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Browser Extension</h3>
                    <p className="text-sm text-muted-foreground">Quick access to recommendations while browsing</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
