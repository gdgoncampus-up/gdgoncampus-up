import Link from 'next/link'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-dark-800 border-t border-dark-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* About Section */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-mono font-bold mb-4">
                            <span className="text-google-blue">&lt;</span>
                            <span className="text-white">GDG Primorska</span>
                            <span className="text-google-red"> /&gt;</span>
                        </h3>
                        <p className="text-gray-400 mb-4 max-w-md">
                            A peer-to-peer learning environment for students at University of Primorska.
                            Join us to learn new skills, network, and grow together.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://instagram.com/gdgoncampus.up"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-dark-700 hover:bg-google-red transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://github.com/gdgoncampus-up"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-dark-700 hover:bg-google-blue transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:gdgoncampus.up@gmail.com"
                                className="p-2 rounded-lg bg-dark-700 hover:bg-google-yellow transition-colors"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4 terminal-prompt">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Events', 'Team', 'Projects', 'Blog', 'About'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase()}`}
                                        className="text-gray-400 hover:text-google-blue transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-semibold mb-4 terminal-prompt">Resources</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://developers.google.com/community/gdg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-google-green transition-colors"
                                >
                                    About GDG
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://gdg.community.dev/gdg-on-campus-university-of-primorska-koper-slovenia/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-google-green transition-colors"
                                >
                                    Bevy Community
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="/resources"
                                    className="text-gray-400 hover:text-google-green transition-colors"
                                >
                                    Learning Materials
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Partners */}
                <div className="border-t border-dark-700 pt-8 mb-8">
                    <h4 className="font-semibold mb-4 text-center terminal-prompt">Partners</h4>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        <a
                            href="https://www.famnit.upr.si/en/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            FAMNIT
                        </a>
                        <span className="text-dark-600">|</span>
                        <a
                            href="https://www.famnit.upr.si/sl/studenti/studentski-svet"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Student Council
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-dark-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
                    <p>© {currentYear} GDG on Campus University of Primorska. All rights reserved.</p>
                    <p className="mt-2 sm:mt-0">
                        Built with ❤️ by the GDG Team
                    </p>
                </div>
            </div>
        </footer>
    )
}