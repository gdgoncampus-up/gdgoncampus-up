import type { Metadata } from 'next'
import { ArrowUpRight, Heart, Lightbulb, Network, Sprout } from 'lucide-react'
import { COMMUNITY_URL, getGdgData } from '@/lib/gdg'

export const metadata: Metadata = {
    title: 'About',
    description: 'Learn about the mission and story of GDG on Campus University of Primorska in Koper.',
}

const values = [
    { icon: Network, title: 'Connect', text: 'Create relationships that continue beyond one class, event, or academic year.' },
    { icon: Sprout, title: 'Learn', text: 'Make technical growth practical, peer-led, and comfortable for beginners.' },
    { icon: Lightbulb, title: 'Create', text: 'Turn ideas into prototypes, projects, talks, and useful experiences.' },
    { icon: Heart, title: 'Include', text: 'Welcome students from every faculty, field, identity, and skill level.' },
]

export default async function AboutPage() {
    const { chapter, past } = await getGdgData()

    return (
        <>
            <section className="page-hero">
                <div className="site-container page-hero__inner">
                    <div>
                        <span className="eyebrow">Our story</span>
                        <h1>Tech feels better when nobody learns alone.</h1>
                        <p>GDG on Campus University of Primorska is a peer-to-peer learning community founded in Koper in 2021.</p>
                    </div>
                    <div className="page-hero__aside">
                        <div className="mini-stat"><strong>2021</strong><span>Founded</span></div>
                        <div className="mini-stat"><strong>{chapter.memberCount}+</strong><span>Members</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="site-container story-grid">
                    <div><span className="eyebrow">Why we exist</span><h2>From campus curiosity to real-world confidence.</h2></div>
                    <div className="story-copy">
                        <p>We started with a simple hope: build a strong technical community at the University of Primorska. A place where students can learn new skills, meet people with similar interests, and grow together.</p>
                        <p>Today that happens through workshops, seminars, speakers, study sessions, hackathons, and social events. The format changes, but the goal stays the same—help students improve their skills, careers, and networks.</p>
                        <p>You do not need to study computer science or arrive with experience. If you are interested in technology, you belong here.</p>
                        <a href={COMMUNITY_URL} target="_blank" rel="noreferrer" className="text-link">Read our official chapter profile <ArrowUpRight size={17} /></a>
                    </div>
                </div>
            </section>

            <section className="section section--soft">
                <div className="site-container">
                    <div className="section-heading"><div><span className="eyebrow">What guides us</span><h2>Four verbs. One community.</h2></div></div>
                    <div className="values-grid">
                        {values.map((value) => <article className="value-card" key={value.title}><value.icon size={27} /><h3>{value.title}</h3><p>{value.text}</p></article>)}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="site-container">
                    <div className="stats-row">
                        <div className="stat"><strong>{chapter.city}</strong><span>Our home by the Adriatic</span></div>
                        <div className="stat"><strong>{past.length}+</strong><span>Official events published</span></div>
                        <div className="stat"><strong>UP</strong><span>University of Primorska</span></div>
                        <div className="stat"><strong>Free</strong><span>Community membership</span></div>
                    </div>
                </div>
            </section>

            <section className="section section--soft">
                <div className="site-container">
                    <div className="cta-panel">
                        <div><h2>Let’s connect, learn, and grow together.</h2><p>Follow the chapter, join the next event, or tell us what you want to learn.</p></div>
                        <a href={COMMUNITY_URL} target="_blank" rel="noreferrer" className="button button--white">Become a member <ArrowUpRight size={18} /></a>
                    </div>
                </div>
            </section>
        </>
    )
}
