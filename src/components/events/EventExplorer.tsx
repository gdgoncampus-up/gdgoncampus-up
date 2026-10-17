'use client'

import { useMemo, useState } from 'react'
import EventCard from './EventCard'
import type { GdgEvent } from '@/lib/gdg'

type EventExplorerProps = {
    upcoming: GdgEvent[]
    past: GdgEvent[]
}

export default function EventExplorer({ upcoming, past }: EventExplorerProps) {
    const [period, setPeriod] = useState<'all' | 'upcoming' | 'past'>('all')
    const [year, setYear] = useState('all')
    const events = useMemo(() => [...upcoming, ...past], [upcoming, past])
    const years = [...new Set(events.map((event) => new Date(event.startDate).getFullYear()))].sort((a, b) => b - a)

    const filtered = useMemo(() => events.filter((event) => {
        const periodMatches = period === 'all' || event.status === period
        const yearMatches = year === 'all' || String(new Date(event.startDate).getFullYear()) === year
        return periodMatches && yearMatches
    }), [events, period, year])

    return (
        <>
            <div className="filters">
                <div className="filter-group" aria-label="Filter events by time">
                    {(['all', 'upcoming', 'past'] as const).map((value) => (
                        <button key={value} className={`filter-button ${period === value ? 'is-active' : ''}`} onClick={() => setPeriod(value)}>
                            {value === 'all' ? `All events (${events.length})` : value === 'upcoming' ? `Upcoming (${upcoming.length})` : `Past (${past.length})`}
                        </button>
                    ))}
                </div>
                <select className="year-select" value={year} onChange={(event) => setYear(event.target.value)} aria-label="Filter events by year">
                    <option value="all">Every year</option>
                    {years.map((value) => <option key={value} value={value}>{value}</option>)}
                </select>
            </div>
            {filtered.length ? (
                <div className="event-grid">{filtered.map((event) => <EventCard key={event.id} event={event} />)}</div>
            ) : (
                <div className="events-empty">No events match these filters. Try another year or view the full archive.</div>
            )}
        </>
    )
}
