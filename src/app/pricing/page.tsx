"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import SharedNavigation from "@/components/shared-navigation"
import SharedFooter from "@/components/shared-footer"
import Link from "next/link"
import {
  CheckCircle,
  X,
  Zap,
  Calculator,
  PoundSterling,
  TrendingUp,
  Clock,
  Users,
  Building
} from "lucide-react"

export default function PricingPage() {
  const [propertyValue, setPropertyValue] = useState([200000])
  const [commissionPercentage, setCommissionPercentage] = useState([1.5])
  const [agentCommissionPercentage, setAgentCommissionPercentage] = useState([100])
  const [exchangeDate, setExchangeDate] = useState("")
  const [completionDate, setCompletionDate] = useState("")
  const [userType, setUserType] = useState("agent") // "agent" or "broker"

  // Calculate the agent's commission amount
  const totalCommission = (propertyValue[0] * commissionPercentage[0]) / 100
  const agentCommission = (totalCommission * agentCommissionPercentage[0]) / 100

  // Calculate days between exchange and completion
  const calculateDays = () => {
    if (!exchangeDate || !completionDate) return 0
    const exchange = new Date(exchangeDate)
    const completion = new Date(completionDate)
    const diffTime = Math.abs(completion.getTime() - exchange.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const daysToCompletion = calculateDays()
  const monthsToCompletion = daysToCompletion / 30.44 // Average days per month

  // Calculate fee percentage based on contract length
  const calculateFeePercentage = (months: number, isBroker = false) => {
    let baseFee: number

    if (months <= 2) {
      baseFee = 9.0
    } else if (months <= 3) {
      baseFee = 10.0
    } else if (months <= 4) {
      baseFee = 11.0
    } else if (months <= 5) {
      baseFee = 12.0
    } else if (months <= 6) {
      baseFee = 15.0
    } else {
      return "By Agreement"
    }

    // Apply 20% discount for brokers
    if (isBroker) {
      baseFee = baseFee * 0.8
    }

    return baseFee
  }

  const feePercentage = calculateFeePercentage(monthsToCompletion, userType === "broker")
  const feeAmount = typeof feePercentage === 'number' ? (agentCommission * feePercentage) / 100 : 0
  const youReceive = typeof feePercentage === 'number' ? agentCommission - feeAmount : agentCommission



  // Set default dates on first load if not set
  useEffect(() => {
    if (!exchangeDate && !completionDate) {
      const today = new Date()
      const twoMonthsLater = new Date(today.getTime() + (60 * 24 * 60 * 60 * 1000)) // 60 days

      setExchangeDate(today.toISOString().split('T')[0])
      setCompletionDate(twoMonthsLater.toISOString().split('T')[0])
    }
  }, [exchangeDate, completionDate])

  return (
    <div className="min-h-screen bg-background">
      <SharedNavigation />

      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-white text-black mb-4">
              Transparent Pricing
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Simple, Fair Pricing</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From 9% of your retained commission. No hidden fees, no setup costs, no monthly charges.
              Pricing based on contract duration with special rates for brokers.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Calculate Your Fee</h2>
              <p className="text-xl text-slate-600">
                Enter your deal details to see your exact fee and payout amount
              </p>
            </div>

            <Card className="mb-8 border-green-200 shadow-lg">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-2xl flex items-center">
                  <Calculator className="h-6 w-6 mr-2" />
                  Commission Advance Calculator
                </CardTitle>
                <CardDescription>
                  See exactly what you'll receive based on your deal details and contract length
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                {/* User Type Tabs */}
                <Tabs value={userType} onValueChange={setUserType} className="w-full mb-8">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="agent" className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Estate Agent
                    </TabsTrigger>
                    <TabsTrigger value="broker" className="flex items-center">
                      <Building className="h-4 w-4 mr-2" />
                      Broker (20% Discount)
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">
                      Property Value: £{propertyValue[0].toLocaleString()}
                    </Label>
                    <Slider
                      value={propertyValue}
                      onValueChange={setPropertyValue}
                      max={20000000}
                      min={200000}
                      step={5000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-slate-500 mt-2">
                      <span>£200,000</span>
                      <span>£20,000,000</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold mb-4 block">
                      Total Commission Rate: {commissionPercentage[0]}%
                    </Label>
                    <Slider
                      value={commissionPercentage}
                      onValueChange={setCommissionPercentage}
                      max={3.0}
                      min={0.5}
                      step={0.1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-slate-500 mt-2">
                      <span>0.5%</span>
                      <span>3.0%</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold mb-4 block">
                      Your Commission Share: {agentCommissionPercentage[0]}%
                    </Label>
                    <Slider
                      value={agentCommissionPercentage}
                      onValueChange={setAgentCommissionPercentage}
                      max={100}
                      min={25}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-slate-500 mt-2">
                      <span>25%</span>
                      <span>100%</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold mb-4 block">
                      Contract Dates ({daysToCompletion} days / {monthsToCompletion.toFixed(1)} months)
                    </Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label htmlFor="exchangeDate" className="text-sm">Exchange Date</Label>
                        <Input
                          id="exchangeDate"
                          type="date"
                          value={exchangeDate}
                          onChange={(e) => setExchangeDate(e.target.value)}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Label htmlFor="completionDate" className="text-sm">Completion Date</Label>
                        <Input
                          id="completionDate"
                          type="date"
                          value={completionDate}
                          onChange={(e) => setCompletionDate(e.target.value)}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Calculation Breakdown */}
                <div className="bg-slate-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold mb-4">Calculation Breakdown</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Property Value:</span>
                      <span>£{propertyValue[0].toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Commission ({commissionPercentage[0]}%):</span>
                      <span>£{totalCommission.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Your Commission Share ({agentCommissionPercentage[0]}%):</span>
                      <span>£{agentCommission.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Contract Length:</span>
                      <span>{daysToCompletion} days ({monthsToCompletion.toFixed(1)} months)</span>
                    </div>
                    <div className="flex justify-between font-semibold border-t pt-2">
                      <span>Agents Capital Fee ({typeof feePercentage === 'number' ? `${feePercentage.toFixed(1)}%` : feePercentage}):</span>
                      <span>{typeof feePercentage === 'number' ? `£${feeAmount.toLocaleString()}` : 'Contact Us'}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-black mb-1">
                        £{agentCommission.toLocaleString()}
                      </div>
                      <div className="text-sm text-slate-500">Your Commission</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        {typeof feePercentage === 'number'
                          ? `${feePercentage.toFixed(1)}% (£${feeAmount.toLocaleString()})`
                          : 'By Agreement'
                        }
                      </div>
                      <div className="text-sm text-slate-500">Our Fee {userType === 'broker' && '(20% Discount Applied)'}</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-black mb-1">
                        £{youReceive.toLocaleString()}
                      </div>
                      <div className="text-sm text-slate-500">You Receive Instantly</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-slate-600 mb-4">
                    Based on £{agentCommission.toLocaleString()} commission due in {daysToCompletion} days
                  </p>
                  <Link href="/apply">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      <Zap className="mr-2 h-4 w-4" />
                      Apply for This Amount
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Pricing FAQs</h2>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>How is the fee calculated?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Our fee is a percentage of your retained commission amount (not the total commission).
                    The percentage depends solely on the contract length - the time between exchange and completion dates.
                    For example, if you retain £5,000 commission and the contract is 2 months, our fee is 9% = £450.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What's the difference between Agent and Broker pricing?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Brokers receive a 20% discount on all our standard rates. This recognises the volume of business
                    brokers typically generate and their role in the property ecosystem. The same duration-based
                    structure applies, just with reduced percentages.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>When do I pay the fee?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Our fee is automatically deducted from your commission before payment. You receive the net amount
                    directly to your bank account. For example, if you're due £5,000 and our fee is 9%, you receive
                    £4,550 instantly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What if the contract length is over 6 months?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    For contracts longer than 6 months, we work on a case-by-case basis to agree fair terms.
                    Contact our team to discuss your specific requirements and we'll provide a custom quote.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What happens if the deal falls through?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Whilst rare, we know that sometimes deals that have exchanged do not complete. Our fee is still due,
                    and it is expected that you recover your fee from the retained customer deposit.
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
          <h2 className="text-4xl font-bold mb-4">Ready to Get Your Commission Instantly?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Use our calculator above to see your exact fee, then apply in just minutes
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
                <Calculator className="mr-2 h-5 w-5" />
                Discuss Custom Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}