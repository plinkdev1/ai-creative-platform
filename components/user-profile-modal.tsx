"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, CreditCard, Key, Upload } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import Link from "next/link"

interface UserProfileModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UserProfileModal({ open, onOpenChange }: UserProfileModalProps) {
  const { user } = useAuth()
  const [apiKeys] = useState([
    { id: 1, name: "Production API Key", key: "sk_live_••••••••••••1234", created: "Jan 15, 2025" },
    { id: 2, name: "Development API Key", key: "sk_test_••••••••••••5678", created: "Jan 10, 2025" },
  ])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Profile Settings</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="api">API Keys</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
                <CardDescription>Update your profile details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="bg-gradient-to-br from-orange-500 to-pink-600 text-white text-2xl">
                      {user?.name?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    Change Picture
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue={user?.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue={user?.email} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">New Password</Label>
                  <Input id="password" type="password" placeholder="Leave blank to keep current" />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Subscription & Billing
                </CardTitle>
                <CardDescription>Manage your subscription and payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-muted">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Current Plan</span>
                    <span className="text-lg font-bold capitalize">{user?.plan || "Free"}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {user?.plan === "pro"
                      ? "You have access to all Pro features"
                      : user?.plan === "enterprise"
                        ? "You have access to all Enterprise features"
                        : "Upgrade to unlock more features"}
                  </p>
                </div>
                <Button asChild className="w-full">
                  <Link href="/dashboard/billing">View Full Billing Details</Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  API Keys
                </CardTitle>
                <CardDescription>Manage your API keys for integrations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {apiKeys.map((apiKey) => (
                  <div key={apiKey.id} className="p-4 rounded-lg border border-border space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{apiKey.name}</span>
                      <Button variant="outline" size="sm">
                        Revoke
                      </Button>
                    </div>
                    <code className="text-sm bg-muted px-2 py-1 rounded block">{apiKey.key}</code>
                    <p className="text-xs text-muted-foreground">Created on {apiKey.created}</p>
                  </div>
                ))}
                <Button className="w-full">
                  <Key className="mr-2 h-4 w-4" />
                  Generate New API Key
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
