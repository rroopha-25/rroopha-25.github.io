# Roopha Rajagopal - Portfolio Website PRD

## Original Problem Statement
Build a modern, professional portfolio website for Roopha Rajagopal, a Product Manager. The website should be visually appealing, mobile-responsive, and feature sections for About Me, Education, Work Experience (Volunteering), Projects, Skills, Blog, and Contact.

## User Persona
- **Name**: Roopha Rajagopal
- **Role**: Product Manager
- **Goal**: Showcase professional experience, projects, and thought leadership

## Core Requirements
- Multi-section portfolio: Hero, About, Volunteering, Projects, Skills, Blog, Contact
- Consistent "Coral Pink and Navy Blue" theme
- Functional light/dark mode toggle
- Sticky navigation bar with section links
- Fully responsive design (desktop, tablet, mobile)
- Visually engaging animations

## Tech Stack
- **Frontend**: React, TailwindCSS, Shadcn/UI components
- **Styling**: CSS variables, custom animations (@keyframes)
- **State**: React Context API (ThemeContext)
- **Data**: Centralized mock data (mock.js)

## Architecture
```
/app/frontend/src/
├── components/
│   ├── About.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   └── ThemeToggle.jsx
├── context/
│   └── ThemeContext.jsx
├── App.js
├── index.css
└── mock.js
```

## What's Been Implemented ✅
- [x] All sections: Hero, About, Education, Experience (Volunteering), Projects, Skills, Blog, Contact
- [x] Coral Pink and Navy Blue theme throughout
- [x] Light/Dark mode toggle with proper theme switching
- [x] Sticky navigation bar with smooth scroll
- [x] Responsive design across all breakpoints
- [x] Custom animations (floating, pulsing, spinning)
- [x] Blog with modal detail view
- [x] Contact section with "My Impact in Numbers" grid
- [x] Text on images stays white in light mode (Feb 2025)
- [x] Resume download button removed per user request (Feb 2025)

## Completed Bug Fixes
- [x] Hero section background not changing in light mode - Fixed
- [x] Theme toggle icon not switching correctly - Fixed
- [x] Text visibility issues in light mode - Fixed
- [x] Text on images unreadable in light mode - Fixed (Feb 2025)

## Backlog / Future Tasks
- [ ] P2: Functional contact form (backend integration needed)
- [ ] P3: Blog pagination (if more posts added)
- [ ] P3: CMS integration for dynamic content

## Known Fragile Areas
- `/app/frontend/src/index.css` - Light mode CSS rules are complex with many `!important` overrides. Test both themes after any CSS changes.

## Last Updated
February 2025 - Removed resume button, fixed light mode text on images
