import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
    metadataBase: new URL('https://gdgoncampus-up.vercel.app'),
    title: {
        default: 'GDG on Campus — University of Primorska',
        template: '%s · GDG on Campus UP',
    },
    description: 'The student developer community at the University of Primorska in Koper, Slovenia. Explore events, meet the team, and join the community.',
    keywords: ['GDG on Campus', 'University of Primorska', 'Koper', 'FAMNIT', 'student developers', 'tech events'],
    openGraph: {
        title: 'GDG on Campus — University of Primorska',
        description: 'Connect, learn, and build with the student developer community in Koper.',
        type: 'website',
        locale: 'en_SI',
    },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={inter.variable}>
            <body>
                <Header />
                <main className="site-main">{children}</main>
                <Footer />
            </body>
        </html>
    )
}
