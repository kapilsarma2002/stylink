import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { HeroHighlight } from '@/components/hero'
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import './globals.css'
import NavBar from '@/components/navbar'

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
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <HeroHighlight>
            <div className="z-99 h-screen overflow-hidden">
              <NavBar />
              {children}
            </div>
          </HeroHighlight>
        </body>
      </html>
    </ClerkProvider>
  )
}
