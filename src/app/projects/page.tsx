'use client'

import { motion } from 'framer-motion'

export default function ProjectsPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold mb-4 terminal-prompt">
                        Projects
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Explore projects built by our community members. From hackathons to personal initiatives.
                    </p>
                </motion.div>

                <div className="text-center py-20">
                    <p className="text-gray-400 mb-4">Coming soon! We{"'"}re collecting amazing projects from our community.</p>
                    <a
                        href="mailto:gdgoncampus.up@gmail.com"
                        className="text-google-blue hover:text-google-blue/80"
                    >
                        Submit your project
                    </a>
                </div>
            </div>
        </div>
    )
}