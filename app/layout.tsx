import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Barlow } from 'next/font/google'
import SiteFooter from '@/components/site-footer'
import WhatsAppContactButton from '@/components/whatsapp-contact-button'
import './globals.css'

const barlow = Barlow({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.excelengineeringbpl.com'),
  title: 'Excel Engineering',
  description:
    'Specialists in supply, fabrication & erection of heavy steel structures for dams, irrigation networks, metros & major bridges across India.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Excel Engineering',
    title: 'Excel Engineering',
    description:
      'Specialists in supply, fabrication & erection of heavy steel structures for dams, irrigation networks, metros & major bridges across India.',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0e5c3d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${barlow.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Excel Engineering',
              url: 'https://www.excelengineeringbpl.com',
              description:
                'Specialists in supply, fabrication & erection of heavy steel structures for dams, irrigation networks, metros & major bridges across India.',
            }),
          }}
        />
        {children}
        <SiteFooter />
        <WhatsAppContactButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
