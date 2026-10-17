const CHAPTER_SLUG = 'gdg-on-campus-university-of-primorska-koper-slovenia'
const API_BASE = 'https://gdg.community.dev/api'

export const COMMUNITY_URL = `https://gdg.community.dev/${CHAPTER_SLUG}/`

export type GdgEvent = {
    id: number
    title: string
    description: string
    startDate: string
    endDate: string
    format: 'In person' | 'Virtual' | 'Hybrid'
    image: string
    banner: string
    url: string
    status: 'upcoming' | 'past'
}

export type GdgChapter = {
    title: string
    city: string
    country: string
    memberCount: number
    banner: string
    instagram: string
    linkedin: string
}

export type GdgOrganizer = {
    name: string
    role: string
    bio: string
    image: string
    profileUrl: string
}

type ApiEvent = {
    id: number
    title: string
    description_short?: string
    description?: string
    start_date: string
    end_date: string
    audience_type: 'IN_PERSON' | 'VIRTUAL' | 'HYBRID'
    cropped_picture_url: string
    cropped_banner_url: string
    static_url: string
}

type ApiEventResponse = { results: ApiEvent[] }

type ApiChapter = {
    title: string
    city: string
    country_name: string
    members_count: number
    cropped_banner_url: string
    instagram_handle: string
    linkedin_page: string
}

type ApiTeamMember = {
    title: string
    user: {
        full_name: string
        bio: string
        cropped_avatar_url: string
        profile_url: string
    }
}

const fallbackChapter: GdgChapter = {
    title: 'GDG on Campus University of Primorska',
    city: 'Koper',
    country: 'Slovenia',
    memberCount: 308,
    banner: 'https://res.cloudinary.com/startup-grind/image/fetch/c_scale,w_2560/c_crop,h_650,w_2560,y_0.0_mul_h_sub_0.0_mul_650/c_crop,h_650,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/https://res.cloudinary.com/startup-grind/image/upload/c_fill%2Cdpr_2.0%2Cf_auto%2Cg_center%2Cq_auto:good/v1/gcs/platform-data-goog/chapter_banners/blob_Y7qsGP5',
    instagram: 'gdgoncampus.up',
    linkedin: 'https://www.linkedin.com/company/gdgoncampus-up',
}

const fallbackEvents: GdgEvent[] = [
    {
        id: 128596,
        title: 'Discover GDG on Campus UP at ŠtartUP 2026!',
        description: 'Discover the world of technology with GDG on Campus University of Primorska at ŠtartUP 2026.',
        startDate: '2026-10-10T08:00:00Z',
        endDate: '2026-10-10T14:00:00Z',
        format: 'In person',
        image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/blob_i428zcJ',
        banner: 'https://res.cloudinary.com/startup-grind/image/upload/c_scale,w_2560/c_crop,h_640,w_2560,y_0.0_mul_h_sub_0.0_mul_640/c_crop,h_640,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/event_banners/blob_qac1A9l',
        url: 'https://gdg.community.dev/e/mjmb39/',
        status: 'past',
    },
    {
        id: 126103,
        title: 'FAMNIT HACKATHON 2026',
        description: 'A 24-hour innovation challenge where creativity, technology, and teamwork collide.',
        startDate: '2026-05-16T07:00:00Z',
        endDate: '2026-05-17T15:00:00Z',
        format: 'In person',
        image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/blob_R8oY9rP',
        banner: 'https://res.cloudinary.com/startup-grind/image/upload/c_scale,w_2560/c_crop,h_640,w_2560,y_0.0_mul_h_sub_0.0_mul_640/c_crop,h_640,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/event_banners/blob_33kvAep',
        url: 'https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-primorska-koper-slovenia-presents-famnit-hackathon-2026/',
        status: 'past',
    },
    {
        id: 125274,
        title: 'The first ever FAMNIT LAN Party: 2000s Throwback Edition',
        description: 'A night of local network gaming, open-source collaboration, and campus community.',
        startDate: '2026-03-03T16:00:00Z',
        endDate: '2026-03-03T23:00:00Z',
        format: 'In person',
        image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/blob_fde1Pzq',
        banner: 'https://res.cloudinary.com/startup-grind/image/upload/c_scale,w_2560/c_crop,h_640,w_2560,y_0.0_mul_h_sub_0.0_mul_640/c_crop,h_640,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/event_banners/blob_TLXYUyL',
        url: 'https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-primorska-koper-slovenia-presents-the-first-ever-famnit-lan-party-2000s-throwback-edition/',
        status: 'past',
    },
]

