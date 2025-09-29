"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import {
  CheckCircle,
  Clock,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Phone,
  Mail,
  MapPin,
  Star,
  PoundSterling,
  Menu,
  Instagram,
  Linkedin,
  ChevronDown
} from "lucide-react"

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const testimonials = [
    {
      quote: "Getting paid at exchange has completely changed our cash flow. We can now take on more marketing and invest in growth without worrying about when completion happens.",
      name: "Sarah Thompson",
      role: "Senior Negotiator, London"
    },
    {
      quote: "The application process was incredibly simple and we had approval within hours. Agents Capital has become an essential part of our business operations.",
      name: "James Mitchell",
      role: "Branch Manager, Manchester"
    },
    {
      quote: "As a new agent, having access to commission at exchange rather than completion has been a game-changer. It's allowed me to focus on selling rather than worrying about cash flow.",
      name: "Emma Wilson",
      role: "Estate Agent, Birmingham"
    },
    {
      quote: "We've used Agents Capital for over 50 deals now. The consistency and reliability has made it an integral part of how we operate. Highly recommended to any serious agent.",
      name: "David Chen",
      role: "Director, Bristol Properties"
    },
    {
      quote: "The peace of mind knowing our commission is secure at exchange is invaluable. We can commit to property marketing budgets and expansion plans with confidence.",
      name: "Lisa Rodriguez",
      role: "Branch Manager, Leeds"
    },
    {
      quote: "Having started my own agency, cash flow was my biggest concern. Agents Capital removed that worry completely and allowed me to focus on what I do best - selling properties.",
      name: "Mark Thompson",
      role: "Independent Agent, Cambridge"
    }
  ]

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        )
      }, 4000) // Auto-scroll every 4 seconds

      return () => clearInterval(interval)
    }
  }, [isHovered])

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-slate-600">
            Hear from estate agents who've transformed their cash flow
          </p>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)`,
              width: `${testimonials.length * 100}%`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / testimonials.length}%` }}
              >
                <div className="max-w-4xl mx-auto">
                  <Card className="p-8 shadow-lg">
                    <CardContent className="p-0 text-center">
                      <div className="flex justify-center mb-6">
                        <Star className="h-6 w-6 text-yellow-400 fill-current" />
                        <Star className="h-6 w-6 text-yellow-400 fill-current" />
                        <Star className="h-6 w-6 text-yellow-400 fill-current" />
                        <Star className="h-6 w-6 text-yellow-400 fill-current" />
                        <Star className="h-6 w-6 text-yellow-400 fill-current" />
                      </div>
                      <p className="text-xl text-slate-600 mb-6 italic leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div className="font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-slate-500">{testimonial.role}</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={`dot-${testimonial.name}`}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index
                    ? 'bg-green-600'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-normal" style={{ fontFamily: '"Knockout-HTF54-Sumo", sans-serif' }}>
                Agents<span className="font-bold">Capital</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-sm font-medium hover:text-primary transition-colors">
                    How It Works
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/commission-advance">Commission Advance</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/pricing">Our Pricing</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/our-business" className="text-sm font-medium hover:text-primary transition-colors">
                Our Business
              </Link>
              <Link href="/help" className="text-sm font-medium hover:text-primary transition-colors">
                Help Centre
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/apply">
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2">
                  <Zap className="h-4 w-4 mr-2" />
                  Apply Now
                </Button>
              </Link>
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4 mr-2" />
                07368162737
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4 mt-8">
                    <span className="text-2xl font-normal mb-4" style={{ fontFamily: '"Knockout-HTF54-Sumo", sans-serif' }}>
                      Agents<span className="font-bold">Capital</span>
                    </span>
                    <div className="space-y-2">
                      <div className="font-medium text-slate-600 text-sm">How It Works</div>
                      <Link href="/commission-advance" className="text-left pl-4 text-lg font-medium hover:text-primary transition-colors py-2 block">
                        Commission Advance
                      </Link>
                      <Link href="/pricing" className="text-left pl-4 text-lg font-medium hover:text-primary transition-colors py-2 block">
                        Our Pricing
                      </Link>
                    </div>
                    <Separator />
                    <Link href="/apply">
                      <Button className="justify-start bg-green-600 hover:bg-green-700 text-white w-full">
                        <Zap className="h-4 w-4 mr-2" />
                        Apply Now
                      </Button>
                    </Link>
                    <Link href="/our-business" className="text-left text-lg font-medium hover:text-primary transition-colors py-2">
                      Our Business
                    </Link>
                    <Link href="/help" className="text-left text-lg font-medium hover:text-primary transition-colors py-2">
                      Help Centre
                    </Link>
                    <Link href="/contact" className="text-left text-lg font-medium hover:text-primary transition-colors py-2">
                      Contact
                    </Link>
                    <Separator />
                    <Button className="justify-start" variant="outline">
                      <Phone className="h-4 w-4 mr-2" />
                      07368162737
                    </Button>
                    <Link href="https://www.instagram.com/agents.capital" target="_blank" rel="noopener noreferrer">
                      <Button className="justify-start bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white">
                        <Instagram className="h-4 w-4 mr-2" />
                        Follow @AgentsCapital
                      </Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Instagram CTA Banner */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 text-sm">
            <Instagram className="h-4 w-4" />
            <span>Follow us on Instagram for daily tips and success stories</span>
            <Link href="https://www.instagram.com/agents.capital" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm" className="ml-2 bg-white text-gray-800 hover:bg-gray-100">
                Follow @AgentsCapital
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center space-x-2 mb-6">
              <Badge variant="secondary" className="bg-green-600 text-white">
                UK Market Leader
              </Badge>
              <Badge variant="secondary" className="bg-blue-600 text-white">
                Same Day Funding
              </Badge>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get Your Commission
              <span className="text-green-400 block">At Exchange</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Don't wait weeks or months for completion. Access your commission within hours of exchange
              and keep your business moving forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
                  <Zap className="mr-2 h-5 w-5" />
                  Apply Now
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-white !text-white bg-transparent hover:bg-white hover:!text-slate-900"
                onClick={() => scrollToSection('how-it-works')}
              >
                How It Works
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400">£9M+</div>
                <div className="text-slate-300">Advanced This Year</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">24 Hours</div>
                <div className="text-slate-300">Average Approval</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Agents Capital?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Commission advance designed specifically for UK estate agents and brokerages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Apply online within minutes and receive same-day approval
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Instant Access</CardTitle>
                <CardDescription>
                  Get your commission within 24 hours of exchange - not completion
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Completely Flexible</CardTitle>
                <CardDescription>
                  Use as often as you need. No minimum requirements or lock-in contracts
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <PoundSterling className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Transparent Fees</CardTitle>
                <CardDescription>
                  No setup fees, no admin fees, no early repayment fees. You only pay for what you use
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>100% Confidential</CardTitle>
                <CardDescription>
                  Private arrangement between you and us
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>No Contracts</CardTitle>
                <CardDescription>
                  No long-term commitments. Use our service when it suits your business
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Get access to your commission in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Submit Your Deal</h3>
              <p className="text-slate-600">
                Complete our simple online application with your deal details. Register in just a few steps.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Get Approved</h3>
              <p className="text-slate-600">
                Our team reviews and approves your application the same day. No lengthy paperwork.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Receive Your Funds</h3>
              <p className="text-slate-600">
                Once contracts are exchanged, receive your commission within 24 hours via bank transfer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by UK Estate Agents</h2>
            <p className="text-xl text-slate-300">
              Join hundreds of successful agents who've improved their cash flow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">£9M+</div>
              <div className="text-slate-300">Total Advanced</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">150+</div>
              <div className="text-slate-300">Active Agents</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">24hrs</div>
              <div className="text-slate-300">Average Approval</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      {/* CTA Section */}
      <section id="apply" className="py-20 bg-black text-white">
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
            <a href="tel:07368162737">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-white !text-white bg-transparent hover:bg-white hover:!text-green-600"
              >
                <Phone className="mr-2 h-5 w-5" />
                Speak to an Expert
              </Button>
            </a>
          </div>
          <p className="text-sm mt-4 text-green-100">
            No obligation • No setup fees • Same day approval
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-normal" style={{ fontFamily: '"Knockout-HTF54-Sumo", sans-serif' }}>
                  Agents<span className="font-bold text-white">Capital</span>
                </span>
              </div>
              <p className="text-slate-300 mb-4">
                Fast, flexible commission advance for UK estate agents and brokerages.
              </p>
              <div className="flex space-x-4">
                <Link href="https://www.instagram.com/agents.capital" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="bg-gradient-to-r from-gray-800 to-gray-900 border-0 hover:from-gray-700 hover:to-gray-800">
                    <Instagram className="h-4 w-4 mr-2" />
                    Instagram
                  </Button>
                </Link>
                <Button variant="outline" size="sm" className="bg-blue-600 border-0 hover:bg-blue-700">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">How It Works</h3>
              <ul className="space-y-2 text-slate-300">
                <li><button onClick={() => scrollToSection('how-it-works')} className="hover:text-white transition-colors text-left">How It Works</button></li>
                <li><Link href="/commission-advance" className="hover:text-white transition-colors">Commission Advance</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Our Pricing</Link></li>
                <li><button onClick={() => scrollToSection('benefits')} className="hover:text-white transition-colors text-left">Benefits</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-300">
                <li><Link href="/our-business" className="hover:text-white transition-colors">Our Business</Link></li>
                <li><Link href="/help" className="hover:text-white transition-colors">Help Centre</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/apply" className="hover:text-white transition-colors">Apply Now</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>07368162737</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:Hello@agentscapital.co" className="hover:text-green-400 transition-colors">
                    Hello@agentscapital.co
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-1" />
                  <span>Unit 1 Syds Quay, Eel Pie Island<br />Twickenham TW1 3DY</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-slate-700" />

          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400">
            <p>&copy; 2024 Agents Capital Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}