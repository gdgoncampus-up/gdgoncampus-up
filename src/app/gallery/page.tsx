import type { Metadata } from 'next'
import Image from 'next/image'
import { Camera, Mail } from 'lucide-react'
import { eventDate, getGdgData } from '@/lib/gdg'

export const metadata: Metadata = {
    title: 'Gallery',
    description: 'A visual archive of GDG on Campus University of Primorska events.',
}

export default async function GalleryPage() {
    const { past } = await getGdgData()
    const images = past.slice(0, 9)

    return (
        <>
            <section className="page-hero">
                <div className="site-container page-hero__inner">
                    <div>
                        <span className="eyebrow">Community snapshots</span>
                        <h1>The ideas, energy, and people behind every event.</h1>
                        <p>This visual archive begins with official event artwork. Event photo albums can plug into the same page as the community collection grows.</p>
                    </div>
                    <div className="page-hero__aside">
                        <div className="mini-stat"><strong>{images.length}</strong><span>Recent moments</span></div>
                        <div className="mini-stat"><strong><Camera size={25} /></strong><span>More coming</span></div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="site-container">
                    <div className="gallery-grid">
                        {images.map((event) => (
                            <a className="gallery-item" key={event.id} href={event.url} target="_blank" rel="noreferrer">
                                <Image src={event.banner || event.image} alt={`${event.title} event artwork`} fill sizes="(max-width: 700px) 100vw, 50vw" />
                                <span className="gallery-item__overlay"><span>{eventDate(event)}</span><strong>{event.title}</strong></span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section section--soft">
                <div className="site-container">
                    <div className="cta-panel">
                        <div><h2>Have photos from an event?</h2><p>Send the team a link to your album. A shared Google Photos workflow can be connected here next.</p></div>
                        <a href="mailto:gdgoncampus.up@gmail.com?subject=Event%20photos%20for%20the%20GDG%20gallery" className="button button--white"><Mail size={18} /> Share photos</a>
                    </div>
                </div>
            </section>
        </>
    )
}
