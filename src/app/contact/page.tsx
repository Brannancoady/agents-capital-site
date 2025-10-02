"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import SharedNavigation from "@/components/shared-navigation"
import SharedFooter from "@/components/shared-footer"
import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Building,
  CheckCircle,
  AlertCircle
} from "lucide-react"

export default function ContactPage() {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

      ...prev,
      [field]: value
    }))
    // Clear error when user starts typing
  }

    e.preventDefault()

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      return
    }


    try {
      console.log('Submitting form data:', formData)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      console.log('Response status:', response.status)

      if (response.ok) {
      } else {
        const data = await response.json()
        console.log('Error response:', data)
      }
    } catch (err) {
      console.error('Form submission error:', err)
    } finally {
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SharedNavigation />

      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-white text-black mb-4">
              Contact Us
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our expert team is ready to help you transform your cash flow.
              Contact us today to learn more about commission advance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Multiple Ways to Reach Us</h2>
              <p className="text-xl text-slate-600">
                Choose the contact method that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Phone Support</CardTitle>
                  <CardDescription>Speak directly to our team</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <p className="text-3xl font-bold text-green-600">07368162737</p>
                    <p className="text-sm text-slate-600">Free UK landline</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center text-slate-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Mon-Fri: 9am-6pm</span>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Email Support</CardTitle>
                  <CardDescription>Get detailed written responses</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <p className="text-lg font-semibold text-blue-600">Hello@agentscapital.co</p>
                    <p className="text-sm text-slate-600">All enquiries</p>
                  </div>
                  <div className="text-sm text-slate-600">
                    <p>Same day response within working hours</p>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                </CardContent>
              </Card>


            </div>

            {/* Office Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 2 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6" method="POST" data-netlify="true" name="contact">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          required
                          name="firstName"
                          
                          
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          placeholder="Smith"
                          required
                          name="lastName"
                          
                          
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        name="email"
                        
                        
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="07000 000000"
                        name="phone"
                        
                        
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Company/Agency</Label>
                      <Input
                        id="company"
                        placeholder="Your estate agency"
                        name="company"
                        
                        
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="How can we help?"
                        required
                        name="subject"
                        
                        
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your enquiry..."
                        rows={5}
                        required
                        name="message"
                        
                        
                      />
                    </div>

                    <Button
                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Office Details */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Building className="h-5 w-5 mr-2" />
                      Head Office
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-slate-600 mr-3 mt-1" />
                        <div>
                          <p className="font-semibold">Agents Capital Ltd</p>
                          <p className="text-slate-600">Unit 1 Syds Quay</p>
                          <p className="text-slate-600">Eel Pie Island</p>
                          <p className="text-slate-600">Twickenham TW1 3DY</p>
                          <p className="text-slate-600">United Kingdom</p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-slate-600 mr-3" />
                        <span>07368162737</span>
                      </div>

                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-slate-600 mr-3" />
                        <a href="mailto:Hello@agentscapital.co" className="hover:text-green-400 transition-colors">
                          Hello@agentscapital.co
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-semibold">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday - Sunday</span>
                        <span className="text-slate-600">Closed</span>
                      </div>
                      <div className="border-t pt-3">
                        <div className="text-sm text-slate-600">
                          <p className="font-semibold">Emergency Contact:</p>
                          <p>For urgent matters outside business hours, email us and we'll respond within 4 hours.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't wait - apply for commission advance today and transform your cash flow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Apply Now - Free
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white !text-white hover:bg-white hover:!text-green-600">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
