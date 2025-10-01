import { Resend } from 'resend'
import { type NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
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
    if (!agentName || !companyName || !email || !phone || !propertyAddress || !salePrice || !commissionRate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Calculate values for display
    const totalCommission = (Number.parseFloat(salePrice) * Number.parseFloat(commissionRate)) / 100
    const agentCommissionAmount = commissionAmount || ((totalCommission * Number.parseFloat(agentShare || '100')) / 100)

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Agents Capital Applications <onboarding@resend.dev>',
      to: ['brannancoady@gmail.com'],
      subject: `New Commission Advance Application - ${agentName} (${companyName})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a; border-bottom: 2px solid #16a34a; padding-bottom: 10px;">
            New Commission Advance Application
          </h2>

          <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">
              🏠 Application Summary
            </h3>
            <p><strong>Applicant:</strong> ${agentName} (${userType === 'broker' ? 'Broker' : 'Estate Agent'})</p>
            <p><strong>Company:</strong> ${companyName}</p>
            <p><strong>Commission Amount:</strong> £${Number.parseFloat(agentCommissionAmount).toLocaleString()}</p>
            <p><strong>Property Value:</strong> £${Number.parseFloat(salePrice).toLocaleString()}</p>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">👤 Agent Details</h3>
            <p><strong>Name:</strong> ${agentName}</p>
            <p><strong>Company:</strong> ${companyName}</p>
            <p><strong>Business Type:</strong> ${userType === 'broker' ? 'Broker (20% discount applicable)' : 'Estate Agent'}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            ${licenseNumber ? `<p><strong>License Number:</strong> ${licenseNumber}</p>` : ''}
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">🏡 Property Details</h3>
            <p><strong>Property Address:</strong></p>
            <div style="background-color: white; padding: 10px; border-radius: 4px; margin: 5px 0;">
              ${propertyAddress.replace(/\n/g, '<br>')}
            </div>
            <p><strong>Sale Price:</strong> £${Number.parseFloat(salePrice).toLocaleString()}</p>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">💰 Commission Breakdown</h3>
            <p><strong>Commission Rate:</strong> ${commissionRate}%</p>
            <p><strong>Total Commission:</strong> £${totalCommission.toLocaleString()}</p>
            <p><strong>Agent's Share:</strong> ${agentShare || '100'}%</p>
            <p><strong>Agent's Commission Amount:</strong> £${Number.parseFloat(agentCommissionAmount).toLocaleString()}</p>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">📅 Timeline</h3>
            <p><strong>Expected Exchange Date:</strong> ${expectedExchangeDate ? new Date(expectedExchangeDate).toLocaleDateString('en-GB') : 'Not specified'}</p>
            <p><strong>Expected Completion Date:</strong> ${expectedCompletionDate ? new Date(expectedCompletionDate).toLocaleDateString('en-GB') : 'Not specified'}</p>
          </div>

          ${additionalNotes ? `
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">📝 Additional Notes</h3>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #16a34a;">
              ${additionalNotes.replace(/\n/g, '<br>')}
            </div>
          </div>
          ` : ''}

          <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">⚡ Next Steps</h3>
            <ul style="margin: 0; padding-left: 20px;">
              <li>Review application details above</li>
              <li>Conduct credit/risk assessment if required</li>
              <li>Send approval/decline notification within 24 hours</li>
              <li>If approved, set up advance agreement for exchange</li>
            </ul>
          </div>

          <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
            <p style="margin: 0; font-size: 14px; color: #856404;">
              <strong>⏰ Response Time Commitment:</strong> The website promises same-day approval.
              Please prioritize this application and respond within 24 hours.
            </p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">

          <p style="font-size: 12px; color: #888; text-align: center;">
            Agents Capital Ltd - Commission Advance Application<br>
            Application Reference: AC-${Date.now().toString().slice(-6)}<br>
            Unit 1 Syds Quay, Eel Pie Island, Twickenham TW1 3DY
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        message: 'Application submitted successfully',
        id: data?.id,
        reference: `AC-${Date.now().toString().slice(-6)}`
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Application form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
