import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { HeroHighlight } from '@/components/ui/hero'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stylink',
  description: 'Link your apparel to your profile',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeroHighlight>
          <div className="z-99">
            {children}
          </div>
        </HeroHighlight>
      </body>
    </html>
  )
}
