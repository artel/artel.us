import './globals.css'
import { Inter } from 'next/font/google'

export const runtime = 'edge' // 'nodejs' (default) | 'edge'

export const metadata = {
  title: 'Vercel Postgres Demo with Kysely',
  description:
    'A simple Next.js app with Vercel Postgres as the database and Kysely as the ORM',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
