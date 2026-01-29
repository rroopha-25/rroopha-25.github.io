# Portfolio Website PRD - Roopha Rajagopal

## Original Problem Statement
Build a modern, professional portfolio website to showcase Roopha Rajagopal's work as a Product Manager.

## Core Requirements
- **Content**: About Me, Education, Work Experience, Project Case Studies (6), Skills, Blog (2 posts), Contact section
- **Visuals**: Modern design with glass morphism effects
- **Branding**: Coral Pink and Navy Blue theme (dark mode default), White/Grey/Blue for light mode
- **Functionality**: Mobile-responsive, social links (LinkedIn, GitHub), theme toggle

## Tech Stack
- Frontend: React + TailwindCSS
- Data: Mocked in `/app/frontend/src/mock.js`
- No backend required

## What's Been Implemented

### Completed (January 2026)
- [x] Complete multi-section portfolio (Hero, About, Education, Experience, Projects, Skills, Blog, Contact)
- [x] Coral Pink and Navy Blue dark theme with glass morphism
- [x] Mobile-responsive design
- [x] 6 detailed project case studies
- [x] 2 blog posts
- [x] Social links integration
- [x] Section reordering as requested
- [x] Theme toggle (dark/light mode)
- [x] Last name "Rajagopal" in coral pink
- [x] Removed tagline "Ocean. Mountains. Products."
- [x] New hero background pattern with floating geometric shapes
- [x] Light mode theme: White, Grey, Blue color scheme

### Files Structure
```
/app/frontend/src/
├── components/
│   ├── Hero.jsx - Main landing section with new pattern
│   ├── About.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── ThemeToggle.jsx
│   └── ui/ (Shadcn components)
├── context/
│   └── ThemeContext.jsx
├── App.js
├── index.css - Contains theme variables and light mode overrides
└── mock.js - All content data
```

## Backlog / Future Enhancements
- [ ] Downloadable resume/CV button
- [ ] Contact form functionality
- [ ] Project filtering by category
- [ ] Blog pagination
- [ ] SEO optimization
