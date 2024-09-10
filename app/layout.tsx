import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import '@/styles/globals.css'

const cairo = Cairo({ subsets: ['arabic'] })

export const metadata: Metadata = {
  title: 'مدونة أنس',
  description: 'استكشف الأفكار والرؤى حول التكنولوجيا والحياة',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  )
}