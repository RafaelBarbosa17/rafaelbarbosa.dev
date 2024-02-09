import './globals.css'
import type { Metadata } from 'next'
import { Inter, Rowdies } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter' 
})

const rowdies = Rowdies({
  subsets: ['latin'],
  weight: ["300", "400", "700"],
  variable: '--font-rowdies',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Desenvolvedor | Rafael Barbosa',
  description: 'Olá eu sou Rafael Barbosa, Desenvolvedor Front-end.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" as='image'/>
      </head>
      <body className={`${inter.variable} ${rowdies.variable} bg-[#C2C6E3] overflow-x-hidden`}>{children}</body>
    </html>
  )
}
