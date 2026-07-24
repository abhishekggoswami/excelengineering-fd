import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Barlow } from 'next/font/google'
import SiteFooter from '@/components/site-footer'
import GlobalSectionEyebrowAnimation from '@/components/global-section-eyebrow-animation'
import './globals.css'

const barlow = Barlow({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Excel Engineering Construction',
  description:
    'Excel Engineering — Premier infrastructure contractor specializing in dam construction, fabrication works, irrigation projects, and crane services.',
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
        {children}
        <GlobalSectionEyebrowAnimation />
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
