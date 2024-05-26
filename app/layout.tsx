import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NextUIProvider } from '@nextui-org/react'
import Sidebar from '@/components/sidebar'


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
        <div className="text-black z-99 relative h-screen w-screen bg-slate-50">
          <aside className="absolute left-0 top-0 w-[200px] h-full">
            <Sidebar />
          </aside>
          <main className="w-[calc(100vw-200px)] h-full ml-[200px]">
            <div className="p-3 h-full w-full">
              <div className="rounded-lg border w-full h-full bg-white">
                <NextUIProvider>{children}</NextUIProvider>
              </div>
            </div>
          </main>{' '}
        </div>
      </body>
    </html>
  )
}
