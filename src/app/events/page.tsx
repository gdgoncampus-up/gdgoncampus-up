'use client'

import { useState } from 'react'
import { Calendar, MapPin, Clock, ArrowRight, Filter } from 'lucide-react'
import { motion } from 'framer-motion'
import { events } from '@/lib/data/events'
import { formatDate } from '@/lib/utils/helpers'
import Link from 'next/link'

export default function EventsPage() {
    const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all')
    const [typeFilter, setTypeFilter] = useState<string>('all')

    const upcomingEvents = events.filter(e => !e.isPast)
    const pastEvents = events.filter(e => e.isPast)

    const filteredEvents = filter === 'all'
        ? events
        : filter === 'upcoming'
            ? upcomingEvents
            : pastEvents

    const finalEvents = typeFilter === 'all'
        ? filteredEvents
        : filteredEvents.filter(e => e.type === typeFilter)

    const eventTypes = ['all', ...Array.from(new Set(events.map(e => e.type)))]

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl font-bold mb-4 terminal-prompt">
                        Events
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Join our workshops, talks, and community gatherings to learn, network, and grow together.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                >
                    <div className="bg-dark-800 rounded-xl p-6 text-center border border-dark-700">
                        <div className="text-3xl font-bold text-google-blue mb-2">{events.length}</div>
                        <div className="text-sm text-gray-400">Total Events</div>
                    </div>
                    <div className="bg-dark-800 rounded-xl p-6 text-center border border-dark-700">
                        <div className="text-3xl font-bold text-google-green mb-2">{upcomingEvents.length}</div>
                        <div className="text-sm text-gray-400">Upcoming</div>
                    </div>
                    <div className="bg-dark-800 rounded-xl p-6 text-center border border-dark-700">
                        <div className="text-3xl font-bold text-google-yellow mb-2">{pastEvents.length}</div>
                        <div className="text-sm text-gray-400">Past Events</div>
                    </div>
                    <div className="bg-dark-800 rounded-xl p-6 text-center border border-dark-700">
                        <div className="text-3xl font-bold text-google-red mb-2">282+</div>
                        <div className="text-sm text-gray-400">Members</div>
                    </div>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                        {/* Time Filter */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => setFilter('all')}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                    filter === 'all'
                                        ? 'bg-google-blue text-white'
                                        : 'bg-dark-800 text-gray-400 hover:text-white border border-dark-700'
                                }`}
                            >
                                All Events
                            </button>
                            <button
                                onClick={() => setFilter('upcoming')}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                    filter === 'upcoming'
                                        ? 'bg-google-green text-white'
                                        : 'bg-dark-800 text-gray-400 hover:text-white border border-dark-700'
                                }`}
                            >
                                Upcoming
                            </button>
                            <button
                                onClick={() => setFilter('past')}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                    filter === 'past'
                                        ? 'bg-google-yellow text-dark-900'
                                        : 'bg-dark-800 text-gray-400 hover:text-white border border-dark-700'
                                }`}
                            >
                                Past
                            </button>
                        </div>

                        {/* Type Filter */}
                        <div className="flex items-center gap-2">
                            <Filter className="w-5 h-5 text-gray-400" />
                            <select
                                value={typeFilter}
                                onChange={(e) => setTypeFilter(e.target.value)}
                                className="bg-dark-800 border border-dark-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-google-blue"
                            >
                                {eventTypes.map(type => (
                                    <option key={type} value={type}>
                                        {type === 'all' ? 'All Types' : type}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </motion.div>

                {/* Events Grid */}
                {finalEvents.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <Calendar className="w-20 h-20 mx-auto mb-4 text-gray-600" />
                        <h3 className="text-2xl font-bold mb-2">No Events Found</h3>
                        <p className="text-gray-400">Try adjusting your filters</p>
                    </motion.div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {finalEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="group bg-dark-800 rounded-2xl border border-dark-700 overflow-hidden hover:border-google-blue transition-all"
                            >
                                {/* Event Image Placeholder */}
                                <div className="aspect-video bg-gradient-to-br from-google-blue/20 via-google-red/20 to-google-yellow/20 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Calendar className="w-20 h-20 text-white/10" />
                                    </div>
                                    {event.isPast && (
                                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-dark-900/80 text-gray-400 text-sm font-medium">
                                            Past Event
                                        </div>
                                    )}
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-google-blue text-white text-sm font-medium">
                                        {event.type}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-google-blue transition-colors line-clamp-2">
                                        {event.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                        {event.description}
                                    </p>

                                    <div className="space-y-2 text-sm text-gray-400 mb-4">
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-2 text-google-blue shrink-0" />
                                            {formatDate(event.date)}
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="w-4 h-4 mr-2 text-google-green shrink-0" />
                                            {event.time}
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin className="w-4 h-4 mr-2 text-google-red shrink-0" />
                                            <span className="line-clamp-1">{event.location}</span>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {event.tags.slice(0, 3).map(tag => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 text-xs rounded-md bg-dark-700 text-gray-300"
                                            >
                        {tag}
                      </span>
                                        ))}
                                    </div>

                                    {event.registrationLink && !event.isPast && (
                                        <Link
                                            href={event.registrationLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-google-blue hover:text-google-blue/80 font-medium group/link"
                                        >
                                            Register Now
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 text-center bg-gradient-to-r from-google-blue/10 to-google-red/10 rounded-2xl p-12 border border-google-blue/20"
                >
                    <h3 className="text-3xl font-bold mb-4">Want to stay updated?</h3>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                        Follow us on Instagram and join our Bevy community to get notified about upcoming events.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="https://instagram.com/gdgoncampus.up"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-google-red hover:bg-google-red/90 text-white font-semibold transition-all"
                        >
                            Follow on Instagram
                        </Link>
                        <Link
                            href="https://gdg.community.dev/gdg-on-campus-university-of-primorska-koper-slovenia/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-google-blue text-google-blue hover:bg-google-blue hover:text-white font-semibold transition-all"
                        >
                            Join on Bevy
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}