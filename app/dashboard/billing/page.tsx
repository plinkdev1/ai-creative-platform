"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Check, CreditCard, Download, Zap, Crown, Building2, Calendar, AlertCircle } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

const plans = [
  {
    id: "free",
    name: "Free",
    price: 0,
    yearlyPrice: 0,
    description: "Perfect for getting started",
    icon: Zap,
    color: "from-gray-500 to-gray-700",
    features: [
      "3 active projects",
      "5 app integrations",
      "2GB storage",
      "Community access",
      "Basic templates",
      "Standard support",
      "100 API calls/month",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 29,
    yearlyPrice: 290,
    description: "For professional creators",
    icon: Crown,
    color: "from-orange-500 to-pink-600",
    popular: true,
    features: [
      "Unlimited projects",
      "50+ app integrations",
      "100GB storage",
      "Priority support",
      "Advanced templates",
      "Team collaboration (5 members)",
      "Custom branding",
      "Version history (30 days)",
      "10,000 API calls/month",
      "Early access to features",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: null,
    yearlyPrice: null,
    description: "For large organizations",
    icon: Building2,
    color: "from-slate-700 to-slate-900",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Unlimited storage",
      "Dedicated account manager",
      "99.9% SLA guarantee",
      "SSO (SAML, LDAP)",
      "Advanced security",
      "Custom integrations",
      "White-label options",
      "24/7 priority support",
    ],
  },
]

const invoices = [
  { id: "INV-001", date: "2024-01-01", amount: 29, status: "Paid", plan: "Pro" },
  { id: "INV-002", date: "2023-12-01", amount: 29, status: "Paid", plan: "Pro" },
  { id: "INV-003", date: "2023-11-01", amount: 29, status: "Paid", plan: "Pro" },
  { id: "INV-004", date: "2023-10-01", amount: 29, status: "Paid", plan: "Pro" },
]

export default function BillingPage() {
  const { user } = useAuth()
  const [isYearly, setIsYearly] = useState(false)
  const currentPlan = user?.plan || "free"

  const usageData = {
    projects: { used: 2, limit: currentPlan === "free" ? 3 : "Unlimited" },
    storage: { used: 1.2, limit: currentPlan === "free" ? 2 : currentPlan === "pro" ? 100 : "Unlimited" },
    apiCalls: { used: 45, limit: currentPlan === "free" ? 100 : currentPlan === "pro" ? 10000 : "Unlimited" },
  }

  const getUsagePercentage = (used: number, limit: number | string) => {
    if (limit === "Unlimited") return 0
    return (used / (limit as number)) * 100
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Billing & Subscription</h1>
        <p className="text-muted-foreground mt-2">Manage your subscription and billing information</p>
      </div>

      {/* Current Plan */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>You are currently on the {currentPlan.toUpperCase()} plan</CardDescription>
            </div>
            <Badge
              className={`${
                currentPlan === "pro"
                  ? "bg-gradient-to-r from-orange-500 to-pink-600"
                  : currentPlan === "enterprise"
                    ? "bg-gradient-to-r from-slate-700 to-slate-900"
                    : "bg-muted"
              } text-white`}
            >
              {currentPlan.toUpperCase()}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Usage Metrics */}
          <div className="space-y-4">
            <h3 className="font-semibold">Usage This Month</h3>

            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span>Projects</span>
                  <span className="text-muted-foreground">
                    {usageData.projects.used} / {usageData.projects.limit}
                  </span>
                </div>
                {usageData.projects.limit !== "Unlimited" && (
                  <Progress value={getUsagePercentage(usageData.projects.used, usageData.projects.limit)} />
                )}
              </div>

              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span>Storage</span>
                  <span className="text-muted-foreground">
                    {usageData.storage.used}GB / {usageData.storage.limit}
                    {usageData.storage.limit !== "Unlimited" && "GB"}
                  </span>
                </div>
                {usageData.storage.limit !== "Unlimited" && (
                  <Progress value={getUsagePercentage(usageData.storage.used, usageData.storage.limit)} />
                )}
              </div>

              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span>API Calls</span>
                  <span className="text-muted-foreground">
                    {usageData.apiCalls.used} / {usageData.apiCalls.limit}
                  </span>
                </div>
                {usageData.apiCalls.limit !== "Unlimited" && (
                  <Progress value={getUsagePercentage(usageData.apiCalls.used, usageData.apiCalls.limit)} />
                )}
              </div>
            </div>
          </div>

          {/* Renewal Info */}
          {currentPlan !== "free" && (
            <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium">Next billing date</p>
                <p className="text-sm text-muted-foreground">February 1, 2025</p>
              </div>
              <Button variant="outline" size="sm">
                Cancel Subscription
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Upgrade Plans */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Available Plans</h2>
          <div className="flex items-center gap-3">
            <Label htmlFor="billing-toggle" className={!isYearly ? "font-semibold" : ""}>
              Monthly
            </Label>
            <Switch id="billing-toggle" checked={isYearly} onCheckedChange={setIsYearly} />
            <Label htmlFor="billing-toggle" className={isYearly ? "font-semibold" : ""}>
              Yearly
              <Badge variant="secondary" className="ml-2">
                Save 17%
              </Badge>
            </Label>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon
            const isCurrentPlan = currentPlan === plan.id
            const price = isYearly ? plan.yearlyPrice : plan.price

            return (
              <Card key={plan.id} className={`relative ${plan.popular ? "border-orange-500 border-2 shadow-lg" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-orange-500 to-pink-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <div
                    className={`h-12 w-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-4">
                    {price !== null ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold">${price}</span>
                        <span className="text-muted-foreground">/{isYearly ? "year" : "month"}</span>
                      </div>
                    ) : (
                      <div className="text-2xl font-bold">Custom Pricing</div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full"
                    variant={isCurrentPlan ? "outline" : plan.popular ? "default" : "outline"}
                    disabled={isCurrentPlan}
                  >
                    {isCurrentPlan ? "Current Plan" : plan.id === "enterprise" ? "Contact Sales" : "Upgrade"}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Payment Method */}
      {currentPlan !== "free" && (
        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>Manage your payment information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded bg-muted flex items-center justify-center">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Visa ending in 4242</p>
                  <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Update
              </Button>
            </div>
            <Button variant="ghost" size="sm">
              + Add Payment Method
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Billing History */}
      {currentPlan !== "free" && (
        <Card>
          <CardHeader>
            <CardTitle>Billing History</CardTitle>
            <CardDescription>Download your past invoices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="font-medium">{invoice.id}</p>
                      <p className="text-sm text-muted-foreground">{invoice.date}</p>
                    </div>
                    <Badge variant="secondary">{invoice.status}</Badge>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold">${invoice.amount}</span>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Upgrade Notice for Free Users */}
      {currentPlan === "free" && (
        <Card className="border-orange-500 bg-orange-500/5">
          <CardContent className="flex items-start gap-4 p-6">
            <AlertCircle className="h-6 w-6 text-orange-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold mb-1">Unlock More Features</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Upgrade to Pro to get unlimited projects, advanced integrations, and priority support.
              </p>
              <Button className="bg-gradient-to-r from-orange-500 to-pink-600">Upgrade to Pro</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
