'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

type Partner = {
    id: number
    name: string
    description: string
    website: string
    verifyLink?: string
    logo: string
    type: string
}

const partners: Partner[] = [
    {
        id: 1,
        name: 'Studo',
        description:
            'Studo is a student platform that connects university communities and provides useful tools, news, and services for students.',
        website: 'https://studo.com',
        verifyLink: 'https://studo.com#org=8ccb57fdeb',
        logo: 'https://studo.co/assets/logo/studo_logo_red.png',
        type: 'Platform'
    }
]

export default function PartnersPage() {
    const activePartners = partners

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
                        Partners
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        We collaborate with amazing organizations that support our mission and help grow our community.
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
                        <div className="text-3xl font-bold text-google-blue mb-2">
                            {partners.length}
                        </div>
                        <div className="text-sm text-gray-400">
                            Total Partners
                        </div>
                    </div>

                    <div className="bg-dark-800 rounded-xl p-6 text-center border border-dark-700">
                        <div className="text-3xl font-bold text-google-green mb-2">
                            {activePartners.length}
                        </div>
                        <div className="text-sm text-gray-400">
                            Active Collaborations
                        </div>
                    </div>

                    <div className="bg-dark-800 rounded-xl p-6 text-center border border-dark-700">
                        <div className="text-3xl font-bold text-google-yellow mb-2">
                            0
                        </div>
                        <div className="text-sm text-gray-400">
                            Past Partners
                        </div>
                    </div>

                    <div className="bg-dark-800 rounded-xl p-6 text-center border border-dark-700">
                        <div className="text-3xl font-bold text-google-red mb-2">
                            Growing
                        </div>
                        <div className="text-sm text-gray-400">
                            Network
                        </div>
                    </div>
                </motion.div>

                {/* Partners Grid */}
                {partners.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <h3 className="text-2xl font-bold mb-2">
                            No Partners Yet
                        </h3>
                        <p className="text-gray-400">
                            We are actively looking for partners.
                        </p>
                    </motion.div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={partner.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="group bg-dark-800 rounded-2xl border border-dark-700 overflow-hidden hover:border-google-blue transition-all"
                            >
                                {/* Logo Section */}
                                <div className="aspect-video bg-gradient-to-br from-google-blue/20 via-google-red/20 to-google-yellow/20 flex items-center justify-center p-6 relative">
                                    <img
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        className="max-h-16 object-contain"
                                    />

                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-google-blue text-white text-sm font-medium">
                                        {partner.type}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-google-blue transition-colors">
                                        {partner.name}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-4">
                                        {partner.description}
                                    </p>

                                    {/* Studo Verification */}
                                    {partner.verifyLink && (
                                        <div className="mb-4">
                                            <a
                                                href={partner.verifyLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src={partner.logo}
                                                    alt="Studo Verification"
                                                    style={{ maxWidth: 120 }}
                                                />
                                            </a>
                                        </div>
                                    )}

                                    {/* Website Link */}
                                    <a
                                        href={partner.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-google-blue hover:text-google-blue/80 font-medium"
                                    >
                                        Visit Website
                                        <ExternalLink className="w-4 h-4 ml-2" />
                                    </a>
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
                    <h3 className="text-3xl font-bold mb-4">
                        Become a Partner
                    </h3>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                        Interested in collaborating with us? Let’s build something amazing together and support students in their journey.
                    </p>

                    <a
                        href="mailto:your@email.com"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-google-blue hover:bg-google-blue/90 text-white font-semibold transition-all"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </div>
        </div>
    )
}