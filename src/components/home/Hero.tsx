'use client'

import Link from 'next/link'
import {ArrowRight, Calendar, Users} from 'lucide-react'
import {motion} from 'framer-motion'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-linear-to-br from-google-blue/10 via-google-red/10 to-google-yellow/10 animate-gradient"/>
                <div
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-google-blue/20 via-dark-900 to-dark-900"/>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(#4285F4 1px, transparent 1px), linear-gradient(90deg, #4285F4 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}/>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        <div
                            className="inline-flex items-center px-4 py-2 rounded-full bg-google-blue/10 border border-google-blue/20 mb-6">
                            <span className="text-google-blue text-sm font-medium">
                                Founded in 2021
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.1}}
                    >
                        <span className="block font-mono text-google-blue">&lt;</span>
                        <span className="block text-gradient">Google Developer Group</span>
                        <span className="block font-mono text-google-red">on Campus</span>
                        {/*<span className="block font-mono text-google-blue">/&gt;</span>*/}
                    </motion.h1>

                    <motion.p
                        className="text-xl sm:text-2xl text-gray-300 mb-4"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                    >
                        University of Primorska
                    </motion.p>

                    <motion.h1
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.1}}
                    >
                        <span className="block font-mono text-google-blue">/&gt;</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.3}}
                    >
                        A peer-to-peer learning environment where students connect, learn, and grow together.
                        Join our community of 282+ developers building the future.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.4}}
                    >
                        <Link
                            href="/events"
                            className="inline-flex items-center px-8 py-4 rounded-lg bg-google-blue hover:bg-google-blue/90 text-white font-semibold transition-all shadow-lg shadow-google-blue/25 group w-full sm:w-auto justify-center"
                        >
                            <Calendar className="w-5 h-5 mr-2"/>
                            View Events
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"/>
                        </Link>

                        <Link
                            href="https://gdg.community.dev/gdg-on-campus-university-of-primorska-koper-slovenia/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-google-green text-google-green hover:bg-google-green hover:text-dark-900 font-semibold transition-all w-full sm:w-auto justify-center"
                        >
                            <Users className="w-5 h-5 mr-2"/>
                            Join Community
                        </Link>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="mt-16"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.5, delay: 0.6}}
                    >
                        <div className="inline-flex flex-col items-center">
                            <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
                            <div
                                className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
                                <motion.div
                                    className="w-1.5 h-1.5 bg-google-blue rounded-full"
                                    animate={{y: [0, 12, 0]}}
                                    transition={{duration: 1.5, repeat: Infinity}}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}