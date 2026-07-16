'use client'

import { motion } from 'framer-motion'
import { BookOpen, Video, Link as LinkIcon, Award } from 'lucide-react'

const resourceCategories = [
    {
        icon: BookOpen,
        title: 'Learning Materials',
        description: 'Tutorials, guides, and documentation',
        color: 'text-google-blue',
        items: [
            { name: 'Android Development', url: 'https://developer.android.com' },
            { name: 'Flutter Documentation', url: 'https://flutter.dev' },
            { name: 'Firebase Guides', url: 'https://firebase.google.com' },
        ]
    },
    {
        icon: Video,
        title: 'Workshop Recordings',
        description: 'Past event videos and presentations',
        color: 'text-google-red',
        items: [
            { name: 'Coming soon...', url: '#' },
        ]
    },
    {
        icon: LinkIcon,
        title: 'Useful Links',
        description: 'Tools and platforms we recommend',
        color: 'text-google-yellow',
        items: [
            { name: 'GitHub Student Pack', url: 'https://education.github.com/pack' },
            { name: 'Google Cloud Credits', url: 'https://cloud.google.com/edu' },
        ]
    },
    {
        icon: Award,
        title: 'Certifications',
        description: 'Get certified in Google technologies',
        color: 'text-google-green',
        items: [
            { name: 'Google Cloud Certifications', url: 'https://cloud.google.com/certification' },
            { name: 'Android Developer', url: 'https://developers.google.com/certification' },
        ]
    },
]

export default function ResourcesPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold mb-4 terminal-prompt">
                        Resources
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Curated learning materials, tools, and resources to help you grow as a developer.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {resourceCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-dark-800 rounded-2xl border border-dark-700 p-8"
                        >
                            <div className="flex items-start mb-6">
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-dark-700 mr-4 ${category.color}`}>
                                    <category.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                                    <p className="text-gray-400">{category.description}</p>
                                </div>
                            </div>

                            <ul className="space-y-3">
                                {category.items.map((item, i) => (
                                    <li key={i}>
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-gray-300 hover:text-google-blue transition-colors group"
                                        >
                                            <span className="mr-2 text-gray-600 group-hover:text-google-blue">→</span>
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center bg-gradient-to-r from-google-blue/10 to-google-green/10 rounded-2xl p-12 border border-google-blue/20"
                >
                    <h3 className="text-3xl font-bold mb-4">Have a resource to share?</h3>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                        Know of great learning materials or tools? Let us know and we{"'"}ll add them!
                    </p>
                    <a
                        href="mailto:gdgoncampus.up@gmail.com"
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-google-blue hover:bg-google-blue/90 text-white font-semibold transition-all"
                    >
                        Submit Resource
                    </a>
                </motion.div>
            </div>
        </div>
    )
}