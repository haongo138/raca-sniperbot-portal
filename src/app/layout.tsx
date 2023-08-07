import './globals.css'
import './marquee.css'
import "tw-elements/dist/css/tw-elements.min.css";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raca Sniper Bot - Sniper Bot with surrrounding utilities',
  description: 'Next-level Sniper Bot with surrrounding utilities',
  keywords: ['web3', 'sniper bot', 'raca'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
