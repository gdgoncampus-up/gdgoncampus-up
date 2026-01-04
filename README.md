# GDG on Campus University of Primorska Website

A modern, developer‑focused website for **GDG on Campus – University of Primorska**, built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.  

The project is designed to be fast, accessible, visually engaging, and easy for contributors to extend.

---

## ✨ Overview

This website serves as the central hub for:

- Community events
- Team information
- Projects and collaborations
- Blog posts and resources
- GDG on Campus activities at the University of Primorska

It is built with a clean, terminal‑inspired UI using Google Developer brand colors and modern frontend tooling.

---

## 🚀 Features
- **Modern Design**: Terminal-inspired aesthetic with Google Developer brand colors
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Built with Next.js 14 App Router for optimal performance
- **Animated**: Smooth animations with Framer Motion
- **Type Safe**: Full TypeScript support
- **SEO Friendly**: Optimized metadata and semantic HTML

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **Next.js 14 (App Router)** – server components, routing, metadata, performance

### **Language**
- **TypeScript** – full type safety across the project

### **Styling**
- **Tailwind CSS** – utility‑first styling
- **Tailwind Merge + clsx** – clean class composition
- **Custom Google Developer color palette**

### **Animations**
- **Framer Motion** – smooth, modern animations

### **Icons**
- **Lucide React** – lightweight, customizable icons

### **Content**
- Static TypeScript data files (`lib/data/*.ts`)
- Easily replaceable with a CMS in the future

### **Deployment**
- **Vercel** (recommended)
- Supports Netlify, Railway, AWS Amplify, or custom hosting

---

## 📁 Project Structure

```
gdg-primorska/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── about/
│   ├── events/
│   ├── team/
│   ├── projects/
│   └── blog/
├── components/
│   ├── layout/
│   ├── home/
│   └── ui/
├── lib/
│   ├── data/
│   └── utils/
├── public/
│   ├── images/
│   ├── team/
│   └── events/
└── types/
```

This structure follows Next.js 14 best practices and keeps components modular and maintainable.

---

## 🛠️ Getting Started

### **Prerequisites**
- Node.js **18+**
- npm or yarn
- Git

### **Installation**

```bash
git clone https://github.com/gdgoncampus-up/gdgoncampus-up.git
cd gdgoncampus-up
npm install
npm run dev
```

> Visit: http://localhost:3000

---

## 📄 Pages Overview

### ✅ **Completed Pages**
1. **Homepage (`/`)**
   - Hero section with animated background
   - Community stats
   - Upcoming events carousel
   - Tech stack showcase
2. **Events Page (`/events`)**
   - Event filtering (upcoming/past, by type)
   - Event cards with details
   - Registration links
3. **Team Page (`/team`)**
   - Team member profiles
   - Social media links
   - Join team CTA
4. Projects Page (`/projects`)
   - Showcase community projects
   - GitHub integration
   - Project filters and search
5. Blog Page (`/blog`)
   - Tech articles
   - Event recaps
   - Tutorials
6. About Page (`/about`)
   - Mission and vision 
   - History
   - Partners
   - Contact information

Each page is built as a standalone route under `app/`.

### 🚧 To Be Implemented
1. Resources Page (`/resources`)
   - Learning materials
   - Workshop recordings
   - Useful links
2. Contact page (`/contact`)
   - Contact form
   - Social media links
   - Location map
3. Newsletter subscription
4. Dark mode toggle
5. ... and more!

---

## 🎨 Customization

### **Colors**
The project uses Google Developer brand colors defined in `tailwind.config.ts`:

```json
google: {
  blue: '#4285F4',
  red: '#EA4335',
  yellow: '#FBBC04',
  green: '#34A853',
}
```

### **Fonts**
Two font families are used:
- **JetBrains Mono**: For code-like elements (headers, terminals)
- **Inter**: For body text and general content

### **Adding Events**
Edit `lib/data/events.ts`.

```json
{
  id: 'unique-id',
  title: 'Event Title',
  description: 'Event description',
  date: '2026-01-15',
  time: '18:00',
  location: 'FAMNIT',
  type: 'Workshop',
  image: '/events/event-image.jpg',
  registrationLink: 'https://...',
  tags: ['Tag1', 'Tag2'],
  isPast: false,
}
```

### **Adding Team Members**
Edit `lib/data/team.ts`.

```json
{
  id: 'unique-id',
  name: 'Full Name',
  role: 'Position',
  company: 'Company Name (optional)',
  image: '/team/photo.jpg',
  github: 'https://github.com/username',
  linkedin: 'https://linkedin.com/in/username',
}
```

---

## 🔧 🔧 Available Scripts

```bash
npm run dev     # Start development server
npm run build   # Production build
npm start       # Run production server
npm run lint    # Lint code
```

---

## 📦 Deployment

### **Vercel (Recommended)**
1. Push to GitHub
2. Import repo on [Vercel](https://vercel.com)
3. Deploy instantly

### **Other Platforms**
The site can be deployed on:
- Netlify
- Railway
- AWS Amplify
- Custom server

---

## 🌐 Environment Variables

Create a `.env.local` file for sensitive data:

```shell
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Email (optional)
CONTACT_EMAIL=gdgoncampus.up@gmail.com
```

---

## 📝 Content Management Options

### **Current Option: Static Files**
- Static TypeScript files
  - Events and team data in lib/data/*.ts
- Zero backend
- Easy for contributors

### **Future Options: CMS Integration**
- **Contentful**: For blog posts
- **Notion**: For events and resources
- **Strapi**: Self-hosted CMS
- **Sanity**: Real-time collaboration

---

## 🔍 SEO

The project includes:

- Semantic HTML
- Metadata in `layout.tsx`
- OpenGraph tags for social sharing
- Sitemap generation
- Robots.txt

### Adding OpenGraph Images
Create `app/opengraph-image.png` (1200x630px) for social sharing previews.

---

## 📱 Progressive Web App (PWA)
To make the site installable:

```shell
npm install next-pwa
```

Create `next.config.js`:

```typescript
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // your config
})
```

---

## 🐛 Troubleshooting

### Images not loading
Ensure paths start with `/` and files are in `public/`.

### Build errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### TypeScript issues
Ensure all imports match the file structure and TypeScript is configured correctly
Check type definitions in `types/`.

---

## 🤝 Contributing

We welcome contributions from students, developers, and community members!

### **How to contribute**
1. Fork the repository
2. Create a feature branch `git checkout -b feature/my-feature`
3. Commit your changes `git commit -m 'Add amazing feature'`
4. Push the branch `git push origin feature/amazing-feature`
5. Open a Pull Request

### **Guidelines**
- Follow the existing file structure
- Use TypeScript
- Keep components small and reusable
- Use Tailwind for styling
- Write meaningful commit messages

---

## 📧 Contact

- **Email:** [gdgoncampus.up@gmail.com](mailto:gdgoncampus.up@gmail.com)
- **Instagram:** [@gdgoncampus.up](https://www.instagram.com/gdgoncampus.up)
- **Community Page:** https://gdg.community.dev/gdg-on-campus-university-of-primorska-koper-slovenia/

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🙏 Acknowledgments

- Google Developer Groups
- University of Primorska – FAMNIT
- Student Council
- All contributors and community members

---

**Built with ❤️ by GDG on Campus Primorska**  
For questions or support, reach out to the Team Lead & Project Maintainer: [Zhivko Stoimchev](https://github.com/zstoimchev)