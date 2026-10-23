# ⚡ Amged Badawy — Modern 3D Frontend Portfolio

&lt;div align=&quot;center&quot;&gt;

[](https://nextjs.org/)
[](https://react.dev/)
[](https://www.typescriptlang.org/)
[](https://tailwindcss.com/)
[](https://vercel.com/)
[](https://opensource.org/licenses/MIT)

**A high-performance, dark-themed, 3D interactive portfolio built to showcase production-ready Frontend Engineering craft, bilingual RTL/LTR architectural design, and modern web application development.**

[🚀 Explore Live Demo](https://www.google.com/search?q=https://portfolio-amgadbadawy.vercel.app) • [📄 Download Resume](https://www.google.com/search?q=https://portfolio-amgadbadawy.vercel.app/AmgedBadawy-CV.pdf) • [💬 Get in Touch](mailto:amgedbadawy04@gmail.com)

&lt;/div&gt;

---

## 🌟 Overview & Engineering Highlights

This portfolio is not just a static personal showcase—it is an interactive web application designed to demonstrate real-world **Next.js App Router**, **TypeScript**, and **Tailwind CSS** best practices. It highlights component reusability, resilient UI state handling, performance optimization, and accessibility.

### Key Features

- **🪐 60fps 3D Canvas & Particle Physics:**
  - Full-screen interactive 3D constellation particle network (`InteractiveBackground.tsx`) that reacts dynamically to mouse proximity across all viewports without external heavy 3D engine bundles.
  - Interactive 3D geometric tech core canvas (`Hero.tsx`) rendered in real-time mathematics with depth scaling.

- **🎴 Reusable 3D Perspective Tilt & Cursor Spotlight (`<TiltCard>`):**
  - Modular, accessible wrapper calculating real-time 3D rotation (`rotateX`, `rotateY`) and cursor-tracking radial spotlight glows across all featured project and certificate cards.

- **🧪 Interactive Frontend Architecture Lab (`FrontendLab.tsx`):**
  - **Live State Machine Simulator:** Allows recruiters and engineering leads to test production UI states in real time:
    - `Data-Ready (Loaded)`
    - `Skeleton Loading (Anti-CLS Layout Shifting)`
    - `Error Boundary & Action Recovery (Retry Handler)`
    - `Empty / Not-Found Result Filtering`
  - **Live Bi-Directional (RTL ↔ LTR) Switching:** Demonstrates native Arabic Right-to-Left and English Left-to-Right layout switching using CSS logical properties.

- **⌨️ Accessible Command Palette (`Ctrl + K` / `⌘ + K`):**
  - Quick action modal with keyboard event listeners, smooth in-page element scrolling, search filtering, and escape handlers (`CommandPalette.tsx`).

- **🖼️ Built-in Certificate Lightbox Modal:**
  - Custom in-app modal previewing high-resolution training credentials (CCIC, COURSSAT UK, Manara) with keyboard dismiss (`ESC`) and backdrop blur.

- **📈 Real-Time Reading Progress & Scroll Spying:**
  - 2px top gradient scroll indicator paired with dynamic active section detection in the sticky glassmorphic navbar.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) (App Router) | Server-Side Rendering (SSR), Static Generation (SSG), and route-based architecture |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict end-to-end type safety, strongly typed data schemas, and interfaces |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS, modern design tokens, responsive breakpoints, and dark mode palette |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom SVGs | Lightweight SVG icons and custom brand vector marks (GitHub, LinkedIn) |
| **SEO & Social** | Next.js Metadata API | Dynamic OpenGraph previews, automated `sitemap.ts`, and `robots.ts` |
| **Deployment** | [Vercel](https://vercel.com/) | Continuous integration, edge CDN caching, and automated Git production deployments |

---

## 📂 Project Directory Structure

```text
portfolio/
├── public/
│   ├── AmgedBadawy-CV.pdf          # Downloadable PDF resume
│   ├── certificates/               # Verified credentials (CCIC, English tracks, Manara)
│   │   ├── ccic.png
│   │   ├── english-course1.png
│   │   └── english-course2.png
│   └── projects/                   # Optimized 2.16:1 showcase screenshots
│       ├── masar.png
│       ├── flowdesk.png
│       └── budgetly.png
├── src/
│   ├── app/
│   │   ├── globals.css             # Tailwind v4, custom dark scrollbar, technical grid pattern
│   │   ├── icon.tsx                # Next.js dynamic OpenGraph branded favicon (AB)
│   │   ├── layout.tsx              # Root HTML, Geist typography, global SEO metadata
│   │   ├── page.tsx                # Composition of sections and interactive layers
│   │   ├── robots.ts               # Automated search engine crawler indexing rules
│   │   └── sitemap.ts              # Production sitemap generator
│   ├── components/
│   │   ├── CommandPalette.tsx      # Ctrl+K quick-action keyboard dialog
│   │   ├── ContactFooter.tsx       # Direct Gmail web compose, WhatsApp & clipboard copy
│   │   ├── FrontendLab.tsx         # Live RTL/LTR switcher and 4-state simulation lab
│   │   ├── Hero.tsx                # 3D interactive code card & geometric canvas core
│   │   ├── Icons.tsx               # Pixel-perfect custom SVG vector icons
│   │   ├── InteractiveBackground.tsx # Full-page 3D interactive particle constellation
│   │   ├── Navbar.tsx              # Sticky glassmorphic nav with top scroll progress bar
│   │   ├── Projects.tsx            # Filterable projects showcase with browser mockups
│   │   ├── SkillsAndEducation.tsx  # Bento grid skills & certificate lightbox gallery
│   │   ├── TechMarquee.tsx         # Seamless infinite horizontal technology ticker
│   │   └── TiltCard.tsx            # Reusable 3D perspective tilt & spotlight wrapper
│   └── data/
│       └── portfolio.ts            # Centralized, strongly-typed portfolio data repository
├── package.json
├── tsconfig.json
└── README.md
```

---

## 💻 Featured Projects Highlighted

### 1. [Masar — Government Services Guide](https://masar-frontend-ten.vercel.app/)
- **Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, RTL Architecture
- **Highlights:** Built an Arabic-first government service portal explaining complex civic procedures, required documents, and official authorities. Features a clean repository abstraction layer, instant search, and graceful error/loading state handling.

### 2. [FlowDesk — Workflow Productivity Interface](https://flow-desk-rho-ten.vercel.app/)
- **Tech Stack:** HTML5, Modern CSS3, JavaScript, Responsive UI/UX
- **Highlights:** Developed a distraction-free productivity web interface with interactive Kanban boards, sprint completion metrics, team task timelines, and mobile-first CSS Grid/Flexbox layouts.

### 3. Budgetly — Smart Home Budget Management System
- **Tech Stack:** Frontend & ML, System Architecture, User Flows, Python
- **Highlights:** Graduation project developed at Mansoura University featuring income tracking, automated expense classification with interactive donut charts, bill reminders, and AI-assisted dietary meal recommendations tailored to monthly budgets.

---

## 🚀 Getting Started (Local Development)

Follow these steps to run the portfolio locally on your machine:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18.18+ or 20+) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AmgadBadawy/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000) to explore the live local preview.

### Production Build & Verification

To verify production types, linting, and compile the optimized standalone bundle:

```bash
npm run build
npm run start
```

---

## 📬 Contact & Connect

- **Engineer:** Amged Ibrahim Mohamed Badawy
- **Role:** Junior Frontend Developer
- **Location:** Cairo, Nasr City, Egypt
- **Email:** [amgedbadawy04@gmail.com](mailto:amgedbadawy04@gmail.com)
- **LinkedIn:** [linkedin.com/in/amged-badawy-7a48b1177](https://www.linkedin.com/in/amged-badawy-7a48b1177/)
- **GitHub:** [github.com/AmgadBadawy](https://github.com/AmgadBadawy)
- **WhatsApp:** [+20 114 464 9776](https://wa.me/201144649776)

---

&lt;div align=&quot;center&quot;&gt;
  &lt;sub&gt;Designed &amp; Developed with precision by Amged Badawy • Built with Next.js, TypeScript &amp; Tailwind CSS&lt;/sub&gt;
&lt;/div&gt;
