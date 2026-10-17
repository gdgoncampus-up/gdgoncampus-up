'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    { href: '/events', label: 'Events' },
    { href: '/team', label: 'People' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
]

export default function Navigation({ onNavigate }: { onNavigate?: () => void }) {
    const pathname = usePathname()

    return (
        <nav aria-label="Main navigation">
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    onClick={onNavigate}
                    className={`nav-link ${pathname === link.href ? 'is-active' : ''}`}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    )
}
