import SharedNavigation from "@/components/shared-navigation"
import SharedFooter from "@/components/shared-footer"
import { Badge } from "@/components/ui/badge"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedNavigation />

      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-white text-black mb-4">
              Legal
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our commission advance service.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-slate max-w-none">
            <p className="text-slate-600 mb-8">
              <strong>Last updated:</strong> September 2025
            </p>

            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing and using Agents Capital's commission advance service, you agree to be bound by these 
              Terms and Conditions. If you do not agree to these terms, please do not use our service.
            </p>

            <h2>2. Service Description</h2>
            <p>
              Agents Capital provides commission advance services to UK-based estate agents and brokers. 
              We advance commission payments based on exchanged property contracts, with payment due at completion.
            </p>

            <h2>3. Eligibility</h2>
            <p>To be eligible for our service, you must:</p>
            <ul>
              <li>Be a UK-based estate agent or broker</li>
              <li>Have a confirmed property sale with exchanged contracts</li>
              <li>Be legally entitled to receive the commission</li>
              <li>Provide accurate and complete information in your application</li>
            </ul>

            <h2>4. Application Process</h2>
            <p>
              All applications are subject to approval. We reserve the right to decline any application at our discretion. 
              Approval does not guarantee funding until contracts are exchanged.
            </p>

            <h2>5. Fees and Payment</h2>
            <p>
              Our fees are calculated based on the commission amount and contract duration. 
              Fees are automatically deducted from the advance payment. All fees are clearly disclosed before approval.
            </p>

            <h2>6. Repayment</h2>
            <p>
              The advance amount plus fees are due immediately upon completion of the property sale. 
              In the event of non-completion, the advance plus fees remain due and payable.
            </p>

            <h2>7. Default and Recovery</h2>
            <p>
              If payment is not received within 30 days of the original completion date, 
              we may pursue recovery through legal means and may charge additional recovery costs.
            </p>

            <h2>8. Confidentiality</h2>
            <p>
              We maintain strict confidentiality regarding all client dealings. 
              Your clients will not be informed of the commission advance arrangement.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              Agents Capital's liability is limited to the amount of the advance payment. 
              We are not liable for any consequential or indirect losses.
            </p>

            <h2>10. Data Protection</h2>
            <p>
              We process personal data in accordance with UK GDPR and our Privacy Policy. 
              By using our service, you consent to the processing of your personal data as described.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These terms are governed by English law and any disputes will be subject to 
              the exclusive jurisdiction of the English courts.
            </p>

            <h2>12. Changes to Terms</h2>
            <p>
              We may update these terms from time to time. We will notify you of any material changes 
              via email or through our website.
            </p>

            <h2>13. Contact Information</h2>
            <p>
              If you have any questions about these terms, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> hello@agentscapital.co<br />
              <strong>Phone:</strong> 07368162737
            </p>

            <div className="border-t border-slate-200 pt-8 mt-12">
              <p className="text-sm text-slate-500">
                These terms and conditions constitute the entire agreement between you and Agents Capital 
                regarding the use of our commission advance service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}