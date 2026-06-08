import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Target, Users, Zap, Globe, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-orange-950/20 dark:via-pink-950/20 dark:to-purple-950/20" />
        <div className="container relative px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
              Empowering Creators to Build the Future
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              Sapphari is a platform designed to accelerate creative development through intelligent curation, seamless
              integrations, and a thriving community of makers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="p-8 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                <Target className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To democratize access to world-class development tools and knowledge, enabling creators of all skill
                levels to transform ideas into impactful products with speed, clarity, and confidence.
              </p>
            </Card>

            <Card className="p-8 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center">
                <Zap className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where every creator has the resources, community, and technology to bring their vision to life
                without barriers—where innovation flows freely and collaboration drives progress.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we build</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Community First</h3>
              <p className="text-muted-foreground">
                We believe in the power of collaboration and shared knowledge to elevate everyone.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Transparency</h3>
              <p className="text-muted-foreground">
                Open processes, honest communication, and clear documentation in everything we do.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Excellence</h3>
              <p className="text-muted-foreground">
                Curating only the highest quality tools, resources, and integrations for our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground">How Sapphari came to be</p>
            </div>

            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-muted-foreground leading-relaxed">
                Sapphari was born from a simple observation: talented creators were spending more time navigating
                fragmented tools and outdated documentation than actually building. We saw brilliant ideas stall not
                from lack of skill, but from friction in the development process.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                In 2024, our founding team—designers, developers, and product builders—came together with a shared
                vision: create a unified platform that removes barriers between ideation and execution. We wanted to
                build the ecosystem we wished existed when we were starting out.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Today, Sapphari serves thousands of creators worldwide, from solo founders building their first MVP to
                established teams scaling innovative products. We're constantly evolving, guided by community feedback
                and our commitment to empowering the next generation of builders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-lg text-muted-foreground">
              A diverse group of creators, engineers, and designers passionate about empowering builders
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Alex Chen", role: "Co-Founder & CEO", color: "from-orange-400 to-pink-500" },
              { name: "Jordan Rivera", role: "Co-Founder & CTO", color: "from-pink-400 to-purple-500" },
              { name: "Sam Patel", role: "Head of Design", color: "from-purple-400 to-blue-500" },
              { name: "Taylor Kim", role: "Head of Community", color: "from-blue-400 to-teal-500" },
            ].map((member) => (
              <Card key={member.name} className="p-6 text-center space-y-4">
                <div className={`h-24 w-24 mx-auto rounded-full bg-gradient-to-br ${member.color}`} />
                <div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <Card className="max-w-3xl mx-auto p-12 text-center space-y-6 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-950/20 dark:to-pink-950/20 border-orange-200 dark:border-orange-800">
            <Heart className="h-12 w-12 mx-auto text-orange-600 dark:text-orange-400" />
            <h2 className="text-3xl font-bold">Join Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              We're always looking for talented, passionate individuals to join our team and help shape the future of
              creative development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link href="/careers">View Open Positions</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
