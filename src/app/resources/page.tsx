import type { Metadata } from 'next'
import { ArrowUpRight, BookOpen, Cloud, Code2 } from 'lucide-react'

export const metadata: Metadata = { title: 'Resources' }

const resources = [
    { icon: Code2, title: 'Build for the web', text: 'Guides, references, and learning paths from Google for web developers.', href: 'https://web.dev/learn/' },
    { icon: Cloud, title: 'Explore Google Cloud', text: 'Hands-on learning paths for cloud, data, AI, and infrastructure.', href: 'https://www.cloudskillsboost.google/' },
    { icon: BookOpen, title: 'Google for Developers', text: 'Documentation and resources across Android, Firebase, Flutter, and more.', href: 'https://developers.google.com/' },
]

export default function ResourcesPage() {
    return (
        <>
            <section className="page-hero"><div className="site-container page-hero__inner"><div><span className="eyebrow">Keep learning</span><h1>A useful place to start.</h1><p>Official learning material for the tools and technologies that often show up in our workshops and projects.</p></div></div></section>
            <section className="section"><div className="site-container simple-grid">
                {resources.map((resource) => <a className="simple-card" key={resource.title} href={resource.href} target="_blank" rel="noreferrer"><resource.icon size={27} color="#4285f4" /><h3>{resource.title}</h3><p>{resource.text}</p><span className="text-link" style={{ marginTop: 20 }}>Open resource <ArrowUpRight size={17} /></span></a>)}
            </div></section>
        </>
    )
}
