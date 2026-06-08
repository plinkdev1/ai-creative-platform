import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: January 10, 2025</p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Agreement to Terms</h2>
              <p>
                By accessing or using Sapphari's platform and services, you agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use our services.
              </p>

              <h2>Description of Services</h2>
              <p>
                Sapphari provides a platform for creative development, including access to tools, integrations,
                resources, and community features designed to help creators build and launch products. Our services
                include:
              </p>
              <ul>
                <li>Project management and collaboration tools</li>
                <li>Integration marketplace and API access</li>
                <li>Educational resources and documentation</li>
                <li>Community forums and networking features</li>
                <li>File storage and management</li>
              </ul>

              <h2>User Accounts</h2>
              <h3>Account Creation</h3>
              <p>
                To use certain features, you must create an account. You agree to provide accurate, current, and
                complete information and to update it as necessary to maintain its accuracy.
              </p>

              <h3>Account Security</h3>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all
                activities that occur under your account. You must notify us immediately of any unauthorized access or
                security breach.
              </p>

              <h3>Account Termination</h3>
              <p>
                We reserve the right to suspend or terminate your account if you violate these terms or engage in
                conduct that we deem harmful to our platform, users, or business interests.
              </p>

              <h2>Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights of others</li>
                <li>Upload malicious code, viruses, or harmful content</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use our services for illegal or fraudulent purposes</li>
                <li>Scrape, crawl, or extract data without permission</li>
                <li>Impersonate others or misrepresent your affiliation</li>
              </ul>

              <h2>Intellectual Property</h2>
              <h3>Our Content</h3>
              <p>
                All content, features, and functionality of Sapphari (including but not limited to text, graphics,
                logos, icons, images, and software) are owned by Sapphari and protected by copyright, trademark, and
                other intellectual property laws.
              </p>

              <h3>Your Content</h3>
              <p>
                You retain ownership of content you create or upload to our platform. By uploading content, you grant us
                a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display your content
                solely for the purpose of providing and improving our services.
              </p>

              <h2>Subscription and Payment</h2>
              <h3>Pricing</h3>
              <p>
                Subscription fees are stated on our pricing page and may change with notice. You will be charged the
                rate in effect at the time of each billing cycle.
              </p>

              <h3>Billing</h3>
              <p>
                Subscriptions are billed in advance on a monthly or annual basis. Payment is due immediately upon
                subscription or renewal. We use third-party payment processors and do not store your payment
                information.
              </p>

              <h3>Refunds</h3>
              <p>
                Refunds are provided at our discretion. Generally, we offer prorated refunds for annual subscriptions
                canceled within 30 days of purchase. Monthly subscriptions are non-refundable.
              </p>

              <h3>Cancellation</h3>
              <p>
                You may cancel your subscription at any time. Cancellation takes effect at the end of your current
                billing period. You will retain access to paid features until that time.
              </p>

              <h2>Disclaimers and Limitations of Liability</h2>
              <h3>Service Availability</h3>
              <p>
                We strive to provide reliable service but do not guarantee uninterrupted or error-free access. Our
                services are provided "as is" without warranties of any kind, express or implied.
              </p>

              <h3>Limitation of Liability</h3>
              <p>
                To the maximum extent permitted by law, Sapphari shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred
                directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>

              <h2>Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Sapphari and its officers, directors, employees, and agents
                from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use
                of our services or violation of these terms.
              </p>

              <h2>Dispute Resolution</h2>
              <p>
                Any disputes arising from these terms or your use of our services will be resolved through binding
                arbitration in accordance with the rules of the American Arbitration Association, except where
                prohibited by law.
              </p>

              <h2>Governing Law</h2>
              <p>
                These terms are governed by the laws of the State of California, United States, without regard to
                conflict of law principles.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of material changes via
                email or platform notification. Your continued use of our services after changes constitutes acceptance
                of the updated terms.
              </p>

              <h2>Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at:
                <br />
                Email: legal@sapphari.com
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
