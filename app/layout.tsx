import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TONVEMBULL - Lock in on TON in October',
  description: 'TONVEMBULL is a revolutionary token on TON Blockchain with unique airdrop system and liquidity.',
  keywords: 'TONVEMBULL, TON, blockchain, token, airdrop, DeFi',
  authors: [{ name: 'TONVEMBULL Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
