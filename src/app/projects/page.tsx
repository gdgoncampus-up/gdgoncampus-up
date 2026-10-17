import type { Metadata } from 'next'
import { Github, Lightbulb, Mail } from 'lucide-react'

export const metadata: Metadata = { title: 'Projects' }

export default function ProjectsPage() {
    return (
        <>
            <section className="page-hero"><div className="site-container page-hero__inner"><div><span className="eyebrow">Made by the community</span><h1>Ideas deserve somewhere to grow.</h1><p>This is the future home for hackathon prototypes, open-source contributions, and student projects built within the community.</p></div></div></section>
            <section className="section"><div className="site-container simple-grid">
                <article className="simple-card"><Lightbulb size={28} color="#fbbc04" /><h3>Show your work</h3><p>Share a project built at an event, for a class, or simply because you wanted it to exist.</p></article>
                <article className="simple-card"><Github size={28} color="#4285f4" /><h3>Build in public</h3><p>Community repositories make it easier to find collaborators and learn from each other.</p></article>
                <article className="simple-card"><Mail size={28} color="#34a853" /><h3>Submit a project</h3><p>Email the team with your link, a short description, and the names of the contributors.</p><a className="text-link" style={{ marginTop: 20 }} href="mailto:gdgoncampus.up@gmail.com?subject=Community%20project%20submission">Send a project</a></article>
            </div></section>
        </>
    )
}
