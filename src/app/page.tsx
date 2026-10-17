import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Code2, Presentation, UsersRound } from 'lucide-react'
import EventCard from '@/components/events/EventCard'
import { COMMUNITY_URL, eventDate, getGdgData } from '@/lib/gdg'

export default async function HomePage() {
    const { chapter, upcoming, past } = await getGdgData()
    const spotlight = upcoming[0] || past[0]
    const visibleEvents = (upcoming.length ? upcoming : past).slice(0, 3)

    return (
        <>
            <section className="hero">
                <div className="site-container hero-grid">
                    <div className="hero-copy">
                        <span className="eyebrow">Koper, Slovenia · Since 2021</span>
                        <h1>Code. <span className="blue">Connect.</span><br /><span className="red">Create.</span> Together.</h1>
                        <p className="hero-lede">The student tech community at the University of Primorska. Come for the workshops, stay for the people—and leave with something you built.</p>
                        <div className="hero-actions">
                            <Link href="/events" className="button button--primary">Explore events <ArrowRight size={18} /></Link>
                            <a href={COMMUNITY_URL} target="_blank" rel="noreferrer" className="button button--secondary">Join the community <ArrowUpRight size={18} /></a>
                        </div>
                        <div className="hero-note">
                            <span className="avatar-stack" aria-hidden="true"><span /><span /><span /><span /></span>
                            <span>Join {chapter.memberCount}+ students, builders, and curious minds</span>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="hero-code-chip"><i /> Everyone in tech is welcome</div>
                        <div className="hero-photo">
                            <Image src={spotlight.banner || chapter.banner} alt="GDG on Campus event artwork" fill priority sizes="(max-width: 980px) 90vw, 44vw" />
                            <div className="hero-photo__caption">
                                <span>{upcoming.length ? 'Next up' : 'Latest event'} · {eventDate(spotlight)}</span>
                                <strong>{spotlight.title}</strong>
                            </div>
                        </div>
                        <div className="hero-badge"><strong>{past.length}+</strong><span>events &<br />counting</span></div>
                    </div>
                </div>
            </section>

            <div className="color-strip" aria-label="Community values">
                <span>Learn</span><span>Build</span><span>Share</span><span>Belong</span>
            </div>

            <section className="section section--soft">
                <div className="site-container">
                    <div className="section-heading">
                        <div><span className="eyebrow">On the calendar</span><h2>{upcoming.length ? 'See you at the next one.' : 'The next idea starts here.'}</h2></div>
                        <p>Our official event feed is synced here. Browse what is coming up, revisit past sessions, and save announced events straight to Google Calendar.</p>
                    </div>
                    {!upcoming.length && (
                        <div className="empty-calendar">
                            <div className="calendar-date-block"><span>Next</span><strong>?</strong></div>
                            <div><h3>No event announced—yet.</h3><p>Have a workshop, talk, or build night in mind? Pitch it to the team and help shape the calendar.</p></div>
                            <a href="mailto:gdgoncampus.up@gmail.com?subject=Event%20idea%20for%20GDG%20on%20Campus%20UP" className="button button--primary">Suggest an event</a>
                        </div>
                    )}
                    <div className="event-grid">
                        {visibleEvents.map((event) => <EventCard key={event.id} event={event} />)}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="site-container">
                    <div className="section-heading">
                        <div><span className="eyebrow">Made for students</span><h2>More than another lecture.</h2></div>
                        <p>Hands-on, open, and welcoming to every field of study. You do not need to arrive as an expert—curiosity is enough.</p>
                    </div>
                    <div className="program-grid">
                        <article className="program-card"><span className="program-card__number">01</span><span className="program-icon"><Presentation size={25} /></span><h3>Learn by doing</h3><p>Workshops, study jams, and practical talks turn unfamiliar technology into something you can use.</p></article>
                        <article className="program-card"><span className="program-card__number">02</span><span className="program-icon"><Code2 size={25} /></span><h3>Build together</h3><p>Hackathons, competitive programming, and collaborative sessions make ideas tangible.</p></article>
                        <article className="program-card"><span className="program-card__number">03</span><span className="program-icon"><UsersRound size={25} /></span><h3>Find your people</h3><p>Meet peers, mentors, speakers, and future collaborators from across the University of Primorska.</p></article>
                    </div>
                </div>
            </section>

            <section className="section section--soft">
                <div className="site-container">
                    <div className="section-heading">
                        <div><span className="eyebrow">The community in numbers</span><h2>Small enough to know people. Big enough to make things happen.</h2></div>
                    </div>
                    <div className="stats-row">
                        <div className="stat"><strong>{chapter.memberCount}+</strong><span>Official community members</span></div>
                        <div className="stat"><strong>{past.length}+</strong><span>Published events</span></div>
                        <div className="stat"><strong>2021</strong><span>Founded at UP</span></div>
                        <div className="stat"><strong>All</strong><span>Fields and skill levels welcome</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="site-container">
                    <div className="cta-panel">
                        <div><h2>Bring your curiosity. We’ll bring the community.</h2><p>Join free, hear about the next event first, and build your place in tech.</p></div>
                        <a href={COMMUNITY_URL} target="_blank" rel="noreferrer" className="button button--white">Join GDG on Campus <ArrowUpRight size={18} /></a>
                    </div>
                </div>
            </section>
        </>
    )
}
