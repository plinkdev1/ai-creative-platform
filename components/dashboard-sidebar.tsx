"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  LayoutDashboard,
  FolderKanban,
  Grid3x3,
  FileText,
  Users,
  BarChart3,
  Settings,
  Search,
  ChevronLeft,
  ChevronRight,
  LogOut,
  CreditCard,
} from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { cn } from "@/lib/utils"
import { UserProfileModal } from "./user-profile-modal"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/dashboard/projects", icon: FolderKanban },
  { name: "Apps", href: "/dashboard/apps", icon: Grid3x3 },
  { name: "Files", href: "/dashboard/files", icon: FileText },
  { name: "Team", href: "/dashboard/team", icon: Users },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
]

export function DashboardSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [profileModalOpen, setProfileModalOpen] = useState(false)
  const pathname = usePathname()
  const { user, logout } = useAuth()

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case "pro":
        return "bg-gradient-to-r from-orange-500 to-pink-600 text-white"
      case "enterprise":
        return "bg-gradient-to-r from-slate-700 to-slate-900 text-white"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <>
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen border-r border-border bg-background transition-all duration-300",
          isCollapsed ? "w-16" : "w-64",
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between border-b border-border px-4">
            {!isCollapsed && (
              <Link href="/dashboard" className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-pink-600" />
                <span className="text-lg font-bold">Sapphari</span>
              </Link>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={cn(isCollapsed && "mx-auto")}
            >
              {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </Button>
          </div>

          {/* Search */}
          {!isCollapsed && (
            <div className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search... (⌘K)" className="pl-9" />
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-2 overflow-y-auto">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                    isCollapsed && "justify-center",
                  )}
                  title={isCollapsed ? item.name : undefined}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              )
            })}
          </nav>

          {/* Bottom Section */}
          <div className="border-t border-border p-2 space-y-2">
            <Button
              variant="ghost"
              className={cn("w-full justify-start gap-3 h-auto py-2", isCollapsed && "justify-center px-2")}
              onClick={() => setProfileModalOpen(true)}
            >
              <Avatar className="h-8 w-8 shrink-0">
                <AvatarFallback className="bg-gradient-to-br from-orange-500 to-pink-600 text-white text-xs">
                  {user?.name?.charAt(0).toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
              {!isCollapsed && (
                <div className="flex flex-col items-start flex-1 min-w-0">
                  <span className="text-sm font-medium truncate w-full">{user?.name || "User"}</span>
                  <Badge className={cn("text-xs px-1.5 py-0", getPlanColor(user?.plan || "free"))}>
                    {user?.plan?.toUpperCase() || "FREE"}
                  </Badge>
                </div>
              )}
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3" onClick={logout}>
              <LogOut className="h-5 w-5 shrink-0" />
              {!isCollapsed && <span>Log out</span>}
            </Button>
          </div>
        </div>
      </aside>

      <UserProfileModal open={profileModalOpen} onOpenChange={setProfileModalOpen} />
    </>
  )
}
