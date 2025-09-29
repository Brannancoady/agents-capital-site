import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SharedNavigation from "@/components/shared-navigation"
import SharedFooter from "@/components/shared-footer"
import Link from "next/link"
import {
  Clock,
  PoundSterling,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Target,
  Users
} from "lucide-react"

export default function CommissionAdvancePage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedNavigation />

      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-white text-black mb-4">
              Commission Advance
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Get Paid When You Exchange</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Stop waiting months for completion. Get your commission within 24 hours of exchange
              with the UK's leading commission advance service for estate agents.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">How Commission Advance Works</h2>
              <p className="text-xl text-slate-600">
                Simple, fast, and designed specifically for UK estate agents
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <div className="h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>1. Apply Online</CardTitle>
                  <CardDescription>
                    Submit your deal details in minutes. Our simple application captures everything we need.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>2. Get Approved</CardTitle>
                  <CardDescription>
                    Same-day approval in most cases. Our team reviews and confirms your application quickly.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-16 w-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <PoundSterling className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>3. Get Paid</CardTitle>
                  <CardDescription>
                    Receive your commission within 24 hours of exchange directly to your bank account.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="bg-green-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Transform Your Cash Flow Today</h3>
              <p className="text-slate-600 mb-6">
                Join hundreds of UK estate agents who've improved their business with commission advance
              </p>
              <Link href="/apply">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Zap className="mr-2 h-5 w-5" />
                  Apply Now - Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Commission Advance?</h2>
              <p className="text-xl text-slate-600">
                The benefits that matter to your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Instant Cash Flow</h3>
                    <p className="text-slate-600">
                      Stop waiting 6-12 weeks for completion. Get your money when contracts exchange and use it immediately.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Reinvest in Growth</h3>
                    <p className="text-slate-600">
                      Use your commission immediately for marketing, technology, or expanding your business operations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Financial Security</h3>
                    <p className="text-slate-600">
                      Reduce financial stress and have consistent cash flow regardless of completion delays.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Simple Process</h3>
                    <p className="text-slate-600">
                      No complex paperwork or lengthy approval processes. Apply online and get approved the same day.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Completely Confidential</h3>
                    <p className="text-slate-600">
                      Your clients never know about the advance. It's a private arrangement between you and us.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Transparent Pricing</h3>
                    <p className="text-slate-600">
                      Fair fees from 9% with no hidden costs. Know exactly what you'll pay before you apply.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Perfect For</h2>
              <p className="text-xl text-slate-600">
                Commission advance helps in many situations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Peak Season Funding</CardTitle>
                  <CardDescription>
                    Increase marketing spend during busy periods when you need maximum exposure.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Technology Investment</CardTitle>
                  <CardDescription>
                    Upgrade your CRM, website, or marketing tools without waiting for completion.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Staff Expansion</CardTitle>
                  <CardDescription>
                    Hire additional team members or pay bonuses to retain top performers.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Office Expansion</CardTitle>
                  <CardDescription>
                    Move to a better location or open additional branches while waiting for completions.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Emergency Funding</CardTitle>
                  <CardDescription>
                    Cover unexpected expenses or cash flow gaps without affecting operations.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Personal Security</CardTitle>
                  <CardDescription>
                    Maintain your personal income while reinvesting commission into business growth.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Trusted by Estate Agents Across the UK</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">£9m+</div>
                <div className="text-slate-300">Advanced to Agents</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">150+</div>
                <div className="text-slate-300">Agents Supported</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">24hrs</div>
                <div className="text-slate-300">Average Payment Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">9%</div>
                <div className="text-slate-300">Starting Fee Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Cash Flow?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Apply for commission advance today and get your money when you exchange, not complete.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply">
                <Button size="lg" className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700">
                  <Zap className="mr-2 h-5 w-5" />
                  Apply Now - Free
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  See Pricing Calculator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}