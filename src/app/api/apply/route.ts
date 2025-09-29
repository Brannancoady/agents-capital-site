import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      agentName,
      companyName,
      email,
      phone,
      licenseNumber,
      userType,
      propertyAddress,
      salePrice,
      commissionRate,
      commissionAmount,
      agentShare,
      expectedExchangeDate,
      expectedCompletionDate,
      additionalNotes
    } = body

    // Validate required fields
    const requiredFields = [
      'agentName',
      'companyName', 
      'email',
      'phone',
      'userType',
      'propertyAddress',
      'salePrice',
      'commissionRate',
      'expectedExchangeDate'
    ]

    const missingFields = requiredFields.filter(field => !body[field])
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate numeric fields
    if (isNaN(Number(salePrice)) || Number(salePrice) <= 0) {
      return NextResponse.json(
        { error: 'Invalid sale price' },
        { status: 400 }
      )
    }

    if (isNaN(Number(commissionRate)) || Number(commissionRate) <= 0) {
      return NextResponse.json(
        { error: 'Invalid commission rate' },
        { status: 400 }
      )
    }

    // Validate date format
    const exchangeDate = new Date(expectedExchangeDate)
    if (isNaN(exchangeDate.getTime())) {
      return NextResponse.json(
        { error: 'Invalid exchange date' },
        { status: 400 }
      )
    }

    // Validate exchange date is not in the past
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (exchangeDate < today) {
      return NextResponse.json(
        { error: 'Exchange date cannot be in the past' },
        { status: 400 }
      )
    }

    // Generate application reference
    const applicationRef = `AC-${Date.now().toString().slice(-6)}`

    // Log the application (in production, you'd save to database/send notifications)
    console.log('Commission advance application:', {
      applicationRef,
      agentDetails: {
        agentName,
        companyName,
        email,
        phone,
        licenseNumber,
        userType
      },
      dealDetails: {
        propertyAddress,
        salePrice: Number(salePrice),
        commissionRate: Number(commissionRate),
        commissionAmount: Number(commissionAmount),
        agentShare: Number(agentShare),
        expectedExchangeDate,
        expectedCompletionDate,
        additionalNotes
      },
      timestamp: new Date().toISOString()
    })

    // In production, you would:
    // 1. Save to database with application status
    // 2. Send email notification to your team
    // 3. Send confirmation email to applicant
    // 4. Start the approval process
    // 5. Run credit/compliance checks
    // 6. Integrate with CRM/workflow system

    return NextResponse.json(
      { 
        message: 'Application submitted successfully',
        applicationRef,
        status: 'submitted',
        estimatedReviewTime: '24 hours'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Application submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}