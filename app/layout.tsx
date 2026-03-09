import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "HexRot Protocol - The Meme Brain of DeFi",
  description:
    "HexRot Protocol: Builder-first DeFi ecosystem on Gorbagana Chain. AI-powered tools, meme generators, on-chain scanners, and chaos-driven innovation for 0-dollar founders.",
  icons: { icon: "/images/hexrot-logo.jpeg" },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-mono antialiased`}
        style={{ background: "#000000" }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
