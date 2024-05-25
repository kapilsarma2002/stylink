import type { Metadata } from 'next'
import NavBar from '@/components/navbar'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stylink',
  description: 'Link your apparel to your profile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white text-black z-99 h-screen">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  )
}
