import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Agents Capital - Commission Advance for UK Estate Agents",
  description: "Get your commission at exchange, not completion. Fast, flexible commission advance for UK estate agents and brokerages. Apply in minutes, get approved same day.",
  keywords: "commission advance, estate agent funding, property commission, UK estate agents, commission finance, cash flow, property finance",
  authors: [{ name: "Agents Capital" }],
  creator: "Agents Capital",
  publisher: "Agents Capital Ltd",
  metadataBase: new URL('https://agentscapital.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Agents Capital - Commission Advance for UK Estate Agents",
    description: "Get your commission at exchange, not completion. Fast, flexible commission advance for UK estate agents and brokerages.",
    url: 'https://agentscapital.co.uk',
    siteName: 'Agents Capital',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agents Capital - Commission Advance for UK Estate Agents",
    description: "Get your commission at exchange, not completion. Fast, flexible commission advance for UK estate agents and brokerages.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}