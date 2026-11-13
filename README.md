# Proofdesk — Cinematic Premium SaaS Landing Page

A complete frontend assignment for Sankar Group built with React + Vite + CSS (no TypeScript, no Tailwind, no component libraries).

## 🎨 Visual Direction: "Midnight Studio"

A cinematic dark aesthetic with sophisticated electric accents, editorial typography, and a real video background — designed to feel like a high-end creative software marketing site.

### Color System
| Token | Value | Purpose |
|-------|-------|---------|
| `--bg-deep` | `#0B0D12` | Primary background |
| `--bg-elevated` | `#11151E` | Section backgrounds |
| `--bg-surface` | `#191F2B` | Cards, modals |
| `--text-primary` | `#F5F4F0` | Headlines |
| `--text-secondary` | `#A4A9B5` | Body copy |
| `--accent-primary` | `#7C6CFF` | Primary CTAs, focus |
| `--accent-secondary` | `#47C8F5` | Secondary actions |
| `--accent-warm` | `#FFB36B` | Highlights, warnings |

### Typography
- **Display**: Space Grotesk (variable 300-700) — geometric, editorial
- **UI**: Inter (variable 300-600) — clean, technical
- Fluid clamp-based scaling, no fixed breakpoints for type

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## 📸 Screenshots

| View | File | Dimensions |
|------|------|------------|
| Desktop Full | `screenshots/desktop-full-page.png` | 1440 × 9659px |
| Desktop Hero | `screenshots/desktop-hero.png` | 1440 × 760px |
| Mobile Full | `screenshots/mobile-full-page.png` | 375 × 13530px |

All captured via Playwright at actual viewport sizes.

---

## 🏗️ Project Structure

```
src/
├── index.css              # Global design tokens, utilities, reveal system
├── App.jsx                # Root component
├── main.jsx               # Entry point
├── hooks/
│   └── useScrollReveal.js # IntersectionObserver hook
└── components/
    ├── Navbar.jsx/.css    # Floating glass pill, scrolled state, mobile drawer
    ├── Hero.jsx/.css      # Video bg, editorial headline, framed interactive dashboard
    ├── Features.jsx/.css  # Asymmetrical layout, interface graphics
    ├── HowItWorks.jsx/.css # Visual step journey, illustrated windows
    ├── Pricing.jsx/.css   # Monthly/Annual toggle, highlighted Pro card
    ├── Contact.jsx/.css   # Split visual + glass form
    ├── ContactForm.jsx/.css # Validated form, animated success state
    └── Footer.jsx/.css    # Deep surface, grid navigation

public/
├── hero-poster.webp       # Video poster fallback
├── favicon.svg
└── icons.svg

scripts/
└── take-screenshots.js    # Playwright capture script

submission/
└── Proofdesk-Source.zip   # Complete source archive
```

---

## ✨ Key Features

### 1. Cinematic Video Background (Hero)
- Autoplaying, muted, looping MP4 from local/public asset
- Dark gradient overlay for text readability
- Respects `prefers-reduced-motion` (pauses, shows poster)
- High-quality WebP poster fallback

### 2. Floating Glass Navbar
- Pill-shaped, `backdrop-filter: blur(20px)`
- Scrolled state: expands to full-width, deepens glass, adds shadow
- Smooth mobile drawer with animated hamburger

### 3. Interactive Dashboard (Hero)
- Real browser chrome (window controls, address bar)
- Functional tab switching: Feedback / Revisions / Approvals
- Realistic comment threads, revision diffs, approval flow
- Subtle floating notification

### 4. Asymmetrical Features Section
- Alternating text/visual layout
- Three distinct interface graphics (not generic cards)
- Hover elevation with glow
- Staggered scroll reveal

### 5. Visual How It Works
- Large numbered rings with connecting gradient line
- Three illustrated window mockups: Upload → Review → Approve
- Interactive comment markers, threaded discussions

### 6. Premium Pricing
- Monthly/Annual toggle with savings badge
- Highlighted Pro card with gradient wash + glow
- Clean feature lists with check icons

### 7. Split Contact Section
- Left: Abstract animated shape composition with stats window
- Right: Glass form card with real-time validation
- Animated success state with checkmark pop

### 8. Deep Footer
- Four-column navigation grid
- Social links with hover transforms
- Subtle top highlight line

---

## ⚡ Performance & Accessibility

| Aspect | Implementation |
|--------|---------------|
| **Animations** | CSS `transform` + `opacity` only; no layout triggers |
| **Scroll Reveals** | `IntersectionObserver` — once only, staggered |
| **Video** | Native `<video>`, no React state on frames, preload metadata |
| **Reduced Motion** | Disables video autoplay, all transitions → 0.01ms, instant reveals |
| **Focus States** | Visible 2px accent-primary outline on all interactive elements |
| **Semantic HTML** | Proper landmarks, ARIA labels, heading hierarchy |
| **Form Validation** | Inline errors, `aria-invalid`, `aria-describedby`, live regions |

---

## 📦 Submission Archive

**Location**: `submission/Proofdesk-Source.zip` (4.9 MB, 43 files)

Contains:
- Complete source code (`src/`, `public/`)
- Documentation (`README.md`, `DESIGN-NOTES.md`)
- Screenshots (3 Playwright captures at proper viewport sizes)
- Build configuration and scripts
- Excludes: `node_modules/`, `.git/`, `dist/`, temp files

---

## 🎬 Media Assets

| Asset | Source | License |
|-------|--------|---------|
| Hero Video | Mixkit (mixkit.co) | Free for commercial use |
| Hero Poster | Placeholder — replace with Pexels/Unsplash dark workspace | Royalty-free |
| Fonts (Space Grotesk, Inter) | Google Fonts | SIL Open Font License |

---

## 📋 Assignment Compliance

✅ All 7 required sections: Navbar, Hero, Features, How It Works, Pricing, Contact Form, Footer  
✅ Smooth-scroll navigation with `scroll-margin-top` offset  
✅ Mobile hamburger menu (open/close/select)  
✅ Hero CTAs → Contact / How It Works  
✅ Pricing CTAs → Contact  
✅ Footer links functional  
✅ Form validation (empty, whitespace, invalid email)  
✅ Form success state (no auto-hide)  
✅ "Send another message" reset  
✅ Responsive: 1440px, 1024px, 768px, 375px breakpoints  
✅ No horizontal overflow  
✅ `prefers-reduced-motion` respected  
✅ Production build passes (32 modules, no errors)  
✅ Real ZIP archive created  
✅ Screenshots captured at required sizes  

---

## 🔧 Tech Stack

- **React 19** + **Vite 8**
- **JavaScript (ESM)** + **CSS** (custom properties, no preprocessors)
- **Google Fonts** (Space Grotesk, Inter) with `font-display: swap`
- **Playwright** for automated screenshots
- **Zero** animation libraries, **zero** UI component libraries

---

## 📝 License

Frontend assignment for Sankar Group — not a real product.