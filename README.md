# Agents Capital Website

A Next.js application for real estate agents to access commission advances and financial services.

## Features

- 🏠 Commission advance applications
- 📞 Contact and support forms  
- 💼 Business information and pricing
- 📱 Responsive design with shadcn/ui components
- ✉️ Email integration with Resend API

## Deployment

This site is configured for Netlify deployment with:
- Automatic builds from the main branch
- Next.js plugin for optimal performance
- Bun package manager for fast builds
- Environment variables for API keys

## Environment Variables

Required environment variables for production:
```
RESEND_API_KEY=your_resend_api_key_here
```

## Development

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun build
```

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Forms**: React Hook Form with Zod validation
- **Email**: Resend API for transactional emails
- **Deployment**: Netlify with automatic deployments

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   ├── apply/             # Application form page
│   ├── contact/           # Contact page
│   └── ...                # Other pages
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
└── lib/                  # Utility functions
```

🤖 Generated with [Same](https://same.new)