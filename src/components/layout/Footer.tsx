import Link from 'next/link'
import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import GdgMark from '@/components/ui/GdgMark'
import { COMMUNITY_URL } from '@/lib/gdg'

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link href="/" className="brand">
                            <GdgMark className="brand-mark" />
                            <span className="brand-copy">
                                <strong>GDG on Campus</strong>
                                <span>University of Primorska</span>
                            </span>
                        </Link>
                        <p>A student-led community in Koper where curious people connect, learn new skills, and build things together.</p>
                        <div className="footer-socials">
                            <a href="https://instagram.com/gdgoncampus.up" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
                            <a href="https://www.linkedin.com/company/gdgoncampus-up" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
                            <a href="https://github.com/gdgoncampus-up" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
                            <a href="mailto:gdgoncampus.up@gmail.com" aria-label="Email"><Mail size={18} /></a>
                        </div>
                    </div>
                    <div className="footer-column">
                        <h3>Explore</h3>
                        <Link href="/events">Events</Link>
                        <Link href="/team">People</Link>
                        <Link href="/gallery">Gallery</Link>
                        <Link href="/about">About us</Link>
                    </div>
                    <div className="footer-column">
                        <h3>Connect</h3>
                        <a href={COMMUNITY_URL} target="_blank" rel="noreferrer">Official GDG page</a>
                        <a href="https://developers.google.com/community/gdg" target="_blank" rel="noreferrer">About GDG</a>
                        <a href="https://www.famnit.upr.si/en/" target="_blank" rel="noreferrer">UP FAMNIT</a>
                        <a href="mailto:gdgoncampus.up@gmail.com">Contact the team</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>© {new Date().getFullYear()} GDG on Campus University of Primorska</span>
                    <span>Independent Google Developer Group chapter · Koper, Slovenia</span>
                </div>
            </div>
        </footer>
    )
}
