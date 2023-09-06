import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header } from '@src/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coffee Delivery',
  description: 'Loja especializada em café',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
