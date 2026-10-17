'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Navigation from './Navigation'
import GdgMark from '@/components/ui/GdgMark'
import { COMMUNITY_URL } from '@/lib/gdg'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 10)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
            <div className="site-container">
                <div className="header-inner">
                    <Link href="/" className="brand" onClick={() => setIsOpen(false)} aria-label="GDG on Campus UP home">
                        <GdgMark className="brand-mark" />
                        <span className="brand-copy">
                            <strong>GDG on Campus</strong>
                            <span>University of Primorska</span>
                        </span>
                    </Link>
                    <div className="desktop-nav">
                        <Navigation />
                        <a className="nav-join" href={COMMUNITY_URL} target="_blank" rel="noreferrer">
                            Join us <ArrowUpRight size={16} />
                        </a>
                    </div>
                    <button className="menu-toggle" onClick={() => setIsOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={isOpen}>
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
                {isOpen && (
                    <div className="mobile-nav">
                        <Navigation onNavigate={() => setIsOpen(false)} />
                        <a className="nav-join" href={COMMUNITY_URL} target="_blank" rel="noreferrer">
                            Join the community <ArrowUpRight size={16} />
                        </a>
                    </div>
                )}
            </div>
        </header>
    )
}
