import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { DownloadBrochure } from '@/components/download-brochure'

// <CHANGE> Updated to use Inter font for modern, professional look
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
});

// <CHANGE> Updated metadata for A V Tech
export const metadata: Metadata = {
  title: 'A V Tech - Factory Automation & Electrical Control Solutions',
  description: 'Manufacturer, Supplier & System Integrator for Factory Automation, Electrical Panels & Special Purpose Machines. Expert in PLC, SCADA, HMI, VFD, Servo programming.',
  keywords: 'factory automation, electrical panels, PLC programming, SCADA, HMI, VFD, servo, automation nashik, industrial automation',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logos/WhatsApp%20Image%202025-11-21%20at%2019.45.50_779474a4.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
    ],
    apple: '/logos/WhatsApp%20Image%202025-11-21%20at%2019.45.50_779474a4.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          as="video"
          href="/12331860_1920_1080_30fps.mp4"
          type="video/mp4"
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <DownloadBrochure />
        <Analytics />
      </body>
    </html>
  )
}
