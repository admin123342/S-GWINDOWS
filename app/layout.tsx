import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Suspense } from "react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SGWindows - Soluciones en Vidrio, Aluminio y Acero",
  description:
    "Fabricación, instalación y mantenimiento de fachadas, ventanas, puertas, cerramientos, divisiones, barandas y pasamanos. Cobertura nacional en Colombia.",
  keywords: "vidrio arquitectónico, aluminio, acero, fachadas, ventanas, puertas, cerramientos, Colombia",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
