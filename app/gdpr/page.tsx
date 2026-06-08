import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GDPRPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">GDPR Compliance</h1>
              <p className="text-muted-foreground">
                Sapphari is committed to protecting the privacy rights of individuals in the European Union
              </p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Our Commitment to GDPR</h2>
              <p>
                The General Data Protection Regulation (GDPR) is a comprehensive data protection law that applies to
                organizations processing personal data of EU residents. Sapphari is fully committed to GDPR compliance
                and respecting your data protection rights.
              </p>

              <h2>Your Rights Under GDPR</h2>
              <p>As an EU resident, you have the following rights regarding your personal data:</p>

              <h3>Right to Access</h3>
              <p>
                You have the right to request access to your personal data and receive a copy of the information we hold
                about you.
              </p>

              <h3>Right to Rectification</h3>
              <p>You can request that we correct any inaccurate or incomplete personal data we hold about you.</p>

              <h3>Right to Erasure ("Right to be Forgotten")</h3>
              <p>
                You can request that we delete your personal data in certain circumstances, such as when it's no longer
                necessary for the purposes for which it was collected.
              </p>

              <h3>Right to Restrict Processing</h3>
              <p>
                You can request that we limit the processing of your personal data in specific situations, such as when
                you contest the accuracy of the data.
              </p>

              <h3>Right to Data Portability</h3>
              <p>
                You have the right to receive your personal data in a structured, commonly used, and machine-readable
                format and to transmit that data to another controller.
              </p>

              <h3>Right to Object</h3>
              <p>
                You can object to the processing of your personal data in certain circumstances, including for direct
                marketing purposes.
              </p>

              <h3>Rights Related to Automated Decision-Making</h3>
              <p>
                You have the right not to be subject to decisions based solely on automated processing, including
                profiling, which produces legal effects or similarly significantly affects you.
              </p>

              <h2>How We Process Your Data</h2>
              <h3>Legal Basis for Processing</h3>
              <p>We process your personal data based on the following legal grounds:</p>
              <ul>
                <li>
                  <strong>Consent:</strong> When you have given explicit consent for specific processing activities
                </li>
                <li>
                  <strong>Contract:</strong> When processing is necessary to fulfill our contract with you
                </li>
                <li>
                  <strong>Legal Obligation:</strong> When we must process data to comply with legal requirements
                </li>
                <li>
                  <strong>Legitimate Interests:</strong> When processing is necessary for our legitimate business
                  interests, provided your rights don't override these interests
                </li>
              </ul>

              <h3>Data Retention</h3>
              <p>
                We retain personal data only for as long as necessary to fulfill the purposes for which it was
                collected, including legal, accounting, or reporting requirements. When data is no longer needed, we
                securely delete or anonymize it.
              </p>

              <h2>International Data Transfers</h2>
              <p>
                When we transfer personal data outside the European Economic Area (EEA), we ensure appropriate
                safeguards are in place, such as:
              </p>
              <ul>
                <li>Standard Contractual Clauses approved by the European Commission</li>
                <li>Adequacy decisions recognizing equivalent data protection standards</li>
                <li>Binding Corporate Rules for intra-group transfers</li>
              </ul>

              <h2>Data Protection Officer</h2>
              <p>
                We have appointed a Data Protection Officer (DPO) to oversee our GDPR compliance. You can contact our
                DPO at:
                <br />
                Email: dpo@sapphari.com
                <br />
                Address: Sapphari Inc., Data Protection Officer, 123 Innovation Drive, San Francisco, CA 94105
              </p>

              <h2>Exercising Your Rights</h2>
              <p>To exercise any of your GDPR rights, you can:</p>
              <ul>
                <li>Use the privacy controls in your account settings</li>
                <li>Contact us at privacy@sapphari.com</li>
                <li>Submit a request through our contact form</li>
              </ul>
              <p>
                We will respond to your request within one month. In complex cases, we may extend this period by two
                additional months and will inform you of the extension.
              </p>

              <h2>Complaints</h2>
              <p>
                If you believe we have not handled your personal data in accordance with GDPR, you have the right to
                lodge a complaint with your local supervisory authority. However, we encourage you to contact us first
                so we can address your concerns directly.
              </p>

              <h2>Updates to This Page</h2>
              <p>
                We may update this GDPR compliance page from time to time to reflect changes in our practices or legal
                requirements. We will notify you of any material changes.
              </p>

              <div className="flex gap-4 pt-8">
                <Button asChild>
                  <Link href="/privacy">View Privacy Policy</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
