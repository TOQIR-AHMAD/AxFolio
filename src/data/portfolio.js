// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Toqir Ahmad',
  role: 'Senior Software Engineer',
  location: 'Lahore, PK',
  email: 'toqirahmad7@gmail.com',
  since: '2021',
  repoCount: 13,
  // Drop your CV at public/resume.pdf (or set a full URL). Leave '' to hide the button.
  resume: '/resume.pdf',
}

export const lede =
  'I architect and ship <b>fast, resilient web platforms</b> — from Laravel back-ends and REST APIs to polished React &amp; Next.js front-ends. Turning ambiguous ideas into production-grade software, one deliberate commit at a time.'

export const about = [
  "I'm a full-stack software engineer who cares as much about how a system holds up under load as how it feels to the person clicking the button. My work sits at the seam between robust back-end architecture and front-end craft — and I'm happiest when both are pulling in the same direction.",
  "Over the past several years I've built <b>e-commerce platforms, real-time applications, admin dashboards and internal tooling</b> — shipping clean, maintainable code that teams can actually build on. I lean on Laravel and Django on the server, React and Next.js on the client, and a disciplined approach to data, testing and deployment throughout.",
  "I'm a believer in <b>always learning, always shipping.</b> Whether it's tightening a query, refining a component API, or mentoring on patterns that scale, I treat every project as a chance to leave the codebase better than I found it.",
]

export const facts = [
  { k: 'Based in', v: 'Lahore, Pakistan', sub: 'Working with teams worldwide' },
  { k: 'Focus', v: 'Full-Stack Engineering', sub: 'Web platforms & SaaS' },
  { k: 'Currently', v: 'Open to work', sub: 'Senior · Full-stack · Freelance' },
]

export const expertise = [
  {
    tag: 'frontend',
    title: 'Interface Engineering',
    desc: 'Accessible, performant interfaces with thoughtful state management and component design that scales with the product.',
    chips: ['React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind', 'MUI'],
  },
  {
    tag: 'backend',
    title: 'APIs & Architecture',
    desc: 'Clean, documented REST APIs and maintainable server architecture with an eye on data integrity and performance.',
    chips: ['Laravel', 'Django', 'PHP', 'MySQL', 'REST'],
  },
  {
    tag: 'platform',
    title: 'Delivery & Tooling',
    desc: 'Containerised, reproducible environments and a Git-first workflow that keeps shipping smooth from local to production.',
    chips: ['Docker', 'Git', 'CI/CD', 'Linux'],
  },
  {
    tag: 'languages',
    title: 'Core Languages',
    desc: 'Comfortable across the stack and close to the metal — from typed JavaScript to systems-level C and C++.',
    chips: ['JavaScript', 'TypeScript', 'PHP', 'C', 'C++'],
  },
  {
    tag: 'design',
    title: 'Product & Design',
    desc: 'Bridging design and engineering — translating Figma and brand into pixel-faithful, responsive builds.',
    chips: ['Figma', 'Adobe XD', 'Photoshop', 'UI/UX'],
  },
  {
    tag: 'domains',
    title: 'What I Build',
    desc: 'End-to-end products: e-commerce, dashboards, CRM/ERP, booking systems, LMS and real-time business tools.',
    chips: ['E-Commerce', 'SaaS', 'Dashboards', 'CRM/ERP'],
  },
]

// Concrete product types shipped — rendered as a tag grid under Expertise.
export const builds = [
  'Website Development',
  'E-Commerce Platforms',
  'SaaS Platforms',
  'Startup MVPs',
  'Admin Dashboards',
  'Analytics Dashboards',
  'CRM Systems',
  'ERP Systems',
  'HRM Systems',
  'LMS Platforms',
  'Booking Systems',
  'Inventory Management Systems',
  'Management Tools',
  'Internal Business Tools',
  'Customer Portals',
  'Real-Time Applications',
  'Enterprise Software',
  'AI Applications',
  'API Development',
  'Web Games',
]

// Each project: tags drive the chips; `repo`/`live` render as separate links;
// `featured: true` promotes a project to a full-width highlighted card.
export const work = [
  {
    title: 'Ecommerce-Web',
    desc: 'A full e-commerce front-end with product browsing, cart and checkout flows — built for speed and a clean shopping experience.',
    tags: ['JavaScript', 'Web', 'Commerce'],
    repo: 'https://github.com/TOQIR-AHMAD/Ecommerce-Web',
    live: '',
    featured: true,
  },
  {
    title: 'razers',
    desc: 'A TypeScript application showcasing typed, component-driven architecture and a maintainable front-end codebase.',
    tags: ['TypeScript', 'App', 'UI'],
    repo: 'https://github.com/TOQIR-AHMAD/razers',
    live: '',
  },
  {
    title: 'sdnet',
    desc: 'A JavaScript project exploring networked, interactive functionality — a practical study in clean client-side logic.',
    tags: ['JavaScript', 'Web'],
    repo: 'https://github.com/TOQIR-AHMAD/sdnet',
    live: '',
  },
  {
    title: 'PortFolio',
    desc: 'A hand-built personal site — responsive layout, considered typography and a focus on fast, accessible markup.',
    tags: ['HTML', 'CSS', 'Live site'],
    repo: 'https://github.com/TOQIR-AHMAD/PortFolio',
    live: 'https://toqir-ahmad.github.io/PortFolio/',
  },
  {
    title: 'Tic-Tac-Toi',
    desc: 'A C++ game implementation with clean game-state logic — a fundamentals-first take on a classic.',
    tags: ['C++', 'Game', 'Logic'],
    repo: 'https://github.com/TOQIR-AHMAD/Tic-Tac-Toi',
    live: '',
  },
]

export const socials = [
  { label: 'GitHub', url: 'https://github.com/TOQIR-AHMAD' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/toqir-ahmad/' },
  { label: 'X / Twitter', url: 'https://www.x.com/Mr_Skipper__' },
  { label: 'Portfolio', url: 'https://toqir-ahmad.github.io/PortFolio/' },
]
