import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const CHAPTER_URL =
    'https://gdg.community.dev/gdg-on-campus-university-of-primorska-koper-slovenia/'
const OUTPUT_FILE = 'src/lib/data/gdg-events.json'
const TIMEZONE = 'Europe/Ljubljana'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outputPath = path.join(rootDir, OUTPUT_FILE)
const origin = new URL(CHAPTER_URL).origin

const text = (value) => (typeof value === 'string' ? value.replace(/\s+/g, ' ').trim() : '')

const stripHtml = (value) =>
    text(
        value
            .replace(/<script[\s\S]*?<\/script>/gi, ' ')
            .replace(/<style[\s\S]*?<\/style>/gi, ' ')
            .replace(/<[^>]+>/g, ' ')
    )

const resolveUrl = (value) =>
    value ? new URL(value.replace(/^http:\/\/testserver/, origin), origin).toString() : ''

function formatDateTime(value) {
    if (!value) {
        return { date: '', time: '', iso: '' }
    }

    const date = new Date(value)

    if (Number.isNaN(date.getTime())) {
        return { date: '', time: '', iso: value }
    }

    const parts = new Intl.DateTimeFormat('en-CA', {
        timeZone: TIMEZONE,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23',
    }).formatToParts(date)
    const byType = Object.fromEntries(parts.map((part) => [part.type, part.value]))

    return {
        date: `${byType.year}-${byType.month}-${byType.day}`,
        time: `${byType.hour}:${byType.minute}`,
        iso: date.toISOString(),
    }
}

function inferType(event) {
    const haystack = `${event.title} ${event.description}`.toLowerCase()

    if (haystack.includes('hackathon')) return 'Hackathon'
    if (haystack.includes('workshop')) return 'Workshop'
    if (haystack.includes('training') || haystack.includes('study')) return 'Study Group'
    if (haystack.includes('party') || haystack.includes('network')) return 'Social'

    return 'Talk'
}

function normalizeEvent(event) {
    const start = formatDateTime(event.start_date)
    const url = resolveUrl(event.url || event.cohost_registration_url)
    const sourceId = url.split('/events/details/')[1]?.replace(/\/$/, '') || text(event.title)
    const normalized = {
        source: 'gdg.community.dev',
        sourceId,
        title: text(event.title),
        description: stripHtml(event.description || event.description_short || ''),
        date: start.date,
        time: start.time,
        startsAt: start.iso,
        endsAt: '',
        timezone: TIMEZONE,
        location: '',
        type: 'Talk',
        tags: [],
        image: text(event.cropped_picture_url || event.cropped_banner_url),
        registrationLink: url,
        isPast: start.iso ? new Date(start.iso).getTime() < Date.now() : true,
        fetchedAt: new Date().toISOString(),
    }

    return { ...normalized, type: inferType(normalized) }
}

function extractNextData(html) {
    const marker = '<script id="__NEXT_DATA__" type="application/json">'
    const start = html.indexOf(marker)
    const end = html.indexOf('</script>', start)

    if (start === -1 || end === -1) {
        throw new Error('Could not find __NEXT_DATA__ in GDG page HTML.')
    }

    return JSON.parse(html.slice(start + marker.length, end))
}

async function fetchJson(url) {
    const response = await fetch(url, {
        headers: {
            accept: 'application/json',
            'user-agent': 'gdgoncampus-up event sync',
        },
    })

    if (!response.ok) {
        throw new Error(`GDG API request failed: ${response.status} ${response.statusText}`)
    }

    return response.json()
}

async function fetchPastEventPages(firstPage) {
    const events = [...(firstPage?.results ?? [])]
    let nextUrl = resolveUrl(firstPage?.links?.next)

    while (nextUrl) {
        const page = await fetchJson(nextUrl)

        events.push(...(page.results ?? []))
        nextUrl = resolveUrl(page.links?.next)
    }

    return events
}

async function readExistingEvents() {
    try {
        return JSON.parse(await readFile(outputPath, 'utf8'))
    } catch (error) {
        if (error.code === 'ENOENT') return []
        throw error
    }
}

function mergeEvents(freshEvents, existingEvents) {
    const byKey = new Map()

    for (const event of [...existingEvents, ...freshEvents]) {
        const key = event.sourceId || event.registrationLink || `${event.title}|${event.date}`
        byKey.set(key, event)
    }

    return [...byKey.values()].sort((a, b) =>
        String(b.startsAt || b.date).localeCompare(String(a.startsAt || a.date))
    )
}

async function syncEvents() {
    const pageHtml = await fetch(CHAPTER_URL, {
        headers: {
            accept: 'text/html',
            'user-agent': 'gdgoncampus-up event sync',
        },
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`GDG page request failed: ${response.status} ${response.statusText}`)
        }

        return response.text()
    })
    const pageProps = extractNextData(pageHtml).props?.pageProps
    const firstPastEventsPage = pageProps?.prerenderData?.pastEvents

    if (!firstPastEventsPage?.results?.length) {
        throw new Error('No past events were found in the GDG page data.')
    }

    const freshEvents = (await fetchPastEventPages(firstPastEventsPage)).map(normalizeEvent)
    const mergedEvents = mergeEvents(freshEvents, await readExistingEvents())

    await mkdir(path.dirname(outputPath), { recursive: true })
    await writeFile(outputPath, `${JSON.stringify(mergedEvents, null, 2)}\n`, 'utf8')

    console.log(`Synced ${freshEvents.length} events from GDG page.`)
    console.log(`Stored ${mergedEvents.length} total events in ${OUTPUT_FILE}.`)
}

syncEvents().catch((error) => {
    console.error(error.message)
    process.exitCode = 1
})
