import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Adil Rehman - Web - Portfolio',
    description: 'Adil Rehman website portfolio',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body >{children}</body>
        </html>
    )
}
