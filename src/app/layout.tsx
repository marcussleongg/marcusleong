import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { EB_Garamond } from 'next/font/google'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marcus Leong',
}

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-eb-garamond',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`min-h-screen ${ebGaramond.variable}`}>
        <ThemeProvider>
          <main className="md:p-12">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}