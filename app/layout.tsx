import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'

import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/sonner'

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin']
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: "Rajib's Portfolio",
  description: 'This is a developer portfolio website for Arman Hossain Rajib.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          geistSans.variable,
          geistMono.variable,
          playfair.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className='grow'>{children}</main>
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
