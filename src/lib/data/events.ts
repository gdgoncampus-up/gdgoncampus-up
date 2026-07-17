import { Event } from '@/types'
import gdgEvents from './gdg-events.json'

const eventTypes = ['Workshop', 'Talk', 'Study Group', 'Hackathon', 'Social'] as const

function toEventType(type: string): Event['type'] {
    return eventTypes.includes(type as Event['type']) ? type as Event['type'] : 'Talk'
}

export const events: Event[] = gdgEvents.map((event) => ({
    id: event.sourceId,
    title: event.title,
    description: event.description,
    date: event.date,
    time: event.time,
    location: event.location || 'FAMNIT, University of Primorska',
    type: toEventType(event.type),
    image: event.image,
    registrationLink: event.registrationLink,
    tags: event.tags,
    isPast: event.isPast,
}))
