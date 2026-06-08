"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Plus,
  Grid3x3,
  Compass,
  TrendingUp,
  FolderOpen,
  Users,
  ArrowRight,
  Clock,
  Star,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const { user } = useAuth()
  const [newProjectOpen, setNewProjectOpen] = useState(false)
  const [tourOpen, setTourOpen] = useState(false)
  const [tourStep, setTourStep] = useState(0)

  const tourSteps = [
    {
      title: "Welcome to Sapphari!",
      description:
        "Let's take a quick tour of your creative command center. You'll learn how to manage projects, install apps, and collaborate with your team.",
      icon: Compass,
    },
    {
      title: "Create Projects",
      description:
        "Start new projects from scratch or use templates. Track progress, assign team members, and manage all your creative work in one place.",
      icon: Plus,
    },
    {
      title: "Install Apps",
      description:
        "Browse 100+ integrations including Figma, GitHub, Notion, and more. Connect your favorite tools to streamline your workflow.",
      icon: Grid3x3,
    },
    {
      title: "Collaborate with Team",
      description:
        "Invite team members, share projects, and work together in real-time. Manage permissions and track everyone's contributions.",
      icon: Users,
    },
    {
      title: "You're All Set!",
      description:
        "You're ready to start creating! Explore the dashboard and don't hesitate to reach out if you need help.",
      icon: CheckCircle2,
    },
  ]

  const stats = [
    { label: "Total Projects", value: "12", icon: FolderOpen },
    { label: "Active Collaborators", value: "5", icon: Users },
    { label: "Recent Activity", value: "24", icon: TrendingUp },
    { label: "Storage Used", value: "1.2 GB", icon: Grid3x3 },
  ]

  const recentApps = [
    { name: "Figma", icon: "🎨", color: "from-purple-500 to-pink-500" },
    { name: "GitHub", icon: "💻", color: "from-gray-700 to-gray-900" },
    { name: "Notion", icon: "📝", color: "from-slate-600 to-slate-800" },
    { name: "Slack", icon: "💬", color: "from-purple-600 to-pink-600" },
    { name: "Stripe", icon: "💳", color: "from-blue-600 to-indigo-600" },
  ]

  const recentFiles = [
    {
      name: "Homepage Design.fig",
      type: "Figma",
      modified: "2 hours ago",
      collaborators: 3,
    },
    {
      name: "API Documentation.md",
      type: "Markdown",
      modified: "5 hours ago",
      collaborators: 1,
    },
    {
      name: "Brand Guidelines.pdf",
      type: "PDF",
      modified: "1 day ago",
      collaborators: 2,
    },
  ]

  const activeProjects = [
    {
      name: "Website Redesign",
      progress: 75,
      updated: "2 hours ago",
      members: 4,
    },
    {
      name: "Mobile App",
      progress: 45,
      updated: "1 day ago",
      members: 3,
    },
    {
      name: "Marketing Campaign",
      progress: 90,
      updated: "3 hours ago",
      members: 2,
    },
  ]

  return (
    <>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user?.name}!</h1>
          <p className="text-muted-foreground mt-2">Here's what's happening with your projects today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    </div>
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Action Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setNewProjectOpen(true)}>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center">
                <Plus className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">New Project</h3>
                <p className="text-sm text-muted-foreground mt-1">Start from scratch or use a template</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
            <Link href="/dashboard/apps">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                  <Grid3x3 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Install Apps</h3>
                  <p className="text-sm text-muted-foreground mt-1">Browse 100+ integrations</p>
                </div>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setTourOpen(true)}>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Compass className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Take a Tour</h3>
                <p className="text-sm text-muted-foreground mt-1">Learn the platform basics</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
            <Link href="/dashboard/billing">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Explore Plans</h3>
                  <p className="text-sm text-muted-foreground mt-1">Upgrade for more features</p>
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>

        {/* Recent Apps */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Apps</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/apps">
                See All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {recentApps.map((app, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 min-w-[80px] cursor-pointer group">
                  <div
                    className={`h-16 w-16 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}
                  >
                    {app.icon}
                  </div>
                  <span className="text-sm font-medium">{app.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Files & Active Projects */}
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Recent Files */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Files</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/files">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded bg-muted flex items-center justify-center">
                        <FolderOpen className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{file.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {file.type} • {file.modified}
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary">{file.collaborators}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Active Projects */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Active Projects</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/projects">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeProjects.map((project, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg hover:bg-accent transition-colors cursor-pointer space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-muted-foreground" />
                        <p className="text-sm font-medium">{project.name}</p>
                      </div>
                      <Badge variant="secondary">{project.members} members</Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{project.progress}% complete</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {project.updated}
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-orange-500 to-pink-600"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* New Project Dialog */}
      <Dialog open={newProjectOpen} onOpenChange={setNewProjectOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Project</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="project-name">Project Name</Label>
              <Input id="project-name" placeholder="Enter project name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="project-description">Description</Label>
              <Textarea id="project-description" placeholder="Describe your project" rows={3} />
            </div>
            <Button className="w-full" onClick={() => setNewProjectOpen(false)}>
              Create Project
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Tour Dialog */}
      <Dialog open={tourOpen} onOpenChange={setTourOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{tourSteps[tourStep].title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 pt-4">
            <div className="flex justify-center">
              {(() => {
                const Icon = tourSteps[tourStep].icon
                return (
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center">
                    <Icon className="h-12 w-12 text-white" />
                  </div>
                )
              })()}
            </div>
            <p className="text-center text-muted-foreground">{tourSteps[tourStep].description}</p>
            <div className="flex items-center justify-center gap-2">
              {tourSteps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === tourStep ? "bg-orange-500" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              {tourStep > 0 && (
                <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setTourStep(tourStep - 1)}>
                  Previous
                </Button>
              )}
              {tourStep < tourSteps.length - 1 ? (
                <Button className="flex-1" onClick={() => setTourStep(tourStep + 1)}>
                  Next
                </Button>
              ) : (
                <Button
                  className="flex-1"
                  onClick={() => {
                    setTourOpen(false)
                    setTourStep(0)
                  }}
                >
                  Get Started
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
