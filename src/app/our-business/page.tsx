import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SharedNavigation from "@/components/shared-navigation"
import SharedFooter from "@/components/shared-footer"
import Link from "next/link"
import {
  Users,
  Target,
  Heart,
  Clock,
  TrendingUp,
  Shield,
  CheckCircle,
  Zap
} from "lucide-react"

export default function OurBusinessPage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedNavigation />

      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-white text-black mb-4">
              Our Story
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Our Business</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Built by estate agents, for estate agents. We understand the cash flow challenges
              because we've lived them ourselves.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">The Story Behind Agents Capital</h2>
              <p className="text-xl text-slate-600">
                From frustration to solution - how we transformed estate agent cash flow
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-semibold mb-6">The Problem We Faced</h3>
                <p className="text-slate-600 mb-4">
                  As independent estate agents, we experienced firsthand the crushing frustration of completing
                  successful property sales, only to wait months before receiving our hard-earned commission.
                  The gap between exchange and completion was killing our cash flow.
                </p>
                <p className="text-slate-600 mb-4">
                  Despite all the hard work being done - finding buyers, negotiating deals, managing viewings,
                  and getting contracts exchanged - we were left waiting weeks or even months for our commission.
                  This created an enormous burden on our business finances and limited our ability to grow.
                </p>
                <p className="text-slate-600">
                  We knew there had to be a better way. If the hard work was done and contracts were exchanged,
                  why should we have to wait for completion to access our earnings?
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-lg">
                <h4 className="text-lg font-semibold mb-4 text-red-600">The Cash Flow Reality</h4>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                    <span>Waiting 6-12 weeks for completion after exchange</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                    <span>Unable to invest in marketing during peak periods</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                    <span>Difficulty covering business expenses despite successful sales</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                    <span>Limited ability to scale operations or take on new opportunities</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-green-50 p-8 rounded-lg">
                <h4 className="text-lg font-semibold mb-4 text-green-600">Our Solution</h4>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Commission advance within 24 hours of exchange</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>No lengthy paperwork or complex approval processes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Built specifically for UK estate agents</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">The Solution We Built</h3>
                <p className="text-slate-600 mb-4">
                  Frustrated by the outdated system, we decided to create the solution we wished existed.
                  Agents Capital was born from our own pain points as working estate agents who understood
                  exactly what the industry needed.
                </p>
                <p className="text-slate-600 mb-4">
                  We developed a service that recognises a simple truth: once contracts are exchanged,
                  the real work is done. You've earned your commission, and you shouldn't have to wait
                  months to access it.
                </p>
                <p className="text-slate-600">
                  Today, we're proud to help hundreds of UK estate agents transform their cash flow,
                  just as we transformed our own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-slate-600">
                What drives us every day
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader className="text-center">
                  <div className="h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Agent-First</CardTitle>
                  <CardDescription>
                    We're estate agents serving estate agents. We understand your challenges because we've lived them.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Transparency</CardTitle>
                  <CardDescription>
                    Clear pricing, honest communication, and no hidden surprises. What you see is what you get.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="h-16 w-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>Speed</CardTitle>
                  <CardDescription>
                    Your time is valuable. We make everything fast - applications, approvals, and payments.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              To empower every UK estate agent with the financial freedom to grow their business,
              by eliminating the cash flow gap between exchange and completion.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">£9m+</div>
                <div className="text-slate-600">Advanced to Agents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
                <div className="text-slate-600">Agents Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100's</div>
                <div className="text-slate-600">Deals Funded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
              <p className="text-xl text-slate-600">
                Experienced estate agents who understand your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Commercial Leadership
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Our leadership team combines over 20 years of estate agency experience with
                    expertise in financial services and technology.
                  </p>
                  <p className="text-slate-600">
                    We've worked in independent agencies, national chains, and online platforms,
                    giving us deep insight into the challenges facing modern estate agents.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Industry Focus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    We're not just another financial services company. We're property professionals
                    who have lived through the same cash flow challenges you face.
                  </p>
                  <p className="text-slate-600">
                    This gives us unique insight into what estate agents really need and how to
                    deliver solutions that actually work in the real world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Cash Flow?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of UK estate agents who've already improved their business with commission advance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Zap className="mr-2 h-5 w-5" />
                Apply Now - Free
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white !text-white bg-transparent hover:bg-white hover:!text-green-600">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}