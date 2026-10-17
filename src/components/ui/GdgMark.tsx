type GdgMarkProps = {
    className?: string
}

export default function GdgMark({ className = '' }: GdgMarkProps) {
    return (
        <svg className={className} viewBox="0 0 72 36" fill="none" aria-hidden="true">
            <path d="M27 5 8 18l19 13" stroke="#4285F4" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="m45 5 19 13-19 13" stroke="#EA4335" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="m42 4-12 28" stroke="#FBBC04" strokeWidth="7" strokeLinecap="round" />
            <path d="m30 32 4-9" stroke="#34A853" strokeWidth="7" strokeLinecap="round" />
        </svg>
    )
}
