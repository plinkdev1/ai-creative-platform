import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out the platform",
    features: [
      "3 active projects",
      "5 app integrations",
      "2GB storage",
      "Community access",
      "Basic templates",
      "Community support",
    ],
    cta: "Start Free",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$24",
    period: "/month",
    description: "For professional creators and small teams",
    features: [
      "Unlimited projects",
      "50+ app integrations",
      "100GB storage",
      "Priority support",
      "Advanced templates",
      "Team collaboration (5 members)",
      "Custom branding",
      "Version history (30 days)",
      "Advanced analytics",
    ],
    cta: "Upgrade to Pro",
    href: "/signup?plan=pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large teams and organizations",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Unlimited storage",
      "Dedicated account manager",
      "99.9% SLA guarantee",
      "SSO (SAML, LDAP)",
      "Advanced security & compliance",
      "Custom integrations",
      "White-label options",
      "24/7 priority support",
    ],
    cta: "Contact Sales",
    href: "/contact-sales",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <Card key={index} className={tier.highlighted ? "border-2 border-primary shadow-xl scale-105" : ""}>
              <CardHeader>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button className="w-full" variant={tier.highlighted ? "default" : "outline"} size="lg" asChild>
                  <Link href={tier.href}>{tier.cta}</Link>
                </Button>
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
