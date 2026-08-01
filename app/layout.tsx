import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

const SITE_URL = 'https://trackspire.eu';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Trackspire — Privacy-First Web Analytics',
    template: '%s — Trackspire',
  },
  description: 'Open-source, privacy-first web analytics. No cookies, no fingerprinting, no personal data. GDPR compliant out of the box. Embed in 30 seconds.',
  keywords: ['web analytics', 'privacy analytics', 'GDPR analytics', 'cookie-free analytics', 'open source analytics', 'no cookies', 'trackspire'],
  authors: [{ name: 'Luka Dev Studio', url: SITE_URL }],
  creator: 'Luka Dev Studio',
  publisher: 'Luka Dev Studio',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Trackspire',
    title: 'Trackspire — Privacy-First Web Analytics',
    description: 'Open-source, privacy-first web analytics. No cookies, no fingerprinting, GDPR compliant. Embed in 30 seconds.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Trackspire — Privacy-First Web Analytics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trackspire — Privacy-First Web Analytics',
    description: 'Open-source, privacy-first web analytics. No cookies, no fingerprinting, GDPR compliant. Embed in 30 seconds.',
    images: ['/og-image.png'],
    creator: '@trackspire',
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        {process.env.NODE_ENV === 'production' && (
          <Script
            defer
            data-site-id="6"
            src="https://api.trackspire.eu/script.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}
