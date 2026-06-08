"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Bell, Search, Plus, Zap, Grid3x3, FileText, Users } from "lucide-react"

export function DashboardHeader() {
  const [newProjectOpen, setNewProjectOpen] = useState(false)
  const [quickActionsOpen, setQuickActionsOpen] = useState(false)

  const quickActions = [
    { icon: Plus, label: "New Project", action: () => setNewProjectOpen(true) },
    { icon: Grid3x3, label: "Install App", action: () => (window.location.href = "/dashboard/apps") },
    { icon: FileText, label: "Upload File", action: () => (window.location.href = "/dashboard/files") },
    { icon: Users, label: "Invite Team", action: () => (window.location.href = "/dashboard/team") },
  ]

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center gap-4 px-6">
          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search anything... (⌘K)" className="pl-9 pr-16" />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground">
                ⌘K
              </kbd>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" onClick={() => setQuickActionsOpen(true)}>
              <Zap className="mr-2 h-4 w-4" />
              Quick Actions
            </Button>

            <Button size="sm" onClick={() => setNewProjectOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>

            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    3
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <div className="px-4 py-3 border-b border-border">
                  <h3 className="font-semibold">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <DropdownMenuItem className="flex flex-col items-start p-4">
                    <p className="text-sm font-medium">New integration available</p>
                    <p className="text-xs text-muted-foreground">Figma integration is now available for Pro users</p>
                    <span className="text-xs text-muted-foreground mt-1">2 hours ago</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-start p-4">
                    <p className="text-sm font-medium">Project shared with you</p>
                    <p className="text-xs text-muted-foreground">John Doe shared "Website Redesign" with you</p>
                    <span className="text-xs text-muted-foreground mt-1">5 hours ago</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-start p-4">
                    <p className="text-sm font-medium">Storage limit warning</p>
                    <p className="text-xs text-muted-foreground">
                      You've used 80% of your storage. Consider upgrading.
                    </p>
                    <span className="text-xs text-muted-foreground mt-1">1 day ago</span>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

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

      {/* Quick Actions Dialog */}
      <Dialog open={quickActionsOpen} onOpenChange={setQuickActionsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Quick Actions</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <Button
                  key={index}
                  variant="outline"
                  className="h-24 flex-col gap-2 bg-transparent"
                  onClick={() => {
                    action.action()
                    setQuickActionsOpen(false)
                  }}
                >
                  <Icon className="h-6 w-6" />
                  <span className="text-sm">{action.label}</span>
                </Button>
              )
            })}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
