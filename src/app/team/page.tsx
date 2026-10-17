import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowUpRight, Mail } from 'lucide-react'
import { getGdgData } from '@/lib/gdg'
import { teamMembers } from '@/lib/data/team'

export const metadata: Metadata = {
    title: 'People',
    description: 'Meet the student team behind GDG on Campus University of Primorska.',
}

export default async function TeamPage() {
    const { chapter, organizers } = await getGdgData()
    const lead = organizers[0]
    const crew = teamMembers.filter((member) => member.name !== lead.name)

    return (
        <>
            <section className="page-hero">
                <div className="site-container page-hero__inner">
                    <div>
                        <span className="eyebrow">The people behind the community</span>
                        <h1>Organized by students. Built for everyone.</h1>
                        <p>Meet the people who turn ideas into workshops, events, visuals, photos, and welcoming rooms across the University of Primorska.</p>
                    </div>
                    <div className="page-hero__aside">
                        <div className="mini-stat"><strong>{teamMembers.length}</strong><span>Community crew</span></div>
                        <div className="mini-stat"><strong>{chapter.memberCount}+</strong><span>Chapter members</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="site-container">
                    <article className="team-lead">
                        <div className="team-lead__image">
                            <Image src={lead.image} alt={lead.name} fill sizes="(max-width: 700px) 90vw, 38vw" priority />
                        </div>
                        <div className="team-lead__content">
                            <span className="eyebrow">Chapter lead</span>
                            <h2>{lead.name}</h2>
                            <span className="team-role">{lead.role}</span>
                            <p>{lead.bio}</p>
                            <a className="button button--primary" href={lead.profileUrl} target="_blank" rel="noreferrer">Official profile <ArrowUpRight size={18} /></a>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section section--soft">
                <div className="site-container">
                    <div className="section-heading">
                        <div><span className="eyebrow">Community crew</span><h2>Many roles. One team.</h2></div>
                        <p>Events come together through communication, design, technology, social media, photography, and plenty of hands-on support.</p>
                    </div>
                    <div className="crew-grid">
                        {crew.map((member) => (
                            <article className="crew-card" key={member.id}>
                                <div className="crew-avatar" aria-hidden="true">{member.name.split(' ').map((part) => part[0]).join('')}</div>
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="site-container">
                    <div className="cta-panel">
                        <div><h2>There is room for your talent, too.</h2><p>Help with an event, take photos, design a post, mentor a team, or bring a completely new idea.</p></div>
                        <a href="mailto:gdgoncampus.up@gmail.com?subject=I%20want%20to%20help%20GDG%20on%20Campus%20UP" className="button button--white"><Mail size={18} /> Join the crew</a>
                    </div>
                </div>
            </section>
        </>
    )
}
