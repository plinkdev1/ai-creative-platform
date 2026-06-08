import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: January 10, 2025</p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Introduction</h2>
              <p>
                At Sapphari, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you use our platform and services.
              </p>

              <h2>Information We Collect</h2>
              <h3>Information You Provide</h3>
              <ul>
                <li>Account information (name, email, password)</li>
                <li>Profile information (bio, avatar, preferences)</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Content you create or upload to the platform</li>
                <li>Communications with our support team</li>
              </ul>

              <h3>Information Collected Automatically</h3>
              <ul>
                <li>Usage data (pages visited, features used, time spent)</li>
                <li>Device information (browser type, operating system, IP address)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Log data (access times, error logs)</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative information and updates</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns and optimize user experience</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>Information Sharing and Disclosure</h2>
              <p>We do not sell your personal information. We may share your information with:</p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (hosting,
                  analytics, payment processing)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you explicitly authorize us to share specific information
                </li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information, including encryption,
                secure servers, and regular security audits. However, no method of transmission over the internet is
                100% secure, and we cannot guarantee absolute security.
              </p>

              <h2>Your Rights and Choices</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access, update, or delete your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Disable cookies through your browser settings</li>
                <li>Request a copy of your data</li>
                <li>Object to processing of your personal information</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>

              <h2>Data Retention</h2>
              <p>
                We retain your information for as long as necessary to provide our services and comply with legal
                obligations. When you delete your account, we will delete or anonymize your personal information within
                30 days, except where retention is required by law.
              </p>

              <h2>International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence.
                We ensure appropriate safeguards are in place to protect your information in accordance with this
                Privacy Policy.
              </p>

              <h2>Children's Privacy</h2>
              <p>
                Our services are not intended for users under 13 years of age. We do not knowingly collect personal
                information from children under 13. If you believe we have collected information from a child under 13,
                please contact us immediately.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by
                posting the new policy on this page and updating the "Last updated" date. Your continued use of our
                services after changes constitutes acceptance of the updated policy.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
                <br />
                Email: privacy@sapphari.com
                <br />
                Address: Sapphari Inc., 123 Innovation Drive, San Francisco, CA 94105
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
