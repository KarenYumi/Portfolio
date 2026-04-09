# Karen Yumi — Portfolio

A personal portfolio website built with React and Tailwind CSS, showcasing my work, skills, and personality through a clean dark-themed design with custom animations and a fully responsive layout.

---

## Live Sections

| Section | Description |
|---|---|
| **Hero** | Landing screen with background image and call-to-action |
| **About** | Personal introduction, location, social links |
| **Resume** | Skills, education, work experience, and language proficiency |
| **Projects** | Showcase of projects with a folder-style carousel |
| **Hobbies** | Bento-grid layout featuring sport, art, drawing, film, and music |

---

## Tech Stack

- **React 19** — UI library
- **Vite 8** — build tool and dev server
- **Tailwind CSS 4** — utility-first styling via Vite plugin
- **Lucide React** — SVG icon library
- **ESLint** — code linting with React-specific rules

---

## Project Structure

```
portfolio/
├── public/
│   └── document/           # Resume PDF
├── src/
│   ├── assets/images/      # All project images and decorative assets
│   ├── components/
│   │   ├── Header.jsx      # Fixed navigation with mobile menu
│   │   ├── Footer.jsx      # Contact info, socials, back-to-top
│   │   ├── HangingCharm.jsx  # Scroll-animated decorative element
│   │   └── FolderCarousel.jsx  # Reusable project carousel
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Resume.jsx
│   │   ├── Projects.jsx
│   │   ├── Hobbies.jsx
│   │   └── Content.jsx     # Section orchestrator
│   ├── App.jsx
│   ├── index.css           # Global styles and custom fonts
│   └── main.jsx
├── vite.config.js
└── package.json
```

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Features

- **Fully responsive** — mobile-first design with breakpoints at `md`, `lg`, and `2xl`
- **Dark theme** — deep zinc palette with vibrant color accents (pink, violet, amber, emerald)
- **Custom typography** — Cinzel, Moirai One, Manrope, and Just Me Again Down Here via Google Fonts
- **Scroll animations** — hanging charm element that rotates based on scroll position
- **Animated vinyl records** — spinning CSS keyframe animations in the Hobbies section
- **Project carousel** — responsive carousel (1 / 2 / 3 columns) with dot pagination
- **Resume download** — direct PDF download from the Resume section
- **Smooth scrolling** — native CSS `scroll-behavior: smooth`

---

## Design Highlights

The portfolio uses a bento-grid approach in the Hobbies section and a folder-metaphor design in Projects, giving it a distinctive, editorial feel rather than a generic template look. Decorative gradients, layered images, and subtle borders create depth without sacrificing readability.

---

## Contact

- **Email:** karen.yumi20@gmail.com
- **LinkedIn:** [karenyumi](https://www.linkedin.com/in/karenyumi)
- **GitHub:** [KarenYumi](https://github.com/KarenYumi)
