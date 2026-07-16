'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils/helpers'

type Theme = 'light' | 'dark'

function getSystemTheme(): Theme {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
    document.documentElement.dataset.theme = theme
}

export default function ThemeToggle({ mobile = false }: { mobile?: boolean }) {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === 'undefined') {
            return 'light'
        }

        const savedTheme = localStorage.getItem('theme')

        return savedTheme === 'light' || savedTheme === 'dark'
            ? savedTheme
            : getSystemTheme()
    })

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')

        if (savedTheme === 'light' || savedTheme === 'dark') {
            applyTheme(savedTheme)
            return
        }

        const media = window.matchMedia('(prefers-color-scheme: dark)')
        const syncSystemTheme = () => {
            const systemTheme = getSystemTheme()
            document.documentElement.removeAttribute('data-theme')
            setTheme(systemTheme)
        }

        syncSystemTheme()
        media.addEventListener('change', syncSystemTheme)

        return () => media.removeEventListener('change', syncSystemTheme)
    }, [])

    const toggleTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark'

        localStorage.setItem('theme', nextTheme)
        applyTheme(nextTheme)
        setTheme(nextTheme)
    }

    const isDark = theme === 'dark'

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className={cn(
                'inline-flex h-[42px] w-[42px] items-center justify-center rounded-lg border border-dark-700 bg-dark-800 text-foreground transition-colors hover:bg-dark-700',
                mobile && 'mt-2'
            )}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        >
            {isDark ? (
                <Sun className="h-5 w-5" strokeWidth={2} />
            ) : (
                <Moon className="h-5 w-5" strokeWidth={2} />
            )}
        </button>
    )
}