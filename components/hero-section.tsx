"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ArrowRight, Play, Sparkles, X } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm">
                <Sparkles className="h-4 w-4 text-orange-500" />
                <span className="font-medium">Design Anything — Design Everything</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                Your Creative{" "}
                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                  Command Center
                </span>
              </h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-xl leading-relaxed">
                Discover, integrate, and manage 100+ creative tools in one powerful platform. Built for designers,
                developers, and creative teams who demand excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base" asChild>
                  <Link href="/signup">
                    Start Creating Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base bg-transparent"
                  onClick={() => setDemoOpen(true)}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-sm text-muted-foreground">Active Creators</div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-sm text-muted-foreground">Integrations</div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <div className="text-3xl font-bold">1M+</div>
                  <div className="text-sm text-muted-foreground">Projects Created</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl border border-border bg-card p-8 shadow-2xl">
                {/* Floating Cards Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 w-full h-full p-8">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="rounded-lg bg-gradient-to-br from-muted to-muted/50 border border-border animate-pulse"
                        style={{
                          animationDelay: `${i * 200}ms`,
                          animationDuration: "3s",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-600 shadow-lg flex items-center justify-center">
                    <Sparkles className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
        <DialogContent className="max-w-4xl p-0">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-50"
            onClick={() => setDemoOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500/20 to-pink-600/20">
              <div className="text-center space-y-4">
                <div className="h-20 w-20 mx-auto rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                  <Play className="h-10 w-10 text-white" />
                </div>
                <p className="text-white text-lg">Demo video coming soon!</p>
                <p className="text-white/60 text-sm">Experience the power of Sapphari</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
