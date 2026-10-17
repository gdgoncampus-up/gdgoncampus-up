import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import EventExplorer from '@/components/events/EventExplorer'
import { COMMUNITY_URL, getGdgData } from '@/lib/gdg'

export const metadata: Metadata = {
    title: 'Events',
    description: 'Browse upcoming and past GDG on Campus University of Primorska events, and add the next event to Google Calendar.',
}

export default async function EventsPage() {
    const { chapter, upcoming, past } = await getGdgData()

    return (
        <>
            <section className="page-hero">
                <div className="site-container page-hero__inner">
                    <div>
                        <span className="eyebrow">Workshops · Talks · Hackathons</span>
                        <h1>Events made to move you forward.</h1>
                        <p>Every official chapter event, in one place. Filter the archive by year, open full event details, or add an upcoming session directly to Google Calendar.</p>
                    </div>
                    <div className="page-hero__aside">
                        <div className="mini-stat"><strong>{upcoming.length}</strong><span>Upcoming</span></div>
                        <div className="mini-stat"><strong>{past.length}</strong><span>In the archive</span></div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="site-container">
                    {!upcoming.length && (
                        <div className="empty-calendar">
                            <div className="calendar-date-block"><span>Next</span><strong>?</strong></div>
                            <div><h3>The calendar is open.</h3><p>No future event is published on the official GDG page yet. Join the chapter to be notified when the next one lands.</p></div>
                            <a href={COMMUNITY_URL} target="_blank" rel="noreferrer" className="button button--primary">Follow updates <ArrowUpRight size={17} /></a>
                        </div>
                    )}
                    <EventExplorer upcoming={upcoming} past={past} />
                </div>
            </section>
            <section className="section section--soft">
                <div className="site-container">
                    <div className="cta-panel">
                        <div><h2>Your idea could be the next event.</h2><p>Propose a topic, volunteer as a speaker, or help us organize on campus.</p></div>
                        <a href={`mailto:gdgoncampus.up@gmail.com?subject=Event%20idea%20for%20${encodeURIComponent(chapter.title)}`} className="button button--white">Pitch an event</a>
                    </div>
                </div>
            </section>
        </>
    )
}
