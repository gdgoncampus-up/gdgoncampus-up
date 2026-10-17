import type { Metadata } from 'next'
import { ArrowUpRight, Building2, GraduationCap, Handshake } from 'lucide-react'

export const metadata: Metadata = { title: 'Partners' }

const partners = [
    { icon: GraduationCap, name: 'UP FAMNIT', text: 'Our academic home at the University of Primorska.', href: 'https://www.famnit.upr.si/en/' },
    { icon: Building2, name: 'FAMNIT Student Council', text: 'Supporting student life, initiatives, and community on campus.', href: 'https://www.famnit.upr.si/sl/studenti/studentski-svet' },
    { icon: Handshake, name: 'Studo', text: 'A student platform connecting university communities.', href: 'https://studo.com' },
]

export default function PartnersPage() {
    return (
        <>
            <section className="page-hero"><div className="site-container page-hero__inner"><div><span className="eyebrow">Better together</span><h1>Partners who help ideas leave the room.</h1><p>Academic and community partners make it possible to create bigger, more useful experiences for students.</p></div></div></section>
            <section className="section"><div className="site-container simple-grid">
                {partners.map((partner) => <a className="simple-card" key={partner.name} href={partner.href} target="_blank" rel="noreferrer"><partner.icon size={28} color="#4285f4" /><h3>{partner.name}</h3><p>{partner.text}</p><span className="text-link" style={{ marginTop: 20 }}>Visit website <ArrowUpRight size={17} /></span></a>)}
            </div></section>
            <section className="section section--soft"><div className="site-container"><div className="cta-panel"><div><h2>Help students build what comes next.</h2><p>Offer a speaker, challenge, venue, mentorship, or practical support.</p></div><a href="mailto:gdgoncampus.up@gmail.com?subject=Partnership%20with%20GDG%20on%20Campus%20UP" className="button button--white">Become a partner</a></div></div></section>
        </>
    )
}
