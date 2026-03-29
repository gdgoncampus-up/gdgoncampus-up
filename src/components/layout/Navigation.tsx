'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils/helpers'

interface NavigationProps {
    mobile?: boolean
    onNavigate?: () => void
}

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/partners', label: 'Partners' },
    { href: '/team', label: 'Team' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
]

export default function Navigation({ mobile = false, onNavigate }: NavigationProps) {
    const pathname = usePathname()

    return (
        <nav>
            <ul className={cn(
                mobile
                    ? 'flex flex-col space-y-2'
                    : 'flex items-center space-x-8'
            )}>
                {navLinks.map((link) => {
                    const isActive = pathname === link.href

                    return (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                onClick={onNavigate}
                                className={cn(
                                    'relative font-medium transition-colors',
                                    mobile ? 'block py-2 px-4 rounded-lg' : 'py-2',
                                    isActive
                                        ? 'text-google-blue'
                                        : 'text-gray-300 hover:text-white',
                                    mobile && isActive && 'bg-dark-700'
                                )}
                            >
                                {link.label}
                                {!mobile && isActive && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-google-blue" />
                                )}
                            </Link>
                        </li>
                    )
                })}

                {/* CTA Button */}
                <li className={mobile ? 'pt-4' : ''}>
                    <Link
                        href="https://gdg.community.dev/gdg-on-campus-university-of-primorska-koper-slovenia/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            'inline-flex items-center justify-center px-6 py-2.5 rounded-lg font-medium transition-all',
                            'bg-google-blue hover:bg-google-blue/90',
                            'text-white shadow-lg shadow-google-blue/25',
                            mobile && 'w-full'
                        )}
                        onClick={onNavigate}
                    >
                        Join Community
                    </Link>
                </li>
            </ul>
        </nav>
    )
}