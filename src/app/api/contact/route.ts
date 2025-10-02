import { Resend } from 'resend'
import { type NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    // Check if Resend API key is available
    console.log('RESEND_API_KEY present:', !!process.env.RESEND_API_KEY)
    console.log('RESEND_API_KEY length:', process.env.RESEND_API_KEY?.length || 0)

    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY environment variable')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const body = await req.json()
    const { firstName, lastName, email, phone, company, subject, message } = body

    console.log('Form submission data:', { firstName, lastName, email, subject, hasMessage: !!message })

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Agents Capital Website <onboarding@resend.dev>',
      to: ['brannancoady@gmail.com'],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a; border-bottom: 2px solid #16a34a; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Details</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
            ${company ? `<p><strong>Company/Agency:</strong> ${company}</p>` : ''}
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Enquiry Details</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top: 15px;">
              <strong>Message:</strong>
              <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 5px; border-left: 4px solid #16a34a;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>

          <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 14px; color: #555;">
              <strong>Note:</strong> This enquiry was submitted through the Agents Capital website contact form.
              Please respond within 2 hours during business hours as promised on the website.
            </p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">

          <p style="font-size: 12px; color: #888; text-align: center;">
            Agents Capital Ltd - Commission Advance for UK Estate Agents<br>
            Unit 1 Syds Quay, Eel Pie Island, Twickenham TW1 3DY
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error details:', JSON.stringify(error, null, 2))
      console.error('Resend error type:', typeof error)
      console.error('Resend error message:', error.message || error)

      return NextResponse.json(
        {
          error: 'Failed to send email',
          details: error.message || 'Unknown Resend error',
          debugInfo: process.env.NODE_ENV === 'development' ? error : undefined
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    console.error('Error details:', JSON.stringify(error, null, 2))

    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
        debugInfo: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    )
  }
}
