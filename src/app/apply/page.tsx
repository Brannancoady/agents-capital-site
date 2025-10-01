"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  PoundSterling,
  Clock,
  CheckCircle,
  ArrowLeft,
  Zap,
  Shield,
  Phone,
  Mail,
  Users,
  Building,
  AlertCircle
} from "lucide-react"
import Link from "next/link"

export default function ApplicationPage() {
  const [formData, setFormData] = useState({
    // Agent Details
    agentName: '',
    companyName: '',
    email: '',
    phone: '',
    licenseNumber: '',
    userType: 'agent', // 'agent' or 'broker'

    // Deal Details
    propertyAddress: '',
    salePrice: '',
    commissionRate: '',
    commissionAmount: '',
    agentShare: '100', // percentage of commission agent retains
    expectedExchangeDate: '',
    expectedCompletionDate: '',

    // Additional Information
    additionalNotes: ''
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))

    // Auto-calculate commission amount if sale price, rate, and agent share are provided
    if (field === 'salePrice' || field === 'commissionRate' || field === 'agentShare') {
      const price = field === 'salePrice' ? Number.parseFloat(value) : Number.parseFloat(formData.salePrice)
      const rate = field === 'commissionRate' ? Number.parseFloat(value) : Number.parseFloat(formData.commissionRate)
      const share = field === 'agentShare' ? Number.parseFloat(value) : Number.parseFloat(formData.agentShare)

      if (price && rate && share) {
        const totalCommission = price * rate / 100
        const agentCommission = (totalCommission * share / 100).toFixed(2)
        setFormData(prev => ({
          ...prev,
          commissionAmount: agentCommission
        }))
      }
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        const data = await response.json()
        setIsSubmitted(true)
      } else {
        const data = await response.json()
        console.error('Submission failed:', data.error)
        // Show error in form instead of alert
        setError(data.error || 'Failed to submit application. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setError('Failed to submit application. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Only advance to next step, don't submit on form submission
    if (currentStep < 3) {
      nextStep()
    }
  }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-normal">
                  Agents<span className="font-bold">Capital</span>
                </span>
              </Link>
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4 mr-2" />
                07368162737
              </Button>
            </div>
          </div>
        </nav>

        {/* Success Message */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Application Submitted Successfully!</h1>
            <p className="text-xl text-slate-600 mb-8">
              Thank you for submitting your commission advance application. We'll review your details and get back to you within 24 hours.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Quick Review</h3>
                  <p className="text-sm text-slate-600">We'll review your application within 24 hours</p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Fast Funding</h3>
                  <p className="text-sm text-slate-600">Approved funds released within 24 hours of exchange</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="outline" size="lg">Return to Homepage</Button>
              </Link>
              <a href="tel:07368162737">
                <Button size="lg">
                  <Phone className="mr-2 h-4 w-4" />
                  Speak to Our Team
                </Button>
              </a>
            </div>

            <p className="text-sm text-slate-500 mt-6">
              Application Reference: AC-{Date.now().toString().slice(-6)}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-normal">
                Agents<span className="font-bold">Capital</span>
              </span>
            </Link>
            <Button variant="outline" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              07368162737
            </Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center space-x-2 mb-4">
              <Badge variant="secondary" className="bg-white text-black">
                2 Minute Application
              </Badge>
              <Badge variant="secondary" className="bg-white text-black">
                Same Day Approval
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Apply for Commission Advance</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Get your commission at exchange, not completion. Simple application, fast approval.
            </p>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Progress Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Application Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className={`flex items-center space-x-3 ${currentStep >= 1 ? 'text-green-600' : 'text-slate-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${currentStep >= 1 ? 'bg-green-100 text-green-600' : 'bg-slate-100'}`}>
                        {currentStep > 1 ? <CheckCircle className="h-4 w-4" /> : '1'}
                      </div>
                      <span>Agent Details</span>
                    </div>

                    <div className={`flex items-center space-x-3 ${currentStep >= 2 ? 'text-green-600' : 'text-slate-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${currentStep >= 2 ? 'bg-green-100 text-green-600' : 'bg-slate-100'}`}>
                        {currentStep > 2 ? <CheckCircle className="h-4 w-4" /> : '2'}
                      </div>
                      <span>Deal Information</span>
                    </div>

                    <div className={`flex items-center space-x-3 ${currentStep >= 3 ? 'text-green-600' : 'text-slate-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${currentStep >= 3 ? 'bg-green-100 text-green-600' : 'bg-slate-100'}`}>
                        3
                      </div>
                      <span>Review & Submit</span>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Same day approval
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      No setup fees
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Completely confidential
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Form Content */}
            <div className="lg:col-span-2">
              <form onSubmit={handleFormSubmit}>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {currentStep === 1 && "Agent & Company Details"}
                      {currentStep === 2 && "Deal Information"}
                      {currentStep === 3 && "Review Your Application"}
                    </CardTitle>
                    <CardDescription>
                      {currentStep === 1 && "Tell us about yourself and your company"}
                      {currentStep === 2 && "Provide details about the property deal"}
                      {currentStep === 3 && "Review your information before submitting"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
                        <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                        <span className="text-red-700">{error}</span>
                      </div>
                    )}

                    {/* Step 1: Agent Details */}
                    {currentStep === 1 && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="agentName">Agent Name *</Label>
                            <Input
                              id="agentName"
                              value={formData.agentName}
                              onChange={(e) => handleInputChange('agentName', e.target.value)}
                              placeholder="Your full name"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="companyName">Company Name *</Label>
                            <Input
                              id="companyName"
                              value={formData.companyName}
                              onChange={(e) => handleInputChange('companyName', e.target.value)}
                              placeholder="Your estate agency"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              placeholder="your.email@company.co.uk"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              placeholder="07000 000000"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="licenseNumber">Estate Agent License Number</Label>
                          <Input
                            id="licenseNumber"
                            value={formData.licenseNumber}
                            onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                            placeholder="If applicable"
                          />
                        </div>

                        <div>
                          <Label htmlFor="userType">Business Type *</Label>
                          <select
                            id="userType"
                            value={formData.userType}
                            onChange={(e) => handleInputChange('userType', e.target.value)}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                          >
                            <option value="agent">Estate Agent</option>
                            <option value="broker">Broker (20% discount)</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Deal Details */}
                    {currentStep === 2 && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="propertyAddress">Property Address *</Label>
                          <Textarea
                            id="propertyAddress"
                            value={formData.propertyAddress}
                            onChange={(e) => handleInputChange('propertyAddress', e.target.value)}
                            placeholder="Full property address including postcode"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="salePrice">Sale Price (£) *</Label>
                            <Input
                              id="salePrice"
                              type="number"
                              value={formData.salePrice}
                              onChange={(e) => handleInputChange('salePrice', e.target.value)}
                              placeholder="450000"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="commissionRate">Commission Rate (%) *</Label>
                            <Input
                              id="commissionRate"
                              type="number"
                              step="0.1"
                              value={formData.commissionRate}
                              onChange={(e) => handleInputChange('commissionRate', e.target.value)}
                              placeholder="1.5"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="agentShare">Your Share (%)</Label>
                            <Input
                              id="agentShare"
                              type="number"
                              value={formData.agentShare}
                              onChange={(e) => handleInputChange('agentShare', e.target.value)}
                              placeholder="100"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <Label htmlFor="commissionAmount">Your Commission Amount (£)</Label>
                            <Input
                              id="commissionAmount"
                              type="number"
                              value={formData.commissionAmount}
                              onChange={(e) => handleInputChange('commissionAmount', e.target.value)}
                              placeholder="Calculated automatically"
                              readOnly
                              className="bg-slate-50"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expectedExchangeDate">Exchange Date *</Label>
                            <Input
                              id="expectedExchangeDate"
                              type="date"
                              value={formData.expectedExchangeDate}
                              onChange={(e) => handleInputChange('expectedExchangeDate', e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="expectedCompletionDate">Completion Date</Label>
                            <Input
                              id="expectedCompletionDate"
                              type="date"
                              value={formData.expectedCompletionDate}
                              onChange={(e) => handleInputChange('expectedCompletionDate', e.target.value)}
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="additionalNotes">Additional Notes</Label>
                          <Textarea
                            id="additionalNotes"
                            value={formData.additionalNotes}
                            onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                            placeholder="Any additional information about the deal"
                            rows={3}
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 3: Review */}
                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
                          <h4 className="font-semibold text-blue-800 mb-2">Please review your application carefully</h4>
                          <p className="text-sm text-blue-700">
                            Check all details below before submitting. You can edit any information by clicking "Edit Application" or "Start Over".
                          </p>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-3 flex items-center">
                            <Users className="h-5 w-5 mr-2" />
                            Agent Details
                          </h3>
                          <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                            <div><strong>Name:</strong> {formData.agentName || <span className="text-red-500">Not provided</span>}</div>
                            <div><strong>Company:</strong> {formData.companyName || <span className="text-red-500">Not provided</span>}</div>
                            <div><strong>Business Type:</strong> {formData.userType === 'agent' ? 'Estate Agent' : 'Broker (20% discount)'}</div>
                            <div><strong>Email:</strong> {formData.email || <span className="text-red-500">Not provided</span>}</div>
                            <div><strong>Phone:</strong> {formData.phone || <span className="text-red-500">Not provided</span>}</div>
                            {formData.licenseNumber && <div><strong>License Number:</strong> {formData.licenseNumber}</div>}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-3 flex items-center">
                            <Building className="h-5 w-5 mr-2" />
                            Deal Information
                          </h3>
                          <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                            <div><strong>Property Address:</strong> {formData.propertyAddress || <span className="text-red-500">Not provided</span>}</div>
                            <div><strong>Sale Price:</strong> {formData.salePrice ? `£${Number(formData.salePrice).toLocaleString()}` : <span className="text-red-500">Not provided</span>}</div>
                            <div><strong>Commission Rate:</strong> {formData.commissionRate ? `${formData.commissionRate}%` : <span className="text-red-500">Not provided</span>}</div>
                            <div><strong>Your Share:</strong> {formData.agentShare ? `${formData.agentShare}%` : <span className="text-red-500">Not provided</span>}</div>
                            <div><strong>Your Commission:</strong> {formData.commissionAmount ? `£${Number(formData.commissionAmount).toLocaleString()}` : <span className="text-red-500">Not calculated</span>}</div>
                            <div><strong>Expected Exchange Date:</strong> {formData.expectedExchangeDate || <span className="text-red-500">Not provided</span>}</div>
                            {formData.expectedCompletionDate && <div><strong>Expected Completion Date:</strong> {formData.expectedCompletionDate}</div>}
                            {formData.additionalNotes && <div><strong>Additional Notes:</strong> {formData.additionalNotes}</div>}
                          </div>
                        </div>

                        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            What happens next?
                          </h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• We'll review your application within 24 hours</li>
                            <li>• You'll receive approval confirmation via email</li>
                            <li>• Upon exchange, funds are released within 24 hours</li>
                            <li>• No fees until you use the service</li>
                          </ul>
                        </div>

                        <div className="border-t pt-4">
                          <p className="text-sm text-slate-600 text-center">
                            By submitting this application, you agree to our <Link href="/terms" className="text-blue-600 hover:underline">Terms & Conditions</Link> and <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6">
                      {currentStep > 1 && (
                        <Button type="button" variant="outline" onClick={prevStep}>
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          {currentStep === 3 ? 'Edit Application' : 'Previous'}
                        </Button>
                      )}

                      {currentStep < 3 ? (
                        <Button type="submit" className="ml-auto">
                          Next Step
                        </Button>
                      ) : (
                        <div className="flex gap-3 ml-auto">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setCurrentStep(1)}
                            disabled={isSubmitting}
                          >
                            Start Over
                          </Button>
                          <Button
                            type="button"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                                Submitting...
                              </>
                            ) : (
                              <>
                                <Zap className="mr-2 h-4 w-4" />
                                Submit Application
                              </>
                            )}
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}