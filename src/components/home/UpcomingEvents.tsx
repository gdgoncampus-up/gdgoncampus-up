'use client'

import Link from 'next/link'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { events } from '@/lib/data/events'
import { formatDate } from '@/lib/utils/helpers'

export default function UpcomingEvents() {
    const upcomingEvents = events.filter(e => !e.isPast).slice(0, 3)

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4 terminal-prompt">
                        Upcoming Events
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Join us for workshops, talks, and networking opportunities designed to help you grow as a developer.
                    </p>
                </motion.div>

                {upcomingEvents.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center py-12 bg-dark-800 rounded-2xl border border-dark-700"
                    >
                        <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                        <h3 className="text-xl font-semibold mb-2">No Upcoming Events</h3>
                        <p className="text-gray-400 mb-6">Check back soon for our next event!</p>
                        <Link
                            href="/events"
                            className="inline-flex items-center text-google-blue hover:text-google-blue/80 font-medium"
                        >
                            View Past Events
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </motion.div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {upcomingEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-dark-800 rounded-2xl border border-dark-700 overflow-hidden hover:border-google-blue transition-all"
                            >
                                <div className="aspect-video bg-gradient-to-br from-google-blue/20 to-google-red/20 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Calendar className="w-16 h-16 text-white/20" />
                                    </div>
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-google-blue text-white text-sm font-medium">
                                        {event.type}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-google-blue transition-colors">
                                        {event.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                        {event.description}
                                    </p>

                                    <div className="space-y-2 text-sm text-gray-400">
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-2 text-google-blue" />
                                            {formatDate(event.date)} • {event.time}
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin className="w-4 h-4 mr-2 text-google-red" />
                                            {event.location}
                                        </div>
                                    </div>

                                    {event.registrationLink && (
                                        <Link
                                            href={event.registrationLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 inline-flex items-center text-google-blue hover:text-google-blue/80 font-medium group/link"
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

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/events"
                        className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-google-blue text-google-blue hover:bg-google-blue hover:text-white font-semibold transition-all"
                    >
                        View All Events
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}