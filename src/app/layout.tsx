import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
    title: 'GDG on Campus - University of Primorska',
    description: 'Google Developer Group on Campus at University of Primorska, Koper, Slovenia. Join our community of student developers!',
    keywords: ['GDG', 'GDG on Campus', 'Google Developer Group', 'University of Primorska', 'FAMNIT', 'Student Community', 'Tech Events'],
    icons: {
        icon: '/favicon/gdg_upr.png',
        shortcut: '/favicon/gdg_upr.png',
        apple: '/favicon/gdg_upr.png',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
            <body>
                <Header />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}