const fallbackOrganizer: GdgOrganizer = {
    name: 'Zhivko Stoimchev',
    role: 'Team Lead',
    bio: 'GDG on Campus Lead, application developer, and SysAdmin & cybersecurity enthusiast helping students find their way in the tech industry.',
    image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_face/c_fill,dpr_2.0,f_auto,g_face,q_auto:good/v1/gcs/platform-data-goog/avatars/zhivko_stoimchev.png',
    profileUrl: 'https://gdg.community.dev/u/mgv68b/',
}

async function fetchJson<T>(path: string): Promise<T> {
    const response = await fetch(`${API_BASE}${path}`, {
        next: { revalidate: 3600 },
        headers: { Accept: 'application/json' },
    })

    if (!response.ok) throw new Error(`GDG API returned ${response.status}`)
    return response.json() as Promise<T>
}

function formatAudience(audience: ApiEvent['audience_type']): GdgEvent['format'] {
    if (audience === 'VIRTUAL') return 'Virtual'
    if (audience === 'HYBRID') return 'Hybrid'
    return 'In person'
}

function plainText(value: string) {
    return value
        .replace(/<[^>]*>/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
}

function normalizeEvent(event: ApiEvent, status: GdgEvent['status']): GdgEvent {
    return {
        id: event.id,
        title: event.title,
        description: plainText(event.description_short || event.description || ''),
        startDate: event.start_date,
        endDate: event.end_date,
        format: formatAudience(event.audience_type),
        image: event.cropped_picture_url,
        banner: event.cropped_banner_url || event.cropped_picture_url,
        url: event.static_url,
        status,
    }
}

export async function getGdgData() {
    try {
        const [chapterData, upcomingData, pastData, teamData] = await Promise.all([
            fetchJson<ApiChapter>(`/chapter_slim/${CHAPTER_SLUG}/`),
            fetchJson<ApiEventResponse>(`/event_slim/for_chapter/2465/?page_size=100&status=Live&order=start_date&include_cohosted_events=true`),
            fetchJson<ApiEventResponse>(`/event_slim/for_chapter/2465/?page_size=100&status=Completed&order=-start_date&include_cohosted_events=true`),
            fetchJson<ApiTeamMember[]>(`/chapter_slim/${CHAPTER_SLUG}/team/`),
        ])

        const chapter: GdgChapter = {
            title: chapterData.title.replace(' - Koper, Slovenia', ''),
            city: chapterData.city,
            country: chapterData.country_name,
            memberCount: chapterData.members_count,
            banner: chapterData.cropped_banner_url,
            instagram: chapterData.instagram_handle,
            linkedin: chapterData.linkedin_page,
        }

        const organizers = teamData.map<GdgOrganizer>((member) => ({
            name: member.user.full_name,
            role: member.title,
            bio: member.user.bio,
            image: member.user.cropped_avatar_url,
            profileUrl: `https://gdg.community.dev${member.user.profile_url}`,
        }))

        const past = pastData.results.map((event) => normalizeEvent(event, 'past'))

        return {
            chapter,
            upcoming: upcomingData.results.map((event) => normalizeEvent(event, 'upcoming')),
            past: past.length ? past : fallbackEvents,
            organizers: organizers.length ? organizers : [fallbackOrganizer],
        }
    } catch {
        return {
            chapter: fallbackChapter,
            upcoming: [] as GdgEvent[],
            past: fallbackEvents,
            organizers: [fallbackOrganizer],
        }
    }
}

export function calendarUrl(event: GdgEvent) {
    const calendarDate = (value: string) => new Date(value).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
    const location = event.format === 'Virtual' ? 'Online' : 'Koper, Slovenia'
    const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: event.title,
        dates: `${calendarDate(event.startDate)}/${calendarDate(event.endDate)}`,
        details: `${event.description}\n\nEvent details: ${event.url}`,
        location,
    })
    return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export function eventDate(event: GdgEvent) {
    return new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        timeZone: 'Europe/Ljubljana',
    }).format(new Date(event.startDate))
}

export function eventTime(event: GdgEvent) {
    return new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Ljubljana',
    }).format(new Date(event.startDate))
}
