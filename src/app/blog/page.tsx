import type { Metadata } from 'next'
import { FileText, Mail, Sparkles } from 'lucide-react'

export const metadata: Metadata = { title: 'Stories' }

export default function BlogPage() {
    return (
        <>
            <section className="page-hero"><div className="site-container page-hero__inner"><div><span className="eyebrow">Stories and notes</span><h1>What we learned, while it is still fresh.</h1><p>Event recaps, technical walkthroughs, and honest notes from projects will live here.</p></div></div></section>
            <section className="section"><div className="site-container simple-grid">
                <article className="simple-card"><FileText size={28} color="#4285f4" /><h3>Event recaps</h3><p>Short summaries, resources, and takeaways from sessions on campus.</p></article>
                <article className="simple-card"><Sparkles size={28} color="#ea4335" /><h3>Student voices</h3><p>A place for first projects, hard-won lessons, and useful discoveries.</p></article>
                <article className="simple-card"><Mail size={28} color="#34a853" /><h3>Write with us</h3><p>You do not need to be an expert to share something useful.</p><a className="text-link" style={{ marginTop: 20 }} href="mailto:gdgoncampus.up@gmail.com?subject=Story%20idea">Pitch a story</a></article>
            </div></section>
        </>
    )
}
