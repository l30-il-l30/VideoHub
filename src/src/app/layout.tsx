import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: [ "latin" ] })

export const metadata: Metadata = {
    title: "Family Video Sharing",
    description: "Share videos with your family members",
}

export default function RootLayout({children,}: Readonly<{children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={ `${inter.className} dark` }>
                { children }
                <Toaster />
            </body>
        </html>
    )
}