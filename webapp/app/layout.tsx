import type React from "react"
import "./globals.css"
import { Inter, Playfair_Display, Nunito_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", display: "swap" })
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`scroll-smooth ${inter.variable} ${playfair.variable} ${nunito.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
