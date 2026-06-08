"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ExternalLink, Download, Github, BookOpen } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

export function ToolDetailModal({
  tool,
  onClose,
  onAddToStack,
}: {
  tool: any
  onClose: () => void
  onAddToStack: (tool: any) => void
}) {
  return (
    <Dialog open={!!tool} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <div className="flex items-start gap-4">
            <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-3xl flex-shrink-0">
              {tool.icon}
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl">{tool.name}</DialogTitle>
              <DialogDescription className="text-base mt-1">{tool.developer}</DialogDescription>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  <span className="font-medium">{tool.rating}</span>
                  <span className="text-muted-foreground text-sm">({tool.reviews} reviews)</span>
                </div>
                <Badge>{tool.pricing}</Badge>
                <Badge variant="outline">{tool.category}</Badge>
              </div>
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[400px] mt-4">
            <TabsContent value="overview" className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">About</h3>
                <p className="text-muted-foreground">{tool.description}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Key Features</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Feature 1 - High performance and scalability</li>
                  <li>Feature 2 - Easy integration with other tools</li>
                  <li>Feature 3 - Comprehensive documentation</li>
                  <li>Feature 4 - Active community support</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Best For</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Startups</Badge>
                  <Badge variant="secondary">Enterprise</Badge>
                  <Badge variant="secondary">Developers</Badge>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-4">
              <div>
                <h3 className="font-semibold mb-3">Core Capabilities</h3>
                <div className="space-y-2">
                  {[
                    "Real-time collaboration",
                    "Advanced analytics",
                    "API access",
                    "Custom integrations",
                    "Security & compliance",
                    "24/7 support",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pricing" className="space-y-4">
              <div>
                <h3 className="font-semibold mb-3">Pricing Tiers</h3>
                <div className="space-y-3">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold">Free</h4>
                    <p className="text-2xl font-bold mt-2">$0/month</p>
                    <p className="text-sm text-muted-foreground mt-1">Perfect for getting started</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold">Pro</h4>
                    <p className="text-2xl font-bold mt-2">$29/month</p>
                    <p className="text-sm text-muted-foreground mt-1">For growing teams</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold">Enterprise</h4>
                    <p className="text-2xl font-bold mt-2">Custom</p>
                    <p className="text-sm text-muted-foreground mt-1">For large organizations</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="resources" className="space-y-4">
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Official Website
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Documentation
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub Repository
                  </a>
                </Button>
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>

        <div className="flex gap-2 mt-4">
          <Button className="flex-1" onClick={() => onAddToStack(tool)}>
            <Download className="h-4 w-4 mr-2" />
            Add to Stack
          </Button>
          <Button variant="outline" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Visit Site
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
