'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { teamMembers } from '@/lib/data/team'
import Image from 'next/image'

export default function TeamPage() {
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
                        Meet Our Team
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        The passionate individuals driving GDG Primorska forward. Together, we{"'"}re building a thriving tech community.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="group bg-dark-800 rounded-2xl border border-dark-700 overflow-hidden hover:border-google-blue transition-all"
                        >
                            {/* Avatar */}
                            <div className="aspect-square bg-gradient-to-br from-google-blue/20 via-google-red/20 to-google-yellow/20 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-32 h-32 rounded-full bg-dark-700 flex items-center justify-center text-4xl font-bold text-google-blue">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                </div>
                                {/* Uncomment when you have images:
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                */}
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-1 group-hover:text-google-blue transition-colors">
                                    {member.name}
                                </h3>
                                <div className="text-google-blue font-medium mb-1">
                                    {member.role}
                                </div>
                                {member.company && (
                                    <div className="text-sm text-gray-400 mb-4">
                                        {member.company}
                                    </div>
                                )}

                                {/* Social Links */}
                                {(member.github || member.linkedin) && (
                                    <div className="flex gap-2 mt-4">
                                        {member.github && (
                                            <a
                                                href={member.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg bg-dark-700 hover:bg-google-blue transition-colors"
                                                aria-label="GitHub"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        {member.linkedin && (
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg bg-dark-700 hover:bg-google-blue transition-colors"
                                                aria-label="LinkedIn"
                                            >
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Join CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center bg-gradient-to-r from-google-green/10 to-google-blue/10 rounded-2xl p-12 border border-google-green/20"
                >
                    <h3 className="text-3xl font-bold mb-4">Want to Join the Team?</h3>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                        We{"'"}re always looking for passionate students to help grow our community.
                        Reach out to us if you{"'"}d like to get involved!
                    </p>
                    <a
                        href="mailto:gdgoncampus.up@gmail.com"
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-google-green hover:bg-google-green/90 text-white font-semibold transition-all"
                    >
                        <Mail className="w-5 h-5 mr-2" />
                        Contact Us
                    </a>
                </motion.div>
            </div>
        </div>
    )
}