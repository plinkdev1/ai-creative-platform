"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Download, Share2, Save } from "lucide-react"

export function StackBuilder({
  stack,
  onUpdateStack,
  userTier,
}: {
  stack: any[]
  onUpdateStack: (stack: any[]) => void
  userTier: string
}) {
  const removeFromStack = (toolId: number) => {
    onUpdateStack(stack.filter((t) => t.id !== toolId))
  }

  const groupedStack = stack.reduce(
    (acc, tool) => {
      const category = tool.category || "Other"
      if (!acc[category]) acc[category] = []
      acc[category].push(tool)
      return acc
    },
    {} as Record<string, any[]>,
  )

  const canSave = userTier !== "free"
  const canExport = userTier !== "free"

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Your Tech Stack</CardTitle>
            <CardDescription>{stack.length} tools selected</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" disabled={!canSave}>
              <Save className="h-4 w-4 mr-2" />
              Save Stack
            </Button>
            <Button size="sm" variant="outline" disabled={!canExport}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm" variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {Object.entries(groupedStack).map(([category, tools]) => (
          <div key={category}>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <span className="text-lg">{getCategoryIcon(category)}</span>
              {category}
              <Badge variant="secondary">{tools.length}</Badge>
            </h3>
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <Card key={tool.id} className="relative group">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-lg flex-shrink-0">
                        {tool.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{tool.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{tool.pricing}</p>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeFromStack(tool.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {!canSave && (
          <div className="text-center p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Upgrade to Pro to save and export your tech stacks</p>
            <Button size="sm">Upgrade Now</Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function getCategoryIcon(category: string) {
  const icons: Record<string, string> = {
    "Frontend Frameworks": "🎨",
    "Backend Frameworks": "⚙️",
    Databases: "💾",
    "Cloud Infrastructure": "☁️",
    "DevOps & CI/CD": "🔧",
    "Design Tools": "🎨",
    Development: "💻",
    Communication: "💬",
    "Project Management": "📊",
    Marketing: "📧",
    Storage: "☁️",
    "AI/ML": "🤖",
    "Data & Analytics": "📈",
    Payment: "💳",
  }
  return icons[category] || "📦"
}
