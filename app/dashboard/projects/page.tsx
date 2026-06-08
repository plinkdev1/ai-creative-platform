"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, FolderKanban, Users, Clock, Star, MoreVertical, Trash2, Edit, Archive } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Website Redesign",
      description: "Complete overhaul of company website with modern design",
      progress: 75,
      members: 4,
      updated: "2 hours ago",
      starred: true,
      status: "active",
    },
    {
      id: 2,
      name: "Mobile App",
      description: "iOS and Android app development",
      progress: 45,
      members: 3,
      updated: "1 day ago",
      starred: false,
      status: "active",
    },
    {
      id: 3,
      name: "Marketing Campaign",
      description: "Q1 2025 marketing materials and strategy",
      progress: 90,
      members: 2,
      updated: "3 hours ago",
      starred: true,
      status: "active",
    },
    {
      id: 4,
      name: "Brand Identity",
      description: "New logo and brand guidelines",
      progress: 30,
      members: 5,
      updated: "2 days ago",
      starred: false,
      status: "active",
    },
  ])

  const filteredProjects = projects.filter((project) => project.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-muted-foreground mt-2">Manage and track all your creative projects</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </DialogTrigger>
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
              <Button className="w-full">Create Project</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search projects..."
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <FolderKanban className="h-5 w-5 text-muted-foreground" />
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  {project.starred && <Star className="h-4 w-4 fill-orange-500 text-orange-500" />}
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Archive className="mr-2 h-4 w-4" />
                      Archive
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{project.description}</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{project.progress}% complete</span>
                  <Badge variant="secondary">{project.status}</Badge>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-pink-600"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{project.members} members</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{project.updated}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
