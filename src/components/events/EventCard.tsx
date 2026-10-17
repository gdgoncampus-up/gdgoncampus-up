import Image from 'next/image'
import { ArrowUpRight, CalendarDays, Clock3, MapPin, Plus } from 'lucide-react'
import { calendarUrl, eventDate, eventTime, type GdgEvent } from '@/lib/gdg'

type EventCardProps = {
    event: GdgEvent
    featured?: boolean
}

export default function EventCard({ event, featured = false }: EventCardProps) {
    return (
        <article className={`event-card ${featured ? 'event-card--featured' : ''}`}>
            <a className="event-card__media" href={event.url} target="_blank" rel="noreferrer" aria-label={`View ${event.title}`}>
                <Image src={event.banner || event.image} alt="" fill sizes={featured ? '(max-width: 900px) 100vw, 60vw' : '(max-width: 700px) 100vw, 33vw'} />
                <span className={`event-card__status event-card__status--${event.status}`}>
                    {event.status === 'upcoming' ? 'Coming up' : event.format}
                </span>
            </a>
            <div className="event-card__body">
                <div className="event-card__meta">
                    <span><CalendarDays size={16} />{eventDate(event)}</span>
                    <span><Clock3 size={16} />{eventTime(event)}</span>
                    <span><MapPin size={16} />{event.format}</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="event-card__actions">
                    <a className="text-link" href={event.url} target="_blank" rel="noreferrer">
                        Event details <ArrowUpRight size={17} />
                    </a>
                    {event.status === 'upcoming' && (
                        <a className="calendar-link" href={calendarUrl(event)} target="_blank" rel="noreferrer">
                            <Plus size={16} /> Google Calendar
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}
