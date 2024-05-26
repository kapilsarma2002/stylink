import type { Metadata } from 'next'
import NavBar from '@/components/navbar'
import { Inter } from 'next/font/google'
import './globals.css'
import { NextUIProvider } from '@nextui-org/react'


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
          {/* <NavBar /> */}
          <NextUIProvider>{children}</NextUIProvider>
        </div>
      </body>
    </html>
  )
}
