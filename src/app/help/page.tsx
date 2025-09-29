import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import SharedNavigation from "@/components/shared-navigation"
import SharedFooter from "@/components/shared-footer"
import Link from "next/link"
import {
  Search,
  Phone,
  Mail,
  Clock,
  Zap,
  Shield,
  FileText,
  HelpCircle,
  MessageCircle
} from "lucide-react"

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedNavigation />

      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-white text-black mb-4">
              Help Centre
            </Badge>
            <h1 className="text-5xl font-bold mb-6">How Can We Help?</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Find answers to common questions about commission advance and our services
            </p>

            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  className="pl-10 bg-white text-slate-900"
                  placeholder="Search for answers..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Popular Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Getting Started</CardTitle>
                  <CardDescription>How to apply and get approved</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Payment Process</CardTitle>
                  <CardDescription>When and how you get paid</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Fees & Pricing</CardTitle>
                  <CardDescription>Understanding our charges</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <FileText className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Legal & Compliance</CardTitle>
                  <CardDescription>Regulations and requirements</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Getting Started */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <Zap className="h-8 w-8 text-green-600 mr-3" />
                Getting Started
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>How do I apply for commission advance?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Applying is simple and takes just minutes:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-slate-600">
                      <li>Complete our online application with your deal details</li>
                      <li>Our team reviews and approves your application (same day)</li>
                      <li>Once contracts exchange, you receive payment within 24 hours</li>
                    </ol>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>What information do I need to apply?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      <li>Property address and sale price</li>
                      <li>Your commission rate and amount</li>
                      <li>Expected exchange and completion dates</li>
                      <li>Your contact details and bank information</li>
                      <li>Estate agency license details (if applicable)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Who is eligible for commission advance?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      All UK-based estate agents and brokerages are eligible. You must have a confirmed property sale
                      with contracts ready to exchange. We work with both independent agents and large agencies.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Payment Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <Clock className="h-8 w-8 text-blue-600 mr-3" />
                Payment Process
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>How quickly do I receive my commission?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      Once contracts are exchanged, you'll receive your commission within 24 hours via direct bank transfer.
                      We aim to make payments even faster, with many clients receiving funds within 2 hours.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>How do you verify that exchange has happened?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      Simply notify us when exchange occurs via email or phone. We may request
                      confirmation from the solicitor or your agency's legal department for larger transactions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Fees & Pricing */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <Shield className="h-8 w-8 text-purple-600 mr-3" />
                Fees & Pricing
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What does the service cost?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      We charge a minimum of 9% of the commission amount, with exact pricing calculated based on
                      deal size and timing. Our interactive pricing calculator shows your exact fee. This covers:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      <li>Application assessment and approval</li>
                      <li>Fast payment processing</li>
                      <li>Dedicated account management</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Are there any other fees?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      There are no setup fees, admin charges, or hidden costs.
                      You only pay our commission fee when you use our service.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>How is the fee calculated and paid?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      The fee starts at a minimum of 9% and is calculated based on commission amount and time to completion.
                      Use our pricing calculator to see your exact fee. The fee is automatically deducted before payment.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Legal & Compliance */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <FileText className="h-8 w-8 text-orange-600 mr-3" />
                Legal & Compliance
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Is my information secure?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      Absolutely. We use bank-level encryption and security measures. Your personal and financial
                      information is never shared with third parties and is protected by GDPR regulations.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Do my clients know about the advance?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      No. Our arrangement is completely confidential between you and Agents Capital.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl text-slate-600 mb-12">
              Our expert team is here to answer any questions you have
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Call Us</CardTitle>
                  <CardDescription>Speak to our team directly</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-green-600 mb-2">07368162737</p>
                  <p className="text-sm text-slate-600">Mon-Fri 9am-6pm</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Email Support</CardTitle>
                  <CardDescription>Get detailed answers via email</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-semibold text-blue-600 mb-2">Hello@agentscapital.co</p>
                  <p className="text-sm text-slate-600">Same day response within working hours</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Live Chat</CardTitle>
                  <CardDescription>Instant help during business hours</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Start Chat
                  </Button>
                  <p className="text-sm text-slate-600 mt-2">Available 9am-6pm</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}