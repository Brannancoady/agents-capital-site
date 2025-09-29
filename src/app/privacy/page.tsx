import SharedNavigation from "@/components/shared-navigation"
import SharedFooter from "@/components/shared-footer"
import { Badge } from "@/components/ui/badge"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedNavigation />

      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-white text-black mb-4">
              Privacy
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-slate max-w-none">
            <p className="text-slate-600 mb-8">
              <strong>Last updated:</strong> September 2025
            </p>

            <h2>1. Introduction</h2>
            <p>
              Agents Capital ("we", "us", or "our") is committed to protecting your privacy and personal data. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our commission advance service.
            </p>

            <h2>2. Information We Collect</h2>
            
            <h3>Personal Information</h3>
            <p>We may collect the following personal information:</p>
            <ul>
              <li>Name and contact details (email, phone, address)</li>
              <li>Professional information (company name, role, license details)</li>
              <li>Financial information (bank details, commission amounts)</li>
              <li>Property transaction details</li>
              <li>Identity verification documents</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website information</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul>
              <li>Process your commission advance applications</li>
              <li>Verify your identity and prevent fraud</li>
              <li>Communicate with you about our services</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Improve our services and website functionality</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>

            <h2>4. Legal Basis for Processing</h2>
            <p>We process your personal data based on:</p>
            <ul>
              <li><strong>Contract:</strong> To fulfill our commission advance service agreement</li>
              <li><strong>Legitimate Interest:</strong> To operate our business and improve our services</li>
              <li><strong>Legal Obligation:</strong> To comply with financial regulations and anti-money laundering laws</li>
              <li><strong>Consent:</strong> For marketing communications (where required)</li>
            </ul>

            <h2>5. Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Third parties who help us operate our business (payment processors, IT support)</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
              <li><strong>Professional Advisors:</strong> Lawyers, accountants, and auditors</li>
              <li><strong>Business Partners:</strong> With your explicit consent only</li>
            </ul>
            <p>We never sell your personal information to third parties.</p>

            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, 
              alteration, disclosure, or destruction. This includes:
            </p>
            <ul>
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and staff training</li>
              <li>Secure data centers and backup systems</li>
            </ul>

            <h2>7. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, 
              typically for the duration of our business relationship plus 7 years for financial records, or as required by law.
            </p>

            <h2>8. Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request copies of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your data (subject to legal requirements)</li>
              <li><strong>Restriction:</strong> Limit how we process your data</li>
              <li><strong>Portability:</strong> Receive your data in a portable format</li>
              <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Withdraw Consent:</strong> For processing based on consent</li>
            </ul>

            <h2>9. Cookies</h2>
            <p>
              Our website uses cookies to improve your experience. Essential cookies are necessary for the website to function, 
              while analytics and marketing cookies help us understand how you use our site. 
              You can control cookie preferences through your browser settings.
            </p>

            <h2>10. International Transfers</h2>
            <p>
              We primarily process data within the UK. If we transfer data internationally, 
              we ensure appropriate safeguards are in place to protect your information.
            </p>

            <h2>11. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under 18. We do not knowingly collect personal information from children.
            </p>

            <h2>12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of any material changes 
              via email or through our website.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <p>
              <strong>Email:</strong> hello@agentscapital.co<br />
              <strong>Phone:</strong> 07368162737<br />
              <strong>Data Protection Officer:</strong> privacy@agentscapital.co
            </p>

            <h2>14. Complaints</h2>
            <p>
              If you're not satisfied with how we handle your personal data, you have the right to lodge a complaint 
              with the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" className="text-blue-600 hover:underline">ico.org.uk</a>.
            </p>

            <div className="border-t border-slate-200 pt-8 mt-12">
              <p className="text-sm text-slate-500">
                This Privacy Policy governs your use of Agents Capital's services and website. 
                By using our services, you consent to the collection and use of information as described in this policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}