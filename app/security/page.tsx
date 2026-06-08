import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Lock, Eye, FileCheck, AlertTriangle, CheckCircle } from "lucide-react"

export default function SecurityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-orange-950/20 dark:via-pink-950/20 dark:to-purple-950/20" />
        <div className="container relative px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">Security at Sapphari</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Your trust is our priority. We implement industry-leading security practices to protect your data and
              privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Security Measures</h2>
            <p className="text-lg text-muted-foreground">Comprehensive protection at every layer</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                <Lock className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="font-semibold text-lg">End-to-End Encryption</h3>
              <p className="text-sm text-muted-foreground">
                All data transmitted between your device and our servers is encrypted using TLS 1.3
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center">
                <Eye className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="font-semibold text-lg">Data Encryption at Rest</h3>
              <p className="text-sm text-muted-foreground">
                Your files and data are encrypted using AES-256 encryption when stored on our servers
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <FileCheck className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-lg">Regular Security Audits</h3>
              <p className="text-sm text-muted-foreground">
                Third-party security firms conduct regular penetration testing and vulnerability assessments
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-lg">SOC 2 Type II Certified</h3>
              <p className="text-sm text-muted-foreground">
                We maintain SOC 2 Type II compliance for security, availability, and confidentiality
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-teal-100 dark:bg-teal-900/20 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="font-semibold text-lg">24/7 Monitoring</h3>
              <p className="text-sm text-muted-foreground">
                Automated systems monitor for suspicious activity and security threats around the clock
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/20 flex items-center justify-center">
                <Shield className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="font-semibold text-lg">DDoS Protection</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade DDoS mitigation ensures service availability during attacks
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compliance & Certifications</h2>
            <p className="text-lg text-muted-foreground">Meeting the highest industry standards</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {["GDPR", "CCPA", "SOC 2 Type II", "ISO 27001"].map((cert) => (
              <Card key={cert} className="p-6 text-center space-y-2">
                <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/20 dark:to-pink-900/20 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-semibold">{cert}</h3>
                <p className="text-xs text-muted-foreground">Compliant</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Security Best Practices for Users</h2>
              <p className="text-lg text-muted-foreground">How you can help keep your account secure</p>
            </div>

            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Use Strong, Unique Passwords</h3>
                <p className="text-sm text-muted-foreground">
                  Create passwords with at least 12 characters, including uppercase, lowercase, numbers, and symbols.
                  Never reuse passwords across services.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Enable Two-Factor Authentication</h3>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security by requiring a verification code in addition to your password when
                  signing in.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Review Account Activity Regularly</h3>
                <p className="text-sm text-muted-foreground">
                  Check your account activity log for any suspicious sign-ins or actions you don't recognize.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Be Cautious with Third-Party Integrations</h3>
                <p className="text-sm text-muted-foreground">
                  Only connect trusted applications and review the permissions they request before authorizing access.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Report Vulnerability */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <Card className="max-w-3xl mx-auto p-12 text-center space-y-6">
            <AlertTriangle className="h-12 w-12 mx-auto text-orange-600 dark:text-orange-400" />
            <h2 className="text-3xl font-bold">Report a Security Vulnerability</h2>
            <p className="text-lg text-muted-foreground">
              If you discover a security issue, please report it responsibly. We appreciate the security research
              community's efforts to keep our platform safe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link href="mailto:security@sapphari.com">Report Vulnerability</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Security Team</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
