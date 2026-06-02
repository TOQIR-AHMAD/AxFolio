# Toqir Ahmad — Portfolio (React + Vite)

A single-page senior software engineer portfolio built with React and Vite.

## Run locally

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
├── data/portfolio.js     ← ALL content lives here (edit this to update the site)
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── SectionHead.jsx
│   ├── About.jsx
│   ├── Expertise.jsx
│   ├── Work.jsx
│   └── Contact.jsx
├── useReveal.js          ← scroll-reveal animation hook
├── App.jsx               ← composes all sections
├── main.jsx              ← entry point
└── index.css             ← styles
```

To update your name, role, projects, skills or links, edit **`src/data/portfolio.js`** only.

## Deploy

Run `npm run build` and host the `dist/` folder anywhere static
(Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).
