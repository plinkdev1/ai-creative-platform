"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Mail, MoreVertical, UserMinus, Shield, Crown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TeamPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [members] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "owner", projects: 8, joined: "Jan 2024" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "admin", projects: 6, joined: "Feb 2024" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "member", projects: 4, joined: "Mar 2024" },
    { id: 4, name: "Sarah Williams", email: "sarah@example.com", role: "member", projects: 5, joined: "Mar 2024" },
    { id: 5, name: "Tom Brown", email: "tom@example.com", role: "member", projects: 3, joined: "Apr 2024" },
  ])

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "owner":
        return <Crown className="h-4 w-4" />
      case "admin":
        return <Shield className="h-4 w-4" />
      default:
        return null
    }
  }

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "owner":
        return "bg-gradient-to-r from-orange-500 to-pink-600 text-white"
      case "admin":
        return "bg-blue-500 text-white"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Team</h1>
          <p className="text-muted-foreground mt-2">Manage your team members and their permissions</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Invite Member
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Invite Team Member</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="colleague@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select defaultValue="member">
                  <SelectTrigger id="role">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="member">Member</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Send Invitation
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search team members..."
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Members ({filteredMembers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-4 rounded-lg hover:bg-accent transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-gradient-to-br from-orange-500 to-pink-600 text-white">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{member.name}</p>
                      {getRoleIcon(member.role)}
                    </div>
                    <p className="text-sm text-muted-foreground">{member.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right hidden md:block">
                    <p className="text-sm font-medium">{member.projects} projects</p>
                    <p className="text-xs text-muted-foreground">Joined {member.joined}</p>
                  </div>
                  <Badge className={getRoleBadgeColor(member.role)}>{member.role}</Badge>
                  {member.role !== "owner" && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Change Role</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <UserMinus className="mr-2 h-4 w-4" />
                          Remove Member
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
