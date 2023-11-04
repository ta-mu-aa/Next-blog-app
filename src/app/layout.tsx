import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'next-blog-app',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="jp">
      <body className="container mx-auto bg-slate-700 text-slate-50">
        <Header/>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  )
}
