import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { EB_Garamond } from 'next/font/google'

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
      <body className={`min-h-screen ${ebGaramond.variable}`}>
        <ThemeProvider>
          <main className="[@media(hover:hover)]:p-12 [@media(hover:none)]:p-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}