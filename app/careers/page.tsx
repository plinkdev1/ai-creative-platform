import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Zap, Users, Globe } from "lucide-react"

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-orange-950/20 dark:via-pink-950/20 dark:to-purple-950/20" />
        <div className="container relative px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">Build the Future with Us</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Join a team of passionate creators, engineers, and designers shaping how the world builds products.
            </p>
            <Button size="lg" asChild>
              <Link href="#positions">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Sapphari?</h2>
            <p className="text-lg text-muted-foreground">What makes working here special</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                <Heart className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="font-semibold text-lg">Mission-Driven</h3>
              <p className="text-sm text-muted-foreground">
                Work on products that empower millions of creators worldwide
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center">
                <Zap className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="font-semibold text-lg">Fast-Paced Growth</h3>
              <p className="text-sm text-muted-foreground">Rapid learning, high impact, and career acceleration</p>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-lg">Collaborative Culture</h3>
              <p className="text-sm text-muted-foreground">Work with talented, supportive teammates who care</p>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-lg">Remote-First</h3>
              <p className="text-sm text-muted-foreground">Work from anywhere with flexible hours and autonomy</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits & Perks</h2>
            <p className="text-lg text-muted-foreground">We invest in our team's success and well-being</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 space-y-3">
              <h3 className="font-semibold">Competitive Compensation</h3>
              <p className="text-sm text-muted-foreground">
                Market-leading salaries and equity packages for all team members
              </p>
            </Card>

            <Card className="p-6 space-y-3">
              <h3 className="font-semibold">Health & Wellness</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive health, dental, and vision insurance plus wellness stipend
              </p>
            </Card>

            <Card className="p-6 space-y-3">
              <h3 className="font-semibold">Unlimited PTO</h3>
              <p className="text-sm text-muted-foreground">Take the time you need to recharge and stay balanced</p>
            </Card>

            <Card className="p-6 space-y-3">
              <h3 className="font-semibold">Learning Budget</h3>
              <p className="text-sm text-muted-foreground">
                Annual stipend for courses, conferences, and professional development
              </p>
            </Card>

            <Card className="p-6 space-y-3">
              <h3 className="font-semibold">Home Office Setup</h3>
              <p className="text-sm text-muted-foreground">
                Budget for equipment, furniture, and tools to create your ideal workspace
              </p>
            </Card>

            <Card className="p-6 space-y-3">
              <h3 className="font-semibold">Team Retreats</h3>
              <p className="text-sm text-muted-foreground">
                Quarterly in-person gatherings in inspiring locations worldwide
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground">Find your next opportunity</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                title: "Senior Full-Stack Engineer",
                department: "Engineering",
                location: "Remote",
                type: "Full-time",
              },
              {
                title: "Product Designer",
                department: "Design",
                location: "Remote",
                type: "Full-time",
              },
              {
                title: "Developer Advocate",
                department: "Community",
                location: "Remote",
                type: "Full-time",
              },
              {
                title: "Technical Writer",
                department: "Documentation",
                location: "Remote",
                type: "Full-time",
              },
              {
                title: "Customer Success Manager",
                department: "Support",
                location: "Remote",
                type: "Full-time",
              },
            ].map((job) => (
              <Card key={job.title} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline">
                    Apply Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Don't see a perfect fit?</p>
            <Button variant="outline" asChild>
              <Link href="/contact">Send Us Your Resume</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
