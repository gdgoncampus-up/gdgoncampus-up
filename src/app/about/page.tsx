'use client'

import { motion } from 'framer-motion'
import { Users, Target, Heart, Lightbulb } from 'lucide-react'

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold mb-4 terminal-prompt">
                        About GDG Primorska
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Building a thriving tech community at University of Primorska since 2021.
                    </p>
                </motion.div>

                {/* Mission Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="bg-dark-800 rounded-2xl border border-dark-700 p-8 md:p-12">
                        <h2 className="text-3xl font-bold mb-6 text-center terminal-prompt">
                            Our Mission
                        </h2>
                        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
                            Welcome to the official page of GDG On Campus Primorska, founded in 2021 with hopes
                            to build a strong community at our University! We provide a peer-to-peer learning
                            environment for learning new skills and growing as students. We{"'"}re excited to create
                            networking circles and bring fun workshops, seminars and speakers to our members.
                        </p>
                    </div>
                </motion.div>

                {/* Values */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold mb-12 text-center terminal-prompt">
                        Our Values
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Users,
                                title: 'Community First',
                                description: 'Building connections that last beyond university',
                                color: 'text-google-blue'
                            },
                            {
                                icon: Target,
                                title: 'Skill Growth',
                                description: 'Continuous learning through hands-on experience',
                                color: 'text-google-red'
                            },
                            {
                                icon: Heart,
                                title: 'Inclusivity',
                                description: 'Welcoming students from every field',
                                color: 'text-google-yellow'
                            },
                            {
                                icon: Lightbulb,
                                title: 'Innovation',
                                description: 'Encouraging creative problem-solving',
                                color: 'text-google-green'
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-dark-800 rounded-xl border border-dark-700 p-6 text-center"
                            >
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-dark-700 mb-4 ${value.color}`}>
                                    <value.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="text-gray-400">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* What is GDG */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-r from-google-blue/10 to-google-green/10 rounded-2xl border border-google-blue/20 p-8 md:p-12">
                        <h2 className="text-3xl font-bold mb-6 terminal-prompt">
                            What is GDG on Campus?
                        </h2>
                        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                            Google Developer Groups (GDG) on Campus are university-based communities of students
                            interested in Google developer technologies. Students grow their knowledge in a
                            peer-to-peer learning environment and build solutions for local businesses and their
                            community.
                        </p>
                        <a
                            href="https://developers.google.com/community/gdg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-google-blue hover:text-google-blue/80 font-medium"
                        >
                            Learn more about GDG
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </motion.div>

                {/* Partners */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold mb-8 text-center terminal-prompt">
                        Our Partners
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-12">
                        <a
                            href="https://www.famnit.upr.si/en/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl font-semibold text-gray-400 hover:text-foreground transition-colors"
                        >
                            FAMNIT
                        </a>
                        <a
                            href="https://www.famnit.upr.si/sl/studenti/studentski-svet"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl font-semibold text-gray-400 hover:text-foreground transition-colors"
                        >
                            Student Council
                        </a>
                    </div>
                </motion.div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center bg-dark-800 rounded-2xl border border-dark-700 p-12"
                >
                    <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                        Have questions or suggestions? Want to collaborate? We{"'"}d love to hear from you!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:gdgoncampus.up@gmail.com"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-google-blue hover:bg-google-blue/90 text-white font-semibold transition-all"
                        >
                            Email Us
                        </a>
                        <a
                            href="https://instagram.com/gdsc.primorska"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-google-red text-google-red hover:bg-google-red hover:text-white font-semibold transition-all"
                        >
                            Follow on Instagram
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}